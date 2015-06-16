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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23337 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23337 = (function (f,fn_handler,meta23338){
this.f = f;
this.fn_handler = fn_handler;
this.meta23338 = meta23338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23337.cljs$lang$type = true;
cljs.core.async.t23337.cljs$lang$ctorStr = "cljs.core.async/t23337";
cljs.core.async.t23337.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23337");
});
cljs.core.async.t23337.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23337.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23337.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23339){var self__ = this;
var _23339__$1 = this;return self__.meta23338;
});
cljs.core.async.t23337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23339,meta23338__$1){var self__ = this;
var _23339__$1 = this;return (new cljs.core.async.t23337(self__.f,self__.fn_handler,meta23338__$1));
});
cljs.core.async.__GT_t23337 = (function __GT_t23337(f__$1,fn_handler__$1,meta23338){return (new cljs.core.async.t23337(f__$1,fn_handler__$1,meta23338));
});
}
return (new cljs.core.async.t23337(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23341 = buff;if(G__23341)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__23341.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23341.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23341);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23341);
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
{var val_23342 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23342);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_23342,ret){
return (function (){return fn1.call(null,val_23342);
});})(val_23342,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___23343 = n;var x_23344 = (0);while(true){
if((x_23344 < n__4508__auto___23343))
{(a[x_23344] = (0));
{
var G__23345 = (x_23344 + (1));
x_23344 = G__23345;
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
var G__23346 = (i + (1));
i = G__23346;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23350 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23350 = (function (flag,alt_flag,meta23351){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23351 = meta23351;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23350.cljs$lang$type = true;
cljs.core.async.t23350.cljs$lang$ctorStr = "cljs.core.async/t23350";
cljs.core.async.t23350.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23350");
});})(flag))
;
cljs.core.async.t23350.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23350.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t23350.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t23350.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23352){var self__ = this;
var _23352__$1 = this;return self__.meta23351;
});})(flag))
;
cljs.core.async.t23350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23352,meta23351__$1){var self__ = this;
var _23352__$1 = this;return (new cljs.core.async.t23350(self__.flag,self__.alt_flag,meta23351__$1));
});})(flag))
;
cljs.core.async.__GT_t23350 = ((function (flag){
return (function __GT_t23350(flag__$1,alt_flag__$1,meta23351){return (new cljs.core.async.t23350(flag__$1,alt_flag__$1,meta23351));
});})(flag))
;
}
return (new cljs.core.async.t23350(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23356 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23356 = (function (cb,flag,alt_handler,meta23357){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23357 = meta23357;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23356.cljs$lang$type = true;
cljs.core.async.t23356.cljs$lang$ctorStr = "cljs.core.async/t23356";
cljs.core.async.t23356.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23356");
});
cljs.core.async.t23356.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23356.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23356.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23358){var self__ = this;
var _23358__$1 = this;return self__.meta23357;
});
cljs.core.async.t23356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23358,meta23357__$1){var self__ = this;
var _23358__$1 = this;return (new cljs.core.async.t23356(self__.cb,self__.flag,self__.alt_handler,meta23357__$1));
});
cljs.core.async.__GT_t23356 = (function __GT_t23356(cb__$1,flag__$1,alt_handler__$1,meta23357){return (new cljs.core.async.t23356(cb__$1,flag__$1,alt_handler__$1,meta23357));
});
}
return (new cljs.core.async.t23356(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23359_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23359_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23360_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23360_SHARP_,port], null));
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
var G__23361 = (i + (1));
i = G__23361;
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
var alts_BANG___delegate = function (ports,p__23362){var map__23364 = p__23362;var map__23364__$1 = ((cljs.core.seq_QMARK_.call(null,map__23364))?cljs.core.apply.call(null,cljs.core.hash_map,map__23364):map__23364);var opts = map__23364__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23362 = null;if (arguments.length > 1) {
  p__23362 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23362);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23365){
var ports = cljs.core.first(arglist__23365);
var p__23362 = cljs.core.rest(arglist__23365);
return alts_BANG___delegate(ports,p__23362);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__9125__auto___23460 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23460){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23460){
return (function (state_23436){var state_val_23437 = (state_23436[(1)]);if((state_val_23437 === (7)))
{var inst_23432 = (state_23436[(2)]);var state_23436__$1 = state_23436;var statearr_23438_23461 = state_23436__$1;(statearr_23438_23461[(2)] = inst_23432);
(statearr_23438_23461[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23437 === (1)))
{var state_23436__$1 = state_23436;var statearr_23439_23462 = state_23436__$1;(statearr_23439_23462[(2)] = null);
(statearr_23439_23462[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23437 === (4)))
{var inst_23415 = (state_23436[(7)]);var inst_23415__$1 = (state_23436[(2)]);var inst_23416 = (inst_23415__$1 == null);var state_23436__$1 = (function (){var statearr_23440 = state_23436;(statearr_23440[(7)] = inst_23415__$1);
return statearr_23440;
})();if(cljs.core.truth_(inst_23416))
{var statearr_23441_23463 = state_23436__$1;(statearr_23441_23463[(1)] = (5));
} else
{var statearr_23442_23464 = state_23436__$1;(statearr_23442_23464[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23437 === (13)))
{var state_23436__$1 = state_23436;var statearr_23443_23465 = state_23436__$1;(statearr_23443_23465[(2)] = null);
(statearr_23443_23465[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23437 === (6)))
{var inst_23415 = (state_23436[(7)]);var state_23436__$1 = state_23436;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23436__$1,(11),to,inst_23415);
} else
{if((state_val_23437 === (3)))
{var inst_23434 = (state_23436[(2)]);var state_23436__$1 = state_23436;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23436__$1,inst_23434);
} else
{if((state_val_23437 === (12)))
{var state_23436__$1 = state_23436;var statearr_23444_23466 = state_23436__$1;(statearr_23444_23466[(2)] = null);
(statearr_23444_23466[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23437 === (2)))
{var state_23436__$1 = state_23436;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23436__$1,(4),from);
} else
{if((state_val_23437 === (11)))
{var inst_23425 = (state_23436[(2)]);var state_23436__$1 = state_23436;if(cljs.core.truth_(inst_23425))
{var statearr_23445_23467 = state_23436__$1;(statearr_23445_23467[(1)] = (12));
} else
{var statearr_23446_23468 = state_23436__$1;(statearr_23446_23468[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23437 === (9)))
{var state_23436__$1 = state_23436;var statearr_23447_23469 = state_23436__$1;(statearr_23447_23469[(2)] = null);
(statearr_23447_23469[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23437 === (5)))
{var state_23436__$1 = state_23436;if(cljs.core.truth_(close_QMARK_))
{var statearr_23448_23470 = state_23436__$1;(statearr_23448_23470[(1)] = (8));
} else
{var statearr_23449_23471 = state_23436__$1;(statearr_23449_23471[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23437 === (14)))
{var inst_23430 = (state_23436[(2)]);var state_23436__$1 = state_23436;var statearr_23450_23472 = state_23436__$1;(statearr_23450_23472[(2)] = inst_23430);
(statearr_23450_23472[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23437 === (10)))
{var inst_23422 = (state_23436[(2)]);var state_23436__$1 = state_23436;var statearr_23451_23473 = state_23436__$1;(statearr_23451_23473[(2)] = inst_23422);
(statearr_23451_23473[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23437 === (8)))
{var inst_23419 = cljs.core.async.close_BANG_.call(null,to);var state_23436__$1 = state_23436;var statearr_23452_23474 = state_23436__$1;(statearr_23452_23474[(2)] = inst_23419);
(statearr_23452_23474[(1)] = (10));
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
});})(c__9125__auto___23460))
;return ((function (switch__9110__auto__,c__9125__auto___23460){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23456 = [null,null,null,null,null,null,null,null];(statearr_23456[(0)] = state_machine__9111__auto__);
(statearr_23456[(1)] = (1));
return statearr_23456;
});
var state_machine__9111__auto____1 = (function (state_23436){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23436);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23457){if((e23457 instanceof Object))
{var ex__9114__auto__ = e23457;var statearr_23458_23475 = state_23436;(statearr_23458_23475[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23436);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23457;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23476 = state_23436;
state_23436 = G__23476;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23436){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23460))
})();var state__9127__auto__ = (function (){var statearr_23459 = f__9126__auto__.call(null);(statearr_23459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23460);
return statearr_23459;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23460))
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
return (function (p__23660){var vec__23661 = p__23660;var v = cljs.core.nth.call(null,vec__23661,(0),null);var p = cljs.core.nth.call(null,vec__23661,(1),null);var job = vec__23661;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__9125__auto___23843 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23843,res,vec__23661,v,p,job,jobs,results){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23843,res,vec__23661,v,p,job,jobs,results){
return (function (state_23666){var state_val_23667 = (state_23666[(1)]);if((state_val_23667 === (2)))
{var inst_23663 = (state_23666[(2)]);var inst_23664 = cljs.core.async.close_BANG_.call(null,res);var state_23666__$1 = (function (){var statearr_23668 = state_23666;(statearr_23668[(7)] = inst_23663);
return statearr_23668;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23666__$1,inst_23664);
} else
{if((state_val_23667 === (1)))
{var state_23666__$1 = state_23666;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23666__$1,(2),res,v);
} else
{return null;
}
}
});})(c__9125__auto___23843,res,vec__23661,v,p,job,jobs,results))
;return ((function (switch__9110__auto__,c__9125__auto___23843,res,vec__23661,v,p,job,jobs,results){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23672 = [null,null,null,null,null,null,null,null];(statearr_23672[(0)] = state_machine__9111__auto__);
(statearr_23672[(1)] = (1));
return statearr_23672;
});
var state_machine__9111__auto____1 = (function (state_23666){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23666);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23673){if((e23673 instanceof Object))
{var ex__9114__auto__ = e23673;var statearr_23674_23844 = state_23666;(statearr_23674_23844[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23666);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23673;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23845 = state_23666;
state_23666 = G__23845;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23666){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23843,res,vec__23661,v,p,job,jobs,results))
})();var state__9127__auto__ = (function (){var statearr_23675 = f__9126__auto__.call(null);(statearr_23675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23843);
return statearr_23675;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23843,res,vec__23661,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__23676){var vec__23677 = p__23676;var v = cljs.core.nth.call(null,vec__23677,(0),null);var p = cljs.core.nth.call(null,vec__23677,(1),null);var job = vec__23677;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___23846 = n;var __23847 = (0);while(true){
if((__23847 < n__4508__auto___23846))
{var G__23678_23848 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__23678_23848) {
case "async":
var c__9125__auto___23850 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23847,c__9125__auto___23850,G__23678_23848,n__4508__auto___23846,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__23847,c__9125__auto___23850,G__23678_23848,n__4508__auto___23846,jobs,results,process,async){
return (function (state_23691){var state_val_23692 = (state_23691[(1)]);if((state_val_23692 === (7)))
{var inst_23687 = (state_23691[(2)]);var state_23691__$1 = state_23691;var statearr_23693_23851 = state_23691__$1;(statearr_23693_23851[(2)] = inst_23687);
(statearr_23693_23851[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23692 === (6)))
{var state_23691__$1 = state_23691;var statearr_23694_23852 = state_23691__$1;(statearr_23694_23852[(2)] = null);
(statearr_23694_23852[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23692 === (5)))
{var state_23691__$1 = state_23691;var statearr_23695_23853 = state_23691__$1;(statearr_23695_23853[(2)] = null);
(statearr_23695_23853[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23692 === (4)))
{var inst_23681 = (state_23691[(2)]);var inst_23682 = async.call(null,inst_23681);var state_23691__$1 = state_23691;if(cljs.core.truth_(inst_23682))
{var statearr_23696_23854 = state_23691__$1;(statearr_23696_23854[(1)] = (5));
} else
{var statearr_23697_23855 = state_23691__$1;(statearr_23697_23855[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23692 === (3)))
{var inst_23689 = (state_23691[(2)]);var state_23691__$1 = state_23691;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23691__$1,inst_23689);
} else
{if((state_val_23692 === (2)))
{var state_23691__$1 = state_23691;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23691__$1,(4),jobs);
} else
{if((state_val_23692 === (1)))
{var state_23691__$1 = state_23691;var statearr_23698_23856 = state_23691__$1;(statearr_23698_23856[(2)] = null);
(statearr_23698_23856[(1)] = (2));
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
});})(__23847,c__9125__auto___23850,G__23678_23848,n__4508__auto___23846,jobs,results,process,async))
;return ((function (__23847,switch__9110__auto__,c__9125__auto___23850,G__23678_23848,n__4508__auto___23846,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23702 = [null,null,null,null,null,null,null];(statearr_23702[(0)] = state_machine__9111__auto__);
(statearr_23702[(1)] = (1));
return statearr_23702;
});
var state_machine__9111__auto____1 = (function (state_23691){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23691);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23703){if((e23703 instanceof Object))
{var ex__9114__auto__ = e23703;var statearr_23704_23857 = state_23691;(statearr_23704_23857[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23691);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23703;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23858 = state_23691;
state_23691 = G__23858;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23691){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__23847,switch__9110__auto__,c__9125__auto___23850,G__23678_23848,n__4508__auto___23846,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23705 = f__9126__auto__.call(null);(statearr_23705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23850);
return statearr_23705;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__23847,c__9125__auto___23850,G__23678_23848,n__4508__auto___23846,jobs,results,process,async))
);

break;
case "compute":
var c__9125__auto___23859 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23847,c__9125__auto___23859,G__23678_23848,n__4508__auto___23846,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__23847,c__9125__auto___23859,G__23678_23848,n__4508__auto___23846,jobs,results,process,async){
return (function (state_23718){var state_val_23719 = (state_23718[(1)]);if((state_val_23719 === (7)))
{var inst_23714 = (state_23718[(2)]);var state_23718__$1 = state_23718;var statearr_23720_23860 = state_23718__$1;(statearr_23720_23860[(2)] = inst_23714);
(statearr_23720_23860[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23719 === (6)))
{var state_23718__$1 = state_23718;var statearr_23721_23861 = state_23718__$1;(statearr_23721_23861[(2)] = null);
(statearr_23721_23861[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23719 === (5)))
{var state_23718__$1 = state_23718;var statearr_23722_23862 = state_23718__$1;(statearr_23722_23862[(2)] = null);
(statearr_23722_23862[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23719 === (4)))
{var inst_23708 = (state_23718[(2)]);var inst_23709 = process.call(null,inst_23708);var state_23718__$1 = state_23718;if(cljs.core.truth_(inst_23709))
{var statearr_23723_23863 = state_23718__$1;(statearr_23723_23863[(1)] = (5));
} else
{var statearr_23724_23864 = state_23718__$1;(statearr_23724_23864[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23719 === (3)))
{var inst_23716 = (state_23718[(2)]);var state_23718__$1 = state_23718;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23718__$1,inst_23716);
} else
{if((state_val_23719 === (2)))
{var state_23718__$1 = state_23718;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23718__$1,(4),jobs);
} else
{if((state_val_23719 === (1)))
{var state_23718__$1 = state_23718;var statearr_23725_23865 = state_23718__$1;(statearr_23725_23865[(2)] = null);
(statearr_23725_23865[(1)] = (2));
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
});})(__23847,c__9125__auto___23859,G__23678_23848,n__4508__auto___23846,jobs,results,process,async))
;return ((function (__23847,switch__9110__auto__,c__9125__auto___23859,G__23678_23848,n__4508__auto___23846,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23729 = [null,null,null,null,null,null,null];(statearr_23729[(0)] = state_machine__9111__auto__);
(statearr_23729[(1)] = (1));
return statearr_23729;
});
var state_machine__9111__auto____1 = (function (state_23718){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23718);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23730){if((e23730 instanceof Object))
{var ex__9114__auto__ = e23730;var statearr_23731_23866 = state_23718;(statearr_23731_23866[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23718);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23730;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23867 = state_23718;
state_23718 = G__23867;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23718){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__23847,switch__9110__auto__,c__9125__auto___23859,G__23678_23848,n__4508__auto___23846,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23732 = f__9126__auto__.call(null);(statearr_23732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23859);
return statearr_23732;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__23847,c__9125__auto___23859,G__23678_23848,n__4508__auto___23846,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__23868 = (__23847 + (1));
__23847 = G__23868;
continue;
}
} else
{}
break;
}
var c__9125__auto___23869 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23869,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23869,jobs,results,process,async){
return (function (state_23754){var state_val_23755 = (state_23754[(1)]);if((state_val_23755 === (9)))
{var inst_23747 = (state_23754[(2)]);var state_23754__$1 = (function (){var statearr_23756 = state_23754;(statearr_23756[(7)] = inst_23747);
return statearr_23756;
})();var statearr_23757_23870 = state_23754__$1;(statearr_23757_23870[(2)] = null);
(statearr_23757_23870[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23755 === (8)))
{var inst_23740 = (state_23754[(8)]);var inst_23745 = (state_23754[(2)]);var state_23754__$1 = (function (){var statearr_23758 = state_23754;(statearr_23758[(9)] = inst_23745);
return statearr_23758;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23754__$1,(9),results,inst_23740);
} else
{if((state_val_23755 === (7)))
{var inst_23750 = (state_23754[(2)]);var state_23754__$1 = state_23754;var statearr_23759_23871 = state_23754__$1;(statearr_23759_23871[(2)] = inst_23750);
(statearr_23759_23871[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23755 === (6)))
{var inst_23735 = (state_23754[(10)]);var inst_23740 = (state_23754[(8)]);var inst_23740__$1 = cljs.core.async.chan.call(null,(1));var inst_23741 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23742 = [inst_23735,inst_23740__$1];var inst_23743 = (new cljs.core.PersistentVector(null,2,(5),inst_23741,inst_23742,null));var state_23754__$1 = (function (){var statearr_23760 = state_23754;(statearr_23760[(8)] = inst_23740__$1);
return statearr_23760;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23754__$1,(8),jobs,inst_23743);
} else
{if((state_val_23755 === (5)))
{var inst_23738 = cljs.core.async.close_BANG_.call(null,jobs);var state_23754__$1 = state_23754;var statearr_23761_23872 = state_23754__$1;(statearr_23761_23872[(2)] = inst_23738);
(statearr_23761_23872[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23755 === (4)))
{var inst_23735 = (state_23754[(10)]);var inst_23735__$1 = (state_23754[(2)]);var inst_23736 = (inst_23735__$1 == null);var state_23754__$1 = (function (){var statearr_23762 = state_23754;(statearr_23762[(10)] = inst_23735__$1);
return statearr_23762;
})();if(cljs.core.truth_(inst_23736))
{var statearr_23763_23873 = state_23754__$1;(statearr_23763_23873[(1)] = (5));
} else
{var statearr_23764_23874 = state_23754__$1;(statearr_23764_23874[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23755 === (3)))
{var inst_23752 = (state_23754[(2)]);var state_23754__$1 = state_23754;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23754__$1,inst_23752);
} else
{if((state_val_23755 === (2)))
{var state_23754__$1 = state_23754;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23754__$1,(4),from);
} else
{if((state_val_23755 === (1)))
{var state_23754__$1 = state_23754;var statearr_23765_23875 = state_23754__$1;(statearr_23765_23875[(2)] = null);
(statearr_23765_23875[(1)] = (2));
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
});})(c__9125__auto___23869,jobs,results,process,async))
;return ((function (switch__9110__auto__,c__9125__auto___23869,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23769 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23769[(0)] = state_machine__9111__auto__);
(statearr_23769[(1)] = (1));
return statearr_23769;
});
var state_machine__9111__auto____1 = (function (state_23754){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23754);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23770){if((e23770 instanceof Object))
{var ex__9114__auto__ = e23770;var statearr_23771_23876 = state_23754;(statearr_23771_23876[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23754);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23770;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23877 = state_23754;
state_23754 = G__23877;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23754){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23869,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23772 = f__9126__auto__.call(null);(statearr_23772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23869);
return statearr_23772;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23869,jobs,results,process,async))
);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,jobs,results,process,async){
return (function (state_23810){var state_val_23811 = (state_23810[(1)]);if((state_val_23811 === (7)))
{var inst_23806 = (state_23810[(2)]);var state_23810__$1 = state_23810;var statearr_23812_23878 = state_23810__$1;(statearr_23812_23878[(2)] = inst_23806);
(statearr_23812_23878[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23811 === (20)))
{var state_23810__$1 = state_23810;var statearr_23813_23879 = state_23810__$1;(statearr_23813_23879[(2)] = null);
(statearr_23813_23879[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23811 === (1)))
{var state_23810__$1 = state_23810;var statearr_23814_23880 = state_23810__$1;(statearr_23814_23880[(2)] = null);
(statearr_23814_23880[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23811 === (4)))
{var inst_23775 = (state_23810[(7)]);var inst_23775__$1 = (state_23810[(2)]);var inst_23776 = (inst_23775__$1 == null);var state_23810__$1 = (function (){var statearr_23815 = state_23810;(statearr_23815[(7)] = inst_23775__$1);
return statearr_23815;
})();if(cljs.core.truth_(inst_23776))
{var statearr_23816_23881 = state_23810__$1;(statearr_23816_23881[(1)] = (5));
} else
{var statearr_23817_23882 = state_23810__$1;(statearr_23817_23882[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23811 === (15)))
{var inst_23788 = (state_23810[(8)]);var state_23810__$1 = state_23810;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23810__$1,(18),to,inst_23788);
} else
{if((state_val_23811 === (21)))
{var inst_23801 = (state_23810[(2)]);var state_23810__$1 = state_23810;var statearr_23818_23883 = state_23810__$1;(statearr_23818_23883[(2)] = inst_23801);
(statearr_23818_23883[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23811 === (13)))
{var inst_23803 = (state_23810[(2)]);var state_23810__$1 = (function (){var statearr_23819 = state_23810;(statearr_23819[(9)] = inst_23803);
return statearr_23819;
})();var statearr_23820_23884 = state_23810__$1;(statearr_23820_23884[(2)] = null);
(statearr_23820_23884[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23811 === (6)))
{var inst_23775 = (state_23810[(7)]);var state_23810__$1 = state_23810;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23810__$1,(11),inst_23775);
} else
{if((state_val_23811 === (17)))
{var inst_23796 = (state_23810[(2)]);var state_23810__$1 = state_23810;if(cljs.core.truth_(inst_23796))
{var statearr_23821_23885 = state_23810__$1;(statearr_23821_23885[(1)] = (19));
} else
{var statearr_23822_23886 = state_23810__$1;(statearr_23822_23886[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23811 === (3)))
{var inst_23808 = (state_23810[(2)]);var state_23810__$1 = state_23810;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23810__$1,inst_23808);
} else
{if((state_val_23811 === (12)))
{var inst_23785 = (state_23810[(10)]);var state_23810__$1 = state_23810;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23810__$1,(14),inst_23785);
} else
{if((state_val_23811 === (2)))
{var state_23810__$1 = state_23810;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23810__$1,(4),results);
} else
{if((state_val_23811 === (19)))
{var state_23810__$1 = state_23810;var statearr_23823_23887 = state_23810__$1;(statearr_23823_23887[(2)] = null);
(statearr_23823_23887[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23811 === (11)))
{var inst_23785 = (state_23810[(2)]);var state_23810__$1 = (function (){var statearr_23824 = state_23810;(statearr_23824[(10)] = inst_23785);
return statearr_23824;
})();var statearr_23825_23888 = state_23810__$1;(statearr_23825_23888[(2)] = null);
(statearr_23825_23888[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23811 === (9)))
{var state_23810__$1 = state_23810;var statearr_23826_23889 = state_23810__$1;(statearr_23826_23889[(2)] = null);
(statearr_23826_23889[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23811 === (5)))
{var state_23810__$1 = state_23810;if(cljs.core.truth_(close_QMARK_))
{var statearr_23827_23890 = state_23810__$1;(statearr_23827_23890[(1)] = (8));
} else
{var statearr_23828_23891 = state_23810__$1;(statearr_23828_23891[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23811 === (14)))
{var inst_23788 = (state_23810[(8)]);var inst_23790 = (state_23810[(11)]);var inst_23788__$1 = (state_23810[(2)]);var inst_23789 = (inst_23788__$1 == null);var inst_23790__$1 = cljs.core.not.call(null,inst_23789);var state_23810__$1 = (function (){var statearr_23829 = state_23810;(statearr_23829[(8)] = inst_23788__$1);
(statearr_23829[(11)] = inst_23790__$1);
return statearr_23829;
})();if(inst_23790__$1)
{var statearr_23830_23892 = state_23810__$1;(statearr_23830_23892[(1)] = (15));
} else
{var statearr_23831_23893 = state_23810__$1;(statearr_23831_23893[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23811 === (16)))
{var inst_23790 = (state_23810[(11)]);var state_23810__$1 = state_23810;var statearr_23832_23894 = state_23810__$1;(statearr_23832_23894[(2)] = inst_23790);
(statearr_23832_23894[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23811 === (10)))
{var inst_23782 = (state_23810[(2)]);var state_23810__$1 = state_23810;var statearr_23833_23895 = state_23810__$1;(statearr_23833_23895[(2)] = inst_23782);
(statearr_23833_23895[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23811 === (18)))
{var inst_23793 = (state_23810[(2)]);var state_23810__$1 = state_23810;var statearr_23834_23896 = state_23810__$1;(statearr_23834_23896[(2)] = inst_23793);
(statearr_23834_23896[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23811 === (8)))
{var inst_23779 = cljs.core.async.close_BANG_.call(null,to);var state_23810__$1 = state_23810;var statearr_23835_23897 = state_23810__$1;(statearr_23835_23897[(2)] = inst_23779);
(statearr_23835_23897[(1)] = (10));
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
var state_machine__9111__auto____0 = (function (){var statearr_23839 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23839[(0)] = state_machine__9111__auto__);
(statearr_23839[(1)] = (1));
return statearr_23839;
});
var state_machine__9111__auto____1 = (function (state_23810){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23810);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23840){if((e23840 instanceof Object))
{var ex__9114__auto__ = e23840;var statearr_23841_23898 = state_23810;(statearr_23841_23898[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23810);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23840;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23899 = state_23810;
state_23810 = G__23899;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23810){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23842 = f__9126__auto__.call(null);(statearr_23842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_23842;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__9125__auto___24000 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24000,tc,fc){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24000,tc,fc){
return (function (state_23975){var state_val_23976 = (state_23975[(1)]);if((state_val_23976 === (7)))
{var inst_23971 = (state_23975[(2)]);var state_23975__$1 = state_23975;var statearr_23977_24001 = state_23975__$1;(statearr_23977_24001[(2)] = inst_23971);
(statearr_23977_24001[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23976 === (1)))
{var state_23975__$1 = state_23975;var statearr_23978_24002 = state_23975__$1;(statearr_23978_24002[(2)] = null);
(statearr_23978_24002[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23976 === (4)))
{var inst_23952 = (state_23975[(7)]);var inst_23952__$1 = (state_23975[(2)]);var inst_23953 = (inst_23952__$1 == null);var state_23975__$1 = (function (){var statearr_23979 = state_23975;(statearr_23979[(7)] = inst_23952__$1);
return statearr_23979;
})();if(cljs.core.truth_(inst_23953))
{var statearr_23980_24003 = state_23975__$1;(statearr_23980_24003[(1)] = (5));
} else
{var statearr_23981_24004 = state_23975__$1;(statearr_23981_24004[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23976 === (13)))
{var state_23975__$1 = state_23975;var statearr_23982_24005 = state_23975__$1;(statearr_23982_24005[(2)] = null);
(statearr_23982_24005[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23976 === (6)))
{var inst_23952 = (state_23975[(7)]);var inst_23958 = p.call(null,inst_23952);var state_23975__$1 = state_23975;if(cljs.core.truth_(inst_23958))
{var statearr_23983_24006 = state_23975__$1;(statearr_23983_24006[(1)] = (9));
} else
{var statearr_23984_24007 = state_23975__$1;(statearr_23984_24007[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23976 === (3)))
{var inst_23973 = (state_23975[(2)]);var state_23975__$1 = state_23975;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23975__$1,inst_23973);
} else
{if((state_val_23976 === (12)))
{var state_23975__$1 = state_23975;var statearr_23985_24008 = state_23975__$1;(statearr_23985_24008[(2)] = null);
(statearr_23985_24008[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23976 === (2)))
{var state_23975__$1 = state_23975;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23975__$1,(4),ch);
} else
{if((state_val_23976 === (11)))
{var inst_23952 = (state_23975[(7)]);var inst_23962 = (state_23975[(2)]);var state_23975__$1 = state_23975;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23975__$1,(8),inst_23962,inst_23952);
} else
{if((state_val_23976 === (9)))
{var state_23975__$1 = state_23975;var statearr_23986_24009 = state_23975__$1;(statearr_23986_24009[(2)] = tc);
(statearr_23986_24009[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23976 === (5)))
{var inst_23955 = cljs.core.async.close_BANG_.call(null,tc);var inst_23956 = cljs.core.async.close_BANG_.call(null,fc);var state_23975__$1 = (function (){var statearr_23987 = state_23975;(statearr_23987[(8)] = inst_23955);
return statearr_23987;
})();var statearr_23988_24010 = state_23975__$1;(statearr_23988_24010[(2)] = inst_23956);
(statearr_23988_24010[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23976 === (14)))
{var inst_23969 = (state_23975[(2)]);var state_23975__$1 = state_23975;var statearr_23989_24011 = state_23975__$1;(statearr_23989_24011[(2)] = inst_23969);
(statearr_23989_24011[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23976 === (10)))
{var state_23975__$1 = state_23975;var statearr_23990_24012 = state_23975__$1;(statearr_23990_24012[(2)] = fc);
(statearr_23990_24012[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23976 === (8)))
{var inst_23964 = (state_23975[(2)]);var state_23975__$1 = state_23975;if(cljs.core.truth_(inst_23964))
{var statearr_23991_24013 = state_23975__$1;(statearr_23991_24013[(1)] = (12));
} else
{var statearr_23992_24014 = state_23975__$1;(statearr_23992_24014[(1)] = (13));
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
});})(c__9125__auto___24000,tc,fc))
;return ((function (switch__9110__auto__,c__9125__auto___24000,tc,fc){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23996 = [null,null,null,null,null,null,null,null,null];(statearr_23996[(0)] = state_machine__9111__auto__);
(statearr_23996[(1)] = (1));
return statearr_23996;
});
var state_machine__9111__auto____1 = (function (state_23975){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23975);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23997){if((e23997 instanceof Object))
{var ex__9114__auto__ = e23997;var statearr_23998_24015 = state_23975;(statearr_23998_24015[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23975);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23997;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24016 = state_23975;
state_23975 = G__24016;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23975){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24000,tc,fc))
})();var state__9127__auto__ = (function (){var statearr_23999 = f__9126__auto__.call(null);(statearr_23999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24000);
return statearr_23999;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24000,tc,fc))
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
return (function (state_24063){var state_val_24064 = (state_24063[(1)]);if((state_val_24064 === (7)))
{var inst_24059 = (state_24063[(2)]);var state_24063__$1 = state_24063;var statearr_24065_24081 = state_24063__$1;(statearr_24065_24081[(2)] = inst_24059);
(statearr_24065_24081[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24064 === (6)))
{var inst_24052 = (state_24063[(7)]);var inst_24049 = (state_24063[(8)]);var inst_24056 = f.call(null,inst_24049,inst_24052);var inst_24049__$1 = inst_24056;var state_24063__$1 = (function (){var statearr_24066 = state_24063;(statearr_24066[(8)] = inst_24049__$1);
return statearr_24066;
})();var statearr_24067_24082 = state_24063__$1;(statearr_24067_24082[(2)] = null);
(statearr_24067_24082[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24064 === (5)))
{var inst_24049 = (state_24063[(8)]);var state_24063__$1 = state_24063;var statearr_24068_24083 = state_24063__$1;(statearr_24068_24083[(2)] = inst_24049);
(statearr_24068_24083[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24064 === (4)))
{var inst_24052 = (state_24063[(7)]);var inst_24052__$1 = (state_24063[(2)]);var inst_24053 = (inst_24052__$1 == null);var state_24063__$1 = (function (){var statearr_24069 = state_24063;(statearr_24069[(7)] = inst_24052__$1);
return statearr_24069;
})();if(cljs.core.truth_(inst_24053))
{var statearr_24070_24084 = state_24063__$1;(statearr_24070_24084[(1)] = (5));
} else
{var statearr_24071_24085 = state_24063__$1;(statearr_24071_24085[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24064 === (3)))
{var inst_24061 = (state_24063[(2)]);var state_24063__$1 = state_24063;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24063__$1,inst_24061);
} else
{if((state_val_24064 === (2)))
{var state_24063__$1 = state_24063;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24063__$1,(4),ch);
} else
{if((state_val_24064 === (1)))
{var inst_24049 = init;var state_24063__$1 = (function (){var statearr_24072 = state_24063;(statearr_24072[(8)] = inst_24049);
return statearr_24072;
})();var statearr_24073_24086 = state_24063__$1;(statearr_24073_24086[(2)] = null);
(statearr_24073_24086[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_24077 = [null,null,null,null,null,null,null,null,null];(statearr_24077[(0)] = state_machine__9111__auto__);
(statearr_24077[(1)] = (1));
return statearr_24077;
});
var state_machine__9111__auto____1 = (function (state_24063){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24063);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24078){if((e24078 instanceof Object))
{var ex__9114__auto__ = e24078;var statearr_24079_24087 = state_24063;(statearr_24079_24087[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24063);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24078;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24088 = state_24063;
state_24063 = G__24088;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24063){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24080 = f__9126__auto__.call(null);(statearr_24080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24080;
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
return (function (state_24162){var state_val_24163 = (state_24162[(1)]);if((state_val_24163 === (7)))
{var inst_24144 = (state_24162[(2)]);var state_24162__$1 = state_24162;var statearr_24164_24187 = state_24162__$1;(statearr_24164_24187[(2)] = inst_24144);
(statearr_24164_24187[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24163 === (1)))
{var inst_24138 = cljs.core.seq.call(null,coll);var inst_24139 = inst_24138;var state_24162__$1 = (function (){var statearr_24165 = state_24162;(statearr_24165[(7)] = inst_24139);
return statearr_24165;
})();var statearr_24166_24188 = state_24162__$1;(statearr_24166_24188[(2)] = null);
(statearr_24166_24188[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24163 === (4)))
{var inst_24139 = (state_24162[(7)]);var inst_24142 = cljs.core.first.call(null,inst_24139);var state_24162__$1 = state_24162;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24162__$1,(7),ch,inst_24142);
} else
{if((state_val_24163 === (13)))
{var inst_24156 = (state_24162[(2)]);var state_24162__$1 = state_24162;var statearr_24167_24189 = state_24162__$1;(statearr_24167_24189[(2)] = inst_24156);
(statearr_24167_24189[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24163 === (6)))
{var inst_24147 = (state_24162[(2)]);var state_24162__$1 = state_24162;if(cljs.core.truth_(inst_24147))
{var statearr_24168_24190 = state_24162__$1;(statearr_24168_24190[(1)] = (8));
} else
{var statearr_24169_24191 = state_24162__$1;(statearr_24169_24191[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24163 === (3)))
{var inst_24160 = (state_24162[(2)]);var state_24162__$1 = state_24162;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24162__$1,inst_24160);
} else
{if((state_val_24163 === (12)))
{var state_24162__$1 = state_24162;var statearr_24170_24192 = state_24162__$1;(statearr_24170_24192[(2)] = null);
(statearr_24170_24192[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24163 === (2)))
{var inst_24139 = (state_24162[(7)]);var state_24162__$1 = state_24162;if(cljs.core.truth_(inst_24139))
{var statearr_24171_24193 = state_24162__$1;(statearr_24171_24193[(1)] = (4));
} else
{var statearr_24172_24194 = state_24162__$1;(statearr_24172_24194[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24163 === (11)))
{var inst_24153 = cljs.core.async.close_BANG_.call(null,ch);var state_24162__$1 = state_24162;var statearr_24173_24195 = state_24162__$1;(statearr_24173_24195[(2)] = inst_24153);
(statearr_24173_24195[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24163 === (9)))
{var state_24162__$1 = state_24162;if(cljs.core.truth_(close_QMARK_))
{var statearr_24174_24196 = state_24162__$1;(statearr_24174_24196[(1)] = (11));
} else
{var statearr_24175_24197 = state_24162__$1;(statearr_24175_24197[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24163 === (5)))
{var inst_24139 = (state_24162[(7)]);var state_24162__$1 = state_24162;var statearr_24176_24198 = state_24162__$1;(statearr_24176_24198[(2)] = inst_24139);
(statearr_24176_24198[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24163 === (10)))
{var inst_24158 = (state_24162[(2)]);var state_24162__$1 = state_24162;var statearr_24177_24199 = state_24162__$1;(statearr_24177_24199[(2)] = inst_24158);
(statearr_24177_24199[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24163 === (8)))
{var inst_24139 = (state_24162[(7)]);var inst_24149 = cljs.core.next.call(null,inst_24139);var inst_24139__$1 = inst_24149;var state_24162__$1 = (function (){var statearr_24178 = state_24162;(statearr_24178[(7)] = inst_24139__$1);
return statearr_24178;
})();var statearr_24179_24200 = state_24162__$1;(statearr_24179_24200[(2)] = null);
(statearr_24179_24200[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_24183 = [null,null,null,null,null,null,null,null];(statearr_24183[(0)] = state_machine__9111__auto__);
(statearr_24183[(1)] = (1));
return statearr_24183;
});
var state_machine__9111__auto____1 = (function (state_24162){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24162);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24184){if((e24184 instanceof Object))
{var ex__9114__auto__ = e24184;var statearr_24185_24201 = state_24162;(statearr_24185_24201[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24162);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24184;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24202 = state_24162;
state_24162 = G__24202;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24162){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24186 = f__9126__auto__.call(null);(statearr_24186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24186;
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
cljs.core.async.Mux = (function (){var obj24204 = {};return obj24204;
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
cljs.core.async.Mult = (function (){var obj24206 = {};return obj24206;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24428 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24428 = (function (cs,ch,mult,meta24429){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24429 = meta24429;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24428.cljs$lang$type = true;
cljs.core.async.t24428.cljs$lang$ctorStr = "cljs.core.async/t24428";
cljs.core.async.t24428.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24428");
});})(cs))
;
cljs.core.async.t24428.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24428.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24428.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24428.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24428.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24428.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24428.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24430){var self__ = this;
var _24430__$1 = this;return self__.meta24429;
});})(cs))
;
cljs.core.async.t24428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24430,meta24429__$1){var self__ = this;
var _24430__$1 = this;return (new cljs.core.async.t24428(self__.cs,self__.ch,self__.mult,meta24429__$1));
});})(cs))
;
cljs.core.async.__GT_t24428 = ((function (cs){
return (function __GT_t24428(cs__$1,ch__$1,mult__$1,meta24429){return (new cljs.core.async.t24428(cs__$1,ch__$1,mult__$1,meta24429));
});})(cs))
;
}
return (new cljs.core.async.t24428(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__9125__auto___24649 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24649,cs,m,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24649,cs,m,dchan,dctr,done){
return (function (state_24561){var state_val_24562 = (state_24561[(1)]);if((state_val_24562 === (7)))
{var inst_24557 = (state_24561[(2)]);var state_24561__$1 = state_24561;var statearr_24563_24650 = state_24561__$1;(statearr_24563_24650[(2)] = inst_24557);
(statearr_24563_24650[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (20)))
{var inst_24462 = (state_24561[(7)]);var inst_24472 = cljs.core.first.call(null,inst_24462);var inst_24473 = cljs.core.nth.call(null,inst_24472,(0),null);var inst_24474 = cljs.core.nth.call(null,inst_24472,(1),null);var state_24561__$1 = (function (){var statearr_24564 = state_24561;(statearr_24564[(8)] = inst_24473);
return statearr_24564;
})();if(cljs.core.truth_(inst_24474))
{var statearr_24565_24651 = state_24561__$1;(statearr_24565_24651[(1)] = (22));
} else
{var statearr_24566_24652 = state_24561__$1;(statearr_24566_24652[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (27)))
{var inst_24509 = (state_24561[(9)]);var inst_24504 = (state_24561[(10)]);var inst_24433 = (state_24561[(11)]);var inst_24502 = (state_24561[(12)]);var inst_24509__$1 = cljs.core._nth.call(null,inst_24502,inst_24504);var inst_24510 = cljs.core.async.put_BANG_.call(null,inst_24509__$1,inst_24433,done);var state_24561__$1 = (function (){var statearr_24567 = state_24561;(statearr_24567[(9)] = inst_24509__$1);
return statearr_24567;
})();if(cljs.core.truth_(inst_24510))
{var statearr_24568_24653 = state_24561__$1;(statearr_24568_24653[(1)] = (30));
} else
{var statearr_24569_24654 = state_24561__$1;(statearr_24569_24654[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (1)))
{var state_24561__$1 = state_24561;var statearr_24570_24655 = state_24561__$1;(statearr_24570_24655[(2)] = null);
(statearr_24570_24655[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (24)))
{var inst_24462 = (state_24561[(7)]);var inst_24479 = (state_24561[(2)]);var inst_24480 = cljs.core.next.call(null,inst_24462);var inst_24442 = inst_24480;var inst_24443 = null;var inst_24444 = (0);var inst_24445 = (0);var state_24561__$1 = (function (){var statearr_24571 = state_24561;(statearr_24571[(13)] = inst_24445);
(statearr_24571[(14)] = inst_24443);
(statearr_24571[(15)] = inst_24444);
(statearr_24571[(16)] = inst_24442);
(statearr_24571[(17)] = inst_24479);
return statearr_24571;
})();var statearr_24572_24656 = state_24561__$1;(statearr_24572_24656[(2)] = null);
(statearr_24572_24656[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (39)))
{var state_24561__$1 = state_24561;var statearr_24576_24657 = state_24561__$1;(statearr_24576_24657[(2)] = null);
(statearr_24576_24657[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (4)))
{var inst_24433 = (state_24561[(11)]);var inst_24433__$1 = (state_24561[(2)]);var inst_24434 = (inst_24433__$1 == null);var state_24561__$1 = (function (){var statearr_24577 = state_24561;(statearr_24577[(11)] = inst_24433__$1);
return statearr_24577;
})();if(cljs.core.truth_(inst_24434))
{var statearr_24578_24658 = state_24561__$1;(statearr_24578_24658[(1)] = (5));
} else
{var statearr_24579_24659 = state_24561__$1;(statearr_24579_24659[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (15)))
{var inst_24445 = (state_24561[(13)]);var inst_24443 = (state_24561[(14)]);var inst_24444 = (state_24561[(15)]);var inst_24442 = (state_24561[(16)]);var inst_24458 = (state_24561[(2)]);var inst_24459 = (inst_24445 + (1));var tmp24573 = inst_24443;var tmp24574 = inst_24444;var tmp24575 = inst_24442;var inst_24442__$1 = tmp24575;var inst_24443__$1 = tmp24573;var inst_24444__$1 = tmp24574;var inst_24445__$1 = inst_24459;var state_24561__$1 = (function (){var statearr_24580 = state_24561;(statearr_24580[(13)] = inst_24445__$1);
(statearr_24580[(14)] = inst_24443__$1);
(statearr_24580[(15)] = inst_24444__$1);
(statearr_24580[(18)] = inst_24458);
(statearr_24580[(16)] = inst_24442__$1);
return statearr_24580;
})();var statearr_24581_24660 = state_24561__$1;(statearr_24581_24660[(2)] = null);
(statearr_24581_24660[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (21)))
{var inst_24483 = (state_24561[(2)]);var state_24561__$1 = state_24561;var statearr_24585_24661 = state_24561__$1;(statearr_24585_24661[(2)] = inst_24483);
(statearr_24585_24661[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (31)))
{var inst_24509 = (state_24561[(9)]);var inst_24513 = done.call(null,null);var inst_24514 = cljs.core.async.untap_STAR_.call(null,m,inst_24509);var state_24561__$1 = (function (){var statearr_24586 = state_24561;(statearr_24586[(19)] = inst_24513);
return statearr_24586;
})();var statearr_24587_24662 = state_24561__$1;(statearr_24587_24662[(2)] = inst_24514);
(statearr_24587_24662[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (32)))
{var inst_24503 = (state_24561[(20)]);var inst_24501 = (state_24561[(21)]);var inst_24504 = (state_24561[(10)]);var inst_24502 = (state_24561[(12)]);var inst_24516 = (state_24561[(2)]);var inst_24517 = (inst_24504 + (1));var tmp24582 = inst_24503;var tmp24583 = inst_24501;var tmp24584 = inst_24502;var inst_24501__$1 = tmp24583;var inst_24502__$1 = tmp24584;var inst_24503__$1 = tmp24582;var inst_24504__$1 = inst_24517;var state_24561__$1 = (function (){var statearr_24588 = state_24561;(statearr_24588[(20)] = inst_24503__$1);
(statearr_24588[(22)] = inst_24516);
(statearr_24588[(21)] = inst_24501__$1);
(statearr_24588[(10)] = inst_24504__$1);
(statearr_24588[(12)] = inst_24502__$1);
return statearr_24588;
})();var statearr_24589_24663 = state_24561__$1;(statearr_24589_24663[(2)] = null);
(statearr_24589_24663[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (40)))
{var inst_24529 = (state_24561[(23)]);var inst_24533 = done.call(null,null);var inst_24534 = cljs.core.async.untap_STAR_.call(null,m,inst_24529);var state_24561__$1 = (function (){var statearr_24590 = state_24561;(statearr_24590[(24)] = inst_24533);
return statearr_24590;
})();var statearr_24591_24664 = state_24561__$1;(statearr_24591_24664[(2)] = inst_24534);
(statearr_24591_24664[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (33)))
{var inst_24520 = (state_24561[(25)]);var inst_24522 = cljs.core.chunked_seq_QMARK_.call(null,inst_24520);var state_24561__$1 = state_24561;if(inst_24522)
{var statearr_24592_24665 = state_24561__$1;(statearr_24592_24665[(1)] = (36));
} else
{var statearr_24593_24666 = state_24561__$1;(statearr_24593_24666[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (13)))
{var inst_24452 = (state_24561[(26)]);var inst_24455 = cljs.core.async.close_BANG_.call(null,inst_24452);var state_24561__$1 = state_24561;var statearr_24594_24667 = state_24561__$1;(statearr_24594_24667[(2)] = inst_24455);
(statearr_24594_24667[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (22)))
{var inst_24473 = (state_24561[(8)]);var inst_24476 = cljs.core.async.close_BANG_.call(null,inst_24473);var state_24561__$1 = state_24561;var statearr_24595_24668 = state_24561__$1;(statearr_24595_24668[(2)] = inst_24476);
(statearr_24595_24668[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (36)))
{var inst_24520 = (state_24561[(25)]);var inst_24524 = cljs.core.chunk_first.call(null,inst_24520);var inst_24525 = cljs.core.chunk_rest.call(null,inst_24520);var inst_24526 = cljs.core.count.call(null,inst_24524);var inst_24501 = inst_24525;var inst_24502 = inst_24524;var inst_24503 = inst_24526;var inst_24504 = (0);var state_24561__$1 = (function (){var statearr_24596 = state_24561;(statearr_24596[(20)] = inst_24503);
(statearr_24596[(21)] = inst_24501);
(statearr_24596[(10)] = inst_24504);
(statearr_24596[(12)] = inst_24502);
return statearr_24596;
})();var statearr_24597_24669 = state_24561__$1;(statearr_24597_24669[(2)] = null);
(statearr_24597_24669[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (41)))
{var inst_24520 = (state_24561[(25)]);var inst_24536 = (state_24561[(2)]);var inst_24537 = cljs.core.next.call(null,inst_24520);var inst_24501 = inst_24537;var inst_24502 = null;var inst_24503 = (0);var inst_24504 = (0);var state_24561__$1 = (function (){var statearr_24598 = state_24561;(statearr_24598[(27)] = inst_24536);
(statearr_24598[(20)] = inst_24503);
(statearr_24598[(21)] = inst_24501);
(statearr_24598[(10)] = inst_24504);
(statearr_24598[(12)] = inst_24502);
return statearr_24598;
})();var statearr_24599_24670 = state_24561__$1;(statearr_24599_24670[(2)] = null);
(statearr_24599_24670[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (43)))
{var state_24561__$1 = state_24561;var statearr_24600_24671 = state_24561__$1;(statearr_24600_24671[(2)] = null);
(statearr_24600_24671[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (29)))
{var inst_24545 = (state_24561[(2)]);var state_24561__$1 = state_24561;var statearr_24601_24672 = state_24561__$1;(statearr_24601_24672[(2)] = inst_24545);
(statearr_24601_24672[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (44)))
{var inst_24554 = (state_24561[(2)]);var state_24561__$1 = (function (){var statearr_24602 = state_24561;(statearr_24602[(28)] = inst_24554);
return statearr_24602;
})();var statearr_24603_24673 = state_24561__$1;(statearr_24603_24673[(2)] = null);
(statearr_24603_24673[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (6)))
{var inst_24493 = (state_24561[(29)]);var inst_24492 = cljs.core.deref.call(null,cs);var inst_24493__$1 = cljs.core.keys.call(null,inst_24492);var inst_24494 = cljs.core.count.call(null,inst_24493__$1);var inst_24495 = cljs.core.reset_BANG_.call(null,dctr,inst_24494);var inst_24500 = cljs.core.seq.call(null,inst_24493__$1);var inst_24501 = inst_24500;var inst_24502 = null;var inst_24503 = (0);var inst_24504 = (0);var state_24561__$1 = (function (){var statearr_24604 = state_24561;(statearr_24604[(20)] = inst_24503);
(statearr_24604[(30)] = inst_24495);
(statearr_24604[(21)] = inst_24501);
(statearr_24604[(10)] = inst_24504);
(statearr_24604[(12)] = inst_24502);
(statearr_24604[(29)] = inst_24493__$1);
return statearr_24604;
})();var statearr_24605_24674 = state_24561__$1;(statearr_24605_24674[(2)] = null);
(statearr_24605_24674[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (28)))
{var inst_24520 = (state_24561[(25)]);var inst_24501 = (state_24561[(21)]);var inst_24520__$1 = cljs.core.seq.call(null,inst_24501);var state_24561__$1 = (function (){var statearr_24606 = state_24561;(statearr_24606[(25)] = inst_24520__$1);
return statearr_24606;
})();if(inst_24520__$1)
{var statearr_24607_24675 = state_24561__$1;(statearr_24607_24675[(1)] = (33));
} else
{var statearr_24608_24676 = state_24561__$1;(statearr_24608_24676[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (25)))
{var inst_24503 = (state_24561[(20)]);var inst_24504 = (state_24561[(10)]);var inst_24506 = (inst_24504 < inst_24503);var inst_24507 = inst_24506;var state_24561__$1 = state_24561;if(cljs.core.truth_(inst_24507))
{var statearr_24609_24677 = state_24561__$1;(statearr_24609_24677[(1)] = (27));
} else
{var statearr_24610_24678 = state_24561__$1;(statearr_24610_24678[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (34)))
{var state_24561__$1 = state_24561;var statearr_24611_24679 = state_24561__$1;(statearr_24611_24679[(2)] = null);
(statearr_24611_24679[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (17)))
{var state_24561__$1 = state_24561;var statearr_24612_24680 = state_24561__$1;(statearr_24612_24680[(2)] = null);
(statearr_24612_24680[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (3)))
{var inst_24559 = (state_24561[(2)]);var state_24561__$1 = state_24561;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24561__$1,inst_24559);
} else
{if((state_val_24562 === (12)))
{var inst_24488 = (state_24561[(2)]);var state_24561__$1 = state_24561;var statearr_24613_24681 = state_24561__$1;(statearr_24613_24681[(2)] = inst_24488);
(statearr_24613_24681[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (2)))
{var state_24561__$1 = state_24561;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24561__$1,(4),ch);
} else
{if((state_val_24562 === (23)))
{var state_24561__$1 = state_24561;var statearr_24614_24682 = state_24561__$1;(statearr_24614_24682[(2)] = null);
(statearr_24614_24682[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (35)))
{var inst_24543 = (state_24561[(2)]);var state_24561__$1 = state_24561;var statearr_24615_24683 = state_24561__$1;(statearr_24615_24683[(2)] = inst_24543);
(statearr_24615_24683[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (19)))
{var inst_24462 = (state_24561[(7)]);var inst_24466 = cljs.core.chunk_first.call(null,inst_24462);var inst_24467 = cljs.core.chunk_rest.call(null,inst_24462);var inst_24468 = cljs.core.count.call(null,inst_24466);var inst_24442 = inst_24467;var inst_24443 = inst_24466;var inst_24444 = inst_24468;var inst_24445 = (0);var state_24561__$1 = (function (){var statearr_24616 = state_24561;(statearr_24616[(13)] = inst_24445);
(statearr_24616[(14)] = inst_24443);
(statearr_24616[(15)] = inst_24444);
(statearr_24616[(16)] = inst_24442);
return statearr_24616;
})();var statearr_24617_24684 = state_24561__$1;(statearr_24617_24684[(2)] = null);
(statearr_24617_24684[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (11)))
{var inst_24462 = (state_24561[(7)]);var inst_24442 = (state_24561[(16)]);var inst_24462__$1 = cljs.core.seq.call(null,inst_24442);var state_24561__$1 = (function (){var statearr_24618 = state_24561;(statearr_24618[(7)] = inst_24462__$1);
return statearr_24618;
})();if(inst_24462__$1)
{var statearr_24619_24685 = state_24561__$1;(statearr_24619_24685[(1)] = (16));
} else
{var statearr_24620_24686 = state_24561__$1;(statearr_24620_24686[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (9)))
{var inst_24490 = (state_24561[(2)]);var state_24561__$1 = state_24561;var statearr_24621_24687 = state_24561__$1;(statearr_24621_24687[(2)] = inst_24490);
(statearr_24621_24687[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (5)))
{var inst_24440 = cljs.core.deref.call(null,cs);var inst_24441 = cljs.core.seq.call(null,inst_24440);var inst_24442 = inst_24441;var inst_24443 = null;var inst_24444 = (0);var inst_24445 = (0);var state_24561__$1 = (function (){var statearr_24622 = state_24561;(statearr_24622[(13)] = inst_24445);
(statearr_24622[(14)] = inst_24443);
(statearr_24622[(15)] = inst_24444);
(statearr_24622[(16)] = inst_24442);
return statearr_24622;
})();var statearr_24623_24688 = state_24561__$1;(statearr_24623_24688[(2)] = null);
(statearr_24623_24688[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (14)))
{var state_24561__$1 = state_24561;var statearr_24624_24689 = state_24561__$1;(statearr_24624_24689[(2)] = null);
(statearr_24624_24689[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (45)))
{var inst_24551 = (state_24561[(2)]);var state_24561__$1 = state_24561;var statearr_24625_24690 = state_24561__$1;(statearr_24625_24690[(2)] = inst_24551);
(statearr_24625_24690[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (26)))
{var inst_24493 = (state_24561[(29)]);var inst_24547 = (state_24561[(2)]);var inst_24548 = cljs.core.seq.call(null,inst_24493);var state_24561__$1 = (function (){var statearr_24626 = state_24561;(statearr_24626[(31)] = inst_24547);
return statearr_24626;
})();if(inst_24548)
{var statearr_24627_24691 = state_24561__$1;(statearr_24627_24691[(1)] = (42));
} else
{var statearr_24628_24692 = state_24561__$1;(statearr_24628_24692[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (16)))
{var inst_24462 = (state_24561[(7)]);var inst_24464 = cljs.core.chunked_seq_QMARK_.call(null,inst_24462);var state_24561__$1 = state_24561;if(inst_24464)
{var statearr_24629_24693 = state_24561__$1;(statearr_24629_24693[(1)] = (19));
} else
{var statearr_24630_24694 = state_24561__$1;(statearr_24630_24694[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (38)))
{var inst_24540 = (state_24561[(2)]);var state_24561__$1 = state_24561;var statearr_24631_24695 = state_24561__$1;(statearr_24631_24695[(2)] = inst_24540);
(statearr_24631_24695[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (30)))
{var state_24561__$1 = state_24561;var statearr_24632_24696 = state_24561__$1;(statearr_24632_24696[(2)] = null);
(statearr_24632_24696[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (10)))
{var inst_24445 = (state_24561[(13)]);var inst_24443 = (state_24561[(14)]);var inst_24451 = cljs.core._nth.call(null,inst_24443,inst_24445);var inst_24452 = cljs.core.nth.call(null,inst_24451,(0),null);var inst_24453 = cljs.core.nth.call(null,inst_24451,(1),null);var state_24561__$1 = (function (){var statearr_24633 = state_24561;(statearr_24633[(26)] = inst_24452);
return statearr_24633;
})();if(cljs.core.truth_(inst_24453))
{var statearr_24634_24697 = state_24561__$1;(statearr_24634_24697[(1)] = (13));
} else
{var statearr_24635_24698 = state_24561__$1;(statearr_24635_24698[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (18)))
{var inst_24486 = (state_24561[(2)]);var state_24561__$1 = state_24561;var statearr_24636_24699 = state_24561__$1;(statearr_24636_24699[(2)] = inst_24486);
(statearr_24636_24699[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (42)))
{var state_24561__$1 = state_24561;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24561__$1,(45),dchan);
} else
{if((state_val_24562 === (37)))
{var inst_24520 = (state_24561[(25)]);var inst_24433 = (state_24561[(11)]);var inst_24529 = (state_24561[(23)]);var inst_24529__$1 = cljs.core.first.call(null,inst_24520);var inst_24530 = cljs.core.async.put_BANG_.call(null,inst_24529__$1,inst_24433,done);var state_24561__$1 = (function (){var statearr_24637 = state_24561;(statearr_24637[(23)] = inst_24529__$1);
return statearr_24637;
})();if(cljs.core.truth_(inst_24530))
{var statearr_24638_24700 = state_24561__$1;(statearr_24638_24700[(1)] = (39));
} else
{var statearr_24639_24701 = state_24561__$1;(statearr_24639_24701[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24562 === (8)))
{var inst_24445 = (state_24561[(13)]);var inst_24444 = (state_24561[(15)]);var inst_24447 = (inst_24445 < inst_24444);var inst_24448 = inst_24447;var state_24561__$1 = state_24561;if(cljs.core.truth_(inst_24448))
{var statearr_24640_24702 = state_24561__$1;(statearr_24640_24702[(1)] = (10));
} else
{var statearr_24641_24703 = state_24561__$1;(statearr_24641_24703[(1)] = (11));
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
});})(c__9125__auto___24649,cs,m,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___24649,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24645[(0)] = state_machine__9111__auto__);
(statearr_24645[(1)] = (1));
return statearr_24645;
});
var state_machine__9111__auto____1 = (function (state_24561){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24561);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24646){if((e24646 instanceof Object))
{var ex__9114__auto__ = e24646;var statearr_24647_24704 = state_24561;(statearr_24647_24704[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24561);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24646;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24705 = state_24561;
state_24561 = G__24705;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24561){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24649,cs,m,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_24648 = f__9126__auto__.call(null);(statearr_24648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24649);
return statearr_24648;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24649,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj24707 = {};return obj24707;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24708){var map__24713 = p__24708;var map__24713__$1 = ((cljs.core.seq_QMARK_.call(null,map__24713))?cljs.core.apply.call(null,cljs.core.hash_map,map__24713):map__24713);var opts = map__24713__$1;var statearr_24714_24717 = state;(statearr_24714_24717[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24713,map__24713__$1,opts){
return (function (val){var statearr_24715_24718 = state;(statearr_24715_24718[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24713,map__24713__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_24716_24719 = state;(statearr_24716_24719[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24708 = null;if (arguments.length > 3) {
  p__24708 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24708);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24720){
var state = cljs.core.first(arglist__24720);
arglist__24720 = cljs.core.next(arglist__24720);
var cont_block = cljs.core.first(arglist__24720);
arglist__24720 = cljs.core.next(arglist__24720);
var ports = cljs.core.first(arglist__24720);
var p__24708 = cljs.core.rest(arglist__24720);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24708);
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
;var m = (function (){if(typeof cljs.core.async.t24840 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24840 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24841){
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
this.meta24841 = meta24841;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24840.cljs$lang$type = true;
cljs.core.async.t24840.cljs$lang$ctorStr = "cljs.core.async/t24840";
cljs.core.async.t24840.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24840");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24840.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24840.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24840.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24840.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24840.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24840.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24840.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24840.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24840.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24842){var self__ = this;
var _24842__$1 = this;return self__.meta24841;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24842,meta24841__$1){var self__ = this;
var _24842__$1 = this;return (new cljs.core.async.t24840(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24841__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24840 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24840(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24841){return (new cljs.core.async.t24840(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24841));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24840(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__9125__auto___24959 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24959,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24959,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24912){var state_val_24913 = (state_24912[(1)]);if((state_val_24913 === (7)))
{var inst_24856 = (state_24912[(7)]);var inst_24861 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24856);var state_24912__$1 = state_24912;var statearr_24914_24960 = state_24912__$1;(statearr_24914_24960[(2)] = inst_24861);
(statearr_24914_24960[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24913 === (20)))
{var inst_24871 = (state_24912[(8)]);var state_24912__$1 = state_24912;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24912__$1,(23),out,inst_24871);
} else
{if((state_val_24913 === (1)))
{var inst_24846 = (state_24912[(9)]);var inst_24846__$1 = calc_state.call(null);var inst_24847 = cljs.core.seq_QMARK_.call(null,inst_24846__$1);var state_24912__$1 = (function (){var statearr_24915 = state_24912;(statearr_24915[(9)] = inst_24846__$1);
return statearr_24915;
})();if(inst_24847)
{var statearr_24916_24961 = state_24912__$1;(statearr_24916_24961[(1)] = (2));
} else
{var statearr_24917_24962 = state_24912__$1;(statearr_24917_24962[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24913 === (24)))
{var inst_24864 = (state_24912[(10)]);var inst_24856 = inst_24864;var state_24912__$1 = (function (){var statearr_24918 = state_24912;(statearr_24918[(7)] = inst_24856);
return statearr_24918;
})();var statearr_24919_24963 = state_24912__$1;(statearr_24919_24963[(2)] = null);
(statearr_24919_24963[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24913 === (4)))
{var inst_24846 = (state_24912[(9)]);var inst_24852 = (state_24912[(2)]);var inst_24853 = cljs.core.get.call(null,inst_24852,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24854 = cljs.core.get.call(null,inst_24852,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24855 = cljs.core.get.call(null,inst_24852,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_24856 = inst_24846;var state_24912__$1 = (function (){var statearr_24920 = state_24912;(statearr_24920[(11)] = inst_24854);
(statearr_24920[(7)] = inst_24856);
(statearr_24920[(12)] = inst_24853);
(statearr_24920[(13)] = inst_24855);
return statearr_24920;
})();var statearr_24921_24964 = state_24912__$1;(statearr_24921_24964[(2)] = null);
(statearr_24921_24964[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24913 === (15)))
{var state_24912__$1 = state_24912;var statearr_24922_24965 = state_24912__$1;(statearr_24922_24965[(2)] = null);
(statearr_24922_24965[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24913 === (21)))
{var inst_24864 = (state_24912[(10)]);var inst_24856 = inst_24864;var state_24912__$1 = (function (){var statearr_24923 = state_24912;(statearr_24923[(7)] = inst_24856);
return statearr_24923;
})();var statearr_24924_24966 = state_24912__$1;(statearr_24924_24966[(2)] = null);
(statearr_24924_24966[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24913 === (13)))
{var inst_24908 = (state_24912[(2)]);var state_24912__$1 = state_24912;var statearr_24925_24967 = state_24912__$1;(statearr_24925_24967[(2)] = inst_24908);
(statearr_24925_24967[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24913 === (22)))
{var inst_24906 = (state_24912[(2)]);var state_24912__$1 = state_24912;var statearr_24926_24968 = state_24912__$1;(statearr_24926_24968[(2)] = inst_24906);
(statearr_24926_24968[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24913 === (6)))
{var inst_24910 = (state_24912[(2)]);var state_24912__$1 = state_24912;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24912__$1,inst_24910);
} else
{if((state_val_24913 === (25)))
{var state_24912__$1 = state_24912;var statearr_24927_24969 = state_24912__$1;(statearr_24927_24969[(2)] = null);
(statearr_24927_24969[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24913 === (17)))
{var inst_24886 = (state_24912[(14)]);var state_24912__$1 = state_24912;var statearr_24928_24970 = state_24912__$1;(statearr_24928_24970[(2)] = inst_24886);
(statearr_24928_24970[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24913 === (3)))
{var inst_24846 = (state_24912[(9)]);var state_24912__$1 = state_24912;var statearr_24929_24971 = state_24912__$1;(statearr_24929_24971[(2)] = inst_24846);
(statearr_24929_24971[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24913 === (12)))
{var inst_24872 = (state_24912[(15)]);var inst_24867 = (state_24912[(16)]);var inst_24886 = (state_24912[(14)]);var inst_24886__$1 = inst_24867.call(null,inst_24872);var state_24912__$1 = (function (){var statearr_24930 = state_24912;(statearr_24930[(14)] = inst_24886__$1);
return statearr_24930;
})();if(cljs.core.truth_(inst_24886__$1))
{var statearr_24931_24972 = state_24912__$1;(statearr_24931_24972[(1)] = (17));
} else
{var statearr_24932_24973 = state_24912__$1;(statearr_24932_24973[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24913 === (2)))
{var inst_24846 = (state_24912[(9)]);var inst_24849 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24846);var state_24912__$1 = state_24912;var statearr_24933_24974 = state_24912__$1;(statearr_24933_24974[(2)] = inst_24849);
(statearr_24933_24974[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24913 === (23)))
{var inst_24897 = (state_24912[(2)]);var state_24912__$1 = state_24912;if(cljs.core.truth_(inst_24897))
{var statearr_24934_24975 = state_24912__$1;(statearr_24934_24975[(1)] = (24));
} else
{var statearr_24935_24976 = state_24912__$1;(statearr_24935_24976[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24913 === (19)))
{var inst_24894 = (state_24912[(2)]);var state_24912__$1 = state_24912;if(cljs.core.truth_(inst_24894))
{var statearr_24936_24977 = state_24912__$1;(statearr_24936_24977[(1)] = (20));
} else
{var statearr_24937_24978 = state_24912__$1;(statearr_24937_24978[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24913 === (11)))
{var inst_24871 = (state_24912[(8)]);var inst_24877 = (inst_24871 == null);var state_24912__$1 = state_24912;if(cljs.core.truth_(inst_24877))
{var statearr_24938_24979 = state_24912__$1;(statearr_24938_24979[(1)] = (14));
} else
{var statearr_24939_24980 = state_24912__$1;(statearr_24939_24980[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24913 === (9)))
{var inst_24864 = (state_24912[(10)]);var inst_24864__$1 = (state_24912[(2)]);var inst_24865 = cljs.core.get.call(null,inst_24864__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24866 = cljs.core.get.call(null,inst_24864__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24867 = cljs.core.get.call(null,inst_24864__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_24912__$1 = (function (){var statearr_24940 = state_24912;(statearr_24940[(17)] = inst_24866);
(statearr_24940[(16)] = inst_24867);
(statearr_24940[(10)] = inst_24864__$1);
return statearr_24940;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_24912__$1,(10),inst_24865);
} else
{if((state_val_24913 === (5)))
{var inst_24856 = (state_24912[(7)]);var inst_24859 = cljs.core.seq_QMARK_.call(null,inst_24856);var state_24912__$1 = state_24912;if(inst_24859)
{var statearr_24941_24981 = state_24912__$1;(statearr_24941_24981[(1)] = (7));
} else
{var statearr_24942_24982 = state_24912__$1;(statearr_24942_24982[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24913 === (14)))
{var inst_24872 = (state_24912[(15)]);var inst_24879 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24872);var state_24912__$1 = state_24912;var statearr_24943_24983 = state_24912__$1;(statearr_24943_24983[(2)] = inst_24879);
(statearr_24943_24983[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24913 === (26)))
{var inst_24902 = (state_24912[(2)]);var state_24912__$1 = state_24912;var statearr_24944_24984 = state_24912__$1;(statearr_24944_24984[(2)] = inst_24902);
(statearr_24944_24984[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24913 === (16)))
{var inst_24882 = (state_24912[(2)]);var inst_24883 = calc_state.call(null);var inst_24856 = inst_24883;var state_24912__$1 = (function (){var statearr_24945 = state_24912;(statearr_24945[(18)] = inst_24882);
(statearr_24945[(7)] = inst_24856);
return statearr_24945;
})();var statearr_24946_24985 = state_24912__$1;(statearr_24946_24985[(2)] = null);
(statearr_24946_24985[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24913 === (10)))
{var inst_24872 = (state_24912[(15)]);var inst_24871 = (state_24912[(8)]);var inst_24870 = (state_24912[(2)]);var inst_24871__$1 = cljs.core.nth.call(null,inst_24870,(0),null);var inst_24872__$1 = cljs.core.nth.call(null,inst_24870,(1),null);var inst_24873 = (inst_24871__$1 == null);var inst_24874 = cljs.core._EQ_.call(null,inst_24872__$1,change);var inst_24875 = (inst_24873) || (inst_24874);var state_24912__$1 = (function (){var statearr_24947 = state_24912;(statearr_24947[(15)] = inst_24872__$1);
(statearr_24947[(8)] = inst_24871__$1);
return statearr_24947;
})();if(cljs.core.truth_(inst_24875))
{var statearr_24948_24986 = state_24912__$1;(statearr_24948_24986[(1)] = (11));
} else
{var statearr_24949_24987 = state_24912__$1;(statearr_24949_24987[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24913 === (18)))
{var inst_24872 = (state_24912[(15)]);var inst_24866 = (state_24912[(17)]);var inst_24867 = (state_24912[(16)]);var inst_24889 = cljs.core.empty_QMARK_.call(null,inst_24867);var inst_24890 = inst_24866.call(null,inst_24872);var inst_24891 = cljs.core.not.call(null,inst_24890);var inst_24892 = (inst_24889) && (inst_24891);var state_24912__$1 = state_24912;var statearr_24950_24988 = state_24912__$1;(statearr_24950_24988[(2)] = inst_24892);
(statearr_24950_24988[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24913 === (8)))
{var inst_24856 = (state_24912[(7)]);var state_24912__$1 = state_24912;var statearr_24951_24989 = state_24912__$1;(statearr_24951_24989[(2)] = inst_24856);
(statearr_24951_24989[(1)] = (9));
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
});})(c__9125__auto___24959,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__9110__auto__,c__9125__auto___24959,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24955[(0)] = state_machine__9111__auto__);
(statearr_24955[(1)] = (1));
return statearr_24955;
});
var state_machine__9111__auto____1 = (function (state_24912){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24912);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24956){if((e24956 instanceof Object))
{var ex__9114__auto__ = e24956;var statearr_24957_24990 = state_24912;(statearr_24957_24990[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24912);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24956;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24991 = state_24912;
state_24912 = G__24991;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24912){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24959,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__9127__auto__ = (function (){var statearr_24958 = f__9126__auto__.call(null);(statearr_24958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24959);
return statearr_24958;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24959,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj24993 = {};return obj24993;
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
return (function (p1__24994_SHARP_){if(cljs.core.truth_(p1__24994_SHARP_.call(null,topic)))
{return p1__24994_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__24994_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25117 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25117 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25118){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25118 = meta25118;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25117.cljs$lang$type = true;
cljs.core.async.t25117.cljs$lang$ctorStr = "cljs.core.async/t25117";
cljs.core.async.t25117.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25117");
});})(mults,ensure_mult))
;
cljs.core.async.t25117.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25117.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25117.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25117.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25117.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25117.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25117.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25119){var self__ = this;
var _25119__$1 = this;return self__.meta25118;
});})(mults,ensure_mult))
;
cljs.core.async.t25117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25119,meta25118__$1){var self__ = this;
var _25119__$1 = this;return (new cljs.core.async.t25117(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25118__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25117 = ((function (mults,ensure_mult){
return (function __GT_t25117(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25118){return (new cljs.core.async.t25117(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25118));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25117(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__9125__auto___25239 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25239,mults,ensure_mult,p){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25239,mults,ensure_mult,p){
return (function (state_25191){var state_val_25192 = (state_25191[(1)]);if((state_val_25192 === (7)))
{var inst_25187 = (state_25191[(2)]);var state_25191__$1 = state_25191;var statearr_25193_25240 = state_25191__$1;(statearr_25193_25240[(2)] = inst_25187);
(statearr_25193_25240[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25192 === (20)))
{var state_25191__$1 = state_25191;var statearr_25194_25241 = state_25191__$1;(statearr_25194_25241[(2)] = null);
(statearr_25194_25241[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25192 === (1)))
{var state_25191__$1 = state_25191;var statearr_25195_25242 = state_25191__$1;(statearr_25195_25242[(2)] = null);
(statearr_25195_25242[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25192 === (24)))
{var inst_25170 = (state_25191[(7)]);var inst_25179 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25170);var state_25191__$1 = state_25191;var statearr_25196_25243 = state_25191__$1;(statearr_25196_25243[(2)] = inst_25179);
(statearr_25196_25243[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25192 === (4)))
{var inst_25122 = (state_25191[(8)]);var inst_25122__$1 = (state_25191[(2)]);var inst_25123 = (inst_25122__$1 == null);var state_25191__$1 = (function (){var statearr_25197 = state_25191;(statearr_25197[(8)] = inst_25122__$1);
return statearr_25197;
})();if(cljs.core.truth_(inst_25123))
{var statearr_25198_25244 = state_25191__$1;(statearr_25198_25244[(1)] = (5));
} else
{var statearr_25199_25245 = state_25191__$1;(statearr_25199_25245[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25192 === (15)))
{var inst_25164 = (state_25191[(2)]);var state_25191__$1 = state_25191;var statearr_25200_25246 = state_25191__$1;(statearr_25200_25246[(2)] = inst_25164);
(statearr_25200_25246[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25192 === (21)))
{var inst_25184 = (state_25191[(2)]);var state_25191__$1 = (function (){var statearr_25201 = state_25191;(statearr_25201[(9)] = inst_25184);
return statearr_25201;
})();var statearr_25202_25247 = state_25191__$1;(statearr_25202_25247[(2)] = null);
(statearr_25202_25247[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25192 === (13)))
{var inst_25146 = (state_25191[(10)]);var inst_25148 = cljs.core.chunked_seq_QMARK_.call(null,inst_25146);var state_25191__$1 = state_25191;if(inst_25148)
{var statearr_25203_25248 = state_25191__$1;(statearr_25203_25248[(1)] = (16));
} else
{var statearr_25204_25249 = state_25191__$1;(statearr_25204_25249[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25192 === (22)))
{var inst_25176 = (state_25191[(2)]);var state_25191__$1 = state_25191;if(cljs.core.truth_(inst_25176))
{var statearr_25205_25250 = state_25191__$1;(statearr_25205_25250[(1)] = (23));
} else
{var statearr_25206_25251 = state_25191__$1;(statearr_25206_25251[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25192 === (6)))
{var inst_25172 = (state_25191[(11)]);var inst_25170 = (state_25191[(7)]);var inst_25122 = (state_25191[(8)]);var inst_25170__$1 = topic_fn.call(null,inst_25122);var inst_25171 = cljs.core.deref.call(null,mults);var inst_25172__$1 = cljs.core.get.call(null,inst_25171,inst_25170__$1);var state_25191__$1 = (function (){var statearr_25207 = state_25191;(statearr_25207[(11)] = inst_25172__$1);
(statearr_25207[(7)] = inst_25170__$1);
return statearr_25207;
})();if(cljs.core.truth_(inst_25172__$1))
{var statearr_25208_25252 = state_25191__$1;(statearr_25208_25252[(1)] = (19));
} else
{var statearr_25209_25253 = state_25191__$1;(statearr_25209_25253[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25192 === (25)))
{var inst_25181 = (state_25191[(2)]);var state_25191__$1 = state_25191;var statearr_25210_25254 = state_25191__$1;(statearr_25210_25254[(2)] = inst_25181);
(statearr_25210_25254[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25192 === (17)))
{var inst_25146 = (state_25191[(10)]);var inst_25155 = cljs.core.first.call(null,inst_25146);var inst_25156 = cljs.core.async.muxch_STAR_.call(null,inst_25155);var inst_25157 = cljs.core.async.close_BANG_.call(null,inst_25156);var inst_25158 = cljs.core.next.call(null,inst_25146);var inst_25132 = inst_25158;var inst_25133 = null;var inst_25134 = (0);var inst_25135 = (0);var state_25191__$1 = (function (){var statearr_25211 = state_25191;(statearr_25211[(12)] = inst_25135);
(statearr_25211[(13)] = inst_25133);
(statearr_25211[(14)] = inst_25157);
(statearr_25211[(15)] = inst_25134);
(statearr_25211[(16)] = inst_25132);
return statearr_25211;
})();var statearr_25212_25255 = state_25191__$1;(statearr_25212_25255[(2)] = null);
(statearr_25212_25255[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25192 === (3)))
{var inst_25189 = (state_25191[(2)]);var state_25191__$1 = state_25191;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25191__$1,inst_25189);
} else
{if((state_val_25192 === (12)))
{var inst_25166 = (state_25191[(2)]);var state_25191__$1 = state_25191;var statearr_25213_25256 = state_25191__$1;(statearr_25213_25256[(2)] = inst_25166);
(statearr_25213_25256[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25192 === (2)))
{var state_25191__$1 = state_25191;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25191__$1,(4),ch);
} else
{if((state_val_25192 === (23)))
{var state_25191__$1 = state_25191;var statearr_25214_25257 = state_25191__$1;(statearr_25214_25257[(2)] = null);
(statearr_25214_25257[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25192 === (19)))
{var inst_25172 = (state_25191[(11)]);var inst_25122 = (state_25191[(8)]);var inst_25174 = cljs.core.async.muxch_STAR_.call(null,inst_25172);var state_25191__$1 = state_25191;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25191__$1,(22),inst_25174,inst_25122);
} else
{if((state_val_25192 === (11)))
{var inst_25146 = (state_25191[(10)]);var inst_25132 = (state_25191[(16)]);var inst_25146__$1 = cljs.core.seq.call(null,inst_25132);var state_25191__$1 = (function (){var statearr_25215 = state_25191;(statearr_25215[(10)] = inst_25146__$1);
return statearr_25215;
})();if(inst_25146__$1)
{var statearr_25216_25258 = state_25191__$1;(statearr_25216_25258[(1)] = (13));
} else
{var statearr_25217_25259 = state_25191__$1;(statearr_25217_25259[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25192 === (9)))
{var inst_25168 = (state_25191[(2)]);var state_25191__$1 = state_25191;var statearr_25218_25260 = state_25191__$1;(statearr_25218_25260[(2)] = inst_25168);
(statearr_25218_25260[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25192 === (5)))
{var inst_25129 = cljs.core.deref.call(null,mults);var inst_25130 = cljs.core.vals.call(null,inst_25129);var inst_25131 = cljs.core.seq.call(null,inst_25130);var inst_25132 = inst_25131;var inst_25133 = null;var inst_25134 = (0);var inst_25135 = (0);var state_25191__$1 = (function (){var statearr_25219 = state_25191;(statearr_25219[(12)] = inst_25135);
(statearr_25219[(13)] = inst_25133);
(statearr_25219[(15)] = inst_25134);
(statearr_25219[(16)] = inst_25132);
return statearr_25219;
})();var statearr_25220_25261 = state_25191__$1;(statearr_25220_25261[(2)] = null);
(statearr_25220_25261[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25192 === (14)))
{var state_25191__$1 = state_25191;var statearr_25224_25262 = state_25191__$1;(statearr_25224_25262[(2)] = null);
(statearr_25224_25262[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25192 === (16)))
{var inst_25146 = (state_25191[(10)]);var inst_25150 = cljs.core.chunk_first.call(null,inst_25146);var inst_25151 = cljs.core.chunk_rest.call(null,inst_25146);var inst_25152 = cljs.core.count.call(null,inst_25150);var inst_25132 = inst_25151;var inst_25133 = inst_25150;var inst_25134 = inst_25152;var inst_25135 = (0);var state_25191__$1 = (function (){var statearr_25225 = state_25191;(statearr_25225[(12)] = inst_25135);
(statearr_25225[(13)] = inst_25133);
(statearr_25225[(15)] = inst_25134);
(statearr_25225[(16)] = inst_25132);
return statearr_25225;
})();var statearr_25226_25263 = state_25191__$1;(statearr_25226_25263[(2)] = null);
(statearr_25226_25263[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25192 === (10)))
{var inst_25135 = (state_25191[(12)]);var inst_25133 = (state_25191[(13)]);var inst_25134 = (state_25191[(15)]);var inst_25132 = (state_25191[(16)]);var inst_25140 = cljs.core._nth.call(null,inst_25133,inst_25135);var inst_25141 = cljs.core.async.muxch_STAR_.call(null,inst_25140);var inst_25142 = cljs.core.async.close_BANG_.call(null,inst_25141);var inst_25143 = (inst_25135 + (1));var tmp25221 = inst_25133;var tmp25222 = inst_25134;var tmp25223 = inst_25132;var inst_25132__$1 = tmp25223;var inst_25133__$1 = tmp25221;var inst_25134__$1 = tmp25222;var inst_25135__$1 = inst_25143;var state_25191__$1 = (function (){var statearr_25227 = state_25191;(statearr_25227[(12)] = inst_25135__$1);
(statearr_25227[(13)] = inst_25133__$1);
(statearr_25227[(17)] = inst_25142);
(statearr_25227[(15)] = inst_25134__$1);
(statearr_25227[(16)] = inst_25132__$1);
return statearr_25227;
})();var statearr_25228_25264 = state_25191__$1;(statearr_25228_25264[(2)] = null);
(statearr_25228_25264[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25192 === (18)))
{var inst_25161 = (state_25191[(2)]);var state_25191__$1 = state_25191;var statearr_25229_25265 = state_25191__$1;(statearr_25229_25265[(2)] = inst_25161);
(statearr_25229_25265[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25192 === (8)))
{var inst_25135 = (state_25191[(12)]);var inst_25134 = (state_25191[(15)]);var inst_25137 = (inst_25135 < inst_25134);var inst_25138 = inst_25137;var state_25191__$1 = state_25191;if(cljs.core.truth_(inst_25138))
{var statearr_25230_25266 = state_25191__$1;(statearr_25230_25266[(1)] = (10));
} else
{var statearr_25231_25267 = state_25191__$1;(statearr_25231_25267[(1)] = (11));
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
});})(c__9125__auto___25239,mults,ensure_mult,p))
;return ((function (switch__9110__auto__,c__9125__auto___25239,mults,ensure_mult,p){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25235[(0)] = state_machine__9111__auto__);
(statearr_25235[(1)] = (1));
return statearr_25235;
});
var state_machine__9111__auto____1 = (function (state_25191){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25191);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25236){if((e25236 instanceof Object))
{var ex__9114__auto__ = e25236;var statearr_25237_25268 = state_25191;(statearr_25237_25268[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25191);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25236;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25269 = state_25191;
state_25191 = G__25269;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25191){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25239,mults,ensure_mult,p))
})();var state__9127__auto__ = (function (){var statearr_25238 = f__9126__auto__.call(null);(statearr_25238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25239);
return statearr_25238;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25239,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__9125__auto___25406 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25406,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25406,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25376){var state_val_25377 = (state_25376[(1)]);if((state_val_25377 === (7)))
{var state_25376__$1 = state_25376;var statearr_25378_25407 = state_25376__$1;(statearr_25378_25407[(2)] = null);
(statearr_25378_25407[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (1)))
{var state_25376__$1 = state_25376;var statearr_25379_25408 = state_25376__$1;(statearr_25379_25408[(2)] = null);
(statearr_25379_25408[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (4)))
{var inst_25340 = (state_25376[(7)]);var inst_25342 = (inst_25340 < cnt);var state_25376__$1 = state_25376;if(cljs.core.truth_(inst_25342))
{var statearr_25380_25409 = state_25376__$1;(statearr_25380_25409[(1)] = (6));
} else
{var statearr_25381_25410 = state_25376__$1;(statearr_25381_25410[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (15)))
{var inst_25372 = (state_25376[(2)]);var state_25376__$1 = state_25376;var statearr_25382_25411 = state_25376__$1;(statearr_25382_25411[(2)] = inst_25372);
(statearr_25382_25411[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (13)))
{var inst_25365 = cljs.core.async.close_BANG_.call(null,out);var state_25376__$1 = state_25376;var statearr_25383_25412 = state_25376__$1;(statearr_25383_25412[(2)] = inst_25365);
(statearr_25383_25412[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (6)))
{var state_25376__$1 = state_25376;var statearr_25384_25413 = state_25376__$1;(statearr_25384_25413[(2)] = null);
(statearr_25384_25413[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (3)))
{var inst_25374 = (state_25376[(2)]);var state_25376__$1 = state_25376;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25376__$1,inst_25374);
} else
{if((state_val_25377 === (12)))
{var inst_25362 = (state_25376[(8)]);var inst_25362__$1 = (state_25376[(2)]);var inst_25363 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25362__$1);var state_25376__$1 = (function (){var statearr_25385 = state_25376;(statearr_25385[(8)] = inst_25362__$1);
return statearr_25385;
})();if(cljs.core.truth_(inst_25363))
{var statearr_25386_25414 = state_25376__$1;(statearr_25386_25414[(1)] = (13));
} else
{var statearr_25387_25415 = state_25376__$1;(statearr_25387_25415[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (2)))
{var inst_25339 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_25340 = (0);var state_25376__$1 = (function (){var statearr_25388 = state_25376;(statearr_25388[(9)] = inst_25339);
(statearr_25388[(7)] = inst_25340);
return statearr_25388;
})();var statearr_25389_25416 = state_25376__$1;(statearr_25389_25416[(2)] = null);
(statearr_25389_25416[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (11)))
{var inst_25340 = (state_25376[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25376,(10),Object,null,(9));var inst_25349 = chs__$1.call(null,inst_25340);var inst_25350 = done.call(null,inst_25340);var inst_25351 = cljs.core.async.take_BANG_.call(null,inst_25349,inst_25350);var state_25376__$1 = state_25376;var statearr_25390_25417 = state_25376__$1;(statearr_25390_25417[(2)] = inst_25351);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25376__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (9)))
{var inst_25340 = (state_25376[(7)]);var inst_25353 = (state_25376[(2)]);var inst_25354 = (inst_25340 + (1));var inst_25340__$1 = inst_25354;var state_25376__$1 = (function (){var statearr_25391 = state_25376;(statearr_25391[(10)] = inst_25353);
(statearr_25391[(7)] = inst_25340__$1);
return statearr_25391;
})();var statearr_25392_25418 = state_25376__$1;(statearr_25392_25418[(2)] = null);
(statearr_25392_25418[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (5)))
{var inst_25360 = (state_25376[(2)]);var state_25376__$1 = (function (){var statearr_25393 = state_25376;(statearr_25393[(11)] = inst_25360);
return statearr_25393;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25376__$1,(12),dchan);
} else
{if((state_val_25377 === (14)))
{var inst_25362 = (state_25376[(8)]);var inst_25367 = cljs.core.apply.call(null,f,inst_25362);var state_25376__$1 = state_25376;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25376__$1,(16),out,inst_25367);
} else
{if((state_val_25377 === (16)))
{var inst_25369 = (state_25376[(2)]);var state_25376__$1 = (function (){var statearr_25394 = state_25376;(statearr_25394[(12)] = inst_25369);
return statearr_25394;
})();var statearr_25395_25419 = state_25376__$1;(statearr_25395_25419[(2)] = null);
(statearr_25395_25419[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (10)))
{var inst_25344 = (state_25376[(2)]);var inst_25345 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_25376__$1 = (function (){var statearr_25396 = state_25376;(statearr_25396[(13)] = inst_25344);
return statearr_25396;
})();var statearr_25397_25420 = state_25376__$1;(statearr_25397_25420[(2)] = inst_25345);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25376__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (8)))
{var inst_25358 = (state_25376[(2)]);var state_25376__$1 = state_25376;var statearr_25398_25421 = state_25376__$1;(statearr_25398_25421[(2)] = inst_25358);
(statearr_25398_25421[(1)] = (5));
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
});})(c__9125__auto___25406,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___25406,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25402[(0)] = state_machine__9111__auto__);
(statearr_25402[(1)] = (1));
return statearr_25402;
});
var state_machine__9111__auto____1 = (function (state_25376){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25376);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25403){if((e25403 instanceof Object))
{var ex__9114__auto__ = e25403;var statearr_25404_25422 = state_25376;(statearr_25404_25422[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25376);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25403;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25423 = state_25376;
state_25376 = G__25423;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25376){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25406,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_25405 = f__9126__auto__.call(null);(statearr_25405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25406);
return statearr_25405;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25406,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25531 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25531,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25531,out){
return (function (state_25507){var state_val_25508 = (state_25507[(1)]);if((state_val_25508 === (7)))
{var inst_25486 = (state_25507[(7)]);var inst_25487 = (state_25507[(8)]);var inst_25486__$1 = (state_25507[(2)]);var inst_25487__$1 = cljs.core.nth.call(null,inst_25486__$1,(0),null);var inst_25488 = cljs.core.nth.call(null,inst_25486__$1,(1),null);var inst_25489 = (inst_25487__$1 == null);var state_25507__$1 = (function (){var statearr_25509 = state_25507;(statearr_25509[(7)] = inst_25486__$1);
(statearr_25509[(9)] = inst_25488);
(statearr_25509[(8)] = inst_25487__$1);
return statearr_25509;
})();if(cljs.core.truth_(inst_25489))
{var statearr_25510_25532 = state_25507__$1;(statearr_25510_25532[(1)] = (8));
} else
{var statearr_25511_25533 = state_25507__$1;(statearr_25511_25533[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25508 === (1)))
{var inst_25478 = cljs.core.vec.call(null,chs);var inst_25479 = inst_25478;var state_25507__$1 = (function (){var statearr_25512 = state_25507;(statearr_25512[(10)] = inst_25479);
return statearr_25512;
})();var statearr_25513_25534 = state_25507__$1;(statearr_25513_25534[(2)] = null);
(statearr_25513_25534[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25508 === (4)))
{var inst_25479 = (state_25507[(10)]);var state_25507__$1 = state_25507;return cljs.core.async.ioc_alts_BANG_.call(null,state_25507__$1,(7),inst_25479);
} else
{if((state_val_25508 === (6)))
{var inst_25503 = (state_25507[(2)]);var state_25507__$1 = state_25507;var statearr_25514_25535 = state_25507__$1;(statearr_25514_25535[(2)] = inst_25503);
(statearr_25514_25535[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25508 === (3)))
{var inst_25505 = (state_25507[(2)]);var state_25507__$1 = state_25507;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25507__$1,inst_25505);
} else
{if((state_val_25508 === (2)))
{var inst_25479 = (state_25507[(10)]);var inst_25481 = cljs.core.count.call(null,inst_25479);var inst_25482 = (inst_25481 > (0));var state_25507__$1 = state_25507;if(cljs.core.truth_(inst_25482))
{var statearr_25516_25536 = state_25507__$1;(statearr_25516_25536[(1)] = (4));
} else
{var statearr_25517_25537 = state_25507__$1;(statearr_25517_25537[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25508 === (11)))
{var inst_25479 = (state_25507[(10)]);var inst_25496 = (state_25507[(2)]);var tmp25515 = inst_25479;var inst_25479__$1 = tmp25515;var state_25507__$1 = (function (){var statearr_25518 = state_25507;(statearr_25518[(10)] = inst_25479__$1);
(statearr_25518[(11)] = inst_25496);
return statearr_25518;
})();var statearr_25519_25538 = state_25507__$1;(statearr_25519_25538[(2)] = null);
(statearr_25519_25538[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25508 === (9)))
{var inst_25487 = (state_25507[(8)]);var state_25507__$1 = state_25507;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25507__$1,(11),out,inst_25487);
} else
{if((state_val_25508 === (5)))
{var inst_25501 = cljs.core.async.close_BANG_.call(null,out);var state_25507__$1 = state_25507;var statearr_25520_25539 = state_25507__$1;(statearr_25520_25539[(2)] = inst_25501);
(statearr_25520_25539[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25508 === (10)))
{var inst_25499 = (state_25507[(2)]);var state_25507__$1 = state_25507;var statearr_25521_25540 = state_25507__$1;(statearr_25521_25540[(2)] = inst_25499);
(statearr_25521_25540[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25508 === (8)))
{var inst_25486 = (state_25507[(7)]);var inst_25479 = (state_25507[(10)]);var inst_25488 = (state_25507[(9)]);var inst_25487 = (state_25507[(8)]);var inst_25491 = (function (){var c = inst_25488;var v = inst_25487;var vec__25484 = inst_25486;var cs = inst_25479;return ((function (c,v,vec__25484,cs,inst_25486,inst_25479,inst_25488,inst_25487,state_val_25508,c__9125__auto___25531,out){
return (function (p1__25424_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25424_SHARP_);
});
;})(c,v,vec__25484,cs,inst_25486,inst_25479,inst_25488,inst_25487,state_val_25508,c__9125__auto___25531,out))
})();var inst_25492 = cljs.core.filterv.call(null,inst_25491,inst_25479);var inst_25479__$1 = inst_25492;var state_25507__$1 = (function (){var statearr_25522 = state_25507;(statearr_25522[(10)] = inst_25479__$1);
return statearr_25522;
})();var statearr_25523_25541 = state_25507__$1;(statearr_25523_25541[(2)] = null);
(statearr_25523_25541[(1)] = (2));
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
});})(c__9125__auto___25531,out))
;return ((function (switch__9110__auto__,c__9125__auto___25531,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25527 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25527[(0)] = state_machine__9111__auto__);
(statearr_25527[(1)] = (1));
return statearr_25527;
});
var state_machine__9111__auto____1 = (function (state_25507){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25507);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25528){if((e25528 instanceof Object))
{var ex__9114__auto__ = e25528;var statearr_25529_25542 = state_25507;(statearr_25529_25542[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25507);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25528;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25543 = state_25507;
state_25507 = G__25543;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25507){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25531,out))
})();var state__9127__auto__ = (function (){var statearr_25530 = f__9126__auto__.call(null);(statearr_25530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25531);
return statearr_25530;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25531,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25636 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25636,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25636,out){
return (function (state_25613){var state_val_25614 = (state_25613[(1)]);if((state_val_25614 === (7)))
{var inst_25595 = (state_25613[(7)]);var inst_25595__$1 = (state_25613[(2)]);var inst_25596 = (inst_25595__$1 == null);var inst_25597 = cljs.core.not.call(null,inst_25596);var state_25613__$1 = (function (){var statearr_25615 = state_25613;(statearr_25615[(7)] = inst_25595__$1);
return statearr_25615;
})();if(inst_25597)
{var statearr_25616_25637 = state_25613__$1;(statearr_25616_25637[(1)] = (8));
} else
{var statearr_25617_25638 = state_25613__$1;(statearr_25617_25638[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25614 === (1)))
{var inst_25590 = (0);var state_25613__$1 = (function (){var statearr_25618 = state_25613;(statearr_25618[(8)] = inst_25590);
return statearr_25618;
})();var statearr_25619_25639 = state_25613__$1;(statearr_25619_25639[(2)] = null);
(statearr_25619_25639[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25614 === (4)))
{var state_25613__$1 = state_25613;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25613__$1,(7),ch);
} else
{if((state_val_25614 === (6)))
{var inst_25608 = (state_25613[(2)]);var state_25613__$1 = state_25613;var statearr_25620_25640 = state_25613__$1;(statearr_25620_25640[(2)] = inst_25608);
(statearr_25620_25640[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25614 === (3)))
{var inst_25610 = (state_25613[(2)]);var inst_25611 = cljs.core.async.close_BANG_.call(null,out);var state_25613__$1 = (function (){var statearr_25621 = state_25613;(statearr_25621[(9)] = inst_25610);
return statearr_25621;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25613__$1,inst_25611);
} else
{if((state_val_25614 === (2)))
{var inst_25590 = (state_25613[(8)]);var inst_25592 = (inst_25590 < n);var state_25613__$1 = state_25613;if(cljs.core.truth_(inst_25592))
{var statearr_25622_25641 = state_25613__$1;(statearr_25622_25641[(1)] = (4));
} else
{var statearr_25623_25642 = state_25613__$1;(statearr_25623_25642[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25614 === (11)))
{var inst_25590 = (state_25613[(8)]);var inst_25600 = (state_25613[(2)]);var inst_25601 = (inst_25590 + (1));var inst_25590__$1 = inst_25601;var state_25613__$1 = (function (){var statearr_25624 = state_25613;(statearr_25624[(10)] = inst_25600);
(statearr_25624[(8)] = inst_25590__$1);
return statearr_25624;
})();var statearr_25625_25643 = state_25613__$1;(statearr_25625_25643[(2)] = null);
(statearr_25625_25643[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25614 === (9)))
{var state_25613__$1 = state_25613;var statearr_25626_25644 = state_25613__$1;(statearr_25626_25644[(2)] = null);
(statearr_25626_25644[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25614 === (5)))
{var state_25613__$1 = state_25613;var statearr_25627_25645 = state_25613__$1;(statearr_25627_25645[(2)] = null);
(statearr_25627_25645[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25614 === (10)))
{var inst_25605 = (state_25613[(2)]);var state_25613__$1 = state_25613;var statearr_25628_25646 = state_25613__$1;(statearr_25628_25646[(2)] = inst_25605);
(statearr_25628_25646[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25614 === (8)))
{var inst_25595 = (state_25613[(7)]);var state_25613__$1 = state_25613;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25613__$1,(11),out,inst_25595);
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
});})(c__9125__auto___25636,out))
;return ((function (switch__9110__auto__,c__9125__auto___25636,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25632 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25632[(0)] = state_machine__9111__auto__);
(statearr_25632[(1)] = (1));
return statearr_25632;
});
var state_machine__9111__auto____1 = (function (state_25613){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25613);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25633){if((e25633 instanceof Object))
{var ex__9114__auto__ = e25633;var statearr_25634_25647 = state_25613;(statearr_25634_25647[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25613);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25633;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25648 = state_25613;
state_25613 = G__25648;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25613){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25636,out))
})();var state__9127__auto__ = (function (){var statearr_25635 = f__9126__auto__.call(null);(statearr_25635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25636);
return statearr_25635;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25636,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25656 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25656 = (function (ch,f,map_LT_,meta25657){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25657 = meta25657;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25656.cljs$lang$type = true;
cljs.core.async.t25656.cljs$lang$ctorStr = "cljs.core.async/t25656";
cljs.core.async.t25656.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25656");
});
cljs.core.async.t25656.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25656.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t25656.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25656.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25659 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25659 = (function (fn1,_,meta25657,ch,f,map_LT_,meta25660){
this.fn1 = fn1;
this._ = _;
this.meta25657 = meta25657;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25660 = meta25660;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25659.cljs$lang$type = true;
cljs.core.async.t25659.cljs$lang$ctorStr = "cljs.core.async/t25659";
cljs.core.async.t25659.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25659");
});})(___$1))
;
cljs.core.async.t25659.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25659.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25659.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25649_SHARP_){return f1.call(null,(((p1__25649_SHARP_ == null))?null:self__.f.call(null,p1__25649_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25659.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25661){var self__ = this;
var _25661__$1 = this;return self__.meta25660;
});})(___$1))
;
cljs.core.async.t25659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25661,meta25660__$1){var self__ = this;
var _25661__$1 = this;return (new cljs.core.async.t25659(self__.fn1,self__._,self__.meta25657,self__.ch,self__.f,self__.map_LT_,meta25660__$1));
});})(___$1))
;
cljs.core.async.__GT_t25659 = ((function (___$1){
return (function __GT_t25659(fn1__$1,___$2,meta25657__$1,ch__$2,f__$2,map_LT___$2,meta25660){return (new cljs.core.async.t25659(fn1__$1,___$2,meta25657__$1,ch__$2,f__$2,map_LT___$2,meta25660));
});})(___$1))
;
}
return (new cljs.core.async.t25659(fn1,___$1,self__.meta25657,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t25656.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25656.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25656.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25658){var self__ = this;
var _25658__$1 = this;return self__.meta25657;
});
cljs.core.async.t25656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25658,meta25657__$1){var self__ = this;
var _25658__$1 = this;return (new cljs.core.async.t25656(self__.ch,self__.f,self__.map_LT_,meta25657__$1));
});
cljs.core.async.__GT_t25656 = (function __GT_t25656(ch__$1,f__$1,map_LT___$1,meta25657){return (new cljs.core.async.t25656(ch__$1,f__$1,map_LT___$1,meta25657));
});
}
return (new cljs.core.async.t25656(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25665 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25665 = (function (ch,f,map_GT_,meta25666){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25666 = meta25666;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25665.cljs$lang$type = true;
cljs.core.async.t25665.cljs$lang$ctorStr = "cljs.core.async/t25665";
cljs.core.async.t25665.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25665");
});
cljs.core.async.t25665.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25665.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t25665.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25665.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25665.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25665.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25667){var self__ = this;
var _25667__$1 = this;return self__.meta25666;
});
cljs.core.async.t25665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25667,meta25666__$1){var self__ = this;
var _25667__$1 = this;return (new cljs.core.async.t25665(self__.ch,self__.f,self__.map_GT_,meta25666__$1));
});
cljs.core.async.__GT_t25665 = (function __GT_t25665(ch__$1,f__$1,map_GT___$1,meta25666){return (new cljs.core.async.t25665(ch__$1,f__$1,map_GT___$1,meta25666));
});
}
return (new cljs.core.async.t25665(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25671 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25671 = (function (ch,p,filter_GT_,meta25672){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25672 = meta25672;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25671.cljs$lang$type = true;
cljs.core.async.t25671.cljs$lang$ctorStr = "cljs.core.async/t25671";
cljs.core.async.t25671.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25671");
});
cljs.core.async.t25671.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25671.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t25671.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25671.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25671.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25671.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25671.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25673){var self__ = this;
var _25673__$1 = this;return self__.meta25672;
});
cljs.core.async.t25671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25673,meta25672__$1){var self__ = this;
var _25673__$1 = this;return (new cljs.core.async.t25671(self__.ch,self__.p,self__.filter_GT_,meta25672__$1));
});
cljs.core.async.__GT_t25671 = (function __GT_t25671(ch__$1,p__$1,filter_GT___$1,meta25672){return (new cljs.core.async.t25671(ch__$1,p__$1,filter_GT___$1,meta25672));
});
}
return (new cljs.core.async.t25671(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25756 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25756,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25756,out){
return (function (state_25735){var state_val_25736 = (state_25735[(1)]);if((state_val_25736 === (7)))
{var inst_25731 = (state_25735[(2)]);var state_25735__$1 = state_25735;var statearr_25737_25757 = state_25735__$1;(statearr_25737_25757[(2)] = inst_25731);
(statearr_25737_25757[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25736 === (1)))
{var state_25735__$1 = state_25735;var statearr_25738_25758 = state_25735__$1;(statearr_25738_25758[(2)] = null);
(statearr_25738_25758[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25736 === (4)))
{var inst_25717 = (state_25735[(7)]);var inst_25717__$1 = (state_25735[(2)]);var inst_25718 = (inst_25717__$1 == null);var state_25735__$1 = (function (){var statearr_25739 = state_25735;(statearr_25739[(7)] = inst_25717__$1);
return statearr_25739;
})();if(cljs.core.truth_(inst_25718))
{var statearr_25740_25759 = state_25735__$1;(statearr_25740_25759[(1)] = (5));
} else
{var statearr_25741_25760 = state_25735__$1;(statearr_25741_25760[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25736 === (6)))
{var inst_25717 = (state_25735[(7)]);var inst_25722 = p.call(null,inst_25717);var state_25735__$1 = state_25735;if(cljs.core.truth_(inst_25722))
{var statearr_25742_25761 = state_25735__$1;(statearr_25742_25761[(1)] = (8));
} else
{var statearr_25743_25762 = state_25735__$1;(statearr_25743_25762[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25736 === (3)))
{var inst_25733 = (state_25735[(2)]);var state_25735__$1 = state_25735;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25735__$1,inst_25733);
} else
{if((state_val_25736 === (2)))
{var state_25735__$1 = state_25735;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25735__$1,(4),ch);
} else
{if((state_val_25736 === (11)))
{var inst_25725 = (state_25735[(2)]);var state_25735__$1 = state_25735;var statearr_25744_25763 = state_25735__$1;(statearr_25744_25763[(2)] = inst_25725);
(statearr_25744_25763[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25736 === (9)))
{var state_25735__$1 = state_25735;var statearr_25745_25764 = state_25735__$1;(statearr_25745_25764[(2)] = null);
(statearr_25745_25764[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25736 === (5)))
{var inst_25720 = cljs.core.async.close_BANG_.call(null,out);var state_25735__$1 = state_25735;var statearr_25746_25765 = state_25735__$1;(statearr_25746_25765[(2)] = inst_25720);
(statearr_25746_25765[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25736 === (10)))
{var inst_25728 = (state_25735[(2)]);var state_25735__$1 = (function (){var statearr_25747 = state_25735;(statearr_25747[(8)] = inst_25728);
return statearr_25747;
})();var statearr_25748_25766 = state_25735__$1;(statearr_25748_25766[(2)] = null);
(statearr_25748_25766[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25736 === (8)))
{var inst_25717 = (state_25735[(7)]);var state_25735__$1 = state_25735;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25735__$1,(11),out,inst_25717);
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
});})(c__9125__auto___25756,out))
;return ((function (switch__9110__auto__,c__9125__auto___25756,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25752 = [null,null,null,null,null,null,null,null,null];(statearr_25752[(0)] = state_machine__9111__auto__);
(statearr_25752[(1)] = (1));
return statearr_25752;
});
var state_machine__9111__auto____1 = (function (state_25735){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25735);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25753){if((e25753 instanceof Object))
{var ex__9114__auto__ = e25753;var statearr_25754_25767 = state_25735;(statearr_25754_25767[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25735);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25753;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25768 = state_25735;
state_25735 = G__25768;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25735){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25756,out))
})();var state__9127__auto__ = (function (){var statearr_25755 = f__9126__auto__.call(null);(statearr_25755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25756);
return statearr_25755;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25756,out))
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
return (function (state_25934){var state_val_25935 = (state_25934[(1)]);if((state_val_25935 === (7)))
{var inst_25930 = (state_25934[(2)]);var state_25934__$1 = state_25934;var statearr_25936_25977 = state_25934__$1;(statearr_25936_25977[(2)] = inst_25930);
(statearr_25936_25977[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25935 === (20)))
{var inst_25900 = (state_25934[(7)]);var inst_25911 = (state_25934[(2)]);var inst_25912 = cljs.core.next.call(null,inst_25900);var inst_25886 = inst_25912;var inst_25887 = null;var inst_25888 = (0);var inst_25889 = (0);var state_25934__$1 = (function (){var statearr_25937 = state_25934;(statearr_25937[(8)] = inst_25887);
(statearr_25937[(9)] = inst_25886);
(statearr_25937[(10)] = inst_25889);
(statearr_25937[(11)] = inst_25911);
(statearr_25937[(12)] = inst_25888);
return statearr_25937;
})();var statearr_25938_25978 = state_25934__$1;(statearr_25938_25978[(2)] = null);
(statearr_25938_25978[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25935 === (1)))
{var state_25934__$1 = state_25934;var statearr_25939_25979 = state_25934__$1;(statearr_25939_25979[(2)] = null);
(statearr_25939_25979[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25935 === (4)))
{var inst_25875 = (state_25934[(13)]);var inst_25875__$1 = (state_25934[(2)]);var inst_25876 = (inst_25875__$1 == null);var state_25934__$1 = (function (){var statearr_25940 = state_25934;(statearr_25940[(13)] = inst_25875__$1);
return statearr_25940;
})();if(cljs.core.truth_(inst_25876))
{var statearr_25941_25980 = state_25934__$1;(statearr_25941_25980[(1)] = (5));
} else
{var statearr_25942_25981 = state_25934__$1;(statearr_25942_25981[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25935 === (15)))
{var state_25934__$1 = state_25934;var statearr_25946_25982 = state_25934__$1;(statearr_25946_25982[(2)] = null);
(statearr_25946_25982[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25935 === (21)))
{var state_25934__$1 = state_25934;var statearr_25947_25983 = state_25934__$1;(statearr_25947_25983[(2)] = null);
(statearr_25947_25983[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25935 === (13)))
{var inst_25887 = (state_25934[(8)]);var inst_25886 = (state_25934[(9)]);var inst_25889 = (state_25934[(10)]);var inst_25888 = (state_25934[(12)]);var inst_25896 = (state_25934[(2)]);var inst_25897 = (inst_25889 + (1));var tmp25943 = inst_25887;var tmp25944 = inst_25886;var tmp25945 = inst_25888;var inst_25886__$1 = tmp25944;var inst_25887__$1 = tmp25943;var inst_25888__$1 = tmp25945;var inst_25889__$1 = inst_25897;var state_25934__$1 = (function (){var statearr_25948 = state_25934;(statearr_25948[(8)] = inst_25887__$1);
(statearr_25948[(9)] = inst_25886__$1);
(statearr_25948[(10)] = inst_25889__$1);
(statearr_25948[(14)] = inst_25896);
(statearr_25948[(12)] = inst_25888__$1);
return statearr_25948;
})();var statearr_25949_25984 = state_25934__$1;(statearr_25949_25984[(2)] = null);
(statearr_25949_25984[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25935 === (22)))
{var state_25934__$1 = state_25934;var statearr_25950_25985 = state_25934__$1;(statearr_25950_25985[(2)] = null);
(statearr_25950_25985[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25935 === (6)))
{var inst_25875 = (state_25934[(13)]);var inst_25884 = f.call(null,inst_25875);var inst_25885 = cljs.core.seq.call(null,inst_25884);var inst_25886 = inst_25885;var inst_25887 = null;var inst_25888 = (0);var inst_25889 = (0);var state_25934__$1 = (function (){var statearr_25951 = state_25934;(statearr_25951[(8)] = inst_25887);
(statearr_25951[(9)] = inst_25886);
(statearr_25951[(10)] = inst_25889);
(statearr_25951[(12)] = inst_25888);
return statearr_25951;
})();var statearr_25952_25986 = state_25934__$1;(statearr_25952_25986[(2)] = null);
(statearr_25952_25986[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25935 === (17)))
{var inst_25900 = (state_25934[(7)]);var inst_25904 = cljs.core.chunk_first.call(null,inst_25900);var inst_25905 = cljs.core.chunk_rest.call(null,inst_25900);var inst_25906 = cljs.core.count.call(null,inst_25904);var inst_25886 = inst_25905;var inst_25887 = inst_25904;var inst_25888 = inst_25906;var inst_25889 = (0);var state_25934__$1 = (function (){var statearr_25953 = state_25934;(statearr_25953[(8)] = inst_25887);
(statearr_25953[(9)] = inst_25886);
(statearr_25953[(10)] = inst_25889);
(statearr_25953[(12)] = inst_25888);
return statearr_25953;
})();var statearr_25954_25987 = state_25934__$1;(statearr_25954_25987[(2)] = null);
(statearr_25954_25987[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25935 === (3)))
{var inst_25932 = (state_25934[(2)]);var state_25934__$1 = state_25934;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25934__$1,inst_25932);
} else
{if((state_val_25935 === (12)))
{var inst_25920 = (state_25934[(2)]);var state_25934__$1 = state_25934;var statearr_25955_25988 = state_25934__$1;(statearr_25955_25988[(2)] = inst_25920);
(statearr_25955_25988[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25935 === (2)))
{var state_25934__$1 = state_25934;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25934__$1,(4),in$);
} else
{if((state_val_25935 === (23)))
{var inst_25928 = (state_25934[(2)]);var state_25934__$1 = state_25934;var statearr_25956_25989 = state_25934__$1;(statearr_25956_25989[(2)] = inst_25928);
(statearr_25956_25989[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25935 === (19)))
{var inst_25915 = (state_25934[(2)]);var state_25934__$1 = state_25934;var statearr_25957_25990 = state_25934__$1;(statearr_25957_25990[(2)] = inst_25915);
(statearr_25957_25990[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25935 === (11)))
{var inst_25886 = (state_25934[(9)]);var inst_25900 = (state_25934[(7)]);var inst_25900__$1 = cljs.core.seq.call(null,inst_25886);var state_25934__$1 = (function (){var statearr_25958 = state_25934;(statearr_25958[(7)] = inst_25900__$1);
return statearr_25958;
})();if(inst_25900__$1)
{var statearr_25959_25991 = state_25934__$1;(statearr_25959_25991[(1)] = (14));
} else
{var statearr_25960_25992 = state_25934__$1;(statearr_25960_25992[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25935 === (9)))
{var inst_25922 = (state_25934[(2)]);var inst_25923 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_25934__$1 = (function (){var statearr_25961 = state_25934;(statearr_25961[(15)] = inst_25922);
return statearr_25961;
})();if(cljs.core.truth_(inst_25923))
{var statearr_25962_25993 = state_25934__$1;(statearr_25962_25993[(1)] = (21));
} else
{var statearr_25963_25994 = state_25934__$1;(statearr_25963_25994[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25935 === (5)))
{var inst_25878 = cljs.core.async.close_BANG_.call(null,out);var state_25934__$1 = state_25934;var statearr_25964_25995 = state_25934__$1;(statearr_25964_25995[(2)] = inst_25878);
(statearr_25964_25995[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25935 === (14)))
{var inst_25900 = (state_25934[(7)]);var inst_25902 = cljs.core.chunked_seq_QMARK_.call(null,inst_25900);var state_25934__$1 = state_25934;if(inst_25902)
{var statearr_25965_25996 = state_25934__$1;(statearr_25965_25996[(1)] = (17));
} else
{var statearr_25966_25997 = state_25934__$1;(statearr_25966_25997[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25935 === (16)))
{var inst_25918 = (state_25934[(2)]);var state_25934__$1 = state_25934;var statearr_25967_25998 = state_25934__$1;(statearr_25967_25998[(2)] = inst_25918);
(statearr_25967_25998[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25935 === (10)))
{var inst_25887 = (state_25934[(8)]);var inst_25889 = (state_25934[(10)]);var inst_25894 = cljs.core._nth.call(null,inst_25887,inst_25889);var state_25934__$1 = state_25934;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25934__$1,(13),out,inst_25894);
} else
{if((state_val_25935 === (18)))
{var inst_25900 = (state_25934[(7)]);var inst_25909 = cljs.core.first.call(null,inst_25900);var state_25934__$1 = state_25934;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25934__$1,(20),out,inst_25909);
} else
{if((state_val_25935 === (8)))
{var inst_25889 = (state_25934[(10)]);var inst_25888 = (state_25934[(12)]);var inst_25891 = (inst_25889 < inst_25888);var inst_25892 = inst_25891;var state_25934__$1 = state_25934;if(cljs.core.truth_(inst_25892))
{var statearr_25968_25999 = state_25934__$1;(statearr_25968_25999[(1)] = (10));
} else
{var statearr_25969_26000 = state_25934__$1;(statearr_25969_26000[(1)] = (11));
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
var state_machine__9111__auto____0 = (function (){var statearr_25973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25973[(0)] = state_machine__9111__auto__);
(statearr_25973[(1)] = (1));
return statearr_25973;
});
var state_machine__9111__auto____1 = (function (state_25934){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25934);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25974){if((e25974 instanceof Object))
{var ex__9114__auto__ = e25974;var statearr_25975_26001 = state_25934;(statearr_25975_26001[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25934);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25974;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26002 = state_25934;
state_25934 = G__26002;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25934){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_25976 = f__9126__auto__.call(null);(statearr_25976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_25976;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26099 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26099,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26099,out){
return (function (state_26074){var state_val_26075 = (state_26074[(1)]);if((state_val_26075 === (7)))
{var inst_26069 = (state_26074[(2)]);var state_26074__$1 = state_26074;var statearr_26076_26100 = state_26074__$1;(statearr_26076_26100[(2)] = inst_26069);
(statearr_26076_26100[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26075 === (1)))
{var inst_26051 = null;var state_26074__$1 = (function (){var statearr_26077 = state_26074;(statearr_26077[(7)] = inst_26051);
return statearr_26077;
})();var statearr_26078_26101 = state_26074__$1;(statearr_26078_26101[(2)] = null);
(statearr_26078_26101[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26075 === (4)))
{var inst_26054 = (state_26074[(8)]);var inst_26054__$1 = (state_26074[(2)]);var inst_26055 = (inst_26054__$1 == null);var inst_26056 = cljs.core.not.call(null,inst_26055);var state_26074__$1 = (function (){var statearr_26079 = state_26074;(statearr_26079[(8)] = inst_26054__$1);
return statearr_26079;
})();if(inst_26056)
{var statearr_26080_26102 = state_26074__$1;(statearr_26080_26102[(1)] = (5));
} else
{var statearr_26081_26103 = state_26074__$1;(statearr_26081_26103[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26075 === (6)))
{var state_26074__$1 = state_26074;var statearr_26082_26104 = state_26074__$1;(statearr_26082_26104[(2)] = null);
(statearr_26082_26104[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26075 === (3)))
{var inst_26071 = (state_26074[(2)]);var inst_26072 = cljs.core.async.close_BANG_.call(null,out);var state_26074__$1 = (function (){var statearr_26083 = state_26074;(statearr_26083[(9)] = inst_26071);
return statearr_26083;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26074__$1,inst_26072);
} else
{if((state_val_26075 === (2)))
{var state_26074__$1 = state_26074;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26074__$1,(4),ch);
} else
{if((state_val_26075 === (11)))
{var inst_26054 = (state_26074[(8)]);var inst_26063 = (state_26074[(2)]);var inst_26051 = inst_26054;var state_26074__$1 = (function (){var statearr_26084 = state_26074;(statearr_26084[(7)] = inst_26051);
(statearr_26084[(10)] = inst_26063);
return statearr_26084;
})();var statearr_26085_26105 = state_26074__$1;(statearr_26085_26105[(2)] = null);
(statearr_26085_26105[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26075 === (9)))
{var inst_26054 = (state_26074[(8)]);var state_26074__$1 = state_26074;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26074__$1,(11),out,inst_26054);
} else
{if((state_val_26075 === (5)))
{var inst_26051 = (state_26074[(7)]);var inst_26054 = (state_26074[(8)]);var inst_26058 = cljs.core._EQ_.call(null,inst_26054,inst_26051);var state_26074__$1 = state_26074;if(inst_26058)
{var statearr_26087_26106 = state_26074__$1;(statearr_26087_26106[(1)] = (8));
} else
{var statearr_26088_26107 = state_26074__$1;(statearr_26088_26107[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26075 === (10)))
{var inst_26066 = (state_26074[(2)]);var state_26074__$1 = state_26074;var statearr_26089_26108 = state_26074__$1;(statearr_26089_26108[(2)] = inst_26066);
(statearr_26089_26108[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26075 === (8)))
{var inst_26051 = (state_26074[(7)]);var tmp26086 = inst_26051;var inst_26051__$1 = tmp26086;var state_26074__$1 = (function (){var statearr_26090 = state_26074;(statearr_26090[(7)] = inst_26051__$1);
return statearr_26090;
})();var statearr_26091_26109 = state_26074__$1;(statearr_26091_26109[(2)] = null);
(statearr_26091_26109[(1)] = (2));
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
});})(c__9125__auto___26099,out))
;return ((function (switch__9110__auto__,c__9125__auto___26099,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26095 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26095[(0)] = state_machine__9111__auto__);
(statearr_26095[(1)] = (1));
return statearr_26095;
});
var state_machine__9111__auto____1 = (function (state_26074){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26074);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26096){if((e26096 instanceof Object))
{var ex__9114__auto__ = e26096;var statearr_26097_26110 = state_26074;(statearr_26097_26110[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26074);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26096;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26111 = state_26074;
state_26074 = G__26111;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26074){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26099,out))
})();var state__9127__auto__ = (function (){var statearr_26098 = f__9126__auto__.call(null);(statearr_26098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26099);
return statearr_26098;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26099,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26246 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26246,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26246,out){
return (function (state_26216){var state_val_26217 = (state_26216[(1)]);if((state_val_26217 === (7)))
{var inst_26212 = (state_26216[(2)]);var state_26216__$1 = state_26216;var statearr_26218_26247 = state_26216__$1;(statearr_26218_26247[(2)] = inst_26212);
(statearr_26218_26247[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26217 === (1)))
{var inst_26179 = (new Array(n));var inst_26180 = inst_26179;var inst_26181 = (0);var state_26216__$1 = (function (){var statearr_26219 = state_26216;(statearr_26219[(7)] = inst_26180);
(statearr_26219[(8)] = inst_26181);
return statearr_26219;
})();var statearr_26220_26248 = state_26216__$1;(statearr_26220_26248[(2)] = null);
(statearr_26220_26248[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26217 === (4)))
{var inst_26184 = (state_26216[(9)]);var inst_26184__$1 = (state_26216[(2)]);var inst_26185 = (inst_26184__$1 == null);var inst_26186 = cljs.core.not.call(null,inst_26185);var state_26216__$1 = (function (){var statearr_26221 = state_26216;(statearr_26221[(9)] = inst_26184__$1);
return statearr_26221;
})();if(inst_26186)
{var statearr_26222_26249 = state_26216__$1;(statearr_26222_26249[(1)] = (5));
} else
{var statearr_26223_26250 = state_26216__$1;(statearr_26223_26250[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26217 === (15)))
{var inst_26206 = (state_26216[(2)]);var state_26216__$1 = state_26216;var statearr_26224_26251 = state_26216__$1;(statearr_26224_26251[(2)] = inst_26206);
(statearr_26224_26251[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26217 === (13)))
{var state_26216__$1 = state_26216;var statearr_26225_26252 = state_26216__$1;(statearr_26225_26252[(2)] = null);
(statearr_26225_26252[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26217 === (6)))
{var inst_26181 = (state_26216[(8)]);var inst_26202 = (inst_26181 > (0));var state_26216__$1 = state_26216;if(cljs.core.truth_(inst_26202))
{var statearr_26226_26253 = state_26216__$1;(statearr_26226_26253[(1)] = (12));
} else
{var statearr_26227_26254 = state_26216__$1;(statearr_26227_26254[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26217 === (3)))
{var inst_26214 = (state_26216[(2)]);var state_26216__$1 = state_26216;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26216__$1,inst_26214);
} else
{if((state_val_26217 === (12)))
{var inst_26180 = (state_26216[(7)]);var inst_26204 = cljs.core.vec.call(null,inst_26180);var state_26216__$1 = state_26216;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26216__$1,(15),out,inst_26204);
} else
{if((state_val_26217 === (2)))
{var state_26216__$1 = state_26216;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26216__$1,(4),ch);
} else
{if((state_val_26217 === (11)))
{var inst_26196 = (state_26216[(2)]);var inst_26197 = (new Array(n));var inst_26180 = inst_26197;var inst_26181 = (0);var state_26216__$1 = (function (){var statearr_26228 = state_26216;(statearr_26228[(7)] = inst_26180);
(statearr_26228[(10)] = inst_26196);
(statearr_26228[(8)] = inst_26181);
return statearr_26228;
})();var statearr_26229_26255 = state_26216__$1;(statearr_26229_26255[(2)] = null);
(statearr_26229_26255[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26217 === (9)))
{var inst_26180 = (state_26216[(7)]);var inst_26194 = cljs.core.vec.call(null,inst_26180);var state_26216__$1 = state_26216;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26216__$1,(11),out,inst_26194);
} else
{if((state_val_26217 === (5)))
{var inst_26180 = (state_26216[(7)]);var inst_26184 = (state_26216[(9)]);var inst_26189 = (state_26216[(11)]);var inst_26181 = (state_26216[(8)]);var inst_26188 = (inst_26180[inst_26181] = inst_26184);var inst_26189__$1 = (inst_26181 + (1));var inst_26190 = (inst_26189__$1 < n);var state_26216__$1 = (function (){var statearr_26230 = state_26216;(statearr_26230[(11)] = inst_26189__$1);
(statearr_26230[(12)] = inst_26188);
return statearr_26230;
})();if(cljs.core.truth_(inst_26190))
{var statearr_26231_26256 = state_26216__$1;(statearr_26231_26256[(1)] = (8));
} else
{var statearr_26232_26257 = state_26216__$1;(statearr_26232_26257[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26217 === (14)))
{var inst_26209 = (state_26216[(2)]);var inst_26210 = cljs.core.async.close_BANG_.call(null,out);var state_26216__$1 = (function (){var statearr_26234 = state_26216;(statearr_26234[(13)] = inst_26209);
return statearr_26234;
})();var statearr_26235_26258 = state_26216__$1;(statearr_26235_26258[(2)] = inst_26210);
(statearr_26235_26258[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26217 === (10)))
{var inst_26200 = (state_26216[(2)]);var state_26216__$1 = state_26216;var statearr_26236_26259 = state_26216__$1;(statearr_26236_26259[(2)] = inst_26200);
(statearr_26236_26259[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26217 === (8)))
{var inst_26180 = (state_26216[(7)]);var inst_26189 = (state_26216[(11)]);var tmp26233 = inst_26180;var inst_26180__$1 = tmp26233;var inst_26181 = inst_26189;var state_26216__$1 = (function (){var statearr_26237 = state_26216;(statearr_26237[(7)] = inst_26180__$1);
(statearr_26237[(8)] = inst_26181);
return statearr_26237;
})();var statearr_26238_26260 = state_26216__$1;(statearr_26238_26260[(2)] = null);
(statearr_26238_26260[(1)] = (2));
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
});})(c__9125__auto___26246,out))
;return ((function (switch__9110__auto__,c__9125__auto___26246,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26242[(0)] = state_machine__9111__auto__);
(statearr_26242[(1)] = (1));
return statearr_26242;
});
var state_machine__9111__auto____1 = (function (state_26216){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26216);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26243){if((e26243 instanceof Object))
{var ex__9114__auto__ = e26243;var statearr_26244_26261 = state_26216;(statearr_26244_26261[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26216);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26243;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26262 = state_26216;
state_26216 = G__26262;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26216){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26246,out))
})();var state__9127__auto__ = (function (){var statearr_26245 = f__9126__auto__.call(null);(statearr_26245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26246);
return statearr_26245;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26246,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26405 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26405,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26405,out){
return (function (state_26375){var state_val_26376 = (state_26375[(1)]);if((state_val_26376 === (7)))
{var inst_26371 = (state_26375[(2)]);var state_26375__$1 = state_26375;var statearr_26377_26406 = state_26375__$1;(statearr_26377_26406[(2)] = inst_26371);
(statearr_26377_26406[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26376 === (1)))
{var inst_26334 = [];var inst_26335 = inst_26334;var inst_26336 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_26375__$1 = (function (){var statearr_26378 = state_26375;(statearr_26378[(7)] = inst_26336);
(statearr_26378[(8)] = inst_26335);
return statearr_26378;
})();var statearr_26379_26407 = state_26375__$1;(statearr_26379_26407[(2)] = null);
(statearr_26379_26407[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26376 === (4)))
{var inst_26339 = (state_26375[(9)]);var inst_26339__$1 = (state_26375[(2)]);var inst_26340 = (inst_26339__$1 == null);var inst_26341 = cljs.core.not.call(null,inst_26340);var state_26375__$1 = (function (){var statearr_26380 = state_26375;(statearr_26380[(9)] = inst_26339__$1);
return statearr_26380;
})();if(inst_26341)
{var statearr_26381_26408 = state_26375__$1;(statearr_26381_26408[(1)] = (5));
} else
{var statearr_26382_26409 = state_26375__$1;(statearr_26382_26409[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26376 === (15)))
{var inst_26365 = (state_26375[(2)]);var state_26375__$1 = state_26375;var statearr_26383_26410 = state_26375__$1;(statearr_26383_26410[(2)] = inst_26365);
(statearr_26383_26410[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26376 === (13)))
{var state_26375__$1 = state_26375;var statearr_26384_26411 = state_26375__$1;(statearr_26384_26411[(2)] = null);
(statearr_26384_26411[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26376 === (6)))
{var inst_26335 = (state_26375[(8)]);var inst_26360 = inst_26335.length;var inst_26361 = (inst_26360 > (0));var state_26375__$1 = state_26375;if(cljs.core.truth_(inst_26361))
{var statearr_26385_26412 = state_26375__$1;(statearr_26385_26412[(1)] = (12));
} else
{var statearr_26386_26413 = state_26375__$1;(statearr_26386_26413[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26376 === (3)))
{var inst_26373 = (state_26375[(2)]);var state_26375__$1 = state_26375;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26375__$1,inst_26373);
} else
{if((state_val_26376 === (12)))
{var inst_26335 = (state_26375[(8)]);var inst_26363 = cljs.core.vec.call(null,inst_26335);var state_26375__$1 = state_26375;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26375__$1,(15),out,inst_26363);
} else
{if((state_val_26376 === (2)))
{var state_26375__$1 = state_26375;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26375__$1,(4),ch);
} else
{if((state_val_26376 === (11)))
{var inst_26343 = (state_26375[(10)]);var inst_26339 = (state_26375[(9)]);var inst_26353 = (state_26375[(2)]);var inst_26354 = [];var inst_26355 = inst_26354.push(inst_26339);var inst_26335 = inst_26354;var inst_26336 = inst_26343;var state_26375__$1 = (function (){var statearr_26387 = state_26375;(statearr_26387[(11)] = inst_26353);
(statearr_26387[(7)] = inst_26336);
(statearr_26387[(8)] = inst_26335);
(statearr_26387[(12)] = inst_26355);
return statearr_26387;
})();var statearr_26388_26414 = state_26375__$1;(statearr_26388_26414[(2)] = null);
(statearr_26388_26414[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26376 === (9)))
{var inst_26335 = (state_26375[(8)]);var inst_26351 = cljs.core.vec.call(null,inst_26335);var state_26375__$1 = state_26375;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26375__$1,(11),out,inst_26351);
} else
{if((state_val_26376 === (5)))
{var inst_26343 = (state_26375[(10)]);var inst_26336 = (state_26375[(7)]);var inst_26339 = (state_26375[(9)]);var inst_26343__$1 = f.call(null,inst_26339);var inst_26344 = cljs.core._EQ_.call(null,inst_26343__$1,inst_26336);var inst_26345 = cljs.core.keyword_identical_QMARK_.call(null,inst_26336,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_26346 = (inst_26344) || (inst_26345);var state_26375__$1 = (function (){var statearr_26389 = state_26375;(statearr_26389[(10)] = inst_26343__$1);
return statearr_26389;
})();if(cljs.core.truth_(inst_26346))
{var statearr_26390_26415 = state_26375__$1;(statearr_26390_26415[(1)] = (8));
} else
{var statearr_26391_26416 = state_26375__$1;(statearr_26391_26416[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26376 === (14)))
{var inst_26368 = (state_26375[(2)]);var inst_26369 = cljs.core.async.close_BANG_.call(null,out);var state_26375__$1 = (function (){var statearr_26393 = state_26375;(statearr_26393[(13)] = inst_26368);
return statearr_26393;
})();var statearr_26394_26417 = state_26375__$1;(statearr_26394_26417[(2)] = inst_26369);
(statearr_26394_26417[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26376 === (10)))
{var inst_26358 = (state_26375[(2)]);var state_26375__$1 = state_26375;var statearr_26395_26418 = state_26375__$1;(statearr_26395_26418[(2)] = inst_26358);
(statearr_26395_26418[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26376 === (8)))
{var inst_26343 = (state_26375[(10)]);var inst_26335 = (state_26375[(8)]);var inst_26339 = (state_26375[(9)]);var inst_26348 = inst_26335.push(inst_26339);var tmp26392 = inst_26335;var inst_26335__$1 = tmp26392;var inst_26336 = inst_26343;var state_26375__$1 = (function (){var statearr_26396 = state_26375;(statearr_26396[(14)] = inst_26348);
(statearr_26396[(7)] = inst_26336);
(statearr_26396[(8)] = inst_26335__$1);
return statearr_26396;
})();var statearr_26397_26419 = state_26375__$1;(statearr_26397_26419[(2)] = null);
(statearr_26397_26419[(1)] = (2));
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
});})(c__9125__auto___26405,out))
;return ((function (switch__9110__auto__,c__9125__auto___26405,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26401[(0)] = state_machine__9111__auto__);
(statearr_26401[(1)] = (1));
return statearr_26401;
});
var state_machine__9111__auto____1 = (function (state_26375){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26375);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26402){if((e26402 instanceof Object))
{var ex__9114__auto__ = e26402;var statearr_26403_26420 = state_26375;(statearr_26403_26420[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26375);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26402;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26421 = state_26375;
state_26375 = G__26421;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26375){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26405,out))
})();var state__9127__auto__ = (function (){var statearr_26404 = f__9126__auto__.call(null);(statearr_26404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26405);
return statearr_26404;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26405,out))
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
