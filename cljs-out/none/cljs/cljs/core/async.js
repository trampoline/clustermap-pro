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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t35332 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35332 = (function (f,fn_handler,meta35333){
this.f = f;
this.fn_handler = fn_handler;
this.meta35333 = meta35333;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35332.cljs$lang$type = true;
cljs.core.async.t35332.cljs$lang$ctorStr = "cljs.core.async/t35332";
cljs.core.async.t35332.cljs$lang$ctorPrWriter = (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"cljs.core.async/t35332");
});
cljs.core.async.t35332.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35332.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t35332.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t35332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35334){var self__ = this;
var _35334__$1 = this;return self__.meta35333;
});
cljs.core.async.t35332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35334,meta35333__$1){var self__ = this;
var _35334__$1 = this;return (new cljs.core.async.t35332(self__.f,self__.fn_handler,meta35333__$1));
});
cljs.core.async.__GT_t35332 = (function __GT_t35332(f__$1,fn_handler__$1,meta35333){return (new cljs.core.async.t35332(f__$1,fn_handler__$1,meta35333));
});
}
return (new cljs.core.async.t35332(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__35336 = buff;if(G__35336)
{var bit__12215__auto__ = null;if(cljs.core.truth_((function (){var or__11552__auto__ = bit__12215__auto__;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return G__35336.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__35336.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__35336);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__35336);
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
{var val_35337 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_35337);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_35337,ret){
return (function (){return fn1.call(null,val_35337);
});})(val_35337,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__12421__auto___35338 = n;var x_35339 = (0);while(true){
if((x_35339 < n__12421__auto___35338))
{(a[x_35339] = (0));
{
var G__35340 = (x_35339 + (1));
x_35339 = G__35340;
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
var G__35341 = (i + (1));
i = G__35341;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t35345 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35345 = (function (flag,alt_flag,meta35346){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta35346 = meta35346;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35345.cljs$lang$type = true;
cljs.core.async.t35345.cljs$lang$ctorStr = "cljs.core.async/t35345";
cljs.core.async.t35345.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"cljs.core.async/t35345");
});})(flag))
;
cljs.core.async.t35345.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35345.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t35345.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t35345.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35347){var self__ = this;
var _35347__$1 = this;return self__.meta35346;
});})(flag))
;
cljs.core.async.t35345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35347,meta35346__$1){var self__ = this;
var _35347__$1 = this;return (new cljs.core.async.t35345(self__.flag,self__.alt_flag,meta35346__$1));
});})(flag))
;
cljs.core.async.__GT_t35345 = ((function (flag){
return (function __GT_t35345(flag__$1,alt_flag__$1,meta35346){return (new cljs.core.async.t35345(flag__$1,alt_flag__$1,meta35346));
});})(flag))
;
}
return (new cljs.core.async.t35345(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t35351 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35351 = (function (cb,flag,alt_handler,meta35352){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta35352 = meta35352;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35351.cljs$lang$type = true;
cljs.core.async.t35351.cljs$lang$ctorStr = "cljs.core.async/t35351";
cljs.core.async.t35351.cljs$lang$ctorPrWriter = (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"cljs.core.async/t35351");
});
cljs.core.async.t35351.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35351.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t35351.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t35351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35353){var self__ = this;
var _35353__$1 = this;return self__.meta35352;
});
cljs.core.async.t35351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35353,meta35352__$1){var self__ = this;
var _35353__$1 = this;return (new cljs.core.async.t35351(self__.cb,self__.flag,self__.alt_handler,meta35352__$1));
});
cljs.core.async.__GT_t35351 = (function __GT_t35351(cb__$1,flag__$1,alt_handler__$1,meta35352){return (new cljs.core.async.t35351(cb__$1,flag__$1,alt_handler__$1,meta35352));
});
}
return (new cljs.core.async.t35351(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35354_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35354_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35355_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35355_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__11552__auto__ = wport;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__35356 = (i + (1));
i = G__35356;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__11552__auto__ = ret;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__11540__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__11540__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__11540__auto__;
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
var alts_BANG___delegate = function (ports,p__35357){var map__35359 = p__35357;var map__35359__$1 = ((cljs.core.seq_QMARK_.call(null,map__35359))?cljs.core.apply.call(null,cljs.core.hash_map,map__35359):map__35359);var opts = map__35359__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__35357 = null;if (arguments.length > 1) {
  p__35357 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__35357);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__35360){
var ports = cljs.core.first(arglist__35360);
var p__35357 = cljs.core.rest(arglist__35360);
return alts_BANG___delegate(ports,p__35357);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__16733__auto___35455 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto___35455){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto___35455){
return (function (state_35431){var state_val_35432 = (state_35431[(1)]);if((state_val_35432 === (7)))
{var inst_35427 = (state_35431[(2)]);var state_35431__$1 = state_35431;var statearr_35433_35456 = state_35431__$1;(statearr_35433_35456[(2)] = inst_35427);
(statearr_35433_35456[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35432 === (1)))
{var state_35431__$1 = state_35431;var statearr_35434_35457 = state_35431__$1;(statearr_35434_35457[(2)] = null);
(statearr_35434_35457[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35432 === (4)))
{var inst_35410 = (state_35431[(7)]);var inst_35410__$1 = (state_35431[(2)]);var inst_35411 = (inst_35410__$1 == null);var state_35431__$1 = (function (){var statearr_35435 = state_35431;(statearr_35435[(7)] = inst_35410__$1);
return statearr_35435;
})();if(cljs.core.truth_(inst_35411))
{var statearr_35436_35458 = state_35431__$1;(statearr_35436_35458[(1)] = (5));
} else
{var statearr_35437_35459 = state_35431__$1;(statearr_35437_35459[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35432 === (13)))
{var state_35431__$1 = state_35431;var statearr_35438_35460 = state_35431__$1;(statearr_35438_35460[(2)] = null);
(statearr_35438_35460[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35432 === (6)))
{var inst_35410 = (state_35431[(7)]);var state_35431__$1 = state_35431;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35431__$1,(11),to,inst_35410);
} else
{if((state_val_35432 === (3)))
{var inst_35429 = (state_35431[(2)]);var state_35431__$1 = state_35431;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35431__$1,inst_35429);
} else
{if((state_val_35432 === (12)))
{var state_35431__$1 = state_35431;var statearr_35439_35461 = state_35431__$1;(statearr_35439_35461[(2)] = null);
(statearr_35439_35461[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35432 === (2)))
{var state_35431__$1 = state_35431;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35431__$1,(4),from);
} else
{if((state_val_35432 === (11)))
{var inst_35420 = (state_35431[(2)]);var state_35431__$1 = state_35431;if(cljs.core.truth_(inst_35420))
{var statearr_35440_35462 = state_35431__$1;(statearr_35440_35462[(1)] = (12));
} else
{var statearr_35441_35463 = state_35431__$1;(statearr_35441_35463[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35432 === (9)))
{var state_35431__$1 = state_35431;var statearr_35442_35464 = state_35431__$1;(statearr_35442_35464[(2)] = null);
(statearr_35442_35464[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35432 === (5)))
{var state_35431__$1 = state_35431;if(cljs.core.truth_(close_QMARK_))
{var statearr_35443_35465 = state_35431__$1;(statearr_35443_35465[(1)] = (8));
} else
{var statearr_35444_35466 = state_35431__$1;(statearr_35444_35466[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35432 === (14)))
{var inst_35425 = (state_35431[(2)]);var state_35431__$1 = state_35431;var statearr_35445_35467 = state_35431__$1;(statearr_35445_35467[(2)] = inst_35425);
(statearr_35445_35467[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35432 === (10)))
{var inst_35417 = (state_35431[(2)]);var state_35431__$1 = state_35431;var statearr_35446_35468 = state_35431__$1;(statearr_35446_35468[(2)] = inst_35417);
(statearr_35446_35468[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35432 === (8)))
{var inst_35414 = cljs.core.async.close_BANG_.call(null,to);var state_35431__$1 = state_35431;var statearr_35447_35469 = state_35431__$1;(statearr_35447_35469[(2)] = inst_35414);
(statearr_35447_35469[(1)] = (10));
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
});})(c__16733__auto___35455))
;return ((function (switch__16718__auto__,c__16733__auto___35455){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_35451 = [null,null,null,null,null,null,null,null];(statearr_35451[(0)] = state_machine__16719__auto__);
(statearr_35451[(1)] = (1));
return statearr_35451;
});
var state_machine__16719__auto____1 = (function (state_35431){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_35431);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e35452){if((e35452 instanceof Object))
{var ex__16722__auto__ = e35452;var statearr_35453_35470 = state_35431;(statearr_35453_35470[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35431);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35452;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35471 = state_35431;
state_35431 = G__35471;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_35431){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_35431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto___35455))
})();var state__16735__auto__ = (function (){var statearr_35454 = f__16734__auto__.call(null);(statearr_35454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto___35455);
return statearr_35454;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto___35455))
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
return (function (p__35655){var vec__35656 = p__35655;var v = cljs.core.nth.call(null,vec__35656,(0),null);var p = cljs.core.nth.call(null,vec__35656,(1),null);var job = vec__35656;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__16733__auto___35838 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto___35838,res,vec__35656,v,p,job,jobs,results){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto___35838,res,vec__35656,v,p,job,jobs,results){
return (function (state_35661){var state_val_35662 = (state_35661[(1)]);if((state_val_35662 === (2)))
{var inst_35658 = (state_35661[(2)]);var inst_35659 = cljs.core.async.close_BANG_.call(null,res);var state_35661__$1 = (function (){var statearr_35663 = state_35661;(statearr_35663[(7)] = inst_35658);
return statearr_35663;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35661__$1,inst_35659);
} else
{if((state_val_35662 === (1)))
{var state_35661__$1 = state_35661;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35661__$1,(2),res,v);
} else
{return null;
}
}
});})(c__16733__auto___35838,res,vec__35656,v,p,job,jobs,results))
;return ((function (switch__16718__auto__,c__16733__auto___35838,res,vec__35656,v,p,job,jobs,results){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_35667 = [null,null,null,null,null,null,null,null];(statearr_35667[(0)] = state_machine__16719__auto__);
(statearr_35667[(1)] = (1));
return statearr_35667;
});
var state_machine__16719__auto____1 = (function (state_35661){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_35661);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e35668){if((e35668 instanceof Object))
{var ex__16722__auto__ = e35668;var statearr_35669_35839 = state_35661;(statearr_35669_35839[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35661);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35668;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35840 = state_35661;
state_35661 = G__35840;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_35661){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_35661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto___35838,res,vec__35656,v,p,job,jobs,results))
})();var state__16735__auto__ = (function (){var statearr_35670 = f__16734__auto__.call(null);(statearr_35670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto___35838);
return statearr_35670;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto___35838,res,vec__35656,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__35671){var vec__35672 = p__35671;var v = cljs.core.nth.call(null,vec__35672,(0),null);var p = cljs.core.nth.call(null,vec__35672,(1),null);var job = vec__35672;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__12421__auto___35841 = n;var __35842 = (0);while(true){
if((__35842 < n__12421__auto___35841))
{var G__35673_35843 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__35673_35843) {
case "async":
var c__16733__auto___35845 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__35842,c__16733__auto___35845,G__35673_35843,n__12421__auto___35841,jobs,results,process,async){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (__35842,c__16733__auto___35845,G__35673_35843,n__12421__auto___35841,jobs,results,process,async){
return (function (state_35686){var state_val_35687 = (state_35686[(1)]);if((state_val_35687 === (7)))
{var inst_35682 = (state_35686[(2)]);var state_35686__$1 = state_35686;var statearr_35688_35846 = state_35686__$1;(statearr_35688_35846[(2)] = inst_35682);
(statearr_35688_35846[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35687 === (6)))
{var state_35686__$1 = state_35686;var statearr_35689_35847 = state_35686__$1;(statearr_35689_35847[(2)] = null);
(statearr_35689_35847[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35687 === (5)))
{var state_35686__$1 = state_35686;var statearr_35690_35848 = state_35686__$1;(statearr_35690_35848[(2)] = null);
(statearr_35690_35848[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35687 === (4)))
{var inst_35676 = (state_35686[(2)]);var inst_35677 = async.call(null,inst_35676);var state_35686__$1 = state_35686;if(cljs.core.truth_(inst_35677))
{var statearr_35691_35849 = state_35686__$1;(statearr_35691_35849[(1)] = (5));
} else
{var statearr_35692_35850 = state_35686__$1;(statearr_35692_35850[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35687 === (3)))
{var inst_35684 = (state_35686[(2)]);var state_35686__$1 = state_35686;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35686__$1,inst_35684);
} else
{if((state_val_35687 === (2)))
{var state_35686__$1 = state_35686;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35686__$1,(4),jobs);
} else
{if((state_val_35687 === (1)))
{var state_35686__$1 = state_35686;var statearr_35693_35851 = state_35686__$1;(statearr_35693_35851[(2)] = null);
(statearr_35693_35851[(1)] = (2));
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
});})(__35842,c__16733__auto___35845,G__35673_35843,n__12421__auto___35841,jobs,results,process,async))
;return ((function (__35842,switch__16718__auto__,c__16733__auto___35845,G__35673_35843,n__12421__auto___35841,jobs,results,process,async){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_35697 = [null,null,null,null,null,null,null];(statearr_35697[(0)] = state_machine__16719__auto__);
(statearr_35697[(1)] = (1));
return statearr_35697;
});
var state_machine__16719__auto____1 = (function (state_35686){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_35686);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e35698){if((e35698 instanceof Object))
{var ex__16722__auto__ = e35698;var statearr_35699_35852 = state_35686;(statearr_35699_35852[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35686);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35698;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35853 = state_35686;
state_35686 = G__35853;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_35686){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_35686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(__35842,switch__16718__auto__,c__16733__auto___35845,G__35673_35843,n__12421__auto___35841,jobs,results,process,async))
})();var state__16735__auto__ = (function (){var statearr_35700 = f__16734__auto__.call(null);(statearr_35700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto___35845);
return statearr_35700;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(__35842,c__16733__auto___35845,G__35673_35843,n__12421__auto___35841,jobs,results,process,async))
);

break;
case "compute":
var c__16733__auto___35854 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__35842,c__16733__auto___35854,G__35673_35843,n__12421__auto___35841,jobs,results,process,async){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (__35842,c__16733__auto___35854,G__35673_35843,n__12421__auto___35841,jobs,results,process,async){
return (function (state_35713){var state_val_35714 = (state_35713[(1)]);if((state_val_35714 === (7)))
{var inst_35709 = (state_35713[(2)]);var state_35713__$1 = state_35713;var statearr_35715_35855 = state_35713__$1;(statearr_35715_35855[(2)] = inst_35709);
(statearr_35715_35855[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35714 === (6)))
{var state_35713__$1 = state_35713;var statearr_35716_35856 = state_35713__$1;(statearr_35716_35856[(2)] = null);
(statearr_35716_35856[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35714 === (5)))
{var state_35713__$1 = state_35713;var statearr_35717_35857 = state_35713__$1;(statearr_35717_35857[(2)] = null);
(statearr_35717_35857[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35714 === (4)))
{var inst_35703 = (state_35713[(2)]);var inst_35704 = process.call(null,inst_35703);var state_35713__$1 = state_35713;if(cljs.core.truth_(inst_35704))
{var statearr_35718_35858 = state_35713__$1;(statearr_35718_35858[(1)] = (5));
} else
{var statearr_35719_35859 = state_35713__$1;(statearr_35719_35859[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35714 === (3)))
{var inst_35711 = (state_35713[(2)]);var state_35713__$1 = state_35713;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35713__$1,inst_35711);
} else
{if((state_val_35714 === (2)))
{var state_35713__$1 = state_35713;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35713__$1,(4),jobs);
} else
{if((state_val_35714 === (1)))
{var state_35713__$1 = state_35713;var statearr_35720_35860 = state_35713__$1;(statearr_35720_35860[(2)] = null);
(statearr_35720_35860[(1)] = (2));
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
});})(__35842,c__16733__auto___35854,G__35673_35843,n__12421__auto___35841,jobs,results,process,async))
;return ((function (__35842,switch__16718__auto__,c__16733__auto___35854,G__35673_35843,n__12421__auto___35841,jobs,results,process,async){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_35724 = [null,null,null,null,null,null,null];(statearr_35724[(0)] = state_machine__16719__auto__);
(statearr_35724[(1)] = (1));
return statearr_35724;
});
var state_machine__16719__auto____1 = (function (state_35713){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_35713);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e35725){if((e35725 instanceof Object))
{var ex__16722__auto__ = e35725;var statearr_35726_35861 = state_35713;(statearr_35726_35861[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35713);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35725;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35862 = state_35713;
state_35713 = G__35862;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_35713){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_35713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(__35842,switch__16718__auto__,c__16733__auto___35854,G__35673_35843,n__12421__auto___35841,jobs,results,process,async))
})();var state__16735__auto__ = (function (){var statearr_35727 = f__16734__auto__.call(null);(statearr_35727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto___35854);
return statearr_35727;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(__35842,c__16733__auto___35854,G__35673_35843,n__12421__auto___35841,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__35863 = (__35842 + (1));
__35842 = G__35863;
continue;
}
} else
{}
break;
}
var c__16733__auto___35864 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto___35864,jobs,results,process,async){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto___35864,jobs,results,process,async){
return (function (state_35749){var state_val_35750 = (state_35749[(1)]);if((state_val_35750 === (9)))
{var inst_35742 = (state_35749[(2)]);var state_35749__$1 = (function (){var statearr_35751 = state_35749;(statearr_35751[(7)] = inst_35742);
return statearr_35751;
})();var statearr_35752_35865 = state_35749__$1;(statearr_35752_35865[(2)] = null);
(statearr_35752_35865[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35750 === (8)))
{var inst_35735 = (state_35749[(8)]);var inst_35740 = (state_35749[(2)]);var state_35749__$1 = (function (){var statearr_35753 = state_35749;(statearr_35753[(9)] = inst_35740);
return statearr_35753;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35749__$1,(9),results,inst_35735);
} else
{if((state_val_35750 === (7)))
{var inst_35745 = (state_35749[(2)]);var state_35749__$1 = state_35749;var statearr_35754_35866 = state_35749__$1;(statearr_35754_35866[(2)] = inst_35745);
(statearr_35754_35866[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35750 === (6)))
{var inst_35735 = (state_35749[(8)]);var inst_35730 = (state_35749[(10)]);var inst_35735__$1 = cljs.core.async.chan.call(null,(1));var inst_35736 = cljs.core.PersistentVector.EMPTY_NODE;var inst_35737 = [inst_35730,inst_35735__$1];var inst_35738 = (new cljs.core.PersistentVector(null,2,(5),inst_35736,inst_35737,null));var state_35749__$1 = (function (){var statearr_35755 = state_35749;(statearr_35755[(8)] = inst_35735__$1);
return statearr_35755;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35749__$1,(8),jobs,inst_35738);
} else
{if((state_val_35750 === (5)))
{var inst_35733 = cljs.core.async.close_BANG_.call(null,jobs);var state_35749__$1 = state_35749;var statearr_35756_35867 = state_35749__$1;(statearr_35756_35867[(2)] = inst_35733);
(statearr_35756_35867[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35750 === (4)))
{var inst_35730 = (state_35749[(10)]);var inst_35730__$1 = (state_35749[(2)]);var inst_35731 = (inst_35730__$1 == null);var state_35749__$1 = (function (){var statearr_35757 = state_35749;(statearr_35757[(10)] = inst_35730__$1);
return statearr_35757;
})();if(cljs.core.truth_(inst_35731))
{var statearr_35758_35868 = state_35749__$1;(statearr_35758_35868[(1)] = (5));
} else
{var statearr_35759_35869 = state_35749__$1;(statearr_35759_35869[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35750 === (3)))
{var inst_35747 = (state_35749[(2)]);var state_35749__$1 = state_35749;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35749__$1,inst_35747);
} else
{if((state_val_35750 === (2)))
{var state_35749__$1 = state_35749;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35749__$1,(4),from);
} else
{if((state_val_35750 === (1)))
{var state_35749__$1 = state_35749;var statearr_35760_35870 = state_35749__$1;(statearr_35760_35870[(2)] = null);
(statearr_35760_35870[(1)] = (2));
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
});})(c__16733__auto___35864,jobs,results,process,async))
;return ((function (switch__16718__auto__,c__16733__auto___35864,jobs,results,process,async){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_35764 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35764[(0)] = state_machine__16719__auto__);
(statearr_35764[(1)] = (1));
return statearr_35764;
});
var state_machine__16719__auto____1 = (function (state_35749){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_35749);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e35765){if((e35765 instanceof Object))
{var ex__16722__auto__ = e35765;var statearr_35766_35871 = state_35749;(statearr_35766_35871[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35749);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35765;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35872 = state_35749;
state_35749 = G__35872;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_35749){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_35749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto___35864,jobs,results,process,async))
})();var state__16735__auto__ = (function (){var statearr_35767 = f__16734__auto__.call(null);(statearr_35767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto___35864);
return statearr_35767;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto___35864,jobs,results,process,async))
);
var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__,jobs,results,process,async){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__,jobs,results,process,async){
return (function (state_35805){var state_val_35806 = (state_35805[(1)]);if((state_val_35806 === (7)))
{var inst_35801 = (state_35805[(2)]);var state_35805__$1 = state_35805;var statearr_35807_35873 = state_35805__$1;(statearr_35807_35873[(2)] = inst_35801);
(statearr_35807_35873[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35806 === (20)))
{var state_35805__$1 = state_35805;var statearr_35808_35874 = state_35805__$1;(statearr_35808_35874[(2)] = null);
(statearr_35808_35874[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35806 === (1)))
{var state_35805__$1 = state_35805;var statearr_35809_35875 = state_35805__$1;(statearr_35809_35875[(2)] = null);
(statearr_35809_35875[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35806 === (4)))
{var inst_35770 = (state_35805[(7)]);var inst_35770__$1 = (state_35805[(2)]);var inst_35771 = (inst_35770__$1 == null);var state_35805__$1 = (function (){var statearr_35810 = state_35805;(statearr_35810[(7)] = inst_35770__$1);
return statearr_35810;
})();if(cljs.core.truth_(inst_35771))
{var statearr_35811_35876 = state_35805__$1;(statearr_35811_35876[(1)] = (5));
} else
{var statearr_35812_35877 = state_35805__$1;(statearr_35812_35877[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35806 === (15)))
{var inst_35783 = (state_35805[(8)]);var state_35805__$1 = state_35805;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35805__$1,(18),to,inst_35783);
} else
{if((state_val_35806 === (21)))
{var inst_35796 = (state_35805[(2)]);var state_35805__$1 = state_35805;var statearr_35813_35878 = state_35805__$1;(statearr_35813_35878[(2)] = inst_35796);
(statearr_35813_35878[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35806 === (13)))
{var inst_35798 = (state_35805[(2)]);var state_35805__$1 = (function (){var statearr_35814 = state_35805;(statearr_35814[(9)] = inst_35798);
return statearr_35814;
})();var statearr_35815_35879 = state_35805__$1;(statearr_35815_35879[(2)] = null);
(statearr_35815_35879[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35806 === (6)))
{var inst_35770 = (state_35805[(7)]);var state_35805__$1 = state_35805;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35805__$1,(11),inst_35770);
} else
{if((state_val_35806 === (17)))
{var inst_35791 = (state_35805[(2)]);var state_35805__$1 = state_35805;if(cljs.core.truth_(inst_35791))
{var statearr_35816_35880 = state_35805__$1;(statearr_35816_35880[(1)] = (19));
} else
{var statearr_35817_35881 = state_35805__$1;(statearr_35817_35881[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35806 === (3)))
{var inst_35803 = (state_35805[(2)]);var state_35805__$1 = state_35805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35805__$1,inst_35803);
} else
{if((state_val_35806 === (12)))
{var inst_35780 = (state_35805[(10)]);var state_35805__$1 = state_35805;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35805__$1,(14),inst_35780);
} else
{if((state_val_35806 === (2)))
{var state_35805__$1 = state_35805;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35805__$1,(4),results);
} else
{if((state_val_35806 === (19)))
{var state_35805__$1 = state_35805;var statearr_35818_35882 = state_35805__$1;(statearr_35818_35882[(2)] = null);
(statearr_35818_35882[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35806 === (11)))
{var inst_35780 = (state_35805[(2)]);var state_35805__$1 = (function (){var statearr_35819 = state_35805;(statearr_35819[(10)] = inst_35780);
return statearr_35819;
})();var statearr_35820_35883 = state_35805__$1;(statearr_35820_35883[(2)] = null);
(statearr_35820_35883[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35806 === (9)))
{var state_35805__$1 = state_35805;var statearr_35821_35884 = state_35805__$1;(statearr_35821_35884[(2)] = null);
(statearr_35821_35884[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35806 === (5)))
{var state_35805__$1 = state_35805;if(cljs.core.truth_(close_QMARK_))
{var statearr_35822_35885 = state_35805__$1;(statearr_35822_35885[(1)] = (8));
} else
{var statearr_35823_35886 = state_35805__$1;(statearr_35823_35886[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35806 === (14)))
{var inst_35783 = (state_35805[(8)]);var inst_35785 = (state_35805[(11)]);var inst_35783__$1 = (state_35805[(2)]);var inst_35784 = (inst_35783__$1 == null);var inst_35785__$1 = cljs.core.not.call(null,inst_35784);var state_35805__$1 = (function (){var statearr_35824 = state_35805;(statearr_35824[(8)] = inst_35783__$1);
(statearr_35824[(11)] = inst_35785__$1);
return statearr_35824;
})();if(inst_35785__$1)
{var statearr_35825_35887 = state_35805__$1;(statearr_35825_35887[(1)] = (15));
} else
{var statearr_35826_35888 = state_35805__$1;(statearr_35826_35888[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35806 === (16)))
{var inst_35785 = (state_35805[(11)]);var state_35805__$1 = state_35805;var statearr_35827_35889 = state_35805__$1;(statearr_35827_35889[(2)] = inst_35785);
(statearr_35827_35889[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35806 === (10)))
{var inst_35777 = (state_35805[(2)]);var state_35805__$1 = state_35805;var statearr_35828_35890 = state_35805__$1;(statearr_35828_35890[(2)] = inst_35777);
(statearr_35828_35890[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35806 === (18)))
{var inst_35788 = (state_35805[(2)]);var state_35805__$1 = state_35805;var statearr_35829_35891 = state_35805__$1;(statearr_35829_35891[(2)] = inst_35788);
(statearr_35829_35891[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35806 === (8)))
{var inst_35774 = cljs.core.async.close_BANG_.call(null,to);var state_35805__$1 = state_35805;var statearr_35830_35892 = state_35805__$1;(statearr_35830_35892[(2)] = inst_35774);
(statearr_35830_35892[(1)] = (10));
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
});})(c__16733__auto__,jobs,results,process,async))
;return ((function (switch__16718__auto__,c__16733__auto__,jobs,results,process,async){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_35834 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35834[(0)] = state_machine__16719__auto__);
(statearr_35834[(1)] = (1));
return statearr_35834;
});
var state_machine__16719__auto____1 = (function (state_35805){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_35805);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e35835){if((e35835 instanceof Object))
{var ex__16722__auto__ = e35835;var statearr_35836_35893 = state_35805;(statearr_35836_35893[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35805);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35835;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35894 = state_35805;
state_35805 = G__35894;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_35805){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_35805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__,jobs,results,process,async))
})();var state__16735__auto__ = (function (){var statearr_35837 = f__16734__auto__.call(null);(statearr_35837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_35837;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__,jobs,results,process,async))
);
return c__16733__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__16733__auto___35995 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto___35995,tc,fc){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto___35995,tc,fc){
return (function (state_35970){var state_val_35971 = (state_35970[(1)]);if((state_val_35971 === (7)))
{var inst_35966 = (state_35970[(2)]);var state_35970__$1 = state_35970;var statearr_35972_35996 = state_35970__$1;(statearr_35972_35996[(2)] = inst_35966);
(statearr_35972_35996[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35971 === (1)))
{var state_35970__$1 = state_35970;var statearr_35973_35997 = state_35970__$1;(statearr_35973_35997[(2)] = null);
(statearr_35973_35997[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35971 === (4)))
{var inst_35947 = (state_35970[(7)]);var inst_35947__$1 = (state_35970[(2)]);var inst_35948 = (inst_35947__$1 == null);var state_35970__$1 = (function (){var statearr_35974 = state_35970;(statearr_35974[(7)] = inst_35947__$1);
return statearr_35974;
})();if(cljs.core.truth_(inst_35948))
{var statearr_35975_35998 = state_35970__$1;(statearr_35975_35998[(1)] = (5));
} else
{var statearr_35976_35999 = state_35970__$1;(statearr_35976_35999[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35971 === (13)))
{var state_35970__$1 = state_35970;var statearr_35977_36000 = state_35970__$1;(statearr_35977_36000[(2)] = null);
(statearr_35977_36000[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35971 === (6)))
{var inst_35947 = (state_35970[(7)]);var inst_35953 = p.call(null,inst_35947);var state_35970__$1 = state_35970;if(cljs.core.truth_(inst_35953))
{var statearr_35978_36001 = state_35970__$1;(statearr_35978_36001[(1)] = (9));
} else
{var statearr_35979_36002 = state_35970__$1;(statearr_35979_36002[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35971 === (3)))
{var inst_35968 = (state_35970[(2)]);var state_35970__$1 = state_35970;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35970__$1,inst_35968);
} else
{if((state_val_35971 === (12)))
{var state_35970__$1 = state_35970;var statearr_35980_36003 = state_35970__$1;(statearr_35980_36003[(2)] = null);
(statearr_35980_36003[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35971 === (2)))
{var state_35970__$1 = state_35970;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35970__$1,(4),ch);
} else
{if((state_val_35971 === (11)))
{var inst_35947 = (state_35970[(7)]);var inst_35957 = (state_35970[(2)]);var state_35970__$1 = state_35970;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35970__$1,(8),inst_35957,inst_35947);
} else
{if((state_val_35971 === (9)))
{var state_35970__$1 = state_35970;var statearr_35981_36004 = state_35970__$1;(statearr_35981_36004[(2)] = tc);
(statearr_35981_36004[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35971 === (5)))
{var inst_35950 = cljs.core.async.close_BANG_.call(null,tc);var inst_35951 = cljs.core.async.close_BANG_.call(null,fc);var state_35970__$1 = (function (){var statearr_35982 = state_35970;(statearr_35982[(8)] = inst_35950);
return statearr_35982;
})();var statearr_35983_36005 = state_35970__$1;(statearr_35983_36005[(2)] = inst_35951);
(statearr_35983_36005[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35971 === (14)))
{var inst_35964 = (state_35970[(2)]);var state_35970__$1 = state_35970;var statearr_35984_36006 = state_35970__$1;(statearr_35984_36006[(2)] = inst_35964);
(statearr_35984_36006[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35971 === (10)))
{var state_35970__$1 = state_35970;var statearr_35985_36007 = state_35970__$1;(statearr_35985_36007[(2)] = fc);
(statearr_35985_36007[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35971 === (8)))
{var inst_35959 = (state_35970[(2)]);var state_35970__$1 = state_35970;if(cljs.core.truth_(inst_35959))
{var statearr_35986_36008 = state_35970__$1;(statearr_35986_36008[(1)] = (12));
} else
{var statearr_35987_36009 = state_35970__$1;(statearr_35987_36009[(1)] = (13));
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
});})(c__16733__auto___35995,tc,fc))
;return ((function (switch__16718__auto__,c__16733__auto___35995,tc,fc){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_35991 = [null,null,null,null,null,null,null,null,null];(statearr_35991[(0)] = state_machine__16719__auto__);
(statearr_35991[(1)] = (1));
return statearr_35991;
});
var state_machine__16719__auto____1 = (function (state_35970){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_35970);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e35992){if((e35992 instanceof Object))
{var ex__16722__auto__ = e35992;var statearr_35993_36010 = state_35970;(statearr_35993_36010[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35970);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35992;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36011 = state_35970;
state_35970 = G__36011;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_35970){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_35970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto___35995,tc,fc))
})();var state__16735__auto__ = (function (){var statearr_35994 = f__16734__auto__.call(null);(statearr_35994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto___35995);
return statearr_35994;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto___35995,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__){
return (function (state_36058){var state_val_36059 = (state_36058[(1)]);if((state_val_36059 === (7)))
{var inst_36054 = (state_36058[(2)]);var state_36058__$1 = state_36058;var statearr_36060_36076 = state_36058__$1;(statearr_36060_36076[(2)] = inst_36054);
(statearr_36060_36076[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36059 === (6)))
{var inst_36044 = (state_36058[(7)]);var inst_36047 = (state_36058[(8)]);var inst_36051 = f.call(null,inst_36044,inst_36047);var inst_36044__$1 = inst_36051;var state_36058__$1 = (function (){var statearr_36061 = state_36058;(statearr_36061[(7)] = inst_36044__$1);
return statearr_36061;
})();var statearr_36062_36077 = state_36058__$1;(statearr_36062_36077[(2)] = null);
(statearr_36062_36077[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36059 === (5)))
{var inst_36044 = (state_36058[(7)]);var state_36058__$1 = state_36058;var statearr_36063_36078 = state_36058__$1;(statearr_36063_36078[(2)] = inst_36044);
(statearr_36063_36078[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36059 === (4)))
{var inst_36047 = (state_36058[(8)]);var inst_36047__$1 = (state_36058[(2)]);var inst_36048 = (inst_36047__$1 == null);var state_36058__$1 = (function (){var statearr_36064 = state_36058;(statearr_36064[(8)] = inst_36047__$1);
return statearr_36064;
})();if(cljs.core.truth_(inst_36048))
{var statearr_36065_36079 = state_36058__$1;(statearr_36065_36079[(1)] = (5));
} else
{var statearr_36066_36080 = state_36058__$1;(statearr_36066_36080[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36059 === (3)))
{var inst_36056 = (state_36058[(2)]);var state_36058__$1 = state_36058;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36058__$1,inst_36056);
} else
{if((state_val_36059 === (2)))
{var state_36058__$1 = state_36058;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36058__$1,(4),ch);
} else
{if((state_val_36059 === (1)))
{var inst_36044 = init;var state_36058__$1 = (function (){var statearr_36067 = state_36058;(statearr_36067[(7)] = inst_36044);
return statearr_36067;
})();var statearr_36068_36081 = state_36058__$1;(statearr_36068_36081[(2)] = null);
(statearr_36068_36081[(1)] = (2));
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
});})(c__16733__auto__))
;return ((function (switch__16718__auto__,c__16733__auto__){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_36072 = [null,null,null,null,null,null,null,null,null];(statearr_36072[(0)] = state_machine__16719__auto__);
(statearr_36072[(1)] = (1));
return statearr_36072;
});
var state_machine__16719__auto____1 = (function (state_36058){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_36058);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e36073){if((e36073 instanceof Object))
{var ex__16722__auto__ = e36073;var statearr_36074_36082 = state_36058;(statearr_36074_36082[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36058);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36073;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36083 = state_36058;
state_36058 = G__36083;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_36058){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_36058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__))
})();var state__16735__auto__ = (function (){var statearr_36075 = f__16734__auto__.call(null);(statearr_36075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_36075;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__))
);
return c__16733__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__){
return (function (state_36157){var state_val_36158 = (state_36157[(1)]);if((state_val_36158 === (7)))
{var inst_36139 = (state_36157[(2)]);var state_36157__$1 = state_36157;var statearr_36159_36182 = state_36157__$1;(statearr_36159_36182[(2)] = inst_36139);
(statearr_36159_36182[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36158 === (1)))
{var inst_36133 = cljs.core.seq.call(null,coll);var inst_36134 = inst_36133;var state_36157__$1 = (function (){var statearr_36160 = state_36157;(statearr_36160[(7)] = inst_36134);
return statearr_36160;
})();var statearr_36161_36183 = state_36157__$1;(statearr_36161_36183[(2)] = null);
(statearr_36161_36183[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36158 === (4)))
{var inst_36134 = (state_36157[(7)]);var inst_36137 = cljs.core.first.call(null,inst_36134);var state_36157__$1 = state_36157;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36157__$1,(7),ch,inst_36137);
} else
{if((state_val_36158 === (13)))
{var inst_36151 = (state_36157[(2)]);var state_36157__$1 = state_36157;var statearr_36162_36184 = state_36157__$1;(statearr_36162_36184[(2)] = inst_36151);
(statearr_36162_36184[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36158 === (6)))
{var inst_36142 = (state_36157[(2)]);var state_36157__$1 = state_36157;if(cljs.core.truth_(inst_36142))
{var statearr_36163_36185 = state_36157__$1;(statearr_36163_36185[(1)] = (8));
} else
{var statearr_36164_36186 = state_36157__$1;(statearr_36164_36186[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36158 === (3)))
{var inst_36155 = (state_36157[(2)]);var state_36157__$1 = state_36157;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36157__$1,inst_36155);
} else
{if((state_val_36158 === (12)))
{var state_36157__$1 = state_36157;var statearr_36165_36187 = state_36157__$1;(statearr_36165_36187[(2)] = null);
(statearr_36165_36187[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36158 === (2)))
{var inst_36134 = (state_36157[(7)]);var state_36157__$1 = state_36157;if(cljs.core.truth_(inst_36134))
{var statearr_36166_36188 = state_36157__$1;(statearr_36166_36188[(1)] = (4));
} else
{var statearr_36167_36189 = state_36157__$1;(statearr_36167_36189[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36158 === (11)))
{var inst_36148 = cljs.core.async.close_BANG_.call(null,ch);var state_36157__$1 = state_36157;var statearr_36168_36190 = state_36157__$1;(statearr_36168_36190[(2)] = inst_36148);
(statearr_36168_36190[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36158 === (9)))
{var state_36157__$1 = state_36157;if(cljs.core.truth_(close_QMARK_))
{var statearr_36169_36191 = state_36157__$1;(statearr_36169_36191[(1)] = (11));
} else
{var statearr_36170_36192 = state_36157__$1;(statearr_36170_36192[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36158 === (5)))
{var inst_36134 = (state_36157[(7)]);var state_36157__$1 = state_36157;var statearr_36171_36193 = state_36157__$1;(statearr_36171_36193[(2)] = inst_36134);
(statearr_36171_36193[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36158 === (10)))
{var inst_36153 = (state_36157[(2)]);var state_36157__$1 = state_36157;var statearr_36172_36194 = state_36157__$1;(statearr_36172_36194[(2)] = inst_36153);
(statearr_36172_36194[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36158 === (8)))
{var inst_36134 = (state_36157[(7)]);var inst_36144 = cljs.core.next.call(null,inst_36134);var inst_36134__$1 = inst_36144;var state_36157__$1 = (function (){var statearr_36173 = state_36157;(statearr_36173[(7)] = inst_36134__$1);
return statearr_36173;
})();var statearr_36174_36195 = state_36157__$1;(statearr_36174_36195[(2)] = null);
(statearr_36174_36195[(1)] = (2));
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
});})(c__16733__auto__))
;return ((function (switch__16718__auto__,c__16733__auto__){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_36178 = [null,null,null,null,null,null,null,null];(statearr_36178[(0)] = state_machine__16719__auto__);
(statearr_36178[(1)] = (1));
return statearr_36178;
});
var state_machine__16719__auto____1 = (function (state_36157){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_36157);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e36179){if((e36179 instanceof Object))
{var ex__16722__auto__ = e36179;var statearr_36180_36196 = state_36157;(statearr_36180_36196[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36157);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36179;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36197 = state_36157;
state_36157 = G__36197;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_36157){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_36157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__))
})();var state__16735__auto__ = (function (){var statearr_36181 = f__16734__auto__.call(null);(statearr_36181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_36181;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__))
);
return c__16733__auto__;
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
cljs.core.async.Mux = (function (){var obj36199 = {};return obj36199;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__11540__auto__ = _;if(and__11540__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__11540__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__12188__auto__ = (((_ == null))?null:_);return (function (){var or__11552__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj36201 = {};return obj36201;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__11540__auto__ = m;if(and__11540__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__11540__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__12188__auto__ = (((m == null))?null:m);return (function (){var or__11552__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__11540__auto__ = m;if(and__11540__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__11540__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__12188__auto__ = (((m == null))?null:m);return (function (){var or__11552__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__11540__auto__ = m;if(and__11540__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__11540__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__12188__auto__ = (((m == null))?null:m);return (function (){var or__11552__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t36423 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36423 = (function (cs,ch,mult,meta36424){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta36424 = meta36424;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36423.cljs$lang$type = true;
cljs.core.async.t36423.cljs$lang$ctorStr = "cljs.core.async/t36423";
cljs.core.async.t36423.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"cljs.core.async/t36423");
});})(cs))
;
cljs.core.async.t36423.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t36423.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t36423.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t36423.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t36423.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36423.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t36423.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36425){var self__ = this;
var _36425__$1 = this;return self__.meta36424;
});})(cs))
;
cljs.core.async.t36423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36425,meta36424__$1){var self__ = this;
var _36425__$1 = this;return (new cljs.core.async.t36423(self__.cs,self__.ch,self__.mult,meta36424__$1));
});})(cs))
;
cljs.core.async.__GT_t36423 = ((function (cs){
return (function __GT_t36423(cs__$1,ch__$1,mult__$1,meta36424){return (new cljs.core.async.t36423(cs__$1,ch__$1,mult__$1,meta36424));
});})(cs))
;
}
return (new cljs.core.async.t36423(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__16733__auto___36644 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto___36644,cs,m,dchan,dctr,done){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto___36644,cs,m,dchan,dctr,done){
return (function (state_36556){var state_val_36557 = (state_36556[(1)]);if((state_val_36557 === (7)))
{var inst_36552 = (state_36556[(2)]);var state_36556__$1 = state_36556;var statearr_36558_36645 = state_36556__$1;(statearr_36558_36645[(2)] = inst_36552);
(statearr_36558_36645[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (20)))
{var inst_36457 = (state_36556[(7)]);var inst_36467 = cljs.core.first.call(null,inst_36457);var inst_36468 = cljs.core.nth.call(null,inst_36467,(0),null);var inst_36469 = cljs.core.nth.call(null,inst_36467,(1),null);var state_36556__$1 = (function (){var statearr_36559 = state_36556;(statearr_36559[(8)] = inst_36468);
return statearr_36559;
})();if(cljs.core.truth_(inst_36469))
{var statearr_36560_36646 = state_36556__$1;(statearr_36560_36646[(1)] = (22));
} else
{var statearr_36561_36647 = state_36556__$1;(statearr_36561_36647[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (27)))
{var inst_36499 = (state_36556[(9)]);var inst_36504 = (state_36556[(10)]);var inst_36428 = (state_36556[(11)]);var inst_36497 = (state_36556[(12)]);var inst_36504__$1 = cljs.core._nth.call(null,inst_36497,inst_36499);var inst_36505 = cljs.core.async.put_BANG_.call(null,inst_36504__$1,inst_36428,done);var state_36556__$1 = (function (){var statearr_36562 = state_36556;(statearr_36562[(10)] = inst_36504__$1);
return statearr_36562;
})();if(cljs.core.truth_(inst_36505))
{var statearr_36563_36648 = state_36556__$1;(statearr_36563_36648[(1)] = (30));
} else
{var statearr_36564_36649 = state_36556__$1;(statearr_36564_36649[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (1)))
{var state_36556__$1 = state_36556;var statearr_36565_36650 = state_36556__$1;(statearr_36565_36650[(2)] = null);
(statearr_36565_36650[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (24)))
{var inst_36457 = (state_36556[(7)]);var inst_36474 = (state_36556[(2)]);var inst_36475 = cljs.core.next.call(null,inst_36457);var inst_36437 = inst_36475;var inst_36438 = null;var inst_36439 = (0);var inst_36440 = (0);var state_36556__$1 = (function (){var statearr_36566 = state_36556;(statearr_36566[(13)] = inst_36440);
(statearr_36566[(14)] = inst_36438);
(statearr_36566[(15)] = inst_36439);
(statearr_36566[(16)] = inst_36437);
(statearr_36566[(17)] = inst_36474);
return statearr_36566;
})();var statearr_36567_36651 = state_36556__$1;(statearr_36567_36651[(2)] = null);
(statearr_36567_36651[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (39)))
{var state_36556__$1 = state_36556;var statearr_36571_36652 = state_36556__$1;(statearr_36571_36652[(2)] = null);
(statearr_36571_36652[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (4)))
{var inst_36428 = (state_36556[(11)]);var inst_36428__$1 = (state_36556[(2)]);var inst_36429 = (inst_36428__$1 == null);var state_36556__$1 = (function (){var statearr_36572 = state_36556;(statearr_36572[(11)] = inst_36428__$1);
return statearr_36572;
})();if(cljs.core.truth_(inst_36429))
{var statearr_36573_36653 = state_36556__$1;(statearr_36573_36653[(1)] = (5));
} else
{var statearr_36574_36654 = state_36556__$1;(statearr_36574_36654[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (15)))
{var inst_36440 = (state_36556[(13)]);var inst_36438 = (state_36556[(14)]);var inst_36439 = (state_36556[(15)]);var inst_36437 = (state_36556[(16)]);var inst_36453 = (state_36556[(2)]);var inst_36454 = (inst_36440 + (1));var tmp36568 = inst_36438;var tmp36569 = inst_36439;var tmp36570 = inst_36437;var inst_36437__$1 = tmp36570;var inst_36438__$1 = tmp36568;var inst_36439__$1 = tmp36569;var inst_36440__$1 = inst_36454;var state_36556__$1 = (function (){var statearr_36575 = state_36556;(statearr_36575[(13)] = inst_36440__$1);
(statearr_36575[(14)] = inst_36438__$1);
(statearr_36575[(18)] = inst_36453);
(statearr_36575[(15)] = inst_36439__$1);
(statearr_36575[(16)] = inst_36437__$1);
return statearr_36575;
})();var statearr_36576_36655 = state_36556__$1;(statearr_36576_36655[(2)] = null);
(statearr_36576_36655[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (21)))
{var inst_36478 = (state_36556[(2)]);var state_36556__$1 = state_36556;var statearr_36580_36656 = state_36556__$1;(statearr_36580_36656[(2)] = inst_36478);
(statearr_36580_36656[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (31)))
{var inst_36504 = (state_36556[(10)]);var inst_36508 = done.call(null,null);var inst_36509 = cljs.core.async.untap_STAR_.call(null,m,inst_36504);var state_36556__$1 = (function (){var statearr_36581 = state_36556;(statearr_36581[(19)] = inst_36508);
return statearr_36581;
})();var statearr_36582_36657 = state_36556__$1;(statearr_36582_36657[(2)] = inst_36509);
(statearr_36582_36657[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (32)))
{var inst_36499 = (state_36556[(9)]);var inst_36496 = (state_36556[(20)]);var inst_36497 = (state_36556[(12)]);var inst_36498 = (state_36556[(21)]);var inst_36511 = (state_36556[(2)]);var inst_36512 = (inst_36499 + (1));var tmp36577 = inst_36496;var tmp36578 = inst_36497;var tmp36579 = inst_36498;var inst_36496__$1 = tmp36577;var inst_36497__$1 = tmp36578;var inst_36498__$1 = tmp36579;var inst_36499__$1 = inst_36512;var state_36556__$1 = (function (){var statearr_36583 = state_36556;(statearr_36583[(9)] = inst_36499__$1);
(statearr_36583[(22)] = inst_36511);
(statearr_36583[(20)] = inst_36496__$1);
(statearr_36583[(12)] = inst_36497__$1);
(statearr_36583[(21)] = inst_36498__$1);
return statearr_36583;
})();var statearr_36584_36658 = state_36556__$1;(statearr_36584_36658[(2)] = null);
(statearr_36584_36658[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (40)))
{var inst_36524 = (state_36556[(23)]);var inst_36528 = done.call(null,null);var inst_36529 = cljs.core.async.untap_STAR_.call(null,m,inst_36524);var state_36556__$1 = (function (){var statearr_36585 = state_36556;(statearr_36585[(24)] = inst_36528);
return statearr_36585;
})();var statearr_36586_36659 = state_36556__$1;(statearr_36586_36659[(2)] = inst_36529);
(statearr_36586_36659[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (33)))
{var inst_36515 = (state_36556[(25)]);var inst_36517 = cljs.core.chunked_seq_QMARK_.call(null,inst_36515);var state_36556__$1 = state_36556;if(inst_36517)
{var statearr_36587_36660 = state_36556__$1;(statearr_36587_36660[(1)] = (36));
} else
{var statearr_36588_36661 = state_36556__$1;(statearr_36588_36661[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (13)))
{var inst_36447 = (state_36556[(26)]);var inst_36450 = cljs.core.async.close_BANG_.call(null,inst_36447);var state_36556__$1 = state_36556;var statearr_36589_36662 = state_36556__$1;(statearr_36589_36662[(2)] = inst_36450);
(statearr_36589_36662[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (22)))
{var inst_36468 = (state_36556[(8)]);var inst_36471 = cljs.core.async.close_BANG_.call(null,inst_36468);var state_36556__$1 = state_36556;var statearr_36590_36663 = state_36556__$1;(statearr_36590_36663[(2)] = inst_36471);
(statearr_36590_36663[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (36)))
{var inst_36515 = (state_36556[(25)]);var inst_36519 = cljs.core.chunk_first.call(null,inst_36515);var inst_36520 = cljs.core.chunk_rest.call(null,inst_36515);var inst_36521 = cljs.core.count.call(null,inst_36519);var inst_36496 = inst_36520;var inst_36497 = inst_36519;var inst_36498 = inst_36521;var inst_36499 = (0);var state_36556__$1 = (function (){var statearr_36591 = state_36556;(statearr_36591[(9)] = inst_36499);
(statearr_36591[(20)] = inst_36496);
(statearr_36591[(12)] = inst_36497);
(statearr_36591[(21)] = inst_36498);
return statearr_36591;
})();var statearr_36592_36664 = state_36556__$1;(statearr_36592_36664[(2)] = null);
(statearr_36592_36664[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (41)))
{var inst_36515 = (state_36556[(25)]);var inst_36531 = (state_36556[(2)]);var inst_36532 = cljs.core.next.call(null,inst_36515);var inst_36496 = inst_36532;var inst_36497 = null;var inst_36498 = (0);var inst_36499 = (0);var state_36556__$1 = (function (){var statearr_36593 = state_36556;(statearr_36593[(9)] = inst_36499);
(statearr_36593[(27)] = inst_36531);
(statearr_36593[(20)] = inst_36496);
(statearr_36593[(12)] = inst_36497);
(statearr_36593[(21)] = inst_36498);
return statearr_36593;
})();var statearr_36594_36665 = state_36556__$1;(statearr_36594_36665[(2)] = null);
(statearr_36594_36665[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (43)))
{var state_36556__$1 = state_36556;var statearr_36595_36666 = state_36556__$1;(statearr_36595_36666[(2)] = null);
(statearr_36595_36666[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (29)))
{var inst_36540 = (state_36556[(2)]);var state_36556__$1 = state_36556;var statearr_36596_36667 = state_36556__$1;(statearr_36596_36667[(2)] = inst_36540);
(statearr_36596_36667[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (44)))
{var inst_36549 = (state_36556[(2)]);var state_36556__$1 = (function (){var statearr_36597 = state_36556;(statearr_36597[(28)] = inst_36549);
return statearr_36597;
})();var statearr_36598_36668 = state_36556__$1;(statearr_36598_36668[(2)] = null);
(statearr_36598_36668[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (6)))
{var inst_36488 = (state_36556[(29)]);var inst_36487 = cljs.core.deref.call(null,cs);var inst_36488__$1 = cljs.core.keys.call(null,inst_36487);var inst_36489 = cljs.core.count.call(null,inst_36488__$1);var inst_36490 = cljs.core.reset_BANG_.call(null,dctr,inst_36489);var inst_36495 = cljs.core.seq.call(null,inst_36488__$1);var inst_36496 = inst_36495;var inst_36497 = null;var inst_36498 = (0);var inst_36499 = (0);var state_36556__$1 = (function (){var statearr_36599 = state_36556;(statearr_36599[(9)] = inst_36499);
(statearr_36599[(29)] = inst_36488__$1);
(statearr_36599[(30)] = inst_36490);
(statearr_36599[(20)] = inst_36496);
(statearr_36599[(12)] = inst_36497);
(statearr_36599[(21)] = inst_36498);
return statearr_36599;
})();var statearr_36600_36669 = state_36556__$1;(statearr_36600_36669[(2)] = null);
(statearr_36600_36669[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (28)))
{var inst_36515 = (state_36556[(25)]);var inst_36496 = (state_36556[(20)]);var inst_36515__$1 = cljs.core.seq.call(null,inst_36496);var state_36556__$1 = (function (){var statearr_36601 = state_36556;(statearr_36601[(25)] = inst_36515__$1);
return statearr_36601;
})();if(inst_36515__$1)
{var statearr_36602_36670 = state_36556__$1;(statearr_36602_36670[(1)] = (33));
} else
{var statearr_36603_36671 = state_36556__$1;(statearr_36603_36671[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (25)))
{var inst_36499 = (state_36556[(9)]);var inst_36498 = (state_36556[(21)]);var inst_36501 = (inst_36499 < inst_36498);var inst_36502 = inst_36501;var state_36556__$1 = state_36556;if(cljs.core.truth_(inst_36502))
{var statearr_36604_36672 = state_36556__$1;(statearr_36604_36672[(1)] = (27));
} else
{var statearr_36605_36673 = state_36556__$1;(statearr_36605_36673[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (34)))
{var state_36556__$1 = state_36556;var statearr_36606_36674 = state_36556__$1;(statearr_36606_36674[(2)] = null);
(statearr_36606_36674[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (17)))
{var state_36556__$1 = state_36556;var statearr_36607_36675 = state_36556__$1;(statearr_36607_36675[(2)] = null);
(statearr_36607_36675[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (3)))
{var inst_36554 = (state_36556[(2)]);var state_36556__$1 = state_36556;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36556__$1,inst_36554);
} else
{if((state_val_36557 === (12)))
{var inst_36483 = (state_36556[(2)]);var state_36556__$1 = state_36556;var statearr_36608_36676 = state_36556__$1;(statearr_36608_36676[(2)] = inst_36483);
(statearr_36608_36676[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (2)))
{var state_36556__$1 = state_36556;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36556__$1,(4),ch);
} else
{if((state_val_36557 === (23)))
{var state_36556__$1 = state_36556;var statearr_36609_36677 = state_36556__$1;(statearr_36609_36677[(2)] = null);
(statearr_36609_36677[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (35)))
{var inst_36538 = (state_36556[(2)]);var state_36556__$1 = state_36556;var statearr_36610_36678 = state_36556__$1;(statearr_36610_36678[(2)] = inst_36538);
(statearr_36610_36678[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (19)))
{var inst_36457 = (state_36556[(7)]);var inst_36461 = cljs.core.chunk_first.call(null,inst_36457);var inst_36462 = cljs.core.chunk_rest.call(null,inst_36457);var inst_36463 = cljs.core.count.call(null,inst_36461);var inst_36437 = inst_36462;var inst_36438 = inst_36461;var inst_36439 = inst_36463;var inst_36440 = (0);var state_36556__$1 = (function (){var statearr_36611 = state_36556;(statearr_36611[(13)] = inst_36440);
(statearr_36611[(14)] = inst_36438);
(statearr_36611[(15)] = inst_36439);
(statearr_36611[(16)] = inst_36437);
return statearr_36611;
})();var statearr_36612_36679 = state_36556__$1;(statearr_36612_36679[(2)] = null);
(statearr_36612_36679[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (11)))
{var inst_36437 = (state_36556[(16)]);var inst_36457 = (state_36556[(7)]);var inst_36457__$1 = cljs.core.seq.call(null,inst_36437);var state_36556__$1 = (function (){var statearr_36613 = state_36556;(statearr_36613[(7)] = inst_36457__$1);
return statearr_36613;
})();if(inst_36457__$1)
{var statearr_36614_36680 = state_36556__$1;(statearr_36614_36680[(1)] = (16));
} else
{var statearr_36615_36681 = state_36556__$1;(statearr_36615_36681[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (9)))
{var inst_36485 = (state_36556[(2)]);var state_36556__$1 = state_36556;var statearr_36616_36682 = state_36556__$1;(statearr_36616_36682[(2)] = inst_36485);
(statearr_36616_36682[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (5)))
{var inst_36435 = cljs.core.deref.call(null,cs);var inst_36436 = cljs.core.seq.call(null,inst_36435);var inst_36437 = inst_36436;var inst_36438 = null;var inst_36439 = (0);var inst_36440 = (0);var state_36556__$1 = (function (){var statearr_36617 = state_36556;(statearr_36617[(13)] = inst_36440);
(statearr_36617[(14)] = inst_36438);
(statearr_36617[(15)] = inst_36439);
(statearr_36617[(16)] = inst_36437);
return statearr_36617;
})();var statearr_36618_36683 = state_36556__$1;(statearr_36618_36683[(2)] = null);
(statearr_36618_36683[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (14)))
{var state_36556__$1 = state_36556;var statearr_36619_36684 = state_36556__$1;(statearr_36619_36684[(2)] = null);
(statearr_36619_36684[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (45)))
{var inst_36546 = (state_36556[(2)]);var state_36556__$1 = state_36556;var statearr_36620_36685 = state_36556__$1;(statearr_36620_36685[(2)] = inst_36546);
(statearr_36620_36685[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (26)))
{var inst_36488 = (state_36556[(29)]);var inst_36542 = (state_36556[(2)]);var inst_36543 = cljs.core.seq.call(null,inst_36488);var state_36556__$1 = (function (){var statearr_36621 = state_36556;(statearr_36621[(31)] = inst_36542);
return statearr_36621;
})();if(inst_36543)
{var statearr_36622_36686 = state_36556__$1;(statearr_36622_36686[(1)] = (42));
} else
{var statearr_36623_36687 = state_36556__$1;(statearr_36623_36687[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (16)))
{var inst_36457 = (state_36556[(7)]);var inst_36459 = cljs.core.chunked_seq_QMARK_.call(null,inst_36457);var state_36556__$1 = state_36556;if(inst_36459)
{var statearr_36624_36688 = state_36556__$1;(statearr_36624_36688[(1)] = (19));
} else
{var statearr_36625_36689 = state_36556__$1;(statearr_36625_36689[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (38)))
{var inst_36535 = (state_36556[(2)]);var state_36556__$1 = state_36556;var statearr_36626_36690 = state_36556__$1;(statearr_36626_36690[(2)] = inst_36535);
(statearr_36626_36690[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (30)))
{var state_36556__$1 = state_36556;var statearr_36627_36691 = state_36556__$1;(statearr_36627_36691[(2)] = null);
(statearr_36627_36691[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (10)))
{var inst_36440 = (state_36556[(13)]);var inst_36438 = (state_36556[(14)]);var inst_36446 = cljs.core._nth.call(null,inst_36438,inst_36440);var inst_36447 = cljs.core.nth.call(null,inst_36446,(0),null);var inst_36448 = cljs.core.nth.call(null,inst_36446,(1),null);var state_36556__$1 = (function (){var statearr_36628 = state_36556;(statearr_36628[(26)] = inst_36447);
return statearr_36628;
})();if(cljs.core.truth_(inst_36448))
{var statearr_36629_36692 = state_36556__$1;(statearr_36629_36692[(1)] = (13));
} else
{var statearr_36630_36693 = state_36556__$1;(statearr_36630_36693[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (18)))
{var inst_36481 = (state_36556[(2)]);var state_36556__$1 = state_36556;var statearr_36631_36694 = state_36556__$1;(statearr_36631_36694[(2)] = inst_36481);
(statearr_36631_36694[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (42)))
{var state_36556__$1 = state_36556;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36556__$1,(45),dchan);
} else
{if((state_val_36557 === (37)))
{var inst_36515 = (state_36556[(25)]);var inst_36524 = (state_36556[(23)]);var inst_36428 = (state_36556[(11)]);var inst_36524__$1 = cljs.core.first.call(null,inst_36515);var inst_36525 = cljs.core.async.put_BANG_.call(null,inst_36524__$1,inst_36428,done);var state_36556__$1 = (function (){var statearr_36632 = state_36556;(statearr_36632[(23)] = inst_36524__$1);
return statearr_36632;
})();if(cljs.core.truth_(inst_36525))
{var statearr_36633_36695 = state_36556__$1;(statearr_36633_36695[(1)] = (39));
} else
{var statearr_36634_36696 = state_36556__$1;(statearr_36634_36696[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36557 === (8)))
{var inst_36440 = (state_36556[(13)]);var inst_36439 = (state_36556[(15)]);var inst_36442 = (inst_36440 < inst_36439);var inst_36443 = inst_36442;var state_36556__$1 = state_36556;if(cljs.core.truth_(inst_36443))
{var statearr_36635_36697 = state_36556__$1;(statearr_36635_36697[(1)] = (10));
} else
{var statearr_36636_36698 = state_36556__$1;(statearr_36636_36698[(1)] = (11));
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
});})(c__16733__auto___36644,cs,m,dchan,dctr,done))
;return ((function (switch__16718__auto__,c__16733__auto___36644,cs,m,dchan,dctr,done){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_36640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36640[(0)] = state_machine__16719__auto__);
(statearr_36640[(1)] = (1));
return statearr_36640;
});
var state_machine__16719__auto____1 = (function (state_36556){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_36556);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e36641){if((e36641 instanceof Object))
{var ex__16722__auto__ = e36641;var statearr_36642_36699 = state_36556;(statearr_36642_36699[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36556);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36641;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36700 = state_36556;
state_36556 = G__36700;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_36556){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_36556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto___36644,cs,m,dchan,dctr,done))
})();var state__16735__auto__ = (function (){var statearr_36643 = f__16734__auto__.call(null);(statearr_36643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto___36644);
return statearr_36643;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto___36644,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj36702 = {};return obj36702;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__11540__auto__ = m;if(and__11540__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__11540__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__12188__auto__ = (((m == null))?null:m);return (function (){var or__11552__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__11540__auto__ = m;if(and__11540__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__11540__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__12188__auto__ = (((m == null))?null:m);return (function (){var or__11552__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__11540__auto__ = m;if(and__11540__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__11540__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__12188__auto__ = (((m == null))?null:m);return (function (){var or__11552__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__11540__auto__ = m;if(and__11540__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__11540__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__12188__auto__ = (((m == null))?null:m);return (function (){var or__11552__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__11540__auto__ = m;if(and__11540__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__11540__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__12188__auto__ = (((m == null))?null:m);return (function (){var or__11552__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__36703){var map__36708 = p__36703;var map__36708__$1 = ((cljs.core.seq_QMARK_.call(null,map__36708))?cljs.core.apply.call(null,cljs.core.hash_map,map__36708):map__36708);var opts = map__36708__$1;var statearr_36709_36712 = state;(statearr_36709_36712[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__36708,map__36708__$1,opts){
return (function (val){var statearr_36710_36713 = state;(statearr_36710_36713[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__36708,map__36708__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_36711_36714 = state;(statearr_36711_36714[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__36703 = null;if (arguments.length > 3) {
  p__36703 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__36703);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__36715){
var state = cljs.core.first(arglist__36715);
arglist__36715 = cljs.core.next(arglist__36715);
var cont_block = cljs.core.first(arglist__36715);
arglist__36715 = cljs.core.next(arglist__36715);
var ports = cljs.core.first(arglist__36715);
var p__36703 = cljs.core.rest(arglist__36715);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__36703);
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
;var m = (function (){if(typeof cljs.core.async.t36835 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36835 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36836){
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
this.meta36836 = meta36836;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36835.cljs$lang$type = true;
cljs.core.async.t36835.cljs$lang$ctorStr = "cljs.core.async/t36835";
cljs.core.async.t36835.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"cljs.core.async/t36835");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36835.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t36835.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36835.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36835.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36835.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36835.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36835.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36835.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36835.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36837){var self__ = this;
var _36837__$1 = this;return self__.meta36836;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36837,meta36836__$1){var self__ = this;
var _36837__$1 = this;return (new cljs.core.async.t36835(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36836__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t36835 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t36835(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36836){return (new cljs.core.async.t36835(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36836));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t36835(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__16733__auto___36954 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto___36954,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto___36954,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36907){var state_val_36908 = (state_36907[(1)]);if((state_val_36908 === (7)))
{var inst_36851 = (state_36907[(7)]);var inst_36856 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36851);var state_36907__$1 = state_36907;var statearr_36909_36955 = state_36907__$1;(statearr_36909_36955[(2)] = inst_36856);
(statearr_36909_36955[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36908 === (20)))
{var inst_36866 = (state_36907[(8)]);var state_36907__$1 = state_36907;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36907__$1,(23),out,inst_36866);
} else
{if((state_val_36908 === (1)))
{var inst_36841 = (state_36907[(9)]);var inst_36841__$1 = calc_state.call(null);var inst_36842 = cljs.core.seq_QMARK_.call(null,inst_36841__$1);var state_36907__$1 = (function (){var statearr_36910 = state_36907;(statearr_36910[(9)] = inst_36841__$1);
return statearr_36910;
})();if(inst_36842)
{var statearr_36911_36956 = state_36907__$1;(statearr_36911_36956[(1)] = (2));
} else
{var statearr_36912_36957 = state_36907__$1;(statearr_36912_36957[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36908 === (24)))
{var inst_36859 = (state_36907[(10)]);var inst_36851 = inst_36859;var state_36907__$1 = (function (){var statearr_36913 = state_36907;(statearr_36913[(7)] = inst_36851);
return statearr_36913;
})();var statearr_36914_36958 = state_36907__$1;(statearr_36914_36958[(2)] = null);
(statearr_36914_36958[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36908 === (4)))
{var inst_36841 = (state_36907[(9)]);var inst_36847 = (state_36907[(2)]);var inst_36848 = cljs.core.get.call(null,inst_36847,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_36849 = cljs.core.get.call(null,inst_36847,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_36850 = cljs.core.get.call(null,inst_36847,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_36851 = inst_36841;var state_36907__$1 = (function (){var statearr_36915 = state_36907;(statearr_36915[(11)] = inst_36849);
(statearr_36915[(7)] = inst_36851);
(statearr_36915[(12)] = inst_36848);
(statearr_36915[(13)] = inst_36850);
return statearr_36915;
})();var statearr_36916_36959 = state_36907__$1;(statearr_36916_36959[(2)] = null);
(statearr_36916_36959[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36908 === (15)))
{var state_36907__$1 = state_36907;var statearr_36917_36960 = state_36907__$1;(statearr_36917_36960[(2)] = null);
(statearr_36917_36960[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36908 === (21)))
{var inst_36859 = (state_36907[(10)]);var inst_36851 = inst_36859;var state_36907__$1 = (function (){var statearr_36918 = state_36907;(statearr_36918[(7)] = inst_36851);
return statearr_36918;
})();var statearr_36919_36961 = state_36907__$1;(statearr_36919_36961[(2)] = null);
(statearr_36919_36961[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36908 === (13)))
{var inst_36903 = (state_36907[(2)]);var state_36907__$1 = state_36907;var statearr_36920_36962 = state_36907__$1;(statearr_36920_36962[(2)] = inst_36903);
(statearr_36920_36962[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36908 === (22)))
{var inst_36901 = (state_36907[(2)]);var state_36907__$1 = state_36907;var statearr_36921_36963 = state_36907__$1;(statearr_36921_36963[(2)] = inst_36901);
(statearr_36921_36963[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36908 === (6)))
{var inst_36905 = (state_36907[(2)]);var state_36907__$1 = state_36907;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36907__$1,inst_36905);
} else
{if((state_val_36908 === (25)))
{var state_36907__$1 = state_36907;var statearr_36922_36964 = state_36907__$1;(statearr_36922_36964[(2)] = null);
(statearr_36922_36964[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36908 === (17)))
{var inst_36881 = (state_36907[(14)]);var state_36907__$1 = state_36907;var statearr_36923_36965 = state_36907__$1;(statearr_36923_36965[(2)] = inst_36881);
(statearr_36923_36965[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36908 === (3)))
{var inst_36841 = (state_36907[(9)]);var state_36907__$1 = state_36907;var statearr_36924_36966 = state_36907__$1;(statearr_36924_36966[(2)] = inst_36841);
(statearr_36924_36966[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36908 === (12)))
{var inst_36867 = (state_36907[(15)]);var inst_36862 = (state_36907[(16)]);var inst_36881 = (state_36907[(14)]);var inst_36881__$1 = inst_36862.call(null,inst_36867);var state_36907__$1 = (function (){var statearr_36925 = state_36907;(statearr_36925[(14)] = inst_36881__$1);
return statearr_36925;
})();if(cljs.core.truth_(inst_36881__$1))
{var statearr_36926_36967 = state_36907__$1;(statearr_36926_36967[(1)] = (17));
} else
{var statearr_36927_36968 = state_36907__$1;(statearr_36927_36968[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36908 === (2)))
{var inst_36841 = (state_36907[(9)]);var inst_36844 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36841);var state_36907__$1 = state_36907;var statearr_36928_36969 = state_36907__$1;(statearr_36928_36969[(2)] = inst_36844);
(statearr_36928_36969[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36908 === (23)))
{var inst_36892 = (state_36907[(2)]);var state_36907__$1 = state_36907;if(cljs.core.truth_(inst_36892))
{var statearr_36929_36970 = state_36907__$1;(statearr_36929_36970[(1)] = (24));
} else
{var statearr_36930_36971 = state_36907__$1;(statearr_36930_36971[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36908 === (19)))
{var inst_36889 = (state_36907[(2)]);var state_36907__$1 = state_36907;if(cljs.core.truth_(inst_36889))
{var statearr_36931_36972 = state_36907__$1;(statearr_36931_36972[(1)] = (20));
} else
{var statearr_36932_36973 = state_36907__$1;(statearr_36932_36973[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36908 === (11)))
{var inst_36866 = (state_36907[(8)]);var inst_36872 = (inst_36866 == null);var state_36907__$1 = state_36907;if(cljs.core.truth_(inst_36872))
{var statearr_36933_36974 = state_36907__$1;(statearr_36933_36974[(1)] = (14));
} else
{var statearr_36934_36975 = state_36907__$1;(statearr_36934_36975[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36908 === (9)))
{var inst_36859 = (state_36907[(10)]);var inst_36859__$1 = (state_36907[(2)]);var inst_36860 = cljs.core.get.call(null,inst_36859__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_36861 = cljs.core.get.call(null,inst_36859__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_36862 = cljs.core.get.call(null,inst_36859__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_36907__$1 = (function (){var statearr_36935 = state_36907;(statearr_36935[(17)] = inst_36861);
(statearr_36935[(10)] = inst_36859__$1);
(statearr_36935[(16)] = inst_36862);
return statearr_36935;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_36907__$1,(10),inst_36860);
} else
{if((state_val_36908 === (5)))
{var inst_36851 = (state_36907[(7)]);var inst_36854 = cljs.core.seq_QMARK_.call(null,inst_36851);var state_36907__$1 = state_36907;if(inst_36854)
{var statearr_36936_36976 = state_36907__$1;(statearr_36936_36976[(1)] = (7));
} else
{var statearr_36937_36977 = state_36907__$1;(statearr_36937_36977[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36908 === (14)))
{var inst_36867 = (state_36907[(15)]);var inst_36874 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36867);var state_36907__$1 = state_36907;var statearr_36938_36978 = state_36907__$1;(statearr_36938_36978[(2)] = inst_36874);
(statearr_36938_36978[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36908 === (26)))
{var inst_36897 = (state_36907[(2)]);var state_36907__$1 = state_36907;var statearr_36939_36979 = state_36907__$1;(statearr_36939_36979[(2)] = inst_36897);
(statearr_36939_36979[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36908 === (16)))
{var inst_36877 = (state_36907[(2)]);var inst_36878 = calc_state.call(null);var inst_36851 = inst_36878;var state_36907__$1 = (function (){var statearr_36940 = state_36907;(statearr_36940[(18)] = inst_36877);
(statearr_36940[(7)] = inst_36851);
return statearr_36940;
})();var statearr_36941_36980 = state_36907__$1;(statearr_36941_36980[(2)] = null);
(statearr_36941_36980[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36908 === (10)))
{var inst_36867 = (state_36907[(15)]);var inst_36866 = (state_36907[(8)]);var inst_36865 = (state_36907[(2)]);var inst_36866__$1 = cljs.core.nth.call(null,inst_36865,(0),null);var inst_36867__$1 = cljs.core.nth.call(null,inst_36865,(1),null);var inst_36868 = (inst_36866__$1 == null);var inst_36869 = cljs.core._EQ_.call(null,inst_36867__$1,change);var inst_36870 = (inst_36868) || (inst_36869);var state_36907__$1 = (function (){var statearr_36942 = state_36907;(statearr_36942[(15)] = inst_36867__$1);
(statearr_36942[(8)] = inst_36866__$1);
return statearr_36942;
})();if(cljs.core.truth_(inst_36870))
{var statearr_36943_36981 = state_36907__$1;(statearr_36943_36981[(1)] = (11));
} else
{var statearr_36944_36982 = state_36907__$1;(statearr_36944_36982[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36908 === (18)))
{var inst_36867 = (state_36907[(15)]);var inst_36861 = (state_36907[(17)]);var inst_36862 = (state_36907[(16)]);var inst_36884 = cljs.core.empty_QMARK_.call(null,inst_36862);var inst_36885 = inst_36861.call(null,inst_36867);var inst_36886 = cljs.core.not.call(null,inst_36885);var inst_36887 = (inst_36884) && (inst_36886);var state_36907__$1 = state_36907;var statearr_36945_36983 = state_36907__$1;(statearr_36945_36983[(2)] = inst_36887);
(statearr_36945_36983[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36908 === (8)))
{var inst_36851 = (state_36907[(7)]);var state_36907__$1 = state_36907;var statearr_36946_36984 = state_36907__$1;(statearr_36946_36984[(2)] = inst_36851);
(statearr_36946_36984[(1)] = (9));
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
});})(c__16733__auto___36954,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__16718__auto__,c__16733__auto___36954,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_36950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36950[(0)] = state_machine__16719__auto__);
(statearr_36950[(1)] = (1));
return statearr_36950;
});
var state_machine__16719__auto____1 = (function (state_36907){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_36907);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e36951){if((e36951 instanceof Object))
{var ex__16722__auto__ = e36951;var statearr_36952_36985 = state_36907;(statearr_36952_36985[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36907);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36951;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36986 = state_36907;
state_36907 = G__36986;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_36907){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_36907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto___36954,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__16735__auto__ = (function (){var statearr_36953 = f__16734__auto__.call(null);(statearr_36953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto___36954);
return statearr_36953;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto___36954,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj36988 = {};return obj36988;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__11540__auto__ = p;if(and__11540__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__11540__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__12188__auto__ = (((p == null))?null:p);return (function (){var or__11552__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__11540__auto__ = p;if(and__11540__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__11540__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__12188__auto__ = (((p == null))?null:p);return (function (){var or__11552__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__11540__auto__ = p;if(and__11540__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__11540__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__12188__auto__ = (((p == null))?null:p);return (function (){var or__11552__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__11540__auto__ = p;if(and__11540__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__11540__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__12188__auto__ = (((p == null))?null:p);return (function (){var or__11552__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12188__auto__)]);if(or__11552__auto__)
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11552__auto____$1)
{return or__11552__auto____$1;
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
return (function (topic){var or__11552__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__11552__auto__,mults){
return (function (p1__36989_SHARP_){if(cljs.core.truth_(p1__36989_SHARP_.call(null,topic)))
{return p1__36989_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__36989_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__11552__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t37112 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37112 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta37113){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta37113 = meta37113;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37112.cljs$lang$type = true;
cljs.core.async.t37112.cljs$lang$ctorStr = "cljs.core.async/t37112";
cljs.core.async.t37112.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"cljs.core.async/t37112");
});})(mults,ensure_mult))
;
cljs.core.async.t37112.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t37112.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t37112.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t37112.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t37112.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t37112.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37112.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t37112.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37114){var self__ = this;
var _37114__$1 = this;return self__.meta37113;
});})(mults,ensure_mult))
;
cljs.core.async.t37112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37114,meta37113__$1){var self__ = this;
var _37114__$1 = this;return (new cljs.core.async.t37112(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta37113__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t37112 = ((function (mults,ensure_mult){
return (function __GT_t37112(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta37113){return (new cljs.core.async.t37112(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta37113));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t37112(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__16733__auto___37234 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto___37234,mults,ensure_mult,p){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto___37234,mults,ensure_mult,p){
return (function (state_37186){var state_val_37187 = (state_37186[(1)]);if((state_val_37187 === (7)))
{var inst_37182 = (state_37186[(2)]);var state_37186__$1 = state_37186;var statearr_37188_37235 = state_37186__$1;(statearr_37188_37235[(2)] = inst_37182);
(statearr_37188_37235[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37187 === (20)))
{var state_37186__$1 = state_37186;var statearr_37189_37236 = state_37186__$1;(statearr_37189_37236[(2)] = null);
(statearr_37189_37236[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37187 === (1)))
{var state_37186__$1 = state_37186;var statearr_37190_37237 = state_37186__$1;(statearr_37190_37237[(2)] = null);
(statearr_37190_37237[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37187 === (24)))
{var inst_37165 = (state_37186[(7)]);var inst_37174 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_37165);var state_37186__$1 = state_37186;var statearr_37191_37238 = state_37186__$1;(statearr_37191_37238[(2)] = inst_37174);
(statearr_37191_37238[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37187 === (4)))
{var inst_37117 = (state_37186[(8)]);var inst_37117__$1 = (state_37186[(2)]);var inst_37118 = (inst_37117__$1 == null);var state_37186__$1 = (function (){var statearr_37192 = state_37186;(statearr_37192[(8)] = inst_37117__$1);
return statearr_37192;
})();if(cljs.core.truth_(inst_37118))
{var statearr_37193_37239 = state_37186__$1;(statearr_37193_37239[(1)] = (5));
} else
{var statearr_37194_37240 = state_37186__$1;(statearr_37194_37240[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37187 === (15)))
{var inst_37159 = (state_37186[(2)]);var state_37186__$1 = state_37186;var statearr_37195_37241 = state_37186__$1;(statearr_37195_37241[(2)] = inst_37159);
(statearr_37195_37241[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37187 === (21)))
{var inst_37179 = (state_37186[(2)]);var state_37186__$1 = (function (){var statearr_37196 = state_37186;(statearr_37196[(9)] = inst_37179);
return statearr_37196;
})();var statearr_37197_37242 = state_37186__$1;(statearr_37197_37242[(2)] = null);
(statearr_37197_37242[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37187 === (13)))
{var inst_37141 = (state_37186[(10)]);var inst_37143 = cljs.core.chunked_seq_QMARK_.call(null,inst_37141);var state_37186__$1 = state_37186;if(inst_37143)
{var statearr_37198_37243 = state_37186__$1;(statearr_37198_37243[(1)] = (16));
} else
{var statearr_37199_37244 = state_37186__$1;(statearr_37199_37244[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37187 === (22)))
{var inst_37171 = (state_37186[(2)]);var state_37186__$1 = state_37186;if(cljs.core.truth_(inst_37171))
{var statearr_37200_37245 = state_37186__$1;(statearr_37200_37245[(1)] = (23));
} else
{var statearr_37201_37246 = state_37186__$1;(statearr_37201_37246[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37187 === (6)))
{var inst_37165 = (state_37186[(7)]);var inst_37117 = (state_37186[(8)]);var inst_37167 = (state_37186[(11)]);var inst_37165__$1 = topic_fn.call(null,inst_37117);var inst_37166 = cljs.core.deref.call(null,mults);var inst_37167__$1 = cljs.core.get.call(null,inst_37166,inst_37165__$1);var state_37186__$1 = (function (){var statearr_37202 = state_37186;(statearr_37202[(7)] = inst_37165__$1);
(statearr_37202[(11)] = inst_37167__$1);
return statearr_37202;
})();if(cljs.core.truth_(inst_37167__$1))
{var statearr_37203_37247 = state_37186__$1;(statearr_37203_37247[(1)] = (19));
} else
{var statearr_37204_37248 = state_37186__$1;(statearr_37204_37248[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37187 === (25)))
{var inst_37176 = (state_37186[(2)]);var state_37186__$1 = state_37186;var statearr_37205_37249 = state_37186__$1;(statearr_37205_37249[(2)] = inst_37176);
(statearr_37205_37249[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37187 === (17)))
{var inst_37141 = (state_37186[(10)]);var inst_37150 = cljs.core.first.call(null,inst_37141);var inst_37151 = cljs.core.async.muxch_STAR_.call(null,inst_37150);var inst_37152 = cljs.core.async.close_BANG_.call(null,inst_37151);var inst_37153 = cljs.core.next.call(null,inst_37141);var inst_37127 = inst_37153;var inst_37128 = null;var inst_37129 = (0);var inst_37130 = (0);var state_37186__$1 = (function (){var statearr_37206 = state_37186;(statearr_37206[(12)] = inst_37152);
(statearr_37206[(13)] = inst_37128);
(statearr_37206[(14)] = inst_37129);
(statearr_37206[(15)] = inst_37130);
(statearr_37206[(16)] = inst_37127);
return statearr_37206;
})();var statearr_37207_37250 = state_37186__$1;(statearr_37207_37250[(2)] = null);
(statearr_37207_37250[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37187 === (3)))
{var inst_37184 = (state_37186[(2)]);var state_37186__$1 = state_37186;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37186__$1,inst_37184);
} else
{if((state_val_37187 === (12)))
{var inst_37161 = (state_37186[(2)]);var state_37186__$1 = state_37186;var statearr_37208_37251 = state_37186__$1;(statearr_37208_37251[(2)] = inst_37161);
(statearr_37208_37251[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37187 === (2)))
{var state_37186__$1 = state_37186;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37186__$1,(4),ch);
} else
{if((state_val_37187 === (23)))
{var state_37186__$1 = state_37186;var statearr_37209_37252 = state_37186__$1;(statearr_37209_37252[(2)] = null);
(statearr_37209_37252[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37187 === (19)))
{var inst_37117 = (state_37186[(8)]);var inst_37167 = (state_37186[(11)]);var inst_37169 = cljs.core.async.muxch_STAR_.call(null,inst_37167);var state_37186__$1 = state_37186;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37186__$1,(22),inst_37169,inst_37117);
} else
{if((state_val_37187 === (11)))
{var inst_37141 = (state_37186[(10)]);var inst_37127 = (state_37186[(16)]);var inst_37141__$1 = cljs.core.seq.call(null,inst_37127);var state_37186__$1 = (function (){var statearr_37210 = state_37186;(statearr_37210[(10)] = inst_37141__$1);
return statearr_37210;
})();if(inst_37141__$1)
{var statearr_37211_37253 = state_37186__$1;(statearr_37211_37253[(1)] = (13));
} else
{var statearr_37212_37254 = state_37186__$1;(statearr_37212_37254[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37187 === (9)))
{var inst_37163 = (state_37186[(2)]);var state_37186__$1 = state_37186;var statearr_37213_37255 = state_37186__$1;(statearr_37213_37255[(2)] = inst_37163);
(statearr_37213_37255[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37187 === (5)))
{var inst_37124 = cljs.core.deref.call(null,mults);var inst_37125 = cljs.core.vals.call(null,inst_37124);var inst_37126 = cljs.core.seq.call(null,inst_37125);var inst_37127 = inst_37126;var inst_37128 = null;var inst_37129 = (0);var inst_37130 = (0);var state_37186__$1 = (function (){var statearr_37214 = state_37186;(statearr_37214[(13)] = inst_37128);
(statearr_37214[(14)] = inst_37129);
(statearr_37214[(15)] = inst_37130);
(statearr_37214[(16)] = inst_37127);
return statearr_37214;
})();var statearr_37215_37256 = state_37186__$1;(statearr_37215_37256[(2)] = null);
(statearr_37215_37256[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37187 === (14)))
{var state_37186__$1 = state_37186;var statearr_37219_37257 = state_37186__$1;(statearr_37219_37257[(2)] = null);
(statearr_37219_37257[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37187 === (16)))
{var inst_37141 = (state_37186[(10)]);var inst_37145 = cljs.core.chunk_first.call(null,inst_37141);var inst_37146 = cljs.core.chunk_rest.call(null,inst_37141);var inst_37147 = cljs.core.count.call(null,inst_37145);var inst_37127 = inst_37146;var inst_37128 = inst_37145;var inst_37129 = inst_37147;var inst_37130 = (0);var state_37186__$1 = (function (){var statearr_37220 = state_37186;(statearr_37220[(13)] = inst_37128);
(statearr_37220[(14)] = inst_37129);
(statearr_37220[(15)] = inst_37130);
(statearr_37220[(16)] = inst_37127);
return statearr_37220;
})();var statearr_37221_37258 = state_37186__$1;(statearr_37221_37258[(2)] = null);
(statearr_37221_37258[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37187 === (10)))
{var inst_37128 = (state_37186[(13)]);var inst_37129 = (state_37186[(14)]);var inst_37130 = (state_37186[(15)]);var inst_37127 = (state_37186[(16)]);var inst_37135 = cljs.core._nth.call(null,inst_37128,inst_37130);var inst_37136 = cljs.core.async.muxch_STAR_.call(null,inst_37135);var inst_37137 = cljs.core.async.close_BANG_.call(null,inst_37136);var inst_37138 = (inst_37130 + (1));var tmp37216 = inst_37128;var tmp37217 = inst_37129;var tmp37218 = inst_37127;var inst_37127__$1 = tmp37218;var inst_37128__$1 = tmp37216;var inst_37129__$1 = tmp37217;var inst_37130__$1 = inst_37138;var state_37186__$1 = (function (){var statearr_37222 = state_37186;(statearr_37222[(13)] = inst_37128__$1);
(statearr_37222[(14)] = inst_37129__$1);
(statearr_37222[(15)] = inst_37130__$1);
(statearr_37222[(17)] = inst_37137);
(statearr_37222[(16)] = inst_37127__$1);
return statearr_37222;
})();var statearr_37223_37259 = state_37186__$1;(statearr_37223_37259[(2)] = null);
(statearr_37223_37259[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37187 === (18)))
{var inst_37156 = (state_37186[(2)]);var state_37186__$1 = state_37186;var statearr_37224_37260 = state_37186__$1;(statearr_37224_37260[(2)] = inst_37156);
(statearr_37224_37260[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37187 === (8)))
{var inst_37129 = (state_37186[(14)]);var inst_37130 = (state_37186[(15)]);var inst_37132 = (inst_37130 < inst_37129);var inst_37133 = inst_37132;var state_37186__$1 = state_37186;if(cljs.core.truth_(inst_37133))
{var statearr_37225_37261 = state_37186__$1;(statearr_37225_37261[(1)] = (10));
} else
{var statearr_37226_37262 = state_37186__$1;(statearr_37226_37262[(1)] = (11));
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
});})(c__16733__auto___37234,mults,ensure_mult,p))
;return ((function (switch__16718__auto__,c__16733__auto___37234,mults,ensure_mult,p){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_37230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37230[(0)] = state_machine__16719__auto__);
(statearr_37230[(1)] = (1));
return statearr_37230;
});
var state_machine__16719__auto____1 = (function (state_37186){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_37186);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e37231){if((e37231 instanceof Object))
{var ex__16722__auto__ = e37231;var statearr_37232_37263 = state_37186;(statearr_37232_37263[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37186);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e37231;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37264 = state_37186;
state_37186 = G__37264;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_37186){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_37186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto___37234,mults,ensure_mult,p))
})();var state__16735__auto__ = (function (){var statearr_37233 = f__16734__auto__.call(null);(statearr_37233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto___37234);
return statearr_37233;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto___37234,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__16733__auto___37401 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto___37401,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto___37401,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37371){var state_val_37372 = (state_37371[(1)]);if((state_val_37372 === (7)))
{var state_37371__$1 = state_37371;var statearr_37373_37402 = state_37371__$1;(statearr_37373_37402[(2)] = null);
(statearr_37373_37402[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37372 === (1)))
{var state_37371__$1 = state_37371;var statearr_37374_37403 = state_37371__$1;(statearr_37374_37403[(2)] = null);
(statearr_37374_37403[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37372 === (4)))
{var inst_37335 = (state_37371[(7)]);var inst_37337 = (inst_37335 < cnt);var state_37371__$1 = state_37371;if(cljs.core.truth_(inst_37337))
{var statearr_37375_37404 = state_37371__$1;(statearr_37375_37404[(1)] = (6));
} else
{var statearr_37376_37405 = state_37371__$1;(statearr_37376_37405[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37372 === (15)))
{var inst_37367 = (state_37371[(2)]);var state_37371__$1 = state_37371;var statearr_37377_37406 = state_37371__$1;(statearr_37377_37406[(2)] = inst_37367);
(statearr_37377_37406[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37372 === (13)))
{var inst_37360 = cljs.core.async.close_BANG_.call(null,out);var state_37371__$1 = state_37371;var statearr_37378_37407 = state_37371__$1;(statearr_37378_37407[(2)] = inst_37360);
(statearr_37378_37407[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37372 === (6)))
{var state_37371__$1 = state_37371;var statearr_37379_37408 = state_37371__$1;(statearr_37379_37408[(2)] = null);
(statearr_37379_37408[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37372 === (3)))
{var inst_37369 = (state_37371[(2)]);var state_37371__$1 = state_37371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37371__$1,inst_37369);
} else
{if((state_val_37372 === (12)))
{var inst_37357 = (state_37371[(8)]);var inst_37357__$1 = (state_37371[(2)]);var inst_37358 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37357__$1);var state_37371__$1 = (function (){var statearr_37380 = state_37371;(statearr_37380[(8)] = inst_37357__$1);
return statearr_37380;
})();if(cljs.core.truth_(inst_37358))
{var statearr_37381_37409 = state_37371__$1;(statearr_37381_37409[(1)] = (13));
} else
{var statearr_37382_37410 = state_37371__$1;(statearr_37382_37410[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37372 === (2)))
{var inst_37334 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_37335 = (0);var state_37371__$1 = (function (){var statearr_37383 = state_37371;(statearr_37383[(9)] = inst_37334);
(statearr_37383[(7)] = inst_37335);
return statearr_37383;
})();var statearr_37384_37411 = state_37371__$1;(statearr_37384_37411[(2)] = null);
(statearr_37384_37411[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37372 === (11)))
{var inst_37335 = (state_37371[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37371,(10),Object,null,(9));var inst_37344 = chs__$1.call(null,inst_37335);var inst_37345 = done.call(null,inst_37335);var inst_37346 = cljs.core.async.take_BANG_.call(null,inst_37344,inst_37345);var state_37371__$1 = state_37371;var statearr_37385_37412 = state_37371__$1;(statearr_37385_37412[(2)] = inst_37346);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37371__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37372 === (9)))
{var inst_37335 = (state_37371[(7)]);var inst_37348 = (state_37371[(2)]);var inst_37349 = (inst_37335 + (1));var inst_37335__$1 = inst_37349;var state_37371__$1 = (function (){var statearr_37386 = state_37371;(statearr_37386[(10)] = inst_37348);
(statearr_37386[(7)] = inst_37335__$1);
return statearr_37386;
})();var statearr_37387_37413 = state_37371__$1;(statearr_37387_37413[(2)] = null);
(statearr_37387_37413[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37372 === (5)))
{var inst_37355 = (state_37371[(2)]);var state_37371__$1 = (function (){var statearr_37388 = state_37371;(statearr_37388[(11)] = inst_37355);
return statearr_37388;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37371__$1,(12),dchan);
} else
{if((state_val_37372 === (14)))
{var inst_37357 = (state_37371[(8)]);var inst_37362 = cljs.core.apply.call(null,f,inst_37357);var state_37371__$1 = state_37371;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37371__$1,(16),out,inst_37362);
} else
{if((state_val_37372 === (16)))
{var inst_37364 = (state_37371[(2)]);var state_37371__$1 = (function (){var statearr_37389 = state_37371;(statearr_37389[(12)] = inst_37364);
return statearr_37389;
})();var statearr_37390_37414 = state_37371__$1;(statearr_37390_37414[(2)] = null);
(statearr_37390_37414[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37372 === (10)))
{var inst_37339 = (state_37371[(2)]);var inst_37340 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_37371__$1 = (function (){var statearr_37391 = state_37371;(statearr_37391[(13)] = inst_37339);
return statearr_37391;
})();var statearr_37392_37415 = state_37371__$1;(statearr_37392_37415[(2)] = inst_37340);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37371__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37372 === (8)))
{var inst_37353 = (state_37371[(2)]);var state_37371__$1 = state_37371;var statearr_37393_37416 = state_37371__$1;(statearr_37393_37416[(2)] = inst_37353);
(statearr_37393_37416[(1)] = (5));
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
});})(c__16733__auto___37401,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__16718__auto__,c__16733__auto___37401,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_37397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37397[(0)] = state_machine__16719__auto__);
(statearr_37397[(1)] = (1));
return statearr_37397;
});
var state_machine__16719__auto____1 = (function (state_37371){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_37371);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e37398){if((e37398 instanceof Object))
{var ex__16722__auto__ = e37398;var statearr_37399_37417 = state_37371;(statearr_37399_37417[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37371);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e37398;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37418 = state_37371;
state_37371 = G__37418;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_37371){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_37371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto___37401,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__16735__auto__ = (function (){var statearr_37400 = f__16734__auto__.call(null);(statearr_37400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto___37401);
return statearr_37400;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto___37401,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16733__auto___37526 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto___37526,out){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto___37526,out){
return (function (state_37502){var state_val_37503 = (state_37502[(1)]);if((state_val_37503 === (7)))
{var inst_37481 = (state_37502[(7)]);var inst_37482 = (state_37502[(8)]);var inst_37481__$1 = (state_37502[(2)]);var inst_37482__$1 = cljs.core.nth.call(null,inst_37481__$1,(0),null);var inst_37483 = cljs.core.nth.call(null,inst_37481__$1,(1),null);var inst_37484 = (inst_37482__$1 == null);var state_37502__$1 = (function (){var statearr_37504 = state_37502;(statearr_37504[(7)] = inst_37481__$1);
(statearr_37504[(8)] = inst_37482__$1);
(statearr_37504[(9)] = inst_37483);
return statearr_37504;
})();if(cljs.core.truth_(inst_37484))
{var statearr_37505_37527 = state_37502__$1;(statearr_37505_37527[(1)] = (8));
} else
{var statearr_37506_37528 = state_37502__$1;(statearr_37506_37528[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37503 === (1)))
{var inst_37473 = cljs.core.vec.call(null,chs);var inst_37474 = inst_37473;var state_37502__$1 = (function (){var statearr_37507 = state_37502;(statearr_37507[(10)] = inst_37474);
return statearr_37507;
})();var statearr_37508_37529 = state_37502__$1;(statearr_37508_37529[(2)] = null);
(statearr_37508_37529[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37503 === (4)))
{var inst_37474 = (state_37502[(10)]);var state_37502__$1 = state_37502;return cljs.core.async.ioc_alts_BANG_.call(null,state_37502__$1,(7),inst_37474);
} else
{if((state_val_37503 === (6)))
{var inst_37498 = (state_37502[(2)]);var state_37502__$1 = state_37502;var statearr_37509_37530 = state_37502__$1;(statearr_37509_37530[(2)] = inst_37498);
(statearr_37509_37530[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37503 === (3)))
{var inst_37500 = (state_37502[(2)]);var state_37502__$1 = state_37502;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37502__$1,inst_37500);
} else
{if((state_val_37503 === (2)))
{var inst_37474 = (state_37502[(10)]);var inst_37476 = cljs.core.count.call(null,inst_37474);var inst_37477 = (inst_37476 > (0));var state_37502__$1 = state_37502;if(cljs.core.truth_(inst_37477))
{var statearr_37511_37531 = state_37502__$1;(statearr_37511_37531[(1)] = (4));
} else
{var statearr_37512_37532 = state_37502__$1;(statearr_37512_37532[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37503 === (11)))
{var inst_37474 = (state_37502[(10)]);var inst_37491 = (state_37502[(2)]);var tmp37510 = inst_37474;var inst_37474__$1 = tmp37510;var state_37502__$1 = (function (){var statearr_37513 = state_37502;(statearr_37513[(10)] = inst_37474__$1);
(statearr_37513[(11)] = inst_37491);
return statearr_37513;
})();var statearr_37514_37533 = state_37502__$1;(statearr_37514_37533[(2)] = null);
(statearr_37514_37533[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37503 === (9)))
{var inst_37482 = (state_37502[(8)]);var state_37502__$1 = state_37502;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37502__$1,(11),out,inst_37482);
} else
{if((state_val_37503 === (5)))
{var inst_37496 = cljs.core.async.close_BANG_.call(null,out);var state_37502__$1 = state_37502;var statearr_37515_37534 = state_37502__$1;(statearr_37515_37534[(2)] = inst_37496);
(statearr_37515_37534[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37503 === (10)))
{var inst_37494 = (state_37502[(2)]);var state_37502__$1 = state_37502;var statearr_37516_37535 = state_37502__$1;(statearr_37516_37535[(2)] = inst_37494);
(statearr_37516_37535[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37503 === (8)))
{var inst_37474 = (state_37502[(10)]);var inst_37481 = (state_37502[(7)]);var inst_37482 = (state_37502[(8)]);var inst_37483 = (state_37502[(9)]);var inst_37486 = (function (){var c = inst_37483;var v = inst_37482;var vec__37479 = inst_37481;var cs = inst_37474;return ((function (c,v,vec__37479,cs,inst_37474,inst_37481,inst_37482,inst_37483,state_val_37503,c__16733__auto___37526,out){
return (function (p1__37419_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__37419_SHARP_);
});
;})(c,v,vec__37479,cs,inst_37474,inst_37481,inst_37482,inst_37483,state_val_37503,c__16733__auto___37526,out))
})();var inst_37487 = cljs.core.filterv.call(null,inst_37486,inst_37474);var inst_37474__$1 = inst_37487;var state_37502__$1 = (function (){var statearr_37517 = state_37502;(statearr_37517[(10)] = inst_37474__$1);
return statearr_37517;
})();var statearr_37518_37536 = state_37502__$1;(statearr_37518_37536[(2)] = null);
(statearr_37518_37536[(1)] = (2));
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
});})(c__16733__auto___37526,out))
;return ((function (switch__16718__auto__,c__16733__auto___37526,out){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_37522 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37522[(0)] = state_machine__16719__auto__);
(statearr_37522[(1)] = (1));
return statearr_37522;
});
var state_machine__16719__auto____1 = (function (state_37502){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_37502);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e37523){if((e37523 instanceof Object))
{var ex__16722__auto__ = e37523;var statearr_37524_37537 = state_37502;(statearr_37524_37537[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37502);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e37523;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37538 = state_37502;
state_37502 = G__37538;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_37502){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_37502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto___37526,out))
})();var state__16735__auto__ = (function (){var statearr_37525 = f__16734__auto__.call(null);(statearr_37525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto___37526);
return statearr_37525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto___37526,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16733__auto___37631 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto___37631,out){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto___37631,out){
return (function (state_37608){var state_val_37609 = (state_37608[(1)]);if((state_val_37609 === (7)))
{var inst_37590 = (state_37608[(7)]);var inst_37590__$1 = (state_37608[(2)]);var inst_37591 = (inst_37590__$1 == null);var inst_37592 = cljs.core.not.call(null,inst_37591);var state_37608__$1 = (function (){var statearr_37610 = state_37608;(statearr_37610[(7)] = inst_37590__$1);
return statearr_37610;
})();if(inst_37592)
{var statearr_37611_37632 = state_37608__$1;(statearr_37611_37632[(1)] = (8));
} else
{var statearr_37612_37633 = state_37608__$1;(statearr_37612_37633[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37609 === (1)))
{var inst_37585 = (0);var state_37608__$1 = (function (){var statearr_37613 = state_37608;(statearr_37613[(8)] = inst_37585);
return statearr_37613;
})();var statearr_37614_37634 = state_37608__$1;(statearr_37614_37634[(2)] = null);
(statearr_37614_37634[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37609 === (4)))
{var state_37608__$1 = state_37608;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37608__$1,(7),ch);
} else
{if((state_val_37609 === (6)))
{var inst_37603 = (state_37608[(2)]);var state_37608__$1 = state_37608;var statearr_37615_37635 = state_37608__$1;(statearr_37615_37635[(2)] = inst_37603);
(statearr_37615_37635[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37609 === (3)))
{var inst_37605 = (state_37608[(2)]);var inst_37606 = cljs.core.async.close_BANG_.call(null,out);var state_37608__$1 = (function (){var statearr_37616 = state_37608;(statearr_37616[(9)] = inst_37605);
return statearr_37616;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37608__$1,inst_37606);
} else
{if((state_val_37609 === (2)))
{var inst_37585 = (state_37608[(8)]);var inst_37587 = (inst_37585 < n);var state_37608__$1 = state_37608;if(cljs.core.truth_(inst_37587))
{var statearr_37617_37636 = state_37608__$1;(statearr_37617_37636[(1)] = (4));
} else
{var statearr_37618_37637 = state_37608__$1;(statearr_37618_37637[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37609 === (11)))
{var inst_37585 = (state_37608[(8)]);var inst_37595 = (state_37608[(2)]);var inst_37596 = (inst_37585 + (1));var inst_37585__$1 = inst_37596;var state_37608__$1 = (function (){var statearr_37619 = state_37608;(statearr_37619[(8)] = inst_37585__$1);
(statearr_37619[(10)] = inst_37595);
return statearr_37619;
})();var statearr_37620_37638 = state_37608__$1;(statearr_37620_37638[(2)] = null);
(statearr_37620_37638[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37609 === (9)))
{var state_37608__$1 = state_37608;var statearr_37621_37639 = state_37608__$1;(statearr_37621_37639[(2)] = null);
(statearr_37621_37639[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37609 === (5)))
{var state_37608__$1 = state_37608;var statearr_37622_37640 = state_37608__$1;(statearr_37622_37640[(2)] = null);
(statearr_37622_37640[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37609 === (10)))
{var inst_37600 = (state_37608[(2)]);var state_37608__$1 = state_37608;var statearr_37623_37641 = state_37608__$1;(statearr_37623_37641[(2)] = inst_37600);
(statearr_37623_37641[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37609 === (8)))
{var inst_37590 = (state_37608[(7)]);var state_37608__$1 = state_37608;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37608__$1,(11),out,inst_37590);
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
});})(c__16733__auto___37631,out))
;return ((function (switch__16718__auto__,c__16733__auto___37631,out){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_37627 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_37627[(0)] = state_machine__16719__auto__);
(statearr_37627[(1)] = (1));
return statearr_37627;
});
var state_machine__16719__auto____1 = (function (state_37608){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_37608);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e37628){if((e37628 instanceof Object))
{var ex__16722__auto__ = e37628;var statearr_37629_37642 = state_37608;(statearr_37629_37642[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37608);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e37628;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37643 = state_37608;
state_37608 = G__37643;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_37608){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_37608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto___37631,out))
})();var state__16735__auto__ = (function (){var statearr_37630 = f__16734__auto__.call(null);(statearr_37630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto___37631);
return statearr_37630;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto___37631,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t37651 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37651 = (function (ch,f,map_LT_,meta37652){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta37652 = meta37652;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37651.cljs$lang$type = true;
cljs.core.async.t37651.cljs$lang$ctorStr = "cljs.core.async/t37651";
cljs.core.async.t37651.cljs$lang$ctorPrWriter = (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"cljs.core.async/t37651");
});
cljs.core.async.t37651.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37651.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t37651.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37651.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t37654 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37654 = (function (fn1,_,meta37652,ch,f,map_LT_,meta37655){
this.fn1 = fn1;
this._ = _;
this.meta37652 = meta37652;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta37655 = meta37655;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37654.cljs$lang$type = true;
cljs.core.async.t37654.cljs$lang$ctorStr = "cljs.core.async/t37654";
cljs.core.async.t37654.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"cljs.core.async/t37654");
});})(___$1))
;
cljs.core.async.t37654.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37654.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t37654.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__37644_SHARP_){return f1.call(null,(((p1__37644_SHARP_ == null))?null:self__.f.call(null,p1__37644_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t37654.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_37656){var self__ = this;
var _37656__$1 = this;return self__.meta37655;
});})(___$1))
;
cljs.core.async.t37654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_37656,meta37655__$1){var self__ = this;
var _37656__$1 = this;return (new cljs.core.async.t37654(self__.fn1,self__._,self__.meta37652,self__.ch,self__.f,self__.map_LT_,meta37655__$1));
});})(___$1))
;
cljs.core.async.__GT_t37654 = ((function (___$1){
return (function __GT_t37654(fn1__$1,___$2,meta37652__$1,ch__$2,f__$2,map_LT___$2,meta37655){return (new cljs.core.async.t37654(fn1__$1,___$2,meta37652__$1,ch__$2,f__$2,map_LT___$2,meta37655));
});})(___$1))
;
}
return (new cljs.core.async.t37654(fn1,___$1,self__.meta37652,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__11540__auto__ = ret;if(cljs.core.truth_(and__11540__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__11540__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t37651.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37651.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t37651.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t37651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37653){var self__ = this;
var _37653__$1 = this;return self__.meta37652;
});
cljs.core.async.t37651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37653,meta37652__$1){var self__ = this;
var _37653__$1 = this;return (new cljs.core.async.t37651(self__.ch,self__.f,self__.map_LT_,meta37652__$1));
});
cljs.core.async.__GT_t37651 = (function __GT_t37651(ch__$1,f__$1,map_LT___$1,meta37652){return (new cljs.core.async.t37651(ch__$1,f__$1,map_LT___$1,meta37652));
});
}
return (new cljs.core.async.t37651(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t37660 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37660 = (function (ch,f,map_GT_,meta37661){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta37661 = meta37661;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37660.cljs$lang$type = true;
cljs.core.async.t37660.cljs$lang$ctorStr = "cljs.core.async/t37660";
cljs.core.async.t37660.cljs$lang$ctorPrWriter = (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"cljs.core.async/t37660");
});
cljs.core.async.t37660.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37660.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t37660.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37660.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t37660.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37660.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t37660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37662){var self__ = this;
var _37662__$1 = this;return self__.meta37661;
});
cljs.core.async.t37660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37662,meta37661__$1){var self__ = this;
var _37662__$1 = this;return (new cljs.core.async.t37660(self__.ch,self__.f,self__.map_GT_,meta37661__$1));
});
cljs.core.async.__GT_t37660 = (function __GT_t37660(ch__$1,f__$1,map_GT___$1,meta37661){return (new cljs.core.async.t37660(ch__$1,f__$1,map_GT___$1,meta37661));
});
}
return (new cljs.core.async.t37660(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t37666 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37666 = (function (ch,p,filter_GT_,meta37667){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta37667 = meta37667;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37666.cljs$lang$type = true;
cljs.core.async.t37666.cljs$lang$ctorStr = "cljs.core.async/t37666";
cljs.core.async.t37666.cljs$lang$ctorPrWriter = (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"cljs.core.async/t37666");
});
cljs.core.async.t37666.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37666.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t37666.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37666.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t37666.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37666.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t37666.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t37666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37668){var self__ = this;
var _37668__$1 = this;return self__.meta37667;
});
cljs.core.async.t37666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37668,meta37667__$1){var self__ = this;
var _37668__$1 = this;return (new cljs.core.async.t37666(self__.ch,self__.p,self__.filter_GT_,meta37667__$1));
});
cljs.core.async.__GT_t37666 = (function __GT_t37666(ch__$1,p__$1,filter_GT___$1,meta37667){return (new cljs.core.async.t37666(ch__$1,p__$1,filter_GT___$1,meta37667));
});
}
return (new cljs.core.async.t37666(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16733__auto___37751 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto___37751,out){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto___37751,out){
return (function (state_37730){var state_val_37731 = (state_37730[(1)]);if((state_val_37731 === (7)))
{var inst_37726 = (state_37730[(2)]);var state_37730__$1 = state_37730;var statearr_37732_37752 = state_37730__$1;(statearr_37732_37752[(2)] = inst_37726);
(statearr_37732_37752[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37731 === (1)))
{var state_37730__$1 = state_37730;var statearr_37733_37753 = state_37730__$1;(statearr_37733_37753[(2)] = null);
(statearr_37733_37753[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37731 === (4)))
{var inst_37712 = (state_37730[(7)]);var inst_37712__$1 = (state_37730[(2)]);var inst_37713 = (inst_37712__$1 == null);var state_37730__$1 = (function (){var statearr_37734 = state_37730;(statearr_37734[(7)] = inst_37712__$1);
return statearr_37734;
})();if(cljs.core.truth_(inst_37713))
{var statearr_37735_37754 = state_37730__$1;(statearr_37735_37754[(1)] = (5));
} else
{var statearr_37736_37755 = state_37730__$1;(statearr_37736_37755[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37731 === (6)))
{var inst_37712 = (state_37730[(7)]);var inst_37717 = p.call(null,inst_37712);var state_37730__$1 = state_37730;if(cljs.core.truth_(inst_37717))
{var statearr_37737_37756 = state_37730__$1;(statearr_37737_37756[(1)] = (8));
} else
{var statearr_37738_37757 = state_37730__$1;(statearr_37738_37757[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37731 === (3)))
{var inst_37728 = (state_37730[(2)]);var state_37730__$1 = state_37730;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37730__$1,inst_37728);
} else
{if((state_val_37731 === (2)))
{var state_37730__$1 = state_37730;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37730__$1,(4),ch);
} else
{if((state_val_37731 === (11)))
{var inst_37720 = (state_37730[(2)]);var state_37730__$1 = state_37730;var statearr_37739_37758 = state_37730__$1;(statearr_37739_37758[(2)] = inst_37720);
(statearr_37739_37758[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37731 === (9)))
{var state_37730__$1 = state_37730;var statearr_37740_37759 = state_37730__$1;(statearr_37740_37759[(2)] = null);
(statearr_37740_37759[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37731 === (5)))
{var inst_37715 = cljs.core.async.close_BANG_.call(null,out);var state_37730__$1 = state_37730;var statearr_37741_37760 = state_37730__$1;(statearr_37741_37760[(2)] = inst_37715);
(statearr_37741_37760[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37731 === (10)))
{var inst_37723 = (state_37730[(2)]);var state_37730__$1 = (function (){var statearr_37742 = state_37730;(statearr_37742[(8)] = inst_37723);
return statearr_37742;
})();var statearr_37743_37761 = state_37730__$1;(statearr_37743_37761[(2)] = null);
(statearr_37743_37761[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37731 === (8)))
{var inst_37712 = (state_37730[(7)]);var state_37730__$1 = state_37730;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37730__$1,(11),out,inst_37712);
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
});})(c__16733__auto___37751,out))
;return ((function (switch__16718__auto__,c__16733__auto___37751,out){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_37747 = [null,null,null,null,null,null,null,null,null];(statearr_37747[(0)] = state_machine__16719__auto__);
(statearr_37747[(1)] = (1));
return statearr_37747;
});
var state_machine__16719__auto____1 = (function (state_37730){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_37730);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e37748){if((e37748 instanceof Object))
{var ex__16722__auto__ = e37748;var statearr_37749_37762 = state_37730;(statearr_37749_37762[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37730);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e37748;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37763 = state_37730;
state_37730 = G__37763;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_37730){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_37730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto___37751,out))
})();var state__16735__auto__ = (function (){var statearr_37750 = f__16734__auto__.call(null);(statearr_37750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto___37751);
return statearr_37750;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto___37751,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__){
return (function (state_37929){var state_val_37930 = (state_37929[(1)]);if((state_val_37930 === (7)))
{var inst_37925 = (state_37929[(2)]);var state_37929__$1 = state_37929;var statearr_37931_37972 = state_37929__$1;(statearr_37931_37972[(2)] = inst_37925);
(statearr_37931_37972[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37930 === (20)))
{var inst_37895 = (state_37929[(7)]);var inst_37906 = (state_37929[(2)]);var inst_37907 = cljs.core.next.call(null,inst_37895);var inst_37881 = inst_37907;var inst_37882 = null;var inst_37883 = (0);var inst_37884 = (0);var state_37929__$1 = (function (){var statearr_37932 = state_37929;(statearr_37932[(8)] = inst_37882);
(statearr_37932[(9)] = inst_37881);
(statearr_37932[(10)] = inst_37906);
(statearr_37932[(11)] = inst_37883);
(statearr_37932[(12)] = inst_37884);
return statearr_37932;
})();var statearr_37933_37973 = state_37929__$1;(statearr_37933_37973[(2)] = null);
(statearr_37933_37973[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37930 === (1)))
{var state_37929__$1 = state_37929;var statearr_37934_37974 = state_37929__$1;(statearr_37934_37974[(2)] = null);
(statearr_37934_37974[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37930 === (4)))
{var inst_37870 = (state_37929[(13)]);var inst_37870__$1 = (state_37929[(2)]);var inst_37871 = (inst_37870__$1 == null);var state_37929__$1 = (function (){var statearr_37935 = state_37929;(statearr_37935[(13)] = inst_37870__$1);
return statearr_37935;
})();if(cljs.core.truth_(inst_37871))
{var statearr_37936_37975 = state_37929__$1;(statearr_37936_37975[(1)] = (5));
} else
{var statearr_37937_37976 = state_37929__$1;(statearr_37937_37976[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37930 === (15)))
{var state_37929__$1 = state_37929;var statearr_37941_37977 = state_37929__$1;(statearr_37941_37977[(2)] = null);
(statearr_37941_37977[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37930 === (21)))
{var state_37929__$1 = state_37929;var statearr_37942_37978 = state_37929__$1;(statearr_37942_37978[(2)] = null);
(statearr_37942_37978[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37930 === (13)))
{var inst_37882 = (state_37929[(8)]);var inst_37881 = (state_37929[(9)]);var inst_37883 = (state_37929[(11)]);var inst_37884 = (state_37929[(12)]);var inst_37891 = (state_37929[(2)]);var inst_37892 = (inst_37884 + (1));var tmp37938 = inst_37882;var tmp37939 = inst_37881;var tmp37940 = inst_37883;var inst_37881__$1 = tmp37939;var inst_37882__$1 = tmp37938;var inst_37883__$1 = tmp37940;var inst_37884__$1 = inst_37892;var state_37929__$1 = (function (){var statearr_37943 = state_37929;(statearr_37943[(8)] = inst_37882__$1);
(statearr_37943[(14)] = inst_37891);
(statearr_37943[(9)] = inst_37881__$1);
(statearr_37943[(11)] = inst_37883__$1);
(statearr_37943[(12)] = inst_37884__$1);
return statearr_37943;
})();var statearr_37944_37979 = state_37929__$1;(statearr_37944_37979[(2)] = null);
(statearr_37944_37979[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37930 === (22)))
{var state_37929__$1 = state_37929;var statearr_37945_37980 = state_37929__$1;(statearr_37945_37980[(2)] = null);
(statearr_37945_37980[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37930 === (6)))
{var inst_37870 = (state_37929[(13)]);var inst_37879 = f.call(null,inst_37870);var inst_37880 = cljs.core.seq.call(null,inst_37879);var inst_37881 = inst_37880;var inst_37882 = null;var inst_37883 = (0);var inst_37884 = (0);var state_37929__$1 = (function (){var statearr_37946 = state_37929;(statearr_37946[(8)] = inst_37882);
(statearr_37946[(9)] = inst_37881);
(statearr_37946[(11)] = inst_37883);
(statearr_37946[(12)] = inst_37884);
return statearr_37946;
})();var statearr_37947_37981 = state_37929__$1;(statearr_37947_37981[(2)] = null);
(statearr_37947_37981[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37930 === (17)))
{var inst_37895 = (state_37929[(7)]);var inst_37899 = cljs.core.chunk_first.call(null,inst_37895);var inst_37900 = cljs.core.chunk_rest.call(null,inst_37895);var inst_37901 = cljs.core.count.call(null,inst_37899);var inst_37881 = inst_37900;var inst_37882 = inst_37899;var inst_37883 = inst_37901;var inst_37884 = (0);var state_37929__$1 = (function (){var statearr_37948 = state_37929;(statearr_37948[(8)] = inst_37882);
(statearr_37948[(9)] = inst_37881);
(statearr_37948[(11)] = inst_37883);
(statearr_37948[(12)] = inst_37884);
return statearr_37948;
})();var statearr_37949_37982 = state_37929__$1;(statearr_37949_37982[(2)] = null);
(statearr_37949_37982[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37930 === (3)))
{var inst_37927 = (state_37929[(2)]);var state_37929__$1 = state_37929;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37929__$1,inst_37927);
} else
{if((state_val_37930 === (12)))
{var inst_37915 = (state_37929[(2)]);var state_37929__$1 = state_37929;var statearr_37950_37983 = state_37929__$1;(statearr_37950_37983[(2)] = inst_37915);
(statearr_37950_37983[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37930 === (2)))
{var state_37929__$1 = state_37929;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37929__$1,(4),in$);
} else
{if((state_val_37930 === (23)))
{var inst_37923 = (state_37929[(2)]);var state_37929__$1 = state_37929;var statearr_37951_37984 = state_37929__$1;(statearr_37951_37984[(2)] = inst_37923);
(statearr_37951_37984[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37930 === (19)))
{var inst_37910 = (state_37929[(2)]);var state_37929__$1 = state_37929;var statearr_37952_37985 = state_37929__$1;(statearr_37952_37985[(2)] = inst_37910);
(statearr_37952_37985[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37930 === (11)))
{var inst_37895 = (state_37929[(7)]);var inst_37881 = (state_37929[(9)]);var inst_37895__$1 = cljs.core.seq.call(null,inst_37881);var state_37929__$1 = (function (){var statearr_37953 = state_37929;(statearr_37953[(7)] = inst_37895__$1);
return statearr_37953;
})();if(inst_37895__$1)
{var statearr_37954_37986 = state_37929__$1;(statearr_37954_37986[(1)] = (14));
} else
{var statearr_37955_37987 = state_37929__$1;(statearr_37955_37987[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37930 === (9)))
{var inst_37917 = (state_37929[(2)]);var inst_37918 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_37929__$1 = (function (){var statearr_37956 = state_37929;(statearr_37956[(15)] = inst_37917);
return statearr_37956;
})();if(cljs.core.truth_(inst_37918))
{var statearr_37957_37988 = state_37929__$1;(statearr_37957_37988[(1)] = (21));
} else
{var statearr_37958_37989 = state_37929__$1;(statearr_37958_37989[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37930 === (5)))
{var inst_37873 = cljs.core.async.close_BANG_.call(null,out);var state_37929__$1 = state_37929;var statearr_37959_37990 = state_37929__$1;(statearr_37959_37990[(2)] = inst_37873);
(statearr_37959_37990[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37930 === (14)))
{var inst_37895 = (state_37929[(7)]);var inst_37897 = cljs.core.chunked_seq_QMARK_.call(null,inst_37895);var state_37929__$1 = state_37929;if(inst_37897)
{var statearr_37960_37991 = state_37929__$1;(statearr_37960_37991[(1)] = (17));
} else
{var statearr_37961_37992 = state_37929__$1;(statearr_37961_37992[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37930 === (16)))
{var inst_37913 = (state_37929[(2)]);var state_37929__$1 = state_37929;var statearr_37962_37993 = state_37929__$1;(statearr_37962_37993[(2)] = inst_37913);
(statearr_37962_37993[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37930 === (10)))
{var inst_37882 = (state_37929[(8)]);var inst_37884 = (state_37929[(12)]);var inst_37889 = cljs.core._nth.call(null,inst_37882,inst_37884);var state_37929__$1 = state_37929;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37929__$1,(13),out,inst_37889);
} else
{if((state_val_37930 === (18)))
{var inst_37895 = (state_37929[(7)]);var inst_37904 = cljs.core.first.call(null,inst_37895);var state_37929__$1 = state_37929;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37929__$1,(20),out,inst_37904);
} else
{if((state_val_37930 === (8)))
{var inst_37883 = (state_37929[(11)]);var inst_37884 = (state_37929[(12)]);var inst_37886 = (inst_37884 < inst_37883);var inst_37887 = inst_37886;var state_37929__$1 = state_37929;if(cljs.core.truth_(inst_37887))
{var statearr_37963_37994 = state_37929__$1;(statearr_37963_37994[(1)] = (10));
} else
{var statearr_37964_37995 = state_37929__$1;(statearr_37964_37995[(1)] = (11));
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
});})(c__16733__auto__))
;return ((function (switch__16718__auto__,c__16733__auto__){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_37968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37968[(0)] = state_machine__16719__auto__);
(statearr_37968[(1)] = (1));
return statearr_37968;
});
var state_machine__16719__auto____1 = (function (state_37929){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_37929);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e37969){if((e37969 instanceof Object))
{var ex__16722__auto__ = e37969;var statearr_37970_37996 = state_37929;(statearr_37970_37996[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37929);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e37969;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37997 = state_37929;
state_37929 = G__37997;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_37929){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_37929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__))
})();var state__16735__auto__ = (function (){var statearr_37971 = f__16734__auto__.call(null);(statearr_37971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_37971;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__))
);
return c__16733__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16733__auto___38094 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto___38094,out){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto___38094,out){
return (function (state_38069){var state_val_38070 = (state_38069[(1)]);if((state_val_38070 === (7)))
{var inst_38064 = (state_38069[(2)]);var state_38069__$1 = state_38069;var statearr_38071_38095 = state_38069__$1;(statearr_38071_38095[(2)] = inst_38064);
(statearr_38071_38095[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38070 === (1)))
{var inst_38046 = null;var state_38069__$1 = (function (){var statearr_38072 = state_38069;(statearr_38072[(7)] = inst_38046);
return statearr_38072;
})();var statearr_38073_38096 = state_38069__$1;(statearr_38073_38096[(2)] = null);
(statearr_38073_38096[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38070 === (4)))
{var inst_38049 = (state_38069[(8)]);var inst_38049__$1 = (state_38069[(2)]);var inst_38050 = (inst_38049__$1 == null);var inst_38051 = cljs.core.not.call(null,inst_38050);var state_38069__$1 = (function (){var statearr_38074 = state_38069;(statearr_38074[(8)] = inst_38049__$1);
return statearr_38074;
})();if(inst_38051)
{var statearr_38075_38097 = state_38069__$1;(statearr_38075_38097[(1)] = (5));
} else
{var statearr_38076_38098 = state_38069__$1;(statearr_38076_38098[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38070 === (6)))
{var state_38069__$1 = state_38069;var statearr_38077_38099 = state_38069__$1;(statearr_38077_38099[(2)] = null);
(statearr_38077_38099[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38070 === (3)))
{var inst_38066 = (state_38069[(2)]);var inst_38067 = cljs.core.async.close_BANG_.call(null,out);var state_38069__$1 = (function (){var statearr_38078 = state_38069;(statearr_38078[(9)] = inst_38066);
return statearr_38078;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38069__$1,inst_38067);
} else
{if((state_val_38070 === (2)))
{var state_38069__$1 = state_38069;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38069__$1,(4),ch);
} else
{if((state_val_38070 === (11)))
{var inst_38049 = (state_38069[(8)]);var inst_38058 = (state_38069[(2)]);var inst_38046 = inst_38049;var state_38069__$1 = (function (){var statearr_38079 = state_38069;(statearr_38079[(7)] = inst_38046);
(statearr_38079[(10)] = inst_38058);
return statearr_38079;
})();var statearr_38080_38100 = state_38069__$1;(statearr_38080_38100[(2)] = null);
(statearr_38080_38100[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38070 === (9)))
{var inst_38049 = (state_38069[(8)]);var state_38069__$1 = state_38069;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38069__$1,(11),out,inst_38049);
} else
{if((state_val_38070 === (5)))
{var inst_38046 = (state_38069[(7)]);var inst_38049 = (state_38069[(8)]);var inst_38053 = cljs.core._EQ_.call(null,inst_38049,inst_38046);var state_38069__$1 = state_38069;if(inst_38053)
{var statearr_38082_38101 = state_38069__$1;(statearr_38082_38101[(1)] = (8));
} else
{var statearr_38083_38102 = state_38069__$1;(statearr_38083_38102[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38070 === (10)))
{var inst_38061 = (state_38069[(2)]);var state_38069__$1 = state_38069;var statearr_38084_38103 = state_38069__$1;(statearr_38084_38103[(2)] = inst_38061);
(statearr_38084_38103[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38070 === (8)))
{var inst_38046 = (state_38069[(7)]);var tmp38081 = inst_38046;var inst_38046__$1 = tmp38081;var state_38069__$1 = (function (){var statearr_38085 = state_38069;(statearr_38085[(7)] = inst_38046__$1);
return statearr_38085;
})();var statearr_38086_38104 = state_38069__$1;(statearr_38086_38104[(2)] = null);
(statearr_38086_38104[(1)] = (2));
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
});})(c__16733__auto___38094,out))
;return ((function (switch__16718__auto__,c__16733__auto___38094,out){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_38090 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_38090[(0)] = state_machine__16719__auto__);
(statearr_38090[(1)] = (1));
return statearr_38090;
});
var state_machine__16719__auto____1 = (function (state_38069){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_38069);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e38091){if((e38091 instanceof Object))
{var ex__16722__auto__ = e38091;var statearr_38092_38105 = state_38069;(statearr_38092_38105[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38069);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38091;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38106 = state_38069;
state_38069 = G__38106;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_38069){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_38069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto___38094,out))
})();var state__16735__auto__ = (function (){var statearr_38093 = f__16734__auto__.call(null);(statearr_38093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto___38094);
return statearr_38093;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto___38094,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16733__auto___38241 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto___38241,out){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto___38241,out){
return (function (state_38211){var state_val_38212 = (state_38211[(1)]);if((state_val_38212 === (7)))
{var inst_38207 = (state_38211[(2)]);var state_38211__$1 = state_38211;var statearr_38213_38242 = state_38211__$1;(statearr_38213_38242[(2)] = inst_38207);
(statearr_38213_38242[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38212 === (1)))
{var inst_38174 = (new Array(n));var inst_38175 = inst_38174;var inst_38176 = (0);var state_38211__$1 = (function (){var statearr_38214 = state_38211;(statearr_38214[(7)] = inst_38176);
(statearr_38214[(8)] = inst_38175);
return statearr_38214;
})();var statearr_38215_38243 = state_38211__$1;(statearr_38215_38243[(2)] = null);
(statearr_38215_38243[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38212 === (4)))
{var inst_38179 = (state_38211[(9)]);var inst_38179__$1 = (state_38211[(2)]);var inst_38180 = (inst_38179__$1 == null);var inst_38181 = cljs.core.not.call(null,inst_38180);var state_38211__$1 = (function (){var statearr_38216 = state_38211;(statearr_38216[(9)] = inst_38179__$1);
return statearr_38216;
})();if(inst_38181)
{var statearr_38217_38244 = state_38211__$1;(statearr_38217_38244[(1)] = (5));
} else
{var statearr_38218_38245 = state_38211__$1;(statearr_38218_38245[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38212 === (15)))
{var inst_38201 = (state_38211[(2)]);var state_38211__$1 = state_38211;var statearr_38219_38246 = state_38211__$1;(statearr_38219_38246[(2)] = inst_38201);
(statearr_38219_38246[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38212 === (13)))
{var state_38211__$1 = state_38211;var statearr_38220_38247 = state_38211__$1;(statearr_38220_38247[(2)] = null);
(statearr_38220_38247[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38212 === (6)))
{var inst_38176 = (state_38211[(7)]);var inst_38197 = (inst_38176 > (0));var state_38211__$1 = state_38211;if(cljs.core.truth_(inst_38197))
{var statearr_38221_38248 = state_38211__$1;(statearr_38221_38248[(1)] = (12));
} else
{var statearr_38222_38249 = state_38211__$1;(statearr_38222_38249[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38212 === (3)))
{var inst_38209 = (state_38211[(2)]);var state_38211__$1 = state_38211;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38211__$1,inst_38209);
} else
{if((state_val_38212 === (12)))
{var inst_38175 = (state_38211[(8)]);var inst_38199 = cljs.core.vec.call(null,inst_38175);var state_38211__$1 = state_38211;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38211__$1,(15),out,inst_38199);
} else
{if((state_val_38212 === (2)))
{var state_38211__$1 = state_38211;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38211__$1,(4),ch);
} else
{if((state_val_38212 === (11)))
{var inst_38191 = (state_38211[(2)]);var inst_38192 = (new Array(n));var inst_38175 = inst_38192;var inst_38176 = (0);var state_38211__$1 = (function (){var statearr_38223 = state_38211;(statearr_38223[(7)] = inst_38176);
(statearr_38223[(10)] = inst_38191);
(statearr_38223[(8)] = inst_38175);
return statearr_38223;
})();var statearr_38224_38250 = state_38211__$1;(statearr_38224_38250[(2)] = null);
(statearr_38224_38250[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38212 === (9)))
{var inst_38175 = (state_38211[(8)]);var inst_38189 = cljs.core.vec.call(null,inst_38175);var state_38211__$1 = state_38211;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38211__$1,(11),out,inst_38189);
} else
{if((state_val_38212 === (5)))
{var inst_38176 = (state_38211[(7)]);var inst_38179 = (state_38211[(9)]);var inst_38175 = (state_38211[(8)]);var inst_38184 = (state_38211[(11)]);var inst_38183 = (inst_38175[inst_38176] = inst_38179);var inst_38184__$1 = (inst_38176 + (1));var inst_38185 = (inst_38184__$1 < n);var state_38211__$1 = (function (){var statearr_38225 = state_38211;(statearr_38225[(11)] = inst_38184__$1);
(statearr_38225[(12)] = inst_38183);
return statearr_38225;
})();if(cljs.core.truth_(inst_38185))
{var statearr_38226_38251 = state_38211__$1;(statearr_38226_38251[(1)] = (8));
} else
{var statearr_38227_38252 = state_38211__$1;(statearr_38227_38252[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38212 === (14)))
{var inst_38204 = (state_38211[(2)]);var inst_38205 = cljs.core.async.close_BANG_.call(null,out);var state_38211__$1 = (function (){var statearr_38229 = state_38211;(statearr_38229[(13)] = inst_38204);
return statearr_38229;
})();var statearr_38230_38253 = state_38211__$1;(statearr_38230_38253[(2)] = inst_38205);
(statearr_38230_38253[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38212 === (10)))
{var inst_38195 = (state_38211[(2)]);var state_38211__$1 = state_38211;var statearr_38231_38254 = state_38211__$1;(statearr_38231_38254[(2)] = inst_38195);
(statearr_38231_38254[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38212 === (8)))
{var inst_38175 = (state_38211[(8)]);var inst_38184 = (state_38211[(11)]);var tmp38228 = inst_38175;var inst_38175__$1 = tmp38228;var inst_38176 = inst_38184;var state_38211__$1 = (function (){var statearr_38232 = state_38211;(statearr_38232[(7)] = inst_38176);
(statearr_38232[(8)] = inst_38175__$1);
return statearr_38232;
})();var statearr_38233_38255 = state_38211__$1;(statearr_38233_38255[(2)] = null);
(statearr_38233_38255[(1)] = (2));
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
});})(c__16733__auto___38241,out))
;return ((function (switch__16718__auto__,c__16733__auto___38241,out){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_38237 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38237[(0)] = state_machine__16719__auto__);
(statearr_38237[(1)] = (1));
return statearr_38237;
});
var state_machine__16719__auto____1 = (function (state_38211){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_38211);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e38238){if((e38238 instanceof Object))
{var ex__16722__auto__ = e38238;var statearr_38239_38256 = state_38211;(statearr_38239_38256[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38211);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38238;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38257 = state_38211;
state_38211 = G__38257;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_38211){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_38211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto___38241,out))
})();var state__16735__auto__ = (function (){var statearr_38240 = f__16734__auto__.call(null);(statearr_38240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto___38241);
return statearr_38240;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto___38241,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16733__auto___38400 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto___38400,out){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto___38400,out){
return (function (state_38370){var state_val_38371 = (state_38370[(1)]);if((state_val_38371 === (7)))
{var inst_38366 = (state_38370[(2)]);var state_38370__$1 = state_38370;var statearr_38372_38401 = state_38370__$1;(statearr_38372_38401[(2)] = inst_38366);
(statearr_38372_38401[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38371 === (1)))
{var inst_38329 = [];var inst_38330 = inst_38329;var inst_38331 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_38370__$1 = (function (){var statearr_38373 = state_38370;(statearr_38373[(7)] = inst_38331);
(statearr_38373[(8)] = inst_38330);
return statearr_38373;
})();var statearr_38374_38402 = state_38370__$1;(statearr_38374_38402[(2)] = null);
(statearr_38374_38402[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38371 === (4)))
{var inst_38334 = (state_38370[(9)]);var inst_38334__$1 = (state_38370[(2)]);var inst_38335 = (inst_38334__$1 == null);var inst_38336 = cljs.core.not.call(null,inst_38335);var state_38370__$1 = (function (){var statearr_38375 = state_38370;(statearr_38375[(9)] = inst_38334__$1);
return statearr_38375;
})();if(inst_38336)
{var statearr_38376_38403 = state_38370__$1;(statearr_38376_38403[(1)] = (5));
} else
{var statearr_38377_38404 = state_38370__$1;(statearr_38377_38404[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38371 === (15)))
{var inst_38360 = (state_38370[(2)]);var state_38370__$1 = state_38370;var statearr_38378_38405 = state_38370__$1;(statearr_38378_38405[(2)] = inst_38360);
(statearr_38378_38405[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38371 === (13)))
{var state_38370__$1 = state_38370;var statearr_38379_38406 = state_38370__$1;(statearr_38379_38406[(2)] = null);
(statearr_38379_38406[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38371 === (6)))
{var inst_38330 = (state_38370[(8)]);var inst_38355 = inst_38330.length;var inst_38356 = (inst_38355 > (0));var state_38370__$1 = state_38370;if(cljs.core.truth_(inst_38356))
{var statearr_38380_38407 = state_38370__$1;(statearr_38380_38407[(1)] = (12));
} else
{var statearr_38381_38408 = state_38370__$1;(statearr_38381_38408[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38371 === (3)))
{var inst_38368 = (state_38370[(2)]);var state_38370__$1 = state_38370;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38370__$1,inst_38368);
} else
{if((state_val_38371 === (12)))
{var inst_38330 = (state_38370[(8)]);var inst_38358 = cljs.core.vec.call(null,inst_38330);var state_38370__$1 = state_38370;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38370__$1,(15),out,inst_38358);
} else
{if((state_val_38371 === (2)))
{var state_38370__$1 = state_38370;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38370__$1,(4),ch);
} else
{if((state_val_38371 === (11)))
{var inst_38334 = (state_38370[(9)]);var inst_38338 = (state_38370[(10)]);var inst_38348 = (state_38370[(2)]);var inst_38349 = [];var inst_38350 = inst_38349.push(inst_38334);var inst_38330 = inst_38349;var inst_38331 = inst_38338;var state_38370__$1 = (function (){var statearr_38382 = state_38370;(statearr_38382[(11)] = inst_38350);
(statearr_38382[(12)] = inst_38348);
(statearr_38382[(7)] = inst_38331);
(statearr_38382[(8)] = inst_38330);
return statearr_38382;
})();var statearr_38383_38409 = state_38370__$1;(statearr_38383_38409[(2)] = null);
(statearr_38383_38409[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38371 === (9)))
{var inst_38330 = (state_38370[(8)]);var inst_38346 = cljs.core.vec.call(null,inst_38330);var state_38370__$1 = state_38370;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38370__$1,(11),out,inst_38346);
} else
{if((state_val_38371 === (5)))
{var inst_38334 = (state_38370[(9)]);var inst_38338 = (state_38370[(10)]);var inst_38331 = (state_38370[(7)]);var inst_38338__$1 = f.call(null,inst_38334);var inst_38339 = cljs.core._EQ_.call(null,inst_38338__$1,inst_38331);var inst_38340 = cljs.core.keyword_identical_QMARK_.call(null,inst_38331,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_38341 = (inst_38339) || (inst_38340);var state_38370__$1 = (function (){var statearr_38384 = state_38370;(statearr_38384[(10)] = inst_38338__$1);
return statearr_38384;
})();if(cljs.core.truth_(inst_38341))
{var statearr_38385_38410 = state_38370__$1;(statearr_38385_38410[(1)] = (8));
} else
{var statearr_38386_38411 = state_38370__$1;(statearr_38386_38411[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38371 === (14)))
{var inst_38363 = (state_38370[(2)]);var inst_38364 = cljs.core.async.close_BANG_.call(null,out);var state_38370__$1 = (function (){var statearr_38388 = state_38370;(statearr_38388[(13)] = inst_38363);
return statearr_38388;
})();var statearr_38389_38412 = state_38370__$1;(statearr_38389_38412[(2)] = inst_38364);
(statearr_38389_38412[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38371 === (10)))
{var inst_38353 = (state_38370[(2)]);var state_38370__$1 = state_38370;var statearr_38390_38413 = state_38370__$1;(statearr_38390_38413[(2)] = inst_38353);
(statearr_38390_38413[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38371 === (8)))
{var inst_38334 = (state_38370[(9)]);var inst_38338 = (state_38370[(10)]);var inst_38330 = (state_38370[(8)]);var inst_38343 = inst_38330.push(inst_38334);var tmp38387 = inst_38330;var inst_38330__$1 = tmp38387;var inst_38331 = inst_38338;var state_38370__$1 = (function (){var statearr_38391 = state_38370;(statearr_38391[(14)] = inst_38343);
(statearr_38391[(7)] = inst_38331);
(statearr_38391[(8)] = inst_38330__$1);
return statearr_38391;
})();var statearr_38392_38414 = state_38370__$1;(statearr_38392_38414[(2)] = null);
(statearr_38392_38414[(1)] = (2));
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
});})(c__16733__auto___38400,out))
;return ((function (switch__16718__auto__,c__16733__auto___38400,out){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_38396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38396[(0)] = state_machine__16719__auto__);
(statearr_38396[(1)] = (1));
return statearr_38396;
});
var state_machine__16719__auto____1 = (function (state_38370){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_38370);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e38397){if((e38397 instanceof Object))
{var ex__16722__auto__ = e38397;var statearr_38398_38415 = state_38370;(statearr_38398_38415[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38370);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38397;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38416 = state_38370;
state_38370 = G__38416;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_38370){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_38370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto___38400,out))
})();var state__16735__auto__ = (function (){var statearr_38399 = f__16734__auto__.call(null);(statearr_38399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto___38400);
return statearr_38399;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto___38400,out))
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

//# sourceMappingURL=async.js.map