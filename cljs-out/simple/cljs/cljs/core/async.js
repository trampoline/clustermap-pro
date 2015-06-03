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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24255 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24255 = (function (f,fn_handler,meta24256){
this.f = f;
this.fn_handler = fn_handler;
this.meta24256 = meta24256;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24255.cljs$lang$type = true;
cljs.core.async.t24255.cljs$lang$ctorStr = "cljs.core.async/t24255";
cljs.core.async.t24255.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24255");
});
cljs.core.async.t24255.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24255.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24255.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24257){var self__ = this;
var _24257__$1 = this;return self__.meta24256;
});
cljs.core.async.t24255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24257,meta24256__$1){var self__ = this;
var _24257__$1 = this;return (new cljs.core.async.t24255(self__.f,self__.fn_handler,meta24256__$1));
});
cljs.core.async.__GT_t24255 = (function __GT_t24255(f__$1,fn_handler__$1,meta24256){return (new cljs.core.async.t24255(f__$1,fn_handler__$1,meta24256));
});
}
return (new cljs.core.async.t24255(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24259 = buff;if(G__24259)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__24259.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24259.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24259);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24259);
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
{var val_24260 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_24260);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_24260,ret){
return (function (){return fn1.call(null,val_24260);
});})(val_24260,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___24261 = n;var x_24262 = (0);while(true){
if((x_24262 < n__4508__auto___24261))
{(a[x_24262] = (0));
{
var G__24263 = (x_24262 + (1));
x_24262 = G__24263;
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
var G__24264 = (i + (1));
i = G__24264;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t24268 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24268 = (function (flag,alt_flag,meta24269){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24269 = meta24269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24268.cljs$lang$type = true;
cljs.core.async.t24268.cljs$lang$ctorStr = "cljs.core.async/t24268";
cljs.core.async.t24268.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24268");
});})(flag))
;
cljs.core.async.t24268.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24268.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t24268.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t24268.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24270){var self__ = this;
var _24270__$1 = this;return self__.meta24269;
});})(flag))
;
cljs.core.async.t24268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24270,meta24269__$1){var self__ = this;
var _24270__$1 = this;return (new cljs.core.async.t24268(self__.flag,self__.alt_flag,meta24269__$1));
});})(flag))
;
cljs.core.async.__GT_t24268 = ((function (flag){
return (function __GT_t24268(flag__$1,alt_flag__$1,meta24269){return (new cljs.core.async.t24268(flag__$1,alt_flag__$1,meta24269));
});})(flag))
;
}
return (new cljs.core.async.t24268(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24274 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24274 = (function (cb,flag,alt_handler,meta24275){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24275 = meta24275;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24274.cljs$lang$type = true;
cljs.core.async.t24274.cljs$lang$ctorStr = "cljs.core.async/t24274";
cljs.core.async.t24274.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24274");
});
cljs.core.async.t24274.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24274.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t24274.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t24274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24276){var self__ = this;
var _24276__$1 = this;return self__.meta24275;
});
cljs.core.async.t24274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24276,meta24275__$1){var self__ = this;
var _24276__$1 = this;return (new cljs.core.async.t24274(self__.cb,self__.flag,self__.alt_handler,meta24275__$1));
});
cljs.core.async.__GT_t24274 = (function __GT_t24274(cb__$1,flag__$1,alt_handler__$1,meta24275){return (new cljs.core.async.t24274(cb__$1,flag__$1,alt_handler__$1,meta24275));
});
}
return (new cljs.core.async.t24274(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24277_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24277_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24278_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24278_SHARP_,port], null));
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
var G__24279 = (i + (1));
i = G__24279;
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
var alts_BANG___delegate = function (ports,p__24280){var map__24282 = p__24280;var map__24282__$1 = ((cljs.core.seq_QMARK_.call(null,map__24282))?cljs.core.apply.call(null,cljs.core.hash_map,map__24282):map__24282);var opts = map__24282__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24280 = null;if (arguments.length > 1) {
  p__24280 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24280);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24283){
var ports = cljs.core.first(arglist__24283);
var p__24280 = cljs.core.rest(arglist__24283);
return alts_BANG___delegate(ports,p__24280);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__11517__auto___24378 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___24378){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___24378){
return (function (state_24354){var state_val_24355 = (state_24354[(1)]);if((state_val_24355 === (7)))
{var inst_24350 = (state_24354[(2)]);var state_24354__$1 = state_24354;var statearr_24356_24379 = state_24354__$1;(statearr_24356_24379[(2)] = inst_24350);
(statearr_24356_24379[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24355 === (1)))
{var state_24354__$1 = state_24354;var statearr_24357_24380 = state_24354__$1;(statearr_24357_24380[(2)] = null);
(statearr_24357_24380[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24355 === (4)))
{var inst_24333 = (state_24354[(7)]);var inst_24333__$1 = (state_24354[(2)]);var inst_24334 = (inst_24333__$1 == null);var state_24354__$1 = (function (){var statearr_24358 = state_24354;(statearr_24358[(7)] = inst_24333__$1);
return statearr_24358;
})();if(cljs.core.truth_(inst_24334))
{var statearr_24359_24381 = state_24354__$1;(statearr_24359_24381[(1)] = (5));
} else
{var statearr_24360_24382 = state_24354__$1;(statearr_24360_24382[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24355 === (13)))
{var state_24354__$1 = state_24354;var statearr_24361_24383 = state_24354__$1;(statearr_24361_24383[(2)] = null);
(statearr_24361_24383[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24355 === (6)))
{var inst_24333 = (state_24354[(7)]);var state_24354__$1 = state_24354;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24354__$1,(11),to,inst_24333);
} else
{if((state_val_24355 === (3)))
{var inst_24352 = (state_24354[(2)]);var state_24354__$1 = state_24354;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24354__$1,inst_24352);
} else
{if((state_val_24355 === (12)))
{var state_24354__$1 = state_24354;var statearr_24362_24384 = state_24354__$1;(statearr_24362_24384[(2)] = null);
(statearr_24362_24384[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24355 === (2)))
{var state_24354__$1 = state_24354;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24354__$1,(4),from);
} else
{if((state_val_24355 === (11)))
{var inst_24343 = (state_24354[(2)]);var state_24354__$1 = state_24354;if(cljs.core.truth_(inst_24343))
{var statearr_24363_24385 = state_24354__$1;(statearr_24363_24385[(1)] = (12));
} else
{var statearr_24364_24386 = state_24354__$1;(statearr_24364_24386[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24355 === (9)))
{var state_24354__$1 = state_24354;var statearr_24365_24387 = state_24354__$1;(statearr_24365_24387[(2)] = null);
(statearr_24365_24387[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24355 === (5)))
{var state_24354__$1 = state_24354;if(cljs.core.truth_(close_QMARK_))
{var statearr_24366_24388 = state_24354__$1;(statearr_24366_24388[(1)] = (8));
} else
{var statearr_24367_24389 = state_24354__$1;(statearr_24367_24389[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24355 === (14)))
{var inst_24348 = (state_24354[(2)]);var state_24354__$1 = state_24354;var statearr_24368_24390 = state_24354__$1;(statearr_24368_24390[(2)] = inst_24348);
(statearr_24368_24390[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24355 === (10)))
{var inst_24340 = (state_24354[(2)]);var state_24354__$1 = state_24354;var statearr_24369_24391 = state_24354__$1;(statearr_24369_24391[(2)] = inst_24340);
(statearr_24369_24391[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24355 === (8)))
{var inst_24337 = cljs.core.async.close_BANG_.call(null,to);var state_24354__$1 = state_24354;var statearr_24370_24392 = state_24354__$1;(statearr_24370_24392[(2)] = inst_24337);
(statearr_24370_24392[(1)] = (10));
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
});})(c__11517__auto___24378))
;return ((function (switch__11461__auto__,c__11517__auto___24378){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24374 = [null,null,null,null,null,null,null,null];(statearr_24374[(0)] = state_machine__11462__auto__);
(statearr_24374[(1)] = (1));
return statearr_24374;
});
var state_machine__11462__auto____1 = (function (state_24354){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24354);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24375){if((e24375 instanceof Object))
{var ex__11465__auto__ = e24375;var statearr_24376_24393 = state_24354;(statearr_24376_24393[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24354);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24375;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24394 = state_24354;
state_24354 = G__24394;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24354){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___24378))
})();var state__11519__auto__ = (function (){var statearr_24377 = f__11518__auto__.call(null);(statearr_24377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24378);
return statearr_24377;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___24378))
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
return (function (p__24578){var vec__24579 = p__24578;var v = cljs.core.nth.call(null,vec__24579,(0),null);var p = cljs.core.nth.call(null,vec__24579,(1),null);var job = vec__24579;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__11517__auto___24761 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___24761,res,vec__24579,v,p,job,jobs,results){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___24761,res,vec__24579,v,p,job,jobs,results){
return (function (state_24584){var state_val_24585 = (state_24584[(1)]);if((state_val_24585 === (2)))
{var inst_24581 = (state_24584[(2)]);var inst_24582 = cljs.core.async.close_BANG_.call(null,res);var state_24584__$1 = (function (){var statearr_24586 = state_24584;(statearr_24586[(7)] = inst_24581);
return statearr_24586;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24584__$1,inst_24582);
} else
{if((state_val_24585 === (1)))
{var state_24584__$1 = state_24584;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24584__$1,(2),res,v);
} else
{return null;
}
}
});})(c__11517__auto___24761,res,vec__24579,v,p,job,jobs,results))
;return ((function (switch__11461__auto__,c__11517__auto___24761,res,vec__24579,v,p,job,jobs,results){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24590 = [null,null,null,null,null,null,null,null];(statearr_24590[(0)] = state_machine__11462__auto__);
(statearr_24590[(1)] = (1));
return statearr_24590;
});
var state_machine__11462__auto____1 = (function (state_24584){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24584);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24591){if((e24591 instanceof Object))
{var ex__11465__auto__ = e24591;var statearr_24592_24762 = state_24584;(statearr_24592_24762[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24584);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24591;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24763 = state_24584;
state_24584 = G__24763;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24584){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___24761,res,vec__24579,v,p,job,jobs,results))
})();var state__11519__auto__ = (function (){var statearr_24593 = f__11518__auto__.call(null);(statearr_24593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24761);
return statearr_24593;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___24761,res,vec__24579,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__24594){var vec__24595 = p__24594;var v = cljs.core.nth.call(null,vec__24595,(0),null);var p = cljs.core.nth.call(null,vec__24595,(1),null);var job = vec__24595;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___24764 = n;var __24765 = (0);while(true){
if((__24765 < n__4508__auto___24764))
{var G__24596_24766 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__24596_24766) {
case "async":
var c__11517__auto___24768 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24765,c__11517__auto___24768,G__24596_24766,n__4508__auto___24764,jobs,results,process,async){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (__24765,c__11517__auto___24768,G__24596_24766,n__4508__auto___24764,jobs,results,process,async){
return (function (state_24609){var state_val_24610 = (state_24609[(1)]);if((state_val_24610 === (7)))
{var inst_24605 = (state_24609[(2)]);var state_24609__$1 = state_24609;var statearr_24611_24769 = state_24609__$1;(statearr_24611_24769[(2)] = inst_24605);
(statearr_24611_24769[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24610 === (6)))
{var state_24609__$1 = state_24609;var statearr_24612_24770 = state_24609__$1;(statearr_24612_24770[(2)] = null);
(statearr_24612_24770[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24610 === (5)))
{var state_24609__$1 = state_24609;var statearr_24613_24771 = state_24609__$1;(statearr_24613_24771[(2)] = null);
(statearr_24613_24771[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24610 === (4)))
{var inst_24599 = (state_24609[(2)]);var inst_24600 = async.call(null,inst_24599);var state_24609__$1 = state_24609;if(cljs.core.truth_(inst_24600))
{var statearr_24614_24772 = state_24609__$1;(statearr_24614_24772[(1)] = (5));
} else
{var statearr_24615_24773 = state_24609__$1;(statearr_24615_24773[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24610 === (3)))
{var inst_24607 = (state_24609[(2)]);var state_24609__$1 = state_24609;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24609__$1,inst_24607);
} else
{if((state_val_24610 === (2)))
{var state_24609__$1 = state_24609;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24609__$1,(4),jobs);
} else
{if((state_val_24610 === (1)))
{var state_24609__$1 = state_24609;var statearr_24616_24774 = state_24609__$1;(statearr_24616_24774[(2)] = null);
(statearr_24616_24774[(1)] = (2));
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
});})(__24765,c__11517__auto___24768,G__24596_24766,n__4508__auto___24764,jobs,results,process,async))
;return ((function (__24765,switch__11461__auto__,c__11517__auto___24768,G__24596_24766,n__4508__auto___24764,jobs,results,process,async){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24620 = [null,null,null,null,null,null,null];(statearr_24620[(0)] = state_machine__11462__auto__);
(statearr_24620[(1)] = (1));
return statearr_24620;
});
var state_machine__11462__auto____1 = (function (state_24609){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24609);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24621){if((e24621 instanceof Object))
{var ex__11465__auto__ = e24621;var statearr_24622_24775 = state_24609;(statearr_24622_24775[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24609);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24621;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24776 = state_24609;
state_24609 = G__24776;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24609){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(__24765,switch__11461__auto__,c__11517__auto___24768,G__24596_24766,n__4508__auto___24764,jobs,results,process,async))
})();var state__11519__auto__ = (function (){var statearr_24623 = f__11518__auto__.call(null);(statearr_24623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24768);
return statearr_24623;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(__24765,c__11517__auto___24768,G__24596_24766,n__4508__auto___24764,jobs,results,process,async))
);

break;
case "compute":
var c__11517__auto___24777 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24765,c__11517__auto___24777,G__24596_24766,n__4508__auto___24764,jobs,results,process,async){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (__24765,c__11517__auto___24777,G__24596_24766,n__4508__auto___24764,jobs,results,process,async){
return (function (state_24636){var state_val_24637 = (state_24636[(1)]);if((state_val_24637 === (7)))
{var inst_24632 = (state_24636[(2)]);var state_24636__$1 = state_24636;var statearr_24638_24778 = state_24636__$1;(statearr_24638_24778[(2)] = inst_24632);
(statearr_24638_24778[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24637 === (6)))
{var state_24636__$1 = state_24636;var statearr_24639_24779 = state_24636__$1;(statearr_24639_24779[(2)] = null);
(statearr_24639_24779[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24637 === (5)))
{var state_24636__$1 = state_24636;var statearr_24640_24780 = state_24636__$1;(statearr_24640_24780[(2)] = null);
(statearr_24640_24780[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24637 === (4)))
{var inst_24626 = (state_24636[(2)]);var inst_24627 = process.call(null,inst_24626);var state_24636__$1 = state_24636;if(cljs.core.truth_(inst_24627))
{var statearr_24641_24781 = state_24636__$1;(statearr_24641_24781[(1)] = (5));
} else
{var statearr_24642_24782 = state_24636__$1;(statearr_24642_24782[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24637 === (3)))
{var inst_24634 = (state_24636[(2)]);var state_24636__$1 = state_24636;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24636__$1,inst_24634);
} else
{if((state_val_24637 === (2)))
{var state_24636__$1 = state_24636;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24636__$1,(4),jobs);
} else
{if((state_val_24637 === (1)))
{var state_24636__$1 = state_24636;var statearr_24643_24783 = state_24636__$1;(statearr_24643_24783[(2)] = null);
(statearr_24643_24783[(1)] = (2));
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
});})(__24765,c__11517__auto___24777,G__24596_24766,n__4508__auto___24764,jobs,results,process,async))
;return ((function (__24765,switch__11461__auto__,c__11517__auto___24777,G__24596_24766,n__4508__auto___24764,jobs,results,process,async){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24647 = [null,null,null,null,null,null,null];(statearr_24647[(0)] = state_machine__11462__auto__);
(statearr_24647[(1)] = (1));
return statearr_24647;
});
var state_machine__11462__auto____1 = (function (state_24636){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24636);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24648){if((e24648 instanceof Object))
{var ex__11465__auto__ = e24648;var statearr_24649_24784 = state_24636;(statearr_24649_24784[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24636);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24648;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24785 = state_24636;
state_24636 = G__24785;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24636){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(__24765,switch__11461__auto__,c__11517__auto___24777,G__24596_24766,n__4508__auto___24764,jobs,results,process,async))
})();var state__11519__auto__ = (function (){var statearr_24650 = f__11518__auto__.call(null);(statearr_24650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24777);
return statearr_24650;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(__24765,c__11517__auto___24777,G__24596_24766,n__4508__auto___24764,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__24786 = (__24765 + (1));
__24765 = G__24786;
continue;
}
} else
{}
break;
}
var c__11517__auto___24787 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___24787,jobs,results,process,async){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___24787,jobs,results,process,async){
return (function (state_24672){var state_val_24673 = (state_24672[(1)]);if((state_val_24673 === (9)))
{var inst_24665 = (state_24672[(2)]);var state_24672__$1 = (function (){var statearr_24674 = state_24672;(statearr_24674[(7)] = inst_24665);
return statearr_24674;
})();var statearr_24675_24788 = state_24672__$1;(statearr_24675_24788[(2)] = null);
(statearr_24675_24788[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24673 === (8)))
{var inst_24658 = (state_24672[(8)]);var inst_24663 = (state_24672[(2)]);var state_24672__$1 = (function (){var statearr_24676 = state_24672;(statearr_24676[(9)] = inst_24663);
return statearr_24676;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24672__$1,(9),results,inst_24658);
} else
{if((state_val_24673 === (7)))
{var inst_24668 = (state_24672[(2)]);var state_24672__$1 = state_24672;var statearr_24677_24789 = state_24672__$1;(statearr_24677_24789[(2)] = inst_24668);
(statearr_24677_24789[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24673 === (6)))
{var inst_24653 = (state_24672[(10)]);var inst_24658 = (state_24672[(8)]);var inst_24658__$1 = cljs.core.async.chan.call(null,(1));var inst_24659 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24660 = [inst_24653,inst_24658__$1];var inst_24661 = (new cljs.core.PersistentVector(null,2,(5),inst_24659,inst_24660,null));var state_24672__$1 = (function (){var statearr_24678 = state_24672;(statearr_24678[(8)] = inst_24658__$1);
return statearr_24678;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24672__$1,(8),jobs,inst_24661);
} else
{if((state_val_24673 === (5)))
{var inst_24656 = cljs.core.async.close_BANG_.call(null,jobs);var state_24672__$1 = state_24672;var statearr_24679_24790 = state_24672__$1;(statearr_24679_24790[(2)] = inst_24656);
(statearr_24679_24790[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24673 === (4)))
{var inst_24653 = (state_24672[(10)]);var inst_24653__$1 = (state_24672[(2)]);var inst_24654 = (inst_24653__$1 == null);var state_24672__$1 = (function (){var statearr_24680 = state_24672;(statearr_24680[(10)] = inst_24653__$1);
return statearr_24680;
})();if(cljs.core.truth_(inst_24654))
{var statearr_24681_24791 = state_24672__$1;(statearr_24681_24791[(1)] = (5));
} else
{var statearr_24682_24792 = state_24672__$1;(statearr_24682_24792[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24673 === (3)))
{var inst_24670 = (state_24672[(2)]);var state_24672__$1 = state_24672;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24672__$1,inst_24670);
} else
{if((state_val_24673 === (2)))
{var state_24672__$1 = state_24672;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24672__$1,(4),from);
} else
{if((state_val_24673 === (1)))
{var state_24672__$1 = state_24672;var statearr_24683_24793 = state_24672__$1;(statearr_24683_24793[(2)] = null);
(statearr_24683_24793[(1)] = (2));
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
});})(c__11517__auto___24787,jobs,results,process,async))
;return ((function (switch__11461__auto__,c__11517__auto___24787,jobs,results,process,async){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24687 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24687[(0)] = state_machine__11462__auto__);
(statearr_24687[(1)] = (1));
return statearr_24687;
});
var state_machine__11462__auto____1 = (function (state_24672){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24672);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24688){if((e24688 instanceof Object))
{var ex__11465__auto__ = e24688;var statearr_24689_24794 = state_24672;(statearr_24689_24794[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24672);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24688;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24795 = state_24672;
state_24672 = G__24795;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24672){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___24787,jobs,results,process,async))
})();var state__11519__auto__ = (function (){var statearr_24690 = f__11518__auto__.call(null);(statearr_24690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24787);
return statearr_24690;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___24787,jobs,results,process,async))
);
var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,jobs,results,process,async){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,jobs,results,process,async){
return (function (state_24728){var state_val_24729 = (state_24728[(1)]);if((state_val_24729 === (7)))
{var inst_24724 = (state_24728[(2)]);var state_24728__$1 = state_24728;var statearr_24730_24796 = state_24728__$1;(statearr_24730_24796[(2)] = inst_24724);
(statearr_24730_24796[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24729 === (20)))
{var state_24728__$1 = state_24728;var statearr_24731_24797 = state_24728__$1;(statearr_24731_24797[(2)] = null);
(statearr_24731_24797[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24729 === (1)))
{var state_24728__$1 = state_24728;var statearr_24732_24798 = state_24728__$1;(statearr_24732_24798[(2)] = null);
(statearr_24732_24798[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24729 === (4)))
{var inst_24693 = (state_24728[(7)]);var inst_24693__$1 = (state_24728[(2)]);var inst_24694 = (inst_24693__$1 == null);var state_24728__$1 = (function (){var statearr_24733 = state_24728;(statearr_24733[(7)] = inst_24693__$1);
return statearr_24733;
})();if(cljs.core.truth_(inst_24694))
{var statearr_24734_24799 = state_24728__$1;(statearr_24734_24799[(1)] = (5));
} else
{var statearr_24735_24800 = state_24728__$1;(statearr_24735_24800[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24729 === (15)))
{var inst_24706 = (state_24728[(8)]);var state_24728__$1 = state_24728;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24728__$1,(18),to,inst_24706);
} else
{if((state_val_24729 === (21)))
{var inst_24719 = (state_24728[(2)]);var state_24728__$1 = state_24728;var statearr_24736_24801 = state_24728__$1;(statearr_24736_24801[(2)] = inst_24719);
(statearr_24736_24801[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24729 === (13)))
{var inst_24721 = (state_24728[(2)]);var state_24728__$1 = (function (){var statearr_24737 = state_24728;(statearr_24737[(9)] = inst_24721);
return statearr_24737;
})();var statearr_24738_24802 = state_24728__$1;(statearr_24738_24802[(2)] = null);
(statearr_24738_24802[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24729 === (6)))
{var inst_24693 = (state_24728[(7)]);var state_24728__$1 = state_24728;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24728__$1,(11),inst_24693);
} else
{if((state_val_24729 === (17)))
{var inst_24714 = (state_24728[(2)]);var state_24728__$1 = state_24728;if(cljs.core.truth_(inst_24714))
{var statearr_24739_24803 = state_24728__$1;(statearr_24739_24803[(1)] = (19));
} else
{var statearr_24740_24804 = state_24728__$1;(statearr_24740_24804[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24729 === (3)))
{var inst_24726 = (state_24728[(2)]);var state_24728__$1 = state_24728;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24728__$1,inst_24726);
} else
{if((state_val_24729 === (12)))
{var inst_24703 = (state_24728[(10)]);var state_24728__$1 = state_24728;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24728__$1,(14),inst_24703);
} else
{if((state_val_24729 === (2)))
{var state_24728__$1 = state_24728;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24728__$1,(4),results);
} else
{if((state_val_24729 === (19)))
{var state_24728__$1 = state_24728;var statearr_24741_24805 = state_24728__$1;(statearr_24741_24805[(2)] = null);
(statearr_24741_24805[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24729 === (11)))
{var inst_24703 = (state_24728[(2)]);var state_24728__$1 = (function (){var statearr_24742 = state_24728;(statearr_24742[(10)] = inst_24703);
return statearr_24742;
})();var statearr_24743_24806 = state_24728__$1;(statearr_24743_24806[(2)] = null);
(statearr_24743_24806[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24729 === (9)))
{var state_24728__$1 = state_24728;var statearr_24744_24807 = state_24728__$1;(statearr_24744_24807[(2)] = null);
(statearr_24744_24807[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24729 === (5)))
{var state_24728__$1 = state_24728;if(cljs.core.truth_(close_QMARK_))
{var statearr_24745_24808 = state_24728__$1;(statearr_24745_24808[(1)] = (8));
} else
{var statearr_24746_24809 = state_24728__$1;(statearr_24746_24809[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24729 === (14)))
{var inst_24708 = (state_24728[(11)]);var inst_24706 = (state_24728[(8)]);var inst_24706__$1 = (state_24728[(2)]);var inst_24707 = (inst_24706__$1 == null);var inst_24708__$1 = cljs.core.not.call(null,inst_24707);var state_24728__$1 = (function (){var statearr_24747 = state_24728;(statearr_24747[(11)] = inst_24708__$1);
(statearr_24747[(8)] = inst_24706__$1);
return statearr_24747;
})();if(inst_24708__$1)
{var statearr_24748_24810 = state_24728__$1;(statearr_24748_24810[(1)] = (15));
} else
{var statearr_24749_24811 = state_24728__$1;(statearr_24749_24811[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24729 === (16)))
{var inst_24708 = (state_24728[(11)]);var state_24728__$1 = state_24728;var statearr_24750_24812 = state_24728__$1;(statearr_24750_24812[(2)] = inst_24708);
(statearr_24750_24812[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24729 === (10)))
{var inst_24700 = (state_24728[(2)]);var state_24728__$1 = state_24728;var statearr_24751_24813 = state_24728__$1;(statearr_24751_24813[(2)] = inst_24700);
(statearr_24751_24813[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24729 === (18)))
{var inst_24711 = (state_24728[(2)]);var state_24728__$1 = state_24728;var statearr_24752_24814 = state_24728__$1;(statearr_24752_24814[(2)] = inst_24711);
(statearr_24752_24814[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24729 === (8)))
{var inst_24697 = cljs.core.async.close_BANG_.call(null,to);var state_24728__$1 = state_24728;var statearr_24753_24815 = state_24728__$1;(statearr_24753_24815[(2)] = inst_24697);
(statearr_24753_24815[(1)] = (10));
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
var state_machine__11462__auto____0 = (function (){var statearr_24757 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24757[(0)] = state_machine__11462__auto__);
(statearr_24757[(1)] = (1));
return statearr_24757;
});
var state_machine__11462__auto____1 = (function (state_24728){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24728);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24758){if((e24758 instanceof Object))
{var ex__11465__auto__ = e24758;var statearr_24759_24816 = state_24728;(statearr_24759_24816[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24728);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24758;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24817 = state_24728;
state_24728 = G__24817;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24728){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,jobs,results,process,async))
})();var state__11519__auto__ = (function (){var statearr_24760 = f__11518__auto__.call(null);(statearr_24760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_24760;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11517__auto___24918 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___24918,tc,fc){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___24918,tc,fc){
return (function (state_24893){var state_val_24894 = (state_24893[(1)]);if((state_val_24894 === (7)))
{var inst_24889 = (state_24893[(2)]);var state_24893__$1 = state_24893;var statearr_24895_24919 = state_24893__$1;(statearr_24895_24919[(2)] = inst_24889);
(statearr_24895_24919[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24894 === (1)))
{var state_24893__$1 = state_24893;var statearr_24896_24920 = state_24893__$1;(statearr_24896_24920[(2)] = null);
(statearr_24896_24920[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24894 === (4)))
{var inst_24870 = (state_24893[(7)]);var inst_24870__$1 = (state_24893[(2)]);var inst_24871 = (inst_24870__$1 == null);var state_24893__$1 = (function (){var statearr_24897 = state_24893;(statearr_24897[(7)] = inst_24870__$1);
return statearr_24897;
})();if(cljs.core.truth_(inst_24871))
{var statearr_24898_24921 = state_24893__$1;(statearr_24898_24921[(1)] = (5));
} else
{var statearr_24899_24922 = state_24893__$1;(statearr_24899_24922[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24894 === (13)))
{var state_24893__$1 = state_24893;var statearr_24900_24923 = state_24893__$1;(statearr_24900_24923[(2)] = null);
(statearr_24900_24923[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24894 === (6)))
{var inst_24870 = (state_24893[(7)]);var inst_24876 = p.call(null,inst_24870);var state_24893__$1 = state_24893;if(cljs.core.truth_(inst_24876))
{var statearr_24901_24924 = state_24893__$1;(statearr_24901_24924[(1)] = (9));
} else
{var statearr_24902_24925 = state_24893__$1;(statearr_24902_24925[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24894 === (3)))
{var inst_24891 = (state_24893[(2)]);var state_24893__$1 = state_24893;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24893__$1,inst_24891);
} else
{if((state_val_24894 === (12)))
{var state_24893__$1 = state_24893;var statearr_24903_24926 = state_24893__$1;(statearr_24903_24926[(2)] = null);
(statearr_24903_24926[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24894 === (2)))
{var state_24893__$1 = state_24893;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24893__$1,(4),ch);
} else
{if((state_val_24894 === (11)))
{var inst_24870 = (state_24893[(7)]);var inst_24880 = (state_24893[(2)]);var state_24893__$1 = state_24893;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24893__$1,(8),inst_24880,inst_24870);
} else
{if((state_val_24894 === (9)))
{var state_24893__$1 = state_24893;var statearr_24904_24927 = state_24893__$1;(statearr_24904_24927[(2)] = tc);
(statearr_24904_24927[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24894 === (5)))
{var inst_24873 = cljs.core.async.close_BANG_.call(null,tc);var inst_24874 = cljs.core.async.close_BANG_.call(null,fc);var state_24893__$1 = (function (){var statearr_24905 = state_24893;(statearr_24905[(8)] = inst_24873);
return statearr_24905;
})();var statearr_24906_24928 = state_24893__$1;(statearr_24906_24928[(2)] = inst_24874);
(statearr_24906_24928[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24894 === (14)))
{var inst_24887 = (state_24893[(2)]);var state_24893__$1 = state_24893;var statearr_24907_24929 = state_24893__$1;(statearr_24907_24929[(2)] = inst_24887);
(statearr_24907_24929[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24894 === (10)))
{var state_24893__$1 = state_24893;var statearr_24908_24930 = state_24893__$1;(statearr_24908_24930[(2)] = fc);
(statearr_24908_24930[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24894 === (8)))
{var inst_24882 = (state_24893[(2)]);var state_24893__$1 = state_24893;if(cljs.core.truth_(inst_24882))
{var statearr_24909_24931 = state_24893__$1;(statearr_24909_24931[(1)] = (12));
} else
{var statearr_24910_24932 = state_24893__$1;(statearr_24910_24932[(1)] = (13));
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
});})(c__11517__auto___24918,tc,fc))
;return ((function (switch__11461__auto__,c__11517__auto___24918,tc,fc){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24914 = [null,null,null,null,null,null,null,null,null];(statearr_24914[(0)] = state_machine__11462__auto__);
(statearr_24914[(1)] = (1));
return statearr_24914;
});
var state_machine__11462__auto____1 = (function (state_24893){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24893);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24915){if((e24915 instanceof Object))
{var ex__11465__auto__ = e24915;var statearr_24916_24933 = state_24893;(statearr_24916_24933[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24893);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24915;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24934 = state_24893;
state_24893 = G__24934;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24893){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___24918,tc,fc))
})();var state__11519__auto__ = (function (){var statearr_24917 = f__11518__auto__.call(null);(statearr_24917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24918);
return statearr_24917;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___24918,tc,fc))
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
return (function (state_24981){var state_val_24982 = (state_24981[(1)]);if((state_val_24982 === (7)))
{var inst_24977 = (state_24981[(2)]);var state_24981__$1 = state_24981;var statearr_24983_24999 = state_24981__$1;(statearr_24983_24999[(2)] = inst_24977);
(statearr_24983_24999[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24982 === (6)))
{var inst_24967 = (state_24981[(7)]);var inst_24970 = (state_24981[(8)]);var inst_24974 = f.call(null,inst_24967,inst_24970);var inst_24967__$1 = inst_24974;var state_24981__$1 = (function (){var statearr_24984 = state_24981;(statearr_24984[(7)] = inst_24967__$1);
return statearr_24984;
})();var statearr_24985_25000 = state_24981__$1;(statearr_24985_25000[(2)] = null);
(statearr_24985_25000[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24982 === (5)))
{var inst_24967 = (state_24981[(7)]);var state_24981__$1 = state_24981;var statearr_24986_25001 = state_24981__$1;(statearr_24986_25001[(2)] = inst_24967);
(statearr_24986_25001[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24982 === (4)))
{var inst_24970 = (state_24981[(8)]);var inst_24970__$1 = (state_24981[(2)]);var inst_24971 = (inst_24970__$1 == null);var state_24981__$1 = (function (){var statearr_24987 = state_24981;(statearr_24987[(8)] = inst_24970__$1);
return statearr_24987;
})();if(cljs.core.truth_(inst_24971))
{var statearr_24988_25002 = state_24981__$1;(statearr_24988_25002[(1)] = (5));
} else
{var statearr_24989_25003 = state_24981__$1;(statearr_24989_25003[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24982 === (3)))
{var inst_24979 = (state_24981[(2)]);var state_24981__$1 = state_24981;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24981__$1,inst_24979);
} else
{if((state_val_24982 === (2)))
{var state_24981__$1 = state_24981;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24981__$1,(4),ch);
} else
{if((state_val_24982 === (1)))
{var inst_24967 = init;var state_24981__$1 = (function (){var statearr_24990 = state_24981;(statearr_24990[(7)] = inst_24967);
return statearr_24990;
})();var statearr_24991_25004 = state_24981__$1;(statearr_24991_25004[(2)] = null);
(statearr_24991_25004[(1)] = (2));
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
var state_machine__11462__auto____0 = (function (){var statearr_24995 = [null,null,null,null,null,null,null,null,null];(statearr_24995[(0)] = state_machine__11462__auto__);
(statearr_24995[(1)] = (1));
return statearr_24995;
});
var state_machine__11462__auto____1 = (function (state_24981){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24981);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24996){if((e24996 instanceof Object))
{var ex__11465__auto__ = e24996;var statearr_24997_25005 = state_24981;(statearr_24997_25005[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24981);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24996;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25006 = state_24981;
state_24981 = G__25006;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24981){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_24998 = f__11518__auto__.call(null);(statearr_24998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_24998;
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
return (function (state_25080){var state_val_25081 = (state_25080[(1)]);if((state_val_25081 === (7)))
{var inst_25062 = (state_25080[(2)]);var state_25080__$1 = state_25080;var statearr_25082_25105 = state_25080__$1;(statearr_25082_25105[(2)] = inst_25062);
(statearr_25082_25105[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (1)))
{var inst_25056 = cljs.core.seq.call(null,coll);var inst_25057 = inst_25056;var state_25080__$1 = (function (){var statearr_25083 = state_25080;(statearr_25083[(7)] = inst_25057);
return statearr_25083;
})();var statearr_25084_25106 = state_25080__$1;(statearr_25084_25106[(2)] = null);
(statearr_25084_25106[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (4)))
{var inst_25057 = (state_25080[(7)]);var inst_25060 = cljs.core.first.call(null,inst_25057);var state_25080__$1 = state_25080;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25080__$1,(7),ch,inst_25060);
} else
{if((state_val_25081 === (13)))
{var inst_25074 = (state_25080[(2)]);var state_25080__$1 = state_25080;var statearr_25085_25107 = state_25080__$1;(statearr_25085_25107[(2)] = inst_25074);
(statearr_25085_25107[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (6)))
{var inst_25065 = (state_25080[(2)]);var state_25080__$1 = state_25080;if(cljs.core.truth_(inst_25065))
{var statearr_25086_25108 = state_25080__$1;(statearr_25086_25108[(1)] = (8));
} else
{var statearr_25087_25109 = state_25080__$1;(statearr_25087_25109[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (3)))
{var inst_25078 = (state_25080[(2)]);var state_25080__$1 = state_25080;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25080__$1,inst_25078);
} else
{if((state_val_25081 === (12)))
{var state_25080__$1 = state_25080;var statearr_25088_25110 = state_25080__$1;(statearr_25088_25110[(2)] = null);
(statearr_25088_25110[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (2)))
{var inst_25057 = (state_25080[(7)]);var state_25080__$1 = state_25080;if(cljs.core.truth_(inst_25057))
{var statearr_25089_25111 = state_25080__$1;(statearr_25089_25111[(1)] = (4));
} else
{var statearr_25090_25112 = state_25080__$1;(statearr_25090_25112[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (11)))
{var inst_25071 = cljs.core.async.close_BANG_.call(null,ch);var state_25080__$1 = state_25080;var statearr_25091_25113 = state_25080__$1;(statearr_25091_25113[(2)] = inst_25071);
(statearr_25091_25113[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (9)))
{var state_25080__$1 = state_25080;if(cljs.core.truth_(close_QMARK_))
{var statearr_25092_25114 = state_25080__$1;(statearr_25092_25114[(1)] = (11));
} else
{var statearr_25093_25115 = state_25080__$1;(statearr_25093_25115[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (5)))
{var inst_25057 = (state_25080[(7)]);var state_25080__$1 = state_25080;var statearr_25094_25116 = state_25080__$1;(statearr_25094_25116[(2)] = inst_25057);
(statearr_25094_25116[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (10)))
{var inst_25076 = (state_25080[(2)]);var state_25080__$1 = state_25080;var statearr_25095_25117 = state_25080__$1;(statearr_25095_25117[(2)] = inst_25076);
(statearr_25095_25117[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (8)))
{var inst_25057 = (state_25080[(7)]);var inst_25067 = cljs.core.next.call(null,inst_25057);var inst_25057__$1 = inst_25067;var state_25080__$1 = (function (){var statearr_25096 = state_25080;(statearr_25096[(7)] = inst_25057__$1);
return statearr_25096;
})();var statearr_25097_25118 = state_25080__$1;(statearr_25097_25118[(2)] = null);
(statearr_25097_25118[(1)] = (2));
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
var state_machine__11462__auto____0 = (function (){var statearr_25101 = [null,null,null,null,null,null,null,null];(statearr_25101[(0)] = state_machine__11462__auto__);
(statearr_25101[(1)] = (1));
return statearr_25101;
});
var state_machine__11462__auto____1 = (function (state_25080){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_25080);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e25102){if((e25102 instanceof Object))
{var ex__11465__auto__ = e25102;var statearr_25103_25119 = state_25080;(statearr_25103_25119[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25080);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25102;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25120 = state_25080;
state_25080 = G__25120;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_25080){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_25080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_25104 = f__11518__auto__.call(null);(statearr_25104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_25104;
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
cljs.core.async.Mux = (function (){var obj25122 = {};return obj25122;
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
cljs.core.async.Mult = (function (){var obj25124 = {};return obj25124;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25346 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25346 = (function (cs,ch,mult,meta25347){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25347 = meta25347;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25346.cljs$lang$type = true;
cljs.core.async.t25346.cljs$lang$ctorStr = "cljs.core.async/t25346";
cljs.core.async.t25346.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25346");
});})(cs))
;
cljs.core.async.t25346.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25346.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25346.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25346.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25346.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25346.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25346.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25348){var self__ = this;
var _25348__$1 = this;return self__.meta25347;
});})(cs))
;
cljs.core.async.t25346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25348,meta25347__$1){var self__ = this;
var _25348__$1 = this;return (new cljs.core.async.t25346(self__.cs,self__.ch,self__.mult,meta25347__$1));
});})(cs))
;
cljs.core.async.__GT_t25346 = ((function (cs){
return (function __GT_t25346(cs__$1,ch__$1,mult__$1,meta25347){return (new cljs.core.async.t25346(cs__$1,ch__$1,mult__$1,meta25347));
});})(cs))
;
}
return (new cljs.core.async.t25346(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11517__auto___25567 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___25567,cs,m,dchan,dctr,done){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___25567,cs,m,dchan,dctr,done){
return (function (state_25479){var state_val_25480 = (state_25479[(1)]);if((state_val_25480 === (7)))
{var inst_25475 = (state_25479[(2)]);var state_25479__$1 = state_25479;var statearr_25481_25568 = state_25479__$1;(statearr_25481_25568[(2)] = inst_25475);
(statearr_25481_25568[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (20)))
{var inst_25380 = (state_25479[(7)]);var inst_25390 = cljs.core.first.call(null,inst_25380);var inst_25391 = cljs.core.nth.call(null,inst_25390,(0),null);var inst_25392 = cljs.core.nth.call(null,inst_25390,(1),null);var state_25479__$1 = (function (){var statearr_25482 = state_25479;(statearr_25482[(8)] = inst_25391);
return statearr_25482;
})();if(cljs.core.truth_(inst_25392))
{var statearr_25483_25569 = state_25479__$1;(statearr_25483_25569[(1)] = (22));
} else
{var statearr_25484_25570 = state_25479__$1;(statearr_25484_25570[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (27)))
{var inst_25422 = (state_25479[(9)]);var inst_25427 = (state_25479[(10)]);var inst_25420 = (state_25479[(11)]);var inst_25351 = (state_25479[(12)]);var inst_25427__$1 = cljs.core._nth.call(null,inst_25420,inst_25422);var inst_25428 = cljs.core.async.put_BANG_.call(null,inst_25427__$1,inst_25351,done);var state_25479__$1 = (function (){var statearr_25485 = state_25479;(statearr_25485[(10)] = inst_25427__$1);
return statearr_25485;
})();if(cljs.core.truth_(inst_25428))
{var statearr_25486_25571 = state_25479__$1;(statearr_25486_25571[(1)] = (30));
} else
{var statearr_25487_25572 = state_25479__$1;(statearr_25487_25572[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (1)))
{var state_25479__$1 = state_25479;var statearr_25488_25573 = state_25479__$1;(statearr_25488_25573[(2)] = null);
(statearr_25488_25573[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (24)))
{var inst_25380 = (state_25479[(7)]);var inst_25397 = (state_25479[(2)]);var inst_25398 = cljs.core.next.call(null,inst_25380);var inst_25360 = inst_25398;var inst_25361 = null;var inst_25362 = (0);var inst_25363 = (0);var state_25479__$1 = (function (){var statearr_25489 = state_25479;(statearr_25489[(13)] = inst_25362);
(statearr_25489[(14)] = inst_25363);
(statearr_25489[(15)] = inst_25360);
(statearr_25489[(16)] = inst_25361);
(statearr_25489[(17)] = inst_25397);
return statearr_25489;
})();var statearr_25490_25574 = state_25479__$1;(statearr_25490_25574[(2)] = null);
(statearr_25490_25574[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (39)))
{var state_25479__$1 = state_25479;var statearr_25494_25575 = state_25479__$1;(statearr_25494_25575[(2)] = null);
(statearr_25494_25575[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (4)))
{var inst_25351 = (state_25479[(12)]);var inst_25351__$1 = (state_25479[(2)]);var inst_25352 = (inst_25351__$1 == null);var state_25479__$1 = (function (){var statearr_25495 = state_25479;(statearr_25495[(12)] = inst_25351__$1);
return statearr_25495;
})();if(cljs.core.truth_(inst_25352))
{var statearr_25496_25576 = state_25479__$1;(statearr_25496_25576[(1)] = (5));
} else
{var statearr_25497_25577 = state_25479__$1;(statearr_25497_25577[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (15)))
{var inst_25362 = (state_25479[(13)]);var inst_25363 = (state_25479[(14)]);var inst_25360 = (state_25479[(15)]);var inst_25361 = (state_25479[(16)]);var inst_25376 = (state_25479[(2)]);var inst_25377 = (inst_25363 + (1));var tmp25491 = inst_25362;var tmp25492 = inst_25360;var tmp25493 = inst_25361;var inst_25360__$1 = tmp25492;var inst_25361__$1 = tmp25493;var inst_25362__$1 = tmp25491;var inst_25363__$1 = inst_25377;var state_25479__$1 = (function (){var statearr_25498 = state_25479;(statearr_25498[(13)] = inst_25362__$1);
(statearr_25498[(14)] = inst_25363__$1);
(statearr_25498[(18)] = inst_25376);
(statearr_25498[(15)] = inst_25360__$1);
(statearr_25498[(16)] = inst_25361__$1);
return statearr_25498;
})();var statearr_25499_25578 = state_25479__$1;(statearr_25499_25578[(2)] = null);
(statearr_25499_25578[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (21)))
{var inst_25401 = (state_25479[(2)]);var state_25479__$1 = state_25479;var statearr_25503_25579 = state_25479__$1;(statearr_25503_25579[(2)] = inst_25401);
(statearr_25503_25579[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (31)))
{var inst_25427 = (state_25479[(10)]);var inst_25431 = done.call(null,null);var inst_25432 = cljs.core.async.untap_STAR_.call(null,m,inst_25427);var state_25479__$1 = (function (){var statearr_25504 = state_25479;(statearr_25504[(19)] = inst_25431);
return statearr_25504;
})();var statearr_25505_25580 = state_25479__$1;(statearr_25505_25580[(2)] = inst_25432);
(statearr_25505_25580[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (32)))
{var inst_25422 = (state_25479[(9)]);var inst_25421 = (state_25479[(20)]);var inst_25419 = (state_25479[(21)]);var inst_25420 = (state_25479[(11)]);var inst_25434 = (state_25479[(2)]);var inst_25435 = (inst_25422 + (1));var tmp25500 = inst_25421;var tmp25501 = inst_25419;var tmp25502 = inst_25420;var inst_25419__$1 = tmp25501;var inst_25420__$1 = tmp25502;var inst_25421__$1 = tmp25500;var inst_25422__$1 = inst_25435;var state_25479__$1 = (function (){var statearr_25506 = state_25479;(statearr_25506[(9)] = inst_25422__$1);
(statearr_25506[(20)] = inst_25421__$1);
(statearr_25506[(21)] = inst_25419__$1);
(statearr_25506[(22)] = inst_25434);
(statearr_25506[(11)] = inst_25420__$1);
return statearr_25506;
})();var statearr_25507_25581 = state_25479__$1;(statearr_25507_25581[(2)] = null);
(statearr_25507_25581[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (40)))
{var inst_25447 = (state_25479[(23)]);var inst_25451 = done.call(null,null);var inst_25452 = cljs.core.async.untap_STAR_.call(null,m,inst_25447);var state_25479__$1 = (function (){var statearr_25508 = state_25479;(statearr_25508[(24)] = inst_25451);
return statearr_25508;
})();var statearr_25509_25582 = state_25479__$1;(statearr_25509_25582[(2)] = inst_25452);
(statearr_25509_25582[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (33)))
{var inst_25438 = (state_25479[(25)]);var inst_25440 = cljs.core.chunked_seq_QMARK_.call(null,inst_25438);var state_25479__$1 = state_25479;if(inst_25440)
{var statearr_25510_25583 = state_25479__$1;(statearr_25510_25583[(1)] = (36));
} else
{var statearr_25511_25584 = state_25479__$1;(statearr_25511_25584[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (13)))
{var inst_25370 = (state_25479[(26)]);var inst_25373 = cljs.core.async.close_BANG_.call(null,inst_25370);var state_25479__$1 = state_25479;var statearr_25512_25585 = state_25479__$1;(statearr_25512_25585[(2)] = inst_25373);
(statearr_25512_25585[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (22)))
{var inst_25391 = (state_25479[(8)]);var inst_25394 = cljs.core.async.close_BANG_.call(null,inst_25391);var state_25479__$1 = state_25479;var statearr_25513_25586 = state_25479__$1;(statearr_25513_25586[(2)] = inst_25394);
(statearr_25513_25586[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (36)))
{var inst_25438 = (state_25479[(25)]);var inst_25442 = cljs.core.chunk_first.call(null,inst_25438);var inst_25443 = cljs.core.chunk_rest.call(null,inst_25438);var inst_25444 = cljs.core.count.call(null,inst_25442);var inst_25419 = inst_25443;var inst_25420 = inst_25442;var inst_25421 = inst_25444;var inst_25422 = (0);var state_25479__$1 = (function (){var statearr_25514 = state_25479;(statearr_25514[(9)] = inst_25422);
(statearr_25514[(20)] = inst_25421);
(statearr_25514[(21)] = inst_25419);
(statearr_25514[(11)] = inst_25420);
return statearr_25514;
})();var statearr_25515_25587 = state_25479__$1;(statearr_25515_25587[(2)] = null);
(statearr_25515_25587[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (41)))
{var inst_25438 = (state_25479[(25)]);var inst_25454 = (state_25479[(2)]);var inst_25455 = cljs.core.next.call(null,inst_25438);var inst_25419 = inst_25455;var inst_25420 = null;var inst_25421 = (0);var inst_25422 = (0);var state_25479__$1 = (function (){var statearr_25516 = state_25479;(statearr_25516[(9)] = inst_25422);
(statearr_25516[(20)] = inst_25421);
(statearr_25516[(21)] = inst_25419);
(statearr_25516[(27)] = inst_25454);
(statearr_25516[(11)] = inst_25420);
return statearr_25516;
})();var statearr_25517_25588 = state_25479__$1;(statearr_25517_25588[(2)] = null);
(statearr_25517_25588[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (43)))
{var state_25479__$1 = state_25479;var statearr_25518_25589 = state_25479__$1;(statearr_25518_25589[(2)] = null);
(statearr_25518_25589[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (29)))
{var inst_25463 = (state_25479[(2)]);var state_25479__$1 = state_25479;var statearr_25519_25590 = state_25479__$1;(statearr_25519_25590[(2)] = inst_25463);
(statearr_25519_25590[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (44)))
{var inst_25472 = (state_25479[(2)]);var state_25479__$1 = (function (){var statearr_25520 = state_25479;(statearr_25520[(28)] = inst_25472);
return statearr_25520;
})();var statearr_25521_25591 = state_25479__$1;(statearr_25521_25591[(2)] = null);
(statearr_25521_25591[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (6)))
{var inst_25411 = (state_25479[(29)]);var inst_25410 = cljs.core.deref.call(null,cs);var inst_25411__$1 = cljs.core.keys.call(null,inst_25410);var inst_25412 = cljs.core.count.call(null,inst_25411__$1);var inst_25413 = cljs.core.reset_BANG_.call(null,dctr,inst_25412);var inst_25418 = cljs.core.seq.call(null,inst_25411__$1);var inst_25419 = inst_25418;var inst_25420 = null;var inst_25421 = (0);var inst_25422 = (0);var state_25479__$1 = (function (){var statearr_25522 = state_25479;(statearr_25522[(29)] = inst_25411__$1);
(statearr_25522[(9)] = inst_25422);
(statearr_25522[(20)] = inst_25421);
(statearr_25522[(21)] = inst_25419);
(statearr_25522[(30)] = inst_25413);
(statearr_25522[(11)] = inst_25420);
return statearr_25522;
})();var statearr_25523_25592 = state_25479__$1;(statearr_25523_25592[(2)] = null);
(statearr_25523_25592[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (28)))
{var inst_25419 = (state_25479[(21)]);var inst_25438 = (state_25479[(25)]);var inst_25438__$1 = cljs.core.seq.call(null,inst_25419);var state_25479__$1 = (function (){var statearr_25524 = state_25479;(statearr_25524[(25)] = inst_25438__$1);
return statearr_25524;
})();if(inst_25438__$1)
{var statearr_25525_25593 = state_25479__$1;(statearr_25525_25593[(1)] = (33));
} else
{var statearr_25526_25594 = state_25479__$1;(statearr_25526_25594[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (25)))
{var inst_25422 = (state_25479[(9)]);var inst_25421 = (state_25479[(20)]);var inst_25424 = (inst_25422 < inst_25421);var inst_25425 = inst_25424;var state_25479__$1 = state_25479;if(cljs.core.truth_(inst_25425))
{var statearr_25527_25595 = state_25479__$1;(statearr_25527_25595[(1)] = (27));
} else
{var statearr_25528_25596 = state_25479__$1;(statearr_25528_25596[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (34)))
{var state_25479__$1 = state_25479;var statearr_25529_25597 = state_25479__$1;(statearr_25529_25597[(2)] = null);
(statearr_25529_25597[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (17)))
{var state_25479__$1 = state_25479;var statearr_25530_25598 = state_25479__$1;(statearr_25530_25598[(2)] = null);
(statearr_25530_25598[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (3)))
{var inst_25477 = (state_25479[(2)]);var state_25479__$1 = state_25479;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25479__$1,inst_25477);
} else
{if((state_val_25480 === (12)))
{var inst_25406 = (state_25479[(2)]);var state_25479__$1 = state_25479;var statearr_25531_25599 = state_25479__$1;(statearr_25531_25599[(2)] = inst_25406);
(statearr_25531_25599[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (2)))
{var state_25479__$1 = state_25479;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25479__$1,(4),ch);
} else
{if((state_val_25480 === (23)))
{var state_25479__$1 = state_25479;var statearr_25532_25600 = state_25479__$1;(statearr_25532_25600[(2)] = null);
(statearr_25532_25600[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (35)))
{var inst_25461 = (state_25479[(2)]);var state_25479__$1 = state_25479;var statearr_25533_25601 = state_25479__$1;(statearr_25533_25601[(2)] = inst_25461);
(statearr_25533_25601[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (19)))
{var inst_25380 = (state_25479[(7)]);var inst_25384 = cljs.core.chunk_first.call(null,inst_25380);var inst_25385 = cljs.core.chunk_rest.call(null,inst_25380);var inst_25386 = cljs.core.count.call(null,inst_25384);var inst_25360 = inst_25385;var inst_25361 = inst_25384;var inst_25362 = inst_25386;var inst_25363 = (0);var state_25479__$1 = (function (){var statearr_25534 = state_25479;(statearr_25534[(13)] = inst_25362);
(statearr_25534[(14)] = inst_25363);
(statearr_25534[(15)] = inst_25360);
(statearr_25534[(16)] = inst_25361);
return statearr_25534;
})();var statearr_25535_25602 = state_25479__$1;(statearr_25535_25602[(2)] = null);
(statearr_25535_25602[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (11)))
{var inst_25380 = (state_25479[(7)]);var inst_25360 = (state_25479[(15)]);var inst_25380__$1 = cljs.core.seq.call(null,inst_25360);var state_25479__$1 = (function (){var statearr_25536 = state_25479;(statearr_25536[(7)] = inst_25380__$1);
return statearr_25536;
})();if(inst_25380__$1)
{var statearr_25537_25603 = state_25479__$1;(statearr_25537_25603[(1)] = (16));
} else
{var statearr_25538_25604 = state_25479__$1;(statearr_25538_25604[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (9)))
{var inst_25408 = (state_25479[(2)]);var state_25479__$1 = state_25479;var statearr_25539_25605 = state_25479__$1;(statearr_25539_25605[(2)] = inst_25408);
(statearr_25539_25605[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (5)))
{var inst_25358 = cljs.core.deref.call(null,cs);var inst_25359 = cljs.core.seq.call(null,inst_25358);var inst_25360 = inst_25359;var inst_25361 = null;var inst_25362 = (0);var inst_25363 = (0);var state_25479__$1 = (function (){var statearr_25540 = state_25479;(statearr_25540[(13)] = inst_25362);
(statearr_25540[(14)] = inst_25363);
(statearr_25540[(15)] = inst_25360);
(statearr_25540[(16)] = inst_25361);
return statearr_25540;
})();var statearr_25541_25606 = state_25479__$1;(statearr_25541_25606[(2)] = null);
(statearr_25541_25606[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (14)))
{var state_25479__$1 = state_25479;var statearr_25542_25607 = state_25479__$1;(statearr_25542_25607[(2)] = null);
(statearr_25542_25607[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (45)))
{var inst_25469 = (state_25479[(2)]);var state_25479__$1 = state_25479;var statearr_25543_25608 = state_25479__$1;(statearr_25543_25608[(2)] = inst_25469);
(statearr_25543_25608[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (26)))
{var inst_25411 = (state_25479[(29)]);var inst_25465 = (state_25479[(2)]);var inst_25466 = cljs.core.seq.call(null,inst_25411);var state_25479__$1 = (function (){var statearr_25544 = state_25479;(statearr_25544[(31)] = inst_25465);
return statearr_25544;
})();if(inst_25466)
{var statearr_25545_25609 = state_25479__$1;(statearr_25545_25609[(1)] = (42));
} else
{var statearr_25546_25610 = state_25479__$1;(statearr_25546_25610[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (16)))
{var inst_25380 = (state_25479[(7)]);var inst_25382 = cljs.core.chunked_seq_QMARK_.call(null,inst_25380);var state_25479__$1 = state_25479;if(inst_25382)
{var statearr_25547_25611 = state_25479__$1;(statearr_25547_25611[(1)] = (19));
} else
{var statearr_25548_25612 = state_25479__$1;(statearr_25548_25612[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (38)))
{var inst_25458 = (state_25479[(2)]);var state_25479__$1 = state_25479;var statearr_25549_25613 = state_25479__$1;(statearr_25549_25613[(2)] = inst_25458);
(statearr_25549_25613[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (30)))
{var state_25479__$1 = state_25479;var statearr_25550_25614 = state_25479__$1;(statearr_25550_25614[(2)] = null);
(statearr_25550_25614[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (10)))
{var inst_25363 = (state_25479[(14)]);var inst_25361 = (state_25479[(16)]);var inst_25369 = cljs.core._nth.call(null,inst_25361,inst_25363);var inst_25370 = cljs.core.nth.call(null,inst_25369,(0),null);var inst_25371 = cljs.core.nth.call(null,inst_25369,(1),null);var state_25479__$1 = (function (){var statearr_25551 = state_25479;(statearr_25551[(26)] = inst_25370);
return statearr_25551;
})();if(cljs.core.truth_(inst_25371))
{var statearr_25552_25615 = state_25479__$1;(statearr_25552_25615[(1)] = (13));
} else
{var statearr_25553_25616 = state_25479__$1;(statearr_25553_25616[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (18)))
{var inst_25404 = (state_25479[(2)]);var state_25479__$1 = state_25479;var statearr_25554_25617 = state_25479__$1;(statearr_25554_25617[(2)] = inst_25404);
(statearr_25554_25617[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (42)))
{var state_25479__$1 = state_25479;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25479__$1,(45),dchan);
} else
{if((state_val_25480 === (37)))
{var inst_25447 = (state_25479[(23)]);var inst_25438 = (state_25479[(25)]);var inst_25351 = (state_25479[(12)]);var inst_25447__$1 = cljs.core.first.call(null,inst_25438);var inst_25448 = cljs.core.async.put_BANG_.call(null,inst_25447__$1,inst_25351,done);var state_25479__$1 = (function (){var statearr_25555 = state_25479;(statearr_25555[(23)] = inst_25447__$1);
return statearr_25555;
})();if(cljs.core.truth_(inst_25448))
{var statearr_25556_25618 = state_25479__$1;(statearr_25556_25618[(1)] = (39));
} else
{var statearr_25557_25619 = state_25479__$1;(statearr_25557_25619[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (8)))
{var inst_25362 = (state_25479[(13)]);var inst_25363 = (state_25479[(14)]);var inst_25365 = (inst_25363 < inst_25362);var inst_25366 = inst_25365;var state_25479__$1 = state_25479;if(cljs.core.truth_(inst_25366))
{var statearr_25558_25620 = state_25479__$1;(statearr_25558_25620[(1)] = (10));
} else
{var statearr_25559_25621 = state_25479__$1;(statearr_25559_25621[(1)] = (11));
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
});})(c__11517__auto___25567,cs,m,dchan,dctr,done))
;return ((function (switch__11461__auto__,c__11517__auto___25567,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_25563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25563[(0)] = state_machine__11462__auto__);
(statearr_25563[(1)] = (1));
return statearr_25563;
});
var state_machine__11462__auto____1 = (function (state_25479){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_25479);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e25564){if((e25564 instanceof Object))
{var ex__11465__auto__ = e25564;var statearr_25565_25622 = state_25479;(statearr_25565_25622[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25479);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25564;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25623 = state_25479;
state_25479 = G__25623;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_25479){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_25479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___25567,cs,m,dchan,dctr,done))
})();var state__11519__auto__ = (function (){var statearr_25566 = f__11518__auto__.call(null);(statearr_25566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___25567);
return statearr_25566;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___25567,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj25625 = {};return obj25625;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25626){var map__25631 = p__25626;var map__25631__$1 = ((cljs.core.seq_QMARK_.call(null,map__25631))?cljs.core.apply.call(null,cljs.core.hash_map,map__25631):map__25631);var opts = map__25631__$1;var statearr_25632_25635 = state;(statearr_25632_25635[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__25631,map__25631__$1,opts){
return (function (val){var statearr_25633_25636 = state;(statearr_25633_25636[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25631,map__25631__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_25634_25637 = state;(statearr_25634_25637[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25626 = null;if (arguments.length > 3) {
  p__25626 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25626);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25638){
var state = cljs.core.first(arglist__25638);
arglist__25638 = cljs.core.next(arglist__25638);
var cont_block = cljs.core.first(arglist__25638);
arglist__25638 = cljs.core.next(arglist__25638);
var ports = cljs.core.first(arglist__25638);
var p__25626 = cljs.core.rest(arglist__25638);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25626);
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
;var m = (function (){if(typeof cljs.core.async.t25758 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25758 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25759){
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
this.meta25759 = meta25759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25758.cljs$lang$type = true;
cljs.core.async.t25758.cljs$lang$ctorStr = "cljs.core.async/t25758";
cljs.core.async.t25758.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25758");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25758.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25758.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25758.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25758.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25758.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25758.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25758.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25758.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25758.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25760){var self__ = this;
var _25760__$1 = this;return self__.meta25759;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25760,meta25759__$1){var self__ = this;
var _25760__$1 = this;return (new cljs.core.async.t25758(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25759__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25758 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25758(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25759){return (new cljs.core.async.t25758(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25759));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25758(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11517__auto___25877 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___25877,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___25877,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25830){var state_val_25831 = (state_25830[(1)]);if((state_val_25831 === (7)))
{var inst_25774 = (state_25830[(7)]);var inst_25779 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25774);var state_25830__$1 = state_25830;var statearr_25832_25878 = state_25830__$1;(statearr_25832_25878[(2)] = inst_25779);
(statearr_25832_25878[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25831 === (20)))
{var inst_25789 = (state_25830[(8)]);var state_25830__$1 = state_25830;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25830__$1,(23),out,inst_25789);
} else
{if((state_val_25831 === (1)))
{var inst_25764 = (state_25830[(9)]);var inst_25764__$1 = calc_state.call(null);var inst_25765 = cljs.core.seq_QMARK_.call(null,inst_25764__$1);var state_25830__$1 = (function (){var statearr_25833 = state_25830;(statearr_25833[(9)] = inst_25764__$1);
return statearr_25833;
})();if(inst_25765)
{var statearr_25834_25879 = state_25830__$1;(statearr_25834_25879[(1)] = (2));
} else
{var statearr_25835_25880 = state_25830__$1;(statearr_25835_25880[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25831 === (24)))
{var inst_25782 = (state_25830[(10)]);var inst_25774 = inst_25782;var state_25830__$1 = (function (){var statearr_25836 = state_25830;(statearr_25836[(7)] = inst_25774);
return statearr_25836;
})();var statearr_25837_25881 = state_25830__$1;(statearr_25837_25881[(2)] = null);
(statearr_25837_25881[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25831 === (4)))
{var inst_25764 = (state_25830[(9)]);var inst_25770 = (state_25830[(2)]);var inst_25771 = cljs.core.get.call(null,inst_25770,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25772 = cljs.core.get.call(null,inst_25770,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25773 = cljs.core.get.call(null,inst_25770,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_25774 = inst_25764;var state_25830__$1 = (function (){var statearr_25838 = state_25830;(statearr_25838[(11)] = inst_25772);
(statearr_25838[(12)] = inst_25771);
(statearr_25838[(7)] = inst_25774);
(statearr_25838[(13)] = inst_25773);
return statearr_25838;
})();var statearr_25839_25882 = state_25830__$1;(statearr_25839_25882[(2)] = null);
(statearr_25839_25882[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25831 === (15)))
{var state_25830__$1 = state_25830;var statearr_25840_25883 = state_25830__$1;(statearr_25840_25883[(2)] = null);
(statearr_25840_25883[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25831 === (21)))
{var inst_25782 = (state_25830[(10)]);var inst_25774 = inst_25782;var state_25830__$1 = (function (){var statearr_25841 = state_25830;(statearr_25841[(7)] = inst_25774);
return statearr_25841;
})();var statearr_25842_25884 = state_25830__$1;(statearr_25842_25884[(2)] = null);
(statearr_25842_25884[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25831 === (13)))
{var inst_25826 = (state_25830[(2)]);var state_25830__$1 = state_25830;var statearr_25843_25885 = state_25830__$1;(statearr_25843_25885[(2)] = inst_25826);
(statearr_25843_25885[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25831 === (22)))
{var inst_25824 = (state_25830[(2)]);var state_25830__$1 = state_25830;var statearr_25844_25886 = state_25830__$1;(statearr_25844_25886[(2)] = inst_25824);
(statearr_25844_25886[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25831 === (6)))
{var inst_25828 = (state_25830[(2)]);var state_25830__$1 = state_25830;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25830__$1,inst_25828);
} else
{if((state_val_25831 === (25)))
{var state_25830__$1 = state_25830;var statearr_25845_25887 = state_25830__$1;(statearr_25845_25887[(2)] = null);
(statearr_25845_25887[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25831 === (17)))
{var inst_25804 = (state_25830[(14)]);var state_25830__$1 = state_25830;var statearr_25846_25888 = state_25830__$1;(statearr_25846_25888[(2)] = inst_25804);
(statearr_25846_25888[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25831 === (3)))
{var inst_25764 = (state_25830[(9)]);var state_25830__$1 = state_25830;var statearr_25847_25889 = state_25830__$1;(statearr_25847_25889[(2)] = inst_25764);
(statearr_25847_25889[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25831 === (12)))
{var inst_25804 = (state_25830[(14)]);var inst_25785 = (state_25830[(15)]);var inst_25790 = (state_25830[(16)]);var inst_25804__$1 = inst_25785.call(null,inst_25790);var state_25830__$1 = (function (){var statearr_25848 = state_25830;(statearr_25848[(14)] = inst_25804__$1);
return statearr_25848;
})();if(cljs.core.truth_(inst_25804__$1))
{var statearr_25849_25890 = state_25830__$1;(statearr_25849_25890[(1)] = (17));
} else
{var statearr_25850_25891 = state_25830__$1;(statearr_25850_25891[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25831 === (2)))
{var inst_25764 = (state_25830[(9)]);var inst_25767 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25764);var state_25830__$1 = state_25830;var statearr_25851_25892 = state_25830__$1;(statearr_25851_25892[(2)] = inst_25767);
(statearr_25851_25892[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25831 === (23)))
{var inst_25815 = (state_25830[(2)]);var state_25830__$1 = state_25830;if(cljs.core.truth_(inst_25815))
{var statearr_25852_25893 = state_25830__$1;(statearr_25852_25893[(1)] = (24));
} else
{var statearr_25853_25894 = state_25830__$1;(statearr_25853_25894[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25831 === (19)))
{var inst_25812 = (state_25830[(2)]);var state_25830__$1 = state_25830;if(cljs.core.truth_(inst_25812))
{var statearr_25854_25895 = state_25830__$1;(statearr_25854_25895[(1)] = (20));
} else
{var statearr_25855_25896 = state_25830__$1;(statearr_25855_25896[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25831 === (11)))
{var inst_25789 = (state_25830[(8)]);var inst_25795 = (inst_25789 == null);var state_25830__$1 = state_25830;if(cljs.core.truth_(inst_25795))
{var statearr_25856_25897 = state_25830__$1;(statearr_25856_25897[(1)] = (14));
} else
{var statearr_25857_25898 = state_25830__$1;(statearr_25857_25898[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25831 === (9)))
{var inst_25782 = (state_25830[(10)]);var inst_25782__$1 = (state_25830[(2)]);var inst_25783 = cljs.core.get.call(null,inst_25782__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25784 = cljs.core.get.call(null,inst_25782__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25785 = cljs.core.get.call(null,inst_25782__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_25830__$1 = (function (){var statearr_25858 = state_25830;(statearr_25858[(17)] = inst_25784);
(statearr_25858[(15)] = inst_25785);
(statearr_25858[(10)] = inst_25782__$1);
return statearr_25858;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_25830__$1,(10),inst_25783);
} else
{if((state_val_25831 === (5)))
{var inst_25774 = (state_25830[(7)]);var inst_25777 = cljs.core.seq_QMARK_.call(null,inst_25774);var state_25830__$1 = state_25830;if(inst_25777)
{var statearr_25859_25899 = state_25830__$1;(statearr_25859_25899[(1)] = (7));
} else
{var statearr_25860_25900 = state_25830__$1;(statearr_25860_25900[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25831 === (14)))
{var inst_25790 = (state_25830[(16)]);var inst_25797 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25790);var state_25830__$1 = state_25830;var statearr_25861_25901 = state_25830__$1;(statearr_25861_25901[(2)] = inst_25797);
(statearr_25861_25901[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25831 === (26)))
{var inst_25820 = (state_25830[(2)]);var state_25830__$1 = state_25830;var statearr_25862_25902 = state_25830__$1;(statearr_25862_25902[(2)] = inst_25820);
(statearr_25862_25902[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25831 === (16)))
{var inst_25800 = (state_25830[(2)]);var inst_25801 = calc_state.call(null);var inst_25774 = inst_25801;var state_25830__$1 = (function (){var statearr_25863 = state_25830;(statearr_25863[(18)] = inst_25800);
(statearr_25863[(7)] = inst_25774);
return statearr_25863;
})();var statearr_25864_25903 = state_25830__$1;(statearr_25864_25903[(2)] = null);
(statearr_25864_25903[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25831 === (10)))
{var inst_25789 = (state_25830[(8)]);var inst_25790 = (state_25830[(16)]);var inst_25788 = (state_25830[(2)]);var inst_25789__$1 = cljs.core.nth.call(null,inst_25788,(0),null);var inst_25790__$1 = cljs.core.nth.call(null,inst_25788,(1),null);var inst_25791 = (inst_25789__$1 == null);var inst_25792 = cljs.core._EQ_.call(null,inst_25790__$1,change);var inst_25793 = (inst_25791) || (inst_25792);var state_25830__$1 = (function (){var statearr_25865 = state_25830;(statearr_25865[(8)] = inst_25789__$1);
(statearr_25865[(16)] = inst_25790__$1);
return statearr_25865;
})();if(cljs.core.truth_(inst_25793))
{var statearr_25866_25904 = state_25830__$1;(statearr_25866_25904[(1)] = (11));
} else
{var statearr_25867_25905 = state_25830__$1;(statearr_25867_25905[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25831 === (18)))
{var inst_25784 = (state_25830[(17)]);var inst_25785 = (state_25830[(15)]);var inst_25790 = (state_25830[(16)]);var inst_25807 = cljs.core.empty_QMARK_.call(null,inst_25785);var inst_25808 = inst_25784.call(null,inst_25790);var inst_25809 = cljs.core.not.call(null,inst_25808);var inst_25810 = (inst_25807) && (inst_25809);var state_25830__$1 = state_25830;var statearr_25868_25906 = state_25830__$1;(statearr_25868_25906[(2)] = inst_25810);
(statearr_25868_25906[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25831 === (8)))
{var inst_25774 = (state_25830[(7)]);var state_25830__$1 = state_25830;var statearr_25869_25907 = state_25830__$1;(statearr_25869_25907[(2)] = inst_25774);
(statearr_25869_25907[(1)] = (9));
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
});})(c__11517__auto___25877,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__11461__auto__,c__11517__auto___25877,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_25873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25873[(0)] = state_machine__11462__auto__);
(statearr_25873[(1)] = (1));
return statearr_25873;
});
var state_machine__11462__auto____1 = (function (state_25830){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_25830);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e25874){if((e25874 instanceof Object))
{var ex__11465__auto__ = e25874;var statearr_25875_25908 = state_25830;(statearr_25875_25908[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25830);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25874;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25909 = state_25830;
state_25830 = G__25909;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_25830){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_25830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___25877,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11519__auto__ = (function (){var statearr_25876 = f__11518__auto__.call(null);(statearr_25876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___25877);
return statearr_25876;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___25877,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25911 = {};return obj25911;
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
return (function (p1__25912_SHARP_){if(cljs.core.truth_(p1__25912_SHARP_.call(null,topic)))
{return p1__25912_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__25912_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26035 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26035 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26036){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26036 = meta26036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26035.cljs$lang$type = true;
cljs.core.async.t26035.cljs$lang$ctorStr = "cljs.core.async/t26035";
cljs.core.async.t26035.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26035");
});})(mults,ensure_mult))
;
cljs.core.async.t26035.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26035.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26035.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26035.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26035.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26035.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26035.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26035.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26037){var self__ = this;
var _26037__$1 = this;return self__.meta26036;
});})(mults,ensure_mult))
;
cljs.core.async.t26035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26037,meta26036__$1){var self__ = this;
var _26037__$1 = this;return (new cljs.core.async.t26035(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26036__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26035 = ((function (mults,ensure_mult){
return (function __GT_t26035(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26036){return (new cljs.core.async.t26035(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26036));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26035(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11517__auto___26157 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26157,mults,ensure_mult,p){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26157,mults,ensure_mult,p){
return (function (state_26109){var state_val_26110 = (state_26109[(1)]);if((state_val_26110 === (7)))
{var inst_26105 = (state_26109[(2)]);var state_26109__$1 = state_26109;var statearr_26111_26158 = state_26109__$1;(statearr_26111_26158[(2)] = inst_26105);
(statearr_26111_26158[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26110 === (20)))
{var state_26109__$1 = state_26109;var statearr_26112_26159 = state_26109__$1;(statearr_26112_26159[(2)] = null);
(statearr_26112_26159[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26110 === (1)))
{var state_26109__$1 = state_26109;var statearr_26113_26160 = state_26109__$1;(statearr_26113_26160[(2)] = null);
(statearr_26113_26160[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26110 === (24)))
{var inst_26088 = (state_26109[(7)]);var inst_26097 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26088);var state_26109__$1 = state_26109;var statearr_26114_26161 = state_26109__$1;(statearr_26114_26161[(2)] = inst_26097);
(statearr_26114_26161[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26110 === (4)))
{var inst_26040 = (state_26109[(8)]);var inst_26040__$1 = (state_26109[(2)]);var inst_26041 = (inst_26040__$1 == null);var state_26109__$1 = (function (){var statearr_26115 = state_26109;(statearr_26115[(8)] = inst_26040__$1);
return statearr_26115;
})();if(cljs.core.truth_(inst_26041))
{var statearr_26116_26162 = state_26109__$1;(statearr_26116_26162[(1)] = (5));
} else
{var statearr_26117_26163 = state_26109__$1;(statearr_26117_26163[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26110 === (15)))
{var inst_26082 = (state_26109[(2)]);var state_26109__$1 = state_26109;var statearr_26118_26164 = state_26109__$1;(statearr_26118_26164[(2)] = inst_26082);
(statearr_26118_26164[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26110 === (21)))
{var inst_26102 = (state_26109[(2)]);var state_26109__$1 = (function (){var statearr_26119 = state_26109;(statearr_26119[(9)] = inst_26102);
return statearr_26119;
})();var statearr_26120_26165 = state_26109__$1;(statearr_26120_26165[(2)] = null);
(statearr_26120_26165[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26110 === (13)))
{var inst_26064 = (state_26109[(10)]);var inst_26066 = cljs.core.chunked_seq_QMARK_.call(null,inst_26064);var state_26109__$1 = state_26109;if(inst_26066)
{var statearr_26121_26166 = state_26109__$1;(statearr_26121_26166[(1)] = (16));
} else
{var statearr_26122_26167 = state_26109__$1;(statearr_26122_26167[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26110 === (22)))
{var inst_26094 = (state_26109[(2)]);var state_26109__$1 = state_26109;if(cljs.core.truth_(inst_26094))
{var statearr_26123_26168 = state_26109__$1;(statearr_26123_26168[(1)] = (23));
} else
{var statearr_26124_26169 = state_26109__$1;(statearr_26124_26169[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26110 === (6)))
{var inst_26040 = (state_26109[(8)]);var inst_26090 = (state_26109[(11)]);var inst_26088 = (state_26109[(7)]);var inst_26088__$1 = topic_fn.call(null,inst_26040);var inst_26089 = cljs.core.deref.call(null,mults);var inst_26090__$1 = cljs.core.get.call(null,inst_26089,inst_26088__$1);var state_26109__$1 = (function (){var statearr_26125 = state_26109;(statearr_26125[(11)] = inst_26090__$1);
(statearr_26125[(7)] = inst_26088__$1);
return statearr_26125;
})();if(cljs.core.truth_(inst_26090__$1))
{var statearr_26126_26170 = state_26109__$1;(statearr_26126_26170[(1)] = (19));
} else
{var statearr_26127_26171 = state_26109__$1;(statearr_26127_26171[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26110 === (25)))
{var inst_26099 = (state_26109[(2)]);var state_26109__$1 = state_26109;var statearr_26128_26172 = state_26109__$1;(statearr_26128_26172[(2)] = inst_26099);
(statearr_26128_26172[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26110 === (17)))
{var inst_26064 = (state_26109[(10)]);var inst_26073 = cljs.core.first.call(null,inst_26064);var inst_26074 = cljs.core.async.muxch_STAR_.call(null,inst_26073);var inst_26075 = cljs.core.async.close_BANG_.call(null,inst_26074);var inst_26076 = cljs.core.next.call(null,inst_26064);var inst_26050 = inst_26076;var inst_26051 = null;var inst_26052 = (0);var inst_26053 = (0);var state_26109__$1 = (function (){var statearr_26129 = state_26109;(statearr_26129[(12)] = inst_26051);
(statearr_26129[(13)] = inst_26053);
(statearr_26129[(14)] = inst_26050);
(statearr_26129[(15)] = inst_26052);
(statearr_26129[(16)] = inst_26075);
return statearr_26129;
})();var statearr_26130_26173 = state_26109__$1;(statearr_26130_26173[(2)] = null);
(statearr_26130_26173[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26110 === (3)))
{var inst_26107 = (state_26109[(2)]);var state_26109__$1 = state_26109;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26109__$1,inst_26107);
} else
{if((state_val_26110 === (12)))
{var inst_26084 = (state_26109[(2)]);var state_26109__$1 = state_26109;var statearr_26131_26174 = state_26109__$1;(statearr_26131_26174[(2)] = inst_26084);
(statearr_26131_26174[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26110 === (2)))
{var state_26109__$1 = state_26109;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26109__$1,(4),ch);
} else
{if((state_val_26110 === (23)))
{var state_26109__$1 = state_26109;var statearr_26132_26175 = state_26109__$1;(statearr_26132_26175[(2)] = null);
(statearr_26132_26175[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26110 === (19)))
{var inst_26040 = (state_26109[(8)]);var inst_26090 = (state_26109[(11)]);var inst_26092 = cljs.core.async.muxch_STAR_.call(null,inst_26090);var state_26109__$1 = state_26109;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26109__$1,(22),inst_26092,inst_26040);
} else
{if((state_val_26110 === (11)))
{var inst_26050 = (state_26109[(14)]);var inst_26064 = (state_26109[(10)]);var inst_26064__$1 = cljs.core.seq.call(null,inst_26050);var state_26109__$1 = (function (){var statearr_26133 = state_26109;(statearr_26133[(10)] = inst_26064__$1);
return statearr_26133;
})();if(inst_26064__$1)
{var statearr_26134_26176 = state_26109__$1;(statearr_26134_26176[(1)] = (13));
} else
{var statearr_26135_26177 = state_26109__$1;(statearr_26135_26177[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26110 === (9)))
{var inst_26086 = (state_26109[(2)]);var state_26109__$1 = state_26109;var statearr_26136_26178 = state_26109__$1;(statearr_26136_26178[(2)] = inst_26086);
(statearr_26136_26178[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26110 === (5)))
{var inst_26047 = cljs.core.deref.call(null,mults);var inst_26048 = cljs.core.vals.call(null,inst_26047);var inst_26049 = cljs.core.seq.call(null,inst_26048);var inst_26050 = inst_26049;var inst_26051 = null;var inst_26052 = (0);var inst_26053 = (0);var state_26109__$1 = (function (){var statearr_26137 = state_26109;(statearr_26137[(12)] = inst_26051);
(statearr_26137[(13)] = inst_26053);
(statearr_26137[(14)] = inst_26050);
(statearr_26137[(15)] = inst_26052);
return statearr_26137;
})();var statearr_26138_26179 = state_26109__$1;(statearr_26138_26179[(2)] = null);
(statearr_26138_26179[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26110 === (14)))
{var state_26109__$1 = state_26109;var statearr_26142_26180 = state_26109__$1;(statearr_26142_26180[(2)] = null);
(statearr_26142_26180[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26110 === (16)))
{var inst_26064 = (state_26109[(10)]);var inst_26068 = cljs.core.chunk_first.call(null,inst_26064);var inst_26069 = cljs.core.chunk_rest.call(null,inst_26064);var inst_26070 = cljs.core.count.call(null,inst_26068);var inst_26050 = inst_26069;var inst_26051 = inst_26068;var inst_26052 = inst_26070;var inst_26053 = (0);var state_26109__$1 = (function (){var statearr_26143 = state_26109;(statearr_26143[(12)] = inst_26051);
(statearr_26143[(13)] = inst_26053);
(statearr_26143[(14)] = inst_26050);
(statearr_26143[(15)] = inst_26052);
return statearr_26143;
})();var statearr_26144_26181 = state_26109__$1;(statearr_26144_26181[(2)] = null);
(statearr_26144_26181[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26110 === (10)))
{var inst_26051 = (state_26109[(12)]);var inst_26053 = (state_26109[(13)]);var inst_26050 = (state_26109[(14)]);var inst_26052 = (state_26109[(15)]);var inst_26058 = cljs.core._nth.call(null,inst_26051,inst_26053);var inst_26059 = cljs.core.async.muxch_STAR_.call(null,inst_26058);var inst_26060 = cljs.core.async.close_BANG_.call(null,inst_26059);var inst_26061 = (inst_26053 + (1));var tmp26139 = inst_26051;var tmp26140 = inst_26050;var tmp26141 = inst_26052;var inst_26050__$1 = tmp26140;var inst_26051__$1 = tmp26139;var inst_26052__$1 = tmp26141;var inst_26053__$1 = inst_26061;var state_26109__$1 = (function (){var statearr_26145 = state_26109;(statearr_26145[(12)] = inst_26051__$1);
(statearr_26145[(17)] = inst_26060);
(statearr_26145[(13)] = inst_26053__$1);
(statearr_26145[(14)] = inst_26050__$1);
(statearr_26145[(15)] = inst_26052__$1);
return statearr_26145;
})();var statearr_26146_26182 = state_26109__$1;(statearr_26146_26182[(2)] = null);
(statearr_26146_26182[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26110 === (18)))
{var inst_26079 = (state_26109[(2)]);var state_26109__$1 = state_26109;var statearr_26147_26183 = state_26109__$1;(statearr_26147_26183[(2)] = inst_26079);
(statearr_26147_26183[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26110 === (8)))
{var inst_26053 = (state_26109[(13)]);var inst_26052 = (state_26109[(15)]);var inst_26055 = (inst_26053 < inst_26052);var inst_26056 = inst_26055;var state_26109__$1 = state_26109;if(cljs.core.truth_(inst_26056))
{var statearr_26148_26184 = state_26109__$1;(statearr_26148_26184[(1)] = (10));
} else
{var statearr_26149_26185 = state_26109__$1;(statearr_26149_26185[(1)] = (11));
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
});})(c__11517__auto___26157,mults,ensure_mult,p))
;return ((function (switch__11461__auto__,c__11517__auto___26157,mults,ensure_mult,p){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26153[(0)] = state_machine__11462__auto__);
(statearr_26153[(1)] = (1));
return statearr_26153;
});
var state_machine__11462__auto____1 = (function (state_26109){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26109);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26154){if((e26154 instanceof Object))
{var ex__11465__auto__ = e26154;var statearr_26155_26186 = state_26109;(statearr_26155_26186[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26109);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26154;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26187 = state_26109;
state_26109 = G__26187;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26109){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26157,mults,ensure_mult,p))
})();var state__11519__auto__ = (function (){var statearr_26156 = f__11518__auto__.call(null);(statearr_26156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26157);
return statearr_26156;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26157,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__11517__auto___26324 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26324,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26324,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26294){var state_val_26295 = (state_26294[(1)]);if((state_val_26295 === (7)))
{var state_26294__$1 = state_26294;var statearr_26296_26325 = state_26294__$1;(statearr_26296_26325[(2)] = null);
(statearr_26296_26325[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26295 === (1)))
{var state_26294__$1 = state_26294;var statearr_26297_26326 = state_26294__$1;(statearr_26297_26326[(2)] = null);
(statearr_26297_26326[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26295 === (4)))
{var inst_26258 = (state_26294[(7)]);var inst_26260 = (inst_26258 < cnt);var state_26294__$1 = state_26294;if(cljs.core.truth_(inst_26260))
{var statearr_26298_26327 = state_26294__$1;(statearr_26298_26327[(1)] = (6));
} else
{var statearr_26299_26328 = state_26294__$1;(statearr_26299_26328[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26295 === (15)))
{var inst_26290 = (state_26294[(2)]);var state_26294__$1 = state_26294;var statearr_26300_26329 = state_26294__$1;(statearr_26300_26329[(2)] = inst_26290);
(statearr_26300_26329[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26295 === (13)))
{var inst_26283 = cljs.core.async.close_BANG_.call(null,out);var state_26294__$1 = state_26294;var statearr_26301_26330 = state_26294__$1;(statearr_26301_26330[(2)] = inst_26283);
(statearr_26301_26330[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26295 === (6)))
{var state_26294__$1 = state_26294;var statearr_26302_26331 = state_26294__$1;(statearr_26302_26331[(2)] = null);
(statearr_26302_26331[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26295 === (3)))
{var inst_26292 = (state_26294[(2)]);var state_26294__$1 = state_26294;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26294__$1,inst_26292);
} else
{if((state_val_26295 === (12)))
{var inst_26280 = (state_26294[(8)]);var inst_26280__$1 = (state_26294[(2)]);var inst_26281 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26280__$1);var state_26294__$1 = (function (){var statearr_26303 = state_26294;(statearr_26303[(8)] = inst_26280__$1);
return statearr_26303;
})();if(cljs.core.truth_(inst_26281))
{var statearr_26304_26332 = state_26294__$1;(statearr_26304_26332[(1)] = (13));
} else
{var statearr_26305_26333 = state_26294__$1;(statearr_26305_26333[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26295 === (2)))
{var inst_26257 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26258 = (0);var state_26294__$1 = (function (){var statearr_26306 = state_26294;(statearr_26306[(9)] = inst_26257);
(statearr_26306[(7)] = inst_26258);
return statearr_26306;
})();var statearr_26307_26334 = state_26294__$1;(statearr_26307_26334[(2)] = null);
(statearr_26307_26334[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26295 === (11)))
{var inst_26258 = (state_26294[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26294,(10),Object,null,(9));var inst_26267 = chs__$1.call(null,inst_26258);var inst_26268 = done.call(null,inst_26258);var inst_26269 = cljs.core.async.take_BANG_.call(null,inst_26267,inst_26268);var state_26294__$1 = state_26294;var statearr_26308_26335 = state_26294__$1;(statearr_26308_26335[(2)] = inst_26269);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26294__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26295 === (9)))
{var inst_26258 = (state_26294[(7)]);var inst_26271 = (state_26294[(2)]);var inst_26272 = (inst_26258 + (1));var inst_26258__$1 = inst_26272;var state_26294__$1 = (function (){var statearr_26309 = state_26294;(statearr_26309[(7)] = inst_26258__$1);
(statearr_26309[(10)] = inst_26271);
return statearr_26309;
})();var statearr_26310_26336 = state_26294__$1;(statearr_26310_26336[(2)] = null);
(statearr_26310_26336[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26295 === (5)))
{var inst_26278 = (state_26294[(2)]);var state_26294__$1 = (function (){var statearr_26311 = state_26294;(statearr_26311[(11)] = inst_26278);
return statearr_26311;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26294__$1,(12),dchan);
} else
{if((state_val_26295 === (14)))
{var inst_26280 = (state_26294[(8)]);var inst_26285 = cljs.core.apply.call(null,f,inst_26280);var state_26294__$1 = state_26294;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26294__$1,(16),out,inst_26285);
} else
{if((state_val_26295 === (16)))
{var inst_26287 = (state_26294[(2)]);var state_26294__$1 = (function (){var statearr_26312 = state_26294;(statearr_26312[(12)] = inst_26287);
return statearr_26312;
})();var statearr_26313_26337 = state_26294__$1;(statearr_26313_26337[(2)] = null);
(statearr_26313_26337[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26295 === (10)))
{var inst_26262 = (state_26294[(2)]);var inst_26263 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26294__$1 = (function (){var statearr_26314 = state_26294;(statearr_26314[(13)] = inst_26262);
return statearr_26314;
})();var statearr_26315_26338 = state_26294__$1;(statearr_26315_26338[(2)] = inst_26263);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26294__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26295 === (8)))
{var inst_26276 = (state_26294[(2)]);var state_26294__$1 = state_26294;var statearr_26316_26339 = state_26294__$1;(statearr_26316_26339[(2)] = inst_26276);
(statearr_26316_26339[(1)] = (5));
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
});})(c__11517__auto___26324,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__11461__auto__,c__11517__auto___26324,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26320[(0)] = state_machine__11462__auto__);
(statearr_26320[(1)] = (1));
return statearr_26320;
});
var state_machine__11462__auto____1 = (function (state_26294){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26294);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26321){if((e26321 instanceof Object))
{var ex__11465__auto__ = e26321;var statearr_26322_26340 = state_26294;(statearr_26322_26340[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26294);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26321;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26341 = state_26294;
state_26294 = G__26341;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26294){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26324,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11519__auto__ = (function (){var statearr_26323 = f__11518__auto__.call(null);(statearr_26323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26324);
return statearr_26323;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26324,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___26449 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26449,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26449,out){
return (function (state_26425){var state_val_26426 = (state_26425[(1)]);if((state_val_26426 === (7)))
{var inst_26405 = (state_26425[(7)]);var inst_26404 = (state_26425[(8)]);var inst_26404__$1 = (state_26425[(2)]);var inst_26405__$1 = cljs.core.nth.call(null,inst_26404__$1,(0),null);var inst_26406 = cljs.core.nth.call(null,inst_26404__$1,(1),null);var inst_26407 = (inst_26405__$1 == null);var state_26425__$1 = (function (){var statearr_26427 = state_26425;(statearr_26427[(9)] = inst_26406);
(statearr_26427[(7)] = inst_26405__$1);
(statearr_26427[(8)] = inst_26404__$1);
return statearr_26427;
})();if(cljs.core.truth_(inst_26407))
{var statearr_26428_26450 = state_26425__$1;(statearr_26428_26450[(1)] = (8));
} else
{var statearr_26429_26451 = state_26425__$1;(statearr_26429_26451[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26426 === (1)))
{var inst_26396 = cljs.core.vec.call(null,chs);var inst_26397 = inst_26396;var state_26425__$1 = (function (){var statearr_26430 = state_26425;(statearr_26430[(10)] = inst_26397);
return statearr_26430;
})();var statearr_26431_26452 = state_26425__$1;(statearr_26431_26452[(2)] = null);
(statearr_26431_26452[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26426 === (4)))
{var inst_26397 = (state_26425[(10)]);var state_26425__$1 = state_26425;return cljs.core.async.ioc_alts_BANG_.call(null,state_26425__$1,(7),inst_26397);
} else
{if((state_val_26426 === (6)))
{var inst_26421 = (state_26425[(2)]);var state_26425__$1 = state_26425;var statearr_26432_26453 = state_26425__$1;(statearr_26432_26453[(2)] = inst_26421);
(statearr_26432_26453[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26426 === (3)))
{var inst_26423 = (state_26425[(2)]);var state_26425__$1 = state_26425;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26425__$1,inst_26423);
} else
{if((state_val_26426 === (2)))
{var inst_26397 = (state_26425[(10)]);var inst_26399 = cljs.core.count.call(null,inst_26397);var inst_26400 = (inst_26399 > (0));var state_26425__$1 = state_26425;if(cljs.core.truth_(inst_26400))
{var statearr_26434_26454 = state_26425__$1;(statearr_26434_26454[(1)] = (4));
} else
{var statearr_26435_26455 = state_26425__$1;(statearr_26435_26455[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26426 === (11)))
{var inst_26397 = (state_26425[(10)]);var inst_26414 = (state_26425[(2)]);var tmp26433 = inst_26397;var inst_26397__$1 = tmp26433;var state_26425__$1 = (function (){var statearr_26436 = state_26425;(statearr_26436[(10)] = inst_26397__$1);
(statearr_26436[(11)] = inst_26414);
return statearr_26436;
})();var statearr_26437_26456 = state_26425__$1;(statearr_26437_26456[(2)] = null);
(statearr_26437_26456[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26426 === (9)))
{var inst_26405 = (state_26425[(7)]);var state_26425__$1 = state_26425;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26425__$1,(11),out,inst_26405);
} else
{if((state_val_26426 === (5)))
{var inst_26419 = cljs.core.async.close_BANG_.call(null,out);var state_26425__$1 = state_26425;var statearr_26438_26457 = state_26425__$1;(statearr_26438_26457[(2)] = inst_26419);
(statearr_26438_26457[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26426 === (10)))
{var inst_26417 = (state_26425[(2)]);var state_26425__$1 = state_26425;var statearr_26439_26458 = state_26425__$1;(statearr_26439_26458[(2)] = inst_26417);
(statearr_26439_26458[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26426 === (8)))
{var inst_26406 = (state_26425[(9)]);var inst_26397 = (state_26425[(10)]);var inst_26405 = (state_26425[(7)]);var inst_26404 = (state_26425[(8)]);var inst_26409 = (function (){var c = inst_26406;var v = inst_26405;var vec__26402 = inst_26404;var cs = inst_26397;return ((function (c,v,vec__26402,cs,inst_26406,inst_26397,inst_26405,inst_26404,state_val_26426,c__11517__auto___26449,out){
return (function (p1__26342_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__26342_SHARP_);
});
;})(c,v,vec__26402,cs,inst_26406,inst_26397,inst_26405,inst_26404,state_val_26426,c__11517__auto___26449,out))
})();var inst_26410 = cljs.core.filterv.call(null,inst_26409,inst_26397);var inst_26397__$1 = inst_26410;var state_26425__$1 = (function (){var statearr_26440 = state_26425;(statearr_26440[(10)] = inst_26397__$1);
return statearr_26440;
})();var statearr_26441_26459 = state_26425__$1;(statearr_26441_26459[(2)] = null);
(statearr_26441_26459[(1)] = (2));
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
});})(c__11517__auto___26449,out))
;return ((function (switch__11461__auto__,c__11517__auto___26449,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26445 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26445[(0)] = state_machine__11462__auto__);
(statearr_26445[(1)] = (1));
return statearr_26445;
});
var state_machine__11462__auto____1 = (function (state_26425){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26425);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26446){if((e26446 instanceof Object))
{var ex__11465__auto__ = e26446;var statearr_26447_26460 = state_26425;(statearr_26447_26460[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26425);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26446;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26461 = state_26425;
state_26425 = G__26461;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26425){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26449,out))
})();var state__11519__auto__ = (function (){var statearr_26448 = f__11518__auto__.call(null);(statearr_26448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26449);
return statearr_26448;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26449,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___26554 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26554,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26554,out){
return (function (state_26531){var state_val_26532 = (state_26531[(1)]);if((state_val_26532 === (7)))
{var inst_26513 = (state_26531[(7)]);var inst_26513__$1 = (state_26531[(2)]);var inst_26514 = (inst_26513__$1 == null);var inst_26515 = cljs.core.not.call(null,inst_26514);var state_26531__$1 = (function (){var statearr_26533 = state_26531;(statearr_26533[(7)] = inst_26513__$1);
return statearr_26533;
})();if(inst_26515)
{var statearr_26534_26555 = state_26531__$1;(statearr_26534_26555[(1)] = (8));
} else
{var statearr_26535_26556 = state_26531__$1;(statearr_26535_26556[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26532 === (1)))
{var inst_26508 = (0);var state_26531__$1 = (function (){var statearr_26536 = state_26531;(statearr_26536[(8)] = inst_26508);
return statearr_26536;
})();var statearr_26537_26557 = state_26531__$1;(statearr_26537_26557[(2)] = null);
(statearr_26537_26557[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26532 === (4)))
{var state_26531__$1 = state_26531;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26531__$1,(7),ch);
} else
{if((state_val_26532 === (6)))
{var inst_26526 = (state_26531[(2)]);var state_26531__$1 = state_26531;var statearr_26538_26558 = state_26531__$1;(statearr_26538_26558[(2)] = inst_26526);
(statearr_26538_26558[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26532 === (3)))
{var inst_26528 = (state_26531[(2)]);var inst_26529 = cljs.core.async.close_BANG_.call(null,out);var state_26531__$1 = (function (){var statearr_26539 = state_26531;(statearr_26539[(9)] = inst_26528);
return statearr_26539;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26531__$1,inst_26529);
} else
{if((state_val_26532 === (2)))
{var inst_26508 = (state_26531[(8)]);var inst_26510 = (inst_26508 < n);var state_26531__$1 = state_26531;if(cljs.core.truth_(inst_26510))
{var statearr_26540_26559 = state_26531__$1;(statearr_26540_26559[(1)] = (4));
} else
{var statearr_26541_26560 = state_26531__$1;(statearr_26541_26560[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26532 === (11)))
{var inst_26508 = (state_26531[(8)]);var inst_26518 = (state_26531[(2)]);var inst_26519 = (inst_26508 + (1));var inst_26508__$1 = inst_26519;var state_26531__$1 = (function (){var statearr_26542 = state_26531;(statearr_26542[(10)] = inst_26518);
(statearr_26542[(8)] = inst_26508__$1);
return statearr_26542;
})();var statearr_26543_26561 = state_26531__$1;(statearr_26543_26561[(2)] = null);
(statearr_26543_26561[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26532 === (9)))
{var state_26531__$1 = state_26531;var statearr_26544_26562 = state_26531__$1;(statearr_26544_26562[(2)] = null);
(statearr_26544_26562[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26532 === (5)))
{var state_26531__$1 = state_26531;var statearr_26545_26563 = state_26531__$1;(statearr_26545_26563[(2)] = null);
(statearr_26545_26563[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26532 === (10)))
{var inst_26523 = (state_26531[(2)]);var state_26531__$1 = state_26531;var statearr_26546_26564 = state_26531__$1;(statearr_26546_26564[(2)] = inst_26523);
(statearr_26546_26564[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26532 === (8)))
{var inst_26513 = (state_26531[(7)]);var state_26531__$1 = state_26531;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26531__$1,(11),out,inst_26513);
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
});})(c__11517__auto___26554,out))
;return ((function (switch__11461__auto__,c__11517__auto___26554,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26550 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26550[(0)] = state_machine__11462__auto__);
(statearr_26550[(1)] = (1));
return statearr_26550;
});
var state_machine__11462__auto____1 = (function (state_26531){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26531);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26551){if((e26551 instanceof Object))
{var ex__11465__auto__ = e26551;var statearr_26552_26565 = state_26531;(statearr_26552_26565[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26531);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26551;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26566 = state_26531;
state_26531 = G__26566;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26531){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26554,out))
})();var state__11519__auto__ = (function (){var statearr_26553 = f__11518__auto__.call(null);(statearr_26553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26554);
return statearr_26553;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26554,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26574 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26574 = (function (ch,f,map_LT_,meta26575){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26575 = meta26575;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26574.cljs$lang$type = true;
cljs.core.async.t26574.cljs$lang$ctorStr = "cljs.core.async/t26574";
cljs.core.async.t26574.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26574");
});
cljs.core.async.t26574.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26574.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t26574.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26574.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t26577 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26577 = (function (fn1,_,meta26575,ch,f,map_LT_,meta26578){
this.fn1 = fn1;
this._ = _;
this.meta26575 = meta26575;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26578 = meta26578;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26577.cljs$lang$type = true;
cljs.core.async.t26577.cljs$lang$ctorStr = "cljs.core.async/t26577";
cljs.core.async.t26577.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26577");
});})(___$1))
;
cljs.core.async.t26577.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26577.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t26577.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__26567_SHARP_){return f1.call(null,(((p1__26567_SHARP_ == null))?null:self__.f.call(null,p1__26567_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t26577.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26579){var self__ = this;
var _26579__$1 = this;return self__.meta26578;
});})(___$1))
;
cljs.core.async.t26577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26579,meta26578__$1){var self__ = this;
var _26579__$1 = this;return (new cljs.core.async.t26577(self__.fn1,self__._,self__.meta26575,self__.ch,self__.f,self__.map_LT_,meta26578__$1));
});})(___$1))
;
cljs.core.async.__GT_t26577 = ((function (___$1){
return (function __GT_t26577(fn1__$1,___$2,meta26575__$1,ch__$2,f__$2,map_LT___$2,meta26578){return (new cljs.core.async.t26577(fn1__$1,___$2,meta26575__$1,ch__$2,f__$2,map_LT___$2,meta26578));
});})(___$1))
;
}
return (new cljs.core.async.t26577(fn1,___$1,self__.meta26575,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t26574.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26574.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26574.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26576){var self__ = this;
var _26576__$1 = this;return self__.meta26575;
});
cljs.core.async.t26574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26576,meta26575__$1){var self__ = this;
var _26576__$1 = this;return (new cljs.core.async.t26574(self__.ch,self__.f,self__.map_LT_,meta26575__$1));
});
cljs.core.async.__GT_t26574 = (function __GT_t26574(ch__$1,f__$1,map_LT___$1,meta26575){return (new cljs.core.async.t26574(ch__$1,f__$1,map_LT___$1,meta26575));
});
}
return (new cljs.core.async.t26574(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26583 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26583 = (function (ch,f,map_GT_,meta26584){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26584 = meta26584;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26583.cljs$lang$type = true;
cljs.core.async.t26583.cljs$lang$ctorStr = "cljs.core.async/t26583";
cljs.core.async.t26583.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26583");
});
cljs.core.async.t26583.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26583.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t26583.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26583.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26583.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26583.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26585){var self__ = this;
var _26585__$1 = this;return self__.meta26584;
});
cljs.core.async.t26583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26585,meta26584__$1){var self__ = this;
var _26585__$1 = this;return (new cljs.core.async.t26583(self__.ch,self__.f,self__.map_GT_,meta26584__$1));
});
cljs.core.async.__GT_t26583 = (function __GT_t26583(ch__$1,f__$1,map_GT___$1,meta26584){return (new cljs.core.async.t26583(ch__$1,f__$1,map_GT___$1,meta26584));
});
}
return (new cljs.core.async.t26583(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26589 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26589 = (function (ch,p,filter_GT_,meta26590){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26590 = meta26590;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26589.cljs$lang$type = true;
cljs.core.async.t26589.cljs$lang$ctorStr = "cljs.core.async/t26589";
cljs.core.async.t26589.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26589");
});
cljs.core.async.t26589.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26589.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t26589.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26589.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26589.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26589.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26589.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26589.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26591){var self__ = this;
var _26591__$1 = this;return self__.meta26590;
});
cljs.core.async.t26589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26591,meta26590__$1){var self__ = this;
var _26591__$1 = this;return (new cljs.core.async.t26589(self__.ch,self__.p,self__.filter_GT_,meta26590__$1));
});
cljs.core.async.__GT_t26589 = (function __GT_t26589(ch__$1,p__$1,filter_GT___$1,meta26590){return (new cljs.core.async.t26589(ch__$1,p__$1,filter_GT___$1,meta26590));
});
}
return (new cljs.core.async.t26589(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___26674 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26674,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26674,out){
return (function (state_26653){var state_val_26654 = (state_26653[(1)]);if((state_val_26654 === (7)))
{var inst_26649 = (state_26653[(2)]);var state_26653__$1 = state_26653;var statearr_26655_26675 = state_26653__$1;(statearr_26655_26675[(2)] = inst_26649);
(statearr_26655_26675[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26654 === (1)))
{var state_26653__$1 = state_26653;var statearr_26656_26676 = state_26653__$1;(statearr_26656_26676[(2)] = null);
(statearr_26656_26676[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26654 === (4)))
{var inst_26635 = (state_26653[(7)]);var inst_26635__$1 = (state_26653[(2)]);var inst_26636 = (inst_26635__$1 == null);var state_26653__$1 = (function (){var statearr_26657 = state_26653;(statearr_26657[(7)] = inst_26635__$1);
return statearr_26657;
})();if(cljs.core.truth_(inst_26636))
{var statearr_26658_26677 = state_26653__$1;(statearr_26658_26677[(1)] = (5));
} else
{var statearr_26659_26678 = state_26653__$1;(statearr_26659_26678[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26654 === (6)))
{var inst_26635 = (state_26653[(7)]);var inst_26640 = p.call(null,inst_26635);var state_26653__$1 = state_26653;if(cljs.core.truth_(inst_26640))
{var statearr_26660_26679 = state_26653__$1;(statearr_26660_26679[(1)] = (8));
} else
{var statearr_26661_26680 = state_26653__$1;(statearr_26661_26680[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26654 === (3)))
{var inst_26651 = (state_26653[(2)]);var state_26653__$1 = state_26653;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26653__$1,inst_26651);
} else
{if((state_val_26654 === (2)))
{var state_26653__$1 = state_26653;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26653__$1,(4),ch);
} else
{if((state_val_26654 === (11)))
{var inst_26643 = (state_26653[(2)]);var state_26653__$1 = state_26653;var statearr_26662_26681 = state_26653__$1;(statearr_26662_26681[(2)] = inst_26643);
(statearr_26662_26681[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26654 === (9)))
{var state_26653__$1 = state_26653;var statearr_26663_26682 = state_26653__$1;(statearr_26663_26682[(2)] = null);
(statearr_26663_26682[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26654 === (5)))
{var inst_26638 = cljs.core.async.close_BANG_.call(null,out);var state_26653__$1 = state_26653;var statearr_26664_26683 = state_26653__$1;(statearr_26664_26683[(2)] = inst_26638);
(statearr_26664_26683[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26654 === (10)))
{var inst_26646 = (state_26653[(2)]);var state_26653__$1 = (function (){var statearr_26665 = state_26653;(statearr_26665[(8)] = inst_26646);
return statearr_26665;
})();var statearr_26666_26684 = state_26653__$1;(statearr_26666_26684[(2)] = null);
(statearr_26666_26684[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26654 === (8)))
{var inst_26635 = (state_26653[(7)]);var state_26653__$1 = state_26653;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26653__$1,(11),out,inst_26635);
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
});})(c__11517__auto___26674,out))
;return ((function (switch__11461__auto__,c__11517__auto___26674,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26670 = [null,null,null,null,null,null,null,null,null];(statearr_26670[(0)] = state_machine__11462__auto__);
(statearr_26670[(1)] = (1));
return statearr_26670;
});
var state_machine__11462__auto____1 = (function (state_26653){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26653);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26671){if((e26671 instanceof Object))
{var ex__11465__auto__ = e26671;var statearr_26672_26685 = state_26653;(statearr_26672_26685[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26653);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26671;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26686 = state_26653;
state_26653 = G__26686;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26653){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26674,out))
})();var state__11519__auto__ = (function (){var statearr_26673 = f__11518__auto__.call(null);(statearr_26673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26674);
return statearr_26673;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26674,out))
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
return (function (state_26852){var state_val_26853 = (state_26852[(1)]);if((state_val_26853 === (7)))
{var inst_26848 = (state_26852[(2)]);var state_26852__$1 = state_26852;var statearr_26854_26895 = state_26852__$1;(statearr_26854_26895[(2)] = inst_26848);
(statearr_26854_26895[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26853 === (20)))
{var inst_26818 = (state_26852[(7)]);var inst_26829 = (state_26852[(2)]);var inst_26830 = cljs.core.next.call(null,inst_26818);var inst_26804 = inst_26830;var inst_26805 = null;var inst_26806 = (0);var inst_26807 = (0);var state_26852__$1 = (function (){var statearr_26855 = state_26852;(statearr_26855[(8)] = inst_26829);
(statearr_26855[(9)] = inst_26807);
(statearr_26855[(10)] = inst_26804);
(statearr_26855[(11)] = inst_26805);
(statearr_26855[(12)] = inst_26806);
return statearr_26855;
})();var statearr_26856_26896 = state_26852__$1;(statearr_26856_26896[(2)] = null);
(statearr_26856_26896[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26853 === (1)))
{var state_26852__$1 = state_26852;var statearr_26857_26897 = state_26852__$1;(statearr_26857_26897[(2)] = null);
(statearr_26857_26897[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26853 === (4)))
{var inst_26793 = (state_26852[(13)]);var inst_26793__$1 = (state_26852[(2)]);var inst_26794 = (inst_26793__$1 == null);var state_26852__$1 = (function (){var statearr_26858 = state_26852;(statearr_26858[(13)] = inst_26793__$1);
return statearr_26858;
})();if(cljs.core.truth_(inst_26794))
{var statearr_26859_26898 = state_26852__$1;(statearr_26859_26898[(1)] = (5));
} else
{var statearr_26860_26899 = state_26852__$1;(statearr_26860_26899[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26853 === (15)))
{var state_26852__$1 = state_26852;var statearr_26864_26900 = state_26852__$1;(statearr_26864_26900[(2)] = null);
(statearr_26864_26900[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26853 === (21)))
{var state_26852__$1 = state_26852;var statearr_26865_26901 = state_26852__$1;(statearr_26865_26901[(2)] = null);
(statearr_26865_26901[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26853 === (13)))
{var inst_26807 = (state_26852[(9)]);var inst_26804 = (state_26852[(10)]);var inst_26805 = (state_26852[(11)]);var inst_26806 = (state_26852[(12)]);var inst_26814 = (state_26852[(2)]);var inst_26815 = (inst_26807 + (1));var tmp26861 = inst_26804;var tmp26862 = inst_26805;var tmp26863 = inst_26806;var inst_26804__$1 = tmp26861;var inst_26805__$1 = tmp26862;var inst_26806__$1 = tmp26863;var inst_26807__$1 = inst_26815;var state_26852__$1 = (function (){var statearr_26866 = state_26852;(statearr_26866[(9)] = inst_26807__$1);
(statearr_26866[(14)] = inst_26814);
(statearr_26866[(10)] = inst_26804__$1);
(statearr_26866[(11)] = inst_26805__$1);
(statearr_26866[(12)] = inst_26806__$1);
return statearr_26866;
})();var statearr_26867_26902 = state_26852__$1;(statearr_26867_26902[(2)] = null);
(statearr_26867_26902[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26853 === (22)))
{var state_26852__$1 = state_26852;var statearr_26868_26903 = state_26852__$1;(statearr_26868_26903[(2)] = null);
(statearr_26868_26903[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26853 === (6)))
{var inst_26793 = (state_26852[(13)]);var inst_26802 = f.call(null,inst_26793);var inst_26803 = cljs.core.seq.call(null,inst_26802);var inst_26804 = inst_26803;var inst_26805 = null;var inst_26806 = (0);var inst_26807 = (0);var state_26852__$1 = (function (){var statearr_26869 = state_26852;(statearr_26869[(9)] = inst_26807);
(statearr_26869[(10)] = inst_26804);
(statearr_26869[(11)] = inst_26805);
(statearr_26869[(12)] = inst_26806);
return statearr_26869;
})();var statearr_26870_26904 = state_26852__$1;(statearr_26870_26904[(2)] = null);
(statearr_26870_26904[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26853 === (17)))
{var inst_26818 = (state_26852[(7)]);var inst_26822 = cljs.core.chunk_first.call(null,inst_26818);var inst_26823 = cljs.core.chunk_rest.call(null,inst_26818);var inst_26824 = cljs.core.count.call(null,inst_26822);var inst_26804 = inst_26823;var inst_26805 = inst_26822;var inst_26806 = inst_26824;var inst_26807 = (0);var state_26852__$1 = (function (){var statearr_26871 = state_26852;(statearr_26871[(9)] = inst_26807);
(statearr_26871[(10)] = inst_26804);
(statearr_26871[(11)] = inst_26805);
(statearr_26871[(12)] = inst_26806);
return statearr_26871;
})();var statearr_26872_26905 = state_26852__$1;(statearr_26872_26905[(2)] = null);
(statearr_26872_26905[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26853 === (3)))
{var inst_26850 = (state_26852[(2)]);var state_26852__$1 = state_26852;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26852__$1,inst_26850);
} else
{if((state_val_26853 === (12)))
{var inst_26838 = (state_26852[(2)]);var state_26852__$1 = state_26852;var statearr_26873_26906 = state_26852__$1;(statearr_26873_26906[(2)] = inst_26838);
(statearr_26873_26906[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26853 === (2)))
{var state_26852__$1 = state_26852;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26852__$1,(4),in$);
} else
{if((state_val_26853 === (23)))
{var inst_26846 = (state_26852[(2)]);var state_26852__$1 = state_26852;var statearr_26874_26907 = state_26852__$1;(statearr_26874_26907[(2)] = inst_26846);
(statearr_26874_26907[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26853 === (19)))
{var inst_26833 = (state_26852[(2)]);var state_26852__$1 = state_26852;var statearr_26875_26908 = state_26852__$1;(statearr_26875_26908[(2)] = inst_26833);
(statearr_26875_26908[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26853 === (11)))
{var inst_26818 = (state_26852[(7)]);var inst_26804 = (state_26852[(10)]);var inst_26818__$1 = cljs.core.seq.call(null,inst_26804);var state_26852__$1 = (function (){var statearr_26876 = state_26852;(statearr_26876[(7)] = inst_26818__$1);
return statearr_26876;
})();if(inst_26818__$1)
{var statearr_26877_26909 = state_26852__$1;(statearr_26877_26909[(1)] = (14));
} else
{var statearr_26878_26910 = state_26852__$1;(statearr_26878_26910[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26853 === (9)))
{var inst_26840 = (state_26852[(2)]);var inst_26841 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_26852__$1 = (function (){var statearr_26879 = state_26852;(statearr_26879[(15)] = inst_26840);
return statearr_26879;
})();if(cljs.core.truth_(inst_26841))
{var statearr_26880_26911 = state_26852__$1;(statearr_26880_26911[(1)] = (21));
} else
{var statearr_26881_26912 = state_26852__$1;(statearr_26881_26912[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26853 === (5)))
{var inst_26796 = cljs.core.async.close_BANG_.call(null,out);var state_26852__$1 = state_26852;var statearr_26882_26913 = state_26852__$1;(statearr_26882_26913[(2)] = inst_26796);
(statearr_26882_26913[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26853 === (14)))
{var inst_26818 = (state_26852[(7)]);var inst_26820 = cljs.core.chunked_seq_QMARK_.call(null,inst_26818);var state_26852__$1 = state_26852;if(inst_26820)
{var statearr_26883_26914 = state_26852__$1;(statearr_26883_26914[(1)] = (17));
} else
{var statearr_26884_26915 = state_26852__$1;(statearr_26884_26915[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26853 === (16)))
{var inst_26836 = (state_26852[(2)]);var state_26852__$1 = state_26852;var statearr_26885_26916 = state_26852__$1;(statearr_26885_26916[(2)] = inst_26836);
(statearr_26885_26916[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26853 === (10)))
{var inst_26807 = (state_26852[(9)]);var inst_26805 = (state_26852[(11)]);var inst_26812 = cljs.core._nth.call(null,inst_26805,inst_26807);var state_26852__$1 = state_26852;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26852__$1,(13),out,inst_26812);
} else
{if((state_val_26853 === (18)))
{var inst_26818 = (state_26852[(7)]);var inst_26827 = cljs.core.first.call(null,inst_26818);var state_26852__$1 = state_26852;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26852__$1,(20),out,inst_26827);
} else
{if((state_val_26853 === (8)))
{var inst_26807 = (state_26852[(9)]);var inst_26806 = (state_26852[(12)]);var inst_26809 = (inst_26807 < inst_26806);var inst_26810 = inst_26809;var state_26852__$1 = state_26852;if(cljs.core.truth_(inst_26810))
{var statearr_26886_26917 = state_26852__$1;(statearr_26886_26917[(1)] = (10));
} else
{var statearr_26887_26918 = state_26852__$1;(statearr_26887_26918[(1)] = (11));
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
var state_machine__11462__auto____0 = (function (){var statearr_26891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26891[(0)] = state_machine__11462__auto__);
(statearr_26891[(1)] = (1));
return statearr_26891;
});
var state_machine__11462__auto____1 = (function (state_26852){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26852);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26892){if((e26892 instanceof Object))
{var ex__11465__auto__ = e26892;var statearr_26893_26919 = state_26852;(statearr_26893_26919[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26852);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26892;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26920 = state_26852;
state_26852 = G__26920;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26852){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_26894 = f__11518__auto__.call(null);(statearr_26894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_26894;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___27017 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___27017,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___27017,out){
return (function (state_26992){var state_val_26993 = (state_26992[(1)]);if((state_val_26993 === (7)))
{var inst_26987 = (state_26992[(2)]);var state_26992__$1 = state_26992;var statearr_26994_27018 = state_26992__$1;(statearr_26994_27018[(2)] = inst_26987);
(statearr_26994_27018[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26993 === (1)))
{var inst_26969 = null;var state_26992__$1 = (function (){var statearr_26995 = state_26992;(statearr_26995[(7)] = inst_26969);
return statearr_26995;
})();var statearr_26996_27019 = state_26992__$1;(statearr_26996_27019[(2)] = null);
(statearr_26996_27019[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26993 === (4)))
{var inst_26972 = (state_26992[(8)]);var inst_26972__$1 = (state_26992[(2)]);var inst_26973 = (inst_26972__$1 == null);var inst_26974 = cljs.core.not.call(null,inst_26973);var state_26992__$1 = (function (){var statearr_26997 = state_26992;(statearr_26997[(8)] = inst_26972__$1);
return statearr_26997;
})();if(inst_26974)
{var statearr_26998_27020 = state_26992__$1;(statearr_26998_27020[(1)] = (5));
} else
{var statearr_26999_27021 = state_26992__$1;(statearr_26999_27021[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26993 === (6)))
{var state_26992__$1 = state_26992;var statearr_27000_27022 = state_26992__$1;(statearr_27000_27022[(2)] = null);
(statearr_27000_27022[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26993 === (3)))
{var inst_26989 = (state_26992[(2)]);var inst_26990 = cljs.core.async.close_BANG_.call(null,out);var state_26992__$1 = (function (){var statearr_27001 = state_26992;(statearr_27001[(9)] = inst_26989);
return statearr_27001;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26992__$1,inst_26990);
} else
{if((state_val_26993 === (2)))
{var state_26992__$1 = state_26992;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26992__$1,(4),ch);
} else
{if((state_val_26993 === (11)))
{var inst_26972 = (state_26992[(8)]);var inst_26981 = (state_26992[(2)]);var inst_26969 = inst_26972;var state_26992__$1 = (function (){var statearr_27002 = state_26992;(statearr_27002[(10)] = inst_26981);
(statearr_27002[(7)] = inst_26969);
return statearr_27002;
})();var statearr_27003_27023 = state_26992__$1;(statearr_27003_27023[(2)] = null);
(statearr_27003_27023[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26993 === (9)))
{var inst_26972 = (state_26992[(8)]);var state_26992__$1 = state_26992;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26992__$1,(11),out,inst_26972);
} else
{if((state_val_26993 === (5)))
{var inst_26972 = (state_26992[(8)]);var inst_26969 = (state_26992[(7)]);var inst_26976 = cljs.core._EQ_.call(null,inst_26972,inst_26969);var state_26992__$1 = state_26992;if(inst_26976)
{var statearr_27005_27024 = state_26992__$1;(statearr_27005_27024[(1)] = (8));
} else
{var statearr_27006_27025 = state_26992__$1;(statearr_27006_27025[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26993 === (10)))
{var inst_26984 = (state_26992[(2)]);var state_26992__$1 = state_26992;var statearr_27007_27026 = state_26992__$1;(statearr_27007_27026[(2)] = inst_26984);
(statearr_27007_27026[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26993 === (8)))
{var inst_26969 = (state_26992[(7)]);var tmp27004 = inst_26969;var inst_26969__$1 = tmp27004;var state_26992__$1 = (function (){var statearr_27008 = state_26992;(statearr_27008[(7)] = inst_26969__$1);
return statearr_27008;
})();var statearr_27009_27027 = state_26992__$1;(statearr_27009_27027[(2)] = null);
(statearr_27009_27027[(1)] = (2));
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
});})(c__11517__auto___27017,out))
;return ((function (switch__11461__auto__,c__11517__auto___27017,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_27013 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27013[(0)] = state_machine__11462__auto__);
(statearr_27013[(1)] = (1));
return statearr_27013;
});
var state_machine__11462__auto____1 = (function (state_26992){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26992);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e27014){if((e27014 instanceof Object))
{var ex__11465__auto__ = e27014;var statearr_27015_27028 = state_26992;(statearr_27015_27028[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26992);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27014;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27029 = state_26992;
state_26992 = G__27029;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26992){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___27017,out))
})();var state__11519__auto__ = (function (){var statearr_27016 = f__11518__auto__.call(null);(statearr_27016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___27017);
return statearr_27016;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___27017,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___27164 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___27164,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___27164,out){
return (function (state_27134){var state_val_27135 = (state_27134[(1)]);if((state_val_27135 === (7)))
{var inst_27130 = (state_27134[(2)]);var state_27134__$1 = state_27134;var statearr_27136_27165 = state_27134__$1;(statearr_27136_27165[(2)] = inst_27130);
(statearr_27136_27165[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27135 === (1)))
{var inst_27097 = (new Array(n));var inst_27098 = inst_27097;var inst_27099 = (0);var state_27134__$1 = (function (){var statearr_27137 = state_27134;(statearr_27137[(7)] = inst_27099);
(statearr_27137[(8)] = inst_27098);
return statearr_27137;
})();var statearr_27138_27166 = state_27134__$1;(statearr_27138_27166[(2)] = null);
(statearr_27138_27166[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27135 === (4)))
{var inst_27102 = (state_27134[(9)]);var inst_27102__$1 = (state_27134[(2)]);var inst_27103 = (inst_27102__$1 == null);var inst_27104 = cljs.core.not.call(null,inst_27103);var state_27134__$1 = (function (){var statearr_27139 = state_27134;(statearr_27139[(9)] = inst_27102__$1);
return statearr_27139;
})();if(inst_27104)
{var statearr_27140_27167 = state_27134__$1;(statearr_27140_27167[(1)] = (5));
} else
{var statearr_27141_27168 = state_27134__$1;(statearr_27141_27168[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27135 === (15)))
{var inst_27124 = (state_27134[(2)]);var state_27134__$1 = state_27134;var statearr_27142_27169 = state_27134__$1;(statearr_27142_27169[(2)] = inst_27124);
(statearr_27142_27169[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27135 === (13)))
{var state_27134__$1 = state_27134;var statearr_27143_27170 = state_27134__$1;(statearr_27143_27170[(2)] = null);
(statearr_27143_27170[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27135 === (6)))
{var inst_27099 = (state_27134[(7)]);var inst_27120 = (inst_27099 > (0));var state_27134__$1 = state_27134;if(cljs.core.truth_(inst_27120))
{var statearr_27144_27171 = state_27134__$1;(statearr_27144_27171[(1)] = (12));
} else
{var statearr_27145_27172 = state_27134__$1;(statearr_27145_27172[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27135 === (3)))
{var inst_27132 = (state_27134[(2)]);var state_27134__$1 = state_27134;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27134__$1,inst_27132);
} else
{if((state_val_27135 === (12)))
{var inst_27098 = (state_27134[(8)]);var inst_27122 = cljs.core.vec.call(null,inst_27098);var state_27134__$1 = state_27134;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27134__$1,(15),out,inst_27122);
} else
{if((state_val_27135 === (2)))
{var state_27134__$1 = state_27134;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27134__$1,(4),ch);
} else
{if((state_val_27135 === (11)))
{var inst_27114 = (state_27134[(2)]);var inst_27115 = (new Array(n));var inst_27098 = inst_27115;var inst_27099 = (0);var state_27134__$1 = (function (){var statearr_27146 = state_27134;(statearr_27146[(7)] = inst_27099);
(statearr_27146[(10)] = inst_27114);
(statearr_27146[(8)] = inst_27098);
return statearr_27146;
})();var statearr_27147_27173 = state_27134__$1;(statearr_27147_27173[(2)] = null);
(statearr_27147_27173[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27135 === (9)))
{var inst_27098 = (state_27134[(8)]);var inst_27112 = cljs.core.vec.call(null,inst_27098);var state_27134__$1 = state_27134;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27134__$1,(11),out,inst_27112);
} else
{if((state_val_27135 === (5)))
{var inst_27102 = (state_27134[(9)]);var inst_27099 = (state_27134[(7)]);var inst_27107 = (state_27134[(11)]);var inst_27098 = (state_27134[(8)]);var inst_27106 = (inst_27098[inst_27099] = inst_27102);var inst_27107__$1 = (inst_27099 + (1));var inst_27108 = (inst_27107__$1 < n);var state_27134__$1 = (function (){var statearr_27148 = state_27134;(statearr_27148[(11)] = inst_27107__$1);
(statearr_27148[(12)] = inst_27106);
return statearr_27148;
})();if(cljs.core.truth_(inst_27108))
{var statearr_27149_27174 = state_27134__$1;(statearr_27149_27174[(1)] = (8));
} else
{var statearr_27150_27175 = state_27134__$1;(statearr_27150_27175[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27135 === (14)))
{var inst_27127 = (state_27134[(2)]);var inst_27128 = cljs.core.async.close_BANG_.call(null,out);var state_27134__$1 = (function (){var statearr_27152 = state_27134;(statearr_27152[(13)] = inst_27127);
return statearr_27152;
})();var statearr_27153_27176 = state_27134__$1;(statearr_27153_27176[(2)] = inst_27128);
(statearr_27153_27176[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27135 === (10)))
{var inst_27118 = (state_27134[(2)]);var state_27134__$1 = state_27134;var statearr_27154_27177 = state_27134__$1;(statearr_27154_27177[(2)] = inst_27118);
(statearr_27154_27177[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27135 === (8)))
{var inst_27107 = (state_27134[(11)]);var inst_27098 = (state_27134[(8)]);var tmp27151 = inst_27098;var inst_27098__$1 = tmp27151;var inst_27099 = inst_27107;var state_27134__$1 = (function (){var statearr_27155 = state_27134;(statearr_27155[(7)] = inst_27099);
(statearr_27155[(8)] = inst_27098__$1);
return statearr_27155;
})();var statearr_27156_27178 = state_27134__$1;(statearr_27156_27178[(2)] = null);
(statearr_27156_27178[(1)] = (2));
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
});})(c__11517__auto___27164,out))
;return ((function (switch__11461__auto__,c__11517__auto___27164,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_27160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27160[(0)] = state_machine__11462__auto__);
(statearr_27160[(1)] = (1));
return statearr_27160;
});
var state_machine__11462__auto____1 = (function (state_27134){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_27134);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e27161){if((e27161 instanceof Object))
{var ex__11465__auto__ = e27161;var statearr_27162_27179 = state_27134;(statearr_27162_27179[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27134);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27161;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27180 = state_27134;
state_27134 = G__27180;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_27134){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_27134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___27164,out))
})();var state__11519__auto__ = (function (){var statearr_27163 = f__11518__auto__.call(null);(statearr_27163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___27164);
return statearr_27163;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___27164,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___27323 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___27323,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___27323,out){
return (function (state_27293){var state_val_27294 = (state_27293[(1)]);if((state_val_27294 === (7)))
{var inst_27289 = (state_27293[(2)]);var state_27293__$1 = state_27293;var statearr_27295_27324 = state_27293__$1;(statearr_27295_27324[(2)] = inst_27289);
(statearr_27295_27324[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27294 === (1)))
{var inst_27252 = [];var inst_27253 = inst_27252;var inst_27254 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_27293__$1 = (function (){var statearr_27296 = state_27293;(statearr_27296[(7)] = inst_27253);
(statearr_27296[(8)] = inst_27254);
return statearr_27296;
})();var statearr_27297_27325 = state_27293__$1;(statearr_27297_27325[(2)] = null);
(statearr_27297_27325[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27294 === (4)))
{var inst_27257 = (state_27293[(9)]);var inst_27257__$1 = (state_27293[(2)]);var inst_27258 = (inst_27257__$1 == null);var inst_27259 = cljs.core.not.call(null,inst_27258);var state_27293__$1 = (function (){var statearr_27298 = state_27293;(statearr_27298[(9)] = inst_27257__$1);
return statearr_27298;
})();if(inst_27259)
{var statearr_27299_27326 = state_27293__$1;(statearr_27299_27326[(1)] = (5));
} else
{var statearr_27300_27327 = state_27293__$1;(statearr_27300_27327[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27294 === (15)))
{var inst_27283 = (state_27293[(2)]);var state_27293__$1 = state_27293;var statearr_27301_27328 = state_27293__$1;(statearr_27301_27328[(2)] = inst_27283);
(statearr_27301_27328[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27294 === (13)))
{var state_27293__$1 = state_27293;var statearr_27302_27329 = state_27293__$1;(statearr_27302_27329[(2)] = null);
(statearr_27302_27329[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27294 === (6)))
{var inst_27253 = (state_27293[(7)]);var inst_27278 = inst_27253.length;var inst_27279 = (inst_27278 > (0));var state_27293__$1 = state_27293;if(cljs.core.truth_(inst_27279))
{var statearr_27303_27330 = state_27293__$1;(statearr_27303_27330[(1)] = (12));
} else
{var statearr_27304_27331 = state_27293__$1;(statearr_27304_27331[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27294 === (3)))
{var inst_27291 = (state_27293[(2)]);var state_27293__$1 = state_27293;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27293__$1,inst_27291);
} else
{if((state_val_27294 === (12)))
{var inst_27253 = (state_27293[(7)]);var inst_27281 = cljs.core.vec.call(null,inst_27253);var state_27293__$1 = state_27293;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27293__$1,(15),out,inst_27281);
} else
{if((state_val_27294 === (2)))
{var state_27293__$1 = state_27293;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27293__$1,(4),ch);
} else
{if((state_val_27294 === (11)))
{var inst_27257 = (state_27293[(9)]);var inst_27261 = (state_27293[(10)]);var inst_27271 = (state_27293[(2)]);var inst_27272 = [];var inst_27273 = inst_27272.push(inst_27257);var inst_27253 = inst_27272;var inst_27254 = inst_27261;var state_27293__$1 = (function (){var statearr_27305 = state_27293;(statearr_27305[(7)] = inst_27253);
(statearr_27305[(11)] = inst_27273);
(statearr_27305[(8)] = inst_27254);
(statearr_27305[(12)] = inst_27271);
return statearr_27305;
})();var statearr_27306_27332 = state_27293__$1;(statearr_27306_27332[(2)] = null);
(statearr_27306_27332[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27294 === (9)))
{var inst_27253 = (state_27293[(7)]);var inst_27269 = cljs.core.vec.call(null,inst_27253);var state_27293__$1 = state_27293;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27293__$1,(11),out,inst_27269);
} else
{if((state_val_27294 === (5)))
{var inst_27257 = (state_27293[(9)]);var inst_27254 = (state_27293[(8)]);var inst_27261 = (state_27293[(10)]);var inst_27261__$1 = f.call(null,inst_27257);var inst_27262 = cljs.core._EQ_.call(null,inst_27261__$1,inst_27254);var inst_27263 = cljs.core.keyword_identical_QMARK_.call(null,inst_27254,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_27264 = (inst_27262) || (inst_27263);var state_27293__$1 = (function (){var statearr_27307 = state_27293;(statearr_27307[(10)] = inst_27261__$1);
return statearr_27307;
})();if(cljs.core.truth_(inst_27264))
{var statearr_27308_27333 = state_27293__$1;(statearr_27308_27333[(1)] = (8));
} else
{var statearr_27309_27334 = state_27293__$1;(statearr_27309_27334[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27294 === (14)))
{var inst_27286 = (state_27293[(2)]);var inst_27287 = cljs.core.async.close_BANG_.call(null,out);var state_27293__$1 = (function (){var statearr_27311 = state_27293;(statearr_27311[(13)] = inst_27286);
return statearr_27311;
})();var statearr_27312_27335 = state_27293__$1;(statearr_27312_27335[(2)] = inst_27287);
(statearr_27312_27335[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27294 === (10)))
{var inst_27276 = (state_27293[(2)]);var state_27293__$1 = state_27293;var statearr_27313_27336 = state_27293__$1;(statearr_27313_27336[(2)] = inst_27276);
(statearr_27313_27336[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27294 === (8)))
{var inst_27253 = (state_27293[(7)]);var inst_27257 = (state_27293[(9)]);var inst_27261 = (state_27293[(10)]);var inst_27266 = inst_27253.push(inst_27257);var tmp27310 = inst_27253;var inst_27253__$1 = tmp27310;var inst_27254 = inst_27261;var state_27293__$1 = (function (){var statearr_27314 = state_27293;(statearr_27314[(7)] = inst_27253__$1);
(statearr_27314[(8)] = inst_27254);
(statearr_27314[(14)] = inst_27266);
return statearr_27314;
})();var statearr_27315_27337 = state_27293__$1;(statearr_27315_27337[(2)] = null);
(statearr_27315_27337[(1)] = (2));
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
});})(c__11517__auto___27323,out))
;return ((function (switch__11461__auto__,c__11517__auto___27323,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_27319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27319[(0)] = state_machine__11462__auto__);
(statearr_27319[(1)] = (1));
return statearr_27319;
});
var state_machine__11462__auto____1 = (function (state_27293){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_27293);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e27320){if((e27320 instanceof Object))
{var ex__11465__auto__ = e27320;var statearr_27321_27338 = state_27293;(statearr_27321_27338[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27293);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27320;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27339 = state_27293;
state_27293 = G__27339;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_27293){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_27293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___27323,out))
})();var state__11519__auto__ = (function (){var statearr_27322 = f__11518__auto__.call(null);(statearr_27322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___27323);
return statearr_27322;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___27323,out))
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
