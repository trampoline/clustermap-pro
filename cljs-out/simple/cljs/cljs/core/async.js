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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23365 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23365 = (function (f,fn_handler,meta23366){
this.f = f;
this.fn_handler = fn_handler;
this.meta23366 = meta23366;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23365.cljs$lang$type = true;
cljs.core.async.t23365.cljs$lang$ctorStr = "cljs.core.async/t23365";
cljs.core.async.t23365.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23365");
});
cljs.core.async.t23365.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23365.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23365.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23367){var self__ = this;
var _23367__$1 = this;return self__.meta23366;
});
cljs.core.async.t23365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23367,meta23366__$1){var self__ = this;
var _23367__$1 = this;return (new cljs.core.async.t23365(self__.f,self__.fn_handler,meta23366__$1));
});
cljs.core.async.__GT_t23365 = (function __GT_t23365(f__$1,fn_handler__$1,meta23366){return (new cljs.core.async.t23365(f__$1,fn_handler__$1,meta23366));
});
}
return (new cljs.core.async.t23365(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23369 = buff;if(G__23369)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__23369.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23369.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23369);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23369);
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
{var val_23370 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23370);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_23370,ret){
return (function (){return fn1.call(null,val_23370);
});})(val_23370,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___23371 = n;var x_23372 = (0);while(true){
if((x_23372 < n__4508__auto___23371))
{(a[x_23372] = (0));
{
var G__23373 = (x_23372 + (1));
x_23372 = G__23373;
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
var G__23374 = (i + (1));
i = G__23374;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23378 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23378 = (function (flag,alt_flag,meta23379){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23379 = meta23379;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23378.cljs$lang$type = true;
cljs.core.async.t23378.cljs$lang$ctorStr = "cljs.core.async/t23378";
cljs.core.async.t23378.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23378");
});})(flag))
;
cljs.core.async.t23378.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23378.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t23378.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t23378.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23380){var self__ = this;
var _23380__$1 = this;return self__.meta23379;
});})(flag))
;
cljs.core.async.t23378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23380,meta23379__$1){var self__ = this;
var _23380__$1 = this;return (new cljs.core.async.t23378(self__.flag,self__.alt_flag,meta23379__$1));
});})(flag))
;
cljs.core.async.__GT_t23378 = ((function (flag){
return (function __GT_t23378(flag__$1,alt_flag__$1,meta23379){return (new cljs.core.async.t23378(flag__$1,alt_flag__$1,meta23379));
});})(flag))
;
}
return (new cljs.core.async.t23378(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23384 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23384 = (function (cb,flag,alt_handler,meta23385){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23385 = meta23385;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23384.cljs$lang$type = true;
cljs.core.async.t23384.cljs$lang$ctorStr = "cljs.core.async/t23384";
cljs.core.async.t23384.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23384");
});
cljs.core.async.t23384.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23384.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23384.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23386){var self__ = this;
var _23386__$1 = this;return self__.meta23385;
});
cljs.core.async.t23384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23386,meta23385__$1){var self__ = this;
var _23386__$1 = this;return (new cljs.core.async.t23384(self__.cb,self__.flag,self__.alt_handler,meta23385__$1));
});
cljs.core.async.__GT_t23384 = (function __GT_t23384(cb__$1,flag__$1,alt_handler__$1,meta23385){return (new cljs.core.async.t23384(cb__$1,flag__$1,alt_handler__$1,meta23385));
});
}
return (new cljs.core.async.t23384(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23387_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23387_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23388_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23388_SHARP_,port], null));
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
var G__23389 = (i + (1));
i = G__23389;
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
var alts_BANG___delegate = function (ports,p__23390){var map__23392 = p__23390;var map__23392__$1 = ((cljs.core.seq_QMARK_.call(null,map__23392))?cljs.core.apply.call(null,cljs.core.hash_map,map__23392):map__23392);var opts = map__23392__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23390 = null;if (arguments.length > 1) {
  p__23390 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23390);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23393){
var ports = cljs.core.first(arglist__23393);
var p__23390 = cljs.core.rest(arglist__23393);
return alts_BANG___delegate(ports,p__23390);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__9125__auto___23488 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23488){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23488){
return (function (state_23464){var state_val_23465 = (state_23464[(1)]);if((state_val_23465 === (7)))
{var inst_23460 = (state_23464[(2)]);var state_23464__$1 = state_23464;var statearr_23466_23489 = state_23464__$1;(statearr_23466_23489[(2)] = inst_23460);
(statearr_23466_23489[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23465 === (1)))
{var state_23464__$1 = state_23464;var statearr_23467_23490 = state_23464__$1;(statearr_23467_23490[(2)] = null);
(statearr_23467_23490[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23465 === (4)))
{var inst_23443 = (state_23464[(7)]);var inst_23443__$1 = (state_23464[(2)]);var inst_23444 = (inst_23443__$1 == null);var state_23464__$1 = (function (){var statearr_23468 = state_23464;(statearr_23468[(7)] = inst_23443__$1);
return statearr_23468;
})();if(cljs.core.truth_(inst_23444))
{var statearr_23469_23491 = state_23464__$1;(statearr_23469_23491[(1)] = (5));
} else
{var statearr_23470_23492 = state_23464__$1;(statearr_23470_23492[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23465 === (13)))
{var state_23464__$1 = state_23464;var statearr_23471_23493 = state_23464__$1;(statearr_23471_23493[(2)] = null);
(statearr_23471_23493[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23465 === (6)))
{var inst_23443 = (state_23464[(7)]);var state_23464__$1 = state_23464;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23464__$1,(11),to,inst_23443);
} else
{if((state_val_23465 === (3)))
{var inst_23462 = (state_23464[(2)]);var state_23464__$1 = state_23464;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23464__$1,inst_23462);
} else
{if((state_val_23465 === (12)))
{var state_23464__$1 = state_23464;var statearr_23472_23494 = state_23464__$1;(statearr_23472_23494[(2)] = null);
(statearr_23472_23494[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23465 === (2)))
{var state_23464__$1 = state_23464;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23464__$1,(4),from);
} else
{if((state_val_23465 === (11)))
{var inst_23453 = (state_23464[(2)]);var state_23464__$1 = state_23464;if(cljs.core.truth_(inst_23453))
{var statearr_23473_23495 = state_23464__$1;(statearr_23473_23495[(1)] = (12));
} else
{var statearr_23474_23496 = state_23464__$1;(statearr_23474_23496[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23465 === (9)))
{var state_23464__$1 = state_23464;var statearr_23475_23497 = state_23464__$1;(statearr_23475_23497[(2)] = null);
(statearr_23475_23497[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23465 === (5)))
{var state_23464__$1 = state_23464;if(cljs.core.truth_(close_QMARK_))
{var statearr_23476_23498 = state_23464__$1;(statearr_23476_23498[(1)] = (8));
} else
{var statearr_23477_23499 = state_23464__$1;(statearr_23477_23499[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23465 === (14)))
{var inst_23458 = (state_23464[(2)]);var state_23464__$1 = state_23464;var statearr_23478_23500 = state_23464__$1;(statearr_23478_23500[(2)] = inst_23458);
(statearr_23478_23500[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23465 === (10)))
{var inst_23450 = (state_23464[(2)]);var state_23464__$1 = state_23464;var statearr_23479_23501 = state_23464__$1;(statearr_23479_23501[(2)] = inst_23450);
(statearr_23479_23501[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23465 === (8)))
{var inst_23447 = cljs.core.async.close_BANG_.call(null,to);var state_23464__$1 = state_23464;var statearr_23480_23502 = state_23464__$1;(statearr_23480_23502[(2)] = inst_23447);
(statearr_23480_23502[(1)] = (10));
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
});})(c__9125__auto___23488))
;return ((function (switch__9110__auto__,c__9125__auto___23488){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23484 = [null,null,null,null,null,null,null,null];(statearr_23484[(0)] = state_machine__9111__auto__);
(statearr_23484[(1)] = (1));
return statearr_23484;
});
var state_machine__9111__auto____1 = (function (state_23464){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23464);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23485){if((e23485 instanceof Object))
{var ex__9114__auto__ = e23485;var statearr_23486_23503 = state_23464;(statearr_23486_23503[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23464);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23485;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23504 = state_23464;
state_23464 = G__23504;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23464){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23488))
})();var state__9127__auto__ = (function (){var statearr_23487 = f__9126__auto__.call(null);(statearr_23487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23488);
return statearr_23487;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23488))
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
return (function (p__23688){var vec__23689 = p__23688;var v = cljs.core.nth.call(null,vec__23689,(0),null);var p = cljs.core.nth.call(null,vec__23689,(1),null);var job = vec__23689;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__9125__auto___23871 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23871,res,vec__23689,v,p,job,jobs,results){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23871,res,vec__23689,v,p,job,jobs,results){
return (function (state_23694){var state_val_23695 = (state_23694[(1)]);if((state_val_23695 === (2)))
{var inst_23691 = (state_23694[(2)]);var inst_23692 = cljs.core.async.close_BANG_.call(null,res);var state_23694__$1 = (function (){var statearr_23696 = state_23694;(statearr_23696[(7)] = inst_23691);
return statearr_23696;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23694__$1,inst_23692);
} else
{if((state_val_23695 === (1)))
{var state_23694__$1 = state_23694;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23694__$1,(2),res,v);
} else
{return null;
}
}
});})(c__9125__auto___23871,res,vec__23689,v,p,job,jobs,results))
;return ((function (switch__9110__auto__,c__9125__auto___23871,res,vec__23689,v,p,job,jobs,results){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23700 = [null,null,null,null,null,null,null,null];(statearr_23700[(0)] = state_machine__9111__auto__);
(statearr_23700[(1)] = (1));
return statearr_23700;
});
var state_machine__9111__auto____1 = (function (state_23694){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23694);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23701){if((e23701 instanceof Object))
{var ex__9114__auto__ = e23701;var statearr_23702_23872 = state_23694;(statearr_23702_23872[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23694);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23701;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23873 = state_23694;
state_23694 = G__23873;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23694){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23871,res,vec__23689,v,p,job,jobs,results))
})();var state__9127__auto__ = (function (){var statearr_23703 = f__9126__auto__.call(null);(statearr_23703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23871);
return statearr_23703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23871,res,vec__23689,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__23704){var vec__23705 = p__23704;var v = cljs.core.nth.call(null,vec__23705,(0),null);var p = cljs.core.nth.call(null,vec__23705,(1),null);var job = vec__23705;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___23874 = n;var __23875 = (0);while(true){
if((__23875 < n__4508__auto___23874))
{var G__23706_23876 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__23706_23876) {
case "async":
var c__9125__auto___23878 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23875,c__9125__auto___23878,G__23706_23876,n__4508__auto___23874,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__23875,c__9125__auto___23878,G__23706_23876,n__4508__auto___23874,jobs,results,process,async){
return (function (state_23719){var state_val_23720 = (state_23719[(1)]);if((state_val_23720 === (7)))
{var inst_23715 = (state_23719[(2)]);var state_23719__$1 = state_23719;var statearr_23721_23879 = state_23719__$1;(statearr_23721_23879[(2)] = inst_23715);
(statearr_23721_23879[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23720 === (6)))
{var state_23719__$1 = state_23719;var statearr_23722_23880 = state_23719__$1;(statearr_23722_23880[(2)] = null);
(statearr_23722_23880[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23720 === (5)))
{var state_23719__$1 = state_23719;var statearr_23723_23881 = state_23719__$1;(statearr_23723_23881[(2)] = null);
(statearr_23723_23881[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23720 === (4)))
{var inst_23709 = (state_23719[(2)]);var inst_23710 = async.call(null,inst_23709);var state_23719__$1 = state_23719;if(cljs.core.truth_(inst_23710))
{var statearr_23724_23882 = state_23719__$1;(statearr_23724_23882[(1)] = (5));
} else
{var statearr_23725_23883 = state_23719__$1;(statearr_23725_23883[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23720 === (3)))
{var inst_23717 = (state_23719[(2)]);var state_23719__$1 = state_23719;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23719__$1,inst_23717);
} else
{if((state_val_23720 === (2)))
{var state_23719__$1 = state_23719;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23719__$1,(4),jobs);
} else
{if((state_val_23720 === (1)))
{var state_23719__$1 = state_23719;var statearr_23726_23884 = state_23719__$1;(statearr_23726_23884[(2)] = null);
(statearr_23726_23884[(1)] = (2));
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
});})(__23875,c__9125__auto___23878,G__23706_23876,n__4508__auto___23874,jobs,results,process,async))
;return ((function (__23875,switch__9110__auto__,c__9125__auto___23878,G__23706_23876,n__4508__auto___23874,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23730 = [null,null,null,null,null,null,null];(statearr_23730[(0)] = state_machine__9111__auto__);
(statearr_23730[(1)] = (1));
return statearr_23730;
});
var state_machine__9111__auto____1 = (function (state_23719){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23719);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23731){if((e23731 instanceof Object))
{var ex__9114__auto__ = e23731;var statearr_23732_23885 = state_23719;(statearr_23732_23885[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23719);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23731;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23886 = state_23719;
state_23719 = G__23886;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23719){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__23875,switch__9110__auto__,c__9125__auto___23878,G__23706_23876,n__4508__auto___23874,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23733 = f__9126__auto__.call(null);(statearr_23733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23878);
return statearr_23733;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__23875,c__9125__auto___23878,G__23706_23876,n__4508__auto___23874,jobs,results,process,async))
);

break;
case "compute":
var c__9125__auto___23887 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23875,c__9125__auto___23887,G__23706_23876,n__4508__auto___23874,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__23875,c__9125__auto___23887,G__23706_23876,n__4508__auto___23874,jobs,results,process,async){
return (function (state_23746){var state_val_23747 = (state_23746[(1)]);if((state_val_23747 === (7)))
{var inst_23742 = (state_23746[(2)]);var state_23746__$1 = state_23746;var statearr_23748_23888 = state_23746__$1;(statearr_23748_23888[(2)] = inst_23742);
(statearr_23748_23888[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23747 === (6)))
{var state_23746__$1 = state_23746;var statearr_23749_23889 = state_23746__$1;(statearr_23749_23889[(2)] = null);
(statearr_23749_23889[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23747 === (5)))
{var state_23746__$1 = state_23746;var statearr_23750_23890 = state_23746__$1;(statearr_23750_23890[(2)] = null);
(statearr_23750_23890[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23747 === (4)))
{var inst_23736 = (state_23746[(2)]);var inst_23737 = process.call(null,inst_23736);var state_23746__$1 = state_23746;if(cljs.core.truth_(inst_23737))
{var statearr_23751_23891 = state_23746__$1;(statearr_23751_23891[(1)] = (5));
} else
{var statearr_23752_23892 = state_23746__$1;(statearr_23752_23892[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23747 === (3)))
{var inst_23744 = (state_23746[(2)]);var state_23746__$1 = state_23746;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23746__$1,inst_23744);
} else
{if((state_val_23747 === (2)))
{var state_23746__$1 = state_23746;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23746__$1,(4),jobs);
} else
{if((state_val_23747 === (1)))
{var state_23746__$1 = state_23746;var statearr_23753_23893 = state_23746__$1;(statearr_23753_23893[(2)] = null);
(statearr_23753_23893[(1)] = (2));
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
});})(__23875,c__9125__auto___23887,G__23706_23876,n__4508__auto___23874,jobs,results,process,async))
;return ((function (__23875,switch__9110__auto__,c__9125__auto___23887,G__23706_23876,n__4508__auto___23874,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23757 = [null,null,null,null,null,null,null];(statearr_23757[(0)] = state_machine__9111__auto__);
(statearr_23757[(1)] = (1));
return statearr_23757;
});
var state_machine__9111__auto____1 = (function (state_23746){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23746);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23758){if((e23758 instanceof Object))
{var ex__9114__auto__ = e23758;var statearr_23759_23894 = state_23746;(statearr_23759_23894[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23746);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23758;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23895 = state_23746;
state_23746 = G__23895;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23746){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__23875,switch__9110__auto__,c__9125__auto___23887,G__23706_23876,n__4508__auto___23874,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23760 = f__9126__auto__.call(null);(statearr_23760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23887);
return statearr_23760;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__23875,c__9125__auto___23887,G__23706_23876,n__4508__auto___23874,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__23896 = (__23875 + (1));
__23875 = G__23896;
continue;
}
} else
{}
break;
}
var c__9125__auto___23897 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23897,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23897,jobs,results,process,async){
return (function (state_23782){var state_val_23783 = (state_23782[(1)]);if((state_val_23783 === (9)))
{var inst_23775 = (state_23782[(2)]);var state_23782__$1 = (function (){var statearr_23784 = state_23782;(statearr_23784[(7)] = inst_23775);
return statearr_23784;
})();var statearr_23785_23898 = state_23782__$1;(statearr_23785_23898[(2)] = null);
(statearr_23785_23898[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23783 === (8)))
{var inst_23768 = (state_23782[(8)]);var inst_23773 = (state_23782[(2)]);var state_23782__$1 = (function (){var statearr_23786 = state_23782;(statearr_23786[(9)] = inst_23773);
return statearr_23786;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23782__$1,(9),results,inst_23768);
} else
{if((state_val_23783 === (7)))
{var inst_23778 = (state_23782[(2)]);var state_23782__$1 = state_23782;var statearr_23787_23899 = state_23782__$1;(statearr_23787_23899[(2)] = inst_23778);
(statearr_23787_23899[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23783 === (6)))
{var inst_23763 = (state_23782[(10)]);var inst_23768 = (state_23782[(8)]);var inst_23768__$1 = cljs.core.async.chan.call(null,(1));var inst_23769 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23770 = [inst_23763,inst_23768__$1];var inst_23771 = (new cljs.core.PersistentVector(null,2,(5),inst_23769,inst_23770,null));var state_23782__$1 = (function (){var statearr_23788 = state_23782;(statearr_23788[(8)] = inst_23768__$1);
return statearr_23788;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23782__$1,(8),jobs,inst_23771);
} else
{if((state_val_23783 === (5)))
{var inst_23766 = cljs.core.async.close_BANG_.call(null,jobs);var state_23782__$1 = state_23782;var statearr_23789_23900 = state_23782__$1;(statearr_23789_23900[(2)] = inst_23766);
(statearr_23789_23900[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23783 === (4)))
{var inst_23763 = (state_23782[(10)]);var inst_23763__$1 = (state_23782[(2)]);var inst_23764 = (inst_23763__$1 == null);var state_23782__$1 = (function (){var statearr_23790 = state_23782;(statearr_23790[(10)] = inst_23763__$1);
return statearr_23790;
})();if(cljs.core.truth_(inst_23764))
{var statearr_23791_23901 = state_23782__$1;(statearr_23791_23901[(1)] = (5));
} else
{var statearr_23792_23902 = state_23782__$1;(statearr_23792_23902[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23783 === (3)))
{var inst_23780 = (state_23782[(2)]);var state_23782__$1 = state_23782;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23782__$1,inst_23780);
} else
{if((state_val_23783 === (2)))
{var state_23782__$1 = state_23782;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23782__$1,(4),from);
} else
{if((state_val_23783 === (1)))
{var state_23782__$1 = state_23782;var statearr_23793_23903 = state_23782__$1;(statearr_23793_23903[(2)] = null);
(statearr_23793_23903[(1)] = (2));
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
});})(c__9125__auto___23897,jobs,results,process,async))
;return ((function (switch__9110__auto__,c__9125__auto___23897,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23797 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23797[(0)] = state_machine__9111__auto__);
(statearr_23797[(1)] = (1));
return statearr_23797;
});
var state_machine__9111__auto____1 = (function (state_23782){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23782);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23798){if((e23798 instanceof Object))
{var ex__9114__auto__ = e23798;var statearr_23799_23904 = state_23782;(statearr_23799_23904[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23782);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23798;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23905 = state_23782;
state_23782 = G__23905;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23782){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23897,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23800 = f__9126__auto__.call(null);(statearr_23800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23897);
return statearr_23800;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23897,jobs,results,process,async))
);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,jobs,results,process,async){
return (function (state_23838){var state_val_23839 = (state_23838[(1)]);if((state_val_23839 === (7)))
{var inst_23834 = (state_23838[(2)]);var state_23838__$1 = state_23838;var statearr_23840_23906 = state_23838__$1;(statearr_23840_23906[(2)] = inst_23834);
(statearr_23840_23906[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23839 === (20)))
{var state_23838__$1 = state_23838;var statearr_23841_23907 = state_23838__$1;(statearr_23841_23907[(2)] = null);
(statearr_23841_23907[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23839 === (1)))
{var state_23838__$1 = state_23838;var statearr_23842_23908 = state_23838__$1;(statearr_23842_23908[(2)] = null);
(statearr_23842_23908[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23839 === (4)))
{var inst_23803 = (state_23838[(7)]);var inst_23803__$1 = (state_23838[(2)]);var inst_23804 = (inst_23803__$1 == null);var state_23838__$1 = (function (){var statearr_23843 = state_23838;(statearr_23843[(7)] = inst_23803__$1);
return statearr_23843;
})();if(cljs.core.truth_(inst_23804))
{var statearr_23844_23909 = state_23838__$1;(statearr_23844_23909[(1)] = (5));
} else
{var statearr_23845_23910 = state_23838__$1;(statearr_23845_23910[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23839 === (15)))
{var inst_23816 = (state_23838[(8)]);var state_23838__$1 = state_23838;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23838__$1,(18),to,inst_23816);
} else
{if((state_val_23839 === (21)))
{var inst_23829 = (state_23838[(2)]);var state_23838__$1 = state_23838;var statearr_23846_23911 = state_23838__$1;(statearr_23846_23911[(2)] = inst_23829);
(statearr_23846_23911[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23839 === (13)))
{var inst_23831 = (state_23838[(2)]);var state_23838__$1 = (function (){var statearr_23847 = state_23838;(statearr_23847[(9)] = inst_23831);
return statearr_23847;
})();var statearr_23848_23912 = state_23838__$1;(statearr_23848_23912[(2)] = null);
(statearr_23848_23912[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23839 === (6)))
{var inst_23803 = (state_23838[(7)]);var state_23838__$1 = state_23838;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23838__$1,(11),inst_23803);
} else
{if((state_val_23839 === (17)))
{var inst_23824 = (state_23838[(2)]);var state_23838__$1 = state_23838;if(cljs.core.truth_(inst_23824))
{var statearr_23849_23913 = state_23838__$1;(statearr_23849_23913[(1)] = (19));
} else
{var statearr_23850_23914 = state_23838__$1;(statearr_23850_23914[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23839 === (3)))
{var inst_23836 = (state_23838[(2)]);var state_23838__$1 = state_23838;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23838__$1,inst_23836);
} else
{if((state_val_23839 === (12)))
{var inst_23813 = (state_23838[(10)]);var state_23838__$1 = state_23838;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23838__$1,(14),inst_23813);
} else
{if((state_val_23839 === (2)))
{var state_23838__$1 = state_23838;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23838__$1,(4),results);
} else
{if((state_val_23839 === (19)))
{var state_23838__$1 = state_23838;var statearr_23851_23915 = state_23838__$1;(statearr_23851_23915[(2)] = null);
(statearr_23851_23915[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23839 === (11)))
{var inst_23813 = (state_23838[(2)]);var state_23838__$1 = (function (){var statearr_23852 = state_23838;(statearr_23852[(10)] = inst_23813);
return statearr_23852;
})();var statearr_23853_23916 = state_23838__$1;(statearr_23853_23916[(2)] = null);
(statearr_23853_23916[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23839 === (9)))
{var state_23838__$1 = state_23838;var statearr_23854_23917 = state_23838__$1;(statearr_23854_23917[(2)] = null);
(statearr_23854_23917[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23839 === (5)))
{var state_23838__$1 = state_23838;if(cljs.core.truth_(close_QMARK_))
{var statearr_23855_23918 = state_23838__$1;(statearr_23855_23918[(1)] = (8));
} else
{var statearr_23856_23919 = state_23838__$1;(statearr_23856_23919[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23839 === (14)))
{var inst_23818 = (state_23838[(11)]);var inst_23816 = (state_23838[(8)]);var inst_23816__$1 = (state_23838[(2)]);var inst_23817 = (inst_23816__$1 == null);var inst_23818__$1 = cljs.core.not.call(null,inst_23817);var state_23838__$1 = (function (){var statearr_23857 = state_23838;(statearr_23857[(11)] = inst_23818__$1);
(statearr_23857[(8)] = inst_23816__$1);
return statearr_23857;
})();if(inst_23818__$1)
{var statearr_23858_23920 = state_23838__$1;(statearr_23858_23920[(1)] = (15));
} else
{var statearr_23859_23921 = state_23838__$1;(statearr_23859_23921[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23839 === (16)))
{var inst_23818 = (state_23838[(11)]);var state_23838__$1 = state_23838;var statearr_23860_23922 = state_23838__$1;(statearr_23860_23922[(2)] = inst_23818);
(statearr_23860_23922[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23839 === (10)))
{var inst_23810 = (state_23838[(2)]);var state_23838__$1 = state_23838;var statearr_23861_23923 = state_23838__$1;(statearr_23861_23923[(2)] = inst_23810);
(statearr_23861_23923[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23839 === (18)))
{var inst_23821 = (state_23838[(2)]);var state_23838__$1 = state_23838;var statearr_23862_23924 = state_23838__$1;(statearr_23862_23924[(2)] = inst_23821);
(statearr_23862_23924[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23839 === (8)))
{var inst_23807 = cljs.core.async.close_BANG_.call(null,to);var state_23838__$1 = state_23838;var statearr_23863_23925 = state_23838__$1;(statearr_23863_23925[(2)] = inst_23807);
(statearr_23863_23925[(1)] = (10));
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
var state_machine__9111__auto____0 = (function (){var statearr_23867 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23867[(0)] = state_machine__9111__auto__);
(statearr_23867[(1)] = (1));
return statearr_23867;
});
var state_machine__9111__auto____1 = (function (state_23838){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23838);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23868){if((e23868 instanceof Object))
{var ex__9114__auto__ = e23868;var statearr_23869_23926 = state_23838;(statearr_23869_23926[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23838);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23868;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23927 = state_23838;
state_23838 = G__23927;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23838){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23870 = f__9126__auto__.call(null);(statearr_23870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_23870;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__9125__auto___24028 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24028,tc,fc){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24028,tc,fc){
return (function (state_24003){var state_val_24004 = (state_24003[(1)]);if((state_val_24004 === (7)))
{var inst_23999 = (state_24003[(2)]);var state_24003__$1 = state_24003;var statearr_24005_24029 = state_24003__$1;(statearr_24005_24029[(2)] = inst_23999);
(statearr_24005_24029[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (1)))
{var state_24003__$1 = state_24003;var statearr_24006_24030 = state_24003__$1;(statearr_24006_24030[(2)] = null);
(statearr_24006_24030[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (4)))
{var inst_23980 = (state_24003[(7)]);var inst_23980__$1 = (state_24003[(2)]);var inst_23981 = (inst_23980__$1 == null);var state_24003__$1 = (function (){var statearr_24007 = state_24003;(statearr_24007[(7)] = inst_23980__$1);
return statearr_24007;
})();if(cljs.core.truth_(inst_23981))
{var statearr_24008_24031 = state_24003__$1;(statearr_24008_24031[(1)] = (5));
} else
{var statearr_24009_24032 = state_24003__$1;(statearr_24009_24032[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (13)))
{var state_24003__$1 = state_24003;var statearr_24010_24033 = state_24003__$1;(statearr_24010_24033[(2)] = null);
(statearr_24010_24033[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (6)))
{var inst_23980 = (state_24003[(7)]);var inst_23986 = p.call(null,inst_23980);var state_24003__$1 = state_24003;if(cljs.core.truth_(inst_23986))
{var statearr_24011_24034 = state_24003__$1;(statearr_24011_24034[(1)] = (9));
} else
{var statearr_24012_24035 = state_24003__$1;(statearr_24012_24035[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (3)))
{var inst_24001 = (state_24003[(2)]);var state_24003__$1 = state_24003;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24003__$1,inst_24001);
} else
{if((state_val_24004 === (12)))
{var state_24003__$1 = state_24003;var statearr_24013_24036 = state_24003__$1;(statearr_24013_24036[(2)] = null);
(statearr_24013_24036[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (2)))
{var state_24003__$1 = state_24003;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24003__$1,(4),ch);
} else
{if((state_val_24004 === (11)))
{var inst_23980 = (state_24003[(7)]);var inst_23990 = (state_24003[(2)]);var state_24003__$1 = state_24003;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24003__$1,(8),inst_23990,inst_23980);
} else
{if((state_val_24004 === (9)))
{var state_24003__$1 = state_24003;var statearr_24014_24037 = state_24003__$1;(statearr_24014_24037[(2)] = tc);
(statearr_24014_24037[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (5)))
{var inst_23983 = cljs.core.async.close_BANG_.call(null,tc);var inst_23984 = cljs.core.async.close_BANG_.call(null,fc);var state_24003__$1 = (function (){var statearr_24015 = state_24003;(statearr_24015[(8)] = inst_23983);
return statearr_24015;
})();var statearr_24016_24038 = state_24003__$1;(statearr_24016_24038[(2)] = inst_23984);
(statearr_24016_24038[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (14)))
{var inst_23997 = (state_24003[(2)]);var state_24003__$1 = state_24003;var statearr_24017_24039 = state_24003__$1;(statearr_24017_24039[(2)] = inst_23997);
(statearr_24017_24039[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (10)))
{var state_24003__$1 = state_24003;var statearr_24018_24040 = state_24003__$1;(statearr_24018_24040[(2)] = fc);
(statearr_24018_24040[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (8)))
{var inst_23992 = (state_24003[(2)]);var state_24003__$1 = state_24003;if(cljs.core.truth_(inst_23992))
{var statearr_24019_24041 = state_24003__$1;(statearr_24019_24041[(1)] = (12));
} else
{var statearr_24020_24042 = state_24003__$1;(statearr_24020_24042[(1)] = (13));
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
});})(c__9125__auto___24028,tc,fc))
;return ((function (switch__9110__auto__,c__9125__auto___24028,tc,fc){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24024 = [null,null,null,null,null,null,null,null,null];(statearr_24024[(0)] = state_machine__9111__auto__);
(statearr_24024[(1)] = (1));
return statearr_24024;
});
var state_machine__9111__auto____1 = (function (state_24003){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24003);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24025){if((e24025 instanceof Object))
{var ex__9114__auto__ = e24025;var statearr_24026_24043 = state_24003;(statearr_24026_24043[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24003);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24025;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24044 = state_24003;
state_24003 = G__24044;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24003){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24028,tc,fc))
})();var state__9127__auto__ = (function (){var statearr_24027 = f__9126__auto__.call(null);(statearr_24027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24028);
return statearr_24027;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24028,tc,fc))
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
return (function (state_24091){var state_val_24092 = (state_24091[(1)]);if((state_val_24092 === (7)))
{var inst_24087 = (state_24091[(2)]);var state_24091__$1 = state_24091;var statearr_24093_24109 = state_24091__$1;(statearr_24093_24109[(2)] = inst_24087);
(statearr_24093_24109[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24092 === (6)))
{var inst_24077 = (state_24091[(7)]);var inst_24080 = (state_24091[(8)]);var inst_24084 = f.call(null,inst_24077,inst_24080);var inst_24077__$1 = inst_24084;var state_24091__$1 = (function (){var statearr_24094 = state_24091;(statearr_24094[(7)] = inst_24077__$1);
return statearr_24094;
})();var statearr_24095_24110 = state_24091__$1;(statearr_24095_24110[(2)] = null);
(statearr_24095_24110[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24092 === (5)))
{var inst_24077 = (state_24091[(7)]);var state_24091__$1 = state_24091;var statearr_24096_24111 = state_24091__$1;(statearr_24096_24111[(2)] = inst_24077);
(statearr_24096_24111[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24092 === (4)))
{var inst_24080 = (state_24091[(8)]);var inst_24080__$1 = (state_24091[(2)]);var inst_24081 = (inst_24080__$1 == null);var state_24091__$1 = (function (){var statearr_24097 = state_24091;(statearr_24097[(8)] = inst_24080__$1);
return statearr_24097;
})();if(cljs.core.truth_(inst_24081))
{var statearr_24098_24112 = state_24091__$1;(statearr_24098_24112[(1)] = (5));
} else
{var statearr_24099_24113 = state_24091__$1;(statearr_24099_24113[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24092 === (3)))
{var inst_24089 = (state_24091[(2)]);var state_24091__$1 = state_24091;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24091__$1,inst_24089);
} else
{if((state_val_24092 === (2)))
{var state_24091__$1 = state_24091;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24091__$1,(4),ch);
} else
{if((state_val_24092 === (1)))
{var inst_24077 = init;var state_24091__$1 = (function (){var statearr_24100 = state_24091;(statearr_24100[(7)] = inst_24077);
return statearr_24100;
})();var statearr_24101_24114 = state_24091__$1;(statearr_24101_24114[(2)] = null);
(statearr_24101_24114[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_24105 = [null,null,null,null,null,null,null,null,null];(statearr_24105[(0)] = state_machine__9111__auto__);
(statearr_24105[(1)] = (1));
return statearr_24105;
});
var state_machine__9111__auto____1 = (function (state_24091){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24091);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24106){if((e24106 instanceof Object))
{var ex__9114__auto__ = e24106;var statearr_24107_24115 = state_24091;(statearr_24107_24115[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24091);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24106;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24116 = state_24091;
state_24091 = G__24116;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24091){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24108 = f__9126__auto__.call(null);(statearr_24108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24108;
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
return (function (state_24190){var state_val_24191 = (state_24190[(1)]);if((state_val_24191 === (7)))
{var inst_24172 = (state_24190[(2)]);var state_24190__$1 = state_24190;var statearr_24192_24215 = state_24190__$1;(statearr_24192_24215[(2)] = inst_24172);
(statearr_24192_24215[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24191 === (1)))
{var inst_24166 = cljs.core.seq.call(null,coll);var inst_24167 = inst_24166;var state_24190__$1 = (function (){var statearr_24193 = state_24190;(statearr_24193[(7)] = inst_24167);
return statearr_24193;
})();var statearr_24194_24216 = state_24190__$1;(statearr_24194_24216[(2)] = null);
(statearr_24194_24216[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24191 === (4)))
{var inst_24167 = (state_24190[(7)]);var inst_24170 = cljs.core.first.call(null,inst_24167);var state_24190__$1 = state_24190;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24190__$1,(7),ch,inst_24170);
} else
{if((state_val_24191 === (13)))
{var inst_24184 = (state_24190[(2)]);var state_24190__$1 = state_24190;var statearr_24195_24217 = state_24190__$1;(statearr_24195_24217[(2)] = inst_24184);
(statearr_24195_24217[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24191 === (6)))
{var inst_24175 = (state_24190[(2)]);var state_24190__$1 = state_24190;if(cljs.core.truth_(inst_24175))
{var statearr_24196_24218 = state_24190__$1;(statearr_24196_24218[(1)] = (8));
} else
{var statearr_24197_24219 = state_24190__$1;(statearr_24197_24219[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24191 === (3)))
{var inst_24188 = (state_24190[(2)]);var state_24190__$1 = state_24190;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24190__$1,inst_24188);
} else
{if((state_val_24191 === (12)))
{var state_24190__$1 = state_24190;var statearr_24198_24220 = state_24190__$1;(statearr_24198_24220[(2)] = null);
(statearr_24198_24220[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24191 === (2)))
{var inst_24167 = (state_24190[(7)]);var state_24190__$1 = state_24190;if(cljs.core.truth_(inst_24167))
{var statearr_24199_24221 = state_24190__$1;(statearr_24199_24221[(1)] = (4));
} else
{var statearr_24200_24222 = state_24190__$1;(statearr_24200_24222[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24191 === (11)))
{var inst_24181 = cljs.core.async.close_BANG_.call(null,ch);var state_24190__$1 = state_24190;var statearr_24201_24223 = state_24190__$1;(statearr_24201_24223[(2)] = inst_24181);
(statearr_24201_24223[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24191 === (9)))
{var state_24190__$1 = state_24190;if(cljs.core.truth_(close_QMARK_))
{var statearr_24202_24224 = state_24190__$1;(statearr_24202_24224[(1)] = (11));
} else
{var statearr_24203_24225 = state_24190__$1;(statearr_24203_24225[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24191 === (5)))
{var inst_24167 = (state_24190[(7)]);var state_24190__$1 = state_24190;var statearr_24204_24226 = state_24190__$1;(statearr_24204_24226[(2)] = inst_24167);
(statearr_24204_24226[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24191 === (10)))
{var inst_24186 = (state_24190[(2)]);var state_24190__$1 = state_24190;var statearr_24205_24227 = state_24190__$1;(statearr_24205_24227[(2)] = inst_24186);
(statearr_24205_24227[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24191 === (8)))
{var inst_24167 = (state_24190[(7)]);var inst_24177 = cljs.core.next.call(null,inst_24167);var inst_24167__$1 = inst_24177;var state_24190__$1 = (function (){var statearr_24206 = state_24190;(statearr_24206[(7)] = inst_24167__$1);
return statearr_24206;
})();var statearr_24207_24228 = state_24190__$1;(statearr_24207_24228[(2)] = null);
(statearr_24207_24228[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_24211 = [null,null,null,null,null,null,null,null];(statearr_24211[(0)] = state_machine__9111__auto__);
(statearr_24211[(1)] = (1));
return statearr_24211;
});
var state_machine__9111__auto____1 = (function (state_24190){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24190);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24212){if((e24212 instanceof Object))
{var ex__9114__auto__ = e24212;var statearr_24213_24229 = state_24190;(statearr_24213_24229[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24190);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24212;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24230 = state_24190;
state_24190 = G__24230;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24190){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24214 = f__9126__auto__.call(null);(statearr_24214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24214;
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
cljs.core.async.Mux = (function (){var obj24232 = {};return obj24232;
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
cljs.core.async.Mult = (function (){var obj24234 = {};return obj24234;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24456 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24456 = (function (cs,ch,mult,meta24457){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24457 = meta24457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24456.cljs$lang$type = true;
cljs.core.async.t24456.cljs$lang$ctorStr = "cljs.core.async/t24456";
cljs.core.async.t24456.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24456");
});})(cs))
;
cljs.core.async.t24456.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24456.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24456.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24456.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24456.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24456.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24456.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24458){var self__ = this;
var _24458__$1 = this;return self__.meta24457;
});})(cs))
;
cljs.core.async.t24456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24458,meta24457__$1){var self__ = this;
var _24458__$1 = this;return (new cljs.core.async.t24456(self__.cs,self__.ch,self__.mult,meta24457__$1));
});})(cs))
;
cljs.core.async.__GT_t24456 = ((function (cs){
return (function __GT_t24456(cs__$1,ch__$1,mult__$1,meta24457){return (new cljs.core.async.t24456(cs__$1,ch__$1,mult__$1,meta24457));
});})(cs))
;
}
return (new cljs.core.async.t24456(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__9125__auto___24677 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24677,cs,m,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24677,cs,m,dchan,dctr,done){
return (function (state_24589){var state_val_24590 = (state_24589[(1)]);if((state_val_24590 === (7)))
{var inst_24585 = (state_24589[(2)]);var state_24589__$1 = state_24589;var statearr_24591_24678 = state_24589__$1;(statearr_24591_24678[(2)] = inst_24585);
(statearr_24591_24678[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (20)))
{var inst_24490 = (state_24589[(7)]);var inst_24500 = cljs.core.first.call(null,inst_24490);var inst_24501 = cljs.core.nth.call(null,inst_24500,(0),null);var inst_24502 = cljs.core.nth.call(null,inst_24500,(1),null);var state_24589__$1 = (function (){var statearr_24592 = state_24589;(statearr_24592[(8)] = inst_24501);
return statearr_24592;
})();if(cljs.core.truth_(inst_24502))
{var statearr_24593_24679 = state_24589__$1;(statearr_24593_24679[(1)] = (22));
} else
{var statearr_24594_24680 = state_24589__$1;(statearr_24594_24680[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (27)))
{var inst_24537 = (state_24589[(9)]);var inst_24530 = (state_24589[(10)]);var inst_24532 = (state_24589[(11)]);var inst_24461 = (state_24589[(12)]);var inst_24537__$1 = cljs.core._nth.call(null,inst_24530,inst_24532);var inst_24538 = cljs.core.async.put_BANG_.call(null,inst_24537__$1,inst_24461,done);var state_24589__$1 = (function (){var statearr_24595 = state_24589;(statearr_24595[(9)] = inst_24537__$1);
return statearr_24595;
})();if(cljs.core.truth_(inst_24538))
{var statearr_24596_24681 = state_24589__$1;(statearr_24596_24681[(1)] = (30));
} else
{var statearr_24597_24682 = state_24589__$1;(statearr_24597_24682[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (1)))
{var state_24589__$1 = state_24589;var statearr_24598_24683 = state_24589__$1;(statearr_24598_24683[(2)] = null);
(statearr_24598_24683[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (24)))
{var inst_24490 = (state_24589[(7)]);var inst_24507 = (state_24589[(2)]);var inst_24508 = cljs.core.next.call(null,inst_24490);var inst_24470 = inst_24508;var inst_24471 = null;var inst_24472 = (0);var inst_24473 = (0);var state_24589__$1 = (function (){var statearr_24599 = state_24589;(statearr_24599[(13)] = inst_24470);
(statearr_24599[(14)] = inst_24507);
(statearr_24599[(15)] = inst_24472);
(statearr_24599[(16)] = inst_24471);
(statearr_24599[(17)] = inst_24473);
return statearr_24599;
})();var statearr_24600_24684 = state_24589__$1;(statearr_24600_24684[(2)] = null);
(statearr_24600_24684[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (39)))
{var state_24589__$1 = state_24589;var statearr_24604_24685 = state_24589__$1;(statearr_24604_24685[(2)] = null);
(statearr_24604_24685[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (4)))
{var inst_24461 = (state_24589[(12)]);var inst_24461__$1 = (state_24589[(2)]);var inst_24462 = (inst_24461__$1 == null);var state_24589__$1 = (function (){var statearr_24605 = state_24589;(statearr_24605[(12)] = inst_24461__$1);
return statearr_24605;
})();if(cljs.core.truth_(inst_24462))
{var statearr_24606_24686 = state_24589__$1;(statearr_24606_24686[(1)] = (5));
} else
{var statearr_24607_24687 = state_24589__$1;(statearr_24607_24687[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (15)))
{var inst_24470 = (state_24589[(13)]);var inst_24472 = (state_24589[(15)]);var inst_24471 = (state_24589[(16)]);var inst_24473 = (state_24589[(17)]);var inst_24486 = (state_24589[(2)]);var inst_24487 = (inst_24473 + (1));var tmp24601 = inst_24470;var tmp24602 = inst_24472;var tmp24603 = inst_24471;var inst_24470__$1 = tmp24601;var inst_24471__$1 = tmp24603;var inst_24472__$1 = tmp24602;var inst_24473__$1 = inst_24487;var state_24589__$1 = (function (){var statearr_24608 = state_24589;(statearr_24608[(13)] = inst_24470__$1);
(statearr_24608[(15)] = inst_24472__$1);
(statearr_24608[(16)] = inst_24471__$1);
(statearr_24608[(17)] = inst_24473__$1);
(statearr_24608[(18)] = inst_24486);
return statearr_24608;
})();var statearr_24609_24688 = state_24589__$1;(statearr_24609_24688[(2)] = null);
(statearr_24609_24688[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (21)))
{var inst_24511 = (state_24589[(2)]);var state_24589__$1 = state_24589;var statearr_24613_24689 = state_24589__$1;(statearr_24613_24689[(2)] = inst_24511);
(statearr_24613_24689[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (31)))
{var inst_24537 = (state_24589[(9)]);var inst_24541 = done.call(null,null);var inst_24542 = cljs.core.async.untap_STAR_.call(null,m,inst_24537);var state_24589__$1 = (function (){var statearr_24614 = state_24589;(statearr_24614[(19)] = inst_24541);
return statearr_24614;
})();var statearr_24615_24690 = state_24589__$1;(statearr_24615_24690[(2)] = inst_24542);
(statearr_24615_24690[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (32)))
{var inst_24531 = (state_24589[(20)]);var inst_24530 = (state_24589[(10)]);var inst_24532 = (state_24589[(11)]);var inst_24529 = (state_24589[(21)]);var inst_24544 = (state_24589[(2)]);var inst_24545 = (inst_24532 + (1));var tmp24610 = inst_24531;var tmp24611 = inst_24530;var tmp24612 = inst_24529;var inst_24529__$1 = tmp24612;var inst_24530__$1 = tmp24611;var inst_24531__$1 = tmp24610;var inst_24532__$1 = inst_24545;var state_24589__$1 = (function (){var statearr_24616 = state_24589;(statearr_24616[(22)] = inst_24544);
(statearr_24616[(20)] = inst_24531__$1);
(statearr_24616[(10)] = inst_24530__$1);
(statearr_24616[(11)] = inst_24532__$1);
(statearr_24616[(21)] = inst_24529__$1);
return statearr_24616;
})();var statearr_24617_24691 = state_24589__$1;(statearr_24617_24691[(2)] = null);
(statearr_24617_24691[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (40)))
{var inst_24557 = (state_24589[(23)]);var inst_24561 = done.call(null,null);var inst_24562 = cljs.core.async.untap_STAR_.call(null,m,inst_24557);var state_24589__$1 = (function (){var statearr_24618 = state_24589;(statearr_24618[(24)] = inst_24561);
return statearr_24618;
})();var statearr_24619_24692 = state_24589__$1;(statearr_24619_24692[(2)] = inst_24562);
(statearr_24619_24692[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (33)))
{var inst_24548 = (state_24589[(25)]);var inst_24550 = cljs.core.chunked_seq_QMARK_.call(null,inst_24548);var state_24589__$1 = state_24589;if(inst_24550)
{var statearr_24620_24693 = state_24589__$1;(statearr_24620_24693[(1)] = (36));
} else
{var statearr_24621_24694 = state_24589__$1;(statearr_24621_24694[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (13)))
{var inst_24480 = (state_24589[(26)]);var inst_24483 = cljs.core.async.close_BANG_.call(null,inst_24480);var state_24589__$1 = state_24589;var statearr_24622_24695 = state_24589__$1;(statearr_24622_24695[(2)] = inst_24483);
(statearr_24622_24695[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (22)))
{var inst_24501 = (state_24589[(8)]);var inst_24504 = cljs.core.async.close_BANG_.call(null,inst_24501);var state_24589__$1 = state_24589;var statearr_24623_24696 = state_24589__$1;(statearr_24623_24696[(2)] = inst_24504);
(statearr_24623_24696[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (36)))
{var inst_24548 = (state_24589[(25)]);var inst_24552 = cljs.core.chunk_first.call(null,inst_24548);var inst_24553 = cljs.core.chunk_rest.call(null,inst_24548);var inst_24554 = cljs.core.count.call(null,inst_24552);var inst_24529 = inst_24553;var inst_24530 = inst_24552;var inst_24531 = inst_24554;var inst_24532 = (0);var state_24589__$1 = (function (){var statearr_24624 = state_24589;(statearr_24624[(20)] = inst_24531);
(statearr_24624[(10)] = inst_24530);
(statearr_24624[(11)] = inst_24532);
(statearr_24624[(21)] = inst_24529);
return statearr_24624;
})();var statearr_24625_24697 = state_24589__$1;(statearr_24625_24697[(2)] = null);
(statearr_24625_24697[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (41)))
{var inst_24548 = (state_24589[(25)]);var inst_24564 = (state_24589[(2)]);var inst_24565 = cljs.core.next.call(null,inst_24548);var inst_24529 = inst_24565;var inst_24530 = null;var inst_24531 = (0);var inst_24532 = (0);var state_24589__$1 = (function (){var statearr_24626 = state_24589;(statearr_24626[(27)] = inst_24564);
(statearr_24626[(20)] = inst_24531);
(statearr_24626[(10)] = inst_24530);
(statearr_24626[(11)] = inst_24532);
(statearr_24626[(21)] = inst_24529);
return statearr_24626;
})();var statearr_24627_24698 = state_24589__$1;(statearr_24627_24698[(2)] = null);
(statearr_24627_24698[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (43)))
{var state_24589__$1 = state_24589;var statearr_24628_24699 = state_24589__$1;(statearr_24628_24699[(2)] = null);
(statearr_24628_24699[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (29)))
{var inst_24573 = (state_24589[(2)]);var state_24589__$1 = state_24589;var statearr_24629_24700 = state_24589__$1;(statearr_24629_24700[(2)] = inst_24573);
(statearr_24629_24700[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (44)))
{var inst_24582 = (state_24589[(2)]);var state_24589__$1 = (function (){var statearr_24630 = state_24589;(statearr_24630[(28)] = inst_24582);
return statearr_24630;
})();var statearr_24631_24701 = state_24589__$1;(statearr_24631_24701[(2)] = null);
(statearr_24631_24701[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (6)))
{var inst_24521 = (state_24589[(29)]);var inst_24520 = cljs.core.deref.call(null,cs);var inst_24521__$1 = cljs.core.keys.call(null,inst_24520);var inst_24522 = cljs.core.count.call(null,inst_24521__$1);var inst_24523 = cljs.core.reset_BANG_.call(null,dctr,inst_24522);var inst_24528 = cljs.core.seq.call(null,inst_24521__$1);var inst_24529 = inst_24528;var inst_24530 = null;var inst_24531 = (0);var inst_24532 = (0);var state_24589__$1 = (function (){var statearr_24632 = state_24589;(statearr_24632[(30)] = inst_24523);
(statearr_24632[(29)] = inst_24521__$1);
(statearr_24632[(20)] = inst_24531);
(statearr_24632[(10)] = inst_24530);
(statearr_24632[(11)] = inst_24532);
(statearr_24632[(21)] = inst_24529);
return statearr_24632;
})();var statearr_24633_24702 = state_24589__$1;(statearr_24633_24702[(2)] = null);
(statearr_24633_24702[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (28)))
{var inst_24529 = (state_24589[(21)]);var inst_24548 = (state_24589[(25)]);var inst_24548__$1 = cljs.core.seq.call(null,inst_24529);var state_24589__$1 = (function (){var statearr_24634 = state_24589;(statearr_24634[(25)] = inst_24548__$1);
return statearr_24634;
})();if(inst_24548__$1)
{var statearr_24635_24703 = state_24589__$1;(statearr_24635_24703[(1)] = (33));
} else
{var statearr_24636_24704 = state_24589__$1;(statearr_24636_24704[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (25)))
{var inst_24531 = (state_24589[(20)]);var inst_24532 = (state_24589[(11)]);var inst_24534 = (inst_24532 < inst_24531);var inst_24535 = inst_24534;var state_24589__$1 = state_24589;if(cljs.core.truth_(inst_24535))
{var statearr_24637_24705 = state_24589__$1;(statearr_24637_24705[(1)] = (27));
} else
{var statearr_24638_24706 = state_24589__$1;(statearr_24638_24706[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (34)))
{var state_24589__$1 = state_24589;var statearr_24639_24707 = state_24589__$1;(statearr_24639_24707[(2)] = null);
(statearr_24639_24707[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (17)))
{var state_24589__$1 = state_24589;var statearr_24640_24708 = state_24589__$1;(statearr_24640_24708[(2)] = null);
(statearr_24640_24708[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (3)))
{var inst_24587 = (state_24589[(2)]);var state_24589__$1 = state_24589;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24589__$1,inst_24587);
} else
{if((state_val_24590 === (12)))
{var inst_24516 = (state_24589[(2)]);var state_24589__$1 = state_24589;var statearr_24641_24709 = state_24589__$1;(statearr_24641_24709[(2)] = inst_24516);
(statearr_24641_24709[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (2)))
{var state_24589__$1 = state_24589;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24589__$1,(4),ch);
} else
{if((state_val_24590 === (23)))
{var state_24589__$1 = state_24589;var statearr_24642_24710 = state_24589__$1;(statearr_24642_24710[(2)] = null);
(statearr_24642_24710[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (35)))
{var inst_24571 = (state_24589[(2)]);var state_24589__$1 = state_24589;var statearr_24643_24711 = state_24589__$1;(statearr_24643_24711[(2)] = inst_24571);
(statearr_24643_24711[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (19)))
{var inst_24490 = (state_24589[(7)]);var inst_24494 = cljs.core.chunk_first.call(null,inst_24490);var inst_24495 = cljs.core.chunk_rest.call(null,inst_24490);var inst_24496 = cljs.core.count.call(null,inst_24494);var inst_24470 = inst_24495;var inst_24471 = inst_24494;var inst_24472 = inst_24496;var inst_24473 = (0);var state_24589__$1 = (function (){var statearr_24644 = state_24589;(statearr_24644[(13)] = inst_24470);
(statearr_24644[(15)] = inst_24472);
(statearr_24644[(16)] = inst_24471);
(statearr_24644[(17)] = inst_24473);
return statearr_24644;
})();var statearr_24645_24712 = state_24589__$1;(statearr_24645_24712[(2)] = null);
(statearr_24645_24712[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (11)))
{var inst_24470 = (state_24589[(13)]);var inst_24490 = (state_24589[(7)]);var inst_24490__$1 = cljs.core.seq.call(null,inst_24470);var state_24589__$1 = (function (){var statearr_24646 = state_24589;(statearr_24646[(7)] = inst_24490__$1);
return statearr_24646;
})();if(inst_24490__$1)
{var statearr_24647_24713 = state_24589__$1;(statearr_24647_24713[(1)] = (16));
} else
{var statearr_24648_24714 = state_24589__$1;(statearr_24648_24714[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (9)))
{var inst_24518 = (state_24589[(2)]);var state_24589__$1 = state_24589;var statearr_24649_24715 = state_24589__$1;(statearr_24649_24715[(2)] = inst_24518);
(statearr_24649_24715[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (5)))
{var inst_24468 = cljs.core.deref.call(null,cs);var inst_24469 = cljs.core.seq.call(null,inst_24468);var inst_24470 = inst_24469;var inst_24471 = null;var inst_24472 = (0);var inst_24473 = (0);var state_24589__$1 = (function (){var statearr_24650 = state_24589;(statearr_24650[(13)] = inst_24470);
(statearr_24650[(15)] = inst_24472);
(statearr_24650[(16)] = inst_24471);
(statearr_24650[(17)] = inst_24473);
return statearr_24650;
})();var statearr_24651_24716 = state_24589__$1;(statearr_24651_24716[(2)] = null);
(statearr_24651_24716[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (14)))
{var state_24589__$1 = state_24589;var statearr_24652_24717 = state_24589__$1;(statearr_24652_24717[(2)] = null);
(statearr_24652_24717[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (45)))
{var inst_24579 = (state_24589[(2)]);var state_24589__$1 = state_24589;var statearr_24653_24718 = state_24589__$1;(statearr_24653_24718[(2)] = inst_24579);
(statearr_24653_24718[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (26)))
{var inst_24521 = (state_24589[(29)]);var inst_24575 = (state_24589[(2)]);var inst_24576 = cljs.core.seq.call(null,inst_24521);var state_24589__$1 = (function (){var statearr_24654 = state_24589;(statearr_24654[(31)] = inst_24575);
return statearr_24654;
})();if(inst_24576)
{var statearr_24655_24719 = state_24589__$1;(statearr_24655_24719[(1)] = (42));
} else
{var statearr_24656_24720 = state_24589__$1;(statearr_24656_24720[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (16)))
{var inst_24490 = (state_24589[(7)]);var inst_24492 = cljs.core.chunked_seq_QMARK_.call(null,inst_24490);var state_24589__$1 = state_24589;if(inst_24492)
{var statearr_24657_24721 = state_24589__$1;(statearr_24657_24721[(1)] = (19));
} else
{var statearr_24658_24722 = state_24589__$1;(statearr_24658_24722[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (38)))
{var inst_24568 = (state_24589[(2)]);var state_24589__$1 = state_24589;var statearr_24659_24723 = state_24589__$1;(statearr_24659_24723[(2)] = inst_24568);
(statearr_24659_24723[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (30)))
{var state_24589__$1 = state_24589;var statearr_24660_24724 = state_24589__$1;(statearr_24660_24724[(2)] = null);
(statearr_24660_24724[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (10)))
{var inst_24471 = (state_24589[(16)]);var inst_24473 = (state_24589[(17)]);var inst_24479 = cljs.core._nth.call(null,inst_24471,inst_24473);var inst_24480 = cljs.core.nth.call(null,inst_24479,(0),null);var inst_24481 = cljs.core.nth.call(null,inst_24479,(1),null);var state_24589__$1 = (function (){var statearr_24661 = state_24589;(statearr_24661[(26)] = inst_24480);
return statearr_24661;
})();if(cljs.core.truth_(inst_24481))
{var statearr_24662_24725 = state_24589__$1;(statearr_24662_24725[(1)] = (13));
} else
{var statearr_24663_24726 = state_24589__$1;(statearr_24663_24726[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (18)))
{var inst_24514 = (state_24589[(2)]);var state_24589__$1 = state_24589;var statearr_24664_24727 = state_24589__$1;(statearr_24664_24727[(2)] = inst_24514);
(statearr_24664_24727[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (42)))
{var state_24589__$1 = state_24589;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24589__$1,(45),dchan);
} else
{if((state_val_24590 === (37)))
{var inst_24557 = (state_24589[(23)]);var inst_24548 = (state_24589[(25)]);var inst_24461 = (state_24589[(12)]);var inst_24557__$1 = cljs.core.first.call(null,inst_24548);var inst_24558 = cljs.core.async.put_BANG_.call(null,inst_24557__$1,inst_24461,done);var state_24589__$1 = (function (){var statearr_24665 = state_24589;(statearr_24665[(23)] = inst_24557__$1);
return statearr_24665;
})();if(cljs.core.truth_(inst_24558))
{var statearr_24666_24728 = state_24589__$1;(statearr_24666_24728[(1)] = (39));
} else
{var statearr_24667_24729 = state_24589__$1;(statearr_24667_24729[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24590 === (8)))
{var inst_24472 = (state_24589[(15)]);var inst_24473 = (state_24589[(17)]);var inst_24475 = (inst_24473 < inst_24472);var inst_24476 = inst_24475;var state_24589__$1 = state_24589;if(cljs.core.truth_(inst_24476))
{var statearr_24668_24730 = state_24589__$1;(statearr_24668_24730[(1)] = (10));
} else
{var statearr_24669_24731 = state_24589__$1;(statearr_24669_24731[(1)] = (11));
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
});})(c__9125__auto___24677,cs,m,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___24677,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24673[(0)] = state_machine__9111__auto__);
(statearr_24673[(1)] = (1));
return statearr_24673;
});
var state_machine__9111__auto____1 = (function (state_24589){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24589);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24674){if((e24674 instanceof Object))
{var ex__9114__auto__ = e24674;var statearr_24675_24732 = state_24589;(statearr_24675_24732[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24589);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24674;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24733 = state_24589;
state_24589 = G__24733;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24589){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24677,cs,m,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_24676 = f__9126__auto__.call(null);(statearr_24676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24677);
return statearr_24676;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24677,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj24735 = {};return obj24735;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24736){var map__24741 = p__24736;var map__24741__$1 = ((cljs.core.seq_QMARK_.call(null,map__24741))?cljs.core.apply.call(null,cljs.core.hash_map,map__24741):map__24741);var opts = map__24741__$1;var statearr_24742_24745 = state;(statearr_24742_24745[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24741,map__24741__$1,opts){
return (function (val){var statearr_24743_24746 = state;(statearr_24743_24746[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24741,map__24741__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_24744_24747 = state;(statearr_24744_24747[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24736 = null;if (arguments.length > 3) {
  p__24736 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24736);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24748){
var state = cljs.core.first(arglist__24748);
arglist__24748 = cljs.core.next(arglist__24748);
var cont_block = cljs.core.first(arglist__24748);
arglist__24748 = cljs.core.next(arglist__24748);
var ports = cljs.core.first(arglist__24748);
var p__24736 = cljs.core.rest(arglist__24748);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24736);
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
;var m = (function (){if(typeof cljs.core.async.t24868 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24868 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24869){
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
this.meta24869 = meta24869;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24868.cljs$lang$type = true;
cljs.core.async.t24868.cljs$lang$ctorStr = "cljs.core.async/t24868";
cljs.core.async.t24868.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24868");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24868.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24868.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24868.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24868.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24868.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24868.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24868.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24868.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24870){var self__ = this;
var _24870__$1 = this;return self__.meta24869;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24870,meta24869__$1){var self__ = this;
var _24870__$1 = this;return (new cljs.core.async.t24868(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24869__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24868 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24868(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24869){return (new cljs.core.async.t24868(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24869));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24868(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__9125__auto___24987 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24987,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24987,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24940){var state_val_24941 = (state_24940[(1)]);if((state_val_24941 === (7)))
{var inst_24884 = (state_24940[(7)]);var inst_24889 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24884);var state_24940__$1 = state_24940;var statearr_24942_24988 = state_24940__$1;(statearr_24942_24988[(2)] = inst_24889);
(statearr_24942_24988[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24941 === (20)))
{var inst_24899 = (state_24940[(8)]);var state_24940__$1 = state_24940;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24940__$1,(23),out,inst_24899);
} else
{if((state_val_24941 === (1)))
{var inst_24874 = (state_24940[(9)]);var inst_24874__$1 = calc_state.call(null);var inst_24875 = cljs.core.seq_QMARK_.call(null,inst_24874__$1);var state_24940__$1 = (function (){var statearr_24943 = state_24940;(statearr_24943[(9)] = inst_24874__$1);
return statearr_24943;
})();if(inst_24875)
{var statearr_24944_24989 = state_24940__$1;(statearr_24944_24989[(1)] = (2));
} else
{var statearr_24945_24990 = state_24940__$1;(statearr_24945_24990[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24941 === (24)))
{var inst_24892 = (state_24940[(10)]);var inst_24884 = inst_24892;var state_24940__$1 = (function (){var statearr_24946 = state_24940;(statearr_24946[(7)] = inst_24884);
return statearr_24946;
})();var statearr_24947_24991 = state_24940__$1;(statearr_24947_24991[(2)] = null);
(statearr_24947_24991[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24941 === (4)))
{var inst_24874 = (state_24940[(9)]);var inst_24880 = (state_24940[(2)]);var inst_24881 = cljs.core.get.call(null,inst_24880,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24882 = cljs.core.get.call(null,inst_24880,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24883 = cljs.core.get.call(null,inst_24880,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_24884 = inst_24874;var state_24940__$1 = (function (){var statearr_24948 = state_24940;(statearr_24948[(11)] = inst_24882);
(statearr_24948[(7)] = inst_24884);
(statearr_24948[(12)] = inst_24881);
(statearr_24948[(13)] = inst_24883);
return statearr_24948;
})();var statearr_24949_24992 = state_24940__$1;(statearr_24949_24992[(2)] = null);
(statearr_24949_24992[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24941 === (15)))
{var state_24940__$1 = state_24940;var statearr_24950_24993 = state_24940__$1;(statearr_24950_24993[(2)] = null);
(statearr_24950_24993[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24941 === (21)))
{var inst_24892 = (state_24940[(10)]);var inst_24884 = inst_24892;var state_24940__$1 = (function (){var statearr_24951 = state_24940;(statearr_24951[(7)] = inst_24884);
return statearr_24951;
})();var statearr_24952_24994 = state_24940__$1;(statearr_24952_24994[(2)] = null);
(statearr_24952_24994[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24941 === (13)))
{var inst_24936 = (state_24940[(2)]);var state_24940__$1 = state_24940;var statearr_24953_24995 = state_24940__$1;(statearr_24953_24995[(2)] = inst_24936);
(statearr_24953_24995[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24941 === (22)))
{var inst_24934 = (state_24940[(2)]);var state_24940__$1 = state_24940;var statearr_24954_24996 = state_24940__$1;(statearr_24954_24996[(2)] = inst_24934);
(statearr_24954_24996[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24941 === (6)))
{var inst_24938 = (state_24940[(2)]);var state_24940__$1 = state_24940;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24940__$1,inst_24938);
} else
{if((state_val_24941 === (25)))
{var state_24940__$1 = state_24940;var statearr_24955_24997 = state_24940__$1;(statearr_24955_24997[(2)] = null);
(statearr_24955_24997[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24941 === (17)))
{var inst_24914 = (state_24940[(14)]);var state_24940__$1 = state_24940;var statearr_24956_24998 = state_24940__$1;(statearr_24956_24998[(2)] = inst_24914);
(statearr_24956_24998[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24941 === (3)))
{var inst_24874 = (state_24940[(9)]);var state_24940__$1 = state_24940;var statearr_24957_24999 = state_24940__$1;(statearr_24957_24999[(2)] = inst_24874);
(statearr_24957_24999[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24941 === (12)))
{var inst_24895 = (state_24940[(15)]);var inst_24914 = (state_24940[(14)]);var inst_24900 = (state_24940[(16)]);var inst_24914__$1 = inst_24895.call(null,inst_24900);var state_24940__$1 = (function (){var statearr_24958 = state_24940;(statearr_24958[(14)] = inst_24914__$1);
return statearr_24958;
})();if(cljs.core.truth_(inst_24914__$1))
{var statearr_24959_25000 = state_24940__$1;(statearr_24959_25000[(1)] = (17));
} else
{var statearr_24960_25001 = state_24940__$1;(statearr_24960_25001[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24941 === (2)))
{var inst_24874 = (state_24940[(9)]);var inst_24877 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24874);var state_24940__$1 = state_24940;var statearr_24961_25002 = state_24940__$1;(statearr_24961_25002[(2)] = inst_24877);
(statearr_24961_25002[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24941 === (23)))
{var inst_24925 = (state_24940[(2)]);var state_24940__$1 = state_24940;if(cljs.core.truth_(inst_24925))
{var statearr_24962_25003 = state_24940__$1;(statearr_24962_25003[(1)] = (24));
} else
{var statearr_24963_25004 = state_24940__$1;(statearr_24963_25004[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24941 === (19)))
{var inst_24922 = (state_24940[(2)]);var state_24940__$1 = state_24940;if(cljs.core.truth_(inst_24922))
{var statearr_24964_25005 = state_24940__$1;(statearr_24964_25005[(1)] = (20));
} else
{var statearr_24965_25006 = state_24940__$1;(statearr_24965_25006[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24941 === (11)))
{var inst_24899 = (state_24940[(8)]);var inst_24905 = (inst_24899 == null);var state_24940__$1 = state_24940;if(cljs.core.truth_(inst_24905))
{var statearr_24966_25007 = state_24940__$1;(statearr_24966_25007[(1)] = (14));
} else
{var statearr_24967_25008 = state_24940__$1;(statearr_24967_25008[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24941 === (9)))
{var inst_24892 = (state_24940[(10)]);var inst_24892__$1 = (state_24940[(2)]);var inst_24893 = cljs.core.get.call(null,inst_24892__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24894 = cljs.core.get.call(null,inst_24892__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24895 = cljs.core.get.call(null,inst_24892__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_24940__$1 = (function (){var statearr_24968 = state_24940;(statearr_24968[(17)] = inst_24894);
(statearr_24968[(10)] = inst_24892__$1);
(statearr_24968[(15)] = inst_24895);
return statearr_24968;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_24940__$1,(10),inst_24893);
} else
{if((state_val_24941 === (5)))
{var inst_24884 = (state_24940[(7)]);var inst_24887 = cljs.core.seq_QMARK_.call(null,inst_24884);var state_24940__$1 = state_24940;if(inst_24887)
{var statearr_24969_25009 = state_24940__$1;(statearr_24969_25009[(1)] = (7));
} else
{var statearr_24970_25010 = state_24940__$1;(statearr_24970_25010[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24941 === (14)))
{var inst_24900 = (state_24940[(16)]);var inst_24907 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24900);var state_24940__$1 = state_24940;var statearr_24971_25011 = state_24940__$1;(statearr_24971_25011[(2)] = inst_24907);
(statearr_24971_25011[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24941 === (26)))
{var inst_24930 = (state_24940[(2)]);var state_24940__$1 = state_24940;var statearr_24972_25012 = state_24940__$1;(statearr_24972_25012[(2)] = inst_24930);
(statearr_24972_25012[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24941 === (16)))
{var inst_24910 = (state_24940[(2)]);var inst_24911 = calc_state.call(null);var inst_24884 = inst_24911;var state_24940__$1 = (function (){var statearr_24973 = state_24940;(statearr_24973[(18)] = inst_24910);
(statearr_24973[(7)] = inst_24884);
return statearr_24973;
})();var statearr_24974_25013 = state_24940__$1;(statearr_24974_25013[(2)] = null);
(statearr_24974_25013[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24941 === (10)))
{var inst_24900 = (state_24940[(16)]);var inst_24899 = (state_24940[(8)]);var inst_24898 = (state_24940[(2)]);var inst_24899__$1 = cljs.core.nth.call(null,inst_24898,(0),null);var inst_24900__$1 = cljs.core.nth.call(null,inst_24898,(1),null);var inst_24901 = (inst_24899__$1 == null);var inst_24902 = cljs.core._EQ_.call(null,inst_24900__$1,change);var inst_24903 = (inst_24901) || (inst_24902);var state_24940__$1 = (function (){var statearr_24975 = state_24940;(statearr_24975[(16)] = inst_24900__$1);
(statearr_24975[(8)] = inst_24899__$1);
return statearr_24975;
})();if(cljs.core.truth_(inst_24903))
{var statearr_24976_25014 = state_24940__$1;(statearr_24976_25014[(1)] = (11));
} else
{var statearr_24977_25015 = state_24940__$1;(statearr_24977_25015[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24941 === (18)))
{var inst_24894 = (state_24940[(17)]);var inst_24895 = (state_24940[(15)]);var inst_24900 = (state_24940[(16)]);var inst_24917 = cljs.core.empty_QMARK_.call(null,inst_24895);var inst_24918 = inst_24894.call(null,inst_24900);var inst_24919 = cljs.core.not.call(null,inst_24918);var inst_24920 = (inst_24917) && (inst_24919);var state_24940__$1 = state_24940;var statearr_24978_25016 = state_24940__$1;(statearr_24978_25016[(2)] = inst_24920);
(statearr_24978_25016[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24941 === (8)))
{var inst_24884 = (state_24940[(7)]);var state_24940__$1 = state_24940;var statearr_24979_25017 = state_24940__$1;(statearr_24979_25017[(2)] = inst_24884);
(statearr_24979_25017[(1)] = (9));
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
});})(c__9125__auto___24987,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__9110__auto__,c__9125__auto___24987,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24983[(0)] = state_machine__9111__auto__);
(statearr_24983[(1)] = (1));
return statearr_24983;
});
var state_machine__9111__auto____1 = (function (state_24940){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24940);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24984){if((e24984 instanceof Object))
{var ex__9114__auto__ = e24984;var statearr_24985_25018 = state_24940;(statearr_24985_25018[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24940);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24984;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25019 = state_24940;
state_24940 = G__25019;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24940){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24987,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__9127__auto__ = (function (){var statearr_24986 = f__9126__auto__.call(null);(statearr_24986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24987);
return statearr_24986;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24987,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25021 = {};return obj25021;
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
return (function (p1__25022_SHARP_){if(cljs.core.truth_(p1__25022_SHARP_.call(null,topic)))
{return p1__25022_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__25022_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25145 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25145 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25146){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25146 = meta25146;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25145.cljs$lang$type = true;
cljs.core.async.t25145.cljs$lang$ctorStr = "cljs.core.async/t25145";
cljs.core.async.t25145.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25145");
});})(mults,ensure_mult))
;
cljs.core.async.t25145.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25145.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25145.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25145.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25145.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25145.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25145.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25145.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25147){var self__ = this;
var _25147__$1 = this;return self__.meta25146;
});})(mults,ensure_mult))
;
cljs.core.async.t25145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25147,meta25146__$1){var self__ = this;
var _25147__$1 = this;return (new cljs.core.async.t25145(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25146__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25145 = ((function (mults,ensure_mult){
return (function __GT_t25145(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25146){return (new cljs.core.async.t25145(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25146));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25145(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__9125__auto___25267 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25267,mults,ensure_mult,p){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25267,mults,ensure_mult,p){
return (function (state_25219){var state_val_25220 = (state_25219[(1)]);if((state_val_25220 === (7)))
{var inst_25215 = (state_25219[(2)]);var state_25219__$1 = state_25219;var statearr_25221_25268 = state_25219__$1;(statearr_25221_25268[(2)] = inst_25215);
(statearr_25221_25268[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25220 === (20)))
{var state_25219__$1 = state_25219;var statearr_25222_25269 = state_25219__$1;(statearr_25222_25269[(2)] = null);
(statearr_25222_25269[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25220 === (1)))
{var state_25219__$1 = state_25219;var statearr_25223_25270 = state_25219__$1;(statearr_25223_25270[(2)] = null);
(statearr_25223_25270[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25220 === (24)))
{var inst_25198 = (state_25219[(7)]);var inst_25207 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25198);var state_25219__$1 = state_25219;var statearr_25224_25271 = state_25219__$1;(statearr_25224_25271[(2)] = inst_25207);
(statearr_25224_25271[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25220 === (4)))
{var inst_25150 = (state_25219[(8)]);var inst_25150__$1 = (state_25219[(2)]);var inst_25151 = (inst_25150__$1 == null);var state_25219__$1 = (function (){var statearr_25225 = state_25219;(statearr_25225[(8)] = inst_25150__$1);
return statearr_25225;
})();if(cljs.core.truth_(inst_25151))
{var statearr_25226_25272 = state_25219__$1;(statearr_25226_25272[(1)] = (5));
} else
{var statearr_25227_25273 = state_25219__$1;(statearr_25227_25273[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25220 === (15)))
{var inst_25192 = (state_25219[(2)]);var state_25219__$1 = state_25219;var statearr_25228_25274 = state_25219__$1;(statearr_25228_25274[(2)] = inst_25192);
(statearr_25228_25274[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25220 === (21)))
{var inst_25212 = (state_25219[(2)]);var state_25219__$1 = (function (){var statearr_25229 = state_25219;(statearr_25229[(9)] = inst_25212);
return statearr_25229;
})();var statearr_25230_25275 = state_25219__$1;(statearr_25230_25275[(2)] = null);
(statearr_25230_25275[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25220 === (13)))
{var inst_25174 = (state_25219[(10)]);var inst_25176 = cljs.core.chunked_seq_QMARK_.call(null,inst_25174);var state_25219__$1 = state_25219;if(inst_25176)
{var statearr_25231_25276 = state_25219__$1;(statearr_25231_25276[(1)] = (16));
} else
{var statearr_25232_25277 = state_25219__$1;(statearr_25232_25277[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25220 === (22)))
{var inst_25204 = (state_25219[(2)]);var state_25219__$1 = state_25219;if(cljs.core.truth_(inst_25204))
{var statearr_25233_25278 = state_25219__$1;(statearr_25233_25278[(1)] = (23));
} else
{var statearr_25234_25279 = state_25219__$1;(statearr_25234_25279[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25220 === (6)))
{var inst_25150 = (state_25219[(8)]);var inst_25198 = (state_25219[(7)]);var inst_25200 = (state_25219[(11)]);var inst_25198__$1 = topic_fn.call(null,inst_25150);var inst_25199 = cljs.core.deref.call(null,mults);var inst_25200__$1 = cljs.core.get.call(null,inst_25199,inst_25198__$1);var state_25219__$1 = (function (){var statearr_25235 = state_25219;(statearr_25235[(7)] = inst_25198__$1);
(statearr_25235[(11)] = inst_25200__$1);
return statearr_25235;
})();if(cljs.core.truth_(inst_25200__$1))
{var statearr_25236_25280 = state_25219__$1;(statearr_25236_25280[(1)] = (19));
} else
{var statearr_25237_25281 = state_25219__$1;(statearr_25237_25281[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25220 === (25)))
{var inst_25209 = (state_25219[(2)]);var state_25219__$1 = state_25219;var statearr_25238_25282 = state_25219__$1;(statearr_25238_25282[(2)] = inst_25209);
(statearr_25238_25282[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25220 === (17)))
{var inst_25174 = (state_25219[(10)]);var inst_25183 = cljs.core.first.call(null,inst_25174);var inst_25184 = cljs.core.async.muxch_STAR_.call(null,inst_25183);var inst_25185 = cljs.core.async.close_BANG_.call(null,inst_25184);var inst_25186 = cljs.core.next.call(null,inst_25174);var inst_25160 = inst_25186;var inst_25161 = null;var inst_25162 = (0);var inst_25163 = (0);var state_25219__$1 = (function (){var statearr_25239 = state_25219;(statearr_25239[(12)] = inst_25160);
(statearr_25239[(13)] = inst_25162);
(statearr_25239[(14)] = inst_25185);
(statearr_25239[(15)] = inst_25163);
(statearr_25239[(16)] = inst_25161);
return statearr_25239;
})();var statearr_25240_25283 = state_25219__$1;(statearr_25240_25283[(2)] = null);
(statearr_25240_25283[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25220 === (3)))
{var inst_25217 = (state_25219[(2)]);var state_25219__$1 = state_25219;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25219__$1,inst_25217);
} else
{if((state_val_25220 === (12)))
{var inst_25194 = (state_25219[(2)]);var state_25219__$1 = state_25219;var statearr_25241_25284 = state_25219__$1;(statearr_25241_25284[(2)] = inst_25194);
(statearr_25241_25284[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25220 === (2)))
{var state_25219__$1 = state_25219;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25219__$1,(4),ch);
} else
{if((state_val_25220 === (23)))
{var state_25219__$1 = state_25219;var statearr_25242_25285 = state_25219__$1;(statearr_25242_25285[(2)] = null);
(statearr_25242_25285[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25220 === (19)))
{var inst_25150 = (state_25219[(8)]);var inst_25200 = (state_25219[(11)]);var inst_25202 = cljs.core.async.muxch_STAR_.call(null,inst_25200);var state_25219__$1 = state_25219;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25219__$1,(22),inst_25202,inst_25150);
} else
{if((state_val_25220 === (11)))
{var inst_25160 = (state_25219[(12)]);var inst_25174 = (state_25219[(10)]);var inst_25174__$1 = cljs.core.seq.call(null,inst_25160);var state_25219__$1 = (function (){var statearr_25243 = state_25219;(statearr_25243[(10)] = inst_25174__$1);
return statearr_25243;
})();if(inst_25174__$1)
{var statearr_25244_25286 = state_25219__$1;(statearr_25244_25286[(1)] = (13));
} else
{var statearr_25245_25287 = state_25219__$1;(statearr_25245_25287[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25220 === (9)))
{var inst_25196 = (state_25219[(2)]);var state_25219__$1 = state_25219;var statearr_25246_25288 = state_25219__$1;(statearr_25246_25288[(2)] = inst_25196);
(statearr_25246_25288[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25220 === (5)))
{var inst_25157 = cljs.core.deref.call(null,mults);var inst_25158 = cljs.core.vals.call(null,inst_25157);var inst_25159 = cljs.core.seq.call(null,inst_25158);var inst_25160 = inst_25159;var inst_25161 = null;var inst_25162 = (0);var inst_25163 = (0);var state_25219__$1 = (function (){var statearr_25247 = state_25219;(statearr_25247[(12)] = inst_25160);
(statearr_25247[(13)] = inst_25162);
(statearr_25247[(15)] = inst_25163);
(statearr_25247[(16)] = inst_25161);
return statearr_25247;
})();var statearr_25248_25289 = state_25219__$1;(statearr_25248_25289[(2)] = null);
(statearr_25248_25289[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25220 === (14)))
{var state_25219__$1 = state_25219;var statearr_25252_25290 = state_25219__$1;(statearr_25252_25290[(2)] = null);
(statearr_25252_25290[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25220 === (16)))
{var inst_25174 = (state_25219[(10)]);var inst_25178 = cljs.core.chunk_first.call(null,inst_25174);var inst_25179 = cljs.core.chunk_rest.call(null,inst_25174);var inst_25180 = cljs.core.count.call(null,inst_25178);var inst_25160 = inst_25179;var inst_25161 = inst_25178;var inst_25162 = inst_25180;var inst_25163 = (0);var state_25219__$1 = (function (){var statearr_25253 = state_25219;(statearr_25253[(12)] = inst_25160);
(statearr_25253[(13)] = inst_25162);
(statearr_25253[(15)] = inst_25163);
(statearr_25253[(16)] = inst_25161);
return statearr_25253;
})();var statearr_25254_25291 = state_25219__$1;(statearr_25254_25291[(2)] = null);
(statearr_25254_25291[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25220 === (10)))
{var inst_25160 = (state_25219[(12)]);var inst_25162 = (state_25219[(13)]);var inst_25163 = (state_25219[(15)]);var inst_25161 = (state_25219[(16)]);var inst_25168 = cljs.core._nth.call(null,inst_25161,inst_25163);var inst_25169 = cljs.core.async.muxch_STAR_.call(null,inst_25168);var inst_25170 = cljs.core.async.close_BANG_.call(null,inst_25169);var inst_25171 = (inst_25163 + (1));var tmp25249 = inst_25160;var tmp25250 = inst_25162;var tmp25251 = inst_25161;var inst_25160__$1 = tmp25249;var inst_25161__$1 = tmp25251;var inst_25162__$1 = tmp25250;var inst_25163__$1 = inst_25171;var state_25219__$1 = (function (){var statearr_25255 = state_25219;(statearr_25255[(12)] = inst_25160__$1);
(statearr_25255[(13)] = inst_25162__$1);
(statearr_25255[(15)] = inst_25163__$1);
(statearr_25255[(17)] = inst_25170);
(statearr_25255[(16)] = inst_25161__$1);
return statearr_25255;
})();var statearr_25256_25292 = state_25219__$1;(statearr_25256_25292[(2)] = null);
(statearr_25256_25292[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25220 === (18)))
{var inst_25189 = (state_25219[(2)]);var state_25219__$1 = state_25219;var statearr_25257_25293 = state_25219__$1;(statearr_25257_25293[(2)] = inst_25189);
(statearr_25257_25293[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25220 === (8)))
{var inst_25162 = (state_25219[(13)]);var inst_25163 = (state_25219[(15)]);var inst_25165 = (inst_25163 < inst_25162);var inst_25166 = inst_25165;var state_25219__$1 = state_25219;if(cljs.core.truth_(inst_25166))
{var statearr_25258_25294 = state_25219__$1;(statearr_25258_25294[(1)] = (10));
} else
{var statearr_25259_25295 = state_25219__$1;(statearr_25259_25295[(1)] = (11));
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
});})(c__9125__auto___25267,mults,ensure_mult,p))
;return ((function (switch__9110__auto__,c__9125__auto___25267,mults,ensure_mult,p){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25263[(0)] = state_machine__9111__auto__);
(statearr_25263[(1)] = (1));
return statearr_25263;
});
var state_machine__9111__auto____1 = (function (state_25219){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25219);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25264){if((e25264 instanceof Object))
{var ex__9114__auto__ = e25264;var statearr_25265_25296 = state_25219;(statearr_25265_25296[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25219);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25264;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25297 = state_25219;
state_25219 = G__25297;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25219){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25267,mults,ensure_mult,p))
})();var state__9127__auto__ = (function (){var statearr_25266 = f__9126__auto__.call(null);(statearr_25266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25267);
return statearr_25266;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25267,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__9125__auto___25434 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25434,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25434,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25404){var state_val_25405 = (state_25404[(1)]);if((state_val_25405 === (7)))
{var state_25404__$1 = state_25404;var statearr_25406_25435 = state_25404__$1;(statearr_25406_25435[(2)] = null);
(statearr_25406_25435[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25405 === (1)))
{var state_25404__$1 = state_25404;var statearr_25407_25436 = state_25404__$1;(statearr_25407_25436[(2)] = null);
(statearr_25407_25436[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25405 === (4)))
{var inst_25368 = (state_25404[(7)]);var inst_25370 = (inst_25368 < cnt);var state_25404__$1 = state_25404;if(cljs.core.truth_(inst_25370))
{var statearr_25408_25437 = state_25404__$1;(statearr_25408_25437[(1)] = (6));
} else
{var statearr_25409_25438 = state_25404__$1;(statearr_25409_25438[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25405 === (15)))
{var inst_25400 = (state_25404[(2)]);var state_25404__$1 = state_25404;var statearr_25410_25439 = state_25404__$1;(statearr_25410_25439[(2)] = inst_25400);
(statearr_25410_25439[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25405 === (13)))
{var inst_25393 = cljs.core.async.close_BANG_.call(null,out);var state_25404__$1 = state_25404;var statearr_25411_25440 = state_25404__$1;(statearr_25411_25440[(2)] = inst_25393);
(statearr_25411_25440[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25405 === (6)))
{var state_25404__$1 = state_25404;var statearr_25412_25441 = state_25404__$1;(statearr_25412_25441[(2)] = null);
(statearr_25412_25441[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25405 === (3)))
{var inst_25402 = (state_25404[(2)]);var state_25404__$1 = state_25404;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25404__$1,inst_25402);
} else
{if((state_val_25405 === (12)))
{var inst_25390 = (state_25404[(8)]);var inst_25390__$1 = (state_25404[(2)]);var inst_25391 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25390__$1);var state_25404__$1 = (function (){var statearr_25413 = state_25404;(statearr_25413[(8)] = inst_25390__$1);
return statearr_25413;
})();if(cljs.core.truth_(inst_25391))
{var statearr_25414_25442 = state_25404__$1;(statearr_25414_25442[(1)] = (13));
} else
{var statearr_25415_25443 = state_25404__$1;(statearr_25415_25443[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25405 === (2)))
{var inst_25367 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_25368 = (0);var state_25404__$1 = (function (){var statearr_25416 = state_25404;(statearr_25416[(9)] = inst_25367);
(statearr_25416[(7)] = inst_25368);
return statearr_25416;
})();var statearr_25417_25444 = state_25404__$1;(statearr_25417_25444[(2)] = null);
(statearr_25417_25444[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25405 === (11)))
{var inst_25368 = (state_25404[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25404,(10),Object,null,(9));var inst_25377 = chs__$1.call(null,inst_25368);var inst_25378 = done.call(null,inst_25368);var inst_25379 = cljs.core.async.take_BANG_.call(null,inst_25377,inst_25378);var state_25404__$1 = state_25404;var statearr_25418_25445 = state_25404__$1;(statearr_25418_25445[(2)] = inst_25379);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25404__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25405 === (9)))
{var inst_25368 = (state_25404[(7)]);var inst_25381 = (state_25404[(2)]);var inst_25382 = (inst_25368 + (1));var inst_25368__$1 = inst_25382;var state_25404__$1 = (function (){var statearr_25419 = state_25404;(statearr_25419[(10)] = inst_25381);
(statearr_25419[(7)] = inst_25368__$1);
return statearr_25419;
})();var statearr_25420_25446 = state_25404__$1;(statearr_25420_25446[(2)] = null);
(statearr_25420_25446[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25405 === (5)))
{var inst_25388 = (state_25404[(2)]);var state_25404__$1 = (function (){var statearr_25421 = state_25404;(statearr_25421[(11)] = inst_25388);
return statearr_25421;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25404__$1,(12),dchan);
} else
{if((state_val_25405 === (14)))
{var inst_25390 = (state_25404[(8)]);var inst_25395 = cljs.core.apply.call(null,f,inst_25390);var state_25404__$1 = state_25404;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25404__$1,(16),out,inst_25395);
} else
{if((state_val_25405 === (16)))
{var inst_25397 = (state_25404[(2)]);var state_25404__$1 = (function (){var statearr_25422 = state_25404;(statearr_25422[(12)] = inst_25397);
return statearr_25422;
})();var statearr_25423_25447 = state_25404__$1;(statearr_25423_25447[(2)] = null);
(statearr_25423_25447[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25405 === (10)))
{var inst_25372 = (state_25404[(2)]);var inst_25373 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_25404__$1 = (function (){var statearr_25424 = state_25404;(statearr_25424[(13)] = inst_25372);
return statearr_25424;
})();var statearr_25425_25448 = state_25404__$1;(statearr_25425_25448[(2)] = inst_25373);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25404__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25405 === (8)))
{var inst_25386 = (state_25404[(2)]);var state_25404__$1 = state_25404;var statearr_25426_25449 = state_25404__$1;(statearr_25426_25449[(2)] = inst_25386);
(statearr_25426_25449[(1)] = (5));
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
});})(c__9125__auto___25434,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___25434,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25430[(0)] = state_machine__9111__auto__);
(statearr_25430[(1)] = (1));
return statearr_25430;
});
var state_machine__9111__auto____1 = (function (state_25404){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25404);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25431){if((e25431 instanceof Object))
{var ex__9114__auto__ = e25431;var statearr_25432_25450 = state_25404;(statearr_25432_25450[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25404);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25431;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25451 = state_25404;
state_25404 = G__25451;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25404){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25434,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_25433 = f__9126__auto__.call(null);(statearr_25433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25434);
return statearr_25433;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25434,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25559 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25559,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25559,out){
return (function (state_25535){var state_val_25536 = (state_25535[(1)]);if((state_val_25536 === (7)))
{var inst_25514 = (state_25535[(7)]);var inst_25515 = (state_25535[(8)]);var inst_25514__$1 = (state_25535[(2)]);var inst_25515__$1 = cljs.core.nth.call(null,inst_25514__$1,(0),null);var inst_25516 = cljs.core.nth.call(null,inst_25514__$1,(1),null);var inst_25517 = (inst_25515__$1 == null);var state_25535__$1 = (function (){var statearr_25537 = state_25535;(statearr_25537[(9)] = inst_25516);
(statearr_25537[(7)] = inst_25514__$1);
(statearr_25537[(8)] = inst_25515__$1);
return statearr_25537;
})();if(cljs.core.truth_(inst_25517))
{var statearr_25538_25560 = state_25535__$1;(statearr_25538_25560[(1)] = (8));
} else
{var statearr_25539_25561 = state_25535__$1;(statearr_25539_25561[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25536 === (1)))
{var inst_25506 = cljs.core.vec.call(null,chs);var inst_25507 = inst_25506;var state_25535__$1 = (function (){var statearr_25540 = state_25535;(statearr_25540[(10)] = inst_25507);
return statearr_25540;
})();var statearr_25541_25562 = state_25535__$1;(statearr_25541_25562[(2)] = null);
(statearr_25541_25562[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25536 === (4)))
{var inst_25507 = (state_25535[(10)]);var state_25535__$1 = state_25535;return cljs.core.async.ioc_alts_BANG_.call(null,state_25535__$1,(7),inst_25507);
} else
{if((state_val_25536 === (6)))
{var inst_25531 = (state_25535[(2)]);var state_25535__$1 = state_25535;var statearr_25542_25563 = state_25535__$1;(statearr_25542_25563[(2)] = inst_25531);
(statearr_25542_25563[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25536 === (3)))
{var inst_25533 = (state_25535[(2)]);var state_25535__$1 = state_25535;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25535__$1,inst_25533);
} else
{if((state_val_25536 === (2)))
{var inst_25507 = (state_25535[(10)]);var inst_25509 = cljs.core.count.call(null,inst_25507);var inst_25510 = (inst_25509 > (0));var state_25535__$1 = state_25535;if(cljs.core.truth_(inst_25510))
{var statearr_25544_25564 = state_25535__$1;(statearr_25544_25564[(1)] = (4));
} else
{var statearr_25545_25565 = state_25535__$1;(statearr_25545_25565[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25536 === (11)))
{var inst_25507 = (state_25535[(10)]);var inst_25524 = (state_25535[(2)]);var tmp25543 = inst_25507;var inst_25507__$1 = tmp25543;var state_25535__$1 = (function (){var statearr_25546 = state_25535;(statearr_25546[(10)] = inst_25507__$1);
(statearr_25546[(11)] = inst_25524);
return statearr_25546;
})();var statearr_25547_25566 = state_25535__$1;(statearr_25547_25566[(2)] = null);
(statearr_25547_25566[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25536 === (9)))
{var inst_25515 = (state_25535[(8)]);var state_25535__$1 = state_25535;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25535__$1,(11),out,inst_25515);
} else
{if((state_val_25536 === (5)))
{var inst_25529 = cljs.core.async.close_BANG_.call(null,out);var state_25535__$1 = state_25535;var statearr_25548_25567 = state_25535__$1;(statearr_25548_25567[(2)] = inst_25529);
(statearr_25548_25567[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25536 === (10)))
{var inst_25527 = (state_25535[(2)]);var state_25535__$1 = state_25535;var statearr_25549_25568 = state_25535__$1;(statearr_25549_25568[(2)] = inst_25527);
(statearr_25549_25568[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25536 === (8)))
{var inst_25516 = (state_25535[(9)]);var inst_25507 = (state_25535[(10)]);var inst_25514 = (state_25535[(7)]);var inst_25515 = (state_25535[(8)]);var inst_25519 = (function (){var c = inst_25516;var v = inst_25515;var vec__25512 = inst_25514;var cs = inst_25507;return ((function (c,v,vec__25512,cs,inst_25516,inst_25507,inst_25514,inst_25515,state_val_25536,c__9125__auto___25559,out){
return (function (p1__25452_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25452_SHARP_);
});
;})(c,v,vec__25512,cs,inst_25516,inst_25507,inst_25514,inst_25515,state_val_25536,c__9125__auto___25559,out))
})();var inst_25520 = cljs.core.filterv.call(null,inst_25519,inst_25507);var inst_25507__$1 = inst_25520;var state_25535__$1 = (function (){var statearr_25550 = state_25535;(statearr_25550[(10)] = inst_25507__$1);
return statearr_25550;
})();var statearr_25551_25569 = state_25535__$1;(statearr_25551_25569[(2)] = null);
(statearr_25551_25569[(1)] = (2));
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
});})(c__9125__auto___25559,out))
;return ((function (switch__9110__auto__,c__9125__auto___25559,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25555 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25555[(0)] = state_machine__9111__auto__);
(statearr_25555[(1)] = (1));
return statearr_25555;
});
var state_machine__9111__auto____1 = (function (state_25535){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25535);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25556){if((e25556 instanceof Object))
{var ex__9114__auto__ = e25556;var statearr_25557_25570 = state_25535;(statearr_25557_25570[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25535);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25556;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25571 = state_25535;
state_25535 = G__25571;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25535){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25559,out))
})();var state__9127__auto__ = (function (){var statearr_25558 = f__9126__auto__.call(null);(statearr_25558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25559);
return statearr_25558;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25559,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25664 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25664,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25664,out){
return (function (state_25641){var state_val_25642 = (state_25641[(1)]);if((state_val_25642 === (7)))
{var inst_25623 = (state_25641[(7)]);var inst_25623__$1 = (state_25641[(2)]);var inst_25624 = (inst_25623__$1 == null);var inst_25625 = cljs.core.not.call(null,inst_25624);var state_25641__$1 = (function (){var statearr_25643 = state_25641;(statearr_25643[(7)] = inst_25623__$1);
return statearr_25643;
})();if(inst_25625)
{var statearr_25644_25665 = state_25641__$1;(statearr_25644_25665[(1)] = (8));
} else
{var statearr_25645_25666 = state_25641__$1;(statearr_25645_25666[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25642 === (1)))
{var inst_25618 = (0);var state_25641__$1 = (function (){var statearr_25646 = state_25641;(statearr_25646[(8)] = inst_25618);
return statearr_25646;
})();var statearr_25647_25667 = state_25641__$1;(statearr_25647_25667[(2)] = null);
(statearr_25647_25667[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25642 === (4)))
{var state_25641__$1 = state_25641;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25641__$1,(7),ch);
} else
{if((state_val_25642 === (6)))
{var inst_25636 = (state_25641[(2)]);var state_25641__$1 = state_25641;var statearr_25648_25668 = state_25641__$1;(statearr_25648_25668[(2)] = inst_25636);
(statearr_25648_25668[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25642 === (3)))
{var inst_25638 = (state_25641[(2)]);var inst_25639 = cljs.core.async.close_BANG_.call(null,out);var state_25641__$1 = (function (){var statearr_25649 = state_25641;(statearr_25649[(9)] = inst_25638);
return statearr_25649;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25641__$1,inst_25639);
} else
{if((state_val_25642 === (2)))
{var inst_25618 = (state_25641[(8)]);var inst_25620 = (inst_25618 < n);var state_25641__$1 = state_25641;if(cljs.core.truth_(inst_25620))
{var statearr_25650_25669 = state_25641__$1;(statearr_25650_25669[(1)] = (4));
} else
{var statearr_25651_25670 = state_25641__$1;(statearr_25651_25670[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25642 === (11)))
{var inst_25618 = (state_25641[(8)]);var inst_25628 = (state_25641[(2)]);var inst_25629 = (inst_25618 + (1));var inst_25618__$1 = inst_25629;var state_25641__$1 = (function (){var statearr_25652 = state_25641;(statearr_25652[(10)] = inst_25628);
(statearr_25652[(8)] = inst_25618__$1);
return statearr_25652;
})();var statearr_25653_25671 = state_25641__$1;(statearr_25653_25671[(2)] = null);
(statearr_25653_25671[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25642 === (9)))
{var state_25641__$1 = state_25641;var statearr_25654_25672 = state_25641__$1;(statearr_25654_25672[(2)] = null);
(statearr_25654_25672[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25642 === (5)))
{var state_25641__$1 = state_25641;var statearr_25655_25673 = state_25641__$1;(statearr_25655_25673[(2)] = null);
(statearr_25655_25673[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25642 === (10)))
{var inst_25633 = (state_25641[(2)]);var state_25641__$1 = state_25641;var statearr_25656_25674 = state_25641__$1;(statearr_25656_25674[(2)] = inst_25633);
(statearr_25656_25674[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25642 === (8)))
{var inst_25623 = (state_25641[(7)]);var state_25641__$1 = state_25641;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25641__$1,(11),out,inst_25623);
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
});})(c__9125__auto___25664,out))
;return ((function (switch__9110__auto__,c__9125__auto___25664,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25660 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25660[(0)] = state_machine__9111__auto__);
(statearr_25660[(1)] = (1));
return statearr_25660;
});
var state_machine__9111__auto____1 = (function (state_25641){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25641);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25661){if((e25661 instanceof Object))
{var ex__9114__auto__ = e25661;var statearr_25662_25675 = state_25641;(statearr_25662_25675[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25641);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25661;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25676 = state_25641;
state_25641 = G__25676;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25641){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25664,out))
})();var state__9127__auto__ = (function (){var statearr_25663 = f__9126__auto__.call(null);(statearr_25663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25664);
return statearr_25663;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25664,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25684 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25684 = (function (ch,f,map_LT_,meta25685){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25685 = meta25685;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25684.cljs$lang$type = true;
cljs.core.async.t25684.cljs$lang$ctorStr = "cljs.core.async/t25684";
cljs.core.async.t25684.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25684");
});
cljs.core.async.t25684.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25684.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t25684.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25684.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25687 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25687 = (function (fn1,_,meta25685,ch,f,map_LT_,meta25688){
this.fn1 = fn1;
this._ = _;
this.meta25685 = meta25685;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25688 = meta25688;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25687.cljs$lang$type = true;
cljs.core.async.t25687.cljs$lang$ctorStr = "cljs.core.async/t25687";
cljs.core.async.t25687.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25687");
});})(___$1))
;
cljs.core.async.t25687.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25687.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25687.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25677_SHARP_){return f1.call(null,(((p1__25677_SHARP_ == null))?null:self__.f.call(null,p1__25677_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25687.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25689){var self__ = this;
var _25689__$1 = this;return self__.meta25688;
});})(___$1))
;
cljs.core.async.t25687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25689,meta25688__$1){var self__ = this;
var _25689__$1 = this;return (new cljs.core.async.t25687(self__.fn1,self__._,self__.meta25685,self__.ch,self__.f,self__.map_LT_,meta25688__$1));
});})(___$1))
;
cljs.core.async.__GT_t25687 = ((function (___$1){
return (function __GT_t25687(fn1__$1,___$2,meta25685__$1,ch__$2,f__$2,map_LT___$2,meta25688){return (new cljs.core.async.t25687(fn1__$1,___$2,meta25685__$1,ch__$2,f__$2,map_LT___$2,meta25688));
});})(___$1))
;
}
return (new cljs.core.async.t25687(fn1,___$1,self__.meta25685,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t25684.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25684.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25684.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25686){var self__ = this;
var _25686__$1 = this;return self__.meta25685;
});
cljs.core.async.t25684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25686,meta25685__$1){var self__ = this;
var _25686__$1 = this;return (new cljs.core.async.t25684(self__.ch,self__.f,self__.map_LT_,meta25685__$1));
});
cljs.core.async.__GT_t25684 = (function __GT_t25684(ch__$1,f__$1,map_LT___$1,meta25685){return (new cljs.core.async.t25684(ch__$1,f__$1,map_LT___$1,meta25685));
});
}
return (new cljs.core.async.t25684(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25693 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25693 = (function (ch,f,map_GT_,meta25694){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25694 = meta25694;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25693.cljs$lang$type = true;
cljs.core.async.t25693.cljs$lang$ctorStr = "cljs.core.async/t25693";
cljs.core.async.t25693.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25693");
});
cljs.core.async.t25693.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25693.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t25693.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25693.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25693.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25693.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25695){var self__ = this;
var _25695__$1 = this;return self__.meta25694;
});
cljs.core.async.t25693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25695,meta25694__$1){var self__ = this;
var _25695__$1 = this;return (new cljs.core.async.t25693(self__.ch,self__.f,self__.map_GT_,meta25694__$1));
});
cljs.core.async.__GT_t25693 = (function __GT_t25693(ch__$1,f__$1,map_GT___$1,meta25694){return (new cljs.core.async.t25693(ch__$1,f__$1,map_GT___$1,meta25694));
});
}
return (new cljs.core.async.t25693(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25699 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25699 = (function (ch,p,filter_GT_,meta25700){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25700 = meta25700;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25699.cljs$lang$type = true;
cljs.core.async.t25699.cljs$lang$ctorStr = "cljs.core.async/t25699";
cljs.core.async.t25699.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25699");
});
cljs.core.async.t25699.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25699.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t25699.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25699.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25699.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25699.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25699.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25701){var self__ = this;
var _25701__$1 = this;return self__.meta25700;
});
cljs.core.async.t25699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25701,meta25700__$1){var self__ = this;
var _25701__$1 = this;return (new cljs.core.async.t25699(self__.ch,self__.p,self__.filter_GT_,meta25700__$1));
});
cljs.core.async.__GT_t25699 = (function __GT_t25699(ch__$1,p__$1,filter_GT___$1,meta25700){return (new cljs.core.async.t25699(ch__$1,p__$1,filter_GT___$1,meta25700));
});
}
return (new cljs.core.async.t25699(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25784 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25784,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25784,out){
return (function (state_25763){var state_val_25764 = (state_25763[(1)]);if((state_val_25764 === (7)))
{var inst_25759 = (state_25763[(2)]);var state_25763__$1 = state_25763;var statearr_25765_25785 = state_25763__$1;(statearr_25765_25785[(2)] = inst_25759);
(statearr_25765_25785[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25764 === (1)))
{var state_25763__$1 = state_25763;var statearr_25766_25786 = state_25763__$1;(statearr_25766_25786[(2)] = null);
(statearr_25766_25786[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25764 === (4)))
{var inst_25745 = (state_25763[(7)]);var inst_25745__$1 = (state_25763[(2)]);var inst_25746 = (inst_25745__$1 == null);var state_25763__$1 = (function (){var statearr_25767 = state_25763;(statearr_25767[(7)] = inst_25745__$1);
return statearr_25767;
})();if(cljs.core.truth_(inst_25746))
{var statearr_25768_25787 = state_25763__$1;(statearr_25768_25787[(1)] = (5));
} else
{var statearr_25769_25788 = state_25763__$1;(statearr_25769_25788[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25764 === (6)))
{var inst_25745 = (state_25763[(7)]);var inst_25750 = p.call(null,inst_25745);var state_25763__$1 = state_25763;if(cljs.core.truth_(inst_25750))
{var statearr_25770_25789 = state_25763__$1;(statearr_25770_25789[(1)] = (8));
} else
{var statearr_25771_25790 = state_25763__$1;(statearr_25771_25790[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25764 === (3)))
{var inst_25761 = (state_25763[(2)]);var state_25763__$1 = state_25763;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25763__$1,inst_25761);
} else
{if((state_val_25764 === (2)))
{var state_25763__$1 = state_25763;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25763__$1,(4),ch);
} else
{if((state_val_25764 === (11)))
{var inst_25753 = (state_25763[(2)]);var state_25763__$1 = state_25763;var statearr_25772_25791 = state_25763__$1;(statearr_25772_25791[(2)] = inst_25753);
(statearr_25772_25791[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25764 === (9)))
{var state_25763__$1 = state_25763;var statearr_25773_25792 = state_25763__$1;(statearr_25773_25792[(2)] = null);
(statearr_25773_25792[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25764 === (5)))
{var inst_25748 = cljs.core.async.close_BANG_.call(null,out);var state_25763__$1 = state_25763;var statearr_25774_25793 = state_25763__$1;(statearr_25774_25793[(2)] = inst_25748);
(statearr_25774_25793[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25764 === (10)))
{var inst_25756 = (state_25763[(2)]);var state_25763__$1 = (function (){var statearr_25775 = state_25763;(statearr_25775[(8)] = inst_25756);
return statearr_25775;
})();var statearr_25776_25794 = state_25763__$1;(statearr_25776_25794[(2)] = null);
(statearr_25776_25794[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25764 === (8)))
{var inst_25745 = (state_25763[(7)]);var state_25763__$1 = state_25763;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25763__$1,(11),out,inst_25745);
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
});})(c__9125__auto___25784,out))
;return ((function (switch__9110__auto__,c__9125__auto___25784,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25780 = [null,null,null,null,null,null,null,null,null];(statearr_25780[(0)] = state_machine__9111__auto__);
(statearr_25780[(1)] = (1));
return statearr_25780;
});
var state_machine__9111__auto____1 = (function (state_25763){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25763);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25781){if((e25781 instanceof Object))
{var ex__9114__auto__ = e25781;var statearr_25782_25795 = state_25763;(statearr_25782_25795[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25763);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25781;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25796 = state_25763;
state_25763 = G__25796;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25763){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25784,out))
})();var state__9127__auto__ = (function (){var statearr_25783 = f__9126__auto__.call(null);(statearr_25783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25784);
return statearr_25783;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25784,out))
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
return (function (state_25962){var state_val_25963 = (state_25962[(1)]);if((state_val_25963 === (7)))
{var inst_25958 = (state_25962[(2)]);var state_25962__$1 = state_25962;var statearr_25964_26005 = state_25962__$1;(statearr_25964_26005[(2)] = inst_25958);
(statearr_25964_26005[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25963 === (20)))
{var inst_25928 = (state_25962[(7)]);var inst_25939 = (state_25962[(2)]);var inst_25940 = cljs.core.next.call(null,inst_25928);var inst_25914 = inst_25940;var inst_25915 = null;var inst_25916 = (0);var inst_25917 = (0);var state_25962__$1 = (function (){var statearr_25965 = state_25962;(statearr_25965[(8)] = inst_25917);
(statearr_25965[(9)] = inst_25939);
(statearr_25965[(10)] = inst_25914);
(statearr_25965[(11)] = inst_25916);
(statearr_25965[(12)] = inst_25915);
return statearr_25965;
})();var statearr_25966_26006 = state_25962__$1;(statearr_25966_26006[(2)] = null);
(statearr_25966_26006[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25963 === (1)))
{var state_25962__$1 = state_25962;var statearr_25967_26007 = state_25962__$1;(statearr_25967_26007[(2)] = null);
(statearr_25967_26007[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25963 === (4)))
{var inst_25903 = (state_25962[(13)]);var inst_25903__$1 = (state_25962[(2)]);var inst_25904 = (inst_25903__$1 == null);var state_25962__$1 = (function (){var statearr_25968 = state_25962;(statearr_25968[(13)] = inst_25903__$1);
return statearr_25968;
})();if(cljs.core.truth_(inst_25904))
{var statearr_25969_26008 = state_25962__$1;(statearr_25969_26008[(1)] = (5));
} else
{var statearr_25970_26009 = state_25962__$1;(statearr_25970_26009[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25963 === (15)))
{var state_25962__$1 = state_25962;var statearr_25974_26010 = state_25962__$1;(statearr_25974_26010[(2)] = null);
(statearr_25974_26010[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25963 === (21)))
{var state_25962__$1 = state_25962;var statearr_25975_26011 = state_25962__$1;(statearr_25975_26011[(2)] = null);
(statearr_25975_26011[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25963 === (13)))
{var inst_25917 = (state_25962[(8)]);var inst_25914 = (state_25962[(10)]);var inst_25916 = (state_25962[(11)]);var inst_25915 = (state_25962[(12)]);var inst_25924 = (state_25962[(2)]);var inst_25925 = (inst_25917 + (1));var tmp25971 = inst_25914;var tmp25972 = inst_25916;var tmp25973 = inst_25915;var inst_25914__$1 = tmp25971;var inst_25915__$1 = tmp25973;var inst_25916__$1 = tmp25972;var inst_25917__$1 = inst_25925;var state_25962__$1 = (function (){var statearr_25976 = state_25962;(statearr_25976[(8)] = inst_25917__$1);
(statearr_25976[(14)] = inst_25924);
(statearr_25976[(10)] = inst_25914__$1);
(statearr_25976[(11)] = inst_25916__$1);
(statearr_25976[(12)] = inst_25915__$1);
return statearr_25976;
})();var statearr_25977_26012 = state_25962__$1;(statearr_25977_26012[(2)] = null);
(statearr_25977_26012[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25963 === (22)))
{var state_25962__$1 = state_25962;var statearr_25978_26013 = state_25962__$1;(statearr_25978_26013[(2)] = null);
(statearr_25978_26013[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25963 === (6)))
{var inst_25903 = (state_25962[(13)]);var inst_25912 = f.call(null,inst_25903);var inst_25913 = cljs.core.seq.call(null,inst_25912);var inst_25914 = inst_25913;var inst_25915 = null;var inst_25916 = (0);var inst_25917 = (0);var state_25962__$1 = (function (){var statearr_25979 = state_25962;(statearr_25979[(8)] = inst_25917);
(statearr_25979[(10)] = inst_25914);
(statearr_25979[(11)] = inst_25916);
(statearr_25979[(12)] = inst_25915);
return statearr_25979;
})();var statearr_25980_26014 = state_25962__$1;(statearr_25980_26014[(2)] = null);
(statearr_25980_26014[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25963 === (17)))
{var inst_25928 = (state_25962[(7)]);var inst_25932 = cljs.core.chunk_first.call(null,inst_25928);var inst_25933 = cljs.core.chunk_rest.call(null,inst_25928);var inst_25934 = cljs.core.count.call(null,inst_25932);var inst_25914 = inst_25933;var inst_25915 = inst_25932;var inst_25916 = inst_25934;var inst_25917 = (0);var state_25962__$1 = (function (){var statearr_25981 = state_25962;(statearr_25981[(8)] = inst_25917);
(statearr_25981[(10)] = inst_25914);
(statearr_25981[(11)] = inst_25916);
(statearr_25981[(12)] = inst_25915);
return statearr_25981;
})();var statearr_25982_26015 = state_25962__$1;(statearr_25982_26015[(2)] = null);
(statearr_25982_26015[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25963 === (3)))
{var inst_25960 = (state_25962[(2)]);var state_25962__$1 = state_25962;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25962__$1,inst_25960);
} else
{if((state_val_25963 === (12)))
{var inst_25948 = (state_25962[(2)]);var state_25962__$1 = state_25962;var statearr_25983_26016 = state_25962__$1;(statearr_25983_26016[(2)] = inst_25948);
(statearr_25983_26016[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25963 === (2)))
{var state_25962__$1 = state_25962;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25962__$1,(4),in$);
} else
{if((state_val_25963 === (23)))
{var inst_25956 = (state_25962[(2)]);var state_25962__$1 = state_25962;var statearr_25984_26017 = state_25962__$1;(statearr_25984_26017[(2)] = inst_25956);
(statearr_25984_26017[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25963 === (19)))
{var inst_25943 = (state_25962[(2)]);var state_25962__$1 = state_25962;var statearr_25985_26018 = state_25962__$1;(statearr_25985_26018[(2)] = inst_25943);
(statearr_25985_26018[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25963 === (11)))
{var inst_25928 = (state_25962[(7)]);var inst_25914 = (state_25962[(10)]);var inst_25928__$1 = cljs.core.seq.call(null,inst_25914);var state_25962__$1 = (function (){var statearr_25986 = state_25962;(statearr_25986[(7)] = inst_25928__$1);
return statearr_25986;
})();if(inst_25928__$1)
{var statearr_25987_26019 = state_25962__$1;(statearr_25987_26019[(1)] = (14));
} else
{var statearr_25988_26020 = state_25962__$1;(statearr_25988_26020[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25963 === (9)))
{var inst_25950 = (state_25962[(2)]);var inst_25951 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_25962__$1 = (function (){var statearr_25989 = state_25962;(statearr_25989[(15)] = inst_25950);
return statearr_25989;
})();if(cljs.core.truth_(inst_25951))
{var statearr_25990_26021 = state_25962__$1;(statearr_25990_26021[(1)] = (21));
} else
{var statearr_25991_26022 = state_25962__$1;(statearr_25991_26022[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25963 === (5)))
{var inst_25906 = cljs.core.async.close_BANG_.call(null,out);var state_25962__$1 = state_25962;var statearr_25992_26023 = state_25962__$1;(statearr_25992_26023[(2)] = inst_25906);
(statearr_25992_26023[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25963 === (14)))
{var inst_25928 = (state_25962[(7)]);var inst_25930 = cljs.core.chunked_seq_QMARK_.call(null,inst_25928);var state_25962__$1 = state_25962;if(inst_25930)
{var statearr_25993_26024 = state_25962__$1;(statearr_25993_26024[(1)] = (17));
} else
{var statearr_25994_26025 = state_25962__$1;(statearr_25994_26025[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25963 === (16)))
{var inst_25946 = (state_25962[(2)]);var state_25962__$1 = state_25962;var statearr_25995_26026 = state_25962__$1;(statearr_25995_26026[(2)] = inst_25946);
(statearr_25995_26026[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25963 === (10)))
{var inst_25917 = (state_25962[(8)]);var inst_25915 = (state_25962[(12)]);var inst_25922 = cljs.core._nth.call(null,inst_25915,inst_25917);var state_25962__$1 = state_25962;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25962__$1,(13),out,inst_25922);
} else
{if((state_val_25963 === (18)))
{var inst_25928 = (state_25962[(7)]);var inst_25937 = cljs.core.first.call(null,inst_25928);var state_25962__$1 = state_25962;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25962__$1,(20),out,inst_25937);
} else
{if((state_val_25963 === (8)))
{var inst_25917 = (state_25962[(8)]);var inst_25916 = (state_25962[(11)]);var inst_25919 = (inst_25917 < inst_25916);var inst_25920 = inst_25919;var state_25962__$1 = state_25962;if(cljs.core.truth_(inst_25920))
{var statearr_25996_26027 = state_25962__$1;(statearr_25996_26027[(1)] = (10));
} else
{var statearr_25997_26028 = state_25962__$1;(statearr_25997_26028[(1)] = (11));
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
var state_machine__9111__auto____0 = (function (){var statearr_26001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26001[(0)] = state_machine__9111__auto__);
(statearr_26001[(1)] = (1));
return statearr_26001;
});
var state_machine__9111__auto____1 = (function (state_25962){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25962);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26002){if((e26002 instanceof Object))
{var ex__9114__auto__ = e26002;var statearr_26003_26029 = state_25962;(statearr_26003_26029[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25962);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26002;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26030 = state_25962;
state_25962 = G__26030;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25962){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_26004 = f__9126__auto__.call(null);(statearr_26004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_26004;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26127 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26127,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26127,out){
return (function (state_26102){var state_val_26103 = (state_26102[(1)]);if((state_val_26103 === (7)))
{var inst_26097 = (state_26102[(2)]);var state_26102__$1 = state_26102;var statearr_26104_26128 = state_26102__$1;(statearr_26104_26128[(2)] = inst_26097);
(statearr_26104_26128[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26103 === (1)))
{var inst_26079 = null;var state_26102__$1 = (function (){var statearr_26105 = state_26102;(statearr_26105[(7)] = inst_26079);
return statearr_26105;
})();var statearr_26106_26129 = state_26102__$1;(statearr_26106_26129[(2)] = null);
(statearr_26106_26129[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26103 === (4)))
{var inst_26082 = (state_26102[(8)]);var inst_26082__$1 = (state_26102[(2)]);var inst_26083 = (inst_26082__$1 == null);var inst_26084 = cljs.core.not.call(null,inst_26083);var state_26102__$1 = (function (){var statearr_26107 = state_26102;(statearr_26107[(8)] = inst_26082__$1);
return statearr_26107;
})();if(inst_26084)
{var statearr_26108_26130 = state_26102__$1;(statearr_26108_26130[(1)] = (5));
} else
{var statearr_26109_26131 = state_26102__$1;(statearr_26109_26131[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26103 === (6)))
{var state_26102__$1 = state_26102;var statearr_26110_26132 = state_26102__$1;(statearr_26110_26132[(2)] = null);
(statearr_26110_26132[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26103 === (3)))
{var inst_26099 = (state_26102[(2)]);var inst_26100 = cljs.core.async.close_BANG_.call(null,out);var state_26102__$1 = (function (){var statearr_26111 = state_26102;(statearr_26111[(9)] = inst_26099);
return statearr_26111;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26102__$1,inst_26100);
} else
{if((state_val_26103 === (2)))
{var state_26102__$1 = state_26102;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26102__$1,(4),ch);
} else
{if((state_val_26103 === (11)))
{var inst_26082 = (state_26102[(8)]);var inst_26091 = (state_26102[(2)]);var inst_26079 = inst_26082;var state_26102__$1 = (function (){var statearr_26112 = state_26102;(statearr_26112[(10)] = inst_26091);
(statearr_26112[(7)] = inst_26079);
return statearr_26112;
})();var statearr_26113_26133 = state_26102__$1;(statearr_26113_26133[(2)] = null);
(statearr_26113_26133[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26103 === (9)))
{var inst_26082 = (state_26102[(8)]);var state_26102__$1 = state_26102;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26102__$1,(11),out,inst_26082);
} else
{if((state_val_26103 === (5)))
{var inst_26082 = (state_26102[(8)]);var inst_26079 = (state_26102[(7)]);var inst_26086 = cljs.core._EQ_.call(null,inst_26082,inst_26079);var state_26102__$1 = state_26102;if(inst_26086)
{var statearr_26115_26134 = state_26102__$1;(statearr_26115_26134[(1)] = (8));
} else
{var statearr_26116_26135 = state_26102__$1;(statearr_26116_26135[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26103 === (10)))
{var inst_26094 = (state_26102[(2)]);var state_26102__$1 = state_26102;var statearr_26117_26136 = state_26102__$1;(statearr_26117_26136[(2)] = inst_26094);
(statearr_26117_26136[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26103 === (8)))
{var inst_26079 = (state_26102[(7)]);var tmp26114 = inst_26079;var inst_26079__$1 = tmp26114;var state_26102__$1 = (function (){var statearr_26118 = state_26102;(statearr_26118[(7)] = inst_26079__$1);
return statearr_26118;
})();var statearr_26119_26137 = state_26102__$1;(statearr_26119_26137[(2)] = null);
(statearr_26119_26137[(1)] = (2));
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
});})(c__9125__auto___26127,out))
;return ((function (switch__9110__auto__,c__9125__auto___26127,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26123 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26123[(0)] = state_machine__9111__auto__);
(statearr_26123[(1)] = (1));
return statearr_26123;
});
var state_machine__9111__auto____1 = (function (state_26102){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26102);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26124){if((e26124 instanceof Object))
{var ex__9114__auto__ = e26124;var statearr_26125_26138 = state_26102;(statearr_26125_26138[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26102);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26124;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26139 = state_26102;
state_26102 = G__26139;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26102){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26127,out))
})();var state__9127__auto__ = (function (){var statearr_26126 = f__9126__auto__.call(null);(statearr_26126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26127);
return statearr_26126;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26127,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26274 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26274,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26274,out){
return (function (state_26244){var state_val_26245 = (state_26244[(1)]);if((state_val_26245 === (7)))
{var inst_26240 = (state_26244[(2)]);var state_26244__$1 = state_26244;var statearr_26246_26275 = state_26244__$1;(statearr_26246_26275[(2)] = inst_26240);
(statearr_26246_26275[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26245 === (1)))
{var inst_26207 = (new Array(n));var inst_26208 = inst_26207;var inst_26209 = (0);var state_26244__$1 = (function (){var statearr_26247 = state_26244;(statearr_26247[(7)] = inst_26209);
(statearr_26247[(8)] = inst_26208);
return statearr_26247;
})();var statearr_26248_26276 = state_26244__$1;(statearr_26248_26276[(2)] = null);
(statearr_26248_26276[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26245 === (4)))
{var inst_26212 = (state_26244[(9)]);var inst_26212__$1 = (state_26244[(2)]);var inst_26213 = (inst_26212__$1 == null);var inst_26214 = cljs.core.not.call(null,inst_26213);var state_26244__$1 = (function (){var statearr_26249 = state_26244;(statearr_26249[(9)] = inst_26212__$1);
return statearr_26249;
})();if(inst_26214)
{var statearr_26250_26277 = state_26244__$1;(statearr_26250_26277[(1)] = (5));
} else
{var statearr_26251_26278 = state_26244__$1;(statearr_26251_26278[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26245 === (15)))
{var inst_26234 = (state_26244[(2)]);var state_26244__$1 = state_26244;var statearr_26252_26279 = state_26244__$1;(statearr_26252_26279[(2)] = inst_26234);
(statearr_26252_26279[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26245 === (13)))
{var state_26244__$1 = state_26244;var statearr_26253_26280 = state_26244__$1;(statearr_26253_26280[(2)] = null);
(statearr_26253_26280[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26245 === (6)))
{var inst_26209 = (state_26244[(7)]);var inst_26230 = (inst_26209 > (0));var state_26244__$1 = state_26244;if(cljs.core.truth_(inst_26230))
{var statearr_26254_26281 = state_26244__$1;(statearr_26254_26281[(1)] = (12));
} else
{var statearr_26255_26282 = state_26244__$1;(statearr_26255_26282[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26245 === (3)))
{var inst_26242 = (state_26244[(2)]);var state_26244__$1 = state_26244;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26244__$1,inst_26242);
} else
{if((state_val_26245 === (12)))
{var inst_26208 = (state_26244[(8)]);var inst_26232 = cljs.core.vec.call(null,inst_26208);var state_26244__$1 = state_26244;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26244__$1,(15),out,inst_26232);
} else
{if((state_val_26245 === (2)))
{var state_26244__$1 = state_26244;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26244__$1,(4),ch);
} else
{if((state_val_26245 === (11)))
{var inst_26224 = (state_26244[(2)]);var inst_26225 = (new Array(n));var inst_26208 = inst_26225;var inst_26209 = (0);var state_26244__$1 = (function (){var statearr_26256 = state_26244;(statearr_26256[(7)] = inst_26209);
(statearr_26256[(10)] = inst_26224);
(statearr_26256[(8)] = inst_26208);
return statearr_26256;
})();var statearr_26257_26283 = state_26244__$1;(statearr_26257_26283[(2)] = null);
(statearr_26257_26283[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26245 === (9)))
{var inst_26208 = (state_26244[(8)]);var inst_26222 = cljs.core.vec.call(null,inst_26208);var state_26244__$1 = state_26244;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26244__$1,(11),out,inst_26222);
} else
{if((state_val_26245 === (5)))
{var inst_26212 = (state_26244[(9)]);var inst_26209 = (state_26244[(7)]);var inst_26208 = (state_26244[(8)]);var inst_26217 = (state_26244[(11)]);var inst_26216 = (inst_26208[inst_26209] = inst_26212);var inst_26217__$1 = (inst_26209 + (1));var inst_26218 = (inst_26217__$1 < n);var state_26244__$1 = (function (){var statearr_26258 = state_26244;(statearr_26258[(12)] = inst_26216);
(statearr_26258[(11)] = inst_26217__$1);
return statearr_26258;
})();if(cljs.core.truth_(inst_26218))
{var statearr_26259_26284 = state_26244__$1;(statearr_26259_26284[(1)] = (8));
} else
{var statearr_26260_26285 = state_26244__$1;(statearr_26260_26285[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26245 === (14)))
{var inst_26237 = (state_26244[(2)]);var inst_26238 = cljs.core.async.close_BANG_.call(null,out);var state_26244__$1 = (function (){var statearr_26262 = state_26244;(statearr_26262[(13)] = inst_26237);
return statearr_26262;
})();var statearr_26263_26286 = state_26244__$1;(statearr_26263_26286[(2)] = inst_26238);
(statearr_26263_26286[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26245 === (10)))
{var inst_26228 = (state_26244[(2)]);var state_26244__$1 = state_26244;var statearr_26264_26287 = state_26244__$1;(statearr_26264_26287[(2)] = inst_26228);
(statearr_26264_26287[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26245 === (8)))
{var inst_26208 = (state_26244[(8)]);var inst_26217 = (state_26244[(11)]);var tmp26261 = inst_26208;var inst_26208__$1 = tmp26261;var inst_26209 = inst_26217;var state_26244__$1 = (function (){var statearr_26265 = state_26244;(statearr_26265[(7)] = inst_26209);
(statearr_26265[(8)] = inst_26208__$1);
return statearr_26265;
})();var statearr_26266_26288 = state_26244__$1;(statearr_26266_26288[(2)] = null);
(statearr_26266_26288[(1)] = (2));
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
});})(c__9125__auto___26274,out))
;return ((function (switch__9110__auto__,c__9125__auto___26274,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26270 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26270[(0)] = state_machine__9111__auto__);
(statearr_26270[(1)] = (1));
return statearr_26270;
});
var state_machine__9111__auto____1 = (function (state_26244){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26244);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26271){if((e26271 instanceof Object))
{var ex__9114__auto__ = e26271;var statearr_26272_26289 = state_26244;(statearr_26272_26289[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26244);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26271;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26290 = state_26244;
state_26244 = G__26290;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26244){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26274,out))
})();var state__9127__auto__ = (function (){var statearr_26273 = f__9126__auto__.call(null);(statearr_26273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26274);
return statearr_26273;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26274,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26433 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26433,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26433,out){
return (function (state_26403){var state_val_26404 = (state_26403[(1)]);if((state_val_26404 === (7)))
{var inst_26399 = (state_26403[(2)]);var state_26403__$1 = state_26403;var statearr_26405_26434 = state_26403__$1;(statearr_26405_26434[(2)] = inst_26399);
(statearr_26405_26434[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26404 === (1)))
{var inst_26362 = [];var inst_26363 = inst_26362;var inst_26364 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_26403__$1 = (function (){var statearr_26406 = state_26403;(statearr_26406[(7)] = inst_26364);
(statearr_26406[(8)] = inst_26363);
return statearr_26406;
})();var statearr_26407_26435 = state_26403__$1;(statearr_26407_26435[(2)] = null);
(statearr_26407_26435[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26404 === (4)))
{var inst_26367 = (state_26403[(9)]);var inst_26367__$1 = (state_26403[(2)]);var inst_26368 = (inst_26367__$1 == null);var inst_26369 = cljs.core.not.call(null,inst_26368);var state_26403__$1 = (function (){var statearr_26408 = state_26403;(statearr_26408[(9)] = inst_26367__$1);
return statearr_26408;
})();if(inst_26369)
{var statearr_26409_26436 = state_26403__$1;(statearr_26409_26436[(1)] = (5));
} else
{var statearr_26410_26437 = state_26403__$1;(statearr_26410_26437[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26404 === (15)))
{var inst_26393 = (state_26403[(2)]);var state_26403__$1 = state_26403;var statearr_26411_26438 = state_26403__$1;(statearr_26411_26438[(2)] = inst_26393);
(statearr_26411_26438[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26404 === (13)))
{var state_26403__$1 = state_26403;var statearr_26412_26439 = state_26403__$1;(statearr_26412_26439[(2)] = null);
(statearr_26412_26439[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26404 === (6)))
{var inst_26363 = (state_26403[(8)]);var inst_26388 = inst_26363.length;var inst_26389 = (inst_26388 > (0));var state_26403__$1 = state_26403;if(cljs.core.truth_(inst_26389))
{var statearr_26413_26440 = state_26403__$1;(statearr_26413_26440[(1)] = (12));
} else
{var statearr_26414_26441 = state_26403__$1;(statearr_26414_26441[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26404 === (3)))
{var inst_26401 = (state_26403[(2)]);var state_26403__$1 = state_26403;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26403__$1,inst_26401);
} else
{if((state_val_26404 === (12)))
{var inst_26363 = (state_26403[(8)]);var inst_26391 = cljs.core.vec.call(null,inst_26363);var state_26403__$1 = state_26403;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26403__$1,(15),out,inst_26391);
} else
{if((state_val_26404 === (2)))
{var state_26403__$1 = state_26403;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26403__$1,(4),ch);
} else
{if((state_val_26404 === (11)))
{var inst_26367 = (state_26403[(9)]);var inst_26371 = (state_26403[(10)]);var inst_26381 = (state_26403[(2)]);var inst_26382 = [];var inst_26383 = inst_26382.push(inst_26367);var inst_26363 = inst_26382;var inst_26364 = inst_26371;var state_26403__$1 = (function (){var statearr_26415 = state_26403;(statearr_26415[(7)] = inst_26364);
(statearr_26415[(11)] = inst_26381);
(statearr_26415[(12)] = inst_26383);
(statearr_26415[(8)] = inst_26363);
return statearr_26415;
})();var statearr_26416_26442 = state_26403__$1;(statearr_26416_26442[(2)] = null);
(statearr_26416_26442[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26404 === (9)))
{var inst_26363 = (state_26403[(8)]);var inst_26379 = cljs.core.vec.call(null,inst_26363);var state_26403__$1 = state_26403;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26403__$1,(11),out,inst_26379);
} else
{if((state_val_26404 === (5)))
{var inst_26364 = (state_26403[(7)]);var inst_26367 = (state_26403[(9)]);var inst_26371 = (state_26403[(10)]);var inst_26371__$1 = f.call(null,inst_26367);var inst_26372 = cljs.core._EQ_.call(null,inst_26371__$1,inst_26364);var inst_26373 = cljs.core.keyword_identical_QMARK_.call(null,inst_26364,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_26374 = (inst_26372) || (inst_26373);var state_26403__$1 = (function (){var statearr_26417 = state_26403;(statearr_26417[(10)] = inst_26371__$1);
return statearr_26417;
})();if(cljs.core.truth_(inst_26374))
{var statearr_26418_26443 = state_26403__$1;(statearr_26418_26443[(1)] = (8));
} else
{var statearr_26419_26444 = state_26403__$1;(statearr_26419_26444[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26404 === (14)))
{var inst_26396 = (state_26403[(2)]);var inst_26397 = cljs.core.async.close_BANG_.call(null,out);var state_26403__$1 = (function (){var statearr_26421 = state_26403;(statearr_26421[(13)] = inst_26396);
return statearr_26421;
})();var statearr_26422_26445 = state_26403__$1;(statearr_26422_26445[(2)] = inst_26397);
(statearr_26422_26445[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26404 === (10)))
{var inst_26386 = (state_26403[(2)]);var state_26403__$1 = state_26403;var statearr_26423_26446 = state_26403__$1;(statearr_26423_26446[(2)] = inst_26386);
(statearr_26423_26446[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26404 === (8)))
{var inst_26367 = (state_26403[(9)]);var inst_26371 = (state_26403[(10)]);var inst_26363 = (state_26403[(8)]);var inst_26376 = inst_26363.push(inst_26367);var tmp26420 = inst_26363;var inst_26363__$1 = tmp26420;var inst_26364 = inst_26371;var state_26403__$1 = (function (){var statearr_26424 = state_26403;(statearr_26424[(7)] = inst_26364);
(statearr_26424[(14)] = inst_26376);
(statearr_26424[(8)] = inst_26363__$1);
return statearr_26424;
})();var statearr_26425_26447 = state_26403__$1;(statearr_26425_26447[(2)] = null);
(statearr_26425_26447[(1)] = (2));
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
});})(c__9125__auto___26433,out))
;return ((function (switch__9110__auto__,c__9125__auto___26433,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26429[(0)] = state_machine__9111__auto__);
(statearr_26429[(1)] = (1));
return statearr_26429;
});
var state_machine__9111__auto____1 = (function (state_26403){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26403);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26430){if((e26430 instanceof Object))
{var ex__9114__auto__ = e26430;var statearr_26431_26448 = state_26403;(statearr_26431_26448[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26403);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26430;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26449 = state_26403;
state_26403 = G__26449;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26403){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26433,out))
})();var state__9127__auto__ = (function (){var statearr_26432 = f__9126__auto__.call(null);(statearr_26432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26433);
return statearr_26432;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26433,out))
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
