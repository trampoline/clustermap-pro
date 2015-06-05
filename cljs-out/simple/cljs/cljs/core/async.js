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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24477 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24477 = (function (f,fn_handler,meta24478){
this.f = f;
this.fn_handler = fn_handler;
this.meta24478 = meta24478;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24477.cljs$lang$type = true;
cljs.core.async.t24477.cljs$lang$ctorStr = "cljs.core.async/t24477";
cljs.core.async.t24477.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24477");
});
cljs.core.async.t24477.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24477.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24477.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24479){var self__ = this;
var _24479__$1 = this;return self__.meta24478;
});
cljs.core.async.t24477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24479,meta24478__$1){var self__ = this;
var _24479__$1 = this;return (new cljs.core.async.t24477(self__.f,self__.fn_handler,meta24478__$1));
});
cljs.core.async.__GT_t24477 = (function __GT_t24477(f__$1,fn_handler__$1,meta24478){return (new cljs.core.async.t24477(f__$1,fn_handler__$1,meta24478));
});
}
return (new cljs.core.async.t24477(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24481 = buff;if(G__24481)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__24481.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24481.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24481);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24481);
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
{var val_24482 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_24482);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_24482,ret){
return (function (){return fn1.call(null,val_24482);
});})(val_24482,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___24483 = n;var x_24484 = (0);while(true){
if((x_24484 < n__4508__auto___24483))
{(a[x_24484] = (0));
{
var G__24485 = (x_24484 + (1));
x_24484 = G__24485;
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
var G__24486 = (i + (1));
i = G__24486;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t24490 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24490 = (function (flag,alt_flag,meta24491){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24491 = meta24491;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24490.cljs$lang$type = true;
cljs.core.async.t24490.cljs$lang$ctorStr = "cljs.core.async/t24490";
cljs.core.async.t24490.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24490");
});})(flag))
;
cljs.core.async.t24490.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24490.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t24490.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t24490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24492){var self__ = this;
var _24492__$1 = this;return self__.meta24491;
});})(flag))
;
cljs.core.async.t24490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24492,meta24491__$1){var self__ = this;
var _24492__$1 = this;return (new cljs.core.async.t24490(self__.flag,self__.alt_flag,meta24491__$1));
});})(flag))
;
cljs.core.async.__GT_t24490 = ((function (flag){
return (function __GT_t24490(flag__$1,alt_flag__$1,meta24491){return (new cljs.core.async.t24490(flag__$1,alt_flag__$1,meta24491));
});})(flag))
;
}
return (new cljs.core.async.t24490(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24496 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24496 = (function (cb,flag,alt_handler,meta24497){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24497 = meta24497;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24496.cljs$lang$type = true;
cljs.core.async.t24496.cljs$lang$ctorStr = "cljs.core.async/t24496";
cljs.core.async.t24496.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24496");
});
cljs.core.async.t24496.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24496.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t24496.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t24496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24498){var self__ = this;
var _24498__$1 = this;return self__.meta24497;
});
cljs.core.async.t24496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24498,meta24497__$1){var self__ = this;
var _24498__$1 = this;return (new cljs.core.async.t24496(self__.cb,self__.flag,self__.alt_handler,meta24497__$1));
});
cljs.core.async.__GT_t24496 = (function __GT_t24496(cb__$1,flag__$1,alt_handler__$1,meta24497){return (new cljs.core.async.t24496(cb__$1,flag__$1,alt_handler__$1,meta24497));
});
}
return (new cljs.core.async.t24496(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24499_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24499_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24500_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24500_SHARP_,port], null));
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
var G__24501 = (i + (1));
i = G__24501;
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
var alts_BANG___delegate = function (ports,p__24502){var map__24504 = p__24502;var map__24504__$1 = ((cljs.core.seq_QMARK_.call(null,map__24504))?cljs.core.apply.call(null,cljs.core.hash_map,map__24504):map__24504);var opts = map__24504__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24502 = null;if (arguments.length > 1) {
  p__24502 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24502);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24505){
var ports = cljs.core.first(arglist__24505);
var p__24502 = cljs.core.rest(arglist__24505);
return alts_BANG___delegate(ports,p__24502);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__11517__auto___24600 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___24600){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___24600){
return (function (state_24576){var state_val_24577 = (state_24576[(1)]);if((state_val_24577 === (7)))
{var inst_24572 = (state_24576[(2)]);var state_24576__$1 = state_24576;var statearr_24578_24601 = state_24576__$1;(statearr_24578_24601[(2)] = inst_24572);
(statearr_24578_24601[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24577 === (1)))
{var state_24576__$1 = state_24576;var statearr_24579_24602 = state_24576__$1;(statearr_24579_24602[(2)] = null);
(statearr_24579_24602[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24577 === (4)))
{var inst_24555 = (state_24576[(7)]);var inst_24555__$1 = (state_24576[(2)]);var inst_24556 = (inst_24555__$1 == null);var state_24576__$1 = (function (){var statearr_24580 = state_24576;(statearr_24580[(7)] = inst_24555__$1);
return statearr_24580;
})();if(cljs.core.truth_(inst_24556))
{var statearr_24581_24603 = state_24576__$1;(statearr_24581_24603[(1)] = (5));
} else
{var statearr_24582_24604 = state_24576__$1;(statearr_24582_24604[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24577 === (13)))
{var state_24576__$1 = state_24576;var statearr_24583_24605 = state_24576__$1;(statearr_24583_24605[(2)] = null);
(statearr_24583_24605[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24577 === (6)))
{var inst_24555 = (state_24576[(7)]);var state_24576__$1 = state_24576;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24576__$1,(11),to,inst_24555);
} else
{if((state_val_24577 === (3)))
{var inst_24574 = (state_24576[(2)]);var state_24576__$1 = state_24576;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24576__$1,inst_24574);
} else
{if((state_val_24577 === (12)))
{var state_24576__$1 = state_24576;var statearr_24584_24606 = state_24576__$1;(statearr_24584_24606[(2)] = null);
(statearr_24584_24606[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24577 === (2)))
{var state_24576__$1 = state_24576;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24576__$1,(4),from);
} else
{if((state_val_24577 === (11)))
{var inst_24565 = (state_24576[(2)]);var state_24576__$1 = state_24576;if(cljs.core.truth_(inst_24565))
{var statearr_24585_24607 = state_24576__$1;(statearr_24585_24607[(1)] = (12));
} else
{var statearr_24586_24608 = state_24576__$1;(statearr_24586_24608[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24577 === (9)))
{var state_24576__$1 = state_24576;var statearr_24587_24609 = state_24576__$1;(statearr_24587_24609[(2)] = null);
(statearr_24587_24609[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24577 === (5)))
{var state_24576__$1 = state_24576;if(cljs.core.truth_(close_QMARK_))
{var statearr_24588_24610 = state_24576__$1;(statearr_24588_24610[(1)] = (8));
} else
{var statearr_24589_24611 = state_24576__$1;(statearr_24589_24611[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24577 === (14)))
{var inst_24570 = (state_24576[(2)]);var state_24576__$1 = state_24576;var statearr_24590_24612 = state_24576__$1;(statearr_24590_24612[(2)] = inst_24570);
(statearr_24590_24612[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24577 === (10)))
{var inst_24562 = (state_24576[(2)]);var state_24576__$1 = state_24576;var statearr_24591_24613 = state_24576__$1;(statearr_24591_24613[(2)] = inst_24562);
(statearr_24591_24613[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24577 === (8)))
{var inst_24559 = cljs.core.async.close_BANG_.call(null,to);var state_24576__$1 = state_24576;var statearr_24592_24614 = state_24576__$1;(statearr_24592_24614[(2)] = inst_24559);
(statearr_24592_24614[(1)] = (10));
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
});})(c__11517__auto___24600))
;return ((function (switch__11461__auto__,c__11517__auto___24600){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24596 = [null,null,null,null,null,null,null,null];(statearr_24596[(0)] = state_machine__11462__auto__);
(statearr_24596[(1)] = (1));
return statearr_24596;
});
var state_machine__11462__auto____1 = (function (state_24576){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24576);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24597){if((e24597 instanceof Object))
{var ex__11465__auto__ = e24597;var statearr_24598_24615 = state_24576;(statearr_24598_24615[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24576);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24597;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24616 = state_24576;
state_24576 = G__24616;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24576){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___24600))
})();var state__11519__auto__ = (function (){var statearr_24599 = f__11518__auto__.call(null);(statearr_24599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24600);
return statearr_24599;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___24600))
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
return (function (p__24800){var vec__24801 = p__24800;var v = cljs.core.nth.call(null,vec__24801,(0),null);var p = cljs.core.nth.call(null,vec__24801,(1),null);var job = vec__24801;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__11517__auto___24983 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___24983,res,vec__24801,v,p,job,jobs,results){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___24983,res,vec__24801,v,p,job,jobs,results){
return (function (state_24806){var state_val_24807 = (state_24806[(1)]);if((state_val_24807 === (2)))
{var inst_24803 = (state_24806[(2)]);var inst_24804 = cljs.core.async.close_BANG_.call(null,res);var state_24806__$1 = (function (){var statearr_24808 = state_24806;(statearr_24808[(7)] = inst_24803);
return statearr_24808;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24806__$1,inst_24804);
} else
{if((state_val_24807 === (1)))
{var state_24806__$1 = state_24806;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24806__$1,(2),res,v);
} else
{return null;
}
}
});})(c__11517__auto___24983,res,vec__24801,v,p,job,jobs,results))
;return ((function (switch__11461__auto__,c__11517__auto___24983,res,vec__24801,v,p,job,jobs,results){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24812 = [null,null,null,null,null,null,null,null];(statearr_24812[(0)] = state_machine__11462__auto__);
(statearr_24812[(1)] = (1));
return statearr_24812;
});
var state_machine__11462__auto____1 = (function (state_24806){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24806);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24813){if((e24813 instanceof Object))
{var ex__11465__auto__ = e24813;var statearr_24814_24984 = state_24806;(statearr_24814_24984[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24806);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24813;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24985 = state_24806;
state_24806 = G__24985;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24806){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___24983,res,vec__24801,v,p,job,jobs,results))
})();var state__11519__auto__ = (function (){var statearr_24815 = f__11518__auto__.call(null);(statearr_24815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24983);
return statearr_24815;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___24983,res,vec__24801,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__24816){var vec__24817 = p__24816;var v = cljs.core.nth.call(null,vec__24817,(0),null);var p = cljs.core.nth.call(null,vec__24817,(1),null);var job = vec__24817;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___24986 = n;var __24987 = (0);while(true){
if((__24987 < n__4508__auto___24986))
{var G__24818_24988 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__24818_24988) {
case "async":
var c__11517__auto___24990 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24987,c__11517__auto___24990,G__24818_24988,n__4508__auto___24986,jobs,results,process,async){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (__24987,c__11517__auto___24990,G__24818_24988,n__4508__auto___24986,jobs,results,process,async){
return (function (state_24831){var state_val_24832 = (state_24831[(1)]);if((state_val_24832 === (7)))
{var inst_24827 = (state_24831[(2)]);var state_24831__$1 = state_24831;var statearr_24833_24991 = state_24831__$1;(statearr_24833_24991[(2)] = inst_24827);
(statearr_24833_24991[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24832 === (6)))
{var state_24831__$1 = state_24831;var statearr_24834_24992 = state_24831__$1;(statearr_24834_24992[(2)] = null);
(statearr_24834_24992[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24832 === (5)))
{var state_24831__$1 = state_24831;var statearr_24835_24993 = state_24831__$1;(statearr_24835_24993[(2)] = null);
(statearr_24835_24993[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24832 === (4)))
{var inst_24821 = (state_24831[(2)]);var inst_24822 = async.call(null,inst_24821);var state_24831__$1 = state_24831;if(cljs.core.truth_(inst_24822))
{var statearr_24836_24994 = state_24831__$1;(statearr_24836_24994[(1)] = (5));
} else
{var statearr_24837_24995 = state_24831__$1;(statearr_24837_24995[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24832 === (3)))
{var inst_24829 = (state_24831[(2)]);var state_24831__$1 = state_24831;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24831__$1,inst_24829);
} else
{if((state_val_24832 === (2)))
{var state_24831__$1 = state_24831;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24831__$1,(4),jobs);
} else
{if((state_val_24832 === (1)))
{var state_24831__$1 = state_24831;var statearr_24838_24996 = state_24831__$1;(statearr_24838_24996[(2)] = null);
(statearr_24838_24996[(1)] = (2));
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
});})(__24987,c__11517__auto___24990,G__24818_24988,n__4508__auto___24986,jobs,results,process,async))
;return ((function (__24987,switch__11461__auto__,c__11517__auto___24990,G__24818_24988,n__4508__auto___24986,jobs,results,process,async){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24842 = [null,null,null,null,null,null,null];(statearr_24842[(0)] = state_machine__11462__auto__);
(statearr_24842[(1)] = (1));
return statearr_24842;
});
var state_machine__11462__auto____1 = (function (state_24831){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24831);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24843){if((e24843 instanceof Object))
{var ex__11465__auto__ = e24843;var statearr_24844_24997 = state_24831;(statearr_24844_24997[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24831);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24843;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24998 = state_24831;
state_24831 = G__24998;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24831){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(__24987,switch__11461__auto__,c__11517__auto___24990,G__24818_24988,n__4508__auto___24986,jobs,results,process,async))
})();var state__11519__auto__ = (function (){var statearr_24845 = f__11518__auto__.call(null);(statearr_24845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24990);
return statearr_24845;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(__24987,c__11517__auto___24990,G__24818_24988,n__4508__auto___24986,jobs,results,process,async))
);

break;
case "compute":
var c__11517__auto___24999 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24987,c__11517__auto___24999,G__24818_24988,n__4508__auto___24986,jobs,results,process,async){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (__24987,c__11517__auto___24999,G__24818_24988,n__4508__auto___24986,jobs,results,process,async){
return (function (state_24858){var state_val_24859 = (state_24858[(1)]);if((state_val_24859 === (7)))
{var inst_24854 = (state_24858[(2)]);var state_24858__$1 = state_24858;var statearr_24860_25000 = state_24858__$1;(statearr_24860_25000[(2)] = inst_24854);
(statearr_24860_25000[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24859 === (6)))
{var state_24858__$1 = state_24858;var statearr_24861_25001 = state_24858__$1;(statearr_24861_25001[(2)] = null);
(statearr_24861_25001[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24859 === (5)))
{var state_24858__$1 = state_24858;var statearr_24862_25002 = state_24858__$1;(statearr_24862_25002[(2)] = null);
(statearr_24862_25002[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24859 === (4)))
{var inst_24848 = (state_24858[(2)]);var inst_24849 = process.call(null,inst_24848);var state_24858__$1 = state_24858;if(cljs.core.truth_(inst_24849))
{var statearr_24863_25003 = state_24858__$1;(statearr_24863_25003[(1)] = (5));
} else
{var statearr_24864_25004 = state_24858__$1;(statearr_24864_25004[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24859 === (3)))
{var inst_24856 = (state_24858[(2)]);var state_24858__$1 = state_24858;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24858__$1,inst_24856);
} else
{if((state_val_24859 === (2)))
{var state_24858__$1 = state_24858;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24858__$1,(4),jobs);
} else
{if((state_val_24859 === (1)))
{var state_24858__$1 = state_24858;var statearr_24865_25005 = state_24858__$1;(statearr_24865_25005[(2)] = null);
(statearr_24865_25005[(1)] = (2));
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
});})(__24987,c__11517__auto___24999,G__24818_24988,n__4508__auto___24986,jobs,results,process,async))
;return ((function (__24987,switch__11461__auto__,c__11517__auto___24999,G__24818_24988,n__4508__auto___24986,jobs,results,process,async){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24869 = [null,null,null,null,null,null,null];(statearr_24869[(0)] = state_machine__11462__auto__);
(statearr_24869[(1)] = (1));
return statearr_24869;
});
var state_machine__11462__auto____1 = (function (state_24858){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24858);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24870){if((e24870 instanceof Object))
{var ex__11465__auto__ = e24870;var statearr_24871_25006 = state_24858;(statearr_24871_25006[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24858);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24870;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25007 = state_24858;
state_24858 = G__25007;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24858){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(__24987,switch__11461__auto__,c__11517__auto___24999,G__24818_24988,n__4508__auto___24986,jobs,results,process,async))
})();var state__11519__auto__ = (function (){var statearr_24872 = f__11518__auto__.call(null);(statearr_24872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24999);
return statearr_24872;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(__24987,c__11517__auto___24999,G__24818_24988,n__4508__auto___24986,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__25008 = (__24987 + (1));
__24987 = G__25008;
continue;
}
} else
{}
break;
}
var c__11517__auto___25009 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___25009,jobs,results,process,async){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___25009,jobs,results,process,async){
return (function (state_24894){var state_val_24895 = (state_24894[(1)]);if((state_val_24895 === (9)))
{var inst_24887 = (state_24894[(2)]);var state_24894__$1 = (function (){var statearr_24896 = state_24894;(statearr_24896[(7)] = inst_24887);
return statearr_24896;
})();var statearr_24897_25010 = state_24894__$1;(statearr_24897_25010[(2)] = null);
(statearr_24897_25010[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24895 === (8)))
{var inst_24880 = (state_24894[(8)]);var inst_24885 = (state_24894[(2)]);var state_24894__$1 = (function (){var statearr_24898 = state_24894;(statearr_24898[(9)] = inst_24885);
return statearr_24898;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24894__$1,(9),results,inst_24880);
} else
{if((state_val_24895 === (7)))
{var inst_24890 = (state_24894[(2)]);var state_24894__$1 = state_24894;var statearr_24899_25011 = state_24894__$1;(statearr_24899_25011[(2)] = inst_24890);
(statearr_24899_25011[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24895 === (6)))
{var inst_24875 = (state_24894[(10)]);var inst_24880 = (state_24894[(8)]);var inst_24880__$1 = cljs.core.async.chan.call(null,(1));var inst_24881 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24882 = [inst_24875,inst_24880__$1];var inst_24883 = (new cljs.core.PersistentVector(null,2,(5),inst_24881,inst_24882,null));var state_24894__$1 = (function (){var statearr_24900 = state_24894;(statearr_24900[(8)] = inst_24880__$1);
return statearr_24900;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24894__$1,(8),jobs,inst_24883);
} else
{if((state_val_24895 === (5)))
{var inst_24878 = cljs.core.async.close_BANG_.call(null,jobs);var state_24894__$1 = state_24894;var statearr_24901_25012 = state_24894__$1;(statearr_24901_25012[(2)] = inst_24878);
(statearr_24901_25012[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24895 === (4)))
{var inst_24875 = (state_24894[(10)]);var inst_24875__$1 = (state_24894[(2)]);var inst_24876 = (inst_24875__$1 == null);var state_24894__$1 = (function (){var statearr_24902 = state_24894;(statearr_24902[(10)] = inst_24875__$1);
return statearr_24902;
})();if(cljs.core.truth_(inst_24876))
{var statearr_24903_25013 = state_24894__$1;(statearr_24903_25013[(1)] = (5));
} else
{var statearr_24904_25014 = state_24894__$1;(statearr_24904_25014[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24895 === (3)))
{var inst_24892 = (state_24894[(2)]);var state_24894__$1 = state_24894;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24894__$1,inst_24892);
} else
{if((state_val_24895 === (2)))
{var state_24894__$1 = state_24894;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24894__$1,(4),from);
} else
{if((state_val_24895 === (1)))
{var state_24894__$1 = state_24894;var statearr_24905_25015 = state_24894__$1;(statearr_24905_25015[(2)] = null);
(statearr_24905_25015[(1)] = (2));
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
});})(c__11517__auto___25009,jobs,results,process,async))
;return ((function (switch__11461__auto__,c__11517__auto___25009,jobs,results,process,async){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24909 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24909[(0)] = state_machine__11462__auto__);
(statearr_24909[(1)] = (1));
return statearr_24909;
});
var state_machine__11462__auto____1 = (function (state_24894){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24894);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24910){if((e24910 instanceof Object))
{var ex__11465__auto__ = e24910;var statearr_24911_25016 = state_24894;(statearr_24911_25016[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24894);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24910;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25017 = state_24894;
state_24894 = G__25017;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24894){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___25009,jobs,results,process,async))
})();var state__11519__auto__ = (function (){var statearr_24912 = f__11518__auto__.call(null);(statearr_24912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___25009);
return statearr_24912;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___25009,jobs,results,process,async))
);
var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,jobs,results,process,async){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,jobs,results,process,async){
return (function (state_24950){var state_val_24951 = (state_24950[(1)]);if((state_val_24951 === (7)))
{var inst_24946 = (state_24950[(2)]);var state_24950__$1 = state_24950;var statearr_24952_25018 = state_24950__$1;(statearr_24952_25018[(2)] = inst_24946);
(statearr_24952_25018[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24951 === (20)))
{var state_24950__$1 = state_24950;var statearr_24953_25019 = state_24950__$1;(statearr_24953_25019[(2)] = null);
(statearr_24953_25019[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24951 === (1)))
{var state_24950__$1 = state_24950;var statearr_24954_25020 = state_24950__$1;(statearr_24954_25020[(2)] = null);
(statearr_24954_25020[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24951 === (4)))
{var inst_24915 = (state_24950[(7)]);var inst_24915__$1 = (state_24950[(2)]);var inst_24916 = (inst_24915__$1 == null);var state_24950__$1 = (function (){var statearr_24955 = state_24950;(statearr_24955[(7)] = inst_24915__$1);
return statearr_24955;
})();if(cljs.core.truth_(inst_24916))
{var statearr_24956_25021 = state_24950__$1;(statearr_24956_25021[(1)] = (5));
} else
{var statearr_24957_25022 = state_24950__$1;(statearr_24957_25022[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24951 === (15)))
{var inst_24928 = (state_24950[(8)]);var state_24950__$1 = state_24950;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24950__$1,(18),to,inst_24928);
} else
{if((state_val_24951 === (21)))
{var inst_24941 = (state_24950[(2)]);var state_24950__$1 = state_24950;var statearr_24958_25023 = state_24950__$1;(statearr_24958_25023[(2)] = inst_24941);
(statearr_24958_25023[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24951 === (13)))
{var inst_24943 = (state_24950[(2)]);var state_24950__$1 = (function (){var statearr_24959 = state_24950;(statearr_24959[(9)] = inst_24943);
return statearr_24959;
})();var statearr_24960_25024 = state_24950__$1;(statearr_24960_25024[(2)] = null);
(statearr_24960_25024[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24951 === (6)))
{var inst_24915 = (state_24950[(7)]);var state_24950__$1 = state_24950;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24950__$1,(11),inst_24915);
} else
{if((state_val_24951 === (17)))
{var inst_24936 = (state_24950[(2)]);var state_24950__$1 = state_24950;if(cljs.core.truth_(inst_24936))
{var statearr_24961_25025 = state_24950__$1;(statearr_24961_25025[(1)] = (19));
} else
{var statearr_24962_25026 = state_24950__$1;(statearr_24962_25026[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24951 === (3)))
{var inst_24948 = (state_24950[(2)]);var state_24950__$1 = state_24950;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24950__$1,inst_24948);
} else
{if((state_val_24951 === (12)))
{var inst_24925 = (state_24950[(10)]);var state_24950__$1 = state_24950;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24950__$1,(14),inst_24925);
} else
{if((state_val_24951 === (2)))
{var state_24950__$1 = state_24950;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24950__$1,(4),results);
} else
{if((state_val_24951 === (19)))
{var state_24950__$1 = state_24950;var statearr_24963_25027 = state_24950__$1;(statearr_24963_25027[(2)] = null);
(statearr_24963_25027[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24951 === (11)))
{var inst_24925 = (state_24950[(2)]);var state_24950__$1 = (function (){var statearr_24964 = state_24950;(statearr_24964[(10)] = inst_24925);
return statearr_24964;
})();var statearr_24965_25028 = state_24950__$1;(statearr_24965_25028[(2)] = null);
(statearr_24965_25028[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24951 === (9)))
{var state_24950__$1 = state_24950;var statearr_24966_25029 = state_24950__$1;(statearr_24966_25029[(2)] = null);
(statearr_24966_25029[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24951 === (5)))
{var state_24950__$1 = state_24950;if(cljs.core.truth_(close_QMARK_))
{var statearr_24967_25030 = state_24950__$1;(statearr_24967_25030[(1)] = (8));
} else
{var statearr_24968_25031 = state_24950__$1;(statearr_24968_25031[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24951 === (14)))
{var inst_24930 = (state_24950[(11)]);var inst_24928 = (state_24950[(8)]);var inst_24928__$1 = (state_24950[(2)]);var inst_24929 = (inst_24928__$1 == null);var inst_24930__$1 = cljs.core.not.call(null,inst_24929);var state_24950__$1 = (function (){var statearr_24969 = state_24950;(statearr_24969[(11)] = inst_24930__$1);
(statearr_24969[(8)] = inst_24928__$1);
return statearr_24969;
})();if(inst_24930__$1)
{var statearr_24970_25032 = state_24950__$1;(statearr_24970_25032[(1)] = (15));
} else
{var statearr_24971_25033 = state_24950__$1;(statearr_24971_25033[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24951 === (16)))
{var inst_24930 = (state_24950[(11)]);var state_24950__$1 = state_24950;var statearr_24972_25034 = state_24950__$1;(statearr_24972_25034[(2)] = inst_24930);
(statearr_24972_25034[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24951 === (10)))
{var inst_24922 = (state_24950[(2)]);var state_24950__$1 = state_24950;var statearr_24973_25035 = state_24950__$1;(statearr_24973_25035[(2)] = inst_24922);
(statearr_24973_25035[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24951 === (18)))
{var inst_24933 = (state_24950[(2)]);var state_24950__$1 = state_24950;var statearr_24974_25036 = state_24950__$1;(statearr_24974_25036[(2)] = inst_24933);
(statearr_24974_25036[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24951 === (8)))
{var inst_24919 = cljs.core.async.close_BANG_.call(null,to);var state_24950__$1 = state_24950;var statearr_24975_25037 = state_24950__$1;(statearr_24975_25037[(2)] = inst_24919);
(statearr_24975_25037[(1)] = (10));
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
var state_machine__11462__auto____0 = (function (){var statearr_24979 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24979[(0)] = state_machine__11462__auto__);
(statearr_24979[(1)] = (1));
return statearr_24979;
});
var state_machine__11462__auto____1 = (function (state_24950){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24950);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24980){if((e24980 instanceof Object))
{var ex__11465__auto__ = e24980;var statearr_24981_25038 = state_24950;(statearr_24981_25038[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24950);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24980;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25039 = state_24950;
state_24950 = G__25039;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24950){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,jobs,results,process,async))
})();var state__11519__auto__ = (function (){var statearr_24982 = f__11518__auto__.call(null);(statearr_24982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_24982;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11517__auto___25140 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___25140,tc,fc){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___25140,tc,fc){
return (function (state_25115){var state_val_25116 = (state_25115[(1)]);if((state_val_25116 === (7)))
{var inst_25111 = (state_25115[(2)]);var state_25115__$1 = state_25115;var statearr_25117_25141 = state_25115__$1;(statearr_25117_25141[(2)] = inst_25111);
(statearr_25117_25141[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25116 === (1)))
{var state_25115__$1 = state_25115;var statearr_25118_25142 = state_25115__$1;(statearr_25118_25142[(2)] = null);
(statearr_25118_25142[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25116 === (4)))
{var inst_25092 = (state_25115[(7)]);var inst_25092__$1 = (state_25115[(2)]);var inst_25093 = (inst_25092__$1 == null);var state_25115__$1 = (function (){var statearr_25119 = state_25115;(statearr_25119[(7)] = inst_25092__$1);
return statearr_25119;
})();if(cljs.core.truth_(inst_25093))
{var statearr_25120_25143 = state_25115__$1;(statearr_25120_25143[(1)] = (5));
} else
{var statearr_25121_25144 = state_25115__$1;(statearr_25121_25144[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25116 === (13)))
{var state_25115__$1 = state_25115;var statearr_25122_25145 = state_25115__$1;(statearr_25122_25145[(2)] = null);
(statearr_25122_25145[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25116 === (6)))
{var inst_25092 = (state_25115[(7)]);var inst_25098 = p.call(null,inst_25092);var state_25115__$1 = state_25115;if(cljs.core.truth_(inst_25098))
{var statearr_25123_25146 = state_25115__$1;(statearr_25123_25146[(1)] = (9));
} else
{var statearr_25124_25147 = state_25115__$1;(statearr_25124_25147[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25116 === (3)))
{var inst_25113 = (state_25115[(2)]);var state_25115__$1 = state_25115;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25115__$1,inst_25113);
} else
{if((state_val_25116 === (12)))
{var state_25115__$1 = state_25115;var statearr_25125_25148 = state_25115__$1;(statearr_25125_25148[(2)] = null);
(statearr_25125_25148[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25116 === (2)))
{var state_25115__$1 = state_25115;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25115__$1,(4),ch);
} else
{if((state_val_25116 === (11)))
{var inst_25092 = (state_25115[(7)]);var inst_25102 = (state_25115[(2)]);var state_25115__$1 = state_25115;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25115__$1,(8),inst_25102,inst_25092);
} else
{if((state_val_25116 === (9)))
{var state_25115__$1 = state_25115;var statearr_25126_25149 = state_25115__$1;(statearr_25126_25149[(2)] = tc);
(statearr_25126_25149[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25116 === (5)))
{var inst_25095 = cljs.core.async.close_BANG_.call(null,tc);var inst_25096 = cljs.core.async.close_BANG_.call(null,fc);var state_25115__$1 = (function (){var statearr_25127 = state_25115;(statearr_25127[(8)] = inst_25095);
return statearr_25127;
})();var statearr_25128_25150 = state_25115__$1;(statearr_25128_25150[(2)] = inst_25096);
(statearr_25128_25150[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25116 === (14)))
{var inst_25109 = (state_25115[(2)]);var state_25115__$1 = state_25115;var statearr_25129_25151 = state_25115__$1;(statearr_25129_25151[(2)] = inst_25109);
(statearr_25129_25151[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25116 === (10)))
{var state_25115__$1 = state_25115;var statearr_25130_25152 = state_25115__$1;(statearr_25130_25152[(2)] = fc);
(statearr_25130_25152[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25116 === (8)))
{var inst_25104 = (state_25115[(2)]);var state_25115__$1 = state_25115;if(cljs.core.truth_(inst_25104))
{var statearr_25131_25153 = state_25115__$1;(statearr_25131_25153[(1)] = (12));
} else
{var statearr_25132_25154 = state_25115__$1;(statearr_25132_25154[(1)] = (13));
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
});})(c__11517__auto___25140,tc,fc))
;return ((function (switch__11461__auto__,c__11517__auto___25140,tc,fc){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_25136 = [null,null,null,null,null,null,null,null,null];(statearr_25136[(0)] = state_machine__11462__auto__);
(statearr_25136[(1)] = (1));
return statearr_25136;
});
var state_machine__11462__auto____1 = (function (state_25115){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_25115);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e25137){if((e25137 instanceof Object))
{var ex__11465__auto__ = e25137;var statearr_25138_25155 = state_25115;(statearr_25138_25155[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25115);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25137;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25156 = state_25115;
state_25115 = G__25156;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_25115){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_25115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___25140,tc,fc))
})();var state__11519__auto__ = (function (){var statearr_25139 = f__11518__auto__.call(null);(statearr_25139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___25140);
return statearr_25139;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___25140,tc,fc))
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
return (function (state_25203){var state_val_25204 = (state_25203[(1)]);if((state_val_25204 === (7)))
{var inst_25199 = (state_25203[(2)]);var state_25203__$1 = state_25203;var statearr_25205_25221 = state_25203__$1;(statearr_25205_25221[(2)] = inst_25199);
(statearr_25205_25221[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25204 === (6)))
{var inst_25192 = (state_25203[(7)]);var inst_25189 = (state_25203[(8)]);var inst_25196 = f.call(null,inst_25189,inst_25192);var inst_25189__$1 = inst_25196;var state_25203__$1 = (function (){var statearr_25206 = state_25203;(statearr_25206[(8)] = inst_25189__$1);
return statearr_25206;
})();var statearr_25207_25222 = state_25203__$1;(statearr_25207_25222[(2)] = null);
(statearr_25207_25222[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25204 === (5)))
{var inst_25189 = (state_25203[(8)]);var state_25203__$1 = state_25203;var statearr_25208_25223 = state_25203__$1;(statearr_25208_25223[(2)] = inst_25189);
(statearr_25208_25223[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25204 === (4)))
{var inst_25192 = (state_25203[(7)]);var inst_25192__$1 = (state_25203[(2)]);var inst_25193 = (inst_25192__$1 == null);var state_25203__$1 = (function (){var statearr_25209 = state_25203;(statearr_25209[(7)] = inst_25192__$1);
return statearr_25209;
})();if(cljs.core.truth_(inst_25193))
{var statearr_25210_25224 = state_25203__$1;(statearr_25210_25224[(1)] = (5));
} else
{var statearr_25211_25225 = state_25203__$1;(statearr_25211_25225[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25204 === (3)))
{var inst_25201 = (state_25203[(2)]);var state_25203__$1 = state_25203;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25203__$1,inst_25201);
} else
{if((state_val_25204 === (2)))
{var state_25203__$1 = state_25203;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25203__$1,(4),ch);
} else
{if((state_val_25204 === (1)))
{var inst_25189 = init;var state_25203__$1 = (function (){var statearr_25212 = state_25203;(statearr_25212[(8)] = inst_25189);
return statearr_25212;
})();var statearr_25213_25226 = state_25203__$1;(statearr_25213_25226[(2)] = null);
(statearr_25213_25226[(1)] = (2));
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
var state_machine__11462__auto____0 = (function (){var statearr_25217 = [null,null,null,null,null,null,null,null,null];(statearr_25217[(0)] = state_machine__11462__auto__);
(statearr_25217[(1)] = (1));
return statearr_25217;
});
var state_machine__11462__auto____1 = (function (state_25203){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_25203);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e25218){if((e25218 instanceof Object))
{var ex__11465__auto__ = e25218;var statearr_25219_25227 = state_25203;(statearr_25219_25227[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25203);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25218;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25228 = state_25203;
state_25203 = G__25228;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_25203){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_25203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_25220 = f__11518__auto__.call(null);(statearr_25220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_25220;
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
return (function (state_25302){var state_val_25303 = (state_25302[(1)]);if((state_val_25303 === (7)))
{var inst_25284 = (state_25302[(2)]);var state_25302__$1 = state_25302;var statearr_25304_25327 = state_25302__$1;(statearr_25304_25327[(2)] = inst_25284);
(statearr_25304_25327[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25303 === (1)))
{var inst_25278 = cljs.core.seq.call(null,coll);var inst_25279 = inst_25278;var state_25302__$1 = (function (){var statearr_25305 = state_25302;(statearr_25305[(7)] = inst_25279);
return statearr_25305;
})();var statearr_25306_25328 = state_25302__$1;(statearr_25306_25328[(2)] = null);
(statearr_25306_25328[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25303 === (4)))
{var inst_25279 = (state_25302[(7)]);var inst_25282 = cljs.core.first.call(null,inst_25279);var state_25302__$1 = state_25302;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25302__$1,(7),ch,inst_25282);
} else
{if((state_val_25303 === (13)))
{var inst_25296 = (state_25302[(2)]);var state_25302__$1 = state_25302;var statearr_25307_25329 = state_25302__$1;(statearr_25307_25329[(2)] = inst_25296);
(statearr_25307_25329[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25303 === (6)))
{var inst_25287 = (state_25302[(2)]);var state_25302__$1 = state_25302;if(cljs.core.truth_(inst_25287))
{var statearr_25308_25330 = state_25302__$1;(statearr_25308_25330[(1)] = (8));
} else
{var statearr_25309_25331 = state_25302__$1;(statearr_25309_25331[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25303 === (3)))
{var inst_25300 = (state_25302[(2)]);var state_25302__$1 = state_25302;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25302__$1,inst_25300);
} else
{if((state_val_25303 === (12)))
{var state_25302__$1 = state_25302;var statearr_25310_25332 = state_25302__$1;(statearr_25310_25332[(2)] = null);
(statearr_25310_25332[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25303 === (2)))
{var inst_25279 = (state_25302[(7)]);var state_25302__$1 = state_25302;if(cljs.core.truth_(inst_25279))
{var statearr_25311_25333 = state_25302__$1;(statearr_25311_25333[(1)] = (4));
} else
{var statearr_25312_25334 = state_25302__$1;(statearr_25312_25334[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25303 === (11)))
{var inst_25293 = cljs.core.async.close_BANG_.call(null,ch);var state_25302__$1 = state_25302;var statearr_25313_25335 = state_25302__$1;(statearr_25313_25335[(2)] = inst_25293);
(statearr_25313_25335[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25303 === (9)))
{var state_25302__$1 = state_25302;if(cljs.core.truth_(close_QMARK_))
{var statearr_25314_25336 = state_25302__$1;(statearr_25314_25336[(1)] = (11));
} else
{var statearr_25315_25337 = state_25302__$1;(statearr_25315_25337[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25303 === (5)))
{var inst_25279 = (state_25302[(7)]);var state_25302__$1 = state_25302;var statearr_25316_25338 = state_25302__$1;(statearr_25316_25338[(2)] = inst_25279);
(statearr_25316_25338[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25303 === (10)))
{var inst_25298 = (state_25302[(2)]);var state_25302__$1 = state_25302;var statearr_25317_25339 = state_25302__$1;(statearr_25317_25339[(2)] = inst_25298);
(statearr_25317_25339[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25303 === (8)))
{var inst_25279 = (state_25302[(7)]);var inst_25289 = cljs.core.next.call(null,inst_25279);var inst_25279__$1 = inst_25289;var state_25302__$1 = (function (){var statearr_25318 = state_25302;(statearr_25318[(7)] = inst_25279__$1);
return statearr_25318;
})();var statearr_25319_25340 = state_25302__$1;(statearr_25319_25340[(2)] = null);
(statearr_25319_25340[(1)] = (2));
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
var state_machine__11462__auto____0 = (function (){var statearr_25323 = [null,null,null,null,null,null,null,null];(statearr_25323[(0)] = state_machine__11462__auto__);
(statearr_25323[(1)] = (1));
return statearr_25323;
});
var state_machine__11462__auto____1 = (function (state_25302){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_25302);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e25324){if((e25324 instanceof Object))
{var ex__11465__auto__ = e25324;var statearr_25325_25341 = state_25302;(statearr_25325_25341[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25302);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25324;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25342 = state_25302;
state_25302 = G__25342;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_25302){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_25302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_25326 = f__11518__auto__.call(null);(statearr_25326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_25326;
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
cljs.core.async.Mux = (function (){var obj25344 = {};return obj25344;
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
cljs.core.async.Mult = (function (){var obj25346 = {};return obj25346;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25568 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25568 = (function (cs,ch,mult,meta25569){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25569 = meta25569;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25568.cljs$lang$type = true;
cljs.core.async.t25568.cljs$lang$ctorStr = "cljs.core.async/t25568";
cljs.core.async.t25568.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25568");
});})(cs))
;
cljs.core.async.t25568.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25568.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25568.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25568.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25568.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25568.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25568.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25570){var self__ = this;
var _25570__$1 = this;return self__.meta25569;
});})(cs))
;
cljs.core.async.t25568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25570,meta25569__$1){var self__ = this;
var _25570__$1 = this;return (new cljs.core.async.t25568(self__.cs,self__.ch,self__.mult,meta25569__$1));
});})(cs))
;
cljs.core.async.__GT_t25568 = ((function (cs){
return (function __GT_t25568(cs__$1,ch__$1,mult__$1,meta25569){return (new cljs.core.async.t25568(cs__$1,ch__$1,mult__$1,meta25569));
});})(cs))
;
}
return (new cljs.core.async.t25568(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11517__auto___25789 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___25789,cs,m,dchan,dctr,done){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___25789,cs,m,dchan,dctr,done){
return (function (state_25701){var state_val_25702 = (state_25701[(1)]);if((state_val_25702 === (7)))
{var inst_25697 = (state_25701[(2)]);var state_25701__$1 = state_25701;var statearr_25703_25790 = state_25701__$1;(statearr_25703_25790[(2)] = inst_25697);
(statearr_25703_25790[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (20)))
{var inst_25602 = (state_25701[(7)]);var inst_25612 = cljs.core.first.call(null,inst_25602);var inst_25613 = cljs.core.nth.call(null,inst_25612,(0),null);var inst_25614 = cljs.core.nth.call(null,inst_25612,(1),null);var state_25701__$1 = (function (){var statearr_25704 = state_25701;(statearr_25704[(8)] = inst_25613);
return statearr_25704;
})();if(cljs.core.truth_(inst_25614))
{var statearr_25705_25791 = state_25701__$1;(statearr_25705_25791[(1)] = (22));
} else
{var statearr_25706_25792 = state_25701__$1;(statearr_25706_25792[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (27)))
{var inst_25649 = (state_25701[(9)]);var inst_25644 = (state_25701[(10)]);var inst_25573 = (state_25701[(11)]);var inst_25642 = (state_25701[(12)]);var inst_25649__$1 = cljs.core._nth.call(null,inst_25642,inst_25644);var inst_25650 = cljs.core.async.put_BANG_.call(null,inst_25649__$1,inst_25573,done);var state_25701__$1 = (function (){var statearr_25707 = state_25701;(statearr_25707[(9)] = inst_25649__$1);
return statearr_25707;
})();if(cljs.core.truth_(inst_25650))
{var statearr_25708_25793 = state_25701__$1;(statearr_25708_25793[(1)] = (30));
} else
{var statearr_25709_25794 = state_25701__$1;(statearr_25709_25794[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (1)))
{var state_25701__$1 = state_25701;var statearr_25710_25795 = state_25701__$1;(statearr_25710_25795[(2)] = null);
(statearr_25710_25795[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (24)))
{var inst_25602 = (state_25701[(7)]);var inst_25619 = (state_25701[(2)]);var inst_25620 = cljs.core.next.call(null,inst_25602);var inst_25582 = inst_25620;var inst_25583 = null;var inst_25584 = (0);var inst_25585 = (0);var state_25701__$1 = (function (){var statearr_25711 = state_25701;(statearr_25711[(13)] = inst_25584);
(statearr_25711[(14)] = inst_25619);
(statearr_25711[(15)] = inst_25585);
(statearr_25711[(16)] = inst_25583);
(statearr_25711[(17)] = inst_25582);
return statearr_25711;
})();var statearr_25712_25796 = state_25701__$1;(statearr_25712_25796[(2)] = null);
(statearr_25712_25796[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (39)))
{var state_25701__$1 = state_25701;var statearr_25716_25797 = state_25701__$1;(statearr_25716_25797[(2)] = null);
(statearr_25716_25797[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (4)))
{var inst_25573 = (state_25701[(11)]);var inst_25573__$1 = (state_25701[(2)]);var inst_25574 = (inst_25573__$1 == null);var state_25701__$1 = (function (){var statearr_25717 = state_25701;(statearr_25717[(11)] = inst_25573__$1);
return statearr_25717;
})();if(cljs.core.truth_(inst_25574))
{var statearr_25718_25798 = state_25701__$1;(statearr_25718_25798[(1)] = (5));
} else
{var statearr_25719_25799 = state_25701__$1;(statearr_25719_25799[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (15)))
{var inst_25584 = (state_25701[(13)]);var inst_25585 = (state_25701[(15)]);var inst_25583 = (state_25701[(16)]);var inst_25582 = (state_25701[(17)]);var inst_25598 = (state_25701[(2)]);var inst_25599 = (inst_25585 + (1));var tmp25713 = inst_25584;var tmp25714 = inst_25583;var tmp25715 = inst_25582;var inst_25582__$1 = tmp25715;var inst_25583__$1 = tmp25714;var inst_25584__$1 = tmp25713;var inst_25585__$1 = inst_25599;var state_25701__$1 = (function (){var statearr_25720 = state_25701;(statearr_25720[(18)] = inst_25598);
(statearr_25720[(13)] = inst_25584__$1);
(statearr_25720[(15)] = inst_25585__$1);
(statearr_25720[(16)] = inst_25583__$1);
(statearr_25720[(17)] = inst_25582__$1);
return statearr_25720;
})();var statearr_25721_25800 = state_25701__$1;(statearr_25721_25800[(2)] = null);
(statearr_25721_25800[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (21)))
{var inst_25623 = (state_25701[(2)]);var state_25701__$1 = state_25701;var statearr_25725_25801 = state_25701__$1;(statearr_25725_25801[(2)] = inst_25623);
(statearr_25725_25801[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (31)))
{var inst_25649 = (state_25701[(9)]);var inst_25653 = done.call(null,null);var inst_25654 = cljs.core.async.untap_STAR_.call(null,m,inst_25649);var state_25701__$1 = (function (){var statearr_25726 = state_25701;(statearr_25726[(19)] = inst_25653);
return statearr_25726;
})();var statearr_25727_25802 = state_25701__$1;(statearr_25727_25802[(2)] = inst_25654);
(statearr_25727_25802[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (32)))
{var inst_25644 = (state_25701[(10)]);var inst_25643 = (state_25701[(20)]);var inst_25642 = (state_25701[(12)]);var inst_25641 = (state_25701[(21)]);var inst_25656 = (state_25701[(2)]);var inst_25657 = (inst_25644 + (1));var tmp25722 = inst_25643;var tmp25723 = inst_25642;var tmp25724 = inst_25641;var inst_25641__$1 = tmp25724;var inst_25642__$1 = tmp25723;var inst_25643__$1 = tmp25722;var inst_25644__$1 = inst_25657;var state_25701__$1 = (function (){var statearr_25728 = state_25701;(statearr_25728[(10)] = inst_25644__$1);
(statearr_25728[(20)] = inst_25643__$1);
(statearr_25728[(12)] = inst_25642__$1);
(statearr_25728[(21)] = inst_25641__$1);
(statearr_25728[(22)] = inst_25656);
return statearr_25728;
})();var statearr_25729_25803 = state_25701__$1;(statearr_25729_25803[(2)] = null);
(statearr_25729_25803[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (40)))
{var inst_25669 = (state_25701[(23)]);var inst_25673 = done.call(null,null);var inst_25674 = cljs.core.async.untap_STAR_.call(null,m,inst_25669);var state_25701__$1 = (function (){var statearr_25730 = state_25701;(statearr_25730[(24)] = inst_25673);
return statearr_25730;
})();var statearr_25731_25804 = state_25701__$1;(statearr_25731_25804[(2)] = inst_25674);
(statearr_25731_25804[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (33)))
{var inst_25660 = (state_25701[(25)]);var inst_25662 = cljs.core.chunked_seq_QMARK_.call(null,inst_25660);var state_25701__$1 = state_25701;if(inst_25662)
{var statearr_25732_25805 = state_25701__$1;(statearr_25732_25805[(1)] = (36));
} else
{var statearr_25733_25806 = state_25701__$1;(statearr_25733_25806[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (13)))
{var inst_25592 = (state_25701[(26)]);var inst_25595 = cljs.core.async.close_BANG_.call(null,inst_25592);var state_25701__$1 = state_25701;var statearr_25734_25807 = state_25701__$1;(statearr_25734_25807[(2)] = inst_25595);
(statearr_25734_25807[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (22)))
{var inst_25613 = (state_25701[(8)]);var inst_25616 = cljs.core.async.close_BANG_.call(null,inst_25613);var state_25701__$1 = state_25701;var statearr_25735_25808 = state_25701__$1;(statearr_25735_25808[(2)] = inst_25616);
(statearr_25735_25808[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (36)))
{var inst_25660 = (state_25701[(25)]);var inst_25664 = cljs.core.chunk_first.call(null,inst_25660);var inst_25665 = cljs.core.chunk_rest.call(null,inst_25660);var inst_25666 = cljs.core.count.call(null,inst_25664);var inst_25641 = inst_25665;var inst_25642 = inst_25664;var inst_25643 = inst_25666;var inst_25644 = (0);var state_25701__$1 = (function (){var statearr_25736 = state_25701;(statearr_25736[(10)] = inst_25644);
(statearr_25736[(20)] = inst_25643);
(statearr_25736[(12)] = inst_25642);
(statearr_25736[(21)] = inst_25641);
return statearr_25736;
})();var statearr_25737_25809 = state_25701__$1;(statearr_25737_25809[(2)] = null);
(statearr_25737_25809[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (41)))
{var inst_25660 = (state_25701[(25)]);var inst_25676 = (state_25701[(2)]);var inst_25677 = cljs.core.next.call(null,inst_25660);var inst_25641 = inst_25677;var inst_25642 = null;var inst_25643 = (0);var inst_25644 = (0);var state_25701__$1 = (function (){var statearr_25738 = state_25701;(statearr_25738[(10)] = inst_25644);
(statearr_25738[(20)] = inst_25643);
(statearr_25738[(12)] = inst_25642);
(statearr_25738[(27)] = inst_25676);
(statearr_25738[(21)] = inst_25641);
return statearr_25738;
})();var statearr_25739_25810 = state_25701__$1;(statearr_25739_25810[(2)] = null);
(statearr_25739_25810[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (43)))
{var state_25701__$1 = state_25701;var statearr_25740_25811 = state_25701__$1;(statearr_25740_25811[(2)] = null);
(statearr_25740_25811[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (29)))
{var inst_25685 = (state_25701[(2)]);var state_25701__$1 = state_25701;var statearr_25741_25812 = state_25701__$1;(statearr_25741_25812[(2)] = inst_25685);
(statearr_25741_25812[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (44)))
{var inst_25694 = (state_25701[(2)]);var state_25701__$1 = (function (){var statearr_25742 = state_25701;(statearr_25742[(28)] = inst_25694);
return statearr_25742;
})();var statearr_25743_25813 = state_25701__$1;(statearr_25743_25813[(2)] = null);
(statearr_25743_25813[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (6)))
{var inst_25633 = (state_25701[(29)]);var inst_25632 = cljs.core.deref.call(null,cs);var inst_25633__$1 = cljs.core.keys.call(null,inst_25632);var inst_25634 = cljs.core.count.call(null,inst_25633__$1);var inst_25635 = cljs.core.reset_BANG_.call(null,dctr,inst_25634);var inst_25640 = cljs.core.seq.call(null,inst_25633__$1);var inst_25641 = inst_25640;var inst_25642 = null;var inst_25643 = (0);var inst_25644 = (0);var state_25701__$1 = (function (){var statearr_25744 = state_25701;(statearr_25744[(10)] = inst_25644);
(statearr_25744[(20)] = inst_25643);
(statearr_25744[(29)] = inst_25633__$1);
(statearr_25744[(12)] = inst_25642);
(statearr_25744[(21)] = inst_25641);
(statearr_25744[(30)] = inst_25635);
return statearr_25744;
})();var statearr_25745_25814 = state_25701__$1;(statearr_25745_25814[(2)] = null);
(statearr_25745_25814[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (28)))
{var inst_25660 = (state_25701[(25)]);var inst_25641 = (state_25701[(21)]);var inst_25660__$1 = cljs.core.seq.call(null,inst_25641);var state_25701__$1 = (function (){var statearr_25746 = state_25701;(statearr_25746[(25)] = inst_25660__$1);
return statearr_25746;
})();if(inst_25660__$1)
{var statearr_25747_25815 = state_25701__$1;(statearr_25747_25815[(1)] = (33));
} else
{var statearr_25748_25816 = state_25701__$1;(statearr_25748_25816[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (25)))
{var inst_25644 = (state_25701[(10)]);var inst_25643 = (state_25701[(20)]);var inst_25646 = (inst_25644 < inst_25643);var inst_25647 = inst_25646;var state_25701__$1 = state_25701;if(cljs.core.truth_(inst_25647))
{var statearr_25749_25817 = state_25701__$1;(statearr_25749_25817[(1)] = (27));
} else
{var statearr_25750_25818 = state_25701__$1;(statearr_25750_25818[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (34)))
{var state_25701__$1 = state_25701;var statearr_25751_25819 = state_25701__$1;(statearr_25751_25819[(2)] = null);
(statearr_25751_25819[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (17)))
{var state_25701__$1 = state_25701;var statearr_25752_25820 = state_25701__$1;(statearr_25752_25820[(2)] = null);
(statearr_25752_25820[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (3)))
{var inst_25699 = (state_25701[(2)]);var state_25701__$1 = state_25701;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25701__$1,inst_25699);
} else
{if((state_val_25702 === (12)))
{var inst_25628 = (state_25701[(2)]);var state_25701__$1 = state_25701;var statearr_25753_25821 = state_25701__$1;(statearr_25753_25821[(2)] = inst_25628);
(statearr_25753_25821[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (2)))
{var state_25701__$1 = state_25701;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25701__$1,(4),ch);
} else
{if((state_val_25702 === (23)))
{var state_25701__$1 = state_25701;var statearr_25754_25822 = state_25701__$1;(statearr_25754_25822[(2)] = null);
(statearr_25754_25822[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (35)))
{var inst_25683 = (state_25701[(2)]);var state_25701__$1 = state_25701;var statearr_25755_25823 = state_25701__$1;(statearr_25755_25823[(2)] = inst_25683);
(statearr_25755_25823[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (19)))
{var inst_25602 = (state_25701[(7)]);var inst_25606 = cljs.core.chunk_first.call(null,inst_25602);var inst_25607 = cljs.core.chunk_rest.call(null,inst_25602);var inst_25608 = cljs.core.count.call(null,inst_25606);var inst_25582 = inst_25607;var inst_25583 = inst_25606;var inst_25584 = inst_25608;var inst_25585 = (0);var state_25701__$1 = (function (){var statearr_25756 = state_25701;(statearr_25756[(13)] = inst_25584);
(statearr_25756[(15)] = inst_25585);
(statearr_25756[(16)] = inst_25583);
(statearr_25756[(17)] = inst_25582);
return statearr_25756;
})();var statearr_25757_25824 = state_25701__$1;(statearr_25757_25824[(2)] = null);
(statearr_25757_25824[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (11)))
{var inst_25602 = (state_25701[(7)]);var inst_25582 = (state_25701[(17)]);var inst_25602__$1 = cljs.core.seq.call(null,inst_25582);var state_25701__$1 = (function (){var statearr_25758 = state_25701;(statearr_25758[(7)] = inst_25602__$1);
return statearr_25758;
})();if(inst_25602__$1)
{var statearr_25759_25825 = state_25701__$1;(statearr_25759_25825[(1)] = (16));
} else
{var statearr_25760_25826 = state_25701__$1;(statearr_25760_25826[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (9)))
{var inst_25630 = (state_25701[(2)]);var state_25701__$1 = state_25701;var statearr_25761_25827 = state_25701__$1;(statearr_25761_25827[(2)] = inst_25630);
(statearr_25761_25827[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (5)))
{var inst_25580 = cljs.core.deref.call(null,cs);var inst_25581 = cljs.core.seq.call(null,inst_25580);var inst_25582 = inst_25581;var inst_25583 = null;var inst_25584 = (0);var inst_25585 = (0);var state_25701__$1 = (function (){var statearr_25762 = state_25701;(statearr_25762[(13)] = inst_25584);
(statearr_25762[(15)] = inst_25585);
(statearr_25762[(16)] = inst_25583);
(statearr_25762[(17)] = inst_25582);
return statearr_25762;
})();var statearr_25763_25828 = state_25701__$1;(statearr_25763_25828[(2)] = null);
(statearr_25763_25828[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (14)))
{var state_25701__$1 = state_25701;var statearr_25764_25829 = state_25701__$1;(statearr_25764_25829[(2)] = null);
(statearr_25764_25829[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (45)))
{var inst_25691 = (state_25701[(2)]);var state_25701__$1 = state_25701;var statearr_25765_25830 = state_25701__$1;(statearr_25765_25830[(2)] = inst_25691);
(statearr_25765_25830[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (26)))
{var inst_25633 = (state_25701[(29)]);var inst_25687 = (state_25701[(2)]);var inst_25688 = cljs.core.seq.call(null,inst_25633);var state_25701__$1 = (function (){var statearr_25766 = state_25701;(statearr_25766[(31)] = inst_25687);
return statearr_25766;
})();if(inst_25688)
{var statearr_25767_25831 = state_25701__$1;(statearr_25767_25831[(1)] = (42));
} else
{var statearr_25768_25832 = state_25701__$1;(statearr_25768_25832[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (16)))
{var inst_25602 = (state_25701[(7)]);var inst_25604 = cljs.core.chunked_seq_QMARK_.call(null,inst_25602);var state_25701__$1 = state_25701;if(inst_25604)
{var statearr_25769_25833 = state_25701__$1;(statearr_25769_25833[(1)] = (19));
} else
{var statearr_25770_25834 = state_25701__$1;(statearr_25770_25834[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (38)))
{var inst_25680 = (state_25701[(2)]);var state_25701__$1 = state_25701;var statearr_25771_25835 = state_25701__$1;(statearr_25771_25835[(2)] = inst_25680);
(statearr_25771_25835[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (30)))
{var state_25701__$1 = state_25701;var statearr_25772_25836 = state_25701__$1;(statearr_25772_25836[(2)] = null);
(statearr_25772_25836[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (10)))
{var inst_25585 = (state_25701[(15)]);var inst_25583 = (state_25701[(16)]);var inst_25591 = cljs.core._nth.call(null,inst_25583,inst_25585);var inst_25592 = cljs.core.nth.call(null,inst_25591,(0),null);var inst_25593 = cljs.core.nth.call(null,inst_25591,(1),null);var state_25701__$1 = (function (){var statearr_25773 = state_25701;(statearr_25773[(26)] = inst_25592);
return statearr_25773;
})();if(cljs.core.truth_(inst_25593))
{var statearr_25774_25837 = state_25701__$1;(statearr_25774_25837[(1)] = (13));
} else
{var statearr_25775_25838 = state_25701__$1;(statearr_25775_25838[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (18)))
{var inst_25626 = (state_25701[(2)]);var state_25701__$1 = state_25701;var statearr_25776_25839 = state_25701__$1;(statearr_25776_25839[(2)] = inst_25626);
(statearr_25776_25839[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (42)))
{var state_25701__$1 = state_25701;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25701__$1,(45),dchan);
} else
{if((state_val_25702 === (37)))
{var inst_25573 = (state_25701[(11)]);var inst_25660 = (state_25701[(25)]);var inst_25669 = (state_25701[(23)]);var inst_25669__$1 = cljs.core.first.call(null,inst_25660);var inst_25670 = cljs.core.async.put_BANG_.call(null,inst_25669__$1,inst_25573,done);var state_25701__$1 = (function (){var statearr_25777 = state_25701;(statearr_25777[(23)] = inst_25669__$1);
return statearr_25777;
})();if(cljs.core.truth_(inst_25670))
{var statearr_25778_25840 = state_25701__$1;(statearr_25778_25840[(1)] = (39));
} else
{var statearr_25779_25841 = state_25701__$1;(statearr_25779_25841[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25702 === (8)))
{var inst_25584 = (state_25701[(13)]);var inst_25585 = (state_25701[(15)]);var inst_25587 = (inst_25585 < inst_25584);var inst_25588 = inst_25587;var state_25701__$1 = state_25701;if(cljs.core.truth_(inst_25588))
{var statearr_25780_25842 = state_25701__$1;(statearr_25780_25842[(1)] = (10));
} else
{var statearr_25781_25843 = state_25701__$1;(statearr_25781_25843[(1)] = (11));
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
});})(c__11517__auto___25789,cs,m,dchan,dctr,done))
;return ((function (switch__11461__auto__,c__11517__auto___25789,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_25785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25785[(0)] = state_machine__11462__auto__);
(statearr_25785[(1)] = (1));
return statearr_25785;
});
var state_machine__11462__auto____1 = (function (state_25701){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_25701);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e25786){if((e25786 instanceof Object))
{var ex__11465__auto__ = e25786;var statearr_25787_25844 = state_25701;(statearr_25787_25844[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25701);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25786;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25845 = state_25701;
state_25701 = G__25845;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_25701){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_25701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___25789,cs,m,dchan,dctr,done))
})();var state__11519__auto__ = (function (){var statearr_25788 = f__11518__auto__.call(null);(statearr_25788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___25789);
return statearr_25788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___25789,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj25847 = {};return obj25847;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25848){var map__25853 = p__25848;var map__25853__$1 = ((cljs.core.seq_QMARK_.call(null,map__25853))?cljs.core.apply.call(null,cljs.core.hash_map,map__25853):map__25853);var opts = map__25853__$1;var statearr_25854_25857 = state;(statearr_25854_25857[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__25853,map__25853__$1,opts){
return (function (val){var statearr_25855_25858 = state;(statearr_25855_25858[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25853,map__25853__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_25856_25859 = state;(statearr_25856_25859[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25848 = null;if (arguments.length > 3) {
  p__25848 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25848);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25860){
var state = cljs.core.first(arglist__25860);
arglist__25860 = cljs.core.next(arglist__25860);
var cont_block = cljs.core.first(arglist__25860);
arglist__25860 = cljs.core.next(arglist__25860);
var ports = cljs.core.first(arglist__25860);
var p__25848 = cljs.core.rest(arglist__25860);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25848);
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
;var m = (function (){if(typeof cljs.core.async.t25980 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25980 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25981){
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
this.meta25981 = meta25981;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25980.cljs$lang$type = true;
cljs.core.async.t25980.cljs$lang$ctorStr = "cljs.core.async/t25980";
cljs.core.async.t25980.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25980");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25980.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25980.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25980.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25980.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25980.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25980.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25980.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25980.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25980.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25982){var self__ = this;
var _25982__$1 = this;return self__.meta25981;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25982,meta25981__$1){var self__ = this;
var _25982__$1 = this;return (new cljs.core.async.t25980(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25981__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25980 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25980(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25981){return (new cljs.core.async.t25980(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25981));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25980(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11517__auto___26099 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26099,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26099,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26052){var state_val_26053 = (state_26052[(1)]);if((state_val_26053 === (7)))
{var inst_25996 = (state_26052[(7)]);var inst_26001 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25996);var state_26052__$1 = state_26052;var statearr_26054_26100 = state_26052__$1;(statearr_26054_26100[(2)] = inst_26001);
(statearr_26054_26100[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26053 === (20)))
{var inst_26011 = (state_26052[(8)]);var state_26052__$1 = state_26052;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26052__$1,(23),out,inst_26011);
} else
{if((state_val_26053 === (1)))
{var inst_25986 = (state_26052[(9)]);var inst_25986__$1 = calc_state.call(null);var inst_25987 = cljs.core.seq_QMARK_.call(null,inst_25986__$1);var state_26052__$1 = (function (){var statearr_26055 = state_26052;(statearr_26055[(9)] = inst_25986__$1);
return statearr_26055;
})();if(inst_25987)
{var statearr_26056_26101 = state_26052__$1;(statearr_26056_26101[(1)] = (2));
} else
{var statearr_26057_26102 = state_26052__$1;(statearr_26057_26102[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26053 === (24)))
{var inst_26004 = (state_26052[(10)]);var inst_25996 = inst_26004;var state_26052__$1 = (function (){var statearr_26058 = state_26052;(statearr_26058[(7)] = inst_25996);
return statearr_26058;
})();var statearr_26059_26103 = state_26052__$1;(statearr_26059_26103[(2)] = null);
(statearr_26059_26103[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26053 === (4)))
{var inst_25986 = (state_26052[(9)]);var inst_25992 = (state_26052[(2)]);var inst_25993 = cljs.core.get.call(null,inst_25992,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25994 = cljs.core.get.call(null,inst_25992,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25995 = cljs.core.get.call(null,inst_25992,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_25996 = inst_25986;var state_26052__$1 = (function (){var statearr_26060 = state_26052;(statearr_26060[(11)] = inst_25995);
(statearr_26060[(12)] = inst_25993);
(statearr_26060[(13)] = inst_25994);
(statearr_26060[(7)] = inst_25996);
return statearr_26060;
})();var statearr_26061_26104 = state_26052__$1;(statearr_26061_26104[(2)] = null);
(statearr_26061_26104[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26053 === (15)))
{var state_26052__$1 = state_26052;var statearr_26062_26105 = state_26052__$1;(statearr_26062_26105[(2)] = null);
(statearr_26062_26105[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26053 === (21)))
{var inst_26004 = (state_26052[(10)]);var inst_25996 = inst_26004;var state_26052__$1 = (function (){var statearr_26063 = state_26052;(statearr_26063[(7)] = inst_25996);
return statearr_26063;
})();var statearr_26064_26106 = state_26052__$1;(statearr_26064_26106[(2)] = null);
(statearr_26064_26106[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26053 === (13)))
{var inst_26048 = (state_26052[(2)]);var state_26052__$1 = state_26052;var statearr_26065_26107 = state_26052__$1;(statearr_26065_26107[(2)] = inst_26048);
(statearr_26065_26107[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26053 === (22)))
{var inst_26046 = (state_26052[(2)]);var state_26052__$1 = state_26052;var statearr_26066_26108 = state_26052__$1;(statearr_26066_26108[(2)] = inst_26046);
(statearr_26066_26108[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26053 === (6)))
{var inst_26050 = (state_26052[(2)]);var state_26052__$1 = state_26052;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26052__$1,inst_26050);
} else
{if((state_val_26053 === (25)))
{var state_26052__$1 = state_26052;var statearr_26067_26109 = state_26052__$1;(statearr_26067_26109[(2)] = null);
(statearr_26067_26109[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26053 === (17)))
{var inst_26026 = (state_26052[(14)]);var state_26052__$1 = state_26052;var statearr_26068_26110 = state_26052__$1;(statearr_26068_26110[(2)] = inst_26026);
(statearr_26068_26110[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26053 === (3)))
{var inst_25986 = (state_26052[(9)]);var state_26052__$1 = state_26052;var statearr_26069_26111 = state_26052__$1;(statearr_26069_26111[(2)] = inst_25986);
(statearr_26069_26111[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26053 === (12)))
{var inst_26026 = (state_26052[(14)]);var inst_26012 = (state_26052[(15)]);var inst_26007 = (state_26052[(16)]);var inst_26026__$1 = inst_26007.call(null,inst_26012);var state_26052__$1 = (function (){var statearr_26070 = state_26052;(statearr_26070[(14)] = inst_26026__$1);
return statearr_26070;
})();if(cljs.core.truth_(inst_26026__$1))
{var statearr_26071_26112 = state_26052__$1;(statearr_26071_26112[(1)] = (17));
} else
{var statearr_26072_26113 = state_26052__$1;(statearr_26072_26113[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26053 === (2)))
{var inst_25986 = (state_26052[(9)]);var inst_25989 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25986);var state_26052__$1 = state_26052;var statearr_26073_26114 = state_26052__$1;(statearr_26073_26114[(2)] = inst_25989);
(statearr_26073_26114[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26053 === (23)))
{var inst_26037 = (state_26052[(2)]);var state_26052__$1 = state_26052;if(cljs.core.truth_(inst_26037))
{var statearr_26074_26115 = state_26052__$1;(statearr_26074_26115[(1)] = (24));
} else
{var statearr_26075_26116 = state_26052__$1;(statearr_26075_26116[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26053 === (19)))
{var inst_26034 = (state_26052[(2)]);var state_26052__$1 = state_26052;if(cljs.core.truth_(inst_26034))
{var statearr_26076_26117 = state_26052__$1;(statearr_26076_26117[(1)] = (20));
} else
{var statearr_26077_26118 = state_26052__$1;(statearr_26077_26118[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26053 === (11)))
{var inst_26011 = (state_26052[(8)]);var inst_26017 = (inst_26011 == null);var state_26052__$1 = state_26052;if(cljs.core.truth_(inst_26017))
{var statearr_26078_26119 = state_26052__$1;(statearr_26078_26119[(1)] = (14));
} else
{var statearr_26079_26120 = state_26052__$1;(statearr_26079_26120[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26053 === (9)))
{var inst_26004 = (state_26052[(10)]);var inst_26004__$1 = (state_26052[(2)]);var inst_26005 = cljs.core.get.call(null,inst_26004__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_26006 = cljs.core.get.call(null,inst_26004__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_26007 = cljs.core.get.call(null,inst_26004__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_26052__$1 = (function (){var statearr_26080 = state_26052;(statearr_26080[(17)] = inst_26006);
(statearr_26080[(10)] = inst_26004__$1);
(statearr_26080[(16)] = inst_26007);
return statearr_26080;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_26052__$1,(10),inst_26005);
} else
{if((state_val_26053 === (5)))
{var inst_25996 = (state_26052[(7)]);var inst_25999 = cljs.core.seq_QMARK_.call(null,inst_25996);var state_26052__$1 = state_26052;if(inst_25999)
{var statearr_26081_26121 = state_26052__$1;(statearr_26081_26121[(1)] = (7));
} else
{var statearr_26082_26122 = state_26052__$1;(statearr_26082_26122[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26053 === (14)))
{var inst_26012 = (state_26052[(15)]);var inst_26019 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26012);var state_26052__$1 = state_26052;var statearr_26083_26123 = state_26052__$1;(statearr_26083_26123[(2)] = inst_26019);
(statearr_26083_26123[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26053 === (26)))
{var inst_26042 = (state_26052[(2)]);var state_26052__$1 = state_26052;var statearr_26084_26124 = state_26052__$1;(statearr_26084_26124[(2)] = inst_26042);
(statearr_26084_26124[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26053 === (16)))
{var inst_26022 = (state_26052[(2)]);var inst_26023 = calc_state.call(null);var inst_25996 = inst_26023;var state_26052__$1 = (function (){var statearr_26085 = state_26052;(statearr_26085[(18)] = inst_26022);
(statearr_26085[(7)] = inst_25996);
return statearr_26085;
})();var statearr_26086_26125 = state_26052__$1;(statearr_26086_26125[(2)] = null);
(statearr_26086_26125[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26053 === (10)))
{var inst_26012 = (state_26052[(15)]);var inst_26011 = (state_26052[(8)]);var inst_26010 = (state_26052[(2)]);var inst_26011__$1 = cljs.core.nth.call(null,inst_26010,(0),null);var inst_26012__$1 = cljs.core.nth.call(null,inst_26010,(1),null);var inst_26013 = (inst_26011__$1 == null);var inst_26014 = cljs.core._EQ_.call(null,inst_26012__$1,change);var inst_26015 = (inst_26013) || (inst_26014);var state_26052__$1 = (function (){var statearr_26087 = state_26052;(statearr_26087[(15)] = inst_26012__$1);
(statearr_26087[(8)] = inst_26011__$1);
return statearr_26087;
})();if(cljs.core.truth_(inst_26015))
{var statearr_26088_26126 = state_26052__$1;(statearr_26088_26126[(1)] = (11));
} else
{var statearr_26089_26127 = state_26052__$1;(statearr_26089_26127[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26053 === (18)))
{var inst_26006 = (state_26052[(17)]);var inst_26012 = (state_26052[(15)]);var inst_26007 = (state_26052[(16)]);var inst_26029 = cljs.core.empty_QMARK_.call(null,inst_26007);var inst_26030 = inst_26006.call(null,inst_26012);var inst_26031 = cljs.core.not.call(null,inst_26030);var inst_26032 = (inst_26029) && (inst_26031);var state_26052__$1 = state_26052;var statearr_26090_26128 = state_26052__$1;(statearr_26090_26128[(2)] = inst_26032);
(statearr_26090_26128[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26053 === (8)))
{var inst_25996 = (state_26052[(7)]);var state_26052__$1 = state_26052;var statearr_26091_26129 = state_26052__$1;(statearr_26091_26129[(2)] = inst_25996);
(statearr_26091_26129[(1)] = (9));
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
});})(c__11517__auto___26099,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__11461__auto__,c__11517__auto___26099,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26095[(0)] = state_machine__11462__auto__);
(statearr_26095[(1)] = (1));
return statearr_26095;
});
var state_machine__11462__auto____1 = (function (state_26052){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26052);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26096){if((e26096 instanceof Object))
{var ex__11465__auto__ = e26096;var statearr_26097_26130 = state_26052;(statearr_26097_26130[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26052);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26096;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26131 = state_26052;
state_26052 = G__26131;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26052){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26099,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11519__auto__ = (function (){var statearr_26098 = f__11518__auto__.call(null);(statearr_26098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26099);
return statearr_26098;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26099,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj26133 = {};return obj26133;
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
return (function (p1__26134_SHARP_){if(cljs.core.truth_(p1__26134_SHARP_.call(null,topic)))
{return p1__26134_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__26134_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26257 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26257 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26258){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26258 = meta26258;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26257.cljs$lang$type = true;
cljs.core.async.t26257.cljs$lang$ctorStr = "cljs.core.async/t26257";
cljs.core.async.t26257.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26257");
});})(mults,ensure_mult))
;
cljs.core.async.t26257.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26257.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26257.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26257.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26257.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26257.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26257.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26257.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26259){var self__ = this;
var _26259__$1 = this;return self__.meta26258;
});})(mults,ensure_mult))
;
cljs.core.async.t26257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26259,meta26258__$1){var self__ = this;
var _26259__$1 = this;return (new cljs.core.async.t26257(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26258__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26257 = ((function (mults,ensure_mult){
return (function __GT_t26257(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26258){return (new cljs.core.async.t26257(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26258));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26257(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11517__auto___26379 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26379,mults,ensure_mult,p){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26379,mults,ensure_mult,p){
return (function (state_26331){var state_val_26332 = (state_26331[(1)]);if((state_val_26332 === (7)))
{var inst_26327 = (state_26331[(2)]);var state_26331__$1 = state_26331;var statearr_26333_26380 = state_26331__$1;(statearr_26333_26380[(2)] = inst_26327);
(statearr_26333_26380[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26332 === (20)))
{var state_26331__$1 = state_26331;var statearr_26334_26381 = state_26331__$1;(statearr_26334_26381[(2)] = null);
(statearr_26334_26381[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26332 === (1)))
{var state_26331__$1 = state_26331;var statearr_26335_26382 = state_26331__$1;(statearr_26335_26382[(2)] = null);
(statearr_26335_26382[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26332 === (24)))
{var inst_26310 = (state_26331[(7)]);var inst_26319 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26310);var state_26331__$1 = state_26331;var statearr_26336_26383 = state_26331__$1;(statearr_26336_26383[(2)] = inst_26319);
(statearr_26336_26383[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26332 === (4)))
{var inst_26262 = (state_26331[(8)]);var inst_26262__$1 = (state_26331[(2)]);var inst_26263 = (inst_26262__$1 == null);var state_26331__$1 = (function (){var statearr_26337 = state_26331;(statearr_26337[(8)] = inst_26262__$1);
return statearr_26337;
})();if(cljs.core.truth_(inst_26263))
{var statearr_26338_26384 = state_26331__$1;(statearr_26338_26384[(1)] = (5));
} else
{var statearr_26339_26385 = state_26331__$1;(statearr_26339_26385[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26332 === (15)))
{var inst_26304 = (state_26331[(2)]);var state_26331__$1 = state_26331;var statearr_26340_26386 = state_26331__$1;(statearr_26340_26386[(2)] = inst_26304);
(statearr_26340_26386[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26332 === (21)))
{var inst_26324 = (state_26331[(2)]);var state_26331__$1 = (function (){var statearr_26341 = state_26331;(statearr_26341[(9)] = inst_26324);
return statearr_26341;
})();var statearr_26342_26387 = state_26331__$1;(statearr_26342_26387[(2)] = null);
(statearr_26342_26387[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26332 === (13)))
{var inst_26286 = (state_26331[(10)]);var inst_26288 = cljs.core.chunked_seq_QMARK_.call(null,inst_26286);var state_26331__$1 = state_26331;if(inst_26288)
{var statearr_26343_26388 = state_26331__$1;(statearr_26343_26388[(1)] = (16));
} else
{var statearr_26344_26389 = state_26331__$1;(statearr_26344_26389[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26332 === (22)))
{var inst_26316 = (state_26331[(2)]);var state_26331__$1 = state_26331;if(cljs.core.truth_(inst_26316))
{var statearr_26345_26390 = state_26331__$1;(statearr_26345_26390[(1)] = (23));
} else
{var statearr_26346_26391 = state_26331__$1;(statearr_26346_26391[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26332 === (6)))
{var inst_26310 = (state_26331[(7)]);var inst_26262 = (state_26331[(8)]);var inst_26312 = (state_26331[(11)]);var inst_26310__$1 = topic_fn.call(null,inst_26262);var inst_26311 = cljs.core.deref.call(null,mults);var inst_26312__$1 = cljs.core.get.call(null,inst_26311,inst_26310__$1);var state_26331__$1 = (function (){var statearr_26347 = state_26331;(statearr_26347[(7)] = inst_26310__$1);
(statearr_26347[(11)] = inst_26312__$1);
return statearr_26347;
})();if(cljs.core.truth_(inst_26312__$1))
{var statearr_26348_26392 = state_26331__$1;(statearr_26348_26392[(1)] = (19));
} else
{var statearr_26349_26393 = state_26331__$1;(statearr_26349_26393[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26332 === (25)))
{var inst_26321 = (state_26331[(2)]);var state_26331__$1 = state_26331;var statearr_26350_26394 = state_26331__$1;(statearr_26350_26394[(2)] = inst_26321);
(statearr_26350_26394[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26332 === (17)))
{var inst_26286 = (state_26331[(10)]);var inst_26295 = cljs.core.first.call(null,inst_26286);var inst_26296 = cljs.core.async.muxch_STAR_.call(null,inst_26295);var inst_26297 = cljs.core.async.close_BANG_.call(null,inst_26296);var inst_26298 = cljs.core.next.call(null,inst_26286);var inst_26272 = inst_26298;var inst_26273 = null;var inst_26274 = (0);var inst_26275 = (0);var state_26331__$1 = (function (){var statearr_26351 = state_26331;(statearr_26351[(12)] = inst_26275);
(statearr_26351[(13)] = inst_26273);
(statearr_26351[(14)] = inst_26274);
(statearr_26351[(15)] = inst_26297);
(statearr_26351[(16)] = inst_26272);
return statearr_26351;
})();var statearr_26352_26395 = state_26331__$1;(statearr_26352_26395[(2)] = null);
(statearr_26352_26395[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26332 === (3)))
{var inst_26329 = (state_26331[(2)]);var state_26331__$1 = state_26331;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26331__$1,inst_26329);
} else
{if((state_val_26332 === (12)))
{var inst_26306 = (state_26331[(2)]);var state_26331__$1 = state_26331;var statearr_26353_26396 = state_26331__$1;(statearr_26353_26396[(2)] = inst_26306);
(statearr_26353_26396[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26332 === (2)))
{var state_26331__$1 = state_26331;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26331__$1,(4),ch);
} else
{if((state_val_26332 === (23)))
{var state_26331__$1 = state_26331;var statearr_26354_26397 = state_26331__$1;(statearr_26354_26397[(2)] = null);
(statearr_26354_26397[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26332 === (19)))
{var inst_26262 = (state_26331[(8)]);var inst_26312 = (state_26331[(11)]);var inst_26314 = cljs.core.async.muxch_STAR_.call(null,inst_26312);var state_26331__$1 = state_26331;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26331__$1,(22),inst_26314,inst_26262);
} else
{if((state_val_26332 === (11)))
{var inst_26286 = (state_26331[(10)]);var inst_26272 = (state_26331[(16)]);var inst_26286__$1 = cljs.core.seq.call(null,inst_26272);var state_26331__$1 = (function (){var statearr_26355 = state_26331;(statearr_26355[(10)] = inst_26286__$1);
return statearr_26355;
})();if(inst_26286__$1)
{var statearr_26356_26398 = state_26331__$1;(statearr_26356_26398[(1)] = (13));
} else
{var statearr_26357_26399 = state_26331__$1;(statearr_26357_26399[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26332 === (9)))
{var inst_26308 = (state_26331[(2)]);var state_26331__$1 = state_26331;var statearr_26358_26400 = state_26331__$1;(statearr_26358_26400[(2)] = inst_26308);
(statearr_26358_26400[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26332 === (5)))
{var inst_26269 = cljs.core.deref.call(null,mults);var inst_26270 = cljs.core.vals.call(null,inst_26269);var inst_26271 = cljs.core.seq.call(null,inst_26270);var inst_26272 = inst_26271;var inst_26273 = null;var inst_26274 = (0);var inst_26275 = (0);var state_26331__$1 = (function (){var statearr_26359 = state_26331;(statearr_26359[(12)] = inst_26275);
(statearr_26359[(13)] = inst_26273);
(statearr_26359[(14)] = inst_26274);
(statearr_26359[(16)] = inst_26272);
return statearr_26359;
})();var statearr_26360_26401 = state_26331__$1;(statearr_26360_26401[(2)] = null);
(statearr_26360_26401[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26332 === (14)))
{var state_26331__$1 = state_26331;var statearr_26364_26402 = state_26331__$1;(statearr_26364_26402[(2)] = null);
(statearr_26364_26402[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26332 === (16)))
{var inst_26286 = (state_26331[(10)]);var inst_26290 = cljs.core.chunk_first.call(null,inst_26286);var inst_26291 = cljs.core.chunk_rest.call(null,inst_26286);var inst_26292 = cljs.core.count.call(null,inst_26290);var inst_26272 = inst_26291;var inst_26273 = inst_26290;var inst_26274 = inst_26292;var inst_26275 = (0);var state_26331__$1 = (function (){var statearr_26365 = state_26331;(statearr_26365[(12)] = inst_26275);
(statearr_26365[(13)] = inst_26273);
(statearr_26365[(14)] = inst_26274);
(statearr_26365[(16)] = inst_26272);
return statearr_26365;
})();var statearr_26366_26403 = state_26331__$1;(statearr_26366_26403[(2)] = null);
(statearr_26366_26403[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26332 === (10)))
{var inst_26275 = (state_26331[(12)]);var inst_26273 = (state_26331[(13)]);var inst_26274 = (state_26331[(14)]);var inst_26272 = (state_26331[(16)]);var inst_26280 = cljs.core._nth.call(null,inst_26273,inst_26275);var inst_26281 = cljs.core.async.muxch_STAR_.call(null,inst_26280);var inst_26282 = cljs.core.async.close_BANG_.call(null,inst_26281);var inst_26283 = (inst_26275 + (1));var tmp26361 = inst_26273;var tmp26362 = inst_26274;var tmp26363 = inst_26272;var inst_26272__$1 = tmp26363;var inst_26273__$1 = tmp26361;var inst_26274__$1 = tmp26362;var inst_26275__$1 = inst_26283;var state_26331__$1 = (function (){var statearr_26367 = state_26331;(statearr_26367[(17)] = inst_26282);
(statearr_26367[(12)] = inst_26275__$1);
(statearr_26367[(13)] = inst_26273__$1);
(statearr_26367[(14)] = inst_26274__$1);
(statearr_26367[(16)] = inst_26272__$1);
return statearr_26367;
})();var statearr_26368_26404 = state_26331__$1;(statearr_26368_26404[(2)] = null);
(statearr_26368_26404[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26332 === (18)))
{var inst_26301 = (state_26331[(2)]);var state_26331__$1 = state_26331;var statearr_26369_26405 = state_26331__$1;(statearr_26369_26405[(2)] = inst_26301);
(statearr_26369_26405[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26332 === (8)))
{var inst_26275 = (state_26331[(12)]);var inst_26274 = (state_26331[(14)]);var inst_26277 = (inst_26275 < inst_26274);var inst_26278 = inst_26277;var state_26331__$1 = state_26331;if(cljs.core.truth_(inst_26278))
{var statearr_26370_26406 = state_26331__$1;(statearr_26370_26406[(1)] = (10));
} else
{var statearr_26371_26407 = state_26331__$1;(statearr_26371_26407[(1)] = (11));
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
});})(c__11517__auto___26379,mults,ensure_mult,p))
;return ((function (switch__11461__auto__,c__11517__auto___26379,mults,ensure_mult,p){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26375[(0)] = state_machine__11462__auto__);
(statearr_26375[(1)] = (1));
return statearr_26375;
});
var state_machine__11462__auto____1 = (function (state_26331){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26331);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26376){if((e26376 instanceof Object))
{var ex__11465__auto__ = e26376;var statearr_26377_26408 = state_26331;(statearr_26377_26408[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26331);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26376;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26409 = state_26331;
state_26331 = G__26409;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26331){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26379,mults,ensure_mult,p))
})();var state__11519__auto__ = (function (){var statearr_26378 = f__11518__auto__.call(null);(statearr_26378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26379);
return statearr_26378;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26379,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__11517__auto___26546 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26546,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26546,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26516){var state_val_26517 = (state_26516[(1)]);if((state_val_26517 === (7)))
{var state_26516__$1 = state_26516;var statearr_26518_26547 = state_26516__$1;(statearr_26518_26547[(2)] = null);
(statearr_26518_26547[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26517 === (1)))
{var state_26516__$1 = state_26516;var statearr_26519_26548 = state_26516__$1;(statearr_26519_26548[(2)] = null);
(statearr_26519_26548[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26517 === (4)))
{var inst_26480 = (state_26516[(7)]);var inst_26482 = (inst_26480 < cnt);var state_26516__$1 = state_26516;if(cljs.core.truth_(inst_26482))
{var statearr_26520_26549 = state_26516__$1;(statearr_26520_26549[(1)] = (6));
} else
{var statearr_26521_26550 = state_26516__$1;(statearr_26521_26550[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26517 === (15)))
{var inst_26512 = (state_26516[(2)]);var state_26516__$1 = state_26516;var statearr_26522_26551 = state_26516__$1;(statearr_26522_26551[(2)] = inst_26512);
(statearr_26522_26551[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26517 === (13)))
{var inst_26505 = cljs.core.async.close_BANG_.call(null,out);var state_26516__$1 = state_26516;var statearr_26523_26552 = state_26516__$1;(statearr_26523_26552[(2)] = inst_26505);
(statearr_26523_26552[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26517 === (6)))
{var state_26516__$1 = state_26516;var statearr_26524_26553 = state_26516__$1;(statearr_26524_26553[(2)] = null);
(statearr_26524_26553[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26517 === (3)))
{var inst_26514 = (state_26516[(2)]);var state_26516__$1 = state_26516;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26516__$1,inst_26514);
} else
{if((state_val_26517 === (12)))
{var inst_26502 = (state_26516[(8)]);var inst_26502__$1 = (state_26516[(2)]);var inst_26503 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26502__$1);var state_26516__$1 = (function (){var statearr_26525 = state_26516;(statearr_26525[(8)] = inst_26502__$1);
return statearr_26525;
})();if(cljs.core.truth_(inst_26503))
{var statearr_26526_26554 = state_26516__$1;(statearr_26526_26554[(1)] = (13));
} else
{var statearr_26527_26555 = state_26516__$1;(statearr_26527_26555[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26517 === (2)))
{var inst_26479 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26480 = (0);var state_26516__$1 = (function (){var statearr_26528 = state_26516;(statearr_26528[(9)] = inst_26479);
(statearr_26528[(7)] = inst_26480);
return statearr_26528;
})();var statearr_26529_26556 = state_26516__$1;(statearr_26529_26556[(2)] = null);
(statearr_26529_26556[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26517 === (11)))
{var inst_26480 = (state_26516[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26516,(10),Object,null,(9));var inst_26489 = chs__$1.call(null,inst_26480);var inst_26490 = done.call(null,inst_26480);var inst_26491 = cljs.core.async.take_BANG_.call(null,inst_26489,inst_26490);var state_26516__$1 = state_26516;var statearr_26530_26557 = state_26516__$1;(statearr_26530_26557[(2)] = inst_26491);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26516__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26517 === (9)))
{var inst_26480 = (state_26516[(7)]);var inst_26493 = (state_26516[(2)]);var inst_26494 = (inst_26480 + (1));var inst_26480__$1 = inst_26494;var state_26516__$1 = (function (){var statearr_26531 = state_26516;(statearr_26531[(10)] = inst_26493);
(statearr_26531[(7)] = inst_26480__$1);
return statearr_26531;
})();var statearr_26532_26558 = state_26516__$1;(statearr_26532_26558[(2)] = null);
(statearr_26532_26558[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26517 === (5)))
{var inst_26500 = (state_26516[(2)]);var state_26516__$1 = (function (){var statearr_26533 = state_26516;(statearr_26533[(11)] = inst_26500);
return statearr_26533;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26516__$1,(12),dchan);
} else
{if((state_val_26517 === (14)))
{var inst_26502 = (state_26516[(8)]);var inst_26507 = cljs.core.apply.call(null,f,inst_26502);var state_26516__$1 = state_26516;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26516__$1,(16),out,inst_26507);
} else
{if((state_val_26517 === (16)))
{var inst_26509 = (state_26516[(2)]);var state_26516__$1 = (function (){var statearr_26534 = state_26516;(statearr_26534[(12)] = inst_26509);
return statearr_26534;
})();var statearr_26535_26559 = state_26516__$1;(statearr_26535_26559[(2)] = null);
(statearr_26535_26559[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26517 === (10)))
{var inst_26484 = (state_26516[(2)]);var inst_26485 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26516__$1 = (function (){var statearr_26536 = state_26516;(statearr_26536[(13)] = inst_26484);
return statearr_26536;
})();var statearr_26537_26560 = state_26516__$1;(statearr_26537_26560[(2)] = inst_26485);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26516__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26517 === (8)))
{var inst_26498 = (state_26516[(2)]);var state_26516__$1 = state_26516;var statearr_26538_26561 = state_26516__$1;(statearr_26538_26561[(2)] = inst_26498);
(statearr_26538_26561[(1)] = (5));
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
});})(c__11517__auto___26546,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__11461__auto__,c__11517__auto___26546,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26542[(0)] = state_machine__11462__auto__);
(statearr_26542[(1)] = (1));
return statearr_26542;
});
var state_machine__11462__auto____1 = (function (state_26516){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26516);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26543){if((e26543 instanceof Object))
{var ex__11465__auto__ = e26543;var statearr_26544_26562 = state_26516;(statearr_26544_26562[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26516);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26543;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26563 = state_26516;
state_26516 = G__26563;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26516){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26546,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11519__auto__ = (function (){var statearr_26545 = f__11518__auto__.call(null);(statearr_26545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26546);
return statearr_26545;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26546,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___26671 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26671,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26671,out){
return (function (state_26647){var state_val_26648 = (state_26647[(1)]);if((state_val_26648 === (7)))
{var inst_26626 = (state_26647[(7)]);var inst_26627 = (state_26647[(8)]);var inst_26626__$1 = (state_26647[(2)]);var inst_26627__$1 = cljs.core.nth.call(null,inst_26626__$1,(0),null);var inst_26628 = cljs.core.nth.call(null,inst_26626__$1,(1),null);var inst_26629 = (inst_26627__$1 == null);var state_26647__$1 = (function (){var statearr_26649 = state_26647;(statearr_26649[(7)] = inst_26626__$1);
(statearr_26649[(9)] = inst_26628);
(statearr_26649[(8)] = inst_26627__$1);
return statearr_26649;
})();if(cljs.core.truth_(inst_26629))
{var statearr_26650_26672 = state_26647__$1;(statearr_26650_26672[(1)] = (8));
} else
{var statearr_26651_26673 = state_26647__$1;(statearr_26651_26673[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26648 === (1)))
{var inst_26618 = cljs.core.vec.call(null,chs);var inst_26619 = inst_26618;var state_26647__$1 = (function (){var statearr_26652 = state_26647;(statearr_26652[(10)] = inst_26619);
return statearr_26652;
})();var statearr_26653_26674 = state_26647__$1;(statearr_26653_26674[(2)] = null);
(statearr_26653_26674[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26648 === (4)))
{var inst_26619 = (state_26647[(10)]);var state_26647__$1 = state_26647;return cljs.core.async.ioc_alts_BANG_.call(null,state_26647__$1,(7),inst_26619);
} else
{if((state_val_26648 === (6)))
{var inst_26643 = (state_26647[(2)]);var state_26647__$1 = state_26647;var statearr_26654_26675 = state_26647__$1;(statearr_26654_26675[(2)] = inst_26643);
(statearr_26654_26675[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26648 === (3)))
{var inst_26645 = (state_26647[(2)]);var state_26647__$1 = state_26647;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26647__$1,inst_26645);
} else
{if((state_val_26648 === (2)))
{var inst_26619 = (state_26647[(10)]);var inst_26621 = cljs.core.count.call(null,inst_26619);var inst_26622 = (inst_26621 > (0));var state_26647__$1 = state_26647;if(cljs.core.truth_(inst_26622))
{var statearr_26656_26676 = state_26647__$1;(statearr_26656_26676[(1)] = (4));
} else
{var statearr_26657_26677 = state_26647__$1;(statearr_26657_26677[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26648 === (11)))
{var inst_26619 = (state_26647[(10)]);var inst_26636 = (state_26647[(2)]);var tmp26655 = inst_26619;var inst_26619__$1 = tmp26655;var state_26647__$1 = (function (){var statearr_26658 = state_26647;(statearr_26658[(10)] = inst_26619__$1);
(statearr_26658[(11)] = inst_26636);
return statearr_26658;
})();var statearr_26659_26678 = state_26647__$1;(statearr_26659_26678[(2)] = null);
(statearr_26659_26678[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26648 === (9)))
{var inst_26627 = (state_26647[(8)]);var state_26647__$1 = state_26647;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26647__$1,(11),out,inst_26627);
} else
{if((state_val_26648 === (5)))
{var inst_26641 = cljs.core.async.close_BANG_.call(null,out);var state_26647__$1 = state_26647;var statearr_26660_26679 = state_26647__$1;(statearr_26660_26679[(2)] = inst_26641);
(statearr_26660_26679[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26648 === (10)))
{var inst_26639 = (state_26647[(2)]);var state_26647__$1 = state_26647;var statearr_26661_26680 = state_26647__$1;(statearr_26661_26680[(2)] = inst_26639);
(statearr_26661_26680[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26648 === (8)))
{var inst_26619 = (state_26647[(10)]);var inst_26626 = (state_26647[(7)]);var inst_26628 = (state_26647[(9)]);var inst_26627 = (state_26647[(8)]);var inst_26631 = (function (){var c = inst_26628;var v = inst_26627;var vec__26624 = inst_26626;var cs = inst_26619;return ((function (c,v,vec__26624,cs,inst_26619,inst_26626,inst_26628,inst_26627,state_val_26648,c__11517__auto___26671,out){
return (function (p1__26564_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__26564_SHARP_);
});
;})(c,v,vec__26624,cs,inst_26619,inst_26626,inst_26628,inst_26627,state_val_26648,c__11517__auto___26671,out))
})();var inst_26632 = cljs.core.filterv.call(null,inst_26631,inst_26619);var inst_26619__$1 = inst_26632;var state_26647__$1 = (function (){var statearr_26662 = state_26647;(statearr_26662[(10)] = inst_26619__$1);
return statearr_26662;
})();var statearr_26663_26681 = state_26647__$1;(statearr_26663_26681[(2)] = null);
(statearr_26663_26681[(1)] = (2));
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
});})(c__11517__auto___26671,out))
;return ((function (switch__11461__auto__,c__11517__auto___26671,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26667 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26667[(0)] = state_machine__11462__auto__);
(statearr_26667[(1)] = (1));
return statearr_26667;
});
var state_machine__11462__auto____1 = (function (state_26647){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26647);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26668){if((e26668 instanceof Object))
{var ex__11465__auto__ = e26668;var statearr_26669_26682 = state_26647;(statearr_26669_26682[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26647);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26668;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26683 = state_26647;
state_26647 = G__26683;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26647){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26671,out))
})();var state__11519__auto__ = (function (){var statearr_26670 = f__11518__auto__.call(null);(statearr_26670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26671);
return statearr_26670;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26671,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___26776 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26776,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26776,out){
return (function (state_26753){var state_val_26754 = (state_26753[(1)]);if((state_val_26754 === (7)))
{var inst_26735 = (state_26753[(7)]);var inst_26735__$1 = (state_26753[(2)]);var inst_26736 = (inst_26735__$1 == null);var inst_26737 = cljs.core.not.call(null,inst_26736);var state_26753__$1 = (function (){var statearr_26755 = state_26753;(statearr_26755[(7)] = inst_26735__$1);
return statearr_26755;
})();if(inst_26737)
{var statearr_26756_26777 = state_26753__$1;(statearr_26756_26777[(1)] = (8));
} else
{var statearr_26757_26778 = state_26753__$1;(statearr_26757_26778[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26754 === (1)))
{var inst_26730 = (0);var state_26753__$1 = (function (){var statearr_26758 = state_26753;(statearr_26758[(8)] = inst_26730);
return statearr_26758;
})();var statearr_26759_26779 = state_26753__$1;(statearr_26759_26779[(2)] = null);
(statearr_26759_26779[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26754 === (4)))
{var state_26753__$1 = state_26753;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26753__$1,(7),ch);
} else
{if((state_val_26754 === (6)))
{var inst_26748 = (state_26753[(2)]);var state_26753__$1 = state_26753;var statearr_26760_26780 = state_26753__$1;(statearr_26760_26780[(2)] = inst_26748);
(statearr_26760_26780[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26754 === (3)))
{var inst_26750 = (state_26753[(2)]);var inst_26751 = cljs.core.async.close_BANG_.call(null,out);var state_26753__$1 = (function (){var statearr_26761 = state_26753;(statearr_26761[(9)] = inst_26750);
return statearr_26761;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26753__$1,inst_26751);
} else
{if((state_val_26754 === (2)))
{var inst_26730 = (state_26753[(8)]);var inst_26732 = (inst_26730 < n);var state_26753__$1 = state_26753;if(cljs.core.truth_(inst_26732))
{var statearr_26762_26781 = state_26753__$1;(statearr_26762_26781[(1)] = (4));
} else
{var statearr_26763_26782 = state_26753__$1;(statearr_26763_26782[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26754 === (11)))
{var inst_26730 = (state_26753[(8)]);var inst_26740 = (state_26753[(2)]);var inst_26741 = (inst_26730 + (1));var inst_26730__$1 = inst_26741;var state_26753__$1 = (function (){var statearr_26764 = state_26753;(statearr_26764[(10)] = inst_26740);
(statearr_26764[(8)] = inst_26730__$1);
return statearr_26764;
})();var statearr_26765_26783 = state_26753__$1;(statearr_26765_26783[(2)] = null);
(statearr_26765_26783[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26754 === (9)))
{var state_26753__$1 = state_26753;var statearr_26766_26784 = state_26753__$1;(statearr_26766_26784[(2)] = null);
(statearr_26766_26784[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26754 === (5)))
{var state_26753__$1 = state_26753;var statearr_26767_26785 = state_26753__$1;(statearr_26767_26785[(2)] = null);
(statearr_26767_26785[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26754 === (10)))
{var inst_26745 = (state_26753[(2)]);var state_26753__$1 = state_26753;var statearr_26768_26786 = state_26753__$1;(statearr_26768_26786[(2)] = inst_26745);
(statearr_26768_26786[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26754 === (8)))
{var inst_26735 = (state_26753[(7)]);var state_26753__$1 = state_26753;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26753__$1,(11),out,inst_26735);
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
});})(c__11517__auto___26776,out))
;return ((function (switch__11461__auto__,c__11517__auto___26776,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26772 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26772[(0)] = state_machine__11462__auto__);
(statearr_26772[(1)] = (1));
return statearr_26772;
});
var state_machine__11462__auto____1 = (function (state_26753){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26753);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26773){if((e26773 instanceof Object))
{var ex__11465__auto__ = e26773;var statearr_26774_26787 = state_26753;(statearr_26774_26787[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26753);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26773;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26788 = state_26753;
state_26753 = G__26788;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26753){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26776,out))
})();var state__11519__auto__ = (function (){var statearr_26775 = f__11518__auto__.call(null);(statearr_26775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26776);
return statearr_26775;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26776,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26796 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26796 = (function (ch,f,map_LT_,meta26797){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26797 = meta26797;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26796.cljs$lang$type = true;
cljs.core.async.t26796.cljs$lang$ctorStr = "cljs.core.async/t26796";
cljs.core.async.t26796.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26796");
});
cljs.core.async.t26796.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26796.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t26796.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26796.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t26799 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26799 = (function (fn1,_,meta26797,ch,f,map_LT_,meta26800){
this.fn1 = fn1;
this._ = _;
this.meta26797 = meta26797;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26800 = meta26800;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26799.cljs$lang$type = true;
cljs.core.async.t26799.cljs$lang$ctorStr = "cljs.core.async/t26799";
cljs.core.async.t26799.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26799");
});})(___$1))
;
cljs.core.async.t26799.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26799.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t26799.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__26789_SHARP_){return f1.call(null,(((p1__26789_SHARP_ == null))?null:self__.f.call(null,p1__26789_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t26799.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26801){var self__ = this;
var _26801__$1 = this;return self__.meta26800;
});})(___$1))
;
cljs.core.async.t26799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26801,meta26800__$1){var self__ = this;
var _26801__$1 = this;return (new cljs.core.async.t26799(self__.fn1,self__._,self__.meta26797,self__.ch,self__.f,self__.map_LT_,meta26800__$1));
});})(___$1))
;
cljs.core.async.__GT_t26799 = ((function (___$1){
return (function __GT_t26799(fn1__$1,___$2,meta26797__$1,ch__$2,f__$2,map_LT___$2,meta26800){return (new cljs.core.async.t26799(fn1__$1,___$2,meta26797__$1,ch__$2,f__$2,map_LT___$2,meta26800));
});})(___$1))
;
}
return (new cljs.core.async.t26799(fn1,___$1,self__.meta26797,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t26796.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26796.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26796.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26798){var self__ = this;
var _26798__$1 = this;return self__.meta26797;
});
cljs.core.async.t26796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26798,meta26797__$1){var self__ = this;
var _26798__$1 = this;return (new cljs.core.async.t26796(self__.ch,self__.f,self__.map_LT_,meta26797__$1));
});
cljs.core.async.__GT_t26796 = (function __GT_t26796(ch__$1,f__$1,map_LT___$1,meta26797){return (new cljs.core.async.t26796(ch__$1,f__$1,map_LT___$1,meta26797));
});
}
return (new cljs.core.async.t26796(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26805 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26805 = (function (ch,f,map_GT_,meta26806){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26806 = meta26806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26805.cljs$lang$type = true;
cljs.core.async.t26805.cljs$lang$ctorStr = "cljs.core.async/t26805";
cljs.core.async.t26805.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26805");
});
cljs.core.async.t26805.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26805.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t26805.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26805.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26805.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26805.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26807){var self__ = this;
var _26807__$1 = this;return self__.meta26806;
});
cljs.core.async.t26805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26807,meta26806__$1){var self__ = this;
var _26807__$1 = this;return (new cljs.core.async.t26805(self__.ch,self__.f,self__.map_GT_,meta26806__$1));
});
cljs.core.async.__GT_t26805 = (function __GT_t26805(ch__$1,f__$1,map_GT___$1,meta26806){return (new cljs.core.async.t26805(ch__$1,f__$1,map_GT___$1,meta26806));
});
}
return (new cljs.core.async.t26805(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26811 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26811 = (function (ch,p,filter_GT_,meta26812){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26812 = meta26812;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26811.cljs$lang$type = true;
cljs.core.async.t26811.cljs$lang$ctorStr = "cljs.core.async/t26811";
cljs.core.async.t26811.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26811");
});
cljs.core.async.t26811.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26811.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t26811.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26811.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26811.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26811.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26811.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26813){var self__ = this;
var _26813__$1 = this;return self__.meta26812;
});
cljs.core.async.t26811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26813,meta26812__$1){var self__ = this;
var _26813__$1 = this;return (new cljs.core.async.t26811(self__.ch,self__.p,self__.filter_GT_,meta26812__$1));
});
cljs.core.async.__GT_t26811 = (function __GT_t26811(ch__$1,p__$1,filter_GT___$1,meta26812){return (new cljs.core.async.t26811(ch__$1,p__$1,filter_GT___$1,meta26812));
});
}
return (new cljs.core.async.t26811(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___26896 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26896,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26896,out){
return (function (state_26875){var state_val_26876 = (state_26875[(1)]);if((state_val_26876 === (7)))
{var inst_26871 = (state_26875[(2)]);var state_26875__$1 = state_26875;var statearr_26877_26897 = state_26875__$1;(statearr_26877_26897[(2)] = inst_26871);
(statearr_26877_26897[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26876 === (1)))
{var state_26875__$1 = state_26875;var statearr_26878_26898 = state_26875__$1;(statearr_26878_26898[(2)] = null);
(statearr_26878_26898[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26876 === (4)))
{var inst_26857 = (state_26875[(7)]);var inst_26857__$1 = (state_26875[(2)]);var inst_26858 = (inst_26857__$1 == null);var state_26875__$1 = (function (){var statearr_26879 = state_26875;(statearr_26879[(7)] = inst_26857__$1);
return statearr_26879;
})();if(cljs.core.truth_(inst_26858))
{var statearr_26880_26899 = state_26875__$1;(statearr_26880_26899[(1)] = (5));
} else
{var statearr_26881_26900 = state_26875__$1;(statearr_26881_26900[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26876 === (6)))
{var inst_26857 = (state_26875[(7)]);var inst_26862 = p.call(null,inst_26857);var state_26875__$1 = state_26875;if(cljs.core.truth_(inst_26862))
{var statearr_26882_26901 = state_26875__$1;(statearr_26882_26901[(1)] = (8));
} else
{var statearr_26883_26902 = state_26875__$1;(statearr_26883_26902[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26876 === (3)))
{var inst_26873 = (state_26875[(2)]);var state_26875__$1 = state_26875;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26875__$1,inst_26873);
} else
{if((state_val_26876 === (2)))
{var state_26875__$1 = state_26875;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26875__$1,(4),ch);
} else
{if((state_val_26876 === (11)))
{var inst_26865 = (state_26875[(2)]);var state_26875__$1 = state_26875;var statearr_26884_26903 = state_26875__$1;(statearr_26884_26903[(2)] = inst_26865);
(statearr_26884_26903[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26876 === (9)))
{var state_26875__$1 = state_26875;var statearr_26885_26904 = state_26875__$1;(statearr_26885_26904[(2)] = null);
(statearr_26885_26904[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26876 === (5)))
{var inst_26860 = cljs.core.async.close_BANG_.call(null,out);var state_26875__$1 = state_26875;var statearr_26886_26905 = state_26875__$1;(statearr_26886_26905[(2)] = inst_26860);
(statearr_26886_26905[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26876 === (10)))
{var inst_26868 = (state_26875[(2)]);var state_26875__$1 = (function (){var statearr_26887 = state_26875;(statearr_26887[(8)] = inst_26868);
return statearr_26887;
})();var statearr_26888_26906 = state_26875__$1;(statearr_26888_26906[(2)] = null);
(statearr_26888_26906[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26876 === (8)))
{var inst_26857 = (state_26875[(7)]);var state_26875__$1 = state_26875;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26875__$1,(11),out,inst_26857);
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
});})(c__11517__auto___26896,out))
;return ((function (switch__11461__auto__,c__11517__auto___26896,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26892 = [null,null,null,null,null,null,null,null,null];(statearr_26892[(0)] = state_machine__11462__auto__);
(statearr_26892[(1)] = (1));
return statearr_26892;
});
var state_machine__11462__auto____1 = (function (state_26875){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26875);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26893){if((e26893 instanceof Object))
{var ex__11465__auto__ = e26893;var statearr_26894_26907 = state_26875;(statearr_26894_26907[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26875);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26893;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26908 = state_26875;
state_26875 = G__26908;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26875){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26896,out))
})();var state__11519__auto__ = (function (){var statearr_26895 = f__11518__auto__.call(null);(statearr_26895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26896);
return statearr_26895;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26896,out))
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
return (function (state_27074){var state_val_27075 = (state_27074[(1)]);if((state_val_27075 === (7)))
{var inst_27070 = (state_27074[(2)]);var state_27074__$1 = state_27074;var statearr_27076_27117 = state_27074__$1;(statearr_27076_27117[(2)] = inst_27070);
(statearr_27076_27117[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27075 === (20)))
{var inst_27040 = (state_27074[(7)]);var inst_27051 = (state_27074[(2)]);var inst_27052 = cljs.core.next.call(null,inst_27040);var inst_27026 = inst_27052;var inst_27027 = null;var inst_27028 = (0);var inst_27029 = (0);var state_27074__$1 = (function (){var statearr_27077 = state_27074;(statearr_27077[(8)] = inst_27026);
(statearr_27077[(9)] = inst_27028);
(statearr_27077[(10)] = inst_27027);
(statearr_27077[(11)] = inst_27029);
(statearr_27077[(12)] = inst_27051);
return statearr_27077;
})();var statearr_27078_27118 = state_27074__$1;(statearr_27078_27118[(2)] = null);
(statearr_27078_27118[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27075 === (1)))
{var state_27074__$1 = state_27074;var statearr_27079_27119 = state_27074__$1;(statearr_27079_27119[(2)] = null);
(statearr_27079_27119[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27075 === (4)))
{var inst_27015 = (state_27074[(13)]);var inst_27015__$1 = (state_27074[(2)]);var inst_27016 = (inst_27015__$1 == null);var state_27074__$1 = (function (){var statearr_27080 = state_27074;(statearr_27080[(13)] = inst_27015__$1);
return statearr_27080;
})();if(cljs.core.truth_(inst_27016))
{var statearr_27081_27120 = state_27074__$1;(statearr_27081_27120[(1)] = (5));
} else
{var statearr_27082_27121 = state_27074__$1;(statearr_27082_27121[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27075 === (15)))
{var state_27074__$1 = state_27074;var statearr_27086_27122 = state_27074__$1;(statearr_27086_27122[(2)] = null);
(statearr_27086_27122[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27075 === (21)))
{var state_27074__$1 = state_27074;var statearr_27087_27123 = state_27074__$1;(statearr_27087_27123[(2)] = null);
(statearr_27087_27123[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27075 === (13)))
{var inst_27026 = (state_27074[(8)]);var inst_27028 = (state_27074[(9)]);var inst_27027 = (state_27074[(10)]);var inst_27029 = (state_27074[(11)]);var inst_27036 = (state_27074[(2)]);var inst_27037 = (inst_27029 + (1));var tmp27083 = inst_27026;var tmp27084 = inst_27028;var tmp27085 = inst_27027;var inst_27026__$1 = tmp27083;var inst_27027__$1 = tmp27085;var inst_27028__$1 = tmp27084;var inst_27029__$1 = inst_27037;var state_27074__$1 = (function (){var statearr_27088 = state_27074;(statearr_27088[(8)] = inst_27026__$1);
(statearr_27088[(9)] = inst_27028__$1);
(statearr_27088[(10)] = inst_27027__$1);
(statearr_27088[(11)] = inst_27029__$1);
(statearr_27088[(14)] = inst_27036);
return statearr_27088;
})();var statearr_27089_27124 = state_27074__$1;(statearr_27089_27124[(2)] = null);
(statearr_27089_27124[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27075 === (22)))
{var state_27074__$1 = state_27074;var statearr_27090_27125 = state_27074__$1;(statearr_27090_27125[(2)] = null);
(statearr_27090_27125[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27075 === (6)))
{var inst_27015 = (state_27074[(13)]);var inst_27024 = f.call(null,inst_27015);var inst_27025 = cljs.core.seq.call(null,inst_27024);var inst_27026 = inst_27025;var inst_27027 = null;var inst_27028 = (0);var inst_27029 = (0);var state_27074__$1 = (function (){var statearr_27091 = state_27074;(statearr_27091[(8)] = inst_27026);
(statearr_27091[(9)] = inst_27028);
(statearr_27091[(10)] = inst_27027);
(statearr_27091[(11)] = inst_27029);
return statearr_27091;
})();var statearr_27092_27126 = state_27074__$1;(statearr_27092_27126[(2)] = null);
(statearr_27092_27126[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27075 === (17)))
{var inst_27040 = (state_27074[(7)]);var inst_27044 = cljs.core.chunk_first.call(null,inst_27040);var inst_27045 = cljs.core.chunk_rest.call(null,inst_27040);var inst_27046 = cljs.core.count.call(null,inst_27044);var inst_27026 = inst_27045;var inst_27027 = inst_27044;var inst_27028 = inst_27046;var inst_27029 = (0);var state_27074__$1 = (function (){var statearr_27093 = state_27074;(statearr_27093[(8)] = inst_27026);
(statearr_27093[(9)] = inst_27028);
(statearr_27093[(10)] = inst_27027);
(statearr_27093[(11)] = inst_27029);
return statearr_27093;
})();var statearr_27094_27127 = state_27074__$1;(statearr_27094_27127[(2)] = null);
(statearr_27094_27127[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27075 === (3)))
{var inst_27072 = (state_27074[(2)]);var state_27074__$1 = state_27074;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27074__$1,inst_27072);
} else
{if((state_val_27075 === (12)))
{var inst_27060 = (state_27074[(2)]);var state_27074__$1 = state_27074;var statearr_27095_27128 = state_27074__$1;(statearr_27095_27128[(2)] = inst_27060);
(statearr_27095_27128[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27075 === (2)))
{var state_27074__$1 = state_27074;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27074__$1,(4),in$);
} else
{if((state_val_27075 === (23)))
{var inst_27068 = (state_27074[(2)]);var state_27074__$1 = state_27074;var statearr_27096_27129 = state_27074__$1;(statearr_27096_27129[(2)] = inst_27068);
(statearr_27096_27129[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27075 === (19)))
{var inst_27055 = (state_27074[(2)]);var state_27074__$1 = state_27074;var statearr_27097_27130 = state_27074__$1;(statearr_27097_27130[(2)] = inst_27055);
(statearr_27097_27130[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27075 === (11)))
{var inst_27026 = (state_27074[(8)]);var inst_27040 = (state_27074[(7)]);var inst_27040__$1 = cljs.core.seq.call(null,inst_27026);var state_27074__$1 = (function (){var statearr_27098 = state_27074;(statearr_27098[(7)] = inst_27040__$1);
return statearr_27098;
})();if(inst_27040__$1)
{var statearr_27099_27131 = state_27074__$1;(statearr_27099_27131[(1)] = (14));
} else
{var statearr_27100_27132 = state_27074__$1;(statearr_27100_27132[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27075 === (9)))
{var inst_27062 = (state_27074[(2)]);var inst_27063 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_27074__$1 = (function (){var statearr_27101 = state_27074;(statearr_27101[(15)] = inst_27062);
return statearr_27101;
})();if(cljs.core.truth_(inst_27063))
{var statearr_27102_27133 = state_27074__$1;(statearr_27102_27133[(1)] = (21));
} else
{var statearr_27103_27134 = state_27074__$1;(statearr_27103_27134[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27075 === (5)))
{var inst_27018 = cljs.core.async.close_BANG_.call(null,out);var state_27074__$1 = state_27074;var statearr_27104_27135 = state_27074__$1;(statearr_27104_27135[(2)] = inst_27018);
(statearr_27104_27135[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27075 === (14)))
{var inst_27040 = (state_27074[(7)]);var inst_27042 = cljs.core.chunked_seq_QMARK_.call(null,inst_27040);var state_27074__$1 = state_27074;if(inst_27042)
{var statearr_27105_27136 = state_27074__$1;(statearr_27105_27136[(1)] = (17));
} else
{var statearr_27106_27137 = state_27074__$1;(statearr_27106_27137[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27075 === (16)))
{var inst_27058 = (state_27074[(2)]);var state_27074__$1 = state_27074;var statearr_27107_27138 = state_27074__$1;(statearr_27107_27138[(2)] = inst_27058);
(statearr_27107_27138[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27075 === (10)))
{var inst_27027 = (state_27074[(10)]);var inst_27029 = (state_27074[(11)]);var inst_27034 = cljs.core._nth.call(null,inst_27027,inst_27029);var state_27074__$1 = state_27074;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27074__$1,(13),out,inst_27034);
} else
{if((state_val_27075 === (18)))
{var inst_27040 = (state_27074[(7)]);var inst_27049 = cljs.core.first.call(null,inst_27040);var state_27074__$1 = state_27074;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27074__$1,(20),out,inst_27049);
} else
{if((state_val_27075 === (8)))
{var inst_27028 = (state_27074[(9)]);var inst_27029 = (state_27074[(11)]);var inst_27031 = (inst_27029 < inst_27028);var inst_27032 = inst_27031;var state_27074__$1 = state_27074;if(cljs.core.truth_(inst_27032))
{var statearr_27108_27139 = state_27074__$1;(statearr_27108_27139[(1)] = (10));
} else
{var statearr_27109_27140 = state_27074__$1;(statearr_27109_27140[(1)] = (11));
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
var state_machine__11462__auto____0 = (function (){var statearr_27113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27113[(0)] = state_machine__11462__auto__);
(statearr_27113[(1)] = (1));
return statearr_27113;
});
var state_machine__11462__auto____1 = (function (state_27074){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_27074);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e27114){if((e27114 instanceof Object))
{var ex__11465__auto__ = e27114;var statearr_27115_27141 = state_27074;(statearr_27115_27141[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27074);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27114;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27142 = state_27074;
state_27074 = G__27142;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_27074){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_27074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_27116 = f__11518__auto__.call(null);(statearr_27116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_27116;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___27239 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___27239,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___27239,out){
return (function (state_27214){var state_val_27215 = (state_27214[(1)]);if((state_val_27215 === (7)))
{var inst_27209 = (state_27214[(2)]);var state_27214__$1 = state_27214;var statearr_27216_27240 = state_27214__$1;(statearr_27216_27240[(2)] = inst_27209);
(statearr_27216_27240[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27215 === (1)))
{var inst_27191 = null;var state_27214__$1 = (function (){var statearr_27217 = state_27214;(statearr_27217[(7)] = inst_27191);
return statearr_27217;
})();var statearr_27218_27241 = state_27214__$1;(statearr_27218_27241[(2)] = null);
(statearr_27218_27241[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27215 === (4)))
{var inst_27194 = (state_27214[(8)]);var inst_27194__$1 = (state_27214[(2)]);var inst_27195 = (inst_27194__$1 == null);var inst_27196 = cljs.core.not.call(null,inst_27195);var state_27214__$1 = (function (){var statearr_27219 = state_27214;(statearr_27219[(8)] = inst_27194__$1);
return statearr_27219;
})();if(inst_27196)
{var statearr_27220_27242 = state_27214__$1;(statearr_27220_27242[(1)] = (5));
} else
{var statearr_27221_27243 = state_27214__$1;(statearr_27221_27243[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27215 === (6)))
{var state_27214__$1 = state_27214;var statearr_27222_27244 = state_27214__$1;(statearr_27222_27244[(2)] = null);
(statearr_27222_27244[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27215 === (3)))
{var inst_27211 = (state_27214[(2)]);var inst_27212 = cljs.core.async.close_BANG_.call(null,out);var state_27214__$1 = (function (){var statearr_27223 = state_27214;(statearr_27223[(9)] = inst_27211);
return statearr_27223;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27214__$1,inst_27212);
} else
{if((state_val_27215 === (2)))
{var state_27214__$1 = state_27214;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27214__$1,(4),ch);
} else
{if((state_val_27215 === (11)))
{var inst_27194 = (state_27214[(8)]);var inst_27203 = (state_27214[(2)]);var inst_27191 = inst_27194;var state_27214__$1 = (function (){var statearr_27224 = state_27214;(statearr_27224[(7)] = inst_27191);
(statearr_27224[(10)] = inst_27203);
return statearr_27224;
})();var statearr_27225_27245 = state_27214__$1;(statearr_27225_27245[(2)] = null);
(statearr_27225_27245[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27215 === (9)))
{var inst_27194 = (state_27214[(8)]);var state_27214__$1 = state_27214;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27214__$1,(11),out,inst_27194);
} else
{if((state_val_27215 === (5)))
{var inst_27191 = (state_27214[(7)]);var inst_27194 = (state_27214[(8)]);var inst_27198 = cljs.core._EQ_.call(null,inst_27194,inst_27191);var state_27214__$1 = state_27214;if(inst_27198)
{var statearr_27227_27246 = state_27214__$1;(statearr_27227_27246[(1)] = (8));
} else
{var statearr_27228_27247 = state_27214__$1;(statearr_27228_27247[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27215 === (10)))
{var inst_27206 = (state_27214[(2)]);var state_27214__$1 = state_27214;var statearr_27229_27248 = state_27214__$1;(statearr_27229_27248[(2)] = inst_27206);
(statearr_27229_27248[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27215 === (8)))
{var inst_27191 = (state_27214[(7)]);var tmp27226 = inst_27191;var inst_27191__$1 = tmp27226;var state_27214__$1 = (function (){var statearr_27230 = state_27214;(statearr_27230[(7)] = inst_27191__$1);
return statearr_27230;
})();var statearr_27231_27249 = state_27214__$1;(statearr_27231_27249[(2)] = null);
(statearr_27231_27249[(1)] = (2));
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
});})(c__11517__auto___27239,out))
;return ((function (switch__11461__auto__,c__11517__auto___27239,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_27235 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27235[(0)] = state_machine__11462__auto__);
(statearr_27235[(1)] = (1));
return statearr_27235;
});
var state_machine__11462__auto____1 = (function (state_27214){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_27214);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e27236){if((e27236 instanceof Object))
{var ex__11465__auto__ = e27236;var statearr_27237_27250 = state_27214;(statearr_27237_27250[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27214);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27236;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27251 = state_27214;
state_27214 = G__27251;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_27214){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_27214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___27239,out))
})();var state__11519__auto__ = (function (){var statearr_27238 = f__11518__auto__.call(null);(statearr_27238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___27239);
return statearr_27238;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___27239,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___27386 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___27386,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___27386,out){
return (function (state_27356){var state_val_27357 = (state_27356[(1)]);if((state_val_27357 === (7)))
{var inst_27352 = (state_27356[(2)]);var state_27356__$1 = state_27356;var statearr_27358_27387 = state_27356__$1;(statearr_27358_27387[(2)] = inst_27352);
(statearr_27358_27387[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27357 === (1)))
{var inst_27319 = (new Array(n));var inst_27320 = inst_27319;var inst_27321 = (0);var state_27356__$1 = (function (){var statearr_27359 = state_27356;(statearr_27359[(7)] = inst_27320);
(statearr_27359[(8)] = inst_27321);
return statearr_27359;
})();var statearr_27360_27388 = state_27356__$1;(statearr_27360_27388[(2)] = null);
(statearr_27360_27388[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27357 === (4)))
{var inst_27324 = (state_27356[(9)]);var inst_27324__$1 = (state_27356[(2)]);var inst_27325 = (inst_27324__$1 == null);var inst_27326 = cljs.core.not.call(null,inst_27325);var state_27356__$1 = (function (){var statearr_27361 = state_27356;(statearr_27361[(9)] = inst_27324__$1);
return statearr_27361;
})();if(inst_27326)
{var statearr_27362_27389 = state_27356__$1;(statearr_27362_27389[(1)] = (5));
} else
{var statearr_27363_27390 = state_27356__$1;(statearr_27363_27390[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27357 === (15)))
{var inst_27346 = (state_27356[(2)]);var state_27356__$1 = state_27356;var statearr_27364_27391 = state_27356__$1;(statearr_27364_27391[(2)] = inst_27346);
(statearr_27364_27391[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27357 === (13)))
{var state_27356__$1 = state_27356;var statearr_27365_27392 = state_27356__$1;(statearr_27365_27392[(2)] = null);
(statearr_27365_27392[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27357 === (6)))
{var inst_27321 = (state_27356[(8)]);var inst_27342 = (inst_27321 > (0));var state_27356__$1 = state_27356;if(cljs.core.truth_(inst_27342))
{var statearr_27366_27393 = state_27356__$1;(statearr_27366_27393[(1)] = (12));
} else
{var statearr_27367_27394 = state_27356__$1;(statearr_27367_27394[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27357 === (3)))
{var inst_27354 = (state_27356[(2)]);var state_27356__$1 = state_27356;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27356__$1,inst_27354);
} else
{if((state_val_27357 === (12)))
{var inst_27320 = (state_27356[(7)]);var inst_27344 = cljs.core.vec.call(null,inst_27320);var state_27356__$1 = state_27356;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27356__$1,(15),out,inst_27344);
} else
{if((state_val_27357 === (2)))
{var state_27356__$1 = state_27356;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27356__$1,(4),ch);
} else
{if((state_val_27357 === (11)))
{var inst_27336 = (state_27356[(2)]);var inst_27337 = (new Array(n));var inst_27320 = inst_27337;var inst_27321 = (0);var state_27356__$1 = (function (){var statearr_27368 = state_27356;(statearr_27368[(7)] = inst_27320);
(statearr_27368[(10)] = inst_27336);
(statearr_27368[(8)] = inst_27321);
return statearr_27368;
})();var statearr_27369_27395 = state_27356__$1;(statearr_27369_27395[(2)] = null);
(statearr_27369_27395[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27357 === (9)))
{var inst_27320 = (state_27356[(7)]);var inst_27334 = cljs.core.vec.call(null,inst_27320);var state_27356__$1 = state_27356;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27356__$1,(11),out,inst_27334);
} else
{if((state_val_27357 === (5)))
{var inst_27320 = (state_27356[(7)]);var inst_27324 = (state_27356[(9)]);var inst_27329 = (state_27356[(11)]);var inst_27321 = (state_27356[(8)]);var inst_27328 = (inst_27320[inst_27321] = inst_27324);var inst_27329__$1 = (inst_27321 + (1));var inst_27330 = (inst_27329__$1 < n);var state_27356__$1 = (function (){var statearr_27370 = state_27356;(statearr_27370[(12)] = inst_27328);
(statearr_27370[(11)] = inst_27329__$1);
return statearr_27370;
})();if(cljs.core.truth_(inst_27330))
{var statearr_27371_27396 = state_27356__$1;(statearr_27371_27396[(1)] = (8));
} else
{var statearr_27372_27397 = state_27356__$1;(statearr_27372_27397[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27357 === (14)))
{var inst_27349 = (state_27356[(2)]);var inst_27350 = cljs.core.async.close_BANG_.call(null,out);var state_27356__$1 = (function (){var statearr_27374 = state_27356;(statearr_27374[(13)] = inst_27349);
return statearr_27374;
})();var statearr_27375_27398 = state_27356__$1;(statearr_27375_27398[(2)] = inst_27350);
(statearr_27375_27398[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27357 === (10)))
{var inst_27340 = (state_27356[(2)]);var state_27356__$1 = state_27356;var statearr_27376_27399 = state_27356__$1;(statearr_27376_27399[(2)] = inst_27340);
(statearr_27376_27399[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27357 === (8)))
{var inst_27320 = (state_27356[(7)]);var inst_27329 = (state_27356[(11)]);var tmp27373 = inst_27320;var inst_27320__$1 = tmp27373;var inst_27321 = inst_27329;var state_27356__$1 = (function (){var statearr_27377 = state_27356;(statearr_27377[(7)] = inst_27320__$1);
(statearr_27377[(8)] = inst_27321);
return statearr_27377;
})();var statearr_27378_27400 = state_27356__$1;(statearr_27378_27400[(2)] = null);
(statearr_27378_27400[(1)] = (2));
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
});})(c__11517__auto___27386,out))
;return ((function (switch__11461__auto__,c__11517__auto___27386,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_27382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27382[(0)] = state_machine__11462__auto__);
(statearr_27382[(1)] = (1));
return statearr_27382;
});
var state_machine__11462__auto____1 = (function (state_27356){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_27356);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e27383){if((e27383 instanceof Object))
{var ex__11465__auto__ = e27383;var statearr_27384_27401 = state_27356;(statearr_27384_27401[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27356);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27383;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27402 = state_27356;
state_27356 = G__27402;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_27356){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_27356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___27386,out))
})();var state__11519__auto__ = (function (){var statearr_27385 = f__11518__auto__.call(null);(statearr_27385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___27386);
return statearr_27385;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___27386,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___27545 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___27545,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___27545,out){
return (function (state_27515){var state_val_27516 = (state_27515[(1)]);if((state_val_27516 === (7)))
{var inst_27511 = (state_27515[(2)]);var state_27515__$1 = state_27515;var statearr_27517_27546 = state_27515__$1;(statearr_27517_27546[(2)] = inst_27511);
(statearr_27517_27546[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27516 === (1)))
{var inst_27474 = [];var inst_27475 = inst_27474;var inst_27476 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_27515__$1 = (function (){var statearr_27518 = state_27515;(statearr_27518[(7)] = inst_27475);
(statearr_27518[(8)] = inst_27476);
return statearr_27518;
})();var statearr_27519_27547 = state_27515__$1;(statearr_27519_27547[(2)] = null);
(statearr_27519_27547[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27516 === (4)))
{var inst_27479 = (state_27515[(9)]);var inst_27479__$1 = (state_27515[(2)]);var inst_27480 = (inst_27479__$1 == null);var inst_27481 = cljs.core.not.call(null,inst_27480);var state_27515__$1 = (function (){var statearr_27520 = state_27515;(statearr_27520[(9)] = inst_27479__$1);
return statearr_27520;
})();if(inst_27481)
{var statearr_27521_27548 = state_27515__$1;(statearr_27521_27548[(1)] = (5));
} else
{var statearr_27522_27549 = state_27515__$1;(statearr_27522_27549[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27516 === (15)))
{var inst_27505 = (state_27515[(2)]);var state_27515__$1 = state_27515;var statearr_27523_27550 = state_27515__$1;(statearr_27523_27550[(2)] = inst_27505);
(statearr_27523_27550[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27516 === (13)))
{var state_27515__$1 = state_27515;var statearr_27524_27551 = state_27515__$1;(statearr_27524_27551[(2)] = null);
(statearr_27524_27551[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27516 === (6)))
{var inst_27475 = (state_27515[(7)]);var inst_27500 = inst_27475.length;var inst_27501 = (inst_27500 > (0));var state_27515__$1 = state_27515;if(cljs.core.truth_(inst_27501))
{var statearr_27525_27552 = state_27515__$1;(statearr_27525_27552[(1)] = (12));
} else
{var statearr_27526_27553 = state_27515__$1;(statearr_27526_27553[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27516 === (3)))
{var inst_27513 = (state_27515[(2)]);var state_27515__$1 = state_27515;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27515__$1,inst_27513);
} else
{if((state_val_27516 === (12)))
{var inst_27475 = (state_27515[(7)]);var inst_27503 = cljs.core.vec.call(null,inst_27475);var state_27515__$1 = state_27515;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27515__$1,(15),out,inst_27503);
} else
{if((state_val_27516 === (2)))
{var state_27515__$1 = state_27515;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27515__$1,(4),ch);
} else
{if((state_val_27516 === (11)))
{var inst_27479 = (state_27515[(9)]);var inst_27483 = (state_27515[(10)]);var inst_27493 = (state_27515[(2)]);var inst_27494 = [];var inst_27495 = inst_27494.push(inst_27479);var inst_27475 = inst_27494;var inst_27476 = inst_27483;var state_27515__$1 = (function (){var statearr_27527 = state_27515;(statearr_27527[(7)] = inst_27475);
(statearr_27527[(11)] = inst_27493);
(statearr_27527[(8)] = inst_27476);
(statearr_27527[(12)] = inst_27495);
return statearr_27527;
})();var statearr_27528_27554 = state_27515__$1;(statearr_27528_27554[(2)] = null);
(statearr_27528_27554[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27516 === (9)))
{var inst_27475 = (state_27515[(7)]);var inst_27491 = cljs.core.vec.call(null,inst_27475);var state_27515__$1 = state_27515;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27515__$1,(11),out,inst_27491);
} else
{if((state_val_27516 === (5)))
{var inst_27476 = (state_27515[(8)]);var inst_27479 = (state_27515[(9)]);var inst_27483 = (state_27515[(10)]);var inst_27483__$1 = f.call(null,inst_27479);var inst_27484 = cljs.core._EQ_.call(null,inst_27483__$1,inst_27476);var inst_27485 = cljs.core.keyword_identical_QMARK_.call(null,inst_27476,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_27486 = (inst_27484) || (inst_27485);var state_27515__$1 = (function (){var statearr_27529 = state_27515;(statearr_27529[(10)] = inst_27483__$1);
return statearr_27529;
})();if(cljs.core.truth_(inst_27486))
{var statearr_27530_27555 = state_27515__$1;(statearr_27530_27555[(1)] = (8));
} else
{var statearr_27531_27556 = state_27515__$1;(statearr_27531_27556[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27516 === (14)))
{var inst_27508 = (state_27515[(2)]);var inst_27509 = cljs.core.async.close_BANG_.call(null,out);var state_27515__$1 = (function (){var statearr_27533 = state_27515;(statearr_27533[(13)] = inst_27508);
return statearr_27533;
})();var statearr_27534_27557 = state_27515__$1;(statearr_27534_27557[(2)] = inst_27509);
(statearr_27534_27557[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27516 === (10)))
{var inst_27498 = (state_27515[(2)]);var state_27515__$1 = state_27515;var statearr_27535_27558 = state_27515__$1;(statearr_27535_27558[(2)] = inst_27498);
(statearr_27535_27558[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27516 === (8)))
{var inst_27475 = (state_27515[(7)]);var inst_27479 = (state_27515[(9)]);var inst_27483 = (state_27515[(10)]);var inst_27488 = inst_27475.push(inst_27479);var tmp27532 = inst_27475;var inst_27475__$1 = tmp27532;var inst_27476 = inst_27483;var state_27515__$1 = (function (){var statearr_27536 = state_27515;(statearr_27536[(7)] = inst_27475__$1);
(statearr_27536[(14)] = inst_27488);
(statearr_27536[(8)] = inst_27476);
return statearr_27536;
})();var statearr_27537_27559 = state_27515__$1;(statearr_27537_27559[(2)] = null);
(statearr_27537_27559[(1)] = (2));
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
});})(c__11517__auto___27545,out))
;return ((function (switch__11461__auto__,c__11517__auto___27545,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_27541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27541[(0)] = state_machine__11462__auto__);
(statearr_27541[(1)] = (1));
return statearr_27541;
});
var state_machine__11462__auto____1 = (function (state_27515){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_27515);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e27542){if((e27542 instanceof Object))
{var ex__11465__auto__ = e27542;var statearr_27543_27560 = state_27515;(statearr_27543_27560[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27515);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27542;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27561 = state_27515;
state_27515 = G__27561;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_27515){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_27515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___27545,out))
})();var state__11519__auto__ = (function (){var statearr_27544 = f__11518__auto__.call(null);(statearr_27544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___27545);
return statearr_27544;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___27545,out))
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
