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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24287 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24287 = (function (f,fn_handler,meta24288){
this.f = f;
this.fn_handler = fn_handler;
this.meta24288 = meta24288;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24287.cljs$lang$type = true;
cljs.core.async.t24287.cljs$lang$ctorStr = "cljs.core.async/t24287";
cljs.core.async.t24287.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24287");
});
cljs.core.async.t24287.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24287.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24287.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24289){var self__ = this;
var _24289__$1 = this;return self__.meta24288;
});
cljs.core.async.t24287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24289,meta24288__$1){var self__ = this;
var _24289__$1 = this;return (new cljs.core.async.t24287(self__.f,self__.fn_handler,meta24288__$1));
});
cljs.core.async.__GT_t24287 = (function __GT_t24287(f__$1,fn_handler__$1,meta24288){return (new cljs.core.async.t24287(f__$1,fn_handler__$1,meta24288));
});
}
return (new cljs.core.async.t24287(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24291 = buff;if(G__24291)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__24291.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24291.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24291);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24291);
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
{var val_24292 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_24292);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_24292,ret){
return (function (){return fn1.call(null,val_24292);
});})(val_24292,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___24293 = n;var x_24294 = (0);while(true){
if((x_24294 < n__4508__auto___24293))
{(a[x_24294] = (0));
{
var G__24295 = (x_24294 + (1));
x_24294 = G__24295;
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
var G__24296 = (i + (1));
i = G__24296;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t24300 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24300 = (function (flag,alt_flag,meta24301){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24301 = meta24301;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24300.cljs$lang$type = true;
cljs.core.async.t24300.cljs$lang$ctorStr = "cljs.core.async/t24300";
cljs.core.async.t24300.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24300");
});})(flag))
;
cljs.core.async.t24300.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24300.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t24300.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t24300.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24302){var self__ = this;
var _24302__$1 = this;return self__.meta24301;
});})(flag))
;
cljs.core.async.t24300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24302,meta24301__$1){var self__ = this;
var _24302__$1 = this;return (new cljs.core.async.t24300(self__.flag,self__.alt_flag,meta24301__$1));
});})(flag))
;
cljs.core.async.__GT_t24300 = ((function (flag){
return (function __GT_t24300(flag__$1,alt_flag__$1,meta24301){return (new cljs.core.async.t24300(flag__$1,alt_flag__$1,meta24301));
});})(flag))
;
}
return (new cljs.core.async.t24300(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24306 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24306 = (function (cb,flag,alt_handler,meta24307){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24307 = meta24307;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24306.cljs$lang$type = true;
cljs.core.async.t24306.cljs$lang$ctorStr = "cljs.core.async/t24306";
cljs.core.async.t24306.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24306");
});
cljs.core.async.t24306.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24306.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t24306.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t24306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24308){var self__ = this;
var _24308__$1 = this;return self__.meta24307;
});
cljs.core.async.t24306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24308,meta24307__$1){var self__ = this;
var _24308__$1 = this;return (new cljs.core.async.t24306(self__.cb,self__.flag,self__.alt_handler,meta24307__$1));
});
cljs.core.async.__GT_t24306 = (function __GT_t24306(cb__$1,flag__$1,alt_handler__$1,meta24307){return (new cljs.core.async.t24306(cb__$1,flag__$1,alt_handler__$1,meta24307));
});
}
return (new cljs.core.async.t24306(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24309_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24309_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24310_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24310_SHARP_,port], null));
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
var G__24311 = (i + (1));
i = G__24311;
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
var alts_BANG___delegate = function (ports,p__24312){var map__24314 = p__24312;var map__24314__$1 = ((cljs.core.seq_QMARK_.call(null,map__24314))?cljs.core.apply.call(null,cljs.core.hash_map,map__24314):map__24314);var opts = map__24314__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24312 = null;if (arguments.length > 1) {
  p__24312 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24312);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24315){
var ports = cljs.core.first(arglist__24315);
var p__24312 = cljs.core.rest(arglist__24315);
return alts_BANG___delegate(ports,p__24312);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__11517__auto___24410 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___24410){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___24410){
return (function (state_24386){var state_val_24387 = (state_24386[(1)]);if((state_val_24387 === (7)))
{var inst_24382 = (state_24386[(2)]);var state_24386__$1 = state_24386;var statearr_24388_24411 = state_24386__$1;(statearr_24388_24411[(2)] = inst_24382);
(statearr_24388_24411[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24387 === (1)))
{var state_24386__$1 = state_24386;var statearr_24389_24412 = state_24386__$1;(statearr_24389_24412[(2)] = null);
(statearr_24389_24412[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24387 === (4)))
{var inst_24365 = (state_24386[(7)]);var inst_24365__$1 = (state_24386[(2)]);var inst_24366 = (inst_24365__$1 == null);var state_24386__$1 = (function (){var statearr_24390 = state_24386;(statearr_24390[(7)] = inst_24365__$1);
return statearr_24390;
})();if(cljs.core.truth_(inst_24366))
{var statearr_24391_24413 = state_24386__$1;(statearr_24391_24413[(1)] = (5));
} else
{var statearr_24392_24414 = state_24386__$1;(statearr_24392_24414[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24387 === (13)))
{var state_24386__$1 = state_24386;var statearr_24393_24415 = state_24386__$1;(statearr_24393_24415[(2)] = null);
(statearr_24393_24415[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24387 === (6)))
{var inst_24365 = (state_24386[(7)]);var state_24386__$1 = state_24386;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24386__$1,(11),to,inst_24365);
} else
{if((state_val_24387 === (3)))
{var inst_24384 = (state_24386[(2)]);var state_24386__$1 = state_24386;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24386__$1,inst_24384);
} else
{if((state_val_24387 === (12)))
{var state_24386__$1 = state_24386;var statearr_24394_24416 = state_24386__$1;(statearr_24394_24416[(2)] = null);
(statearr_24394_24416[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24387 === (2)))
{var state_24386__$1 = state_24386;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24386__$1,(4),from);
} else
{if((state_val_24387 === (11)))
{var inst_24375 = (state_24386[(2)]);var state_24386__$1 = state_24386;if(cljs.core.truth_(inst_24375))
{var statearr_24395_24417 = state_24386__$1;(statearr_24395_24417[(1)] = (12));
} else
{var statearr_24396_24418 = state_24386__$1;(statearr_24396_24418[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24387 === (9)))
{var state_24386__$1 = state_24386;var statearr_24397_24419 = state_24386__$1;(statearr_24397_24419[(2)] = null);
(statearr_24397_24419[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24387 === (5)))
{var state_24386__$1 = state_24386;if(cljs.core.truth_(close_QMARK_))
{var statearr_24398_24420 = state_24386__$1;(statearr_24398_24420[(1)] = (8));
} else
{var statearr_24399_24421 = state_24386__$1;(statearr_24399_24421[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24387 === (14)))
{var inst_24380 = (state_24386[(2)]);var state_24386__$1 = state_24386;var statearr_24400_24422 = state_24386__$1;(statearr_24400_24422[(2)] = inst_24380);
(statearr_24400_24422[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24387 === (10)))
{var inst_24372 = (state_24386[(2)]);var state_24386__$1 = state_24386;var statearr_24401_24423 = state_24386__$1;(statearr_24401_24423[(2)] = inst_24372);
(statearr_24401_24423[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24387 === (8)))
{var inst_24369 = cljs.core.async.close_BANG_.call(null,to);var state_24386__$1 = state_24386;var statearr_24402_24424 = state_24386__$1;(statearr_24402_24424[(2)] = inst_24369);
(statearr_24402_24424[(1)] = (10));
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
});})(c__11517__auto___24410))
;return ((function (switch__11461__auto__,c__11517__auto___24410){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24406 = [null,null,null,null,null,null,null,null];(statearr_24406[(0)] = state_machine__11462__auto__);
(statearr_24406[(1)] = (1));
return statearr_24406;
});
var state_machine__11462__auto____1 = (function (state_24386){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24386);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24407){if((e24407 instanceof Object))
{var ex__11465__auto__ = e24407;var statearr_24408_24425 = state_24386;(statearr_24408_24425[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24386);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24407;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24426 = state_24386;
state_24386 = G__24426;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24386){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___24410))
})();var state__11519__auto__ = (function (){var statearr_24409 = f__11518__auto__.call(null);(statearr_24409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24410);
return statearr_24409;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___24410))
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
return (function (p__24610){var vec__24611 = p__24610;var v = cljs.core.nth.call(null,vec__24611,(0),null);var p = cljs.core.nth.call(null,vec__24611,(1),null);var job = vec__24611;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__11517__auto___24793 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___24793,res,vec__24611,v,p,job,jobs,results){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___24793,res,vec__24611,v,p,job,jobs,results){
return (function (state_24616){var state_val_24617 = (state_24616[(1)]);if((state_val_24617 === (2)))
{var inst_24613 = (state_24616[(2)]);var inst_24614 = cljs.core.async.close_BANG_.call(null,res);var state_24616__$1 = (function (){var statearr_24618 = state_24616;(statearr_24618[(7)] = inst_24613);
return statearr_24618;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24616__$1,inst_24614);
} else
{if((state_val_24617 === (1)))
{var state_24616__$1 = state_24616;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24616__$1,(2),res,v);
} else
{return null;
}
}
});})(c__11517__auto___24793,res,vec__24611,v,p,job,jobs,results))
;return ((function (switch__11461__auto__,c__11517__auto___24793,res,vec__24611,v,p,job,jobs,results){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24622 = [null,null,null,null,null,null,null,null];(statearr_24622[(0)] = state_machine__11462__auto__);
(statearr_24622[(1)] = (1));
return statearr_24622;
});
var state_machine__11462__auto____1 = (function (state_24616){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24616);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24623){if((e24623 instanceof Object))
{var ex__11465__auto__ = e24623;var statearr_24624_24794 = state_24616;(statearr_24624_24794[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24616);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24623;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24795 = state_24616;
state_24616 = G__24795;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24616){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___24793,res,vec__24611,v,p,job,jobs,results))
})();var state__11519__auto__ = (function (){var statearr_24625 = f__11518__auto__.call(null);(statearr_24625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24793);
return statearr_24625;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___24793,res,vec__24611,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__24626){var vec__24627 = p__24626;var v = cljs.core.nth.call(null,vec__24627,(0),null);var p = cljs.core.nth.call(null,vec__24627,(1),null);var job = vec__24627;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___24796 = n;var __24797 = (0);while(true){
if((__24797 < n__4508__auto___24796))
{var G__24628_24798 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__24628_24798) {
case "async":
var c__11517__auto___24800 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24797,c__11517__auto___24800,G__24628_24798,n__4508__auto___24796,jobs,results,process,async){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (__24797,c__11517__auto___24800,G__24628_24798,n__4508__auto___24796,jobs,results,process,async){
return (function (state_24641){var state_val_24642 = (state_24641[(1)]);if((state_val_24642 === (7)))
{var inst_24637 = (state_24641[(2)]);var state_24641__$1 = state_24641;var statearr_24643_24801 = state_24641__$1;(statearr_24643_24801[(2)] = inst_24637);
(statearr_24643_24801[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24642 === (6)))
{var state_24641__$1 = state_24641;var statearr_24644_24802 = state_24641__$1;(statearr_24644_24802[(2)] = null);
(statearr_24644_24802[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24642 === (5)))
{var state_24641__$1 = state_24641;var statearr_24645_24803 = state_24641__$1;(statearr_24645_24803[(2)] = null);
(statearr_24645_24803[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24642 === (4)))
{var inst_24631 = (state_24641[(2)]);var inst_24632 = async.call(null,inst_24631);var state_24641__$1 = state_24641;if(cljs.core.truth_(inst_24632))
{var statearr_24646_24804 = state_24641__$1;(statearr_24646_24804[(1)] = (5));
} else
{var statearr_24647_24805 = state_24641__$1;(statearr_24647_24805[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24642 === (3)))
{var inst_24639 = (state_24641[(2)]);var state_24641__$1 = state_24641;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24641__$1,inst_24639);
} else
{if((state_val_24642 === (2)))
{var state_24641__$1 = state_24641;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24641__$1,(4),jobs);
} else
{if((state_val_24642 === (1)))
{var state_24641__$1 = state_24641;var statearr_24648_24806 = state_24641__$1;(statearr_24648_24806[(2)] = null);
(statearr_24648_24806[(1)] = (2));
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
});})(__24797,c__11517__auto___24800,G__24628_24798,n__4508__auto___24796,jobs,results,process,async))
;return ((function (__24797,switch__11461__auto__,c__11517__auto___24800,G__24628_24798,n__4508__auto___24796,jobs,results,process,async){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24652 = [null,null,null,null,null,null,null];(statearr_24652[(0)] = state_machine__11462__auto__);
(statearr_24652[(1)] = (1));
return statearr_24652;
});
var state_machine__11462__auto____1 = (function (state_24641){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24641);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24653){if((e24653 instanceof Object))
{var ex__11465__auto__ = e24653;var statearr_24654_24807 = state_24641;(statearr_24654_24807[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24641);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24653;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24808 = state_24641;
state_24641 = G__24808;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24641){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(__24797,switch__11461__auto__,c__11517__auto___24800,G__24628_24798,n__4508__auto___24796,jobs,results,process,async))
})();var state__11519__auto__ = (function (){var statearr_24655 = f__11518__auto__.call(null);(statearr_24655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24800);
return statearr_24655;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(__24797,c__11517__auto___24800,G__24628_24798,n__4508__auto___24796,jobs,results,process,async))
);

break;
case "compute":
var c__11517__auto___24809 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24797,c__11517__auto___24809,G__24628_24798,n__4508__auto___24796,jobs,results,process,async){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (__24797,c__11517__auto___24809,G__24628_24798,n__4508__auto___24796,jobs,results,process,async){
return (function (state_24668){var state_val_24669 = (state_24668[(1)]);if((state_val_24669 === (7)))
{var inst_24664 = (state_24668[(2)]);var state_24668__$1 = state_24668;var statearr_24670_24810 = state_24668__$1;(statearr_24670_24810[(2)] = inst_24664);
(statearr_24670_24810[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24669 === (6)))
{var state_24668__$1 = state_24668;var statearr_24671_24811 = state_24668__$1;(statearr_24671_24811[(2)] = null);
(statearr_24671_24811[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24669 === (5)))
{var state_24668__$1 = state_24668;var statearr_24672_24812 = state_24668__$1;(statearr_24672_24812[(2)] = null);
(statearr_24672_24812[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24669 === (4)))
{var inst_24658 = (state_24668[(2)]);var inst_24659 = process.call(null,inst_24658);var state_24668__$1 = state_24668;if(cljs.core.truth_(inst_24659))
{var statearr_24673_24813 = state_24668__$1;(statearr_24673_24813[(1)] = (5));
} else
{var statearr_24674_24814 = state_24668__$1;(statearr_24674_24814[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24669 === (3)))
{var inst_24666 = (state_24668[(2)]);var state_24668__$1 = state_24668;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24668__$1,inst_24666);
} else
{if((state_val_24669 === (2)))
{var state_24668__$1 = state_24668;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24668__$1,(4),jobs);
} else
{if((state_val_24669 === (1)))
{var state_24668__$1 = state_24668;var statearr_24675_24815 = state_24668__$1;(statearr_24675_24815[(2)] = null);
(statearr_24675_24815[(1)] = (2));
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
});})(__24797,c__11517__auto___24809,G__24628_24798,n__4508__auto___24796,jobs,results,process,async))
;return ((function (__24797,switch__11461__auto__,c__11517__auto___24809,G__24628_24798,n__4508__auto___24796,jobs,results,process,async){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24679 = [null,null,null,null,null,null,null];(statearr_24679[(0)] = state_machine__11462__auto__);
(statearr_24679[(1)] = (1));
return statearr_24679;
});
var state_machine__11462__auto____1 = (function (state_24668){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24668);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24680){if((e24680 instanceof Object))
{var ex__11465__auto__ = e24680;var statearr_24681_24816 = state_24668;(statearr_24681_24816[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24668);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24680;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24817 = state_24668;
state_24668 = G__24817;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24668){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(__24797,switch__11461__auto__,c__11517__auto___24809,G__24628_24798,n__4508__auto___24796,jobs,results,process,async))
})();var state__11519__auto__ = (function (){var statearr_24682 = f__11518__auto__.call(null);(statearr_24682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24809);
return statearr_24682;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(__24797,c__11517__auto___24809,G__24628_24798,n__4508__auto___24796,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__24818 = (__24797 + (1));
__24797 = G__24818;
continue;
}
} else
{}
break;
}
var c__11517__auto___24819 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___24819,jobs,results,process,async){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___24819,jobs,results,process,async){
return (function (state_24704){var state_val_24705 = (state_24704[(1)]);if((state_val_24705 === (9)))
{var inst_24697 = (state_24704[(2)]);var state_24704__$1 = (function (){var statearr_24706 = state_24704;(statearr_24706[(7)] = inst_24697);
return statearr_24706;
})();var statearr_24707_24820 = state_24704__$1;(statearr_24707_24820[(2)] = null);
(statearr_24707_24820[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24705 === (8)))
{var inst_24690 = (state_24704[(8)]);var inst_24695 = (state_24704[(2)]);var state_24704__$1 = (function (){var statearr_24708 = state_24704;(statearr_24708[(9)] = inst_24695);
return statearr_24708;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24704__$1,(9),results,inst_24690);
} else
{if((state_val_24705 === (7)))
{var inst_24700 = (state_24704[(2)]);var state_24704__$1 = state_24704;var statearr_24709_24821 = state_24704__$1;(statearr_24709_24821[(2)] = inst_24700);
(statearr_24709_24821[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24705 === (6)))
{var inst_24690 = (state_24704[(8)]);var inst_24685 = (state_24704[(10)]);var inst_24690__$1 = cljs.core.async.chan.call(null,(1));var inst_24691 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24692 = [inst_24685,inst_24690__$1];var inst_24693 = (new cljs.core.PersistentVector(null,2,(5),inst_24691,inst_24692,null));var state_24704__$1 = (function (){var statearr_24710 = state_24704;(statearr_24710[(8)] = inst_24690__$1);
return statearr_24710;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24704__$1,(8),jobs,inst_24693);
} else
{if((state_val_24705 === (5)))
{var inst_24688 = cljs.core.async.close_BANG_.call(null,jobs);var state_24704__$1 = state_24704;var statearr_24711_24822 = state_24704__$1;(statearr_24711_24822[(2)] = inst_24688);
(statearr_24711_24822[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24705 === (4)))
{var inst_24685 = (state_24704[(10)]);var inst_24685__$1 = (state_24704[(2)]);var inst_24686 = (inst_24685__$1 == null);var state_24704__$1 = (function (){var statearr_24712 = state_24704;(statearr_24712[(10)] = inst_24685__$1);
return statearr_24712;
})();if(cljs.core.truth_(inst_24686))
{var statearr_24713_24823 = state_24704__$1;(statearr_24713_24823[(1)] = (5));
} else
{var statearr_24714_24824 = state_24704__$1;(statearr_24714_24824[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24705 === (3)))
{var inst_24702 = (state_24704[(2)]);var state_24704__$1 = state_24704;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24704__$1,inst_24702);
} else
{if((state_val_24705 === (2)))
{var state_24704__$1 = state_24704;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24704__$1,(4),from);
} else
{if((state_val_24705 === (1)))
{var state_24704__$1 = state_24704;var statearr_24715_24825 = state_24704__$1;(statearr_24715_24825[(2)] = null);
(statearr_24715_24825[(1)] = (2));
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
});})(c__11517__auto___24819,jobs,results,process,async))
;return ((function (switch__11461__auto__,c__11517__auto___24819,jobs,results,process,async){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24719 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24719[(0)] = state_machine__11462__auto__);
(statearr_24719[(1)] = (1));
return statearr_24719;
});
var state_machine__11462__auto____1 = (function (state_24704){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24704);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24720){if((e24720 instanceof Object))
{var ex__11465__auto__ = e24720;var statearr_24721_24826 = state_24704;(statearr_24721_24826[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24704);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24720;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24827 = state_24704;
state_24704 = G__24827;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24704){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___24819,jobs,results,process,async))
})();var state__11519__auto__ = (function (){var statearr_24722 = f__11518__auto__.call(null);(statearr_24722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24819);
return statearr_24722;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___24819,jobs,results,process,async))
);
var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,jobs,results,process,async){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,jobs,results,process,async){
return (function (state_24760){var state_val_24761 = (state_24760[(1)]);if((state_val_24761 === (7)))
{var inst_24756 = (state_24760[(2)]);var state_24760__$1 = state_24760;var statearr_24762_24828 = state_24760__$1;(statearr_24762_24828[(2)] = inst_24756);
(statearr_24762_24828[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24761 === (20)))
{var state_24760__$1 = state_24760;var statearr_24763_24829 = state_24760__$1;(statearr_24763_24829[(2)] = null);
(statearr_24763_24829[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24761 === (1)))
{var state_24760__$1 = state_24760;var statearr_24764_24830 = state_24760__$1;(statearr_24764_24830[(2)] = null);
(statearr_24764_24830[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24761 === (4)))
{var inst_24725 = (state_24760[(7)]);var inst_24725__$1 = (state_24760[(2)]);var inst_24726 = (inst_24725__$1 == null);var state_24760__$1 = (function (){var statearr_24765 = state_24760;(statearr_24765[(7)] = inst_24725__$1);
return statearr_24765;
})();if(cljs.core.truth_(inst_24726))
{var statearr_24766_24831 = state_24760__$1;(statearr_24766_24831[(1)] = (5));
} else
{var statearr_24767_24832 = state_24760__$1;(statearr_24767_24832[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24761 === (15)))
{var inst_24738 = (state_24760[(8)]);var state_24760__$1 = state_24760;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24760__$1,(18),to,inst_24738);
} else
{if((state_val_24761 === (21)))
{var inst_24751 = (state_24760[(2)]);var state_24760__$1 = state_24760;var statearr_24768_24833 = state_24760__$1;(statearr_24768_24833[(2)] = inst_24751);
(statearr_24768_24833[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24761 === (13)))
{var inst_24753 = (state_24760[(2)]);var state_24760__$1 = (function (){var statearr_24769 = state_24760;(statearr_24769[(9)] = inst_24753);
return statearr_24769;
})();var statearr_24770_24834 = state_24760__$1;(statearr_24770_24834[(2)] = null);
(statearr_24770_24834[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24761 === (6)))
{var inst_24725 = (state_24760[(7)]);var state_24760__$1 = state_24760;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24760__$1,(11),inst_24725);
} else
{if((state_val_24761 === (17)))
{var inst_24746 = (state_24760[(2)]);var state_24760__$1 = state_24760;if(cljs.core.truth_(inst_24746))
{var statearr_24771_24835 = state_24760__$1;(statearr_24771_24835[(1)] = (19));
} else
{var statearr_24772_24836 = state_24760__$1;(statearr_24772_24836[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24761 === (3)))
{var inst_24758 = (state_24760[(2)]);var state_24760__$1 = state_24760;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24760__$1,inst_24758);
} else
{if((state_val_24761 === (12)))
{var inst_24735 = (state_24760[(10)]);var state_24760__$1 = state_24760;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24760__$1,(14),inst_24735);
} else
{if((state_val_24761 === (2)))
{var state_24760__$1 = state_24760;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24760__$1,(4),results);
} else
{if((state_val_24761 === (19)))
{var state_24760__$1 = state_24760;var statearr_24773_24837 = state_24760__$1;(statearr_24773_24837[(2)] = null);
(statearr_24773_24837[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24761 === (11)))
{var inst_24735 = (state_24760[(2)]);var state_24760__$1 = (function (){var statearr_24774 = state_24760;(statearr_24774[(10)] = inst_24735);
return statearr_24774;
})();var statearr_24775_24838 = state_24760__$1;(statearr_24775_24838[(2)] = null);
(statearr_24775_24838[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24761 === (9)))
{var state_24760__$1 = state_24760;var statearr_24776_24839 = state_24760__$1;(statearr_24776_24839[(2)] = null);
(statearr_24776_24839[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24761 === (5)))
{var state_24760__$1 = state_24760;if(cljs.core.truth_(close_QMARK_))
{var statearr_24777_24840 = state_24760__$1;(statearr_24777_24840[(1)] = (8));
} else
{var statearr_24778_24841 = state_24760__$1;(statearr_24778_24841[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24761 === (14)))
{var inst_24738 = (state_24760[(8)]);var inst_24740 = (state_24760[(11)]);var inst_24738__$1 = (state_24760[(2)]);var inst_24739 = (inst_24738__$1 == null);var inst_24740__$1 = cljs.core.not.call(null,inst_24739);var state_24760__$1 = (function (){var statearr_24779 = state_24760;(statearr_24779[(8)] = inst_24738__$1);
(statearr_24779[(11)] = inst_24740__$1);
return statearr_24779;
})();if(inst_24740__$1)
{var statearr_24780_24842 = state_24760__$1;(statearr_24780_24842[(1)] = (15));
} else
{var statearr_24781_24843 = state_24760__$1;(statearr_24781_24843[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24761 === (16)))
{var inst_24740 = (state_24760[(11)]);var state_24760__$1 = state_24760;var statearr_24782_24844 = state_24760__$1;(statearr_24782_24844[(2)] = inst_24740);
(statearr_24782_24844[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24761 === (10)))
{var inst_24732 = (state_24760[(2)]);var state_24760__$1 = state_24760;var statearr_24783_24845 = state_24760__$1;(statearr_24783_24845[(2)] = inst_24732);
(statearr_24783_24845[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24761 === (18)))
{var inst_24743 = (state_24760[(2)]);var state_24760__$1 = state_24760;var statearr_24784_24846 = state_24760__$1;(statearr_24784_24846[(2)] = inst_24743);
(statearr_24784_24846[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24761 === (8)))
{var inst_24729 = cljs.core.async.close_BANG_.call(null,to);var state_24760__$1 = state_24760;var statearr_24785_24847 = state_24760__$1;(statearr_24785_24847[(2)] = inst_24729);
(statearr_24785_24847[(1)] = (10));
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
});})(c__11517__auto__,jobs,results,process,async))
;return ((function (switch__11461__auto__,c__11517__auto__,jobs,results,process,async){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24789 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24789[(0)] = state_machine__11462__auto__);
(statearr_24789[(1)] = (1));
return statearr_24789;
});
var state_machine__11462__auto____1 = (function (state_24760){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24760);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24790){if((e24790 instanceof Object))
{var ex__11465__auto__ = e24790;var statearr_24791_24848 = state_24760;(statearr_24791_24848[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24760);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24790;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24849 = state_24760;
state_24760 = G__24849;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24760){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,jobs,results,process,async))
})();var state__11519__auto__ = (function (){var statearr_24792 = f__11518__auto__.call(null);(statearr_24792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_24792;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,jobs,results,process,async))
);
return c__11517__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11517__auto___24950 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___24950,tc,fc){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___24950,tc,fc){
return (function (state_24925){var state_val_24926 = (state_24925[(1)]);if((state_val_24926 === (7)))
{var inst_24921 = (state_24925[(2)]);var state_24925__$1 = state_24925;var statearr_24927_24951 = state_24925__$1;(statearr_24927_24951[(2)] = inst_24921);
(statearr_24927_24951[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24926 === (1)))
{var state_24925__$1 = state_24925;var statearr_24928_24952 = state_24925__$1;(statearr_24928_24952[(2)] = null);
(statearr_24928_24952[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24926 === (4)))
{var inst_24902 = (state_24925[(7)]);var inst_24902__$1 = (state_24925[(2)]);var inst_24903 = (inst_24902__$1 == null);var state_24925__$1 = (function (){var statearr_24929 = state_24925;(statearr_24929[(7)] = inst_24902__$1);
return statearr_24929;
})();if(cljs.core.truth_(inst_24903))
{var statearr_24930_24953 = state_24925__$1;(statearr_24930_24953[(1)] = (5));
} else
{var statearr_24931_24954 = state_24925__$1;(statearr_24931_24954[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24926 === (13)))
{var state_24925__$1 = state_24925;var statearr_24932_24955 = state_24925__$1;(statearr_24932_24955[(2)] = null);
(statearr_24932_24955[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24926 === (6)))
{var inst_24902 = (state_24925[(7)]);var inst_24908 = p.call(null,inst_24902);var state_24925__$1 = state_24925;if(cljs.core.truth_(inst_24908))
{var statearr_24933_24956 = state_24925__$1;(statearr_24933_24956[(1)] = (9));
} else
{var statearr_24934_24957 = state_24925__$1;(statearr_24934_24957[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24926 === (3)))
{var inst_24923 = (state_24925[(2)]);var state_24925__$1 = state_24925;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24925__$1,inst_24923);
} else
{if((state_val_24926 === (12)))
{var state_24925__$1 = state_24925;var statearr_24935_24958 = state_24925__$1;(statearr_24935_24958[(2)] = null);
(statearr_24935_24958[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24926 === (2)))
{var state_24925__$1 = state_24925;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24925__$1,(4),ch);
} else
{if((state_val_24926 === (11)))
{var inst_24902 = (state_24925[(7)]);var inst_24912 = (state_24925[(2)]);var state_24925__$1 = state_24925;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24925__$1,(8),inst_24912,inst_24902);
} else
{if((state_val_24926 === (9)))
{var state_24925__$1 = state_24925;var statearr_24936_24959 = state_24925__$1;(statearr_24936_24959[(2)] = tc);
(statearr_24936_24959[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24926 === (5)))
{var inst_24905 = cljs.core.async.close_BANG_.call(null,tc);var inst_24906 = cljs.core.async.close_BANG_.call(null,fc);var state_24925__$1 = (function (){var statearr_24937 = state_24925;(statearr_24937[(8)] = inst_24905);
return statearr_24937;
})();var statearr_24938_24960 = state_24925__$1;(statearr_24938_24960[(2)] = inst_24906);
(statearr_24938_24960[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24926 === (14)))
{var inst_24919 = (state_24925[(2)]);var state_24925__$1 = state_24925;var statearr_24939_24961 = state_24925__$1;(statearr_24939_24961[(2)] = inst_24919);
(statearr_24939_24961[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24926 === (10)))
{var state_24925__$1 = state_24925;var statearr_24940_24962 = state_24925__$1;(statearr_24940_24962[(2)] = fc);
(statearr_24940_24962[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24926 === (8)))
{var inst_24914 = (state_24925[(2)]);var state_24925__$1 = state_24925;if(cljs.core.truth_(inst_24914))
{var statearr_24941_24963 = state_24925__$1;(statearr_24941_24963[(1)] = (12));
} else
{var statearr_24942_24964 = state_24925__$1;(statearr_24942_24964[(1)] = (13));
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
});})(c__11517__auto___24950,tc,fc))
;return ((function (switch__11461__auto__,c__11517__auto___24950,tc,fc){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24946 = [null,null,null,null,null,null,null,null,null];(statearr_24946[(0)] = state_machine__11462__auto__);
(statearr_24946[(1)] = (1));
return statearr_24946;
});
var state_machine__11462__auto____1 = (function (state_24925){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24925);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24947){if((e24947 instanceof Object))
{var ex__11465__auto__ = e24947;var statearr_24948_24965 = state_24925;(statearr_24948_24965[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24925);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24947;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24966 = state_24925;
state_24925 = G__24966;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24925){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___24950,tc,fc))
})();var state__11519__auto__ = (function (){var statearr_24949 = f__11518__auto__.call(null);(statearr_24949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24950);
return statearr_24949;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___24950,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__){
return (function (state_25013){var state_val_25014 = (state_25013[(1)]);if((state_val_25014 === (7)))
{var inst_25009 = (state_25013[(2)]);var state_25013__$1 = state_25013;var statearr_25015_25031 = state_25013__$1;(statearr_25015_25031[(2)] = inst_25009);
(statearr_25015_25031[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25014 === (6)))
{var inst_24999 = (state_25013[(7)]);var inst_25002 = (state_25013[(8)]);var inst_25006 = f.call(null,inst_24999,inst_25002);var inst_24999__$1 = inst_25006;var state_25013__$1 = (function (){var statearr_25016 = state_25013;(statearr_25016[(7)] = inst_24999__$1);
return statearr_25016;
})();var statearr_25017_25032 = state_25013__$1;(statearr_25017_25032[(2)] = null);
(statearr_25017_25032[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25014 === (5)))
{var inst_24999 = (state_25013[(7)]);var state_25013__$1 = state_25013;var statearr_25018_25033 = state_25013__$1;(statearr_25018_25033[(2)] = inst_24999);
(statearr_25018_25033[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25014 === (4)))
{var inst_25002 = (state_25013[(8)]);var inst_25002__$1 = (state_25013[(2)]);var inst_25003 = (inst_25002__$1 == null);var state_25013__$1 = (function (){var statearr_25019 = state_25013;(statearr_25019[(8)] = inst_25002__$1);
return statearr_25019;
})();if(cljs.core.truth_(inst_25003))
{var statearr_25020_25034 = state_25013__$1;(statearr_25020_25034[(1)] = (5));
} else
{var statearr_25021_25035 = state_25013__$1;(statearr_25021_25035[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25014 === (3)))
{var inst_25011 = (state_25013[(2)]);var state_25013__$1 = state_25013;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25013__$1,inst_25011);
} else
{if((state_val_25014 === (2)))
{var state_25013__$1 = state_25013;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25013__$1,(4),ch);
} else
{if((state_val_25014 === (1)))
{var inst_24999 = init;var state_25013__$1 = (function (){var statearr_25022 = state_25013;(statearr_25022[(7)] = inst_24999);
return statearr_25022;
})();var statearr_25023_25036 = state_25013__$1;(statearr_25023_25036[(2)] = null);
(statearr_25023_25036[(1)] = (2));
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
});})(c__11517__auto__))
;return ((function (switch__11461__auto__,c__11517__auto__){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_25027 = [null,null,null,null,null,null,null,null,null];(statearr_25027[(0)] = state_machine__11462__auto__);
(statearr_25027[(1)] = (1));
return statearr_25027;
});
var state_machine__11462__auto____1 = (function (state_25013){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_25013);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e25028){if((e25028 instanceof Object))
{var ex__11465__auto__ = e25028;var statearr_25029_25037 = state_25013;(statearr_25029_25037[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25013);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25028;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25038 = state_25013;
state_25013 = G__25038;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_25013){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_25013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_25030 = f__11518__auto__.call(null);(statearr_25030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_25030;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__))
);
return c__11517__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__){
return (function (state_25112){var state_val_25113 = (state_25112[(1)]);if((state_val_25113 === (7)))
{var inst_25094 = (state_25112[(2)]);var state_25112__$1 = state_25112;var statearr_25114_25137 = state_25112__$1;(statearr_25114_25137[(2)] = inst_25094);
(statearr_25114_25137[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25113 === (1)))
{var inst_25088 = cljs.core.seq.call(null,coll);var inst_25089 = inst_25088;var state_25112__$1 = (function (){var statearr_25115 = state_25112;(statearr_25115[(7)] = inst_25089);
return statearr_25115;
})();var statearr_25116_25138 = state_25112__$1;(statearr_25116_25138[(2)] = null);
(statearr_25116_25138[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25113 === (4)))
{var inst_25089 = (state_25112[(7)]);var inst_25092 = cljs.core.first.call(null,inst_25089);var state_25112__$1 = state_25112;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25112__$1,(7),ch,inst_25092);
} else
{if((state_val_25113 === (13)))
{var inst_25106 = (state_25112[(2)]);var state_25112__$1 = state_25112;var statearr_25117_25139 = state_25112__$1;(statearr_25117_25139[(2)] = inst_25106);
(statearr_25117_25139[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25113 === (6)))
{var inst_25097 = (state_25112[(2)]);var state_25112__$1 = state_25112;if(cljs.core.truth_(inst_25097))
{var statearr_25118_25140 = state_25112__$1;(statearr_25118_25140[(1)] = (8));
} else
{var statearr_25119_25141 = state_25112__$1;(statearr_25119_25141[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25113 === (3)))
{var inst_25110 = (state_25112[(2)]);var state_25112__$1 = state_25112;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25112__$1,inst_25110);
} else
{if((state_val_25113 === (12)))
{var state_25112__$1 = state_25112;var statearr_25120_25142 = state_25112__$1;(statearr_25120_25142[(2)] = null);
(statearr_25120_25142[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25113 === (2)))
{var inst_25089 = (state_25112[(7)]);var state_25112__$1 = state_25112;if(cljs.core.truth_(inst_25089))
{var statearr_25121_25143 = state_25112__$1;(statearr_25121_25143[(1)] = (4));
} else
{var statearr_25122_25144 = state_25112__$1;(statearr_25122_25144[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25113 === (11)))
{var inst_25103 = cljs.core.async.close_BANG_.call(null,ch);var state_25112__$1 = state_25112;var statearr_25123_25145 = state_25112__$1;(statearr_25123_25145[(2)] = inst_25103);
(statearr_25123_25145[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25113 === (9)))
{var state_25112__$1 = state_25112;if(cljs.core.truth_(close_QMARK_))
{var statearr_25124_25146 = state_25112__$1;(statearr_25124_25146[(1)] = (11));
} else
{var statearr_25125_25147 = state_25112__$1;(statearr_25125_25147[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25113 === (5)))
{var inst_25089 = (state_25112[(7)]);var state_25112__$1 = state_25112;var statearr_25126_25148 = state_25112__$1;(statearr_25126_25148[(2)] = inst_25089);
(statearr_25126_25148[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25113 === (10)))
{var inst_25108 = (state_25112[(2)]);var state_25112__$1 = state_25112;var statearr_25127_25149 = state_25112__$1;(statearr_25127_25149[(2)] = inst_25108);
(statearr_25127_25149[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25113 === (8)))
{var inst_25089 = (state_25112[(7)]);var inst_25099 = cljs.core.next.call(null,inst_25089);var inst_25089__$1 = inst_25099;var state_25112__$1 = (function (){var statearr_25128 = state_25112;(statearr_25128[(7)] = inst_25089__$1);
return statearr_25128;
})();var statearr_25129_25150 = state_25112__$1;(statearr_25129_25150[(2)] = null);
(statearr_25129_25150[(1)] = (2));
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
});})(c__11517__auto__))
;return ((function (switch__11461__auto__,c__11517__auto__){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_25133 = [null,null,null,null,null,null,null,null];(statearr_25133[(0)] = state_machine__11462__auto__);
(statearr_25133[(1)] = (1));
return statearr_25133;
});
var state_machine__11462__auto____1 = (function (state_25112){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_25112);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e25134){if((e25134 instanceof Object))
{var ex__11465__auto__ = e25134;var statearr_25135_25151 = state_25112;(statearr_25135_25151[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25112);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25134;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25152 = state_25112;
state_25112 = G__25152;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_25112){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_25112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_25136 = f__11518__auto__.call(null);(statearr_25136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_25136;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__))
);
return c__11517__auto__;
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
cljs.core.async.Mux = (function (){var obj25154 = {};return obj25154;
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
cljs.core.async.Mult = (function (){var obj25156 = {};return obj25156;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25378 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25378 = (function (cs,ch,mult,meta25379){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25379 = meta25379;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25378.cljs$lang$type = true;
cljs.core.async.t25378.cljs$lang$ctorStr = "cljs.core.async/t25378";
cljs.core.async.t25378.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25378");
});})(cs))
;
cljs.core.async.t25378.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25378.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25378.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25378.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25378.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25378.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25378.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25380){var self__ = this;
var _25380__$1 = this;return self__.meta25379;
});})(cs))
;
cljs.core.async.t25378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25380,meta25379__$1){var self__ = this;
var _25380__$1 = this;return (new cljs.core.async.t25378(self__.cs,self__.ch,self__.mult,meta25379__$1));
});})(cs))
;
cljs.core.async.__GT_t25378 = ((function (cs){
return (function __GT_t25378(cs__$1,ch__$1,mult__$1,meta25379){return (new cljs.core.async.t25378(cs__$1,ch__$1,mult__$1,meta25379));
});})(cs))
;
}
return (new cljs.core.async.t25378(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11517__auto___25599 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___25599,cs,m,dchan,dctr,done){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___25599,cs,m,dchan,dctr,done){
return (function (state_25511){var state_val_25512 = (state_25511[(1)]);if((state_val_25512 === (7)))
{var inst_25507 = (state_25511[(2)]);var state_25511__$1 = state_25511;var statearr_25513_25600 = state_25511__$1;(statearr_25513_25600[(2)] = inst_25507);
(statearr_25513_25600[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (20)))
{var inst_25412 = (state_25511[(7)]);var inst_25422 = cljs.core.first.call(null,inst_25412);var inst_25423 = cljs.core.nth.call(null,inst_25422,(0),null);var inst_25424 = cljs.core.nth.call(null,inst_25422,(1),null);var state_25511__$1 = (function (){var statearr_25514 = state_25511;(statearr_25514[(8)] = inst_25423);
return statearr_25514;
})();if(cljs.core.truth_(inst_25424))
{var statearr_25515_25601 = state_25511__$1;(statearr_25515_25601[(1)] = (22));
} else
{var statearr_25516_25602 = state_25511__$1;(statearr_25516_25602[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (27)))
{var inst_25383 = (state_25511[(9)]);var inst_25459 = (state_25511[(10)]);var inst_25454 = (state_25511[(11)]);var inst_25452 = (state_25511[(12)]);var inst_25459__$1 = cljs.core._nth.call(null,inst_25452,inst_25454);var inst_25460 = cljs.core.async.put_BANG_.call(null,inst_25459__$1,inst_25383,done);var state_25511__$1 = (function (){var statearr_25517 = state_25511;(statearr_25517[(10)] = inst_25459__$1);
return statearr_25517;
})();if(cljs.core.truth_(inst_25460))
{var statearr_25518_25603 = state_25511__$1;(statearr_25518_25603[(1)] = (30));
} else
{var statearr_25519_25604 = state_25511__$1;(statearr_25519_25604[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (1)))
{var state_25511__$1 = state_25511;var statearr_25520_25605 = state_25511__$1;(statearr_25520_25605[(2)] = null);
(statearr_25520_25605[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (24)))
{var inst_25412 = (state_25511[(7)]);var inst_25429 = (state_25511[(2)]);var inst_25430 = cljs.core.next.call(null,inst_25412);var inst_25392 = inst_25430;var inst_25393 = null;var inst_25394 = (0);var inst_25395 = (0);var state_25511__$1 = (function (){var statearr_25521 = state_25511;(statearr_25521[(13)] = inst_25392);
(statearr_25521[(14)] = inst_25394);
(statearr_25521[(15)] = inst_25429);
(statearr_25521[(16)] = inst_25395);
(statearr_25521[(17)] = inst_25393);
return statearr_25521;
})();var statearr_25522_25606 = state_25511__$1;(statearr_25522_25606[(2)] = null);
(statearr_25522_25606[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (39)))
{var state_25511__$1 = state_25511;var statearr_25526_25607 = state_25511__$1;(statearr_25526_25607[(2)] = null);
(statearr_25526_25607[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (4)))
{var inst_25383 = (state_25511[(9)]);var inst_25383__$1 = (state_25511[(2)]);var inst_25384 = (inst_25383__$1 == null);var state_25511__$1 = (function (){var statearr_25527 = state_25511;(statearr_25527[(9)] = inst_25383__$1);
return statearr_25527;
})();if(cljs.core.truth_(inst_25384))
{var statearr_25528_25608 = state_25511__$1;(statearr_25528_25608[(1)] = (5));
} else
{var statearr_25529_25609 = state_25511__$1;(statearr_25529_25609[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (15)))
{var inst_25392 = (state_25511[(13)]);var inst_25394 = (state_25511[(14)]);var inst_25395 = (state_25511[(16)]);var inst_25393 = (state_25511[(17)]);var inst_25408 = (state_25511[(2)]);var inst_25409 = (inst_25395 + (1));var tmp25523 = inst_25392;var tmp25524 = inst_25394;var tmp25525 = inst_25393;var inst_25392__$1 = tmp25523;var inst_25393__$1 = tmp25525;var inst_25394__$1 = tmp25524;var inst_25395__$1 = inst_25409;var state_25511__$1 = (function (){var statearr_25530 = state_25511;(statearr_25530[(13)] = inst_25392__$1);
(statearr_25530[(18)] = inst_25408);
(statearr_25530[(14)] = inst_25394__$1);
(statearr_25530[(16)] = inst_25395__$1);
(statearr_25530[(17)] = inst_25393__$1);
return statearr_25530;
})();var statearr_25531_25610 = state_25511__$1;(statearr_25531_25610[(2)] = null);
(statearr_25531_25610[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (21)))
{var inst_25433 = (state_25511[(2)]);var state_25511__$1 = state_25511;var statearr_25535_25611 = state_25511__$1;(statearr_25535_25611[(2)] = inst_25433);
(statearr_25535_25611[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (31)))
{var inst_25459 = (state_25511[(10)]);var inst_25463 = done.call(null,null);var inst_25464 = cljs.core.async.untap_STAR_.call(null,m,inst_25459);var state_25511__$1 = (function (){var statearr_25536 = state_25511;(statearr_25536[(19)] = inst_25463);
return statearr_25536;
})();var statearr_25537_25612 = state_25511__$1;(statearr_25537_25612[(2)] = inst_25464);
(statearr_25537_25612[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (32)))
{var inst_25454 = (state_25511[(11)]);var inst_25453 = (state_25511[(20)]);var inst_25452 = (state_25511[(12)]);var inst_25451 = (state_25511[(21)]);var inst_25466 = (state_25511[(2)]);var inst_25467 = (inst_25454 + (1));var tmp25532 = inst_25453;var tmp25533 = inst_25452;var tmp25534 = inst_25451;var inst_25451__$1 = tmp25534;var inst_25452__$1 = tmp25533;var inst_25453__$1 = tmp25532;var inst_25454__$1 = inst_25467;var state_25511__$1 = (function (){var statearr_25538 = state_25511;(statearr_25538[(11)] = inst_25454__$1);
(statearr_25538[(20)] = inst_25453__$1);
(statearr_25538[(22)] = inst_25466);
(statearr_25538[(12)] = inst_25452__$1);
(statearr_25538[(21)] = inst_25451__$1);
return statearr_25538;
})();var statearr_25539_25613 = state_25511__$1;(statearr_25539_25613[(2)] = null);
(statearr_25539_25613[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (40)))
{var inst_25479 = (state_25511[(23)]);var inst_25483 = done.call(null,null);var inst_25484 = cljs.core.async.untap_STAR_.call(null,m,inst_25479);var state_25511__$1 = (function (){var statearr_25540 = state_25511;(statearr_25540[(24)] = inst_25483);
return statearr_25540;
})();var statearr_25541_25614 = state_25511__$1;(statearr_25541_25614[(2)] = inst_25484);
(statearr_25541_25614[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (33)))
{var inst_25470 = (state_25511[(25)]);var inst_25472 = cljs.core.chunked_seq_QMARK_.call(null,inst_25470);var state_25511__$1 = state_25511;if(inst_25472)
{var statearr_25542_25615 = state_25511__$1;(statearr_25542_25615[(1)] = (36));
} else
{var statearr_25543_25616 = state_25511__$1;(statearr_25543_25616[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (13)))
{var inst_25402 = (state_25511[(26)]);var inst_25405 = cljs.core.async.close_BANG_.call(null,inst_25402);var state_25511__$1 = state_25511;var statearr_25544_25617 = state_25511__$1;(statearr_25544_25617[(2)] = inst_25405);
(statearr_25544_25617[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (22)))
{var inst_25423 = (state_25511[(8)]);var inst_25426 = cljs.core.async.close_BANG_.call(null,inst_25423);var state_25511__$1 = state_25511;var statearr_25545_25618 = state_25511__$1;(statearr_25545_25618[(2)] = inst_25426);
(statearr_25545_25618[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (36)))
{var inst_25470 = (state_25511[(25)]);var inst_25474 = cljs.core.chunk_first.call(null,inst_25470);var inst_25475 = cljs.core.chunk_rest.call(null,inst_25470);var inst_25476 = cljs.core.count.call(null,inst_25474);var inst_25451 = inst_25475;var inst_25452 = inst_25474;var inst_25453 = inst_25476;var inst_25454 = (0);var state_25511__$1 = (function (){var statearr_25546 = state_25511;(statearr_25546[(11)] = inst_25454);
(statearr_25546[(20)] = inst_25453);
(statearr_25546[(12)] = inst_25452);
(statearr_25546[(21)] = inst_25451);
return statearr_25546;
})();var statearr_25547_25619 = state_25511__$1;(statearr_25547_25619[(2)] = null);
(statearr_25547_25619[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (41)))
{var inst_25470 = (state_25511[(25)]);var inst_25486 = (state_25511[(2)]);var inst_25487 = cljs.core.next.call(null,inst_25470);var inst_25451 = inst_25487;var inst_25452 = null;var inst_25453 = (0);var inst_25454 = (0);var state_25511__$1 = (function (){var statearr_25548 = state_25511;(statearr_25548[(27)] = inst_25486);
(statearr_25548[(11)] = inst_25454);
(statearr_25548[(20)] = inst_25453);
(statearr_25548[(12)] = inst_25452);
(statearr_25548[(21)] = inst_25451);
return statearr_25548;
})();var statearr_25549_25620 = state_25511__$1;(statearr_25549_25620[(2)] = null);
(statearr_25549_25620[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (43)))
{var state_25511__$1 = state_25511;var statearr_25550_25621 = state_25511__$1;(statearr_25550_25621[(2)] = null);
(statearr_25550_25621[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (29)))
{var inst_25495 = (state_25511[(2)]);var state_25511__$1 = state_25511;var statearr_25551_25622 = state_25511__$1;(statearr_25551_25622[(2)] = inst_25495);
(statearr_25551_25622[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (44)))
{var inst_25504 = (state_25511[(2)]);var state_25511__$1 = (function (){var statearr_25552 = state_25511;(statearr_25552[(28)] = inst_25504);
return statearr_25552;
})();var statearr_25553_25623 = state_25511__$1;(statearr_25553_25623[(2)] = null);
(statearr_25553_25623[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (6)))
{var inst_25443 = (state_25511[(29)]);var inst_25442 = cljs.core.deref.call(null,cs);var inst_25443__$1 = cljs.core.keys.call(null,inst_25442);var inst_25444 = cljs.core.count.call(null,inst_25443__$1);var inst_25445 = cljs.core.reset_BANG_.call(null,dctr,inst_25444);var inst_25450 = cljs.core.seq.call(null,inst_25443__$1);var inst_25451 = inst_25450;var inst_25452 = null;var inst_25453 = (0);var inst_25454 = (0);var state_25511__$1 = (function (){var statearr_25554 = state_25511;(statearr_25554[(11)] = inst_25454);
(statearr_25554[(30)] = inst_25445);
(statearr_25554[(20)] = inst_25453);
(statearr_25554[(12)] = inst_25452);
(statearr_25554[(21)] = inst_25451);
(statearr_25554[(29)] = inst_25443__$1);
return statearr_25554;
})();var statearr_25555_25624 = state_25511__$1;(statearr_25555_25624[(2)] = null);
(statearr_25555_25624[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (28)))
{var inst_25470 = (state_25511[(25)]);var inst_25451 = (state_25511[(21)]);var inst_25470__$1 = cljs.core.seq.call(null,inst_25451);var state_25511__$1 = (function (){var statearr_25556 = state_25511;(statearr_25556[(25)] = inst_25470__$1);
return statearr_25556;
})();if(inst_25470__$1)
{var statearr_25557_25625 = state_25511__$1;(statearr_25557_25625[(1)] = (33));
} else
{var statearr_25558_25626 = state_25511__$1;(statearr_25558_25626[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (25)))
{var inst_25454 = (state_25511[(11)]);var inst_25453 = (state_25511[(20)]);var inst_25456 = (inst_25454 < inst_25453);var inst_25457 = inst_25456;var state_25511__$1 = state_25511;if(cljs.core.truth_(inst_25457))
{var statearr_25559_25627 = state_25511__$1;(statearr_25559_25627[(1)] = (27));
} else
{var statearr_25560_25628 = state_25511__$1;(statearr_25560_25628[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (34)))
{var state_25511__$1 = state_25511;var statearr_25561_25629 = state_25511__$1;(statearr_25561_25629[(2)] = null);
(statearr_25561_25629[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (17)))
{var state_25511__$1 = state_25511;var statearr_25562_25630 = state_25511__$1;(statearr_25562_25630[(2)] = null);
(statearr_25562_25630[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (3)))
{var inst_25509 = (state_25511[(2)]);var state_25511__$1 = state_25511;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25511__$1,inst_25509);
} else
{if((state_val_25512 === (12)))
{var inst_25438 = (state_25511[(2)]);var state_25511__$1 = state_25511;var statearr_25563_25631 = state_25511__$1;(statearr_25563_25631[(2)] = inst_25438);
(statearr_25563_25631[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (2)))
{var state_25511__$1 = state_25511;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25511__$1,(4),ch);
} else
{if((state_val_25512 === (23)))
{var state_25511__$1 = state_25511;var statearr_25564_25632 = state_25511__$1;(statearr_25564_25632[(2)] = null);
(statearr_25564_25632[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (35)))
{var inst_25493 = (state_25511[(2)]);var state_25511__$1 = state_25511;var statearr_25565_25633 = state_25511__$1;(statearr_25565_25633[(2)] = inst_25493);
(statearr_25565_25633[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (19)))
{var inst_25412 = (state_25511[(7)]);var inst_25416 = cljs.core.chunk_first.call(null,inst_25412);var inst_25417 = cljs.core.chunk_rest.call(null,inst_25412);var inst_25418 = cljs.core.count.call(null,inst_25416);var inst_25392 = inst_25417;var inst_25393 = inst_25416;var inst_25394 = inst_25418;var inst_25395 = (0);var state_25511__$1 = (function (){var statearr_25566 = state_25511;(statearr_25566[(13)] = inst_25392);
(statearr_25566[(14)] = inst_25394);
(statearr_25566[(16)] = inst_25395);
(statearr_25566[(17)] = inst_25393);
return statearr_25566;
})();var statearr_25567_25634 = state_25511__$1;(statearr_25567_25634[(2)] = null);
(statearr_25567_25634[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (11)))
{var inst_25392 = (state_25511[(13)]);var inst_25412 = (state_25511[(7)]);var inst_25412__$1 = cljs.core.seq.call(null,inst_25392);var state_25511__$1 = (function (){var statearr_25568 = state_25511;(statearr_25568[(7)] = inst_25412__$1);
return statearr_25568;
})();if(inst_25412__$1)
{var statearr_25569_25635 = state_25511__$1;(statearr_25569_25635[(1)] = (16));
} else
{var statearr_25570_25636 = state_25511__$1;(statearr_25570_25636[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (9)))
{var inst_25440 = (state_25511[(2)]);var state_25511__$1 = state_25511;var statearr_25571_25637 = state_25511__$1;(statearr_25571_25637[(2)] = inst_25440);
(statearr_25571_25637[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (5)))
{var inst_25390 = cljs.core.deref.call(null,cs);var inst_25391 = cljs.core.seq.call(null,inst_25390);var inst_25392 = inst_25391;var inst_25393 = null;var inst_25394 = (0);var inst_25395 = (0);var state_25511__$1 = (function (){var statearr_25572 = state_25511;(statearr_25572[(13)] = inst_25392);
(statearr_25572[(14)] = inst_25394);
(statearr_25572[(16)] = inst_25395);
(statearr_25572[(17)] = inst_25393);
return statearr_25572;
})();var statearr_25573_25638 = state_25511__$1;(statearr_25573_25638[(2)] = null);
(statearr_25573_25638[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (14)))
{var state_25511__$1 = state_25511;var statearr_25574_25639 = state_25511__$1;(statearr_25574_25639[(2)] = null);
(statearr_25574_25639[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (45)))
{var inst_25501 = (state_25511[(2)]);var state_25511__$1 = state_25511;var statearr_25575_25640 = state_25511__$1;(statearr_25575_25640[(2)] = inst_25501);
(statearr_25575_25640[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (26)))
{var inst_25443 = (state_25511[(29)]);var inst_25497 = (state_25511[(2)]);var inst_25498 = cljs.core.seq.call(null,inst_25443);var state_25511__$1 = (function (){var statearr_25576 = state_25511;(statearr_25576[(31)] = inst_25497);
return statearr_25576;
})();if(inst_25498)
{var statearr_25577_25641 = state_25511__$1;(statearr_25577_25641[(1)] = (42));
} else
{var statearr_25578_25642 = state_25511__$1;(statearr_25578_25642[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (16)))
{var inst_25412 = (state_25511[(7)]);var inst_25414 = cljs.core.chunked_seq_QMARK_.call(null,inst_25412);var state_25511__$1 = state_25511;if(inst_25414)
{var statearr_25579_25643 = state_25511__$1;(statearr_25579_25643[(1)] = (19));
} else
{var statearr_25580_25644 = state_25511__$1;(statearr_25580_25644[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (38)))
{var inst_25490 = (state_25511[(2)]);var state_25511__$1 = state_25511;var statearr_25581_25645 = state_25511__$1;(statearr_25581_25645[(2)] = inst_25490);
(statearr_25581_25645[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (30)))
{var state_25511__$1 = state_25511;var statearr_25582_25646 = state_25511__$1;(statearr_25582_25646[(2)] = null);
(statearr_25582_25646[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (10)))
{var inst_25395 = (state_25511[(16)]);var inst_25393 = (state_25511[(17)]);var inst_25401 = cljs.core._nth.call(null,inst_25393,inst_25395);var inst_25402 = cljs.core.nth.call(null,inst_25401,(0),null);var inst_25403 = cljs.core.nth.call(null,inst_25401,(1),null);var state_25511__$1 = (function (){var statearr_25583 = state_25511;(statearr_25583[(26)] = inst_25402);
return statearr_25583;
})();if(cljs.core.truth_(inst_25403))
{var statearr_25584_25647 = state_25511__$1;(statearr_25584_25647[(1)] = (13));
} else
{var statearr_25585_25648 = state_25511__$1;(statearr_25585_25648[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (18)))
{var inst_25436 = (state_25511[(2)]);var state_25511__$1 = state_25511;var statearr_25586_25649 = state_25511__$1;(statearr_25586_25649[(2)] = inst_25436);
(statearr_25586_25649[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (42)))
{var state_25511__$1 = state_25511;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25511__$1,(45),dchan);
} else
{if((state_val_25512 === (37)))
{var inst_25383 = (state_25511[(9)]);var inst_25470 = (state_25511[(25)]);var inst_25479 = (state_25511[(23)]);var inst_25479__$1 = cljs.core.first.call(null,inst_25470);var inst_25480 = cljs.core.async.put_BANG_.call(null,inst_25479__$1,inst_25383,done);var state_25511__$1 = (function (){var statearr_25587 = state_25511;(statearr_25587[(23)] = inst_25479__$1);
return statearr_25587;
})();if(cljs.core.truth_(inst_25480))
{var statearr_25588_25650 = state_25511__$1;(statearr_25588_25650[(1)] = (39));
} else
{var statearr_25589_25651 = state_25511__$1;(statearr_25589_25651[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25512 === (8)))
{var inst_25394 = (state_25511[(14)]);var inst_25395 = (state_25511[(16)]);var inst_25397 = (inst_25395 < inst_25394);var inst_25398 = inst_25397;var state_25511__$1 = state_25511;if(cljs.core.truth_(inst_25398))
{var statearr_25590_25652 = state_25511__$1;(statearr_25590_25652[(1)] = (10));
} else
{var statearr_25591_25653 = state_25511__$1;(statearr_25591_25653[(1)] = (11));
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
});})(c__11517__auto___25599,cs,m,dchan,dctr,done))
;return ((function (switch__11461__auto__,c__11517__auto___25599,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_25595 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25595[(0)] = state_machine__11462__auto__);
(statearr_25595[(1)] = (1));
return statearr_25595;
});
var state_machine__11462__auto____1 = (function (state_25511){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_25511);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e25596){if((e25596 instanceof Object))
{var ex__11465__auto__ = e25596;var statearr_25597_25654 = state_25511;(statearr_25597_25654[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25511);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25596;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25655 = state_25511;
state_25511 = G__25655;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_25511){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_25511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___25599,cs,m,dchan,dctr,done))
})();var state__11519__auto__ = (function (){var statearr_25598 = f__11518__auto__.call(null);(statearr_25598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___25599);
return statearr_25598;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___25599,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj25657 = {};return obj25657;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25658){var map__25663 = p__25658;var map__25663__$1 = ((cljs.core.seq_QMARK_.call(null,map__25663))?cljs.core.apply.call(null,cljs.core.hash_map,map__25663):map__25663);var opts = map__25663__$1;var statearr_25664_25667 = state;(statearr_25664_25667[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__25663,map__25663__$1,opts){
return (function (val){var statearr_25665_25668 = state;(statearr_25665_25668[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25663,map__25663__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_25666_25669 = state;(statearr_25666_25669[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25658 = null;if (arguments.length > 3) {
  p__25658 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25658);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25670){
var state = cljs.core.first(arglist__25670);
arglist__25670 = cljs.core.next(arglist__25670);
var cont_block = cljs.core.first(arglist__25670);
arglist__25670 = cljs.core.next(arglist__25670);
var ports = cljs.core.first(arglist__25670);
var p__25658 = cljs.core.rest(arglist__25670);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25658);
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
;var m = (function (){if(typeof cljs.core.async.t25790 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25790 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25791){
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
this.meta25791 = meta25791;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25790.cljs$lang$type = true;
cljs.core.async.t25790.cljs$lang$ctorStr = "cljs.core.async/t25790";
cljs.core.async.t25790.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25790");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25790.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25790.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25790.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25790.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25790.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25790.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25790.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25790.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25790.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25792){var self__ = this;
var _25792__$1 = this;return self__.meta25791;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25792,meta25791__$1){var self__ = this;
var _25792__$1 = this;return (new cljs.core.async.t25790(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25791__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25790 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25790(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25791){return (new cljs.core.async.t25790(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25791));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25790(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11517__auto___25909 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___25909,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___25909,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25862){var state_val_25863 = (state_25862[(1)]);if((state_val_25863 === (7)))
{var inst_25806 = (state_25862[(7)]);var inst_25811 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25806);var state_25862__$1 = state_25862;var statearr_25864_25910 = state_25862__$1;(statearr_25864_25910[(2)] = inst_25811);
(statearr_25864_25910[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25863 === (20)))
{var inst_25821 = (state_25862[(8)]);var state_25862__$1 = state_25862;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25862__$1,(23),out,inst_25821);
} else
{if((state_val_25863 === (1)))
{var inst_25796 = (state_25862[(9)]);var inst_25796__$1 = calc_state.call(null);var inst_25797 = cljs.core.seq_QMARK_.call(null,inst_25796__$1);var state_25862__$1 = (function (){var statearr_25865 = state_25862;(statearr_25865[(9)] = inst_25796__$1);
return statearr_25865;
})();if(inst_25797)
{var statearr_25866_25911 = state_25862__$1;(statearr_25866_25911[(1)] = (2));
} else
{var statearr_25867_25912 = state_25862__$1;(statearr_25867_25912[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25863 === (24)))
{var inst_25814 = (state_25862[(10)]);var inst_25806 = inst_25814;var state_25862__$1 = (function (){var statearr_25868 = state_25862;(statearr_25868[(7)] = inst_25806);
return statearr_25868;
})();var statearr_25869_25913 = state_25862__$1;(statearr_25869_25913[(2)] = null);
(statearr_25869_25913[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25863 === (4)))
{var inst_25796 = (state_25862[(9)]);var inst_25802 = (state_25862[(2)]);var inst_25803 = cljs.core.get.call(null,inst_25802,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25804 = cljs.core.get.call(null,inst_25802,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25805 = cljs.core.get.call(null,inst_25802,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_25806 = inst_25796;var state_25862__$1 = (function (){var statearr_25870 = state_25862;(statearr_25870[(11)] = inst_25805);
(statearr_25870[(12)] = inst_25803);
(statearr_25870[(13)] = inst_25804);
(statearr_25870[(7)] = inst_25806);
return statearr_25870;
})();var statearr_25871_25914 = state_25862__$1;(statearr_25871_25914[(2)] = null);
(statearr_25871_25914[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25863 === (15)))
{var state_25862__$1 = state_25862;var statearr_25872_25915 = state_25862__$1;(statearr_25872_25915[(2)] = null);
(statearr_25872_25915[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25863 === (21)))
{var inst_25814 = (state_25862[(10)]);var inst_25806 = inst_25814;var state_25862__$1 = (function (){var statearr_25873 = state_25862;(statearr_25873[(7)] = inst_25806);
return statearr_25873;
})();var statearr_25874_25916 = state_25862__$1;(statearr_25874_25916[(2)] = null);
(statearr_25874_25916[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25863 === (13)))
{var inst_25858 = (state_25862[(2)]);var state_25862__$1 = state_25862;var statearr_25875_25917 = state_25862__$1;(statearr_25875_25917[(2)] = inst_25858);
(statearr_25875_25917[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25863 === (22)))
{var inst_25856 = (state_25862[(2)]);var state_25862__$1 = state_25862;var statearr_25876_25918 = state_25862__$1;(statearr_25876_25918[(2)] = inst_25856);
(statearr_25876_25918[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25863 === (6)))
{var inst_25860 = (state_25862[(2)]);var state_25862__$1 = state_25862;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25862__$1,inst_25860);
} else
{if((state_val_25863 === (25)))
{var state_25862__$1 = state_25862;var statearr_25877_25919 = state_25862__$1;(statearr_25877_25919[(2)] = null);
(statearr_25877_25919[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25863 === (17)))
{var inst_25836 = (state_25862[(14)]);var state_25862__$1 = state_25862;var statearr_25878_25920 = state_25862__$1;(statearr_25878_25920[(2)] = inst_25836);
(statearr_25878_25920[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25863 === (3)))
{var inst_25796 = (state_25862[(9)]);var state_25862__$1 = state_25862;var statearr_25879_25921 = state_25862__$1;(statearr_25879_25921[(2)] = inst_25796);
(statearr_25879_25921[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25863 === (12)))
{var inst_25822 = (state_25862[(15)]);var inst_25836 = (state_25862[(14)]);var inst_25817 = (state_25862[(16)]);var inst_25836__$1 = inst_25817.call(null,inst_25822);var state_25862__$1 = (function (){var statearr_25880 = state_25862;(statearr_25880[(14)] = inst_25836__$1);
return statearr_25880;
})();if(cljs.core.truth_(inst_25836__$1))
{var statearr_25881_25922 = state_25862__$1;(statearr_25881_25922[(1)] = (17));
} else
{var statearr_25882_25923 = state_25862__$1;(statearr_25882_25923[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25863 === (2)))
{var inst_25796 = (state_25862[(9)]);var inst_25799 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25796);var state_25862__$1 = state_25862;var statearr_25883_25924 = state_25862__$1;(statearr_25883_25924[(2)] = inst_25799);
(statearr_25883_25924[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25863 === (23)))
{var inst_25847 = (state_25862[(2)]);var state_25862__$1 = state_25862;if(cljs.core.truth_(inst_25847))
{var statearr_25884_25925 = state_25862__$1;(statearr_25884_25925[(1)] = (24));
} else
{var statearr_25885_25926 = state_25862__$1;(statearr_25885_25926[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25863 === (19)))
{var inst_25844 = (state_25862[(2)]);var state_25862__$1 = state_25862;if(cljs.core.truth_(inst_25844))
{var statearr_25886_25927 = state_25862__$1;(statearr_25886_25927[(1)] = (20));
} else
{var statearr_25887_25928 = state_25862__$1;(statearr_25887_25928[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25863 === (11)))
{var inst_25821 = (state_25862[(8)]);var inst_25827 = (inst_25821 == null);var state_25862__$1 = state_25862;if(cljs.core.truth_(inst_25827))
{var statearr_25888_25929 = state_25862__$1;(statearr_25888_25929[(1)] = (14));
} else
{var statearr_25889_25930 = state_25862__$1;(statearr_25889_25930[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25863 === (9)))
{var inst_25814 = (state_25862[(10)]);var inst_25814__$1 = (state_25862[(2)]);var inst_25815 = cljs.core.get.call(null,inst_25814__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25816 = cljs.core.get.call(null,inst_25814__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25817 = cljs.core.get.call(null,inst_25814__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_25862__$1 = (function (){var statearr_25890 = state_25862;(statearr_25890[(10)] = inst_25814__$1);
(statearr_25890[(16)] = inst_25817);
(statearr_25890[(17)] = inst_25816);
return statearr_25890;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_25862__$1,(10),inst_25815);
} else
{if((state_val_25863 === (5)))
{var inst_25806 = (state_25862[(7)]);var inst_25809 = cljs.core.seq_QMARK_.call(null,inst_25806);var state_25862__$1 = state_25862;if(inst_25809)
{var statearr_25891_25931 = state_25862__$1;(statearr_25891_25931[(1)] = (7));
} else
{var statearr_25892_25932 = state_25862__$1;(statearr_25892_25932[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25863 === (14)))
{var inst_25822 = (state_25862[(15)]);var inst_25829 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25822);var state_25862__$1 = state_25862;var statearr_25893_25933 = state_25862__$1;(statearr_25893_25933[(2)] = inst_25829);
(statearr_25893_25933[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25863 === (26)))
{var inst_25852 = (state_25862[(2)]);var state_25862__$1 = state_25862;var statearr_25894_25934 = state_25862__$1;(statearr_25894_25934[(2)] = inst_25852);
(statearr_25894_25934[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25863 === (16)))
{var inst_25832 = (state_25862[(2)]);var inst_25833 = calc_state.call(null);var inst_25806 = inst_25833;var state_25862__$1 = (function (){var statearr_25895 = state_25862;(statearr_25895[(18)] = inst_25832);
(statearr_25895[(7)] = inst_25806);
return statearr_25895;
})();var statearr_25896_25935 = state_25862__$1;(statearr_25896_25935[(2)] = null);
(statearr_25896_25935[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25863 === (10)))
{var inst_25821 = (state_25862[(8)]);var inst_25822 = (state_25862[(15)]);var inst_25820 = (state_25862[(2)]);var inst_25821__$1 = cljs.core.nth.call(null,inst_25820,(0),null);var inst_25822__$1 = cljs.core.nth.call(null,inst_25820,(1),null);var inst_25823 = (inst_25821__$1 == null);var inst_25824 = cljs.core._EQ_.call(null,inst_25822__$1,change);var inst_25825 = (inst_25823) || (inst_25824);var state_25862__$1 = (function (){var statearr_25897 = state_25862;(statearr_25897[(8)] = inst_25821__$1);
(statearr_25897[(15)] = inst_25822__$1);
return statearr_25897;
})();if(cljs.core.truth_(inst_25825))
{var statearr_25898_25936 = state_25862__$1;(statearr_25898_25936[(1)] = (11));
} else
{var statearr_25899_25937 = state_25862__$1;(statearr_25899_25937[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25863 === (18)))
{var inst_25822 = (state_25862[(15)]);var inst_25817 = (state_25862[(16)]);var inst_25816 = (state_25862[(17)]);var inst_25839 = cljs.core.empty_QMARK_.call(null,inst_25817);var inst_25840 = inst_25816.call(null,inst_25822);var inst_25841 = cljs.core.not.call(null,inst_25840);var inst_25842 = (inst_25839) && (inst_25841);var state_25862__$1 = state_25862;var statearr_25900_25938 = state_25862__$1;(statearr_25900_25938[(2)] = inst_25842);
(statearr_25900_25938[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25863 === (8)))
{var inst_25806 = (state_25862[(7)]);var state_25862__$1 = state_25862;var statearr_25901_25939 = state_25862__$1;(statearr_25901_25939[(2)] = inst_25806);
(statearr_25901_25939[(1)] = (9));
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
});})(c__11517__auto___25909,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__11461__auto__,c__11517__auto___25909,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_25905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25905[(0)] = state_machine__11462__auto__);
(statearr_25905[(1)] = (1));
return statearr_25905;
});
var state_machine__11462__auto____1 = (function (state_25862){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_25862);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e25906){if((e25906 instanceof Object))
{var ex__11465__auto__ = e25906;var statearr_25907_25940 = state_25862;(statearr_25907_25940[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25862);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25906;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25941 = state_25862;
state_25862 = G__25941;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_25862){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_25862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___25909,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11519__auto__ = (function (){var statearr_25908 = f__11518__auto__.call(null);(statearr_25908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___25909);
return statearr_25908;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___25909,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25943 = {};return obj25943;
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
return (function (p1__25944_SHARP_){if(cljs.core.truth_(p1__25944_SHARP_.call(null,topic)))
{return p1__25944_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__25944_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26067 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26067 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26068){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26068 = meta26068;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26067.cljs$lang$type = true;
cljs.core.async.t26067.cljs$lang$ctorStr = "cljs.core.async/t26067";
cljs.core.async.t26067.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26067");
});})(mults,ensure_mult))
;
cljs.core.async.t26067.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26067.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26067.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26067.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26067.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26067.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26067.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26067.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26069){var self__ = this;
var _26069__$1 = this;return self__.meta26068;
});})(mults,ensure_mult))
;
cljs.core.async.t26067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26069,meta26068__$1){var self__ = this;
var _26069__$1 = this;return (new cljs.core.async.t26067(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26068__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26067 = ((function (mults,ensure_mult){
return (function __GT_t26067(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26068){return (new cljs.core.async.t26067(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26068));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26067(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11517__auto___26189 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26189,mults,ensure_mult,p){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26189,mults,ensure_mult,p){
return (function (state_26141){var state_val_26142 = (state_26141[(1)]);if((state_val_26142 === (7)))
{var inst_26137 = (state_26141[(2)]);var state_26141__$1 = state_26141;var statearr_26143_26190 = state_26141__$1;(statearr_26143_26190[(2)] = inst_26137);
(statearr_26143_26190[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26142 === (20)))
{var state_26141__$1 = state_26141;var statearr_26144_26191 = state_26141__$1;(statearr_26144_26191[(2)] = null);
(statearr_26144_26191[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26142 === (1)))
{var state_26141__$1 = state_26141;var statearr_26145_26192 = state_26141__$1;(statearr_26145_26192[(2)] = null);
(statearr_26145_26192[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26142 === (24)))
{var inst_26120 = (state_26141[(7)]);var inst_26129 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26120);var state_26141__$1 = state_26141;var statearr_26146_26193 = state_26141__$1;(statearr_26146_26193[(2)] = inst_26129);
(statearr_26146_26193[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26142 === (4)))
{var inst_26072 = (state_26141[(8)]);var inst_26072__$1 = (state_26141[(2)]);var inst_26073 = (inst_26072__$1 == null);var state_26141__$1 = (function (){var statearr_26147 = state_26141;(statearr_26147[(8)] = inst_26072__$1);
return statearr_26147;
})();if(cljs.core.truth_(inst_26073))
{var statearr_26148_26194 = state_26141__$1;(statearr_26148_26194[(1)] = (5));
} else
{var statearr_26149_26195 = state_26141__$1;(statearr_26149_26195[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26142 === (15)))
{var inst_26114 = (state_26141[(2)]);var state_26141__$1 = state_26141;var statearr_26150_26196 = state_26141__$1;(statearr_26150_26196[(2)] = inst_26114);
(statearr_26150_26196[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26142 === (21)))
{var inst_26134 = (state_26141[(2)]);var state_26141__$1 = (function (){var statearr_26151 = state_26141;(statearr_26151[(9)] = inst_26134);
return statearr_26151;
})();var statearr_26152_26197 = state_26141__$1;(statearr_26152_26197[(2)] = null);
(statearr_26152_26197[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26142 === (13)))
{var inst_26096 = (state_26141[(10)]);var inst_26098 = cljs.core.chunked_seq_QMARK_.call(null,inst_26096);var state_26141__$1 = state_26141;if(inst_26098)
{var statearr_26153_26198 = state_26141__$1;(statearr_26153_26198[(1)] = (16));
} else
{var statearr_26154_26199 = state_26141__$1;(statearr_26154_26199[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26142 === (22)))
{var inst_26126 = (state_26141[(2)]);var state_26141__$1 = state_26141;if(cljs.core.truth_(inst_26126))
{var statearr_26155_26200 = state_26141__$1;(statearr_26155_26200[(1)] = (23));
} else
{var statearr_26156_26201 = state_26141__$1;(statearr_26156_26201[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26142 === (6)))
{var inst_26122 = (state_26141[(11)]);var inst_26120 = (state_26141[(7)]);var inst_26072 = (state_26141[(8)]);var inst_26120__$1 = topic_fn.call(null,inst_26072);var inst_26121 = cljs.core.deref.call(null,mults);var inst_26122__$1 = cljs.core.get.call(null,inst_26121,inst_26120__$1);var state_26141__$1 = (function (){var statearr_26157 = state_26141;(statearr_26157[(11)] = inst_26122__$1);
(statearr_26157[(7)] = inst_26120__$1);
return statearr_26157;
})();if(cljs.core.truth_(inst_26122__$1))
{var statearr_26158_26202 = state_26141__$1;(statearr_26158_26202[(1)] = (19));
} else
{var statearr_26159_26203 = state_26141__$1;(statearr_26159_26203[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26142 === (25)))
{var inst_26131 = (state_26141[(2)]);var state_26141__$1 = state_26141;var statearr_26160_26204 = state_26141__$1;(statearr_26160_26204[(2)] = inst_26131);
(statearr_26160_26204[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26142 === (17)))
{var inst_26096 = (state_26141[(10)]);var inst_26105 = cljs.core.first.call(null,inst_26096);var inst_26106 = cljs.core.async.muxch_STAR_.call(null,inst_26105);var inst_26107 = cljs.core.async.close_BANG_.call(null,inst_26106);var inst_26108 = cljs.core.next.call(null,inst_26096);var inst_26082 = inst_26108;var inst_26083 = null;var inst_26084 = (0);var inst_26085 = (0);var state_26141__$1 = (function (){var statearr_26161 = state_26141;(statearr_26161[(12)] = inst_26085);
(statearr_26161[(13)] = inst_26082);
(statearr_26161[(14)] = inst_26084);
(statearr_26161[(15)] = inst_26083);
(statearr_26161[(16)] = inst_26107);
return statearr_26161;
})();var statearr_26162_26205 = state_26141__$1;(statearr_26162_26205[(2)] = null);
(statearr_26162_26205[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26142 === (3)))
{var inst_26139 = (state_26141[(2)]);var state_26141__$1 = state_26141;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26141__$1,inst_26139);
} else
{if((state_val_26142 === (12)))
{var inst_26116 = (state_26141[(2)]);var state_26141__$1 = state_26141;var statearr_26163_26206 = state_26141__$1;(statearr_26163_26206[(2)] = inst_26116);
(statearr_26163_26206[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26142 === (2)))
{var state_26141__$1 = state_26141;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26141__$1,(4),ch);
} else
{if((state_val_26142 === (23)))
{var state_26141__$1 = state_26141;var statearr_26164_26207 = state_26141__$1;(statearr_26164_26207[(2)] = null);
(statearr_26164_26207[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26142 === (19)))
{var inst_26122 = (state_26141[(11)]);var inst_26072 = (state_26141[(8)]);var inst_26124 = cljs.core.async.muxch_STAR_.call(null,inst_26122);var state_26141__$1 = state_26141;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26141__$1,(22),inst_26124,inst_26072);
} else
{if((state_val_26142 === (11)))
{var inst_26096 = (state_26141[(10)]);var inst_26082 = (state_26141[(13)]);var inst_26096__$1 = cljs.core.seq.call(null,inst_26082);var state_26141__$1 = (function (){var statearr_26165 = state_26141;(statearr_26165[(10)] = inst_26096__$1);
return statearr_26165;
})();if(inst_26096__$1)
{var statearr_26166_26208 = state_26141__$1;(statearr_26166_26208[(1)] = (13));
} else
{var statearr_26167_26209 = state_26141__$1;(statearr_26167_26209[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26142 === (9)))
{var inst_26118 = (state_26141[(2)]);var state_26141__$1 = state_26141;var statearr_26168_26210 = state_26141__$1;(statearr_26168_26210[(2)] = inst_26118);
(statearr_26168_26210[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26142 === (5)))
{var inst_26079 = cljs.core.deref.call(null,mults);var inst_26080 = cljs.core.vals.call(null,inst_26079);var inst_26081 = cljs.core.seq.call(null,inst_26080);var inst_26082 = inst_26081;var inst_26083 = null;var inst_26084 = (0);var inst_26085 = (0);var state_26141__$1 = (function (){var statearr_26169 = state_26141;(statearr_26169[(12)] = inst_26085);
(statearr_26169[(13)] = inst_26082);
(statearr_26169[(14)] = inst_26084);
(statearr_26169[(15)] = inst_26083);
return statearr_26169;
})();var statearr_26170_26211 = state_26141__$1;(statearr_26170_26211[(2)] = null);
(statearr_26170_26211[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26142 === (14)))
{var state_26141__$1 = state_26141;var statearr_26174_26212 = state_26141__$1;(statearr_26174_26212[(2)] = null);
(statearr_26174_26212[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26142 === (16)))
{var inst_26096 = (state_26141[(10)]);var inst_26100 = cljs.core.chunk_first.call(null,inst_26096);var inst_26101 = cljs.core.chunk_rest.call(null,inst_26096);var inst_26102 = cljs.core.count.call(null,inst_26100);var inst_26082 = inst_26101;var inst_26083 = inst_26100;var inst_26084 = inst_26102;var inst_26085 = (0);var state_26141__$1 = (function (){var statearr_26175 = state_26141;(statearr_26175[(12)] = inst_26085);
(statearr_26175[(13)] = inst_26082);
(statearr_26175[(14)] = inst_26084);
(statearr_26175[(15)] = inst_26083);
return statearr_26175;
})();var statearr_26176_26213 = state_26141__$1;(statearr_26176_26213[(2)] = null);
(statearr_26176_26213[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26142 === (10)))
{var inst_26085 = (state_26141[(12)]);var inst_26082 = (state_26141[(13)]);var inst_26084 = (state_26141[(14)]);var inst_26083 = (state_26141[(15)]);var inst_26090 = cljs.core._nth.call(null,inst_26083,inst_26085);var inst_26091 = cljs.core.async.muxch_STAR_.call(null,inst_26090);var inst_26092 = cljs.core.async.close_BANG_.call(null,inst_26091);var inst_26093 = (inst_26085 + (1));var tmp26171 = inst_26082;var tmp26172 = inst_26084;var tmp26173 = inst_26083;var inst_26082__$1 = tmp26171;var inst_26083__$1 = tmp26173;var inst_26084__$1 = tmp26172;var inst_26085__$1 = inst_26093;var state_26141__$1 = (function (){var statearr_26177 = state_26141;(statearr_26177[(12)] = inst_26085__$1);
(statearr_26177[(13)] = inst_26082__$1);
(statearr_26177[(14)] = inst_26084__$1);
(statearr_26177[(15)] = inst_26083__$1);
(statearr_26177[(17)] = inst_26092);
return statearr_26177;
})();var statearr_26178_26214 = state_26141__$1;(statearr_26178_26214[(2)] = null);
(statearr_26178_26214[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26142 === (18)))
{var inst_26111 = (state_26141[(2)]);var state_26141__$1 = state_26141;var statearr_26179_26215 = state_26141__$1;(statearr_26179_26215[(2)] = inst_26111);
(statearr_26179_26215[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26142 === (8)))
{var inst_26085 = (state_26141[(12)]);var inst_26084 = (state_26141[(14)]);var inst_26087 = (inst_26085 < inst_26084);var inst_26088 = inst_26087;var state_26141__$1 = state_26141;if(cljs.core.truth_(inst_26088))
{var statearr_26180_26216 = state_26141__$1;(statearr_26180_26216[(1)] = (10));
} else
{var statearr_26181_26217 = state_26141__$1;(statearr_26181_26217[(1)] = (11));
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
});})(c__11517__auto___26189,mults,ensure_mult,p))
;return ((function (switch__11461__auto__,c__11517__auto___26189,mults,ensure_mult,p){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26185[(0)] = state_machine__11462__auto__);
(statearr_26185[(1)] = (1));
return statearr_26185;
});
var state_machine__11462__auto____1 = (function (state_26141){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26141);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26186){if((e26186 instanceof Object))
{var ex__11465__auto__ = e26186;var statearr_26187_26218 = state_26141;(statearr_26187_26218[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26141);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26186;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26219 = state_26141;
state_26141 = G__26219;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26141){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26189,mults,ensure_mult,p))
})();var state__11519__auto__ = (function (){var statearr_26188 = f__11518__auto__.call(null);(statearr_26188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26189);
return statearr_26188;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26189,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__11517__auto___26356 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26356,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26356,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26326){var state_val_26327 = (state_26326[(1)]);if((state_val_26327 === (7)))
{var state_26326__$1 = state_26326;var statearr_26328_26357 = state_26326__$1;(statearr_26328_26357[(2)] = null);
(statearr_26328_26357[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26327 === (1)))
{var state_26326__$1 = state_26326;var statearr_26329_26358 = state_26326__$1;(statearr_26329_26358[(2)] = null);
(statearr_26329_26358[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26327 === (4)))
{var inst_26290 = (state_26326[(7)]);var inst_26292 = (inst_26290 < cnt);var state_26326__$1 = state_26326;if(cljs.core.truth_(inst_26292))
{var statearr_26330_26359 = state_26326__$1;(statearr_26330_26359[(1)] = (6));
} else
{var statearr_26331_26360 = state_26326__$1;(statearr_26331_26360[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26327 === (15)))
{var inst_26322 = (state_26326[(2)]);var state_26326__$1 = state_26326;var statearr_26332_26361 = state_26326__$1;(statearr_26332_26361[(2)] = inst_26322);
(statearr_26332_26361[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26327 === (13)))
{var inst_26315 = cljs.core.async.close_BANG_.call(null,out);var state_26326__$1 = state_26326;var statearr_26333_26362 = state_26326__$1;(statearr_26333_26362[(2)] = inst_26315);
(statearr_26333_26362[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26327 === (6)))
{var state_26326__$1 = state_26326;var statearr_26334_26363 = state_26326__$1;(statearr_26334_26363[(2)] = null);
(statearr_26334_26363[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26327 === (3)))
{var inst_26324 = (state_26326[(2)]);var state_26326__$1 = state_26326;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26326__$1,inst_26324);
} else
{if((state_val_26327 === (12)))
{var inst_26312 = (state_26326[(8)]);var inst_26312__$1 = (state_26326[(2)]);var inst_26313 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26312__$1);var state_26326__$1 = (function (){var statearr_26335 = state_26326;(statearr_26335[(8)] = inst_26312__$1);
return statearr_26335;
})();if(cljs.core.truth_(inst_26313))
{var statearr_26336_26364 = state_26326__$1;(statearr_26336_26364[(1)] = (13));
} else
{var statearr_26337_26365 = state_26326__$1;(statearr_26337_26365[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26327 === (2)))
{var inst_26289 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26290 = (0);var state_26326__$1 = (function (){var statearr_26338 = state_26326;(statearr_26338[(7)] = inst_26290);
(statearr_26338[(9)] = inst_26289);
return statearr_26338;
})();var statearr_26339_26366 = state_26326__$1;(statearr_26339_26366[(2)] = null);
(statearr_26339_26366[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26327 === (11)))
{var inst_26290 = (state_26326[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26326,(10),Object,null,(9));var inst_26299 = chs__$1.call(null,inst_26290);var inst_26300 = done.call(null,inst_26290);var inst_26301 = cljs.core.async.take_BANG_.call(null,inst_26299,inst_26300);var state_26326__$1 = state_26326;var statearr_26340_26367 = state_26326__$1;(statearr_26340_26367[(2)] = inst_26301);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26326__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26327 === (9)))
{var inst_26290 = (state_26326[(7)]);var inst_26303 = (state_26326[(2)]);var inst_26304 = (inst_26290 + (1));var inst_26290__$1 = inst_26304;var state_26326__$1 = (function (){var statearr_26341 = state_26326;(statearr_26341[(10)] = inst_26303);
(statearr_26341[(7)] = inst_26290__$1);
return statearr_26341;
})();var statearr_26342_26368 = state_26326__$1;(statearr_26342_26368[(2)] = null);
(statearr_26342_26368[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26327 === (5)))
{var inst_26310 = (state_26326[(2)]);var state_26326__$1 = (function (){var statearr_26343 = state_26326;(statearr_26343[(11)] = inst_26310);
return statearr_26343;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26326__$1,(12),dchan);
} else
{if((state_val_26327 === (14)))
{var inst_26312 = (state_26326[(8)]);var inst_26317 = cljs.core.apply.call(null,f,inst_26312);var state_26326__$1 = state_26326;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26326__$1,(16),out,inst_26317);
} else
{if((state_val_26327 === (16)))
{var inst_26319 = (state_26326[(2)]);var state_26326__$1 = (function (){var statearr_26344 = state_26326;(statearr_26344[(12)] = inst_26319);
return statearr_26344;
})();var statearr_26345_26369 = state_26326__$1;(statearr_26345_26369[(2)] = null);
(statearr_26345_26369[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26327 === (10)))
{var inst_26294 = (state_26326[(2)]);var inst_26295 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26326__$1 = (function (){var statearr_26346 = state_26326;(statearr_26346[(13)] = inst_26294);
return statearr_26346;
})();var statearr_26347_26370 = state_26326__$1;(statearr_26347_26370[(2)] = inst_26295);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26326__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26327 === (8)))
{var inst_26308 = (state_26326[(2)]);var state_26326__$1 = state_26326;var statearr_26348_26371 = state_26326__$1;(statearr_26348_26371[(2)] = inst_26308);
(statearr_26348_26371[(1)] = (5));
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
});})(c__11517__auto___26356,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__11461__auto__,c__11517__auto___26356,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26352[(0)] = state_machine__11462__auto__);
(statearr_26352[(1)] = (1));
return statearr_26352;
});
var state_machine__11462__auto____1 = (function (state_26326){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26326);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26353){if((e26353 instanceof Object))
{var ex__11465__auto__ = e26353;var statearr_26354_26372 = state_26326;(statearr_26354_26372[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26326);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26353;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26373 = state_26326;
state_26326 = G__26373;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26326){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26356,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11519__auto__ = (function (){var statearr_26355 = f__11518__auto__.call(null);(statearr_26355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26356);
return statearr_26355;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26356,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___26481 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26481,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26481,out){
return (function (state_26457){var state_val_26458 = (state_26457[(1)]);if((state_val_26458 === (7)))
{var inst_26437 = (state_26457[(7)]);var inst_26436 = (state_26457[(8)]);var inst_26436__$1 = (state_26457[(2)]);var inst_26437__$1 = cljs.core.nth.call(null,inst_26436__$1,(0),null);var inst_26438 = cljs.core.nth.call(null,inst_26436__$1,(1),null);var inst_26439 = (inst_26437__$1 == null);var state_26457__$1 = (function (){var statearr_26459 = state_26457;(statearr_26459[(7)] = inst_26437__$1);
(statearr_26459[(9)] = inst_26438);
(statearr_26459[(8)] = inst_26436__$1);
return statearr_26459;
})();if(cljs.core.truth_(inst_26439))
{var statearr_26460_26482 = state_26457__$1;(statearr_26460_26482[(1)] = (8));
} else
{var statearr_26461_26483 = state_26457__$1;(statearr_26461_26483[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26458 === (1)))
{var inst_26428 = cljs.core.vec.call(null,chs);var inst_26429 = inst_26428;var state_26457__$1 = (function (){var statearr_26462 = state_26457;(statearr_26462[(10)] = inst_26429);
return statearr_26462;
})();var statearr_26463_26484 = state_26457__$1;(statearr_26463_26484[(2)] = null);
(statearr_26463_26484[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26458 === (4)))
{var inst_26429 = (state_26457[(10)]);var state_26457__$1 = state_26457;return cljs.core.async.ioc_alts_BANG_.call(null,state_26457__$1,(7),inst_26429);
} else
{if((state_val_26458 === (6)))
{var inst_26453 = (state_26457[(2)]);var state_26457__$1 = state_26457;var statearr_26464_26485 = state_26457__$1;(statearr_26464_26485[(2)] = inst_26453);
(statearr_26464_26485[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26458 === (3)))
{var inst_26455 = (state_26457[(2)]);var state_26457__$1 = state_26457;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26457__$1,inst_26455);
} else
{if((state_val_26458 === (2)))
{var inst_26429 = (state_26457[(10)]);var inst_26431 = cljs.core.count.call(null,inst_26429);var inst_26432 = (inst_26431 > (0));var state_26457__$1 = state_26457;if(cljs.core.truth_(inst_26432))
{var statearr_26466_26486 = state_26457__$1;(statearr_26466_26486[(1)] = (4));
} else
{var statearr_26467_26487 = state_26457__$1;(statearr_26467_26487[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26458 === (11)))
{var inst_26429 = (state_26457[(10)]);var inst_26446 = (state_26457[(2)]);var tmp26465 = inst_26429;var inst_26429__$1 = tmp26465;var state_26457__$1 = (function (){var statearr_26468 = state_26457;(statearr_26468[(10)] = inst_26429__$1);
(statearr_26468[(11)] = inst_26446);
return statearr_26468;
})();var statearr_26469_26488 = state_26457__$1;(statearr_26469_26488[(2)] = null);
(statearr_26469_26488[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26458 === (9)))
{var inst_26437 = (state_26457[(7)]);var state_26457__$1 = state_26457;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26457__$1,(11),out,inst_26437);
} else
{if((state_val_26458 === (5)))
{var inst_26451 = cljs.core.async.close_BANG_.call(null,out);var state_26457__$1 = state_26457;var statearr_26470_26489 = state_26457__$1;(statearr_26470_26489[(2)] = inst_26451);
(statearr_26470_26489[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26458 === (10)))
{var inst_26449 = (state_26457[(2)]);var state_26457__$1 = state_26457;var statearr_26471_26490 = state_26457__$1;(statearr_26471_26490[(2)] = inst_26449);
(statearr_26471_26490[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26458 === (8)))
{var inst_26437 = (state_26457[(7)]);var inst_26438 = (state_26457[(9)]);var inst_26436 = (state_26457[(8)]);var inst_26429 = (state_26457[(10)]);var inst_26441 = (function (){var c = inst_26438;var v = inst_26437;var vec__26434 = inst_26436;var cs = inst_26429;return ((function (c,v,vec__26434,cs,inst_26437,inst_26438,inst_26436,inst_26429,state_val_26458,c__11517__auto___26481,out){
return (function (p1__26374_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__26374_SHARP_);
});
;})(c,v,vec__26434,cs,inst_26437,inst_26438,inst_26436,inst_26429,state_val_26458,c__11517__auto___26481,out))
})();var inst_26442 = cljs.core.filterv.call(null,inst_26441,inst_26429);var inst_26429__$1 = inst_26442;var state_26457__$1 = (function (){var statearr_26472 = state_26457;(statearr_26472[(10)] = inst_26429__$1);
return statearr_26472;
})();var statearr_26473_26491 = state_26457__$1;(statearr_26473_26491[(2)] = null);
(statearr_26473_26491[(1)] = (2));
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
});})(c__11517__auto___26481,out))
;return ((function (switch__11461__auto__,c__11517__auto___26481,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26477 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26477[(0)] = state_machine__11462__auto__);
(statearr_26477[(1)] = (1));
return statearr_26477;
});
var state_machine__11462__auto____1 = (function (state_26457){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26457);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26478){if((e26478 instanceof Object))
{var ex__11465__auto__ = e26478;var statearr_26479_26492 = state_26457;(statearr_26479_26492[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26457);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26478;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26493 = state_26457;
state_26457 = G__26493;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26457){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26481,out))
})();var state__11519__auto__ = (function (){var statearr_26480 = f__11518__auto__.call(null);(statearr_26480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26481);
return statearr_26480;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26481,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___26586 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26586,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26586,out){
return (function (state_26563){var state_val_26564 = (state_26563[(1)]);if((state_val_26564 === (7)))
{var inst_26545 = (state_26563[(7)]);var inst_26545__$1 = (state_26563[(2)]);var inst_26546 = (inst_26545__$1 == null);var inst_26547 = cljs.core.not.call(null,inst_26546);var state_26563__$1 = (function (){var statearr_26565 = state_26563;(statearr_26565[(7)] = inst_26545__$1);
return statearr_26565;
})();if(inst_26547)
{var statearr_26566_26587 = state_26563__$1;(statearr_26566_26587[(1)] = (8));
} else
{var statearr_26567_26588 = state_26563__$1;(statearr_26567_26588[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26564 === (1)))
{var inst_26540 = (0);var state_26563__$1 = (function (){var statearr_26568 = state_26563;(statearr_26568[(8)] = inst_26540);
return statearr_26568;
})();var statearr_26569_26589 = state_26563__$1;(statearr_26569_26589[(2)] = null);
(statearr_26569_26589[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26564 === (4)))
{var state_26563__$1 = state_26563;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26563__$1,(7),ch);
} else
{if((state_val_26564 === (6)))
{var inst_26558 = (state_26563[(2)]);var state_26563__$1 = state_26563;var statearr_26570_26590 = state_26563__$1;(statearr_26570_26590[(2)] = inst_26558);
(statearr_26570_26590[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26564 === (3)))
{var inst_26560 = (state_26563[(2)]);var inst_26561 = cljs.core.async.close_BANG_.call(null,out);var state_26563__$1 = (function (){var statearr_26571 = state_26563;(statearr_26571[(9)] = inst_26560);
return statearr_26571;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26563__$1,inst_26561);
} else
{if((state_val_26564 === (2)))
{var inst_26540 = (state_26563[(8)]);var inst_26542 = (inst_26540 < n);var state_26563__$1 = state_26563;if(cljs.core.truth_(inst_26542))
{var statearr_26572_26591 = state_26563__$1;(statearr_26572_26591[(1)] = (4));
} else
{var statearr_26573_26592 = state_26563__$1;(statearr_26573_26592[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26564 === (11)))
{var inst_26540 = (state_26563[(8)]);var inst_26550 = (state_26563[(2)]);var inst_26551 = (inst_26540 + (1));var inst_26540__$1 = inst_26551;var state_26563__$1 = (function (){var statearr_26574 = state_26563;(statearr_26574[(8)] = inst_26540__$1);
(statearr_26574[(10)] = inst_26550);
return statearr_26574;
})();var statearr_26575_26593 = state_26563__$1;(statearr_26575_26593[(2)] = null);
(statearr_26575_26593[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26564 === (9)))
{var state_26563__$1 = state_26563;var statearr_26576_26594 = state_26563__$1;(statearr_26576_26594[(2)] = null);
(statearr_26576_26594[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26564 === (5)))
{var state_26563__$1 = state_26563;var statearr_26577_26595 = state_26563__$1;(statearr_26577_26595[(2)] = null);
(statearr_26577_26595[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26564 === (10)))
{var inst_26555 = (state_26563[(2)]);var state_26563__$1 = state_26563;var statearr_26578_26596 = state_26563__$1;(statearr_26578_26596[(2)] = inst_26555);
(statearr_26578_26596[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26564 === (8)))
{var inst_26545 = (state_26563[(7)]);var state_26563__$1 = state_26563;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26563__$1,(11),out,inst_26545);
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
});})(c__11517__auto___26586,out))
;return ((function (switch__11461__auto__,c__11517__auto___26586,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26582 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26582[(0)] = state_machine__11462__auto__);
(statearr_26582[(1)] = (1));
return statearr_26582;
});
var state_machine__11462__auto____1 = (function (state_26563){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26563);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26583){if((e26583 instanceof Object))
{var ex__11465__auto__ = e26583;var statearr_26584_26597 = state_26563;(statearr_26584_26597[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26563);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26583;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26598 = state_26563;
state_26563 = G__26598;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26563){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26586,out))
})();var state__11519__auto__ = (function (){var statearr_26585 = f__11518__auto__.call(null);(statearr_26585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26586);
return statearr_26585;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26586,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26606 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26606 = (function (ch,f,map_LT_,meta26607){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26607 = meta26607;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26606.cljs$lang$type = true;
cljs.core.async.t26606.cljs$lang$ctorStr = "cljs.core.async/t26606";
cljs.core.async.t26606.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26606");
});
cljs.core.async.t26606.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26606.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t26606.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26606.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t26609 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26609 = (function (fn1,_,meta26607,ch,f,map_LT_,meta26610){
this.fn1 = fn1;
this._ = _;
this.meta26607 = meta26607;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26610 = meta26610;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26609.cljs$lang$type = true;
cljs.core.async.t26609.cljs$lang$ctorStr = "cljs.core.async/t26609";
cljs.core.async.t26609.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26609");
});})(___$1))
;
cljs.core.async.t26609.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26609.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t26609.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__26599_SHARP_){return f1.call(null,(((p1__26599_SHARP_ == null))?null:self__.f.call(null,p1__26599_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t26609.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26611){var self__ = this;
var _26611__$1 = this;return self__.meta26610;
});})(___$1))
;
cljs.core.async.t26609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26611,meta26610__$1){var self__ = this;
var _26611__$1 = this;return (new cljs.core.async.t26609(self__.fn1,self__._,self__.meta26607,self__.ch,self__.f,self__.map_LT_,meta26610__$1));
});})(___$1))
;
cljs.core.async.__GT_t26609 = ((function (___$1){
return (function __GT_t26609(fn1__$1,___$2,meta26607__$1,ch__$2,f__$2,map_LT___$2,meta26610){return (new cljs.core.async.t26609(fn1__$1,___$2,meta26607__$1,ch__$2,f__$2,map_LT___$2,meta26610));
});})(___$1))
;
}
return (new cljs.core.async.t26609(fn1,___$1,self__.meta26607,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t26606.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26606.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26606.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26608){var self__ = this;
var _26608__$1 = this;return self__.meta26607;
});
cljs.core.async.t26606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26608,meta26607__$1){var self__ = this;
var _26608__$1 = this;return (new cljs.core.async.t26606(self__.ch,self__.f,self__.map_LT_,meta26607__$1));
});
cljs.core.async.__GT_t26606 = (function __GT_t26606(ch__$1,f__$1,map_LT___$1,meta26607){return (new cljs.core.async.t26606(ch__$1,f__$1,map_LT___$1,meta26607));
});
}
return (new cljs.core.async.t26606(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26615 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26615 = (function (ch,f,map_GT_,meta26616){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26616 = meta26616;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26615.cljs$lang$type = true;
cljs.core.async.t26615.cljs$lang$ctorStr = "cljs.core.async/t26615";
cljs.core.async.t26615.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26615");
});
cljs.core.async.t26615.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26615.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t26615.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26615.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26615.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26615.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26617){var self__ = this;
var _26617__$1 = this;return self__.meta26616;
});
cljs.core.async.t26615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26617,meta26616__$1){var self__ = this;
var _26617__$1 = this;return (new cljs.core.async.t26615(self__.ch,self__.f,self__.map_GT_,meta26616__$1));
});
cljs.core.async.__GT_t26615 = (function __GT_t26615(ch__$1,f__$1,map_GT___$1,meta26616){return (new cljs.core.async.t26615(ch__$1,f__$1,map_GT___$1,meta26616));
});
}
return (new cljs.core.async.t26615(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26621 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26621 = (function (ch,p,filter_GT_,meta26622){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26622 = meta26622;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26621.cljs$lang$type = true;
cljs.core.async.t26621.cljs$lang$ctorStr = "cljs.core.async/t26621";
cljs.core.async.t26621.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26621");
});
cljs.core.async.t26621.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26621.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t26621.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26621.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26621.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26621.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26621.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26623){var self__ = this;
var _26623__$1 = this;return self__.meta26622;
});
cljs.core.async.t26621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26623,meta26622__$1){var self__ = this;
var _26623__$1 = this;return (new cljs.core.async.t26621(self__.ch,self__.p,self__.filter_GT_,meta26622__$1));
});
cljs.core.async.__GT_t26621 = (function __GT_t26621(ch__$1,p__$1,filter_GT___$1,meta26622){return (new cljs.core.async.t26621(ch__$1,p__$1,filter_GT___$1,meta26622));
});
}
return (new cljs.core.async.t26621(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___26706 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26706,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26706,out){
return (function (state_26685){var state_val_26686 = (state_26685[(1)]);if((state_val_26686 === (7)))
{var inst_26681 = (state_26685[(2)]);var state_26685__$1 = state_26685;var statearr_26687_26707 = state_26685__$1;(statearr_26687_26707[(2)] = inst_26681);
(statearr_26687_26707[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26686 === (1)))
{var state_26685__$1 = state_26685;var statearr_26688_26708 = state_26685__$1;(statearr_26688_26708[(2)] = null);
(statearr_26688_26708[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26686 === (4)))
{var inst_26667 = (state_26685[(7)]);var inst_26667__$1 = (state_26685[(2)]);var inst_26668 = (inst_26667__$1 == null);var state_26685__$1 = (function (){var statearr_26689 = state_26685;(statearr_26689[(7)] = inst_26667__$1);
return statearr_26689;
})();if(cljs.core.truth_(inst_26668))
{var statearr_26690_26709 = state_26685__$1;(statearr_26690_26709[(1)] = (5));
} else
{var statearr_26691_26710 = state_26685__$1;(statearr_26691_26710[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26686 === (6)))
{var inst_26667 = (state_26685[(7)]);var inst_26672 = p.call(null,inst_26667);var state_26685__$1 = state_26685;if(cljs.core.truth_(inst_26672))
{var statearr_26692_26711 = state_26685__$1;(statearr_26692_26711[(1)] = (8));
} else
{var statearr_26693_26712 = state_26685__$1;(statearr_26693_26712[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26686 === (3)))
{var inst_26683 = (state_26685[(2)]);var state_26685__$1 = state_26685;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26685__$1,inst_26683);
} else
{if((state_val_26686 === (2)))
{var state_26685__$1 = state_26685;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26685__$1,(4),ch);
} else
{if((state_val_26686 === (11)))
{var inst_26675 = (state_26685[(2)]);var state_26685__$1 = state_26685;var statearr_26694_26713 = state_26685__$1;(statearr_26694_26713[(2)] = inst_26675);
(statearr_26694_26713[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26686 === (9)))
{var state_26685__$1 = state_26685;var statearr_26695_26714 = state_26685__$1;(statearr_26695_26714[(2)] = null);
(statearr_26695_26714[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26686 === (5)))
{var inst_26670 = cljs.core.async.close_BANG_.call(null,out);var state_26685__$1 = state_26685;var statearr_26696_26715 = state_26685__$1;(statearr_26696_26715[(2)] = inst_26670);
(statearr_26696_26715[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26686 === (10)))
{var inst_26678 = (state_26685[(2)]);var state_26685__$1 = (function (){var statearr_26697 = state_26685;(statearr_26697[(8)] = inst_26678);
return statearr_26697;
})();var statearr_26698_26716 = state_26685__$1;(statearr_26698_26716[(2)] = null);
(statearr_26698_26716[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26686 === (8)))
{var inst_26667 = (state_26685[(7)]);var state_26685__$1 = state_26685;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26685__$1,(11),out,inst_26667);
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
});})(c__11517__auto___26706,out))
;return ((function (switch__11461__auto__,c__11517__auto___26706,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26702 = [null,null,null,null,null,null,null,null,null];(statearr_26702[(0)] = state_machine__11462__auto__);
(statearr_26702[(1)] = (1));
return statearr_26702;
});
var state_machine__11462__auto____1 = (function (state_26685){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26685);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26703){if((e26703 instanceof Object))
{var ex__11465__auto__ = e26703;var statearr_26704_26717 = state_26685;(statearr_26704_26717[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26685);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26703;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26718 = state_26685;
state_26685 = G__26718;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26685){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26706,out))
})();var state__11519__auto__ = (function (){var statearr_26705 = f__11518__auto__.call(null);(statearr_26705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26706);
return statearr_26705;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26706,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__){
return (function (state_26884){var state_val_26885 = (state_26884[(1)]);if((state_val_26885 === (7)))
{var inst_26880 = (state_26884[(2)]);var state_26884__$1 = state_26884;var statearr_26886_26927 = state_26884__$1;(statearr_26886_26927[(2)] = inst_26880);
(statearr_26886_26927[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26885 === (20)))
{var inst_26850 = (state_26884[(7)]);var inst_26861 = (state_26884[(2)]);var inst_26862 = cljs.core.next.call(null,inst_26850);var inst_26836 = inst_26862;var inst_26837 = null;var inst_26838 = (0);var inst_26839 = (0);var state_26884__$1 = (function (){var statearr_26887 = state_26884;(statearr_26887[(8)] = inst_26861);
(statearr_26887[(9)] = inst_26836);
(statearr_26887[(10)] = inst_26838);
(statearr_26887[(11)] = inst_26837);
(statearr_26887[(12)] = inst_26839);
return statearr_26887;
})();var statearr_26888_26928 = state_26884__$1;(statearr_26888_26928[(2)] = null);
(statearr_26888_26928[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26885 === (1)))
{var state_26884__$1 = state_26884;var statearr_26889_26929 = state_26884__$1;(statearr_26889_26929[(2)] = null);
(statearr_26889_26929[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26885 === (4)))
{var inst_26825 = (state_26884[(13)]);var inst_26825__$1 = (state_26884[(2)]);var inst_26826 = (inst_26825__$1 == null);var state_26884__$1 = (function (){var statearr_26890 = state_26884;(statearr_26890[(13)] = inst_26825__$1);
return statearr_26890;
})();if(cljs.core.truth_(inst_26826))
{var statearr_26891_26930 = state_26884__$1;(statearr_26891_26930[(1)] = (5));
} else
{var statearr_26892_26931 = state_26884__$1;(statearr_26892_26931[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26885 === (15)))
{var state_26884__$1 = state_26884;var statearr_26896_26932 = state_26884__$1;(statearr_26896_26932[(2)] = null);
(statearr_26896_26932[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26885 === (21)))
{var state_26884__$1 = state_26884;var statearr_26897_26933 = state_26884__$1;(statearr_26897_26933[(2)] = null);
(statearr_26897_26933[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26885 === (13)))
{var inst_26836 = (state_26884[(9)]);var inst_26838 = (state_26884[(10)]);var inst_26837 = (state_26884[(11)]);var inst_26839 = (state_26884[(12)]);var inst_26846 = (state_26884[(2)]);var inst_26847 = (inst_26839 + (1));var tmp26893 = inst_26836;var tmp26894 = inst_26838;var tmp26895 = inst_26837;var inst_26836__$1 = tmp26893;var inst_26837__$1 = tmp26895;var inst_26838__$1 = tmp26894;var inst_26839__$1 = inst_26847;var state_26884__$1 = (function (){var statearr_26898 = state_26884;(statearr_26898[(9)] = inst_26836__$1);
(statearr_26898[(10)] = inst_26838__$1);
(statearr_26898[(11)] = inst_26837__$1);
(statearr_26898[(14)] = inst_26846);
(statearr_26898[(12)] = inst_26839__$1);
return statearr_26898;
})();var statearr_26899_26934 = state_26884__$1;(statearr_26899_26934[(2)] = null);
(statearr_26899_26934[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26885 === (22)))
{var state_26884__$1 = state_26884;var statearr_26900_26935 = state_26884__$1;(statearr_26900_26935[(2)] = null);
(statearr_26900_26935[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26885 === (6)))
{var inst_26825 = (state_26884[(13)]);var inst_26834 = f.call(null,inst_26825);var inst_26835 = cljs.core.seq.call(null,inst_26834);var inst_26836 = inst_26835;var inst_26837 = null;var inst_26838 = (0);var inst_26839 = (0);var state_26884__$1 = (function (){var statearr_26901 = state_26884;(statearr_26901[(9)] = inst_26836);
(statearr_26901[(10)] = inst_26838);
(statearr_26901[(11)] = inst_26837);
(statearr_26901[(12)] = inst_26839);
return statearr_26901;
})();var statearr_26902_26936 = state_26884__$1;(statearr_26902_26936[(2)] = null);
(statearr_26902_26936[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26885 === (17)))
{var inst_26850 = (state_26884[(7)]);var inst_26854 = cljs.core.chunk_first.call(null,inst_26850);var inst_26855 = cljs.core.chunk_rest.call(null,inst_26850);var inst_26856 = cljs.core.count.call(null,inst_26854);var inst_26836 = inst_26855;var inst_26837 = inst_26854;var inst_26838 = inst_26856;var inst_26839 = (0);var state_26884__$1 = (function (){var statearr_26903 = state_26884;(statearr_26903[(9)] = inst_26836);
(statearr_26903[(10)] = inst_26838);
(statearr_26903[(11)] = inst_26837);
(statearr_26903[(12)] = inst_26839);
return statearr_26903;
})();var statearr_26904_26937 = state_26884__$1;(statearr_26904_26937[(2)] = null);
(statearr_26904_26937[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26885 === (3)))
{var inst_26882 = (state_26884[(2)]);var state_26884__$1 = state_26884;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26884__$1,inst_26882);
} else
{if((state_val_26885 === (12)))
{var inst_26870 = (state_26884[(2)]);var state_26884__$1 = state_26884;var statearr_26905_26938 = state_26884__$1;(statearr_26905_26938[(2)] = inst_26870);
(statearr_26905_26938[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26885 === (2)))
{var state_26884__$1 = state_26884;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26884__$1,(4),in$);
} else
{if((state_val_26885 === (23)))
{var inst_26878 = (state_26884[(2)]);var state_26884__$1 = state_26884;var statearr_26906_26939 = state_26884__$1;(statearr_26906_26939[(2)] = inst_26878);
(statearr_26906_26939[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26885 === (19)))
{var inst_26865 = (state_26884[(2)]);var state_26884__$1 = state_26884;var statearr_26907_26940 = state_26884__$1;(statearr_26907_26940[(2)] = inst_26865);
(statearr_26907_26940[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26885 === (11)))
{var inst_26850 = (state_26884[(7)]);var inst_26836 = (state_26884[(9)]);var inst_26850__$1 = cljs.core.seq.call(null,inst_26836);var state_26884__$1 = (function (){var statearr_26908 = state_26884;(statearr_26908[(7)] = inst_26850__$1);
return statearr_26908;
})();if(inst_26850__$1)
{var statearr_26909_26941 = state_26884__$1;(statearr_26909_26941[(1)] = (14));
} else
{var statearr_26910_26942 = state_26884__$1;(statearr_26910_26942[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26885 === (9)))
{var inst_26872 = (state_26884[(2)]);var inst_26873 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_26884__$1 = (function (){var statearr_26911 = state_26884;(statearr_26911[(15)] = inst_26872);
return statearr_26911;
})();if(cljs.core.truth_(inst_26873))
{var statearr_26912_26943 = state_26884__$1;(statearr_26912_26943[(1)] = (21));
} else
{var statearr_26913_26944 = state_26884__$1;(statearr_26913_26944[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26885 === (5)))
{var inst_26828 = cljs.core.async.close_BANG_.call(null,out);var state_26884__$1 = state_26884;var statearr_26914_26945 = state_26884__$1;(statearr_26914_26945[(2)] = inst_26828);
(statearr_26914_26945[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26885 === (14)))
{var inst_26850 = (state_26884[(7)]);var inst_26852 = cljs.core.chunked_seq_QMARK_.call(null,inst_26850);var state_26884__$1 = state_26884;if(inst_26852)
{var statearr_26915_26946 = state_26884__$1;(statearr_26915_26946[(1)] = (17));
} else
{var statearr_26916_26947 = state_26884__$1;(statearr_26916_26947[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26885 === (16)))
{var inst_26868 = (state_26884[(2)]);var state_26884__$1 = state_26884;var statearr_26917_26948 = state_26884__$1;(statearr_26917_26948[(2)] = inst_26868);
(statearr_26917_26948[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26885 === (10)))
{var inst_26837 = (state_26884[(11)]);var inst_26839 = (state_26884[(12)]);var inst_26844 = cljs.core._nth.call(null,inst_26837,inst_26839);var state_26884__$1 = state_26884;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26884__$1,(13),out,inst_26844);
} else
{if((state_val_26885 === (18)))
{var inst_26850 = (state_26884[(7)]);var inst_26859 = cljs.core.first.call(null,inst_26850);var state_26884__$1 = state_26884;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26884__$1,(20),out,inst_26859);
} else
{if((state_val_26885 === (8)))
{var inst_26838 = (state_26884[(10)]);var inst_26839 = (state_26884[(12)]);var inst_26841 = (inst_26839 < inst_26838);var inst_26842 = inst_26841;var state_26884__$1 = state_26884;if(cljs.core.truth_(inst_26842))
{var statearr_26918_26949 = state_26884__$1;(statearr_26918_26949[(1)] = (10));
} else
{var statearr_26919_26950 = state_26884__$1;(statearr_26919_26950[(1)] = (11));
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
});})(c__11517__auto__))
;return ((function (switch__11461__auto__,c__11517__auto__){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26923 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26923[(0)] = state_machine__11462__auto__);
(statearr_26923[(1)] = (1));
return statearr_26923;
});
var state_machine__11462__auto____1 = (function (state_26884){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26884);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26924){if((e26924 instanceof Object))
{var ex__11465__auto__ = e26924;var statearr_26925_26951 = state_26884;(statearr_26925_26951[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26884);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26924;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26952 = state_26884;
state_26884 = G__26952;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26884){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_26926 = f__11518__auto__.call(null);(statearr_26926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_26926;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__))
);
return c__11517__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___27049 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___27049,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___27049,out){
return (function (state_27024){var state_val_27025 = (state_27024[(1)]);if((state_val_27025 === (7)))
{var inst_27019 = (state_27024[(2)]);var state_27024__$1 = state_27024;var statearr_27026_27050 = state_27024__$1;(statearr_27026_27050[(2)] = inst_27019);
(statearr_27026_27050[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27025 === (1)))
{var inst_27001 = null;var state_27024__$1 = (function (){var statearr_27027 = state_27024;(statearr_27027[(7)] = inst_27001);
return statearr_27027;
})();var statearr_27028_27051 = state_27024__$1;(statearr_27028_27051[(2)] = null);
(statearr_27028_27051[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27025 === (4)))
{var inst_27004 = (state_27024[(8)]);var inst_27004__$1 = (state_27024[(2)]);var inst_27005 = (inst_27004__$1 == null);var inst_27006 = cljs.core.not.call(null,inst_27005);var state_27024__$1 = (function (){var statearr_27029 = state_27024;(statearr_27029[(8)] = inst_27004__$1);
return statearr_27029;
})();if(inst_27006)
{var statearr_27030_27052 = state_27024__$1;(statearr_27030_27052[(1)] = (5));
} else
{var statearr_27031_27053 = state_27024__$1;(statearr_27031_27053[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27025 === (6)))
{var state_27024__$1 = state_27024;var statearr_27032_27054 = state_27024__$1;(statearr_27032_27054[(2)] = null);
(statearr_27032_27054[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27025 === (3)))
{var inst_27021 = (state_27024[(2)]);var inst_27022 = cljs.core.async.close_BANG_.call(null,out);var state_27024__$1 = (function (){var statearr_27033 = state_27024;(statearr_27033[(9)] = inst_27021);
return statearr_27033;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27024__$1,inst_27022);
} else
{if((state_val_27025 === (2)))
{var state_27024__$1 = state_27024;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27024__$1,(4),ch);
} else
{if((state_val_27025 === (11)))
{var inst_27004 = (state_27024[(8)]);var inst_27013 = (state_27024[(2)]);var inst_27001 = inst_27004;var state_27024__$1 = (function (){var statearr_27034 = state_27024;(statearr_27034[(10)] = inst_27013);
(statearr_27034[(7)] = inst_27001);
return statearr_27034;
})();var statearr_27035_27055 = state_27024__$1;(statearr_27035_27055[(2)] = null);
(statearr_27035_27055[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27025 === (9)))
{var inst_27004 = (state_27024[(8)]);var state_27024__$1 = state_27024;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27024__$1,(11),out,inst_27004);
} else
{if((state_val_27025 === (5)))
{var inst_27004 = (state_27024[(8)]);var inst_27001 = (state_27024[(7)]);var inst_27008 = cljs.core._EQ_.call(null,inst_27004,inst_27001);var state_27024__$1 = state_27024;if(inst_27008)
{var statearr_27037_27056 = state_27024__$1;(statearr_27037_27056[(1)] = (8));
} else
{var statearr_27038_27057 = state_27024__$1;(statearr_27038_27057[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27025 === (10)))
{var inst_27016 = (state_27024[(2)]);var state_27024__$1 = state_27024;var statearr_27039_27058 = state_27024__$1;(statearr_27039_27058[(2)] = inst_27016);
(statearr_27039_27058[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27025 === (8)))
{var inst_27001 = (state_27024[(7)]);var tmp27036 = inst_27001;var inst_27001__$1 = tmp27036;var state_27024__$1 = (function (){var statearr_27040 = state_27024;(statearr_27040[(7)] = inst_27001__$1);
return statearr_27040;
})();var statearr_27041_27059 = state_27024__$1;(statearr_27041_27059[(2)] = null);
(statearr_27041_27059[(1)] = (2));
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
});})(c__11517__auto___27049,out))
;return ((function (switch__11461__auto__,c__11517__auto___27049,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_27045 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27045[(0)] = state_machine__11462__auto__);
(statearr_27045[(1)] = (1));
return statearr_27045;
});
var state_machine__11462__auto____1 = (function (state_27024){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_27024);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e27046){if((e27046 instanceof Object))
{var ex__11465__auto__ = e27046;var statearr_27047_27060 = state_27024;(statearr_27047_27060[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27024);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27046;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27061 = state_27024;
state_27024 = G__27061;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_27024){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_27024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___27049,out))
})();var state__11519__auto__ = (function (){var statearr_27048 = f__11518__auto__.call(null);(statearr_27048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___27049);
return statearr_27048;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___27049,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___27196 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___27196,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___27196,out){
return (function (state_27166){var state_val_27167 = (state_27166[(1)]);if((state_val_27167 === (7)))
{var inst_27162 = (state_27166[(2)]);var state_27166__$1 = state_27166;var statearr_27168_27197 = state_27166__$1;(statearr_27168_27197[(2)] = inst_27162);
(statearr_27168_27197[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27167 === (1)))
{var inst_27129 = (new Array(n));var inst_27130 = inst_27129;var inst_27131 = (0);var state_27166__$1 = (function (){var statearr_27169 = state_27166;(statearr_27169[(7)] = inst_27130);
(statearr_27169[(8)] = inst_27131);
return statearr_27169;
})();var statearr_27170_27198 = state_27166__$1;(statearr_27170_27198[(2)] = null);
(statearr_27170_27198[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27167 === (4)))
{var inst_27134 = (state_27166[(9)]);var inst_27134__$1 = (state_27166[(2)]);var inst_27135 = (inst_27134__$1 == null);var inst_27136 = cljs.core.not.call(null,inst_27135);var state_27166__$1 = (function (){var statearr_27171 = state_27166;(statearr_27171[(9)] = inst_27134__$1);
return statearr_27171;
})();if(inst_27136)
{var statearr_27172_27199 = state_27166__$1;(statearr_27172_27199[(1)] = (5));
} else
{var statearr_27173_27200 = state_27166__$1;(statearr_27173_27200[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27167 === (15)))
{var inst_27156 = (state_27166[(2)]);var state_27166__$1 = state_27166;var statearr_27174_27201 = state_27166__$1;(statearr_27174_27201[(2)] = inst_27156);
(statearr_27174_27201[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27167 === (13)))
{var state_27166__$1 = state_27166;var statearr_27175_27202 = state_27166__$1;(statearr_27175_27202[(2)] = null);
(statearr_27175_27202[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27167 === (6)))
{var inst_27131 = (state_27166[(8)]);var inst_27152 = (inst_27131 > (0));var state_27166__$1 = state_27166;if(cljs.core.truth_(inst_27152))
{var statearr_27176_27203 = state_27166__$1;(statearr_27176_27203[(1)] = (12));
} else
{var statearr_27177_27204 = state_27166__$1;(statearr_27177_27204[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27167 === (3)))
{var inst_27164 = (state_27166[(2)]);var state_27166__$1 = state_27166;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27166__$1,inst_27164);
} else
{if((state_val_27167 === (12)))
{var inst_27130 = (state_27166[(7)]);var inst_27154 = cljs.core.vec.call(null,inst_27130);var state_27166__$1 = state_27166;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27166__$1,(15),out,inst_27154);
} else
{if((state_val_27167 === (2)))
{var state_27166__$1 = state_27166;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27166__$1,(4),ch);
} else
{if((state_val_27167 === (11)))
{var inst_27146 = (state_27166[(2)]);var inst_27147 = (new Array(n));var inst_27130 = inst_27147;var inst_27131 = (0);var state_27166__$1 = (function (){var statearr_27178 = state_27166;(statearr_27178[(10)] = inst_27146);
(statearr_27178[(7)] = inst_27130);
(statearr_27178[(8)] = inst_27131);
return statearr_27178;
})();var statearr_27179_27205 = state_27166__$1;(statearr_27179_27205[(2)] = null);
(statearr_27179_27205[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27167 === (9)))
{var inst_27130 = (state_27166[(7)]);var inst_27144 = cljs.core.vec.call(null,inst_27130);var state_27166__$1 = state_27166;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27166__$1,(11),out,inst_27144);
} else
{if((state_val_27167 === (5)))
{var inst_27130 = (state_27166[(7)]);var inst_27139 = (state_27166[(11)]);var inst_27131 = (state_27166[(8)]);var inst_27134 = (state_27166[(9)]);var inst_27138 = (inst_27130[inst_27131] = inst_27134);var inst_27139__$1 = (inst_27131 + (1));var inst_27140 = (inst_27139__$1 < n);var state_27166__$1 = (function (){var statearr_27180 = state_27166;(statearr_27180[(11)] = inst_27139__$1);
(statearr_27180[(12)] = inst_27138);
return statearr_27180;
})();if(cljs.core.truth_(inst_27140))
{var statearr_27181_27206 = state_27166__$1;(statearr_27181_27206[(1)] = (8));
} else
{var statearr_27182_27207 = state_27166__$1;(statearr_27182_27207[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27167 === (14)))
{var inst_27159 = (state_27166[(2)]);var inst_27160 = cljs.core.async.close_BANG_.call(null,out);var state_27166__$1 = (function (){var statearr_27184 = state_27166;(statearr_27184[(13)] = inst_27159);
return statearr_27184;
})();var statearr_27185_27208 = state_27166__$1;(statearr_27185_27208[(2)] = inst_27160);
(statearr_27185_27208[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27167 === (10)))
{var inst_27150 = (state_27166[(2)]);var state_27166__$1 = state_27166;var statearr_27186_27209 = state_27166__$1;(statearr_27186_27209[(2)] = inst_27150);
(statearr_27186_27209[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27167 === (8)))
{var inst_27130 = (state_27166[(7)]);var inst_27139 = (state_27166[(11)]);var tmp27183 = inst_27130;var inst_27130__$1 = tmp27183;var inst_27131 = inst_27139;var state_27166__$1 = (function (){var statearr_27187 = state_27166;(statearr_27187[(7)] = inst_27130__$1);
(statearr_27187[(8)] = inst_27131);
return statearr_27187;
})();var statearr_27188_27210 = state_27166__$1;(statearr_27188_27210[(2)] = null);
(statearr_27188_27210[(1)] = (2));
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
});})(c__11517__auto___27196,out))
;return ((function (switch__11461__auto__,c__11517__auto___27196,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_27192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27192[(0)] = state_machine__11462__auto__);
(statearr_27192[(1)] = (1));
return statearr_27192;
});
var state_machine__11462__auto____1 = (function (state_27166){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_27166);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e27193){if((e27193 instanceof Object))
{var ex__11465__auto__ = e27193;var statearr_27194_27211 = state_27166;(statearr_27194_27211[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27166);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27193;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27212 = state_27166;
state_27166 = G__27212;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_27166){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_27166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___27196,out))
})();var state__11519__auto__ = (function (){var statearr_27195 = f__11518__auto__.call(null);(statearr_27195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___27196);
return statearr_27195;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___27196,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___27355 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___27355,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___27355,out){
return (function (state_27325){var state_val_27326 = (state_27325[(1)]);if((state_val_27326 === (7)))
{var inst_27321 = (state_27325[(2)]);var state_27325__$1 = state_27325;var statearr_27327_27356 = state_27325__$1;(statearr_27327_27356[(2)] = inst_27321);
(statearr_27327_27356[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27326 === (1)))
{var inst_27284 = [];var inst_27285 = inst_27284;var inst_27286 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_27325__$1 = (function (){var statearr_27328 = state_27325;(statearr_27328[(7)] = inst_27285);
(statearr_27328[(8)] = inst_27286);
return statearr_27328;
})();var statearr_27329_27357 = state_27325__$1;(statearr_27329_27357[(2)] = null);
(statearr_27329_27357[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27326 === (4)))
{var inst_27289 = (state_27325[(9)]);var inst_27289__$1 = (state_27325[(2)]);var inst_27290 = (inst_27289__$1 == null);var inst_27291 = cljs.core.not.call(null,inst_27290);var state_27325__$1 = (function (){var statearr_27330 = state_27325;(statearr_27330[(9)] = inst_27289__$1);
return statearr_27330;
})();if(inst_27291)
{var statearr_27331_27358 = state_27325__$1;(statearr_27331_27358[(1)] = (5));
} else
{var statearr_27332_27359 = state_27325__$1;(statearr_27332_27359[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27326 === (15)))
{var inst_27315 = (state_27325[(2)]);var state_27325__$1 = state_27325;var statearr_27333_27360 = state_27325__$1;(statearr_27333_27360[(2)] = inst_27315);
(statearr_27333_27360[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27326 === (13)))
{var state_27325__$1 = state_27325;var statearr_27334_27361 = state_27325__$1;(statearr_27334_27361[(2)] = null);
(statearr_27334_27361[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27326 === (6)))
{var inst_27285 = (state_27325[(7)]);var inst_27310 = inst_27285.length;var inst_27311 = (inst_27310 > (0));var state_27325__$1 = state_27325;if(cljs.core.truth_(inst_27311))
{var statearr_27335_27362 = state_27325__$1;(statearr_27335_27362[(1)] = (12));
} else
{var statearr_27336_27363 = state_27325__$1;(statearr_27336_27363[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27326 === (3)))
{var inst_27323 = (state_27325[(2)]);var state_27325__$1 = state_27325;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27325__$1,inst_27323);
} else
{if((state_val_27326 === (12)))
{var inst_27285 = (state_27325[(7)]);var inst_27313 = cljs.core.vec.call(null,inst_27285);var state_27325__$1 = state_27325;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27325__$1,(15),out,inst_27313);
} else
{if((state_val_27326 === (2)))
{var state_27325__$1 = state_27325;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27325__$1,(4),ch);
} else
{if((state_val_27326 === (11)))
{var inst_27293 = (state_27325[(10)]);var inst_27289 = (state_27325[(9)]);var inst_27303 = (state_27325[(2)]);var inst_27304 = [];var inst_27305 = inst_27304.push(inst_27289);var inst_27285 = inst_27304;var inst_27286 = inst_27293;var state_27325__$1 = (function (){var statearr_27337 = state_27325;(statearr_27337[(7)] = inst_27285);
(statearr_27337[(8)] = inst_27286);
(statearr_27337[(11)] = inst_27303);
(statearr_27337[(12)] = inst_27305);
return statearr_27337;
})();var statearr_27338_27364 = state_27325__$1;(statearr_27338_27364[(2)] = null);
(statearr_27338_27364[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27326 === (9)))
{var inst_27285 = (state_27325[(7)]);var inst_27301 = cljs.core.vec.call(null,inst_27285);var state_27325__$1 = state_27325;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27325__$1,(11),out,inst_27301);
} else
{if((state_val_27326 === (5)))
{var inst_27293 = (state_27325[(10)]);var inst_27286 = (state_27325[(8)]);var inst_27289 = (state_27325[(9)]);var inst_27293__$1 = f.call(null,inst_27289);var inst_27294 = cljs.core._EQ_.call(null,inst_27293__$1,inst_27286);var inst_27295 = cljs.core.keyword_identical_QMARK_.call(null,inst_27286,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_27296 = (inst_27294) || (inst_27295);var state_27325__$1 = (function (){var statearr_27339 = state_27325;(statearr_27339[(10)] = inst_27293__$1);
return statearr_27339;
})();if(cljs.core.truth_(inst_27296))
{var statearr_27340_27365 = state_27325__$1;(statearr_27340_27365[(1)] = (8));
} else
{var statearr_27341_27366 = state_27325__$1;(statearr_27341_27366[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27326 === (14)))
{var inst_27318 = (state_27325[(2)]);var inst_27319 = cljs.core.async.close_BANG_.call(null,out);var state_27325__$1 = (function (){var statearr_27343 = state_27325;(statearr_27343[(13)] = inst_27318);
return statearr_27343;
})();var statearr_27344_27367 = state_27325__$1;(statearr_27344_27367[(2)] = inst_27319);
(statearr_27344_27367[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27326 === (10)))
{var inst_27308 = (state_27325[(2)]);var state_27325__$1 = state_27325;var statearr_27345_27368 = state_27325__$1;(statearr_27345_27368[(2)] = inst_27308);
(statearr_27345_27368[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27326 === (8)))
{var inst_27285 = (state_27325[(7)]);var inst_27293 = (state_27325[(10)]);var inst_27289 = (state_27325[(9)]);var inst_27298 = inst_27285.push(inst_27289);var tmp27342 = inst_27285;var inst_27285__$1 = tmp27342;var inst_27286 = inst_27293;var state_27325__$1 = (function (){var statearr_27346 = state_27325;(statearr_27346[(14)] = inst_27298);
(statearr_27346[(7)] = inst_27285__$1);
(statearr_27346[(8)] = inst_27286);
return statearr_27346;
})();var statearr_27347_27369 = state_27325__$1;(statearr_27347_27369[(2)] = null);
(statearr_27347_27369[(1)] = (2));
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
});})(c__11517__auto___27355,out))
;return ((function (switch__11461__auto__,c__11517__auto___27355,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_27351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27351[(0)] = state_machine__11462__auto__);
(statearr_27351[(1)] = (1));
return statearr_27351;
});
var state_machine__11462__auto____1 = (function (state_27325){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_27325);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e27352){if((e27352 instanceof Object))
{var ex__11465__auto__ = e27352;var statearr_27353_27370 = state_27325;(statearr_27353_27370[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27325);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27352;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27371 = state_27325;
state_27325 = G__27371;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_27325){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_27325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___27355,out))
})();var state__11519__auto__ = (function (){var statearr_27354 = f__11518__auto__.call(null);(statearr_27354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___27355);
return statearr_27354;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___27355,out))
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
