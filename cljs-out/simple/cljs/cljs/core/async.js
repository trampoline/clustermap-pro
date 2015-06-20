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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23353 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23353 = (function (f,fn_handler,meta23354){
this.f = f;
this.fn_handler = fn_handler;
this.meta23354 = meta23354;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23353.cljs$lang$type = true;
cljs.core.async.t23353.cljs$lang$ctorStr = "cljs.core.async/t23353";
cljs.core.async.t23353.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23353");
});
cljs.core.async.t23353.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23353.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23353.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23355){var self__ = this;
var _23355__$1 = this;return self__.meta23354;
});
cljs.core.async.t23353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23355,meta23354__$1){var self__ = this;
var _23355__$1 = this;return (new cljs.core.async.t23353(self__.f,self__.fn_handler,meta23354__$1));
});
cljs.core.async.__GT_t23353 = (function __GT_t23353(f__$1,fn_handler__$1,meta23354){return (new cljs.core.async.t23353(f__$1,fn_handler__$1,meta23354));
});
}
return (new cljs.core.async.t23353(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23357 = buff;if(G__23357)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__23357.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23357.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23357);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23357);
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
{var val_23358 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23358);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_23358,ret){
return (function (){return fn1.call(null,val_23358);
});})(val_23358,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___23359 = n;var x_23360 = (0);while(true){
if((x_23360 < n__4508__auto___23359))
{(a[x_23360] = (0));
{
var G__23361 = (x_23360 + (1));
x_23360 = G__23361;
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
var G__23362 = (i + (1));
i = G__23362;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23366 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23366 = (function (flag,alt_flag,meta23367){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23367 = meta23367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23366.cljs$lang$type = true;
cljs.core.async.t23366.cljs$lang$ctorStr = "cljs.core.async/t23366";
cljs.core.async.t23366.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23366");
});})(flag))
;
cljs.core.async.t23366.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23366.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t23366.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t23366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23368){var self__ = this;
var _23368__$1 = this;return self__.meta23367;
});})(flag))
;
cljs.core.async.t23366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23368,meta23367__$1){var self__ = this;
var _23368__$1 = this;return (new cljs.core.async.t23366(self__.flag,self__.alt_flag,meta23367__$1));
});})(flag))
;
cljs.core.async.__GT_t23366 = ((function (flag){
return (function __GT_t23366(flag__$1,alt_flag__$1,meta23367){return (new cljs.core.async.t23366(flag__$1,alt_flag__$1,meta23367));
});})(flag))
;
}
return (new cljs.core.async.t23366(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23372 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23372 = (function (cb,flag,alt_handler,meta23373){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23373 = meta23373;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23372.cljs$lang$type = true;
cljs.core.async.t23372.cljs$lang$ctorStr = "cljs.core.async/t23372";
cljs.core.async.t23372.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23372");
});
cljs.core.async.t23372.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23372.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23372.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23374){var self__ = this;
var _23374__$1 = this;return self__.meta23373;
});
cljs.core.async.t23372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23374,meta23373__$1){var self__ = this;
var _23374__$1 = this;return (new cljs.core.async.t23372(self__.cb,self__.flag,self__.alt_handler,meta23373__$1));
});
cljs.core.async.__GT_t23372 = (function __GT_t23372(cb__$1,flag__$1,alt_handler__$1,meta23373){return (new cljs.core.async.t23372(cb__$1,flag__$1,alt_handler__$1,meta23373));
});
}
return (new cljs.core.async.t23372(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23375_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23375_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23376_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23376_SHARP_,port], null));
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
var G__23377 = (i + (1));
i = G__23377;
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
var alts_BANG___delegate = function (ports,p__23378){var map__23380 = p__23378;var map__23380__$1 = ((cljs.core.seq_QMARK_.call(null,map__23380))?cljs.core.apply.call(null,cljs.core.hash_map,map__23380):map__23380);var opts = map__23380__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23378 = null;if (arguments.length > 1) {
  p__23378 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23378);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23381){
var ports = cljs.core.first(arglist__23381);
var p__23378 = cljs.core.rest(arglist__23381);
return alts_BANG___delegate(ports,p__23378);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__9125__auto___23476 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23476){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23476){
return (function (state_23452){var state_val_23453 = (state_23452[(1)]);if((state_val_23453 === (7)))
{var inst_23448 = (state_23452[(2)]);var state_23452__$1 = state_23452;var statearr_23454_23477 = state_23452__$1;(statearr_23454_23477[(2)] = inst_23448);
(statearr_23454_23477[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23453 === (1)))
{var state_23452__$1 = state_23452;var statearr_23455_23478 = state_23452__$1;(statearr_23455_23478[(2)] = null);
(statearr_23455_23478[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23453 === (4)))
{var inst_23431 = (state_23452[(7)]);var inst_23431__$1 = (state_23452[(2)]);var inst_23432 = (inst_23431__$1 == null);var state_23452__$1 = (function (){var statearr_23456 = state_23452;(statearr_23456[(7)] = inst_23431__$1);
return statearr_23456;
})();if(cljs.core.truth_(inst_23432))
{var statearr_23457_23479 = state_23452__$1;(statearr_23457_23479[(1)] = (5));
} else
{var statearr_23458_23480 = state_23452__$1;(statearr_23458_23480[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23453 === (13)))
{var state_23452__$1 = state_23452;var statearr_23459_23481 = state_23452__$1;(statearr_23459_23481[(2)] = null);
(statearr_23459_23481[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23453 === (6)))
{var inst_23431 = (state_23452[(7)]);var state_23452__$1 = state_23452;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23452__$1,(11),to,inst_23431);
} else
{if((state_val_23453 === (3)))
{var inst_23450 = (state_23452[(2)]);var state_23452__$1 = state_23452;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23452__$1,inst_23450);
} else
{if((state_val_23453 === (12)))
{var state_23452__$1 = state_23452;var statearr_23460_23482 = state_23452__$1;(statearr_23460_23482[(2)] = null);
(statearr_23460_23482[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23453 === (2)))
{var state_23452__$1 = state_23452;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23452__$1,(4),from);
} else
{if((state_val_23453 === (11)))
{var inst_23441 = (state_23452[(2)]);var state_23452__$1 = state_23452;if(cljs.core.truth_(inst_23441))
{var statearr_23461_23483 = state_23452__$1;(statearr_23461_23483[(1)] = (12));
} else
{var statearr_23462_23484 = state_23452__$1;(statearr_23462_23484[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23453 === (9)))
{var state_23452__$1 = state_23452;var statearr_23463_23485 = state_23452__$1;(statearr_23463_23485[(2)] = null);
(statearr_23463_23485[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23453 === (5)))
{var state_23452__$1 = state_23452;if(cljs.core.truth_(close_QMARK_))
{var statearr_23464_23486 = state_23452__$1;(statearr_23464_23486[(1)] = (8));
} else
{var statearr_23465_23487 = state_23452__$1;(statearr_23465_23487[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23453 === (14)))
{var inst_23446 = (state_23452[(2)]);var state_23452__$1 = state_23452;var statearr_23466_23488 = state_23452__$1;(statearr_23466_23488[(2)] = inst_23446);
(statearr_23466_23488[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23453 === (10)))
{var inst_23438 = (state_23452[(2)]);var state_23452__$1 = state_23452;var statearr_23467_23489 = state_23452__$1;(statearr_23467_23489[(2)] = inst_23438);
(statearr_23467_23489[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23453 === (8)))
{var inst_23435 = cljs.core.async.close_BANG_.call(null,to);var state_23452__$1 = state_23452;var statearr_23468_23490 = state_23452__$1;(statearr_23468_23490[(2)] = inst_23435);
(statearr_23468_23490[(1)] = (10));
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
});})(c__9125__auto___23476))
;return ((function (switch__9110__auto__,c__9125__auto___23476){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23472 = [null,null,null,null,null,null,null,null];(statearr_23472[(0)] = state_machine__9111__auto__);
(statearr_23472[(1)] = (1));
return statearr_23472;
});
var state_machine__9111__auto____1 = (function (state_23452){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23452);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23473){if((e23473 instanceof Object))
{var ex__9114__auto__ = e23473;var statearr_23474_23491 = state_23452;(statearr_23474_23491[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23452);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23473;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23492 = state_23452;
state_23452 = G__23492;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23452){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23476))
})();var state__9127__auto__ = (function (){var statearr_23475 = f__9126__auto__.call(null);(statearr_23475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23476);
return statearr_23475;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23476))
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
return (function (p__23676){var vec__23677 = p__23676;var v = cljs.core.nth.call(null,vec__23677,(0),null);var p = cljs.core.nth.call(null,vec__23677,(1),null);var job = vec__23677;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__9125__auto___23859 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23859,res,vec__23677,v,p,job,jobs,results){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23859,res,vec__23677,v,p,job,jobs,results){
return (function (state_23682){var state_val_23683 = (state_23682[(1)]);if((state_val_23683 === (2)))
{var inst_23679 = (state_23682[(2)]);var inst_23680 = cljs.core.async.close_BANG_.call(null,res);var state_23682__$1 = (function (){var statearr_23684 = state_23682;(statearr_23684[(7)] = inst_23679);
return statearr_23684;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23682__$1,inst_23680);
} else
{if((state_val_23683 === (1)))
{var state_23682__$1 = state_23682;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23682__$1,(2),res,v);
} else
{return null;
}
}
});})(c__9125__auto___23859,res,vec__23677,v,p,job,jobs,results))
;return ((function (switch__9110__auto__,c__9125__auto___23859,res,vec__23677,v,p,job,jobs,results){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23688 = [null,null,null,null,null,null,null,null];(statearr_23688[(0)] = state_machine__9111__auto__);
(statearr_23688[(1)] = (1));
return statearr_23688;
});
var state_machine__9111__auto____1 = (function (state_23682){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23682);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23689){if((e23689 instanceof Object))
{var ex__9114__auto__ = e23689;var statearr_23690_23860 = state_23682;(statearr_23690_23860[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23682);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23689;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23861 = state_23682;
state_23682 = G__23861;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23682){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23859,res,vec__23677,v,p,job,jobs,results))
})();var state__9127__auto__ = (function (){var statearr_23691 = f__9126__auto__.call(null);(statearr_23691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23859);
return statearr_23691;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23859,res,vec__23677,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__23692){var vec__23693 = p__23692;var v = cljs.core.nth.call(null,vec__23693,(0),null);var p = cljs.core.nth.call(null,vec__23693,(1),null);var job = vec__23693;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___23862 = n;var __23863 = (0);while(true){
if((__23863 < n__4508__auto___23862))
{var G__23694_23864 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__23694_23864) {
case "async":
var c__9125__auto___23866 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23863,c__9125__auto___23866,G__23694_23864,n__4508__auto___23862,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__23863,c__9125__auto___23866,G__23694_23864,n__4508__auto___23862,jobs,results,process,async){
return (function (state_23707){var state_val_23708 = (state_23707[(1)]);if((state_val_23708 === (7)))
{var inst_23703 = (state_23707[(2)]);var state_23707__$1 = state_23707;var statearr_23709_23867 = state_23707__$1;(statearr_23709_23867[(2)] = inst_23703);
(statearr_23709_23867[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23708 === (6)))
{var state_23707__$1 = state_23707;var statearr_23710_23868 = state_23707__$1;(statearr_23710_23868[(2)] = null);
(statearr_23710_23868[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23708 === (5)))
{var state_23707__$1 = state_23707;var statearr_23711_23869 = state_23707__$1;(statearr_23711_23869[(2)] = null);
(statearr_23711_23869[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23708 === (4)))
{var inst_23697 = (state_23707[(2)]);var inst_23698 = async.call(null,inst_23697);var state_23707__$1 = state_23707;if(cljs.core.truth_(inst_23698))
{var statearr_23712_23870 = state_23707__$1;(statearr_23712_23870[(1)] = (5));
} else
{var statearr_23713_23871 = state_23707__$1;(statearr_23713_23871[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23708 === (3)))
{var inst_23705 = (state_23707[(2)]);var state_23707__$1 = state_23707;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23707__$1,inst_23705);
} else
{if((state_val_23708 === (2)))
{var state_23707__$1 = state_23707;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23707__$1,(4),jobs);
} else
{if((state_val_23708 === (1)))
{var state_23707__$1 = state_23707;var statearr_23714_23872 = state_23707__$1;(statearr_23714_23872[(2)] = null);
(statearr_23714_23872[(1)] = (2));
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
});})(__23863,c__9125__auto___23866,G__23694_23864,n__4508__auto___23862,jobs,results,process,async))
;return ((function (__23863,switch__9110__auto__,c__9125__auto___23866,G__23694_23864,n__4508__auto___23862,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23718 = [null,null,null,null,null,null,null];(statearr_23718[(0)] = state_machine__9111__auto__);
(statearr_23718[(1)] = (1));
return statearr_23718;
});
var state_machine__9111__auto____1 = (function (state_23707){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23707);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23719){if((e23719 instanceof Object))
{var ex__9114__auto__ = e23719;var statearr_23720_23873 = state_23707;(statearr_23720_23873[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23707);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23719;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23874 = state_23707;
state_23707 = G__23874;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23707){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__23863,switch__9110__auto__,c__9125__auto___23866,G__23694_23864,n__4508__auto___23862,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23721 = f__9126__auto__.call(null);(statearr_23721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23866);
return statearr_23721;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__23863,c__9125__auto___23866,G__23694_23864,n__4508__auto___23862,jobs,results,process,async))
);

break;
case "compute":
var c__9125__auto___23875 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23863,c__9125__auto___23875,G__23694_23864,n__4508__auto___23862,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__23863,c__9125__auto___23875,G__23694_23864,n__4508__auto___23862,jobs,results,process,async){
return (function (state_23734){var state_val_23735 = (state_23734[(1)]);if((state_val_23735 === (7)))
{var inst_23730 = (state_23734[(2)]);var state_23734__$1 = state_23734;var statearr_23736_23876 = state_23734__$1;(statearr_23736_23876[(2)] = inst_23730);
(statearr_23736_23876[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23735 === (6)))
{var state_23734__$1 = state_23734;var statearr_23737_23877 = state_23734__$1;(statearr_23737_23877[(2)] = null);
(statearr_23737_23877[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23735 === (5)))
{var state_23734__$1 = state_23734;var statearr_23738_23878 = state_23734__$1;(statearr_23738_23878[(2)] = null);
(statearr_23738_23878[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23735 === (4)))
{var inst_23724 = (state_23734[(2)]);var inst_23725 = process.call(null,inst_23724);var state_23734__$1 = state_23734;if(cljs.core.truth_(inst_23725))
{var statearr_23739_23879 = state_23734__$1;(statearr_23739_23879[(1)] = (5));
} else
{var statearr_23740_23880 = state_23734__$1;(statearr_23740_23880[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23735 === (3)))
{var inst_23732 = (state_23734[(2)]);var state_23734__$1 = state_23734;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23734__$1,inst_23732);
} else
{if((state_val_23735 === (2)))
{var state_23734__$1 = state_23734;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23734__$1,(4),jobs);
} else
{if((state_val_23735 === (1)))
{var state_23734__$1 = state_23734;var statearr_23741_23881 = state_23734__$1;(statearr_23741_23881[(2)] = null);
(statearr_23741_23881[(1)] = (2));
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
});})(__23863,c__9125__auto___23875,G__23694_23864,n__4508__auto___23862,jobs,results,process,async))
;return ((function (__23863,switch__9110__auto__,c__9125__auto___23875,G__23694_23864,n__4508__auto___23862,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23745 = [null,null,null,null,null,null,null];(statearr_23745[(0)] = state_machine__9111__auto__);
(statearr_23745[(1)] = (1));
return statearr_23745;
});
var state_machine__9111__auto____1 = (function (state_23734){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23734);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23746){if((e23746 instanceof Object))
{var ex__9114__auto__ = e23746;var statearr_23747_23882 = state_23734;(statearr_23747_23882[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23734);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23746;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23883 = state_23734;
state_23734 = G__23883;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23734){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__23863,switch__9110__auto__,c__9125__auto___23875,G__23694_23864,n__4508__auto___23862,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23748 = f__9126__auto__.call(null);(statearr_23748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23875);
return statearr_23748;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__23863,c__9125__auto___23875,G__23694_23864,n__4508__auto___23862,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__23884 = (__23863 + (1));
__23863 = G__23884;
continue;
}
} else
{}
break;
}
var c__9125__auto___23885 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23885,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23885,jobs,results,process,async){
return (function (state_23770){var state_val_23771 = (state_23770[(1)]);if((state_val_23771 === (9)))
{var inst_23763 = (state_23770[(2)]);var state_23770__$1 = (function (){var statearr_23772 = state_23770;(statearr_23772[(7)] = inst_23763);
return statearr_23772;
})();var statearr_23773_23886 = state_23770__$1;(statearr_23773_23886[(2)] = null);
(statearr_23773_23886[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23771 === (8)))
{var inst_23756 = (state_23770[(8)]);var inst_23761 = (state_23770[(2)]);var state_23770__$1 = (function (){var statearr_23774 = state_23770;(statearr_23774[(9)] = inst_23761);
return statearr_23774;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23770__$1,(9),results,inst_23756);
} else
{if((state_val_23771 === (7)))
{var inst_23766 = (state_23770[(2)]);var state_23770__$1 = state_23770;var statearr_23775_23887 = state_23770__$1;(statearr_23775_23887[(2)] = inst_23766);
(statearr_23775_23887[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23771 === (6)))
{var inst_23756 = (state_23770[(8)]);var inst_23751 = (state_23770[(10)]);var inst_23756__$1 = cljs.core.async.chan.call(null,(1));var inst_23757 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23758 = [inst_23751,inst_23756__$1];var inst_23759 = (new cljs.core.PersistentVector(null,2,(5),inst_23757,inst_23758,null));var state_23770__$1 = (function (){var statearr_23776 = state_23770;(statearr_23776[(8)] = inst_23756__$1);
return statearr_23776;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23770__$1,(8),jobs,inst_23759);
} else
{if((state_val_23771 === (5)))
{var inst_23754 = cljs.core.async.close_BANG_.call(null,jobs);var state_23770__$1 = state_23770;var statearr_23777_23888 = state_23770__$1;(statearr_23777_23888[(2)] = inst_23754);
(statearr_23777_23888[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23771 === (4)))
{var inst_23751 = (state_23770[(10)]);var inst_23751__$1 = (state_23770[(2)]);var inst_23752 = (inst_23751__$1 == null);var state_23770__$1 = (function (){var statearr_23778 = state_23770;(statearr_23778[(10)] = inst_23751__$1);
return statearr_23778;
})();if(cljs.core.truth_(inst_23752))
{var statearr_23779_23889 = state_23770__$1;(statearr_23779_23889[(1)] = (5));
} else
{var statearr_23780_23890 = state_23770__$1;(statearr_23780_23890[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23771 === (3)))
{var inst_23768 = (state_23770[(2)]);var state_23770__$1 = state_23770;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23770__$1,inst_23768);
} else
{if((state_val_23771 === (2)))
{var state_23770__$1 = state_23770;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23770__$1,(4),from);
} else
{if((state_val_23771 === (1)))
{var state_23770__$1 = state_23770;var statearr_23781_23891 = state_23770__$1;(statearr_23781_23891[(2)] = null);
(statearr_23781_23891[(1)] = (2));
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
});})(c__9125__auto___23885,jobs,results,process,async))
;return ((function (switch__9110__auto__,c__9125__auto___23885,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23785 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23785[(0)] = state_machine__9111__auto__);
(statearr_23785[(1)] = (1));
return statearr_23785;
});
var state_machine__9111__auto____1 = (function (state_23770){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23770);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23786){if((e23786 instanceof Object))
{var ex__9114__auto__ = e23786;var statearr_23787_23892 = state_23770;(statearr_23787_23892[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23770);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23786;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23893 = state_23770;
state_23770 = G__23893;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23770){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23885,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23788 = f__9126__auto__.call(null);(statearr_23788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23885);
return statearr_23788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23885,jobs,results,process,async))
);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,jobs,results,process,async){
return (function (state_23826){var state_val_23827 = (state_23826[(1)]);if((state_val_23827 === (7)))
{var inst_23822 = (state_23826[(2)]);var state_23826__$1 = state_23826;var statearr_23828_23894 = state_23826__$1;(statearr_23828_23894[(2)] = inst_23822);
(statearr_23828_23894[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23827 === (20)))
{var state_23826__$1 = state_23826;var statearr_23829_23895 = state_23826__$1;(statearr_23829_23895[(2)] = null);
(statearr_23829_23895[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23827 === (1)))
{var state_23826__$1 = state_23826;var statearr_23830_23896 = state_23826__$1;(statearr_23830_23896[(2)] = null);
(statearr_23830_23896[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23827 === (4)))
{var inst_23791 = (state_23826[(7)]);var inst_23791__$1 = (state_23826[(2)]);var inst_23792 = (inst_23791__$1 == null);var state_23826__$1 = (function (){var statearr_23831 = state_23826;(statearr_23831[(7)] = inst_23791__$1);
return statearr_23831;
})();if(cljs.core.truth_(inst_23792))
{var statearr_23832_23897 = state_23826__$1;(statearr_23832_23897[(1)] = (5));
} else
{var statearr_23833_23898 = state_23826__$1;(statearr_23833_23898[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23827 === (15)))
{var inst_23804 = (state_23826[(8)]);var state_23826__$1 = state_23826;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23826__$1,(18),to,inst_23804);
} else
{if((state_val_23827 === (21)))
{var inst_23817 = (state_23826[(2)]);var state_23826__$1 = state_23826;var statearr_23834_23899 = state_23826__$1;(statearr_23834_23899[(2)] = inst_23817);
(statearr_23834_23899[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23827 === (13)))
{var inst_23819 = (state_23826[(2)]);var state_23826__$1 = (function (){var statearr_23835 = state_23826;(statearr_23835[(9)] = inst_23819);
return statearr_23835;
})();var statearr_23836_23900 = state_23826__$1;(statearr_23836_23900[(2)] = null);
(statearr_23836_23900[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23827 === (6)))
{var inst_23791 = (state_23826[(7)]);var state_23826__$1 = state_23826;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23826__$1,(11),inst_23791);
} else
{if((state_val_23827 === (17)))
{var inst_23812 = (state_23826[(2)]);var state_23826__$1 = state_23826;if(cljs.core.truth_(inst_23812))
{var statearr_23837_23901 = state_23826__$1;(statearr_23837_23901[(1)] = (19));
} else
{var statearr_23838_23902 = state_23826__$1;(statearr_23838_23902[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23827 === (3)))
{var inst_23824 = (state_23826[(2)]);var state_23826__$1 = state_23826;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23826__$1,inst_23824);
} else
{if((state_val_23827 === (12)))
{var inst_23801 = (state_23826[(10)]);var state_23826__$1 = state_23826;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23826__$1,(14),inst_23801);
} else
{if((state_val_23827 === (2)))
{var state_23826__$1 = state_23826;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23826__$1,(4),results);
} else
{if((state_val_23827 === (19)))
{var state_23826__$1 = state_23826;var statearr_23839_23903 = state_23826__$1;(statearr_23839_23903[(2)] = null);
(statearr_23839_23903[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23827 === (11)))
{var inst_23801 = (state_23826[(2)]);var state_23826__$1 = (function (){var statearr_23840 = state_23826;(statearr_23840[(10)] = inst_23801);
return statearr_23840;
})();var statearr_23841_23904 = state_23826__$1;(statearr_23841_23904[(2)] = null);
(statearr_23841_23904[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23827 === (9)))
{var state_23826__$1 = state_23826;var statearr_23842_23905 = state_23826__$1;(statearr_23842_23905[(2)] = null);
(statearr_23842_23905[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23827 === (5)))
{var state_23826__$1 = state_23826;if(cljs.core.truth_(close_QMARK_))
{var statearr_23843_23906 = state_23826__$1;(statearr_23843_23906[(1)] = (8));
} else
{var statearr_23844_23907 = state_23826__$1;(statearr_23844_23907[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23827 === (14)))
{var inst_23806 = (state_23826[(11)]);var inst_23804 = (state_23826[(8)]);var inst_23804__$1 = (state_23826[(2)]);var inst_23805 = (inst_23804__$1 == null);var inst_23806__$1 = cljs.core.not.call(null,inst_23805);var state_23826__$1 = (function (){var statearr_23845 = state_23826;(statearr_23845[(11)] = inst_23806__$1);
(statearr_23845[(8)] = inst_23804__$1);
return statearr_23845;
})();if(inst_23806__$1)
{var statearr_23846_23908 = state_23826__$1;(statearr_23846_23908[(1)] = (15));
} else
{var statearr_23847_23909 = state_23826__$1;(statearr_23847_23909[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23827 === (16)))
{var inst_23806 = (state_23826[(11)]);var state_23826__$1 = state_23826;var statearr_23848_23910 = state_23826__$1;(statearr_23848_23910[(2)] = inst_23806);
(statearr_23848_23910[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23827 === (10)))
{var inst_23798 = (state_23826[(2)]);var state_23826__$1 = state_23826;var statearr_23849_23911 = state_23826__$1;(statearr_23849_23911[(2)] = inst_23798);
(statearr_23849_23911[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23827 === (18)))
{var inst_23809 = (state_23826[(2)]);var state_23826__$1 = state_23826;var statearr_23850_23912 = state_23826__$1;(statearr_23850_23912[(2)] = inst_23809);
(statearr_23850_23912[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23827 === (8)))
{var inst_23795 = cljs.core.async.close_BANG_.call(null,to);var state_23826__$1 = state_23826;var statearr_23851_23913 = state_23826__$1;(statearr_23851_23913[(2)] = inst_23795);
(statearr_23851_23913[(1)] = (10));
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
var state_machine__9111__auto____0 = (function (){var statearr_23855 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23855[(0)] = state_machine__9111__auto__);
(statearr_23855[(1)] = (1));
return statearr_23855;
});
var state_machine__9111__auto____1 = (function (state_23826){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23826);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23856){if((e23856 instanceof Object))
{var ex__9114__auto__ = e23856;var statearr_23857_23914 = state_23826;(statearr_23857_23914[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23826);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23856;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23915 = state_23826;
state_23826 = G__23915;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23826){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23858 = f__9126__auto__.call(null);(statearr_23858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_23858;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__9125__auto___24016 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24016,tc,fc){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24016,tc,fc){
return (function (state_23991){var state_val_23992 = (state_23991[(1)]);if((state_val_23992 === (7)))
{var inst_23987 = (state_23991[(2)]);var state_23991__$1 = state_23991;var statearr_23993_24017 = state_23991__$1;(statearr_23993_24017[(2)] = inst_23987);
(statearr_23993_24017[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23992 === (1)))
{var state_23991__$1 = state_23991;var statearr_23994_24018 = state_23991__$1;(statearr_23994_24018[(2)] = null);
(statearr_23994_24018[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23992 === (4)))
{var inst_23968 = (state_23991[(7)]);var inst_23968__$1 = (state_23991[(2)]);var inst_23969 = (inst_23968__$1 == null);var state_23991__$1 = (function (){var statearr_23995 = state_23991;(statearr_23995[(7)] = inst_23968__$1);
return statearr_23995;
})();if(cljs.core.truth_(inst_23969))
{var statearr_23996_24019 = state_23991__$1;(statearr_23996_24019[(1)] = (5));
} else
{var statearr_23997_24020 = state_23991__$1;(statearr_23997_24020[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23992 === (13)))
{var state_23991__$1 = state_23991;var statearr_23998_24021 = state_23991__$1;(statearr_23998_24021[(2)] = null);
(statearr_23998_24021[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23992 === (6)))
{var inst_23968 = (state_23991[(7)]);var inst_23974 = p.call(null,inst_23968);var state_23991__$1 = state_23991;if(cljs.core.truth_(inst_23974))
{var statearr_23999_24022 = state_23991__$1;(statearr_23999_24022[(1)] = (9));
} else
{var statearr_24000_24023 = state_23991__$1;(statearr_24000_24023[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23992 === (3)))
{var inst_23989 = (state_23991[(2)]);var state_23991__$1 = state_23991;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23991__$1,inst_23989);
} else
{if((state_val_23992 === (12)))
{var state_23991__$1 = state_23991;var statearr_24001_24024 = state_23991__$1;(statearr_24001_24024[(2)] = null);
(statearr_24001_24024[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23992 === (2)))
{var state_23991__$1 = state_23991;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23991__$1,(4),ch);
} else
{if((state_val_23992 === (11)))
{var inst_23968 = (state_23991[(7)]);var inst_23978 = (state_23991[(2)]);var state_23991__$1 = state_23991;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23991__$1,(8),inst_23978,inst_23968);
} else
{if((state_val_23992 === (9)))
{var state_23991__$1 = state_23991;var statearr_24002_24025 = state_23991__$1;(statearr_24002_24025[(2)] = tc);
(statearr_24002_24025[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23992 === (5)))
{var inst_23971 = cljs.core.async.close_BANG_.call(null,tc);var inst_23972 = cljs.core.async.close_BANG_.call(null,fc);var state_23991__$1 = (function (){var statearr_24003 = state_23991;(statearr_24003[(8)] = inst_23971);
return statearr_24003;
})();var statearr_24004_24026 = state_23991__$1;(statearr_24004_24026[(2)] = inst_23972);
(statearr_24004_24026[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23992 === (14)))
{var inst_23985 = (state_23991[(2)]);var state_23991__$1 = state_23991;var statearr_24005_24027 = state_23991__$1;(statearr_24005_24027[(2)] = inst_23985);
(statearr_24005_24027[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23992 === (10)))
{var state_23991__$1 = state_23991;var statearr_24006_24028 = state_23991__$1;(statearr_24006_24028[(2)] = fc);
(statearr_24006_24028[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23992 === (8)))
{var inst_23980 = (state_23991[(2)]);var state_23991__$1 = state_23991;if(cljs.core.truth_(inst_23980))
{var statearr_24007_24029 = state_23991__$1;(statearr_24007_24029[(1)] = (12));
} else
{var statearr_24008_24030 = state_23991__$1;(statearr_24008_24030[(1)] = (13));
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
});})(c__9125__auto___24016,tc,fc))
;return ((function (switch__9110__auto__,c__9125__auto___24016,tc,fc){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24012 = [null,null,null,null,null,null,null,null,null];(statearr_24012[(0)] = state_machine__9111__auto__);
(statearr_24012[(1)] = (1));
return statearr_24012;
});
var state_machine__9111__auto____1 = (function (state_23991){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23991);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24013){if((e24013 instanceof Object))
{var ex__9114__auto__ = e24013;var statearr_24014_24031 = state_23991;(statearr_24014_24031[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23991);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24013;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24032 = state_23991;
state_23991 = G__24032;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23991){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24016,tc,fc))
})();var state__9127__auto__ = (function (){var statearr_24015 = f__9126__auto__.call(null);(statearr_24015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24016);
return statearr_24015;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24016,tc,fc))
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
return (function (state_24079){var state_val_24080 = (state_24079[(1)]);if((state_val_24080 === (7)))
{var inst_24075 = (state_24079[(2)]);var state_24079__$1 = state_24079;var statearr_24081_24097 = state_24079__$1;(statearr_24081_24097[(2)] = inst_24075);
(statearr_24081_24097[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24080 === (6)))
{var inst_24068 = (state_24079[(7)]);var inst_24065 = (state_24079[(8)]);var inst_24072 = f.call(null,inst_24065,inst_24068);var inst_24065__$1 = inst_24072;var state_24079__$1 = (function (){var statearr_24082 = state_24079;(statearr_24082[(8)] = inst_24065__$1);
return statearr_24082;
})();var statearr_24083_24098 = state_24079__$1;(statearr_24083_24098[(2)] = null);
(statearr_24083_24098[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24080 === (5)))
{var inst_24065 = (state_24079[(8)]);var state_24079__$1 = state_24079;var statearr_24084_24099 = state_24079__$1;(statearr_24084_24099[(2)] = inst_24065);
(statearr_24084_24099[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24080 === (4)))
{var inst_24068 = (state_24079[(7)]);var inst_24068__$1 = (state_24079[(2)]);var inst_24069 = (inst_24068__$1 == null);var state_24079__$1 = (function (){var statearr_24085 = state_24079;(statearr_24085[(7)] = inst_24068__$1);
return statearr_24085;
})();if(cljs.core.truth_(inst_24069))
{var statearr_24086_24100 = state_24079__$1;(statearr_24086_24100[(1)] = (5));
} else
{var statearr_24087_24101 = state_24079__$1;(statearr_24087_24101[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24080 === (3)))
{var inst_24077 = (state_24079[(2)]);var state_24079__$1 = state_24079;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24079__$1,inst_24077);
} else
{if((state_val_24080 === (2)))
{var state_24079__$1 = state_24079;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24079__$1,(4),ch);
} else
{if((state_val_24080 === (1)))
{var inst_24065 = init;var state_24079__$1 = (function (){var statearr_24088 = state_24079;(statearr_24088[(8)] = inst_24065);
return statearr_24088;
})();var statearr_24089_24102 = state_24079__$1;(statearr_24089_24102[(2)] = null);
(statearr_24089_24102[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_24093 = [null,null,null,null,null,null,null,null,null];(statearr_24093[(0)] = state_machine__9111__auto__);
(statearr_24093[(1)] = (1));
return statearr_24093;
});
var state_machine__9111__auto____1 = (function (state_24079){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24079);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24094){if((e24094 instanceof Object))
{var ex__9114__auto__ = e24094;var statearr_24095_24103 = state_24079;(statearr_24095_24103[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24079);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24094;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24104 = state_24079;
state_24079 = G__24104;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24079){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24096 = f__9126__auto__.call(null);(statearr_24096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24096;
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
return (function (state_24178){var state_val_24179 = (state_24178[(1)]);if((state_val_24179 === (7)))
{var inst_24160 = (state_24178[(2)]);var state_24178__$1 = state_24178;var statearr_24180_24203 = state_24178__$1;(statearr_24180_24203[(2)] = inst_24160);
(statearr_24180_24203[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24179 === (1)))
{var inst_24154 = cljs.core.seq.call(null,coll);var inst_24155 = inst_24154;var state_24178__$1 = (function (){var statearr_24181 = state_24178;(statearr_24181[(7)] = inst_24155);
return statearr_24181;
})();var statearr_24182_24204 = state_24178__$1;(statearr_24182_24204[(2)] = null);
(statearr_24182_24204[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24179 === (4)))
{var inst_24155 = (state_24178[(7)]);var inst_24158 = cljs.core.first.call(null,inst_24155);var state_24178__$1 = state_24178;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24178__$1,(7),ch,inst_24158);
} else
{if((state_val_24179 === (13)))
{var inst_24172 = (state_24178[(2)]);var state_24178__$1 = state_24178;var statearr_24183_24205 = state_24178__$1;(statearr_24183_24205[(2)] = inst_24172);
(statearr_24183_24205[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24179 === (6)))
{var inst_24163 = (state_24178[(2)]);var state_24178__$1 = state_24178;if(cljs.core.truth_(inst_24163))
{var statearr_24184_24206 = state_24178__$1;(statearr_24184_24206[(1)] = (8));
} else
{var statearr_24185_24207 = state_24178__$1;(statearr_24185_24207[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24179 === (3)))
{var inst_24176 = (state_24178[(2)]);var state_24178__$1 = state_24178;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24178__$1,inst_24176);
} else
{if((state_val_24179 === (12)))
{var state_24178__$1 = state_24178;var statearr_24186_24208 = state_24178__$1;(statearr_24186_24208[(2)] = null);
(statearr_24186_24208[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24179 === (2)))
{var inst_24155 = (state_24178[(7)]);var state_24178__$1 = state_24178;if(cljs.core.truth_(inst_24155))
{var statearr_24187_24209 = state_24178__$1;(statearr_24187_24209[(1)] = (4));
} else
{var statearr_24188_24210 = state_24178__$1;(statearr_24188_24210[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24179 === (11)))
{var inst_24169 = cljs.core.async.close_BANG_.call(null,ch);var state_24178__$1 = state_24178;var statearr_24189_24211 = state_24178__$1;(statearr_24189_24211[(2)] = inst_24169);
(statearr_24189_24211[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24179 === (9)))
{var state_24178__$1 = state_24178;if(cljs.core.truth_(close_QMARK_))
{var statearr_24190_24212 = state_24178__$1;(statearr_24190_24212[(1)] = (11));
} else
{var statearr_24191_24213 = state_24178__$1;(statearr_24191_24213[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24179 === (5)))
{var inst_24155 = (state_24178[(7)]);var state_24178__$1 = state_24178;var statearr_24192_24214 = state_24178__$1;(statearr_24192_24214[(2)] = inst_24155);
(statearr_24192_24214[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24179 === (10)))
{var inst_24174 = (state_24178[(2)]);var state_24178__$1 = state_24178;var statearr_24193_24215 = state_24178__$1;(statearr_24193_24215[(2)] = inst_24174);
(statearr_24193_24215[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24179 === (8)))
{var inst_24155 = (state_24178[(7)]);var inst_24165 = cljs.core.next.call(null,inst_24155);var inst_24155__$1 = inst_24165;var state_24178__$1 = (function (){var statearr_24194 = state_24178;(statearr_24194[(7)] = inst_24155__$1);
return statearr_24194;
})();var statearr_24195_24216 = state_24178__$1;(statearr_24195_24216[(2)] = null);
(statearr_24195_24216[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_24199 = [null,null,null,null,null,null,null,null];(statearr_24199[(0)] = state_machine__9111__auto__);
(statearr_24199[(1)] = (1));
return statearr_24199;
});
var state_machine__9111__auto____1 = (function (state_24178){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24178);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24200){if((e24200 instanceof Object))
{var ex__9114__auto__ = e24200;var statearr_24201_24217 = state_24178;(statearr_24201_24217[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24178);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24200;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24218 = state_24178;
state_24178 = G__24218;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24178){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24202 = f__9126__auto__.call(null);(statearr_24202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24202;
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
cljs.core.async.Mux = (function (){var obj24220 = {};return obj24220;
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
cljs.core.async.Mult = (function (){var obj24222 = {};return obj24222;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24444 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24444 = (function (cs,ch,mult,meta24445){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24445 = meta24445;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24444.cljs$lang$type = true;
cljs.core.async.t24444.cljs$lang$ctorStr = "cljs.core.async/t24444";
cljs.core.async.t24444.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24444");
});})(cs))
;
cljs.core.async.t24444.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24444.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24444.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24444.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24444.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24444.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24444.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24446){var self__ = this;
var _24446__$1 = this;return self__.meta24445;
});})(cs))
;
cljs.core.async.t24444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24446,meta24445__$1){var self__ = this;
var _24446__$1 = this;return (new cljs.core.async.t24444(self__.cs,self__.ch,self__.mult,meta24445__$1));
});})(cs))
;
cljs.core.async.__GT_t24444 = ((function (cs){
return (function __GT_t24444(cs__$1,ch__$1,mult__$1,meta24445){return (new cljs.core.async.t24444(cs__$1,ch__$1,mult__$1,meta24445));
});})(cs))
;
}
return (new cljs.core.async.t24444(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__9125__auto___24665 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24665,cs,m,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24665,cs,m,dchan,dctr,done){
return (function (state_24577){var state_val_24578 = (state_24577[(1)]);if((state_val_24578 === (7)))
{var inst_24573 = (state_24577[(2)]);var state_24577__$1 = state_24577;var statearr_24579_24666 = state_24577__$1;(statearr_24579_24666[(2)] = inst_24573);
(statearr_24579_24666[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (20)))
{var inst_24478 = (state_24577[(7)]);var inst_24488 = cljs.core.first.call(null,inst_24478);var inst_24489 = cljs.core.nth.call(null,inst_24488,(0),null);var inst_24490 = cljs.core.nth.call(null,inst_24488,(1),null);var state_24577__$1 = (function (){var statearr_24580 = state_24577;(statearr_24580[(8)] = inst_24489);
return statearr_24580;
})();if(cljs.core.truth_(inst_24490))
{var statearr_24581_24667 = state_24577__$1;(statearr_24581_24667[(1)] = (22));
} else
{var statearr_24582_24668 = state_24577__$1;(statearr_24582_24668[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (27)))
{var inst_24449 = (state_24577[(9)]);var inst_24520 = (state_24577[(10)]);var inst_24525 = (state_24577[(11)]);var inst_24518 = (state_24577[(12)]);var inst_24525__$1 = cljs.core._nth.call(null,inst_24518,inst_24520);var inst_24526 = cljs.core.async.put_BANG_.call(null,inst_24525__$1,inst_24449,done);var state_24577__$1 = (function (){var statearr_24583 = state_24577;(statearr_24583[(11)] = inst_24525__$1);
return statearr_24583;
})();if(cljs.core.truth_(inst_24526))
{var statearr_24584_24669 = state_24577__$1;(statearr_24584_24669[(1)] = (30));
} else
{var statearr_24585_24670 = state_24577__$1;(statearr_24585_24670[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (1)))
{var state_24577__$1 = state_24577;var statearr_24586_24671 = state_24577__$1;(statearr_24586_24671[(2)] = null);
(statearr_24586_24671[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (24)))
{var inst_24478 = (state_24577[(7)]);var inst_24495 = (state_24577[(2)]);var inst_24496 = cljs.core.next.call(null,inst_24478);var inst_24458 = inst_24496;var inst_24459 = null;var inst_24460 = (0);var inst_24461 = (0);var state_24577__$1 = (function (){var statearr_24587 = state_24577;(statearr_24587[(13)] = inst_24495);
(statearr_24587[(14)] = inst_24459);
(statearr_24587[(15)] = inst_24458);
(statearr_24587[(16)] = inst_24461);
(statearr_24587[(17)] = inst_24460);
return statearr_24587;
})();var statearr_24588_24672 = state_24577__$1;(statearr_24588_24672[(2)] = null);
(statearr_24588_24672[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (39)))
{var state_24577__$1 = state_24577;var statearr_24592_24673 = state_24577__$1;(statearr_24592_24673[(2)] = null);
(statearr_24592_24673[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (4)))
{var inst_24449 = (state_24577[(9)]);var inst_24449__$1 = (state_24577[(2)]);var inst_24450 = (inst_24449__$1 == null);var state_24577__$1 = (function (){var statearr_24593 = state_24577;(statearr_24593[(9)] = inst_24449__$1);
return statearr_24593;
})();if(cljs.core.truth_(inst_24450))
{var statearr_24594_24674 = state_24577__$1;(statearr_24594_24674[(1)] = (5));
} else
{var statearr_24595_24675 = state_24577__$1;(statearr_24595_24675[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (15)))
{var inst_24459 = (state_24577[(14)]);var inst_24458 = (state_24577[(15)]);var inst_24461 = (state_24577[(16)]);var inst_24460 = (state_24577[(17)]);var inst_24474 = (state_24577[(2)]);var inst_24475 = (inst_24461 + (1));var tmp24589 = inst_24459;var tmp24590 = inst_24458;var tmp24591 = inst_24460;var inst_24458__$1 = tmp24590;var inst_24459__$1 = tmp24589;var inst_24460__$1 = tmp24591;var inst_24461__$1 = inst_24475;var state_24577__$1 = (function (){var statearr_24596 = state_24577;(statearr_24596[(18)] = inst_24474);
(statearr_24596[(14)] = inst_24459__$1);
(statearr_24596[(15)] = inst_24458__$1);
(statearr_24596[(16)] = inst_24461__$1);
(statearr_24596[(17)] = inst_24460__$1);
return statearr_24596;
})();var statearr_24597_24676 = state_24577__$1;(statearr_24597_24676[(2)] = null);
(statearr_24597_24676[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (21)))
{var inst_24499 = (state_24577[(2)]);var state_24577__$1 = state_24577;var statearr_24601_24677 = state_24577__$1;(statearr_24601_24677[(2)] = inst_24499);
(statearr_24601_24677[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (31)))
{var inst_24525 = (state_24577[(11)]);var inst_24529 = done.call(null,null);var inst_24530 = cljs.core.async.untap_STAR_.call(null,m,inst_24525);var state_24577__$1 = (function (){var statearr_24602 = state_24577;(statearr_24602[(19)] = inst_24529);
return statearr_24602;
})();var statearr_24603_24678 = state_24577__$1;(statearr_24603_24678[(2)] = inst_24530);
(statearr_24603_24678[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (32)))
{var inst_24520 = (state_24577[(10)]);var inst_24517 = (state_24577[(20)]);var inst_24518 = (state_24577[(12)]);var inst_24519 = (state_24577[(21)]);var inst_24532 = (state_24577[(2)]);var inst_24533 = (inst_24520 + (1));var tmp24598 = inst_24517;var tmp24599 = inst_24518;var tmp24600 = inst_24519;var inst_24517__$1 = tmp24598;var inst_24518__$1 = tmp24599;var inst_24519__$1 = tmp24600;var inst_24520__$1 = inst_24533;var state_24577__$1 = (function (){var statearr_24604 = state_24577;(statearr_24604[(10)] = inst_24520__$1);
(statearr_24604[(20)] = inst_24517__$1);
(statearr_24604[(12)] = inst_24518__$1);
(statearr_24604[(22)] = inst_24532);
(statearr_24604[(21)] = inst_24519__$1);
return statearr_24604;
})();var statearr_24605_24679 = state_24577__$1;(statearr_24605_24679[(2)] = null);
(statearr_24605_24679[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (40)))
{var inst_24545 = (state_24577[(23)]);var inst_24549 = done.call(null,null);var inst_24550 = cljs.core.async.untap_STAR_.call(null,m,inst_24545);var state_24577__$1 = (function (){var statearr_24606 = state_24577;(statearr_24606[(24)] = inst_24549);
return statearr_24606;
})();var statearr_24607_24680 = state_24577__$1;(statearr_24607_24680[(2)] = inst_24550);
(statearr_24607_24680[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (33)))
{var inst_24536 = (state_24577[(25)]);var inst_24538 = cljs.core.chunked_seq_QMARK_.call(null,inst_24536);var state_24577__$1 = state_24577;if(inst_24538)
{var statearr_24608_24681 = state_24577__$1;(statearr_24608_24681[(1)] = (36));
} else
{var statearr_24609_24682 = state_24577__$1;(statearr_24609_24682[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (13)))
{var inst_24468 = (state_24577[(26)]);var inst_24471 = cljs.core.async.close_BANG_.call(null,inst_24468);var state_24577__$1 = state_24577;var statearr_24610_24683 = state_24577__$1;(statearr_24610_24683[(2)] = inst_24471);
(statearr_24610_24683[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (22)))
{var inst_24489 = (state_24577[(8)]);var inst_24492 = cljs.core.async.close_BANG_.call(null,inst_24489);var state_24577__$1 = state_24577;var statearr_24611_24684 = state_24577__$1;(statearr_24611_24684[(2)] = inst_24492);
(statearr_24611_24684[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (36)))
{var inst_24536 = (state_24577[(25)]);var inst_24540 = cljs.core.chunk_first.call(null,inst_24536);var inst_24541 = cljs.core.chunk_rest.call(null,inst_24536);var inst_24542 = cljs.core.count.call(null,inst_24540);var inst_24517 = inst_24541;var inst_24518 = inst_24540;var inst_24519 = inst_24542;var inst_24520 = (0);var state_24577__$1 = (function (){var statearr_24612 = state_24577;(statearr_24612[(10)] = inst_24520);
(statearr_24612[(20)] = inst_24517);
(statearr_24612[(12)] = inst_24518);
(statearr_24612[(21)] = inst_24519);
return statearr_24612;
})();var statearr_24613_24685 = state_24577__$1;(statearr_24613_24685[(2)] = null);
(statearr_24613_24685[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (41)))
{var inst_24536 = (state_24577[(25)]);var inst_24552 = (state_24577[(2)]);var inst_24553 = cljs.core.next.call(null,inst_24536);var inst_24517 = inst_24553;var inst_24518 = null;var inst_24519 = (0);var inst_24520 = (0);var state_24577__$1 = (function (){var statearr_24614 = state_24577;(statearr_24614[(27)] = inst_24552);
(statearr_24614[(10)] = inst_24520);
(statearr_24614[(20)] = inst_24517);
(statearr_24614[(12)] = inst_24518);
(statearr_24614[(21)] = inst_24519);
return statearr_24614;
})();var statearr_24615_24686 = state_24577__$1;(statearr_24615_24686[(2)] = null);
(statearr_24615_24686[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (43)))
{var state_24577__$1 = state_24577;var statearr_24616_24687 = state_24577__$1;(statearr_24616_24687[(2)] = null);
(statearr_24616_24687[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (29)))
{var inst_24561 = (state_24577[(2)]);var state_24577__$1 = state_24577;var statearr_24617_24688 = state_24577__$1;(statearr_24617_24688[(2)] = inst_24561);
(statearr_24617_24688[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (44)))
{var inst_24570 = (state_24577[(2)]);var state_24577__$1 = (function (){var statearr_24618 = state_24577;(statearr_24618[(28)] = inst_24570);
return statearr_24618;
})();var statearr_24619_24689 = state_24577__$1;(statearr_24619_24689[(2)] = null);
(statearr_24619_24689[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (6)))
{var inst_24509 = (state_24577[(29)]);var inst_24508 = cljs.core.deref.call(null,cs);var inst_24509__$1 = cljs.core.keys.call(null,inst_24508);var inst_24510 = cljs.core.count.call(null,inst_24509__$1);var inst_24511 = cljs.core.reset_BANG_.call(null,dctr,inst_24510);var inst_24516 = cljs.core.seq.call(null,inst_24509__$1);var inst_24517 = inst_24516;var inst_24518 = null;var inst_24519 = (0);var inst_24520 = (0);var state_24577__$1 = (function (){var statearr_24620 = state_24577;(statearr_24620[(29)] = inst_24509__$1);
(statearr_24620[(10)] = inst_24520);
(statearr_24620[(30)] = inst_24511);
(statearr_24620[(20)] = inst_24517);
(statearr_24620[(12)] = inst_24518);
(statearr_24620[(21)] = inst_24519);
return statearr_24620;
})();var statearr_24621_24690 = state_24577__$1;(statearr_24621_24690[(2)] = null);
(statearr_24621_24690[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (28)))
{var inst_24536 = (state_24577[(25)]);var inst_24517 = (state_24577[(20)]);var inst_24536__$1 = cljs.core.seq.call(null,inst_24517);var state_24577__$1 = (function (){var statearr_24622 = state_24577;(statearr_24622[(25)] = inst_24536__$1);
return statearr_24622;
})();if(inst_24536__$1)
{var statearr_24623_24691 = state_24577__$1;(statearr_24623_24691[(1)] = (33));
} else
{var statearr_24624_24692 = state_24577__$1;(statearr_24624_24692[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (25)))
{var inst_24520 = (state_24577[(10)]);var inst_24519 = (state_24577[(21)]);var inst_24522 = (inst_24520 < inst_24519);var inst_24523 = inst_24522;var state_24577__$1 = state_24577;if(cljs.core.truth_(inst_24523))
{var statearr_24625_24693 = state_24577__$1;(statearr_24625_24693[(1)] = (27));
} else
{var statearr_24626_24694 = state_24577__$1;(statearr_24626_24694[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (34)))
{var state_24577__$1 = state_24577;var statearr_24627_24695 = state_24577__$1;(statearr_24627_24695[(2)] = null);
(statearr_24627_24695[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (17)))
{var state_24577__$1 = state_24577;var statearr_24628_24696 = state_24577__$1;(statearr_24628_24696[(2)] = null);
(statearr_24628_24696[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (3)))
{var inst_24575 = (state_24577[(2)]);var state_24577__$1 = state_24577;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24577__$1,inst_24575);
} else
{if((state_val_24578 === (12)))
{var inst_24504 = (state_24577[(2)]);var state_24577__$1 = state_24577;var statearr_24629_24697 = state_24577__$1;(statearr_24629_24697[(2)] = inst_24504);
(statearr_24629_24697[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (2)))
{var state_24577__$1 = state_24577;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24577__$1,(4),ch);
} else
{if((state_val_24578 === (23)))
{var state_24577__$1 = state_24577;var statearr_24630_24698 = state_24577__$1;(statearr_24630_24698[(2)] = null);
(statearr_24630_24698[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (35)))
{var inst_24559 = (state_24577[(2)]);var state_24577__$1 = state_24577;var statearr_24631_24699 = state_24577__$1;(statearr_24631_24699[(2)] = inst_24559);
(statearr_24631_24699[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (19)))
{var inst_24478 = (state_24577[(7)]);var inst_24482 = cljs.core.chunk_first.call(null,inst_24478);var inst_24483 = cljs.core.chunk_rest.call(null,inst_24478);var inst_24484 = cljs.core.count.call(null,inst_24482);var inst_24458 = inst_24483;var inst_24459 = inst_24482;var inst_24460 = inst_24484;var inst_24461 = (0);var state_24577__$1 = (function (){var statearr_24632 = state_24577;(statearr_24632[(14)] = inst_24459);
(statearr_24632[(15)] = inst_24458);
(statearr_24632[(16)] = inst_24461);
(statearr_24632[(17)] = inst_24460);
return statearr_24632;
})();var statearr_24633_24700 = state_24577__$1;(statearr_24633_24700[(2)] = null);
(statearr_24633_24700[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (11)))
{var inst_24458 = (state_24577[(15)]);var inst_24478 = (state_24577[(7)]);var inst_24478__$1 = cljs.core.seq.call(null,inst_24458);var state_24577__$1 = (function (){var statearr_24634 = state_24577;(statearr_24634[(7)] = inst_24478__$1);
return statearr_24634;
})();if(inst_24478__$1)
{var statearr_24635_24701 = state_24577__$1;(statearr_24635_24701[(1)] = (16));
} else
{var statearr_24636_24702 = state_24577__$1;(statearr_24636_24702[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (9)))
{var inst_24506 = (state_24577[(2)]);var state_24577__$1 = state_24577;var statearr_24637_24703 = state_24577__$1;(statearr_24637_24703[(2)] = inst_24506);
(statearr_24637_24703[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (5)))
{var inst_24456 = cljs.core.deref.call(null,cs);var inst_24457 = cljs.core.seq.call(null,inst_24456);var inst_24458 = inst_24457;var inst_24459 = null;var inst_24460 = (0);var inst_24461 = (0);var state_24577__$1 = (function (){var statearr_24638 = state_24577;(statearr_24638[(14)] = inst_24459);
(statearr_24638[(15)] = inst_24458);
(statearr_24638[(16)] = inst_24461);
(statearr_24638[(17)] = inst_24460);
return statearr_24638;
})();var statearr_24639_24704 = state_24577__$1;(statearr_24639_24704[(2)] = null);
(statearr_24639_24704[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (14)))
{var state_24577__$1 = state_24577;var statearr_24640_24705 = state_24577__$1;(statearr_24640_24705[(2)] = null);
(statearr_24640_24705[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (45)))
{var inst_24567 = (state_24577[(2)]);var state_24577__$1 = state_24577;var statearr_24641_24706 = state_24577__$1;(statearr_24641_24706[(2)] = inst_24567);
(statearr_24641_24706[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (26)))
{var inst_24509 = (state_24577[(29)]);var inst_24563 = (state_24577[(2)]);var inst_24564 = cljs.core.seq.call(null,inst_24509);var state_24577__$1 = (function (){var statearr_24642 = state_24577;(statearr_24642[(31)] = inst_24563);
return statearr_24642;
})();if(inst_24564)
{var statearr_24643_24707 = state_24577__$1;(statearr_24643_24707[(1)] = (42));
} else
{var statearr_24644_24708 = state_24577__$1;(statearr_24644_24708[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (16)))
{var inst_24478 = (state_24577[(7)]);var inst_24480 = cljs.core.chunked_seq_QMARK_.call(null,inst_24478);var state_24577__$1 = state_24577;if(inst_24480)
{var statearr_24645_24709 = state_24577__$1;(statearr_24645_24709[(1)] = (19));
} else
{var statearr_24646_24710 = state_24577__$1;(statearr_24646_24710[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (38)))
{var inst_24556 = (state_24577[(2)]);var state_24577__$1 = state_24577;var statearr_24647_24711 = state_24577__$1;(statearr_24647_24711[(2)] = inst_24556);
(statearr_24647_24711[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (30)))
{var state_24577__$1 = state_24577;var statearr_24648_24712 = state_24577__$1;(statearr_24648_24712[(2)] = null);
(statearr_24648_24712[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (10)))
{var inst_24459 = (state_24577[(14)]);var inst_24461 = (state_24577[(16)]);var inst_24467 = cljs.core._nth.call(null,inst_24459,inst_24461);var inst_24468 = cljs.core.nth.call(null,inst_24467,(0),null);var inst_24469 = cljs.core.nth.call(null,inst_24467,(1),null);var state_24577__$1 = (function (){var statearr_24649 = state_24577;(statearr_24649[(26)] = inst_24468);
return statearr_24649;
})();if(cljs.core.truth_(inst_24469))
{var statearr_24650_24713 = state_24577__$1;(statearr_24650_24713[(1)] = (13));
} else
{var statearr_24651_24714 = state_24577__$1;(statearr_24651_24714[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (18)))
{var inst_24502 = (state_24577[(2)]);var state_24577__$1 = state_24577;var statearr_24652_24715 = state_24577__$1;(statearr_24652_24715[(2)] = inst_24502);
(statearr_24652_24715[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (42)))
{var state_24577__$1 = state_24577;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24577__$1,(45),dchan);
} else
{if((state_val_24578 === (37)))
{var inst_24536 = (state_24577[(25)]);var inst_24449 = (state_24577[(9)]);var inst_24545 = (state_24577[(23)]);var inst_24545__$1 = cljs.core.first.call(null,inst_24536);var inst_24546 = cljs.core.async.put_BANG_.call(null,inst_24545__$1,inst_24449,done);var state_24577__$1 = (function (){var statearr_24653 = state_24577;(statearr_24653[(23)] = inst_24545__$1);
return statearr_24653;
})();if(cljs.core.truth_(inst_24546))
{var statearr_24654_24716 = state_24577__$1;(statearr_24654_24716[(1)] = (39));
} else
{var statearr_24655_24717 = state_24577__$1;(statearr_24655_24717[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24578 === (8)))
{var inst_24461 = (state_24577[(16)]);var inst_24460 = (state_24577[(17)]);var inst_24463 = (inst_24461 < inst_24460);var inst_24464 = inst_24463;var state_24577__$1 = state_24577;if(cljs.core.truth_(inst_24464))
{var statearr_24656_24718 = state_24577__$1;(statearr_24656_24718[(1)] = (10));
} else
{var statearr_24657_24719 = state_24577__$1;(statearr_24657_24719[(1)] = (11));
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
});})(c__9125__auto___24665,cs,m,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___24665,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24661 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24661[(0)] = state_machine__9111__auto__);
(statearr_24661[(1)] = (1));
return statearr_24661;
});
var state_machine__9111__auto____1 = (function (state_24577){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24577);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24662){if((e24662 instanceof Object))
{var ex__9114__auto__ = e24662;var statearr_24663_24720 = state_24577;(statearr_24663_24720[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24577);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24662;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24721 = state_24577;
state_24577 = G__24721;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24577){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24665,cs,m,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_24664 = f__9126__auto__.call(null);(statearr_24664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24665);
return statearr_24664;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24665,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj24723 = {};return obj24723;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24724){var map__24729 = p__24724;var map__24729__$1 = ((cljs.core.seq_QMARK_.call(null,map__24729))?cljs.core.apply.call(null,cljs.core.hash_map,map__24729):map__24729);var opts = map__24729__$1;var statearr_24730_24733 = state;(statearr_24730_24733[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24729,map__24729__$1,opts){
return (function (val){var statearr_24731_24734 = state;(statearr_24731_24734[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24729,map__24729__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_24732_24735 = state;(statearr_24732_24735[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24724 = null;if (arguments.length > 3) {
  p__24724 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24724);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24736){
var state = cljs.core.first(arglist__24736);
arglist__24736 = cljs.core.next(arglist__24736);
var cont_block = cljs.core.first(arglist__24736);
arglist__24736 = cljs.core.next(arglist__24736);
var ports = cljs.core.first(arglist__24736);
var p__24724 = cljs.core.rest(arglist__24736);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24724);
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
;var m = (function (){if(typeof cljs.core.async.t24856 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24856 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24857){
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
this.meta24857 = meta24857;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24856.cljs$lang$type = true;
cljs.core.async.t24856.cljs$lang$ctorStr = "cljs.core.async/t24856";
cljs.core.async.t24856.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24856");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24856.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24856.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24856.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24856.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24856.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24856.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24856.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24856.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24856.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24858){var self__ = this;
var _24858__$1 = this;return self__.meta24857;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24858,meta24857__$1){var self__ = this;
var _24858__$1 = this;return (new cljs.core.async.t24856(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24857__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24856 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24856(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24857){return (new cljs.core.async.t24856(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24857));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24856(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__9125__auto___24975 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24975,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24975,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24928){var state_val_24929 = (state_24928[(1)]);if((state_val_24929 === (7)))
{var inst_24872 = (state_24928[(7)]);var inst_24877 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24872);var state_24928__$1 = state_24928;var statearr_24930_24976 = state_24928__$1;(statearr_24930_24976[(2)] = inst_24877);
(statearr_24930_24976[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24929 === (20)))
{var inst_24887 = (state_24928[(8)]);var state_24928__$1 = state_24928;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24928__$1,(23),out,inst_24887);
} else
{if((state_val_24929 === (1)))
{var inst_24862 = (state_24928[(9)]);var inst_24862__$1 = calc_state.call(null);var inst_24863 = cljs.core.seq_QMARK_.call(null,inst_24862__$1);var state_24928__$1 = (function (){var statearr_24931 = state_24928;(statearr_24931[(9)] = inst_24862__$1);
return statearr_24931;
})();if(inst_24863)
{var statearr_24932_24977 = state_24928__$1;(statearr_24932_24977[(1)] = (2));
} else
{var statearr_24933_24978 = state_24928__$1;(statearr_24933_24978[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24929 === (24)))
{var inst_24880 = (state_24928[(10)]);var inst_24872 = inst_24880;var state_24928__$1 = (function (){var statearr_24934 = state_24928;(statearr_24934[(7)] = inst_24872);
return statearr_24934;
})();var statearr_24935_24979 = state_24928__$1;(statearr_24935_24979[(2)] = null);
(statearr_24935_24979[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24929 === (4)))
{var inst_24862 = (state_24928[(9)]);var inst_24868 = (state_24928[(2)]);var inst_24869 = cljs.core.get.call(null,inst_24868,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24870 = cljs.core.get.call(null,inst_24868,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24871 = cljs.core.get.call(null,inst_24868,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_24872 = inst_24862;var state_24928__$1 = (function (){var statearr_24936 = state_24928;(statearr_24936[(7)] = inst_24872);
(statearr_24936[(11)] = inst_24870);
(statearr_24936[(12)] = inst_24869);
(statearr_24936[(13)] = inst_24871);
return statearr_24936;
})();var statearr_24937_24980 = state_24928__$1;(statearr_24937_24980[(2)] = null);
(statearr_24937_24980[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24929 === (15)))
{var state_24928__$1 = state_24928;var statearr_24938_24981 = state_24928__$1;(statearr_24938_24981[(2)] = null);
(statearr_24938_24981[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24929 === (21)))
{var inst_24880 = (state_24928[(10)]);var inst_24872 = inst_24880;var state_24928__$1 = (function (){var statearr_24939 = state_24928;(statearr_24939[(7)] = inst_24872);
return statearr_24939;
})();var statearr_24940_24982 = state_24928__$1;(statearr_24940_24982[(2)] = null);
(statearr_24940_24982[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24929 === (13)))
{var inst_24924 = (state_24928[(2)]);var state_24928__$1 = state_24928;var statearr_24941_24983 = state_24928__$1;(statearr_24941_24983[(2)] = inst_24924);
(statearr_24941_24983[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24929 === (22)))
{var inst_24922 = (state_24928[(2)]);var state_24928__$1 = state_24928;var statearr_24942_24984 = state_24928__$1;(statearr_24942_24984[(2)] = inst_24922);
(statearr_24942_24984[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24929 === (6)))
{var inst_24926 = (state_24928[(2)]);var state_24928__$1 = state_24928;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24928__$1,inst_24926);
} else
{if((state_val_24929 === (25)))
{var state_24928__$1 = state_24928;var statearr_24943_24985 = state_24928__$1;(statearr_24943_24985[(2)] = null);
(statearr_24943_24985[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24929 === (17)))
{var inst_24902 = (state_24928[(14)]);var state_24928__$1 = state_24928;var statearr_24944_24986 = state_24928__$1;(statearr_24944_24986[(2)] = inst_24902);
(statearr_24944_24986[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24929 === (3)))
{var inst_24862 = (state_24928[(9)]);var state_24928__$1 = state_24928;var statearr_24945_24987 = state_24928__$1;(statearr_24945_24987[(2)] = inst_24862);
(statearr_24945_24987[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24929 === (12)))
{var inst_24888 = (state_24928[(15)]);var inst_24883 = (state_24928[(16)]);var inst_24902 = (state_24928[(14)]);var inst_24902__$1 = inst_24883.call(null,inst_24888);var state_24928__$1 = (function (){var statearr_24946 = state_24928;(statearr_24946[(14)] = inst_24902__$1);
return statearr_24946;
})();if(cljs.core.truth_(inst_24902__$1))
{var statearr_24947_24988 = state_24928__$1;(statearr_24947_24988[(1)] = (17));
} else
{var statearr_24948_24989 = state_24928__$1;(statearr_24948_24989[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24929 === (2)))
{var inst_24862 = (state_24928[(9)]);var inst_24865 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24862);var state_24928__$1 = state_24928;var statearr_24949_24990 = state_24928__$1;(statearr_24949_24990[(2)] = inst_24865);
(statearr_24949_24990[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24929 === (23)))
{var inst_24913 = (state_24928[(2)]);var state_24928__$1 = state_24928;if(cljs.core.truth_(inst_24913))
{var statearr_24950_24991 = state_24928__$1;(statearr_24950_24991[(1)] = (24));
} else
{var statearr_24951_24992 = state_24928__$1;(statearr_24951_24992[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24929 === (19)))
{var inst_24910 = (state_24928[(2)]);var state_24928__$1 = state_24928;if(cljs.core.truth_(inst_24910))
{var statearr_24952_24993 = state_24928__$1;(statearr_24952_24993[(1)] = (20));
} else
{var statearr_24953_24994 = state_24928__$1;(statearr_24953_24994[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24929 === (11)))
{var inst_24887 = (state_24928[(8)]);var inst_24893 = (inst_24887 == null);var state_24928__$1 = state_24928;if(cljs.core.truth_(inst_24893))
{var statearr_24954_24995 = state_24928__$1;(statearr_24954_24995[(1)] = (14));
} else
{var statearr_24955_24996 = state_24928__$1;(statearr_24955_24996[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24929 === (9)))
{var inst_24880 = (state_24928[(10)]);var inst_24880__$1 = (state_24928[(2)]);var inst_24881 = cljs.core.get.call(null,inst_24880__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24882 = cljs.core.get.call(null,inst_24880__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24883 = cljs.core.get.call(null,inst_24880__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_24928__$1 = (function (){var statearr_24956 = state_24928;(statearr_24956[(17)] = inst_24882);
(statearr_24956[(10)] = inst_24880__$1);
(statearr_24956[(16)] = inst_24883);
return statearr_24956;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_24928__$1,(10),inst_24881);
} else
{if((state_val_24929 === (5)))
{var inst_24872 = (state_24928[(7)]);var inst_24875 = cljs.core.seq_QMARK_.call(null,inst_24872);var state_24928__$1 = state_24928;if(inst_24875)
{var statearr_24957_24997 = state_24928__$1;(statearr_24957_24997[(1)] = (7));
} else
{var statearr_24958_24998 = state_24928__$1;(statearr_24958_24998[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24929 === (14)))
{var inst_24888 = (state_24928[(15)]);var inst_24895 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24888);var state_24928__$1 = state_24928;var statearr_24959_24999 = state_24928__$1;(statearr_24959_24999[(2)] = inst_24895);
(statearr_24959_24999[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24929 === (26)))
{var inst_24918 = (state_24928[(2)]);var state_24928__$1 = state_24928;var statearr_24960_25000 = state_24928__$1;(statearr_24960_25000[(2)] = inst_24918);
(statearr_24960_25000[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24929 === (16)))
{var inst_24898 = (state_24928[(2)]);var inst_24899 = calc_state.call(null);var inst_24872 = inst_24899;var state_24928__$1 = (function (){var statearr_24961 = state_24928;(statearr_24961[(7)] = inst_24872);
(statearr_24961[(18)] = inst_24898);
return statearr_24961;
})();var statearr_24962_25001 = state_24928__$1;(statearr_24962_25001[(2)] = null);
(statearr_24962_25001[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24929 === (10)))
{var inst_24888 = (state_24928[(15)]);var inst_24887 = (state_24928[(8)]);var inst_24886 = (state_24928[(2)]);var inst_24887__$1 = cljs.core.nth.call(null,inst_24886,(0),null);var inst_24888__$1 = cljs.core.nth.call(null,inst_24886,(1),null);var inst_24889 = (inst_24887__$1 == null);var inst_24890 = cljs.core._EQ_.call(null,inst_24888__$1,change);var inst_24891 = (inst_24889) || (inst_24890);var state_24928__$1 = (function (){var statearr_24963 = state_24928;(statearr_24963[(15)] = inst_24888__$1);
(statearr_24963[(8)] = inst_24887__$1);
return statearr_24963;
})();if(cljs.core.truth_(inst_24891))
{var statearr_24964_25002 = state_24928__$1;(statearr_24964_25002[(1)] = (11));
} else
{var statearr_24965_25003 = state_24928__$1;(statearr_24965_25003[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24929 === (18)))
{var inst_24882 = (state_24928[(17)]);var inst_24888 = (state_24928[(15)]);var inst_24883 = (state_24928[(16)]);var inst_24905 = cljs.core.empty_QMARK_.call(null,inst_24883);var inst_24906 = inst_24882.call(null,inst_24888);var inst_24907 = cljs.core.not.call(null,inst_24906);var inst_24908 = (inst_24905) && (inst_24907);var state_24928__$1 = state_24928;var statearr_24966_25004 = state_24928__$1;(statearr_24966_25004[(2)] = inst_24908);
(statearr_24966_25004[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24929 === (8)))
{var inst_24872 = (state_24928[(7)]);var state_24928__$1 = state_24928;var statearr_24967_25005 = state_24928__$1;(statearr_24967_25005[(2)] = inst_24872);
(statearr_24967_25005[(1)] = (9));
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
});})(c__9125__auto___24975,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__9110__auto__,c__9125__auto___24975,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24971[(0)] = state_machine__9111__auto__);
(statearr_24971[(1)] = (1));
return statearr_24971;
});
var state_machine__9111__auto____1 = (function (state_24928){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24928);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24972){if((e24972 instanceof Object))
{var ex__9114__auto__ = e24972;var statearr_24973_25006 = state_24928;(statearr_24973_25006[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24928);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24972;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25007 = state_24928;
state_24928 = G__25007;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24928){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24975,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__9127__auto__ = (function (){var statearr_24974 = f__9126__auto__.call(null);(statearr_24974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24975);
return statearr_24974;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24975,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25009 = {};return obj25009;
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
return (function (p1__25010_SHARP_){if(cljs.core.truth_(p1__25010_SHARP_.call(null,topic)))
{return p1__25010_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__25010_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25133 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25133 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25134){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25134 = meta25134;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25133.cljs$lang$type = true;
cljs.core.async.t25133.cljs$lang$ctorStr = "cljs.core.async/t25133";
cljs.core.async.t25133.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25133");
});})(mults,ensure_mult))
;
cljs.core.async.t25133.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25133.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25133.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25133.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25133.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25133.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25133.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25133.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25135){var self__ = this;
var _25135__$1 = this;return self__.meta25134;
});})(mults,ensure_mult))
;
cljs.core.async.t25133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25135,meta25134__$1){var self__ = this;
var _25135__$1 = this;return (new cljs.core.async.t25133(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25134__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25133 = ((function (mults,ensure_mult){
return (function __GT_t25133(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25134){return (new cljs.core.async.t25133(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25134));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25133(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__9125__auto___25255 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25255,mults,ensure_mult,p){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25255,mults,ensure_mult,p){
return (function (state_25207){var state_val_25208 = (state_25207[(1)]);if((state_val_25208 === (7)))
{var inst_25203 = (state_25207[(2)]);var state_25207__$1 = state_25207;var statearr_25209_25256 = state_25207__$1;(statearr_25209_25256[(2)] = inst_25203);
(statearr_25209_25256[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (20)))
{var state_25207__$1 = state_25207;var statearr_25210_25257 = state_25207__$1;(statearr_25210_25257[(2)] = null);
(statearr_25210_25257[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (1)))
{var state_25207__$1 = state_25207;var statearr_25211_25258 = state_25207__$1;(statearr_25211_25258[(2)] = null);
(statearr_25211_25258[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (24)))
{var inst_25186 = (state_25207[(7)]);var inst_25195 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25186);var state_25207__$1 = state_25207;var statearr_25212_25259 = state_25207__$1;(statearr_25212_25259[(2)] = inst_25195);
(statearr_25212_25259[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (4)))
{var inst_25138 = (state_25207[(8)]);var inst_25138__$1 = (state_25207[(2)]);var inst_25139 = (inst_25138__$1 == null);var state_25207__$1 = (function (){var statearr_25213 = state_25207;(statearr_25213[(8)] = inst_25138__$1);
return statearr_25213;
})();if(cljs.core.truth_(inst_25139))
{var statearr_25214_25260 = state_25207__$1;(statearr_25214_25260[(1)] = (5));
} else
{var statearr_25215_25261 = state_25207__$1;(statearr_25215_25261[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (15)))
{var inst_25180 = (state_25207[(2)]);var state_25207__$1 = state_25207;var statearr_25216_25262 = state_25207__$1;(statearr_25216_25262[(2)] = inst_25180);
(statearr_25216_25262[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (21)))
{var inst_25200 = (state_25207[(2)]);var state_25207__$1 = (function (){var statearr_25217 = state_25207;(statearr_25217[(9)] = inst_25200);
return statearr_25217;
})();var statearr_25218_25263 = state_25207__$1;(statearr_25218_25263[(2)] = null);
(statearr_25218_25263[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (13)))
{var inst_25162 = (state_25207[(10)]);var inst_25164 = cljs.core.chunked_seq_QMARK_.call(null,inst_25162);var state_25207__$1 = state_25207;if(inst_25164)
{var statearr_25219_25264 = state_25207__$1;(statearr_25219_25264[(1)] = (16));
} else
{var statearr_25220_25265 = state_25207__$1;(statearr_25220_25265[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (22)))
{var inst_25192 = (state_25207[(2)]);var state_25207__$1 = state_25207;if(cljs.core.truth_(inst_25192))
{var statearr_25221_25266 = state_25207__$1;(statearr_25221_25266[(1)] = (23));
} else
{var statearr_25222_25267 = state_25207__$1;(statearr_25222_25267[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (6)))
{var inst_25186 = (state_25207[(7)]);var inst_25138 = (state_25207[(8)]);var inst_25188 = (state_25207[(11)]);var inst_25186__$1 = topic_fn.call(null,inst_25138);var inst_25187 = cljs.core.deref.call(null,mults);var inst_25188__$1 = cljs.core.get.call(null,inst_25187,inst_25186__$1);var state_25207__$1 = (function (){var statearr_25223 = state_25207;(statearr_25223[(7)] = inst_25186__$1);
(statearr_25223[(11)] = inst_25188__$1);
return statearr_25223;
})();if(cljs.core.truth_(inst_25188__$1))
{var statearr_25224_25268 = state_25207__$1;(statearr_25224_25268[(1)] = (19));
} else
{var statearr_25225_25269 = state_25207__$1;(statearr_25225_25269[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (25)))
{var inst_25197 = (state_25207[(2)]);var state_25207__$1 = state_25207;var statearr_25226_25270 = state_25207__$1;(statearr_25226_25270[(2)] = inst_25197);
(statearr_25226_25270[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (17)))
{var inst_25162 = (state_25207[(10)]);var inst_25171 = cljs.core.first.call(null,inst_25162);var inst_25172 = cljs.core.async.muxch_STAR_.call(null,inst_25171);var inst_25173 = cljs.core.async.close_BANG_.call(null,inst_25172);var inst_25174 = cljs.core.next.call(null,inst_25162);var inst_25148 = inst_25174;var inst_25149 = null;var inst_25150 = (0);var inst_25151 = (0);var state_25207__$1 = (function (){var statearr_25227 = state_25207;(statearr_25227[(12)] = inst_25173);
(statearr_25227[(13)] = inst_25148);
(statearr_25227[(14)] = inst_25149);
(statearr_25227[(15)] = inst_25150);
(statearr_25227[(16)] = inst_25151);
return statearr_25227;
})();var statearr_25228_25271 = state_25207__$1;(statearr_25228_25271[(2)] = null);
(statearr_25228_25271[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (3)))
{var inst_25205 = (state_25207[(2)]);var state_25207__$1 = state_25207;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25207__$1,inst_25205);
} else
{if((state_val_25208 === (12)))
{var inst_25182 = (state_25207[(2)]);var state_25207__$1 = state_25207;var statearr_25229_25272 = state_25207__$1;(statearr_25229_25272[(2)] = inst_25182);
(statearr_25229_25272[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (2)))
{var state_25207__$1 = state_25207;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25207__$1,(4),ch);
} else
{if((state_val_25208 === (23)))
{var state_25207__$1 = state_25207;var statearr_25230_25273 = state_25207__$1;(statearr_25230_25273[(2)] = null);
(statearr_25230_25273[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (19)))
{var inst_25138 = (state_25207[(8)]);var inst_25188 = (state_25207[(11)]);var inst_25190 = cljs.core.async.muxch_STAR_.call(null,inst_25188);var state_25207__$1 = state_25207;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25207__$1,(22),inst_25190,inst_25138);
} else
{if((state_val_25208 === (11)))
{var inst_25162 = (state_25207[(10)]);var inst_25148 = (state_25207[(13)]);var inst_25162__$1 = cljs.core.seq.call(null,inst_25148);var state_25207__$1 = (function (){var statearr_25231 = state_25207;(statearr_25231[(10)] = inst_25162__$1);
return statearr_25231;
})();if(inst_25162__$1)
{var statearr_25232_25274 = state_25207__$1;(statearr_25232_25274[(1)] = (13));
} else
{var statearr_25233_25275 = state_25207__$1;(statearr_25233_25275[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (9)))
{var inst_25184 = (state_25207[(2)]);var state_25207__$1 = state_25207;var statearr_25234_25276 = state_25207__$1;(statearr_25234_25276[(2)] = inst_25184);
(statearr_25234_25276[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (5)))
{var inst_25145 = cljs.core.deref.call(null,mults);var inst_25146 = cljs.core.vals.call(null,inst_25145);var inst_25147 = cljs.core.seq.call(null,inst_25146);var inst_25148 = inst_25147;var inst_25149 = null;var inst_25150 = (0);var inst_25151 = (0);var state_25207__$1 = (function (){var statearr_25235 = state_25207;(statearr_25235[(13)] = inst_25148);
(statearr_25235[(14)] = inst_25149);
(statearr_25235[(15)] = inst_25150);
(statearr_25235[(16)] = inst_25151);
return statearr_25235;
})();var statearr_25236_25277 = state_25207__$1;(statearr_25236_25277[(2)] = null);
(statearr_25236_25277[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (14)))
{var state_25207__$1 = state_25207;var statearr_25240_25278 = state_25207__$1;(statearr_25240_25278[(2)] = null);
(statearr_25240_25278[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (16)))
{var inst_25162 = (state_25207[(10)]);var inst_25166 = cljs.core.chunk_first.call(null,inst_25162);var inst_25167 = cljs.core.chunk_rest.call(null,inst_25162);var inst_25168 = cljs.core.count.call(null,inst_25166);var inst_25148 = inst_25167;var inst_25149 = inst_25166;var inst_25150 = inst_25168;var inst_25151 = (0);var state_25207__$1 = (function (){var statearr_25241 = state_25207;(statearr_25241[(13)] = inst_25148);
(statearr_25241[(14)] = inst_25149);
(statearr_25241[(15)] = inst_25150);
(statearr_25241[(16)] = inst_25151);
return statearr_25241;
})();var statearr_25242_25279 = state_25207__$1;(statearr_25242_25279[(2)] = null);
(statearr_25242_25279[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (10)))
{var inst_25148 = (state_25207[(13)]);var inst_25149 = (state_25207[(14)]);var inst_25150 = (state_25207[(15)]);var inst_25151 = (state_25207[(16)]);var inst_25156 = cljs.core._nth.call(null,inst_25149,inst_25151);var inst_25157 = cljs.core.async.muxch_STAR_.call(null,inst_25156);var inst_25158 = cljs.core.async.close_BANG_.call(null,inst_25157);var inst_25159 = (inst_25151 + (1));var tmp25237 = inst_25148;var tmp25238 = inst_25149;var tmp25239 = inst_25150;var inst_25148__$1 = tmp25237;var inst_25149__$1 = tmp25238;var inst_25150__$1 = tmp25239;var inst_25151__$1 = inst_25159;var state_25207__$1 = (function (){var statearr_25243 = state_25207;(statearr_25243[(17)] = inst_25158);
(statearr_25243[(13)] = inst_25148__$1);
(statearr_25243[(14)] = inst_25149__$1);
(statearr_25243[(15)] = inst_25150__$1);
(statearr_25243[(16)] = inst_25151__$1);
return statearr_25243;
})();var statearr_25244_25280 = state_25207__$1;(statearr_25244_25280[(2)] = null);
(statearr_25244_25280[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (18)))
{var inst_25177 = (state_25207[(2)]);var state_25207__$1 = state_25207;var statearr_25245_25281 = state_25207__$1;(statearr_25245_25281[(2)] = inst_25177);
(statearr_25245_25281[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25208 === (8)))
{var inst_25150 = (state_25207[(15)]);var inst_25151 = (state_25207[(16)]);var inst_25153 = (inst_25151 < inst_25150);var inst_25154 = inst_25153;var state_25207__$1 = state_25207;if(cljs.core.truth_(inst_25154))
{var statearr_25246_25282 = state_25207__$1;(statearr_25246_25282[(1)] = (10));
} else
{var statearr_25247_25283 = state_25207__$1;(statearr_25247_25283[(1)] = (11));
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
});})(c__9125__auto___25255,mults,ensure_mult,p))
;return ((function (switch__9110__auto__,c__9125__auto___25255,mults,ensure_mult,p){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25251[(0)] = state_machine__9111__auto__);
(statearr_25251[(1)] = (1));
return statearr_25251;
});
var state_machine__9111__auto____1 = (function (state_25207){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25207);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25252){if((e25252 instanceof Object))
{var ex__9114__auto__ = e25252;var statearr_25253_25284 = state_25207;(statearr_25253_25284[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25207);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25252;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25285 = state_25207;
state_25207 = G__25285;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25207){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25255,mults,ensure_mult,p))
})();var state__9127__auto__ = (function (){var statearr_25254 = f__9126__auto__.call(null);(statearr_25254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25255);
return statearr_25254;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25255,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__9125__auto___25422 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25422,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25422,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25392){var state_val_25393 = (state_25392[(1)]);if((state_val_25393 === (7)))
{var state_25392__$1 = state_25392;var statearr_25394_25423 = state_25392__$1;(statearr_25394_25423[(2)] = null);
(statearr_25394_25423[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25393 === (1)))
{var state_25392__$1 = state_25392;var statearr_25395_25424 = state_25392__$1;(statearr_25395_25424[(2)] = null);
(statearr_25395_25424[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25393 === (4)))
{var inst_25356 = (state_25392[(7)]);var inst_25358 = (inst_25356 < cnt);var state_25392__$1 = state_25392;if(cljs.core.truth_(inst_25358))
{var statearr_25396_25425 = state_25392__$1;(statearr_25396_25425[(1)] = (6));
} else
{var statearr_25397_25426 = state_25392__$1;(statearr_25397_25426[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25393 === (15)))
{var inst_25388 = (state_25392[(2)]);var state_25392__$1 = state_25392;var statearr_25398_25427 = state_25392__$1;(statearr_25398_25427[(2)] = inst_25388);
(statearr_25398_25427[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25393 === (13)))
{var inst_25381 = cljs.core.async.close_BANG_.call(null,out);var state_25392__$1 = state_25392;var statearr_25399_25428 = state_25392__$1;(statearr_25399_25428[(2)] = inst_25381);
(statearr_25399_25428[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25393 === (6)))
{var state_25392__$1 = state_25392;var statearr_25400_25429 = state_25392__$1;(statearr_25400_25429[(2)] = null);
(statearr_25400_25429[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25393 === (3)))
{var inst_25390 = (state_25392[(2)]);var state_25392__$1 = state_25392;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25392__$1,inst_25390);
} else
{if((state_val_25393 === (12)))
{var inst_25378 = (state_25392[(8)]);var inst_25378__$1 = (state_25392[(2)]);var inst_25379 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25378__$1);var state_25392__$1 = (function (){var statearr_25401 = state_25392;(statearr_25401[(8)] = inst_25378__$1);
return statearr_25401;
})();if(cljs.core.truth_(inst_25379))
{var statearr_25402_25430 = state_25392__$1;(statearr_25402_25430[(1)] = (13));
} else
{var statearr_25403_25431 = state_25392__$1;(statearr_25403_25431[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25393 === (2)))
{var inst_25355 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_25356 = (0);var state_25392__$1 = (function (){var statearr_25404 = state_25392;(statearr_25404[(7)] = inst_25356);
(statearr_25404[(9)] = inst_25355);
return statearr_25404;
})();var statearr_25405_25432 = state_25392__$1;(statearr_25405_25432[(2)] = null);
(statearr_25405_25432[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25393 === (11)))
{var inst_25356 = (state_25392[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25392,(10),Object,null,(9));var inst_25365 = chs__$1.call(null,inst_25356);var inst_25366 = done.call(null,inst_25356);var inst_25367 = cljs.core.async.take_BANG_.call(null,inst_25365,inst_25366);var state_25392__$1 = state_25392;var statearr_25406_25433 = state_25392__$1;(statearr_25406_25433[(2)] = inst_25367);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25392__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25393 === (9)))
{var inst_25356 = (state_25392[(7)]);var inst_25369 = (state_25392[(2)]);var inst_25370 = (inst_25356 + (1));var inst_25356__$1 = inst_25370;var state_25392__$1 = (function (){var statearr_25407 = state_25392;(statearr_25407[(7)] = inst_25356__$1);
(statearr_25407[(10)] = inst_25369);
return statearr_25407;
})();var statearr_25408_25434 = state_25392__$1;(statearr_25408_25434[(2)] = null);
(statearr_25408_25434[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25393 === (5)))
{var inst_25376 = (state_25392[(2)]);var state_25392__$1 = (function (){var statearr_25409 = state_25392;(statearr_25409[(11)] = inst_25376);
return statearr_25409;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25392__$1,(12),dchan);
} else
{if((state_val_25393 === (14)))
{var inst_25378 = (state_25392[(8)]);var inst_25383 = cljs.core.apply.call(null,f,inst_25378);var state_25392__$1 = state_25392;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25392__$1,(16),out,inst_25383);
} else
{if((state_val_25393 === (16)))
{var inst_25385 = (state_25392[(2)]);var state_25392__$1 = (function (){var statearr_25410 = state_25392;(statearr_25410[(12)] = inst_25385);
return statearr_25410;
})();var statearr_25411_25435 = state_25392__$1;(statearr_25411_25435[(2)] = null);
(statearr_25411_25435[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25393 === (10)))
{var inst_25360 = (state_25392[(2)]);var inst_25361 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_25392__$1 = (function (){var statearr_25412 = state_25392;(statearr_25412[(13)] = inst_25360);
return statearr_25412;
})();var statearr_25413_25436 = state_25392__$1;(statearr_25413_25436[(2)] = inst_25361);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25392__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25393 === (8)))
{var inst_25374 = (state_25392[(2)]);var state_25392__$1 = state_25392;var statearr_25414_25437 = state_25392__$1;(statearr_25414_25437[(2)] = inst_25374);
(statearr_25414_25437[(1)] = (5));
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
});})(c__9125__auto___25422,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___25422,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25418[(0)] = state_machine__9111__auto__);
(statearr_25418[(1)] = (1));
return statearr_25418;
});
var state_machine__9111__auto____1 = (function (state_25392){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25392);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25419){if((e25419 instanceof Object))
{var ex__9114__auto__ = e25419;var statearr_25420_25438 = state_25392;(statearr_25420_25438[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25392);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25419;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25439 = state_25392;
state_25392 = G__25439;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25392){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25422,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_25421 = f__9126__auto__.call(null);(statearr_25421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25422);
return statearr_25421;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25422,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25547 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25547,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25547,out){
return (function (state_25523){var state_val_25524 = (state_25523[(1)]);if((state_val_25524 === (7)))
{var inst_25502 = (state_25523[(7)]);var inst_25503 = (state_25523[(8)]);var inst_25502__$1 = (state_25523[(2)]);var inst_25503__$1 = cljs.core.nth.call(null,inst_25502__$1,(0),null);var inst_25504 = cljs.core.nth.call(null,inst_25502__$1,(1),null);var inst_25505 = (inst_25503__$1 == null);var state_25523__$1 = (function (){var statearr_25525 = state_25523;(statearr_25525[(7)] = inst_25502__$1);
(statearr_25525[(8)] = inst_25503__$1);
(statearr_25525[(9)] = inst_25504);
return statearr_25525;
})();if(cljs.core.truth_(inst_25505))
{var statearr_25526_25548 = state_25523__$1;(statearr_25526_25548[(1)] = (8));
} else
{var statearr_25527_25549 = state_25523__$1;(statearr_25527_25549[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25524 === (1)))
{var inst_25494 = cljs.core.vec.call(null,chs);var inst_25495 = inst_25494;var state_25523__$1 = (function (){var statearr_25528 = state_25523;(statearr_25528[(10)] = inst_25495);
return statearr_25528;
})();var statearr_25529_25550 = state_25523__$1;(statearr_25529_25550[(2)] = null);
(statearr_25529_25550[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25524 === (4)))
{var inst_25495 = (state_25523[(10)]);var state_25523__$1 = state_25523;return cljs.core.async.ioc_alts_BANG_.call(null,state_25523__$1,(7),inst_25495);
} else
{if((state_val_25524 === (6)))
{var inst_25519 = (state_25523[(2)]);var state_25523__$1 = state_25523;var statearr_25530_25551 = state_25523__$1;(statearr_25530_25551[(2)] = inst_25519);
(statearr_25530_25551[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25524 === (3)))
{var inst_25521 = (state_25523[(2)]);var state_25523__$1 = state_25523;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25523__$1,inst_25521);
} else
{if((state_val_25524 === (2)))
{var inst_25495 = (state_25523[(10)]);var inst_25497 = cljs.core.count.call(null,inst_25495);var inst_25498 = (inst_25497 > (0));var state_25523__$1 = state_25523;if(cljs.core.truth_(inst_25498))
{var statearr_25532_25552 = state_25523__$1;(statearr_25532_25552[(1)] = (4));
} else
{var statearr_25533_25553 = state_25523__$1;(statearr_25533_25553[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25524 === (11)))
{var inst_25495 = (state_25523[(10)]);var inst_25512 = (state_25523[(2)]);var tmp25531 = inst_25495;var inst_25495__$1 = tmp25531;var state_25523__$1 = (function (){var statearr_25534 = state_25523;(statearr_25534[(11)] = inst_25512);
(statearr_25534[(10)] = inst_25495__$1);
return statearr_25534;
})();var statearr_25535_25554 = state_25523__$1;(statearr_25535_25554[(2)] = null);
(statearr_25535_25554[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25524 === (9)))
{var inst_25503 = (state_25523[(8)]);var state_25523__$1 = state_25523;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25523__$1,(11),out,inst_25503);
} else
{if((state_val_25524 === (5)))
{var inst_25517 = cljs.core.async.close_BANG_.call(null,out);var state_25523__$1 = state_25523;var statearr_25536_25555 = state_25523__$1;(statearr_25536_25555[(2)] = inst_25517);
(statearr_25536_25555[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25524 === (10)))
{var inst_25515 = (state_25523[(2)]);var state_25523__$1 = state_25523;var statearr_25537_25556 = state_25523__$1;(statearr_25537_25556[(2)] = inst_25515);
(statearr_25537_25556[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25524 === (8)))
{var inst_25502 = (state_25523[(7)]);var inst_25495 = (state_25523[(10)]);var inst_25503 = (state_25523[(8)]);var inst_25504 = (state_25523[(9)]);var inst_25507 = (function (){var c = inst_25504;var v = inst_25503;var vec__25500 = inst_25502;var cs = inst_25495;return ((function (c,v,vec__25500,cs,inst_25502,inst_25495,inst_25503,inst_25504,state_val_25524,c__9125__auto___25547,out){
return (function (p1__25440_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25440_SHARP_);
});
;})(c,v,vec__25500,cs,inst_25502,inst_25495,inst_25503,inst_25504,state_val_25524,c__9125__auto___25547,out))
})();var inst_25508 = cljs.core.filterv.call(null,inst_25507,inst_25495);var inst_25495__$1 = inst_25508;var state_25523__$1 = (function (){var statearr_25538 = state_25523;(statearr_25538[(10)] = inst_25495__$1);
return statearr_25538;
})();var statearr_25539_25557 = state_25523__$1;(statearr_25539_25557[(2)] = null);
(statearr_25539_25557[(1)] = (2));
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
});})(c__9125__auto___25547,out))
;return ((function (switch__9110__auto__,c__9125__auto___25547,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25543 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25543[(0)] = state_machine__9111__auto__);
(statearr_25543[(1)] = (1));
return statearr_25543;
});
var state_machine__9111__auto____1 = (function (state_25523){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25523);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25544){if((e25544 instanceof Object))
{var ex__9114__auto__ = e25544;var statearr_25545_25558 = state_25523;(statearr_25545_25558[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25523);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25544;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25559 = state_25523;
state_25523 = G__25559;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25523){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25547,out))
})();var state__9127__auto__ = (function (){var statearr_25546 = f__9126__auto__.call(null);(statearr_25546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25547);
return statearr_25546;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25547,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25652 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25652,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25652,out){
return (function (state_25629){var state_val_25630 = (state_25629[(1)]);if((state_val_25630 === (7)))
{var inst_25611 = (state_25629[(7)]);var inst_25611__$1 = (state_25629[(2)]);var inst_25612 = (inst_25611__$1 == null);var inst_25613 = cljs.core.not.call(null,inst_25612);var state_25629__$1 = (function (){var statearr_25631 = state_25629;(statearr_25631[(7)] = inst_25611__$1);
return statearr_25631;
})();if(inst_25613)
{var statearr_25632_25653 = state_25629__$1;(statearr_25632_25653[(1)] = (8));
} else
{var statearr_25633_25654 = state_25629__$1;(statearr_25633_25654[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25630 === (1)))
{var inst_25606 = (0);var state_25629__$1 = (function (){var statearr_25634 = state_25629;(statearr_25634[(8)] = inst_25606);
return statearr_25634;
})();var statearr_25635_25655 = state_25629__$1;(statearr_25635_25655[(2)] = null);
(statearr_25635_25655[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25630 === (4)))
{var state_25629__$1 = state_25629;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25629__$1,(7),ch);
} else
{if((state_val_25630 === (6)))
{var inst_25624 = (state_25629[(2)]);var state_25629__$1 = state_25629;var statearr_25636_25656 = state_25629__$1;(statearr_25636_25656[(2)] = inst_25624);
(statearr_25636_25656[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25630 === (3)))
{var inst_25626 = (state_25629[(2)]);var inst_25627 = cljs.core.async.close_BANG_.call(null,out);var state_25629__$1 = (function (){var statearr_25637 = state_25629;(statearr_25637[(9)] = inst_25626);
return statearr_25637;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25629__$1,inst_25627);
} else
{if((state_val_25630 === (2)))
{var inst_25606 = (state_25629[(8)]);var inst_25608 = (inst_25606 < n);var state_25629__$1 = state_25629;if(cljs.core.truth_(inst_25608))
{var statearr_25638_25657 = state_25629__$1;(statearr_25638_25657[(1)] = (4));
} else
{var statearr_25639_25658 = state_25629__$1;(statearr_25639_25658[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25630 === (11)))
{var inst_25606 = (state_25629[(8)]);var inst_25616 = (state_25629[(2)]);var inst_25617 = (inst_25606 + (1));var inst_25606__$1 = inst_25617;var state_25629__$1 = (function (){var statearr_25640 = state_25629;(statearr_25640[(10)] = inst_25616);
(statearr_25640[(8)] = inst_25606__$1);
return statearr_25640;
})();var statearr_25641_25659 = state_25629__$1;(statearr_25641_25659[(2)] = null);
(statearr_25641_25659[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25630 === (9)))
{var state_25629__$1 = state_25629;var statearr_25642_25660 = state_25629__$1;(statearr_25642_25660[(2)] = null);
(statearr_25642_25660[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25630 === (5)))
{var state_25629__$1 = state_25629;var statearr_25643_25661 = state_25629__$1;(statearr_25643_25661[(2)] = null);
(statearr_25643_25661[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25630 === (10)))
{var inst_25621 = (state_25629[(2)]);var state_25629__$1 = state_25629;var statearr_25644_25662 = state_25629__$1;(statearr_25644_25662[(2)] = inst_25621);
(statearr_25644_25662[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25630 === (8)))
{var inst_25611 = (state_25629[(7)]);var state_25629__$1 = state_25629;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25629__$1,(11),out,inst_25611);
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
});})(c__9125__auto___25652,out))
;return ((function (switch__9110__auto__,c__9125__auto___25652,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25648 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25648[(0)] = state_machine__9111__auto__);
(statearr_25648[(1)] = (1));
return statearr_25648;
});
var state_machine__9111__auto____1 = (function (state_25629){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25629);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25649){if((e25649 instanceof Object))
{var ex__9114__auto__ = e25649;var statearr_25650_25663 = state_25629;(statearr_25650_25663[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25629);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25649;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25664 = state_25629;
state_25629 = G__25664;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25629){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25652,out))
})();var state__9127__auto__ = (function (){var statearr_25651 = f__9126__auto__.call(null);(statearr_25651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25652);
return statearr_25651;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25652,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25672 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25672 = (function (ch,f,map_LT_,meta25673){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25673 = meta25673;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25672.cljs$lang$type = true;
cljs.core.async.t25672.cljs$lang$ctorStr = "cljs.core.async/t25672";
cljs.core.async.t25672.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25672");
});
cljs.core.async.t25672.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25672.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t25672.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25672.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25675 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25675 = (function (fn1,_,meta25673,ch,f,map_LT_,meta25676){
this.fn1 = fn1;
this._ = _;
this.meta25673 = meta25673;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25676 = meta25676;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25675.cljs$lang$type = true;
cljs.core.async.t25675.cljs$lang$ctorStr = "cljs.core.async/t25675";
cljs.core.async.t25675.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25675");
});})(___$1))
;
cljs.core.async.t25675.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25675.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25675.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25665_SHARP_){return f1.call(null,(((p1__25665_SHARP_ == null))?null:self__.f.call(null,p1__25665_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25675.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25677){var self__ = this;
var _25677__$1 = this;return self__.meta25676;
});})(___$1))
;
cljs.core.async.t25675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25677,meta25676__$1){var self__ = this;
var _25677__$1 = this;return (new cljs.core.async.t25675(self__.fn1,self__._,self__.meta25673,self__.ch,self__.f,self__.map_LT_,meta25676__$1));
});})(___$1))
;
cljs.core.async.__GT_t25675 = ((function (___$1){
return (function __GT_t25675(fn1__$1,___$2,meta25673__$1,ch__$2,f__$2,map_LT___$2,meta25676){return (new cljs.core.async.t25675(fn1__$1,___$2,meta25673__$1,ch__$2,f__$2,map_LT___$2,meta25676));
});})(___$1))
;
}
return (new cljs.core.async.t25675(fn1,___$1,self__.meta25673,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t25672.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25672.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25672.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25674){var self__ = this;
var _25674__$1 = this;return self__.meta25673;
});
cljs.core.async.t25672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25674,meta25673__$1){var self__ = this;
var _25674__$1 = this;return (new cljs.core.async.t25672(self__.ch,self__.f,self__.map_LT_,meta25673__$1));
});
cljs.core.async.__GT_t25672 = (function __GT_t25672(ch__$1,f__$1,map_LT___$1,meta25673){return (new cljs.core.async.t25672(ch__$1,f__$1,map_LT___$1,meta25673));
});
}
return (new cljs.core.async.t25672(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25681 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25681 = (function (ch,f,map_GT_,meta25682){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25682 = meta25682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25681.cljs$lang$type = true;
cljs.core.async.t25681.cljs$lang$ctorStr = "cljs.core.async/t25681";
cljs.core.async.t25681.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25681");
});
cljs.core.async.t25681.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25681.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t25681.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25681.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25681.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25681.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25683){var self__ = this;
var _25683__$1 = this;return self__.meta25682;
});
cljs.core.async.t25681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25683,meta25682__$1){var self__ = this;
var _25683__$1 = this;return (new cljs.core.async.t25681(self__.ch,self__.f,self__.map_GT_,meta25682__$1));
});
cljs.core.async.__GT_t25681 = (function __GT_t25681(ch__$1,f__$1,map_GT___$1,meta25682){return (new cljs.core.async.t25681(ch__$1,f__$1,map_GT___$1,meta25682));
});
}
return (new cljs.core.async.t25681(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25687 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25687 = (function (ch,p,filter_GT_,meta25688){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25688 = meta25688;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25687.cljs$lang$type = true;
cljs.core.async.t25687.cljs$lang$ctorStr = "cljs.core.async/t25687";
cljs.core.async.t25687.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25687");
});
cljs.core.async.t25687.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25687.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t25687.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25687.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25687.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25687.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25687.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25689){var self__ = this;
var _25689__$1 = this;return self__.meta25688;
});
cljs.core.async.t25687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25689,meta25688__$1){var self__ = this;
var _25689__$1 = this;return (new cljs.core.async.t25687(self__.ch,self__.p,self__.filter_GT_,meta25688__$1));
});
cljs.core.async.__GT_t25687 = (function __GT_t25687(ch__$1,p__$1,filter_GT___$1,meta25688){return (new cljs.core.async.t25687(ch__$1,p__$1,filter_GT___$1,meta25688));
});
}
return (new cljs.core.async.t25687(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25772 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25772,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25772,out){
return (function (state_25751){var state_val_25752 = (state_25751[(1)]);if((state_val_25752 === (7)))
{var inst_25747 = (state_25751[(2)]);var state_25751__$1 = state_25751;var statearr_25753_25773 = state_25751__$1;(statearr_25753_25773[(2)] = inst_25747);
(statearr_25753_25773[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25752 === (1)))
{var state_25751__$1 = state_25751;var statearr_25754_25774 = state_25751__$1;(statearr_25754_25774[(2)] = null);
(statearr_25754_25774[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25752 === (4)))
{var inst_25733 = (state_25751[(7)]);var inst_25733__$1 = (state_25751[(2)]);var inst_25734 = (inst_25733__$1 == null);var state_25751__$1 = (function (){var statearr_25755 = state_25751;(statearr_25755[(7)] = inst_25733__$1);
return statearr_25755;
})();if(cljs.core.truth_(inst_25734))
{var statearr_25756_25775 = state_25751__$1;(statearr_25756_25775[(1)] = (5));
} else
{var statearr_25757_25776 = state_25751__$1;(statearr_25757_25776[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25752 === (6)))
{var inst_25733 = (state_25751[(7)]);var inst_25738 = p.call(null,inst_25733);var state_25751__$1 = state_25751;if(cljs.core.truth_(inst_25738))
{var statearr_25758_25777 = state_25751__$1;(statearr_25758_25777[(1)] = (8));
} else
{var statearr_25759_25778 = state_25751__$1;(statearr_25759_25778[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25752 === (3)))
{var inst_25749 = (state_25751[(2)]);var state_25751__$1 = state_25751;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25751__$1,inst_25749);
} else
{if((state_val_25752 === (2)))
{var state_25751__$1 = state_25751;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25751__$1,(4),ch);
} else
{if((state_val_25752 === (11)))
{var inst_25741 = (state_25751[(2)]);var state_25751__$1 = state_25751;var statearr_25760_25779 = state_25751__$1;(statearr_25760_25779[(2)] = inst_25741);
(statearr_25760_25779[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25752 === (9)))
{var state_25751__$1 = state_25751;var statearr_25761_25780 = state_25751__$1;(statearr_25761_25780[(2)] = null);
(statearr_25761_25780[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25752 === (5)))
{var inst_25736 = cljs.core.async.close_BANG_.call(null,out);var state_25751__$1 = state_25751;var statearr_25762_25781 = state_25751__$1;(statearr_25762_25781[(2)] = inst_25736);
(statearr_25762_25781[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25752 === (10)))
{var inst_25744 = (state_25751[(2)]);var state_25751__$1 = (function (){var statearr_25763 = state_25751;(statearr_25763[(8)] = inst_25744);
return statearr_25763;
})();var statearr_25764_25782 = state_25751__$1;(statearr_25764_25782[(2)] = null);
(statearr_25764_25782[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25752 === (8)))
{var inst_25733 = (state_25751[(7)]);var state_25751__$1 = state_25751;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25751__$1,(11),out,inst_25733);
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
});})(c__9125__auto___25772,out))
;return ((function (switch__9110__auto__,c__9125__auto___25772,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25768 = [null,null,null,null,null,null,null,null,null];(statearr_25768[(0)] = state_machine__9111__auto__);
(statearr_25768[(1)] = (1));
return statearr_25768;
});
var state_machine__9111__auto____1 = (function (state_25751){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25751);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25769){if((e25769 instanceof Object))
{var ex__9114__auto__ = e25769;var statearr_25770_25783 = state_25751;(statearr_25770_25783[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25751);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25769;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25784 = state_25751;
state_25751 = G__25784;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25751){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25772,out))
})();var state__9127__auto__ = (function (){var statearr_25771 = f__9126__auto__.call(null);(statearr_25771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25772);
return statearr_25771;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25772,out))
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
return (function (state_25950){var state_val_25951 = (state_25950[(1)]);if((state_val_25951 === (7)))
{var inst_25946 = (state_25950[(2)]);var state_25950__$1 = state_25950;var statearr_25952_25993 = state_25950__$1;(statearr_25952_25993[(2)] = inst_25946);
(statearr_25952_25993[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25951 === (20)))
{var inst_25916 = (state_25950[(7)]);var inst_25927 = (state_25950[(2)]);var inst_25928 = cljs.core.next.call(null,inst_25916);var inst_25902 = inst_25928;var inst_25903 = null;var inst_25904 = (0);var inst_25905 = (0);var state_25950__$1 = (function (){var statearr_25953 = state_25950;(statearr_25953[(8)] = inst_25902);
(statearr_25953[(9)] = inst_25927);
(statearr_25953[(10)] = inst_25905);
(statearr_25953[(11)] = inst_25904);
(statearr_25953[(12)] = inst_25903);
return statearr_25953;
})();var statearr_25954_25994 = state_25950__$1;(statearr_25954_25994[(2)] = null);
(statearr_25954_25994[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25951 === (1)))
{var state_25950__$1 = state_25950;var statearr_25955_25995 = state_25950__$1;(statearr_25955_25995[(2)] = null);
(statearr_25955_25995[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25951 === (4)))
{var inst_25891 = (state_25950[(13)]);var inst_25891__$1 = (state_25950[(2)]);var inst_25892 = (inst_25891__$1 == null);var state_25950__$1 = (function (){var statearr_25956 = state_25950;(statearr_25956[(13)] = inst_25891__$1);
return statearr_25956;
})();if(cljs.core.truth_(inst_25892))
{var statearr_25957_25996 = state_25950__$1;(statearr_25957_25996[(1)] = (5));
} else
{var statearr_25958_25997 = state_25950__$1;(statearr_25958_25997[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25951 === (15)))
{var state_25950__$1 = state_25950;var statearr_25962_25998 = state_25950__$1;(statearr_25962_25998[(2)] = null);
(statearr_25962_25998[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25951 === (21)))
{var state_25950__$1 = state_25950;var statearr_25963_25999 = state_25950__$1;(statearr_25963_25999[(2)] = null);
(statearr_25963_25999[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25951 === (13)))
{var inst_25902 = (state_25950[(8)]);var inst_25905 = (state_25950[(10)]);var inst_25904 = (state_25950[(11)]);var inst_25903 = (state_25950[(12)]);var inst_25912 = (state_25950[(2)]);var inst_25913 = (inst_25905 + (1));var tmp25959 = inst_25902;var tmp25960 = inst_25904;var tmp25961 = inst_25903;var inst_25902__$1 = tmp25959;var inst_25903__$1 = tmp25961;var inst_25904__$1 = tmp25960;var inst_25905__$1 = inst_25913;var state_25950__$1 = (function (){var statearr_25964 = state_25950;(statearr_25964[(8)] = inst_25902__$1);
(statearr_25964[(14)] = inst_25912);
(statearr_25964[(10)] = inst_25905__$1);
(statearr_25964[(11)] = inst_25904__$1);
(statearr_25964[(12)] = inst_25903__$1);
return statearr_25964;
})();var statearr_25965_26000 = state_25950__$1;(statearr_25965_26000[(2)] = null);
(statearr_25965_26000[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25951 === (22)))
{var state_25950__$1 = state_25950;var statearr_25966_26001 = state_25950__$1;(statearr_25966_26001[(2)] = null);
(statearr_25966_26001[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25951 === (6)))
{var inst_25891 = (state_25950[(13)]);var inst_25900 = f.call(null,inst_25891);var inst_25901 = cljs.core.seq.call(null,inst_25900);var inst_25902 = inst_25901;var inst_25903 = null;var inst_25904 = (0);var inst_25905 = (0);var state_25950__$1 = (function (){var statearr_25967 = state_25950;(statearr_25967[(8)] = inst_25902);
(statearr_25967[(10)] = inst_25905);
(statearr_25967[(11)] = inst_25904);
(statearr_25967[(12)] = inst_25903);
return statearr_25967;
})();var statearr_25968_26002 = state_25950__$1;(statearr_25968_26002[(2)] = null);
(statearr_25968_26002[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25951 === (17)))
{var inst_25916 = (state_25950[(7)]);var inst_25920 = cljs.core.chunk_first.call(null,inst_25916);var inst_25921 = cljs.core.chunk_rest.call(null,inst_25916);var inst_25922 = cljs.core.count.call(null,inst_25920);var inst_25902 = inst_25921;var inst_25903 = inst_25920;var inst_25904 = inst_25922;var inst_25905 = (0);var state_25950__$1 = (function (){var statearr_25969 = state_25950;(statearr_25969[(8)] = inst_25902);
(statearr_25969[(10)] = inst_25905);
(statearr_25969[(11)] = inst_25904);
(statearr_25969[(12)] = inst_25903);
return statearr_25969;
})();var statearr_25970_26003 = state_25950__$1;(statearr_25970_26003[(2)] = null);
(statearr_25970_26003[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25951 === (3)))
{var inst_25948 = (state_25950[(2)]);var state_25950__$1 = state_25950;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25950__$1,inst_25948);
} else
{if((state_val_25951 === (12)))
{var inst_25936 = (state_25950[(2)]);var state_25950__$1 = state_25950;var statearr_25971_26004 = state_25950__$1;(statearr_25971_26004[(2)] = inst_25936);
(statearr_25971_26004[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25951 === (2)))
{var state_25950__$1 = state_25950;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25950__$1,(4),in$);
} else
{if((state_val_25951 === (23)))
{var inst_25944 = (state_25950[(2)]);var state_25950__$1 = state_25950;var statearr_25972_26005 = state_25950__$1;(statearr_25972_26005[(2)] = inst_25944);
(statearr_25972_26005[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25951 === (19)))
{var inst_25931 = (state_25950[(2)]);var state_25950__$1 = state_25950;var statearr_25973_26006 = state_25950__$1;(statearr_25973_26006[(2)] = inst_25931);
(statearr_25973_26006[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25951 === (11)))
{var inst_25902 = (state_25950[(8)]);var inst_25916 = (state_25950[(7)]);var inst_25916__$1 = cljs.core.seq.call(null,inst_25902);var state_25950__$1 = (function (){var statearr_25974 = state_25950;(statearr_25974[(7)] = inst_25916__$1);
return statearr_25974;
})();if(inst_25916__$1)
{var statearr_25975_26007 = state_25950__$1;(statearr_25975_26007[(1)] = (14));
} else
{var statearr_25976_26008 = state_25950__$1;(statearr_25976_26008[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25951 === (9)))
{var inst_25938 = (state_25950[(2)]);var inst_25939 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_25950__$1 = (function (){var statearr_25977 = state_25950;(statearr_25977[(15)] = inst_25938);
return statearr_25977;
})();if(cljs.core.truth_(inst_25939))
{var statearr_25978_26009 = state_25950__$1;(statearr_25978_26009[(1)] = (21));
} else
{var statearr_25979_26010 = state_25950__$1;(statearr_25979_26010[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25951 === (5)))
{var inst_25894 = cljs.core.async.close_BANG_.call(null,out);var state_25950__$1 = state_25950;var statearr_25980_26011 = state_25950__$1;(statearr_25980_26011[(2)] = inst_25894);
(statearr_25980_26011[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25951 === (14)))
{var inst_25916 = (state_25950[(7)]);var inst_25918 = cljs.core.chunked_seq_QMARK_.call(null,inst_25916);var state_25950__$1 = state_25950;if(inst_25918)
{var statearr_25981_26012 = state_25950__$1;(statearr_25981_26012[(1)] = (17));
} else
{var statearr_25982_26013 = state_25950__$1;(statearr_25982_26013[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25951 === (16)))
{var inst_25934 = (state_25950[(2)]);var state_25950__$1 = state_25950;var statearr_25983_26014 = state_25950__$1;(statearr_25983_26014[(2)] = inst_25934);
(statearr_25983_26014[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25951 === (10)))
{var inst_25905 = (state_25950[(10)]);var inst_25903 = (state_25950[(12)]);var inst_25910 = cljs.core._nth.call(null,inst_25903,inst_25905);var state_25950__$1 = state_25950;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25950__$1,(13),out,inst_25910);
} else
{if((state_val_25951 === (18)))
{var inst_25916 = (state_25950[(7)]);var inst_25925 = cljs.core.first.call(null,inst_25916);var state_25950__$1 = state_25950;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25950__$1,(20),out,inst_25925);
} else
{if((state_val_25951 === (8)))
{var inst_25905 = (state_25950[(10)]);var inst_25904 = (state_25950[(11)]);var inst_25907 = (inst_25905 < inst_25904);var inst_25908 = inst_25907;var state_25950__$1 = state_25950;if(cljs.core.truth_(inst_25908))
{var statearr_25984_26015 = state_25950__$1;(statearr_25984_26015[(1)] = (10));
} else
{var statearr_25985_26016 = state_25950__$1;(statearr_25985_26016[(1)] = (11));
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
var state_machine__9111__auto____0 = (function (){var statearr_25989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25989[(0)] = state_machine__9111__auto__);
(statearr_25989[(1)] = (1));
return statearr_25989;
});
var state_machine__9111__auto____1 = (function (state_25950){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25950);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25990){if((e25990 instanceof Object))
{var ex__9114__auto__ = e25990;var statearr_25991_26017 = state_25950;(statearr_25991_26017[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25950);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25990;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26018 = state_25950;
state_25950 = G__26018;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25950){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_25992 = f__9126__auto__.call(null);(statearr_25992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_25992;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26115 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26115,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26115,out){
return (function (state_26090){var state_val_26091 = (state_26090[(1)]);if((state_val_26091 === (7)))
{var inst_26085 = (state_26090[(2)]);var state_26090__$1 = state_26090;var statearr_26092_26116 = state_26090__$1;(statearr_26092_26116[(2)] = inst_26085);
(statearr_26092_26116[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26091 === (1)))
{var inst_26067 = null;var state_26090__$1 = (function (){var statearr_26093 = state_26090;(statearr_26093[(7)] = inst_26067);
return statearr_26093;
})();var statearr_26094_26117 = state_26090__$1;(statearr_26094_26117[(2)] = null);
(statearr_26094_26117[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26091 === (4)))
{var inst_26070 = (state_26090[(8)]);var inst_26070__$1 = (state_26090[(2)]);var inst_26071 = (inst_26070__$1 == null);var inst_26072 = cljs.core.not.call(null,inst_26071);var state_26090__$1 = (function (){var statearr_26095 = state_26090;(statearr_26095[(8)] = inst_26070__$1);
return statearr_26095;
})();if(inst_26072)
{var statearr_26096_26118 = state_26090__$1;(statearr_26096_26118[(1)] = (5));
} else
{var statearr_26097_26119 = state_26090__$1;(statearr_26097_26119[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26091 === (6)))
{var state_26090__$1 = state_26090;var statearr_26098_26120 = state_26090__$1;(statearr_26098_26120[(2)] = null);
(statearr_26098_26120[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26091 === (3)))
{var inst_26087 = (state_26090[(2)]);var inst_26088 = cljs.core.async.close_BANG_.call(null,out);var state_26090__$1 = (function (){var statearr_26099 = state_26090;(statearr_26099[(9)] = inst_26087);
return statearr_26099;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26090__$1,inst_26088);
} else
{if((state_val_26091 === (2)))
{var state_26090__$1 = state_26090;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26090__$1,(4),ch);
} else
{if((state_val_26091 === (11)))
{var inst_26070 = (state_26090[(8)]);var inst_26079 = (state_26090[(2)]);var inst_26067 = inst_26070;var state_26090__$1 = (function (){var statearr_26100 = state_26090;(statearr_26100[(7)] = inst_26067);
(statearr_26100[(10)] = inst_26079);
return statearr_26100;
})();var statearr_26101_26121 = state_26090__$1;(statearr_26101_26121[(2)] = null);
(statearr_26101_26121[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26091 === (9)))
{var inst_26070 = (state_26090[(8)]);var state_26090__$1 = state_26090;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26090__$1,(11),out,inst_26070);
} else
{if((state_val_26091 === (5)))
{var inst_26067 = (state_26090[(7)]);var inst_26070 = (state_26090[(8)]);var inst_26074 = cljs.core._EQ_.call(null,inst_26070,inst_26067);var state_26090__$1 = state_26090;if(inst_26074)
{var statearr_26103_26122 = state_26090__$1;(statearr_26103_26122[(1)] = (8));
} else
{var statearr_26104_26123 = state_26090__$1;(statearr_26104_26123[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26091 === (10)))
{var inst_26082 = (state_26090[(2)]);var state_26090__$1 = state_26090;var statearr_26105_26124 = state_26090__$1;(statearr_26105_26124[(2)] = inst_26082);
(statearr_26105_26124[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26091 === (8)))
{var inst_26067 = (state_26090[(7)]);var tmp26102 = inst_26067;var inst_26067__$1 = tmp26102;var state_26090__$1 = (function (){var statearr_26106 = state_26090;(statearr_26106[(7)] = inst_26067__$1);
return statearr_26106;
})();var statearr_26107_26125 = state_26090__$1;(statearr_26107_26125[(2)] = null);
(statearr_26107_26125[(1)] = (2));
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
});})(c__9125__auto___26115,out))
;return ((function (switch__9110__auto__,c__9125__auto___26115,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26111 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26111[(0)] = state_machine__9111__auto__);
(statearr_26111[(1)] = (1));
return statearr_26111;
});
var state_machine__9111__auto____1 = (function (state_26090){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26090);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26112){if((e26112 instanceof Object))
{var ex__9114__auto__ = e26112;var statearr_26113_26126 = state_26090;(statearr_26113_26126[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26090);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26112;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26127 = state_26090;
state_26090 = G__26127;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26090){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26115,out))
})();var state__9127__auto__ = (function (){var statearr_26114 = f__9126__auto__.call(null);(statearr_26114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26115);
return statearr_26114;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26115,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26262 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26262,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26262,out){
return (function (state_26232){var state_val_26233 = (state_26232[(1)]);if((state_val_26233 === (7)))
{var inst_26228 = (state_26232[(2)]);var state_26232__$1 = state_26232;var statearr_26234_26263 = state_26232__$1;(statearr_26234_26263[(2)] = inst_26228);
(statearr_26234_26263[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26233 === (1)))
{var inst_26195 = (new Array(n));var inst_26196 = inst_26195;var inst_26197 = (0);var state_26232__$1 = (function (){var statearr_26235 = state_26232;(statearr_26235[(7)] = inst_26197);
(statearr_26235[(8)] = inst_26196);
return statearr_26235;
})();var statearr_26236_26264 = state_26232__$1;(statearr_26236_26264[(2)] = null);
(statearr_26236_26264[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26233 === (4)))
{var inst_26200 = (state_26232[(9)]);var inst_26200__$1 = (state_26232[(2)]);var inst_26201 = (inst_26200__$1 == null);var inst_26202 = cljs.core.not.call(null,inst_26201);var state_26232__$1 = (function (){var statearr_26237 = state_26232;(statearr_26237[(9)] = inst_26200__$1);
return statearr_26237;
})();if(inst_26202)
{var statearr_26238_26265 = state_26232__$1;(statearr_26238_26265[(1)] = (5));
} else
{var statearr_26239_26266 = state_26232__$1;(statearr_26239_26266[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26233 === (15)))
{var inst_26222 = (state_26232[(2)]);var state_26232__$1 = state_26232;var statearr_26240_26267 = state_26232__$1;(statearr_26240_26267[(2)] = inst_26222);
(statearr_26240_26267[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26233 === (13)))
{var state_26232__$1 = state_26232;var statearr_26241_26268 = state_26232__$1;(statearr_26241_26268[(2)] = null);
(statearr_26241_26268[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26233 === (6)))
{var inst_26197 = (state_26232[(7)]);var inst_26218 = (inst_26197 > (0));var state_26232__$1 = state_26232;if(cljs.core.truth_(inst_26218))
{var statearr_26242_26269 = state_26232__$1;(statearr_26242_26269[(1)] = (12));
} else
{var statearr_26243_26270 = state_26232__$1;(statearr_26243_26270[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26233 === (3)))
{var inst_26230 = (state_26232[(2)]);var state_26232__$1 = state_26232;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26232__$1,inst_26230);
} else
{if((state_val_26233 === (12)))
{var inst_26196 = (state_26232[(8)]);var inst_26220 = cljs.core.vec.call(null,inst_26196);var state_26232__$1 = state_26232;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26232__$1,(15),out,inst_26220);
} else
{if((state_val_26233 === (2)))
{var state_26232__$1 = state_26232;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26232__$1,(4),ch);
} else
{if((state_val_26233 === (11)))
{var inst_26212 = (state_26232[(2)]);var inst_26213 = (new Array(n));var inst_26196 = inst_26213;var inst_26197 = (0);var state_26232__$1 = (function (){var statearr_26244 = state_26232;(statearr_26244[(10)] = inst_26212);
(statearr_26244[(7)] = inst_26197);
(statearr_26244[(8)] = inst_26196);
return statearr_26244;
})();var statearr_26245_26271 = state_26232__$1;(statearr_26245_26271[(2)] = null);
(statearr_26245_26271[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26233 === (9)))
{var inst_26196 = (state_26232[(8)]);var inst_26210 = cljs.core.vec.call(null,inst_26196);var state_26232__$1 = state_26232;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26232__$1,(11),out,inst_26210);
} else
{if((state_val_26233 === (5)))
{var inst_26205 = (state_26232[(11)]);var inst_26200 = (state_26232[(9)]);var inst_26197 = (state_26232[(7)]);var inst_26196 = (state_26232[(8)]);var inst_26204 = (inst_26196[inst_26197] = inst_26200);var inst_26205__$1 = (inst_26197 + (1));var inst_26206 = (inst_26205__$1 < n);var state_26232__$1 = (function (){var statearr_26246 = state_26232;(statearr_26246[(12)] = inst_26204);
(statearr_26246[(11)] = inst_26205__$1);
return statearr_26246;
})();if(cljs.core.truth_(inst_26206))
{var statearr_26247_26272 = state_26232__$1;(statearr_26247_26272[(1)] = (8));
} else
{var statearr_26248_26273 = state_26232__$1;(statearr_26248_26273[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26233 === (14)))
{var inst_26225 = (state_26232[(2)]);var inst_26226 = cljs.core.async.close_BANG_.call(null,out);var state_26232__$1 = (function (){var statearr_26250 = state_26232;(statearr_26250[(13)] = inst_26225);
return statearr_26250;
})();var statearr_26251_26274 = state_26232__$1;(statearr_26251_26274[(2)] = inst_26226);
(statearr_26251_26274[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26233 === (10)))
{var inst_26216 = (state_26232[(2)]);var state_26232__$1 = state_26232;var statearr_26252_26275 = state_26232__$1;(statearr_26252_26275[(2)] = inst_26216);
(statearr_26252_26275[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26233 === (8)))
{var inst_26205 = (state_26232[(11)]);var inst_26196 = (state_26232[(8)]);var tmp26249 = inst_26196;var inst_26196__$1 = tmp26249;var inst_26197 = inst_26205;var state_26232__$1 = (function (){var statearr_26253 = state_26232;(statearr_26253[(7)] = inst_26197);
(statearr_26253[(8)] = inst_26196__$1);
return statearr_26253;
})();var statearr_26254_26276 = state_26232__$1;(statearr_26254_26276[(2)] = null);
(statearr_26254_26276[(1)] = (2));
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
});})(c__9125__auto___26262,out))
;return ((function (switch__9110__auto__,c__9125__auto___26262,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26258[(0)] = state_machine__9111__auto__);
(statearr_26258[(1)] = (1));
return statearr_26258;
});
var state_machine__9111__auto____1 = (function (state_26232){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26232);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26259){if((e26259 instanceof Object))
{var ex__9114__auto__ = e26259;var statearr_26260_26277 = state_26232;(statearr_26260_26277[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26232);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26259;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26278 = state_26232;
state_26232 = G__26278;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26232){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26262,out))
})();var state__9127__auto__ = (function (){var statearr_26261 = f__9126__auto__.call(null);(statearr_26261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26262);
return statearr_26261;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26262,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26421 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26421,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26421,out){
return (function (state_26391){var state_val_26392 = (state_26391[(1)]);if((state_val_26392 === (7)))
{var inst_26387 = (state_26391[(2)]);var state_26391__$1 = state_26391;var statearr_26393_26422 = state_26391__$1;(statearr_26393_26422[(2)] = inst_26387);
(statearr_26393_26422[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26392 === (1)))
{var inst_26350 = [];var inst_26351 = inst_26350;var inst_26352 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_26391__$1 = (function (){var statearr_26394 = state_26391;(statearr_26394[(7)] = inst_26352);
(statearr_26394[(8)] = inst_26351);
return statearr_26394;
})();var statearr_26395_26423 = state_26391__$1;(statearr_26395_26423[(2)] = null);
(statearr_26395_26423[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26392 === (4)))
{var inst_26355 = (state_26391[(9)]);var inst_26355__$1 = (state_26391[(2)]);var inst_26356 = (inst_26355__$1 == null);var inst_26357 = cljs.core.not.call(null,inst_26356);var state_26391__$1 = (function (){var statearr_26396 = state_26391;(statearr_26396[(9)] = inst_26355__$1);
return statearr_26396;
})();if(inst_26357)
{var statearr_26397_26424 = state_26391__$1;(statearr_26397_26424[(1)] = (5));
} else
{var statearr_26398_26425 = state_26391__$1;(statearr_26398_26425[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26392 === (15)))
{var inst_26381 = (state_26391[(2)]);var state_26391__$1 = state_26391;var statearr_26399_26426 = state_26391__$1;(statearr_26399_26426[(2)] = inst_26381);
(statearr_26399_26426[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26392 === (13)))
{var state_26391__$1 = state_26391;var statearr_26400_26427 = state_26391__$1;(statearr_26400_26427[(2)] = null);
(statearr_26400_26427[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26392 === (6)))
{var inst_26351 = (state_26391[(8)]);var inst_26376 = inst_26351.length;var inst_26377 = (inst_26376 > (0));var state_26391__$1 = state_26391;if(cljs.core.truth_(inst_26377))
{var statearr_26401_26428 = state_26391__$1;(statearr_26401_26428[(1)] = (12));
} else
{var statearr_26402_26429 = state_26391__$1;(statearr_26402_26429[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26392 === (3)))
{var inst_26389 = (state_26391[(2)]);var state_26391__$1 = state_26391;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26391__$1,inst_26389);
} else
{if((state_val_26392 === (12)))
{var inst_26351 = (state_26391[(8)]);var inst_26379 = cljs.core.vec.call(null,inst_26351);var state_26391__$1 = state_26391;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26391__$1,(15),out,inst_26379);
} else
{if((state_val_26392 === (2)))
{var state_26391__$1 = state_26391;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26391__$1,(4),ch);
} else
{if((state_val_26392 === (11)))
{var inst_26359 = (state_26391[(10)]);var inst_26355 = (state_26391[(9)]);var inst_26369 = (state_26391[(2)]);var inst_26370 = [];var inst_26371 = inst_26370.push(inst_26355);var inst_26351 = inst_26370;var inst_26352 = inst_26359;var state_26391__$1 = (function (){var statearr_26403 = state_26391;(statearr_26403[(7)] = inst_26352);
(statearr_26403[(11)] = inst_26371);
(statearr_26403[(8)] = inst_26351);
(statearr_26403[(12)] = inst_26369);
return statearr_26403;
})();var statearr_26404_26430 = state_26391__$1;(statearr_26404_26430[(2)] = null);
(statearr_26404_26430[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26392 === (9)))
{var inst_26351 = (state_26391[(8)]);var inst_26367 = cljs.core.vec.call(null,inst_26351);var state_26391__$1 = state_26391;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26391__$1,(11),out,inst_26367);
} else
{if((state_val_26392 === (5)))
{var inst_26352 = (state_26391[(7)]);var inst_26359 = (state_26391[(10)]);var inst_26355 = (state_26391[(9)]);var inst_26359__$1 = f.call(null,inst_26355);var inst_26360 = cljs.core._EQ_.call(null,inst_26359__$1,inst_26352);var inst_26361 = cljs.core.keyword_identical_QMARK_.call(null,inst_26352,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_26362 = (inst_26360) || (inst_26361);var state_26391__$1 = (function (){var statearr_26405 = state_26391;(statearr_26405[(10)] = inst_26359__$1);
return statearr_26405;
})();if(cljs.core.truth_(inst_26362))
{var statearr_26406_26431 = state_26391__$1;(statearr_26406_26431[(1)] = (8));
} else
{var statearr_26407_26432 = state_26391__$1;(statearr_26407_26432[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26392 === (14)))
{var inst_26384 = (state_26391[(2)]);var inst_26385 = cljs.core.async.close_BANG_.call(null,out);var state_26391__$1 = (function (){var statearr_26409 = state_26391;(statearr_26409[(13)] = inst_26384);
return statearr_26409;
})();var statearr_26410_26433 = state_26391__$1;(statearr_26410_26433[(2)] = inst_26385);
(statearr_26410_26433[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26392 === (10)))
{var inst_26374 = (state_26391[(2)]);var state_26391__$1 = state_26391;var statearr_26411_26434 = state_26391__$1;(statearr_26411_26434[(2)] = inst_26374);
(statearr_26411_26434[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26392 === (8)))
{var inst_26351 = (state_26391[(8)]);var inst_26359 = (state_26391[(10)]);var inst_26355 = (state_26391[(9)]);var inst_26364 = inst_26351.push(inst_26355);var tmp26408 = inst_26351;var inst_26351__$1 = tmp26408;var inst_26352 = inst_26359;var state_26391__$1 = (function (){var statearr_26412 = state_26391;(statearr_26412[(14)] = inst_26364);
(statearr_26412[(7)] = inst_26352);
(statearr_26412[(8)] = inst_26351__$1);
return statearr_26412;
})();var statearr_26413_26435 = state_26391__$1;(statearr_26413_26435[(2)] = null);
(statearr_26413_26435[(1)] = (2));
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
});})(c__9125__auto___26421,out))
;return ((function (switch__9110__auto__,c__9125__auto___26421,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26417[(0)] = state_machine__9111__auto__);
(statearr_26417[(1)] = (1));
return statearr_26417;
});
var state_machine__9111__auto____1 = (function (state_26391){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26391);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26418){if((e26418 instanceof Object))
{var ex__9114__auto__ = e26418;var statearr_26419_26436 = state_26391;(statearr_26419_26436[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26391);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26418;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26437 = state_26391;
state_26391 = G__26437;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26391){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26421,out))
})();var state__9127__auto__ = (function (){var statearr_26420 = f__9126__auto__.call(null);(statearr_26420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26421);
return statearr_26420;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26421,out))
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
