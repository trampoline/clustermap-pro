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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24561 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24561 = (function (f,fn_handler,meta24562){
this.f = f;
this.fn_handler = fn_handler;
this.meta24562 = meta24562;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24561.cljs$lang$type = true;
cljs.core.async.t24561.cljs$lang$ctorStr = "cljs.core.async/t24561";
cljs.core.async.t24561.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24561");
});
cljs.core.async.t24561.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24561.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24561.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24563){var self__ = this;
var _24563__$1 = this;return self__.meta24562;
});
cljs.core.async.t24561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24563,meta24562__$1){var self__ = this;
var _24563__$1 = this;return (new cljs.core.async.t24561(self__.f,self__.fn_handler,meta24562__$1));
});
cljs.core.async.__GT_t24561 = (function __GT_t24561(f__$1,fn_handler__$1,meta24562){return (new cljs.core.async.t24561(f__$1,fn_handler__$1,meta24562));
});
}
return (new cljs.core.async.t24561(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24565 = buff;if(G__24565)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__24565.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24565.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24565);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24565);
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
{var val_24566 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_24566);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_24566,ret){
return (function (){return fn1.call(null,val_24566);
});})(val_24566,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___24567 = n;var x_24568 = (0);while(true){
if((x_24568 < n__4508__auto___24567))
{(a[x_24568] = (0));
{
var G__24569 = (x_24568 + (1));
x_24568 = G__24569;
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
var G__24570 = (i + (1));
i = G__24570;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t24574 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24574 = (function (flag,alt_flag,meta24575){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24575 = meta24575;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24574.cljs$lang$type = true;
cljs.core.async.t24574.cljs$lang$ctorStr = "cljs.core.async/t24574";
cljs.core.async.t24574.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24574");
});})(flag))
;
cljs.core.async.t24574.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24574.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t24574.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t24574.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24576){var self__ = this;
var _24576__$1 = this;return self__.meta24575;
});})(flag))
;
cljs.core.async.t24574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24576,meta24575__$1){var self__ = this;
var _24576__$1 = this;return (new cljs.core.async.t24574(self__.flag,self__.alt_flag,meta24575__$1));
});})(flag))
;
cljs.core.async.__GT_t24574 = ((function (flag){
return (function __GT_t24574(flag__$1,alt_flag__$1,meta24575){return (new cljs.core.async.t24574(flag__$1,alt_flag__$1,meta24575));
});})(flag))
;
}
return (new cljs.core.async.t24574(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24580 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24580 = (function (cb,flag,alt_handler,meta24581){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24581 = meta24581;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24580.cljs$lang$type = true;
cljs.core.async.t24580.cljs$lang$ctorStr = "cljs.core.async/t24580";
cljs.core.async.t24580.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24580");
});
cljs.core.async.t24580.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24580.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t24580.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t24580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24582){var self__ = this;
var _24582__$1 = this;return self__.meta24581;
});
cljs.core.async.t24580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24582,meta24581__$1){var self__ = this;
var _24582__$1 = this;return (new cljs.core.async.t24580(self__.cb,self__.flag,self__.alt_handler,meta24581__$1));
});
cljs.core.async.__GT_t24580 = (function __GT_t24580(cb__$1,flag__$1,alt_handler__$1,meta24581){return (new cljs.core.async.t24580(cb__$1,flag__$1,alt_handler__$1,meta24581));
});
}
return (new cljs.core.async.t24580(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24583_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24583_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24584_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24584_SHARP_,port], null));
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
var G__24585 = (i + (1));
i = G__24585;
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
var alts_BANG___delegate = function (ports,p__24586){var map__24588 = p__24586;var map__24588__$1 = ((cljs.core.seq_QMARK_.call(null,map__24588))?cljs.core.apply.call(null,cljs.core.hash_map,map__24588):map__24588);var opts = map__24588__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24586 = null;if (arguments.length > 1) {
  p__24586 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24586);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24589){
var ports = cljs.core.first(arglist__24589);
var p__24586 = cljs.core.rest(arglist__24589);
return alts_BANG___delegate(ports,p__24586);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__11154__auto___24684 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___24684){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___24684){
return (function (state_24660){var state_val_24661 = (state_24660[(1)]);if((state_val_24661 === (7)))
{var inst_24656 = (state_24660[(2)]);var state_24660__$1 = state_24660;var statearr_24662_24685 = state_24660__$1;(statearr_24662_24685[(2)] = inst_24656);
(statearr_24662_24685[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24661 === (1)))
{var state_24660__$1 = state_24660;var statearr_24663_24686 = state_24660__$1;(statearr_24663_24686[(2)] = null);
(statearr_24663_24686[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24661 === (4)))
{var inst_24639 = (state_24660[(7)]);var inst_24639__$1 = (state_24660[(2)]);var inst_24640 = (inst_24639__$1 == null);var state_24660__$1 = (function (){var statearr_24664 = state_24660;(statearr_24664[(7)] = inst_24639__$1);
return statearr_24664;
})();if(cljs.core.truth_(inst_24640))
{var statearr_24665_24687 = state_24660__$1;(statearr_24665_24687[(1)] = (5));
} else
{var statearr_24666_24688 = state_24660__$1;(statearr_24666_24688[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24661 === (13)))
{var state_24660__$1 = state_24660;var statearr_24667_24689 = state_24660__$1;(statearr_24667_24689[(2)] = null);
(statearr_24667_24689[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24661 === (6)))
{var inst_24639 = (state_24660[(7)]);var state_24660__$1 = state_24660;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24660__$1,(11),to,inst_24639);
} else
{if((state_val_24661 === (3)))
{var inst_24658 = (state_24660[(2)]);var state_24660__$1 = state_24660;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24660__$1,inst_24658);
} else
{if((state_val_24661 === (12)))
{var state_24660__$1 = state_24660;var statearr_24668_24690 = state_24660__$1;(statearr_24668_24690[(2)] = null);
(statearr_24668_24690[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24661 === (2)))
{var state_24660__$1 = state_24660;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24660__$1,(4),from);
} else
{if((state_val_24661 === (11)))
{var inst_24649 = (state_24660[(2)]);var state_24660__$1 = state_24660;if(cljs.core.truth_(inst_24649))
{var statearr_24669_24691 = state_24660__$1;(statearr_24669_24691[(1)] = (12));
} else
{var statearr_24670_24692 = state_24660__$1;(statearr_24670_24692[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24661 === (9)))
{var state_24660__$1 = state_24660;var statearr_24671_24693 = state_24660__$1;(statearr_24671_24693[(2)] = null);
(statearr_24671_24693[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24661 === (5)))
{var state_24660__$1 = state_24660;if(cljs.core.truth_(close_QMARK_))
{var statearr_24672_24694 = state_24660__$1;(statearr_24672_24694[(1)] = (8));
} else
{var statearr_24673_24695 = state_24660__$1;(statearr_24673_24695[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24661 === (14)))
{var inst_24654 = (state_24660[(2)]);var state_24660__$1 = state_24660;var statearr_24674_24696 = state_24660__$1;(statearr_24674_24696[(2)] = inst_24654);
(statearr_24674_24696[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24661 === (10)))
{var inst_24646 = (state_24660[(2)]);var state_24660__$1 = state_24660;var statearr_24675_24697 = state_24660__$1;(statearr_24675_24697[(2)] = inst_24646);
(statearr_24675_24697[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24661 === (8)))
{var inst_24643 = cljs.core.async.close_BANG_.call(null,to);var state_24660__$1 = state_24660;var statearr_24676_24698 = state_24660__$1;(statearr_24676_24698[(2)] = inst_24643);
(statearr_24676_24698[(1)] = (10));
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
});})(c__11154__auto___24684))
;return ((function (switch__11098__auto__,c__11154__auto___24684){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_24680 = [null,null,null,null,null,null,null,null];(statearr_24680[(0)] = state_machine__11099__auto__);
(statearr_24680[(1)] = (1));
return statearr_24680;
});
var state_machine__11099__auto____1 = (function (state_24660){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24660);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e24681){if((e24681 instanceof Object))
{var ex__11102__auto__ = e24681;var statearr_24682_24699 = state_24660;(statearr_24682_24699[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24660);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24681;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24700 = state_24660;
state_24660 = G__24700;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24660){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___24684))
})();var state__11156__auto__ = (function (){var statearr_24683 = f__11155__auto__.call(null);(statearr_24683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___24684);
return statearr_24683;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___24684))
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
return (function (p__24884){var vec__24885 = p__24884;var v = cljs.core.nth.call(null,vec__24885,(0),null);var p = cljs.core.nth.call(null,vec__24885,(1),null);var job = vec__24885;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__11154__auto___25067 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___25067,res,vec__24885,v,p,job,jobs,results){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___25067,res,vec__24885,v,p,job,jobs,results){
return (function (state_24890){var state_val_24891 = (state_24890[(1)]);if((state_val_24891 === (2)))
{var inst_24887 = (state_24890[(2)]);var inst_24888 = cljs.core.async.close_BANG_.call(null,res);var state_24890__$1 = (function (){var statearr_24892 = state_24890;(statearr_24892[(7)] = inst_24887);
return statearr_24892;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24890__$1,inst_24888);
} else
{if((state_val_24891 === (1)))
{var state_24890__$1 = state_24890;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24890__$1,(2),res,v);
} else
{return null;
}
}
});})(c__11154__auto___25067,res,vec__24885,v,p,job,jobs,results))
;return ((function (switch__11098__auto__,c__11154__auto___25067,res,vec__24885,v,p,job,jobs,results){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_24896 = [null,null,null,null,null,null,null,null];(statearr_24896[(0)] = state_machine__11099__auto__);
(statearr_24896[(1)] = (1));
return statearr_24896;
});
var state_machine__11099__auto____1 = (function (state_24890){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24890);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e24897){if((e24897 instanceof Object))
{var ex__11102__auto__ = e24897;var statearr_24898_25068 = state_24890;(statearr_24898_25068[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24890);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24897;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25069 = state_24890;
state_24890 = G__25069;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24890){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___25067,res,vec__24885,v,p,job,jobs,results))
})();var state__11156__auto__ = (function (){var statearr_24899 = f__11155__auto__.call(null);(statearr_24899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___25067);
return statearr_24899;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___25067,res,vec__24885,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__24900){var vec__24901 = p__24900;var v = cljs.core.nth.call(null,vec__24901,(0),null);var p = cljs.core.nth.call(null,vec__24901,(1),null);var job = vec__24901;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___25070 = n;var __25071 = (0);while(true){
if((__25071 < n__4508__auto___25070))
{var G__24902_25072 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__24902_25072) {
case "async":
var c__11154__auto___25074 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__25071,c__11154__auto___25074,G__24902_25072,n__4508__auto___25070,jobs,results,process,async){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (__25071,c__11154__auto___25074,G__24902_25072,n__4508__auto___25070,jobs,results,process,async){
return (function (state_24915){var state_val_24916 = (state_24915[(1)]);if((state_val_24916 === (7)))
{var inst_24911 = (state_24915[(2)]);var state_24915__$1 = state_24915;var statearr_24917_25075 = state_24915__$1;(statearr_24917_25075[(2)] = inst_24911);
(statearr_24917_25075[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24916 === (6)))
{var state_24915__$1 = state_24915;var statearr_24918_25076 = state_24915__$1;(statearr_24918_25076[(2)] = null);
(statearr_24918_25076[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24916 === (5)))
{var state_24915__$1 = state_24915;var statearr_24919_25077 = state_24915__$1;(statearr_24919_25077[(2)] = null);
(statearr_24919_25077[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24916 === (4)))
{var inst_24905 = (state_24915[(2)]);var inst_24906 = async.call(null,inst_24905);var state_24915__$1 = state_24915;if(cljs.core.truth_(inst_24906))
{var statearr_24920_25078 = state_24915__$1;(statearr_24920_25078[(1)] = (5));
} else
{var statearr_24921_25079 = state_24915__$1;(statearr_24921_25079[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24916 === (3)))
{var inst_24913 = (state_24915[(2)]);var state_24915__$1 = state_24915;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24915__$1,inst_24913);
} else
{if((state_val_24916 === (2)))
{var state_24915__$1 = state_24915;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24915__$1,(4),jobs);
} else
{if((state_val_24916 === (1)))
{var state_24915__$1 = state_24915;var statearr_24922_25080 = state_24915__$1;(statearr_24922_25080[(2)] = null);
(statearr_24922_25080[(1)] = (2));
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
});})(__25071,c__11154__auto___25074,G__24902_25072,n__4508__auto___25070,jobs,results,process,async))
;return ((function (__25071,switch__11098__auto__,c__11154__auto___25074,G__24902_25072,n__4508__auto___25070,jobs,results,process,async){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_24926 = [null,null,null,null,null,null,null];(statearr_24926[(0)] = state_machine__11099__auto__);
(statearr_24926[(1)] = (1));
return statearr_24926;
});
var state_machine__11099__auto____1 = (function (state_24915){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24915);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e24927){if((e24927 instanceof Object))
{var ex__11102__auto__ = e24927;var statearr_24928_25081 = state_24915;(statearr_24928_25081[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24915);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24927;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25082 = state_24915;
state_24915 = G__25082;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24915){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(__25071,switch__11098__auto__,c__11154__auto___25074,G__24902_25072,n__4508__auto___25070,jobs,results,process,async))
})();var state__11156__auto__ = (function (){var statearr_24929 = f__11155__auto__.call(null);(statearr_24929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___25074);
return statearr_24929;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(__25071,c__11154__auto___25074,G__24902_25072,n__4508__auto___25070,jobs,results,process,async))
);

break;
case "compute":
var c__11154__auto___25083 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__25071,c__11154__auto___25083,G__24902_25072,n__4508__auto___25070,jobs,results,process,async){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (__25071,c__11154__auto___25083,G__24902_25072,n__4508__auto___25070,jobs,results,process,async){
return (function (state_24942){var state_val_24943 = (state_24942[(1)]);if((state_val_24943 === (7)))
{var inst_24938 = (state_24942[(2)]);var state_24942__$1 = state_24942;var statearr_24944_25084 = state_24942__$1;(statearr_24944_25084[(2)] = inst_24938);
(statearr_24944_25084[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24943 === (6)))
{var state_24942__$1 = state_24942;var statearr_24945_25085 = state_24942__$1;(statearr_24945_25085[(2)] = null);
(statearr_24945_25085[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24943 === (5)))
{var state_24942__$1 = state_24942;var statearr_24946_25086 = state_24942__$1;(statearr_24946_25086[(2)] = null);
(statearr_24946_25086[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24943 === (4)))
{var inst_24932 = (state_24942[(2)]);var inst_24933 = process.call(null,inst_24932);var state_24942__$1 = state_24942;if(cljs.core.truth_(inst_24933))
{var statearr_24947_25087 = state_24942__$1;(statearr_24947_25087[(1)] = (5));
} else
{var statearr_24948_25088 = state_24942__$1;(statearr_24948_25088[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24943 === (3)))
{var inst_24940 = (state_24942[(2)]);var state_24942__$1 = state_24942;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24942__$1,inst_24940);
} else
{if((state_val_24943 === (2)))
{var state_24942__$1 = state_24942;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24942__$1,(4),jobs);
} else
{if((state_val_24943 === (1)))
{var state_24942__$1 = state_24942;var statearr_24949_25089 = state_24942__$1;(statearr_24949_25089[(2)] = null);
(statearr_24949_25089[(1)] = (2));
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
});})(__25071,c__11154__auto___25083,G__24902_25072,n__4508__auto___25070,jobs,results,process,async))
;return ((function (__25071,switch__11098__auto__,c__11154__auto___25083,G__24902_25072,n__4508__auto___25070,jobs,results,process,async){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_24953 = [null,null,null,null,null,null,null];(statearr_24953[(0)] = state_machine__11099__auto__);
(statearr_24953[(1)] = (1));
return statearr_24953;
});
var state_machine__11099__auto____1 = (function (state_24942){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24942);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e24954){if((e24954 instanceof Object))
{var ex__11102__auto__ = e24954;var statearr_24955_25090 = state_24942;(statearr_24955_25090[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24942);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24954;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25091 = state_24942;
state_24942 = G__25091;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24942){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(__25071,switch__11098__auto__,c__11154__auto___25083,G__24902_25072,n__4508__auto___25070,jobs,results,process,async))
})();var state__11156__auto__ = (function (){var statearr_24956 = f__11155__auto__.call(null);(statearr_24956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___25083);
return statearr_24956;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(__25071,c__11154__auto___25083,G__24902_25072,n__4508__auto___25070,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__25092 = (__25071 + (1));
__25071 = G__25092;
continue;
}
} else
{}
break;
}
var c__11154__auto___25093 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___25093,jobs,results,process,async){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___25093,jobs,results,process,async){
return (function (state_24978){var state_val_24979 = (state_24978[(1)]);if((state_val_24979 === (9)))
{var inst_24971 = (state_24978[(2)]);var state_24978__$1 = (function (){var statearr_24980 = state_24978;(statearr_24980[(7)] = inst_24971);
return statearr_24980;
})();var statearr_24981_25094 = state_24978__$1;(statearr_24981_25094[(2)] = null);
(statearr_24981_25094[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24979 === (8)))
{var inst_24964 = (state_24978[(8)]);var inst_24969 = (state_24978[(2)]);var state_24978__$1 = (function (){var statearr_24982 = state_24978;(statearr_24982[(9)] = inst_24969);
return statearr_24982;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24978__$1,(9),results,inst_24964);
} else
{if((state_val_24979 === (7)))
{var inst_24974 = (state_24978[(2)]);var state_24978__$1 = state_24978;var statearr_24983_25095 = state_24978__$1;(statearr_24983_25095[(2)] = inst_24974);
(statearr_24983_25095[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24979 === (6)))
{var inst_24959 = (state_24978[(10)]);var inst_24964 = (state_24978[(8)]);var inst_24964__$1 = cljs.core.async.chan.call(null,(1));var inst_24965 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24966 = [inst_24959,inst_24964__$1];var inst_24967 = (new cljs.core.PersistentVector(null,2,(5),inst_24965,inst_24966,null));var state_24978__$1 = (function (){var statearr_24984 = state_24978;(statearr_24984[(8)] = inst_24964__$1);
return statearr_24984;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24978__$1,(8),jobs,inst_24967);
} else
{if((state_val_24979 === (5)))
{var inst_24962 = cljs.core.async.close_BANG_.call(null,jobs);var state_24978__$1 = state_24978;var statearr_24985_25096 = state_24978__$1;(statearr_24985_25096[(2)] = inst_24962);
(statearr_24985_25096[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24979 === (4)))
{var inst_24959 = (state_24978[(10)]);var inst_24959__$1 = (state_24978[(2)]);var inst_24960 = (inst_24959__$1 == null);var state_24978__$1 = (function (){var statearr_24986 = state_24978;(statearr_24986[(10)] = inst_24959__$1);
return statearr_24986;
})();if(cljs.core.truth_(inst_24960))
{var statearr_24987_25097 = state_24978__$1;(statearr_24987_25097[(1)] = (5));
} else
{var statearr_24988_25098 = state_24978__$1;(statearr_24988_25098[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24979 === (3)))
{var inst_24976 = (state_24978[(2)]);var state_24978__$1 = state_24978;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24978__$1,inst_24976);
} else
{if((state_val_24979 === (2)))
{var state_24978__$1 = state_24978;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24978__$1,(4),from);
} else
{if((state_val_24979 === (1)))
{var state_24978__$1 = state_24978;var statearr_24989_25099 = state_24978__$1;(statearr_24989_25099[(2)] = null);
(statearr_24989_25099[(1)] = (2));
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
});})(c__11154__auto___25093,jobs,results,process,async))
;return ((function (switch__11098__auto__,c__11154__auto___25093,jobs,results,process,async){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_24993 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24993[(0)] = state_machine__11099__auto__);
(statearr_24993[(1)] = (1));
return statearr_24993;
});
var state_machine__11099__auto____1 = (function (state_24978){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24978);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e24994){if((e24994 instanceof Object))
{var ex__11102__auto__ = e24994;var statearr_24995_25100 = state_24978;(statearr_24995_25100[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24978);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24994;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25101 = state_24978;
state_24978 = G__25101;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24978){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___25093,jobs,results,process,async))
})();var state__11156__auto__ = (function (){var statearr_24996 = f__11155__auto__.call(null);(statearr_24996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___25093);
return statearr_24996;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___25093,jobs,results,process,async))
);
var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,jobs,results,process,async){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,jobs,results,process,async){
return (function (state_25034){var state_val_25035 = (state_25034[(1)]);if((state_val_25035 === (7)))
{var inst_25030 = (state_25034[(2)]);var state_25034__$1 = state_25034;var statearr_25036_25102 = state_25034__$1;(statearr_25036_25102[(2)] = inst_25030);
(statearr_25036_25102[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25035 === (20)))
{var state_25034__$1 = state_25034;var statearr_25037_25103 = state_25034__$1;(statearr_25037_25103[(2)] = null);
(statearr_25037_25103[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25035 === (1)))
{var state_25034__$1 = state_25034;var statearr_25038_25104 = state_25034__$1;(statearr_25038_25104[(2)] = null);
(statearr_25038_25104[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25035 === (4)))
{var inst_24999 = (state_25034[(7)]);var inst_24999__$1 = (state_25034[(2)]);var inst_25000 = (inst_24999__$1 == null);var state_25034__$1 = (function (){var statearr_25039 = state_25034;(statearr_25039[(7)] = inst_24999__$1);
return statearr_25039;
})();if(cljs.core.truth_(inst_25000))
{var statearr_25040_25105 = state_25034__$1;(statearr_25040_25105[(1)] = (5));
} else
{var statearr_25041_25106 = state_25034__$1;(statearr_25041_25106[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25035 === (15)))
{var inst_25012 = (state_25034[(8)]);var state_25034__$1 = state_25034;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25034__$1,(18),to,inst_25012);
} else
{if((state_val_25035 === (21)))
{var inst_25025 = (state_25034[(2)]);var state_25034__$1 = state_25034;var statearr_25042_25107 = state_25034__$1;(statearr_25042_25107[(2)] = inst_25025);
(statearr_25042_25107[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25035 === (13)))
{var inst_25027 = (state_25034[(2)]);var state_25034__$1 = (function (){var statearr_25043 = state_25034;(statearr_25043[(9)] = inst_25027);
return statearr_25043;
})();var statearr_25044_25108 = state_25034__$1;(statearr_25044_25108[(2)] = null);
(statearr_25044_25108[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25035 === (6)))
{var inst_24999 = (state_25034[(7)]);var state_25034__$1 = state_25034;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25034__$1,(11),inst_24999);
} else
{if((state_val_25035 === (17)))
{var inst_25020 = (state_25034[(2)]);var state_25034__$1 = state_25034;if(cljs.core.truth_(inst_25020))
{var statearr_25045_25109 = state_25034__$1;(statearr_25045_25109[(1)] = (19));
} else
{var statearr_25046_25110 = state_25034__$1;(statearr_25046_25110[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25035 === (3)))
{var inst_25032 = (state_25034[(2)]);var state_25034__$1 = state_25034;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25034__$1,inst_25032);
} else
{if((state_val_25035 === (12)))
{var inst_25009 = (state_25034[(10)]);var state_25034__$1 = state_25034;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25034__$1,(14),inst_25009);
} else
{if((state_val_25035 === (2)))
{var state_25034__$1 = state_25034;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25034__$1,(4),results);
} else
{if((state_val_25035 === (19)))
{var state_25034__$1 = state_25034;var statearr_25047_25111 = state_25034__$1;(statearr_25047_25111[(2)] = null);
(statearr_25047_25111[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25035 === (11)))
{var inst_25009 = (state_25034[(2)]);var state_25034__$1 = (function (){var statearr_25048 = state_25034;(statearr_25048[(10)] = inst_25009);
return statearr_25048;
})();var statearr_25049_25112 = state_25034__$1;(statearr_25049_25112[(2)] = null);
(statearr_25049_25112[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25035 === (9)))
{var state_25034__$1 = state_25034;var statearr_25050_25113 = state_25034__$1;(statearr_25050_25113[(2)] = null);
(statearr_25050_25113[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25035 === (5)))
{var state_25034__$1 = state_25034;if(cljs.core.truth_(close_QMARK_))
{var statearr_25051_25114 = state_25034__$1;(statearr_25051_25114[(1)] = (8));
} else
{var statearr_25052_25115 = state_25034__$1;(statearr_25052_25115[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25035 === (14)))
{var inst_25014 = (state_25034[(11)]);var inst_25012 = (state_25034[(8)]);var inst_25012__$1 = (state_25034[(2)]);var inst_25013 = (inst_25012__$1 == null);var inst_25014__$1 = cljs.core.not.call(null,inst_25013);var state_25034__$1 = (function (){var statearr_25053 = state_25034;(statearr_25053[(11)] = inst_25014__$1);
(statearr_25053[(8)] = inst_25012__$1);
return statearr_25053;
})();if(inst_25014__$1)
{var statearr_25054_25116 = state_25034__$1;(statearr_25054_25116[(1)] = (15));
} else
{var statearr_25055_25117 = state_25034__$1;(statearr_25055_25117[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25035 === (16)))
{var inst_25014 = (state_25034[(11)]);var state_25034__$1 = state_25034;var statearr_25056_25118 = state_25034__$1;(statearr_25056_25118[(2)] = inst_25014);
(statearr_25056_25118[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25035 === (10)))
{var inst_25006 = (state_25034[(2)]);var state_25034__$1 = state_25034;var statearr_25057_25119 = state_25034__$1;(statearr_25057_25119[(2)] = inst_25006);
(statearr_25057_25119[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25035 === (18)))
{var inst_25017 = (state_25034[(2)]);var state_25034__$1 = state_25034;var statearr_25058_25120 = state_25034__$1;(statearr_25058_25120[(2)] = inst_25017);
(statearr_25058_25120[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25035 === (8)))
{var inst_25003 = cljs.core.async.close_BANG_.call(null,to);var state_25034__$1 = state_25034;var statearr_25059_25121 = state_25034__$1;(statearr_25059_25121[(2)] = inst_25003);
(statearr_25059_25121[(1)] = (10));
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
});})(c__11154__auto__,jobs,results,process,async))
;return ((function (switch__11098__auto__,c__11154__auto__,jobs,results,process,async){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_25063 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25063[(0)] = state_machine__11099__auto__);
(statearr_25063[(1)] = (1));
return statearr_25063;
});
var state_machine__11099__auto____1 = (function (state_25034){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_25034);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e25064){if((e25064 instanceof Object))
{var ex__11102__auto__ = e25064;var statearr_25065_25122 = state_25034;(statearr_25065_25122[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25034);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25064;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25123 = state_25034;
state_25034 = G__25123;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_25034){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_25034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,jobs,results,process,async))
})();var state__11156__auto__ = (function (){var statearr_25066 = f__11155__auto__.call(null);(statearr_25066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_25066;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,jobs,results,process,async))
);
return c__11154__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11154__auto___25224 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___25224,tc,fc){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___25224,tc,fc){
return (function (state_25199){var state_val_25200 = (state_25199[(1)]);if((state_val_25200 === (7)))
{var inst_25195 = (state_25199[(2)]);var state_25199__$1 = state_25199;var statearr_25201_25225 = state_25199__$1;(statearr_25201_25225[(2)] = inst_25195);
(statearr_25201_25225[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25200 === (1)))
{var state_25199__$1 = state_25199;var statearr_25202_25226 = state_25199__$1;(statearr_25202_25226[(2)] = null);
(statearr_25202_25226[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25200 === (4)))
{var inst_25176 = (state_25199[(7)]);var inst_25176__$1 = (state_25199[(2)]);var inst_25177 = (inst_25176__$1 == null);var state_25199__$1 = (function (){var statearr_25203 = state_25199;(statearr_25203[(7)] = inst_25176__$1);
return statearr_25203;
})();if(cljs.core.truth_(inst_25177))
{var statearr_25204_25227 = state_25199__$1;(statearr_25204_25227[(1)] = (5));
} else
{var statearr_25205_25228 = state_25199__$1;(statearr_25205_25228[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25200 === (13)))
{var state_25199__$1 = state_25199;var statearr_25206_25229 = state_25199__$1;(statearr_25206_25229[(2)] = null);
(statearr_25206_25229[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25200 === (6)))
{var inst_25176 = (state_25199[(7)]);var inst_25182 = p.call(null,inst_25176);var state_25199__$1 = state_25199;if(cljs.core.truth_(inst_25182))
{var statearr_25207_25230 = state_25199__$1;(statearr_25207_25230[(1)] = (9));
} else
{var statearr_25208_25231 = state_25199__$1;(statearr_25208_25231[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25200 === (3)))
{var inst_25197 = (state_25199[(2)]);var state_25199__$1 = state_25199;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25199__$1,inst_25197);
} else
{if((state_val_25200 === (12)))
{var state_25199__$1 = state_25199;var statearr_25209_25232 = state_25199__$1;(statearr_25209_25232[(2)] = null);
(statearr_25209_25232[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25200 === (2)))
{var state_25199__$1 = state_25199;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25199__$1,(4),ch);
} else
{if((state_val_25200 === (11)))
{var inst_25176 = (state_25199[(7)]);var inst_25186 = (state_25199[(2)]);var state_25199__$1 = state_25199;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25199__$1,(8),inst_25186,inst_25176);
} else
{if((state_val_25200 === (9)))
{var state_25199__$1 = state_25199;var statearr_25210_25233 = state_25199__$1;(statearr_25210_25233[(2)] = tc);
(statearr_25210_25233[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25200 === (5)))
{var inst_25179 = cljs.core.async.close_BANG_.call(null,tc);var inst_25180 = cljs.core.async.close_BANG_.call(null,fc);var state_25199__$1 = (function (){var statearr_25211 = state_25199;(statearr_25211[(8)] = inst_25179);
return statearr_25211;
})();var statearr_25212_25234 = state_25199__$1;(statearr_25212_25234[(2)] = inst_25180);
(statearr_25212_25234[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25200 === (14)))
{var inst_25193 = (state_25199[(2)]);var state_25199__$1 = state_25199;var statearr_25213_25235 = state_25199__$1;(statearr_25213_25235[(2)] = inst_25193);
(statearr_25213_25235[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25200 === (10)))
{var state_25199__$1 = state_25199;var statearr_25214_25236 = state_25199__$1;(statearr_25214_25236[(2)] = fc);
(statearr_25214_25236[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25200 === (8)))
{var inst_25188 = (state_25199[(2)]);var state_25199__$1 = state_25199;if(cljs.core.truth_(inst_25188))
{var statearr_25215_25237 = state_25199__$1;(statearr_25215_25237[(1)] = (12));
} else
{var statearr_25216_25238 = state_25199__$1;(statearr_25216_25238[(1)] = (13));
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
});})(c__11154__auto___25224,tc,fc))
;return ((function (switch__11098__auto__,c__11154__auto___25224,tc,fc){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_25220 = [null,null,null,null,null,null,null,null,null];(statearr_25220[(0)] = state_machine__11099__auto__);
(statearr_25220[(1)] = (1));
return statearr_25220;
});
var state_machine__11099__auto____1 = (function (state_25199){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_25199);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e25221){if((e25221 instanceof Object))
{var ex__11102__auto__ = e25221;var statearr_25222_25239 = state_25199;(statearr_25222_25239[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25199);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25221;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25240 = state_25199;
state_25199 = G__25240;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_25199){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_25199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___25224,tc,fc))
})();var state__11156__auto__ = (function (){var statearr_25223 = f__11155__auto__.call(null);(statearr_25223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___25224);
return statearr_25223;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___25224,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__){
return (function (state_25287){var state_val_25288 = (state_25287[(1)]);if((state_val_25288 === (7)))
{var inst_25283 = (state_25287[(2)]);var state_25287__$1 = state_25287;var statearr_25289_25305 = state_25287__$1;(statearr_25289_25305[(2)] = inst_25283);
(statearr_25289_25305[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25288 === (6)))
{var inst_25276 = (state_25287[(7)]);var inst_25273 = (state_25287[(8)]);var inst_25280 = f.call(null,inst_25273,inst_25276);var inst_25273__$1 = inst_25280;var state_25287__$1 = (function (){var statearr_25290 = state_25287;(statearr_25290[(8)] = inst_25273__$1);
return statearr_25290;
})();var statearr_25291_25306 = state_25287__$1;(statearr_25291_25306[(2)] = null);
(statearr_25291_25306[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25288 === (5)))
{var inst_25273 = (state_25287[(8)]);var state_25287__$1 = state_25287;var statearr_25292_25307 = state_25287__$1;(statearr_25292_25307[(2)] = inst_25273);
(statearr_25292_25307[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25288 === (4)))
{var inst_25276 = (state_25287[(7)]);var inst_25276__$1 = (state_25287[(2)]);var inst_25277 = (inst_25276__$1 == null);var state_25287__$1 = (function (){var statearr_25293 = state_25287;(statearr_25293[(7)] = inst_25276__$1);
return statearr_25293;
})();if(cljs.core.truth_(inst_25277))
{var statearr_25294_25308 = state_25287__$1;(statearr_25294_25308[(1)] = (5));
} else
{var statearr_25295_25309 = state_25287__$1;(statearr_25295_25309[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25288 === (3)))
{var inst_25285 = (state_25287[(2)]);var state_25287__$1 = state_25287;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25287__$1,inst_25285);
} else
{if((state_val_25288 === (2)))
{var state_25287__$1 = state_25287;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25287__$1,(4),ch);
} else
{if((state_val_25288 === (1)))
{var inst_25273 = init;var state_25287__$1 = (function (){var statearr_25296 = state_25287;(statearr_25296[(8)] = inst_25273);
return statearr_25296;
})();var statearr_25297_25310 = state_25287__$1;(statearr_25297_25310[(2)] = null);
(statearr_25297_25310[(1)] = (2));
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
});})(c__11154__auto__))
;return ((function (switch__11098__auto__,c__11154__auto__){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_25301 = [null,null,null,null,null,null,null,null,null];(statearr_25301[(0)] = state_machine__11099__auto__);
(statearr_25301[(1)] = (1));
return statearr_25301;
});
var state_machine__11099__auto____1 = (function (state_25287){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_25287);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e25302){if((e25302 instanceof Object))
{var ex__11102__auto__ = e25302;var statearr_25303_25311 = state_25287;(statearr_25303_25311[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25287);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25302;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25312 = state_25287;
state_25287 = G__25312;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_25287){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_25287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__))
})();var state__11156__auto__ = (function (){var statearr_25304 = f__11155__auto__.call(null);(statearr_25304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_25304;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__))
);
return c__11154__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__){
return (function (state_25386){var state_val_25387 = (state_25386[(1)]);if((state_val_25387 === (7)))
{var inst_25368 = (state_25386[(2)]);var state_25386__$1 = state_25386;var statearr_25388_25411 = state_25386__$1;(statearr_25388_25411[(2)] = inst_25368);
(statearr_25388_25411[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25387 === (1)))
{var inst_25362 = cljs.core.seq.call(null,coll);var inst_25363 = inst_25362;var state_25386__$1 = (function (){var statearr_25389 = state_25386;(statearr_25389[(7)] = inst_25363);
return statearr_25389;
})();var statearr_25390_25412 = state_25386__$1;(statearr_25390_25412[(2)] = null);
(statearr_25390_25412[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25387 === (4)))
{var inst_25363 = (state_25386[(7)]);var inst_25366 = cljs.core.first.call(null,inst_25363);var state_25386__$1 = state_25386;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25386__$1,(7),ch,inst_25366);
} else
{if((state_val_25387 === (13)))
{var inst_25380 = (state_25386[(2)]);var state_25386__$1 = state_25386;var statearr_25391_25413 = state_25386__$1;(statearr_25391_25413[(2)] = inst_25380);
(statearr_25391_25413[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25387 === (6)))
{var inst_25371 = (state_25386[(2)]);var state_25386__$1 = state_25386;if(cljs.core.truth_(inst_25371))
{var statearr_25392_25414 = state_25386__$1;(statearr_25392_25414[(1)] = (8));
} else
{var statearr_25393_25415 = state_25386__$1;(statearr_25393_25415[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25387 === (3)))
{var inst_25384 = (state_25386[(2)]);var state_25386__$1 = state_25386;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25386__$1,inst_25384);
} else
{if((state_val_25387 === (12)))
{var state_25386__$1 = state_25386;var statearr_25394_25416 = state_25386__$1;(statearr_25394_25416[(2)] = null);
(statearr_25394_25416[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25387 === (2)))
{var inst_25363 = (state_25386[(7)]);var state_25386__$1 = state_25386;if(cljs.core.truth_(inst_25363))
{var statearr_25395_25417 = state_25386__$1;(statearr_25395_25417[(1)] = (4));
} else
{var statearr_25396_25418 = state_25386__$1;(statearr_25396_25418[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25387 === (11)))
{var inst_25377 = cljs.core.async.close_BANG_.call(null,ch);var state_25386__$1 = state_25386;var statearr_25397_25419 = state_25386__$1;(statearr_25397_25419[(2)] = inst_25377);
(statearr_25397_25419[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25387 === (9)))
{var state_25386__$1 = state_25386;if(cljs.core.truth_(close_QMARK_))
{var statearr_25398_25420 = state_25386__$1;(statearr_25398_25420[(1)] = (11));
} else
{var statearr_25399_25421 = state_25386__$1;(statearr_25399_25421[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25387 === (5)))
{var inst_25363 = (state_25386[(7)]);var state_25386__$1 = state_25386;var statearr_25400_25422 = state_25386__$1;(statearr_25400_25422[(2)] = inst_25363);
(statearr_25400_25422[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25387 === (10)))
{var inst_25382 = (state_25386[(2)]);var state_25386__$1 = state_25386;var statearr_25401_25423 = state_25386__$1;(statearr_25401_25423[(2)] = inst_25382);
(statearr_25401_25423[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25387 === (8)))
{var inst_25363 = (state_25386[(7)]);var inst_25373 = cljs.core.next.call(null,inst_25363);var inst_25363__$1 = inst_25373;var state_25386__$1 = (function (){var statearr_25402 = state_25386;(statearr_25402[(7)] = inst_25363__$1);
return statearr_25402;
})();var statearr_25403_25424 = state_25386__$1;(statearr_25403_25424[(2)] = null);
(statearr_25403_25424[(1)] = (2));
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
});})(c__11154__auto__))
;return ((function (switch__11098__auto__,c__11154__auto__){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_25407 = [null,null,null,null,null,null,null,null];(statearr_25407[(0)] = state_machine__11099__auto__);
(statearr_25407[(1)] = (1));
return statearr_25407;
});
var state_machine__11099__auto____1 = (function (state_25386){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_25386);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e25408){if((e25408 instanceof Object))
{var ex__11102__auto__ = e25408;var statearr_25409_25425 = state_25386;(statearr_25409_25425[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25386);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25408;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25426 = state_25386;
state_25386 = G__25426;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_25386){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_25386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__))
})();var state__11156__auto__ = (function (){var statearr_25410 = f__11155__auto__.call(null);(statearr_25410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_25410;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__))
);
return c__11154__auto__;
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
cljs.core.async.Mux = (function (){var obj25428 = {};return obj25428;
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
cljs.core.async.Mult = (function (){var obj25430 = {};return obj25430;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25652 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25652 = (function (cs,ch,mult,meta25653){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25653 = meta25653;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25652.cljs$lang$type = true;
cljs.core.async.t25652.cljs$lang$ctorStr = "cljs.core.async/t25652";
cljs.core.async.t25652.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25652");
});})(cs))
;
cljs.core.async.t25652.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25652.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25652.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25652.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25652.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25652.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25652.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25654){var self__ = this;
var _25654__$1 = this;return self__.meta25653;
});})(cs))
;
cljs.core.async.t25652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25654,meta25653__$1){var self__ = this;
var _25654__$1 = this;return (new cljs.core.async.t25652(self__.cs,self__.ch,self__.mult,meta25653__$1));
});})(cs))
;
cljs.core.async.__GT_t25652 = ((function (cs){
return (function __GT_t25652(cs__$1,ch__$1,mult__$1,meta25653){return (new cljs.core.async.t25652(cs__$1,ch__$1,mult__$1,meta25653));
});})(cs))
;
}
return (new cljs.core.async.t25652(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11154__auto___25873 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___25873,cs,m,dchan,dctr,done){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___25873,cs,m,dchan,dctr,done){
return (function (state_25785){var state_val_25786 = (state_25785[(1)]);if((state_val_25786 === (7)))
{var inst_25781 = (state_25785[(2)]);var state_25785__$1 = state_25785;var statearr_25787_25874 = state_25785__$1;(statearr_25787_25874[(2)] = inst_25781);
(statearr_25787_25874[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (20)))
{var inst_25686 = (state_25785[(7)]);var inst_25696 = cljs.core.first.call(null,inst_25686);var inst_25697 = cljs.core.nth.call(null,inst_25696,(0),null);var inst_25698 = cljs.core.nth.call(null,inst_25696,(1),null);var state_25785__$1 = (function (){var statearr_25788 = state_25785;(statearr_25788[(8)] = inst_25697);
return statearr_25788;
})();if(cljs.core.truth_(inst_25698))
{var statearr_25789_25875 = state_25785__$1;(statearr_25789_25875[(1)] = (22));
} else
{var statearr_25790_25876 = state_25785__$1;(statearr_25790_25876[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (27)))
{var inst_25728 = (state_25785[(9)]);var inst_25657 = (state_25785[(10)]);var inst_25726 = (state_25785[(11)]);var inst_25733 = (state_25785[(12)]);var inst_25733__$1 = cljs.core._nth.call(null,inst_25726,inst_25728);var inst_25734 = cljs.core.async.put_BANG_.call(null,inst_25733__$1,inst_25657,done);var state_25785__$1 = (function (){var statearr_25791 = state_25785;(statearr_25791[(12)] = inst_25733__$1);
return statearr_25791;
})();if(cljs.core.truth_(inst_25734))
{var statearr_25792_25877 = state_25785__$1;(statearr_25792_25877[(1)] = (30));
} else
{var statearr_25793_25878 = state_25785__$1;(statearr_25793_25878[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (1)))
{var state_25785__$1 = state_25785;var statearr_25794_25879 = state_25785__$1;(statearr_25794_25879[(2)] = null);
(statearr_25794_25879[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (24)))
{var inst_25686 = (state_25785[(7)]);var inst_25703 = (state_25785[(2)]);var inst_25704 = cljs.core.next.call(null,inst_25686);var inst_25666 = inst_25704;var inst_25667 = null;var inst_25668 = (0);var inst_25669 = (0);var state_25785__$1 = (function (){var statearr_25795 = state_25785;(statearr_25795[(13)] = inst_25668);
(statearr_25795[(14)] = inst_25667);
(statearr_25795[(15)] = inst_25669);
(statearr_25795[(16)] = inst_25703);
(statearr_25795[(17)] = inst_25666);
return statearr_25795;
})();var statearr_25796_25880 = state_25785__$1;(statearr_25796_25880[(2)] = null);
(statearr_25796_25880[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (39)))
{var state_25785__$1 = state_25785;var statearr_25800_25881 = state_25785__$1;(statearr_25800_25881[(2)] = null);
(statearr_25800_25881[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (4)))
{var inst_25657 = (state_25785[(10)]);var inst_25657__$1 = (state_25785[(2)]);var inst_25658 = (inst_25657__$1 == null);var state_25785__$1 = (function (){var statearr_25801 = state_25785;(statearr_25801[(10)] = inst_25657__$1);
return statearr_25801;
})();if(cljs.core.truth_(inst_25658))
{var statearr_25802_25882 = state_25785__$1;(statearr_25802_25882[(1)] = (5));
} else
{var statearr_25803_25883 = state_25785__$1;(statearr_25803_25883[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (15)))
{var inst_25668 = (state_25785[(13)]);var inst_25667 = (state_25785[(14)]);var inst_25669 = (state_25785[(15)]);var inst_25666 = (state_25785[(17)]);var inst_25682 = (state_25785[(2)]);var inst_25683 = (inst_25669 + (1));var tmp25797 = inst_25668;var tmp25798 = inst_25667;var tmp25799 = inst_25666;var inst_25666__$1 = tmp25799;var inst_25667__$1 = tmp25798;var inst_25668__$1 = tmp25797;var inst_25669__$1 = inst_25683;var state_25785__$1 = (function (){var statearr_25804 = state_25785;(statearr_25804[(13)] = inst_25668__$1);
(statearr_25804[(14)] = inst_25667__$1);
(statearr_25804[(15)] = inst_25669__$1);
(statearr_25804[(18)] = inst_25682);
(statearr_25804[(17)] = inst_25666__$1);
return statearr_25804;
})();var statearr_25805_25884 = state_25785__$1;(statearr_25805_25884[(2)] = null);
(statearr_25805_25884[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (21)))
{var inst_25707 = (state_25785[(2)]);var state_25785__$1 = state_25785;var statearr_25809_25885 = state_25785__$1;(statearr_25809_25885[(2)] = inst_25707);
(statearr_25809_25885[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (31)))
{var inst_25733 = (state_25785[(12)]);var inst_25737 = done.call(null,null);var inst_25738 = cljs.core.async.untap_STAR_.call(null,m,inst_25733);var state_25785__$1 = (function (){var statearr_25810 = state_25785;(statearr_25810[(19)] = inst_25737);
return statearr_25810;
})();var statearr_25811_25886 = state_25785__$1;(statearr_25811_25886[(2)] = inst_25738);
(statearr_25811_25886[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (32)))
{var inst_25728 = (state_25785[(9)]);var inst_25725 = (state_25785[(20)]);var inst_25727 = (state_25785[(21)]);var inst_25726 = (state_25785[(11)]);var inst_25740 = (state_25785[(2)]);var inst_25741 = (inst_25728 + (1));var tmp25806 = inst_25725;var tmp25807 = inst_25727;var tmp25808 = inst_25726;var inst_25725__$1 = tmp25806;var inst_25726__$1 = tmp25808;var inst_25727__$1 = tmp25807;var inst_25728__$1 = inst_25741;var state_25785__$1 = (function (){var statearr_25812 = state_25785;(statearr_25812[(22)] = inst_25740);
(statearr_25812[(9)] = inst_25728__$1);
(statearr_25812[(20)] = inst_25725__$1);
(statearr_25812[(21)] = inst_25727__$1);
(statearr_25812[(11)] = inst_25726__$1);
return statearr_25812;
})();var statearr_25813_25887 = state_25785__$1;(statearr_25813_25887[(2)] = null);
(statearr_25813_25887[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (40)))
{var inst_25753 = (state_25785[(23)]);var inst_25757 = done.call(null,null);var inst_25758 = cljs.core.async.untap_STAR_.call(null,m,inst_25753);var state_25785__$1 = (function (){var statearr_25814 = state_25785;(statearr_25814[(24)] = inst_25757);
return statearr_25814;
})();var statearr_25815_25888 = state_25785__$1;(statearr_25815_25888[(2)] = inst_25758);
(statearr_25815_25888[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (33)))
{var inst_25744 = (state_25785[(25)]);var inst_25746 = cljs.core.chunked_seq_QMARK_.call(null,inst_25744);var state_25785__$1 = state_25785;if(inst_25746)
{var statearr_25816_25889 = state_25785__$1;(statearr_25816_25889[(1)] = (36));
} else
{var statearr_25817_25890 = state_25785__$1;(statearr_25817_25890[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (13)))
{var inst_25676 = (state_25785[(26)]);var inst_25679 = cljs.core.async.close_BANG_.call(null,inst_25676);var state_25785__$1 = state_25785;var statearr_25818_25891 = state_25785__$1;(statearr_25818_25891[(2)] = inst_25679);
(statearr_25818_25891[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (22)))
{var inst_25697 = (state_25785[(8)]);var inst_25700 = cljs.core.async.close_BANG_.call(null,inst_25697);var state_25785__$1 = state_25785;var statearr_25819_25892 = state_25785__$1;(statearr_25819_25892[(2)] = inst_25700);
(statearr_25819_25892[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (36)))
{var inst_25744 = (state_25785[(25)]);var inst_25748 = cljs.core.chunk_first.call(null,inst_25744);var inst_25749 = cljs.core.chunk_rest.call(null,inst_25744);var inst_25750 = cljs.core.count.call(null,inst_25748);var inst_25725 = inst_25749;var inst_25726 = inst_25748;var inst_25727 = inst_25750;var inst_25728 = (0);var state_25785__$1 = (function (){var statearr_25820 = state_25785;(statearr_25820[(9)] = inst_25728);
(statearr_25820[(20)] = inst_25725);
(statearr_25820[(21)] = inst_25727);
(statearr_25820[(11)] = inst_25726);
return statearr_25820;
})();var statearr_25821_25893 = state_25785__$1;(statearr_25821_25893[(2)] = null);
(statearr_25821_25893[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (41)))
{var inst_25744 = (state_25785[(25)]);var inst_25760 = (state_25785[(2)]);var inst_25761 = cljs.core.next.call(null,inst_25744);var inst_25725 = inst_25761;var inst_25726 = null;var inst_25727 = (0);var inst_25728 = (0);var state_25785__$1 = (function (){var statearr_25822 = state_25785;(statearr_25822[(9)] = inst_25728);
(statearr_25822[(20)] = inst_25725);
(statearr_25822[(21)] = inst_25727);
(statearr_25822[(11)] = inst_25726);
(statearr_25822[(27)] = inst_25760);
return statearr_25822;
})();var statearr_25823_25894 = state_25785__$1;(statearr_25823_25894[(2)] = null);
(statearr_25823_25894[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (43)))
{var state_25785__$1 = state_25785;var statearr_25824_25895 = state_25785__$1;(statearr_25824_25895[(2)] = null);
(statearr_25824_25895[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (29)))
{var inst_25769 = (state_25785[(2)]);var state_25785__$1 = state_25785;var statearr_25825_25896 = state_25785__$1;(statearr_25825_25896[(2)] = inst_25769);
(statearr_25825_25896[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (44)))
{var inst_25778 = (state_25785[(2)]);var state_25785__$1 = (function (){var statearr_25826 = state_25785;(statearr_25826[(28)] = inst_25778);
return statearr_25826;
})();var statearr_25827_25897 = state_25785__$1;(statearr_25827_25897[(2)] = null);
(statearr_25827_25897[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (6)))
{var inst_25717 = (state_25785[(29)]);var inst_25716 = cljs.core.deref.call(null,cs);var inst_25717__$1 = cljs.core.keys.call(null,inst_25716);var inst_25718 = cljs.core.count.call(null,inst_25717__$1);var inst_25719 = cljs.core.reset_BANG_.call(null,dctr,inst_25718);var inst_25724 = cljs.core.seq.call(null,inst_25717__$1);var inst_25725 = inst_25724;var inst_25726 = null;var inst_25727 = (0);var inst_25728 = (0);var state_25785__$1 = (function (){var statearr_25828 = state_25785;(statearr_25828[(9)] = inst_25728);
(statearr_25828[(20)] = inst_25725);
(statearr_25828[(30)] = inst_25719);
(statearr_25828[(29)] = inst_25717__$1);
(statearr_25828[(21)] = inst_25727);
(statearr_25828[(11)] = inst_25726);
return statearr_25828;
})();var statearr_25829_25898 = state_25785__$1;(statearr_25829_25898[(2)] = null);
(statearr_25829_25898[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (28)))
{var inst_25744 = (state_25785[(25)]);var inst_25725 = (state_25785[(20)]);var inst_25744__$1 = cljs.core.seq.call(null,inst_25725);var state_25785__$1 = (function (){var statearr_25830 = state_25785;(statearr_25830[(25)] = inst_25744__$1);
return statearr_25830;
})();if(inst_25744__$1)
{var statearr_25831_25899 = state_25785__$1;(statearr_25831_25899[(1)] = (33));
} else
{var statearr_25832_25900 = state_25785__$1;(statearr_25832_25900[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (25)))
{var inst_25728 = (state_25785[(9)]);var inst_25727 = (state_25785[(21)]);var inst_25730 = (inst_25728 < inst_25727);var inst_25731 = inst_25730;var state_25785__$1 = state_25785;if(cljs.core.truth_(inst_25731))
{var statearr_25833_25901 = state_25785__$1;(statearr_25833_25901[(1)] = (27));
} else
{var statearr_25834_25902 = state_25785__$1;(statearr_25834_25902[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (34)))
{var state_25785__$1 = state_25785;var statearr_25835_25903 = state_25785__$1;(statearr_25835_25903[(2)] = null);
(statearr_25835_25903[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (17)))
{var state_25785__$1 = state_25785;var statearr_25836_25904 = state_25785__$1;(statearr_25836_25904[(2)] = null);
(statearr_25836_25904[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (3)))
{var inst_25783 = (state_25785[(2)]);var state_25785__$1 = state_25785;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25785__$1,inst_25783);
} else
{if((state_val_25786 === (12)))
{var inst_25712 = (state_25785[(2)]);var state_25785__$1 = state_25785;var statearr_25837_25905 = state_25785__$1;(statearr_25837_25905[(2)] = inst_25712);
(statearr_25837_25905[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (2)))
{var state_25785__$1 = state_25785;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25785__$1,(4),ch);
} else
{if((state_val_25786 === (23)))
{var state_25785__$1 = state_25785;var statearr_25838_25906 = state_25785__$1;(statearr_25838_25906[(2)] = null);
(statearr_25838_25906[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (35)))
{var inst_25767 = (state_25785[(2)]);var state_25785__$1 = state_25785;var statearr_25839_25907 = state_25785__$1;(statearr_25839_25907[(2)] = inst_25767);
(statearr_25839_25907[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (19)))
{var inst_25686 = (state_25785[(7)]);var inst_25690 = cljs.core.chunk_first.call(null,inst_25686);var inst_25691 = cljs.core.chunk_rest.call(null,inst_25686);var inst_25692 = cljs.core.count.call(null,inst_25690);var inst_25666 = inst_25691;var inst_25667 = inst_25690;var inst_25668 = inst_25692;var inst_25669 = (0);var state_25785__$1 = (function (){var statearr_25840 = state_25785;(statearr_25840[(13)] = inst_25668);
(statearr_25840[(14)] = inst_25667);
(statearr_25840[(15)] = inst_25669);
(statearr_25840[(17)] = inst_25666);
return statearr_25840;
})();var statearr_25841_25908 = state_25785__$1;(statearr_25841_25908[(2)] = null);
(statearr_25841_25908[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (11)))
{var inst_25686 = (state_25785[(7)]);var inst_25666 = (state_25785[(17)]);var inst_25686__$1 = cljs.core.seq.call(null,inst_25666);var state_25785__$1 = (function (){var statearr_25842 = state_25785;(statearr_25842[(7)] = inst_25686__$1);
return statearr_25842;
})();if(inst_25686__$1)
{var statearr_25843_25909 = state_25785__$1;(statearr_25843_25909[(1)] = (16));
} else
{var statearr_25844_25910 = state_25785__$1;(statearr_25844_25910[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (9)))
{var inst_25714 = (state_25785[(2)]);var state_25785__$1 = state_25785;var statearr_25845_25911 = state_25785__$1;(statearr_25845_25911[(2)] = inst_25714);
(statearr_25845_25911[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (5)))
{var inst_25664 = cljs.core.deref.call(null,cs);var inst_25665 = cljs.core.seq.call(null,inst_25664);var inst_25666 = inst_25665;var inst_25667 = null;var inst_25668 = (0);var inst_25669 = (0);var state_25785__$1 = (function (){var statearr_25846 = state_25785;(statearr_25846[(13)] = inst_25668);
(statearr_25846[(14)] = inst_25667);
(statearr_25846[(15)] = inst_25669);
(statearr_25846[(17)] = inst_25666);
return statearr_25846;
})();var statearr_25847_25912 = state_25785__$1;(statearr_25847_25912[(2)] = null);
(statearr_25847_25912[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (14)))
{var state_25785__$1 = state_25785;var statearr_25848_25913 = state_25785__$1;(statearr_25848_25913[(2)] = null);
(statearr_25848_25913[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (45)))
{var inst_25775 = (state_25785[(2)]);var state_25785__$1 = state_25785;var statearr_25849_25914 = state_25785__$1;(statearr_25849_25914[(2)] = inst_25775);
(statearr_25849_25914[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (26)))
{var inst_25717 = (state_25785[(29)]);var inst_25771 = (state_25785[(2)]);var inst_25772 = cljs.core.seq.call(null,inst_25717);var state_25785__$1 = (function (){var statearr_25850 = state_25785;(statearr_25850[(31)] = inst_25771);
return statearr_25850;
})();if(inst_25772)
{var statearr_25851_25915 = state_25785__$1;(statearr_25851_25915[(1)] = (42));
} else
{var statearr_25852_25916 = state_25785__$1;(statearr_25852_25916[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (16)))
{var inst_25686 = (state_25785[(7)]);var inst_25688 = cljs.core.chunked_seq_QMARK_.call(null,inst_25686);var state_25785__$1 = state_25785;if(inst_25688)
{var statearr_25853_25917 = state_25785__$1;(statearr_25853_25917[(1)] = (19));
} else
{var statearr_25854_25918 = state_25785__$1;(statearr_25854_25918[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (38)))
{var inst_25764 = (state_25785[(2)]);var state_25785__$1 = state_25785;var statearr_25855_25919 = state_25785__$1;(statearr_25855_25919[(2)] = inst_25764);
(statearr_25855_25919[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (30)))
{var state_25785__$1 = state_25785;var statearr_25856_25920 = state_25785__$1;(statearr_25856_25920[(2)] = null);
(statearr_25856_25920[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (10)))
{var inst_25667 = (state_25785[(14)]);var inst_25669 = (state_25785[(15)]);var inst_25675 = cljs.core._nth.call(null,inst_25667,inst_25669);var inst_25676 = cljs.core.nth.call(null,inst_25675,(0),null);var inst_25677 = cljs.core.nth.call(null,inst_25675,(1),null);var state_25785__$1 = (function (){var statearr_25857 = state_25785;(statearr_25857[(26)] = inst_25676);
return statearr_25857;
})();if(cljs.core.truth_(inst_25677))
{var statearr_25858_25921 = state_25785__$1;(statearr_25858_25921[(1)] = (13));
} else
{var statearr_25859_25922 = state_25785__$1;(statearr_25859_25922[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (18)))
{var inst_25710 = (state_25785[(2)]);var state_25785__$1 = state_25785;var statearr_25860_25923 = state_25785__$1;(statearr_25860_25923[(2)] = inst_25710);
(statearr_25860_25923[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (42)))
{var state_25785__$1 = state_25785;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25785__$1,(45),dchan);
} else
{if((state_val_25786 === (37)))
{var inst_25744 = (state_25785[(25)]);var inst_25753 = (state_25785[(23)]);var inst_25657 = (state_25785[(10)]);var inst_25753__$1 = cljs.core.first.call(null,inst_25744);var inst_25754 = cljs.core.async.put_BANG_.call(null,inst_25753__$1,inst_25657,done);var state_25785__$1 = (function (){var statearr_25861 = state_25785;(statearr_25861[(23)] = inst_25753__$1);
return statearr_25861;
})();if(cljs.core.truth_(inst_25754))
{var statearr_25862_25924 = state_25785__$1;(statearr_25862_25924[(1)] = (39));
} else
{var statearr_25863_25925 = state_25785__$1;(statearr_25863_25925[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (8)))
{var inst_25668 = (state_25785[(13)]);var inst_25669 = (state_25785[(15)]);var inst_25671 = (inst_25669 < inst_25668);var inst_25672 = inst_25671;var state_25785__$1 = state_25785;if(cljs.core.truth_(inst_25672))
{var statearr_25864_25926 = state_25785__$1;(statearr_25864_25926[(1)] = (10));
} else
{var statearr_25865_25927 = state_25785__$1;(statearr_25865_25927[(1)] = (11));
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
});})(c__11154__auto___25873,cs,m,dchan,dctr,done))
;return ((function (switch__11098__auto__,c__11154__auto___25873,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_25869 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25869[(0)] = state_machine__11099__auto__);
(statearr_25869[(1)] = (1));
return statearr_25869;
});
var state_machine__11099__auto____1 = (function (state_25785){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_25785);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e25870){if((e25870 instanceof Object))
{var ex__11102__auto__ = e25870;var statearr_25871_25928 = state_25785;(statearr_25871_25928[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25785);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25870;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25929 = state_25785;
state_25785 = G__25929;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_25785){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_25785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___25873,cs,m,dchan,dctr,done))
})();var state__11156__auto__ = (function (){var statearr_25872 = f__11155__auto__.call(null);(statearr_25872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___25873);
return statearr_25872;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___25873,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj25931 = {};return obj25931;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25932){var map__25937 = p__25932;var map__25937__$1 = ((cljs.core.seq_QMARK_.call(null,map__25937))?cljs.core.apply.call(null,cljs.core.hash_map,map__25937):map__25937);var opts = map__25937__$1;var statearr_25938_25941 = state;(statearr_25938_25941[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__25937,map__25937__$1,opts){
return (function (val){var statearr_25939_25942 = state;(statearr_25939_25942[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25937,map__25937__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_25940_25943 = state;(statearr_25940_25943[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25932 = null;if (arguments.length > 3) {
  p__25932 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25932);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25944){
var state = cljs.core.first(arglist__25944);
arglist__25944 = cljs.core.next(arglist__25944);
var cont_block = cljs.core.first(arglist__25944);
arglist__25944 = cljs.core.next(arglist__25944);
var ports = cljs.core.first(arglist__25944);
var p__25932 = cljs.core.rest(arglist__25944);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25932);
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
;var m = (function (){if(typeof cljs.core.async.t26064 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26064 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26065){
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
this.meta26065 = meta26065;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26064.cljs$lang$type = true;
cljs.core.async.t26064.cljs$lang$ctorStr = "cljs.core.async/t26064";
cljs.core.async.t26064.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26064");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26064.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t26064.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26064.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26064.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26064.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26064.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26064.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26064.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26064.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26066){var self__ = this;
var _26066__$1 = this;return self__.meta26065;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26066,meta26065__$1){var self__ = this;
var _26066__$1 = this;return (new cljs.core.async.t26064(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26065__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t26064 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26064(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26065){return (new cljs.core.async.t26064(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26065));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t26064(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11154__auto___26183 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___26183,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___26183,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26136){var state_val_26137 = (state_26136[(1)]);if((state_val_26137 === (7)))
{var inst_26080 = (state_26136[(7)]);var inst_26085 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26080);var state_26136__$1 = state_26136;var statearr_26138_26184 = state_26136__$1;(statearr_26138_26184[(2)] = inst_26085);
(statearr_26138_26184[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26137 === (20)))
{var inst_26095 = (state_26136[(8)]);var state_26136__$1 = state_26136;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26136__$1,(23),out,inst_26095);
} else
{if((state_val_26137 === (1)))
{var inst_26070 = (state_26136[(9)]);var inst_26070__$1 = calc_state.call(null);var inst_26071 = cljs.core.seq_QMARK_.call(null,inst_26070__$1);var state_26136__$1 = (function (){var statearr_26139 = state_26136;(statearr_26139[(9)] = inst_26070__$1);
return statearr_26139;
})();if(inst_26071)
{var statearr_26140_26185 = state_26136__$1;(statearr_26140_26185[(1)] = (2));
} else
{var statearr_26141_26186 = state_26136__$1;(statearr_26141_26186[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26137 === (24)))
{var inst_26088 = (state_26136[(10)]);var inst_26080 = inst_26088;var state_26136__$1 = (function (){var statearr_26142 = state_26136;(statearr_26142[(7)] = inst_26080);
return statearr_26142;
})();var statearr_26143_26187 = state_26136__$1;(statearr_26143_26187[(2)] = null);
(statearr_26143_26187[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26137 === (4)))
{var inst_26070 = (state_26136[(9)]);var inst_26076 = (state_26136[(2)]);var inst_26077 = cljs.core.get.call(null,inst_26076,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_26078 = cljs.core.get.call(null,inst_26076,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_26079 = cljs.core.get.call(null,inst_26076,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_26080 = inst_26070;var state_26136__$1 = (function (){var statearr_26144 = state_26136;(statearr_26144[(11)] = inst_26078);
(statearr_26144[(12)] = inst_26077);
(statearr_26144[(7)] = inst_26080);
(statearr_26144[(13)] = inst_26079);
return statearr_26144;
})();var statearr_26145_26188 = state_26136__$1;(statearr_26145_26188[(2)] = null);
(statearr_26145_26188[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26137 === (15)))
{var state_26136__$1 = state_26136;var statearr_26146_26189 = state_26136__$1;(statearr_26146_26189[(2)] = null);
(statearr_26146_26189[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26137 === (21)))
{var inst_26088 = (state_26136[(10)]);var inst_26080 = inst_26088;var state_26136__$1 = (function (){var statearr_26147 = state_26136;(statearr_26147[(7)] = inst_26080);
return statearr_26147;
})();var statearr_26148_26190 = state_26136__$1;(statearr_26148_26190[(2)] = null);
(statearr_26148_26190[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26137 === (13)))
{var inst_26132 = (state_26136[(2)]);var state_26136__$1 = state_26136;var statearr_26149_26191 = state_26136__$1;(statearr_26149_26191[(2)] = inst_26132);
(statearr_26149_26191[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26137 === (22)))
{var inst_26130 = (state_26136[(2)]);var state_26136__$1 = state_26136;var statearr_26150_26192 = state_26136__$1;(statearr_26150_26192[(2)] = inst_26130);
(statearr_26150_26192[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26137 === (6)))
{var inst_26134 = (state_26136[(2)]);var state_26136__$1 = state_26136;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26136__$1,inst_26134);
} else
{if((state_val_26137 === (25)))
{var state_26136__$1 = state_26136;var statearr_26151_26193 = state_26136__$1;(statearr_26151_26193[(2)] = null);
(statearr_26151_26193[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26137 === (17)))
{var inst_26110 = (state_26136[(14)]);var state_26136__$1 = state_26136;var statearr_26152_26194 = state_26136__$1;(statearr_26152_26194[(2)] = inst_26110);
(statearr_26152_26194[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26137 === (3)))
{var inst_26070 = (state_26136[(9)]);var state_26136__$1 = state_26136;var statearr_26153_26195 = state_26136__$1;(statearr_26153_26195[(2)] = inst_26070);
(statearr_26153_26195[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26137 === (12)))
{var inst_26091 = (state_26136[(15)]);var inst_26110 = (state_26136[(14)]);var inst_26096 = (state_26136[(16)]);var inst_26110__$1 = inst_26091.call(null,inst_26096);var state_26136__$1 = (function (){var statearr_26154 = state_26136;(statearr_26154[(14)] = inst_26110__$1);
return statearr_26154;
})();if(cljs.core.truth_(inst_26110__$1))
{var statearr_26155_26196 = state_26136__$1;(statearr_26155_26196[(1)] = (17));
} else
{var statearr_26156_26197 = state_26136__$1;(statearr_26156_26197[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26137 === (2)))
{var inst_26070 = (state_26136[(9)]);var inst_26073 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26070);var state_26136__$1 = state_26136;var statearr_26157_26198 = state_26136__$1;(statearr_26157_26198[(2)] = inst_26073);
(statearr_26157_26198[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26137 === (23)))
{var inst_26121 = (state_26136[(2)]);var state_26136__$1 = state_26136;if(cljs.core.truth_(inst_26121))
{var statearr_26158_26199 = state_26136__$1;(statearr_26158_26199[(1)] = (24));
} else
{var statearr_26159_26200 = state_26136__$1;(statearr_26159_26200[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26137 === (19)))
{var inst_26118 = (state_26136[(2)]);var state_26136__$1 = state_26136;if(cljs.core.truth_(inst_26118))
{var statearr_26160_26201 = state_26136__$1;(statearr_26160_26201[(1)] = (20));
} else
{var statearr_26161_26202 = state_26136__$1;(statearr_26161_26202[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26137 === (11)))
{var inst_26095 = (state_26136[(8)]);var inst_26101 = (inst_26095 == null);var state_26136__$1 = state_26136;if(cljs.core.truth_(inst_26101))
{var statearr_26162_26203 = state_26136__$1;(statearr_26162_26203[(1)] = (14));
} else
{var statearr_26163_26204 = state_26136__$1;(statearr_26163_26204[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26137 === (9)))
{var inst_26088 = (state_26136[(10)]);var inst_26088__$1 = (state_26136[(2)]);var inst_26089 = cljs.core.get.call(null,inst_26088__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_26090 = cljs.core.get.call(null,inst_26088__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_26091 = cljs.core.get.call(null,inst_26088__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_26136__$1 = (function (){var statearr_26164 = state_26136;(statearr_26164[(15)] = inst_26091);
(statearr_26164[(17)] = inst_26090);
(statearr_26164[(10)] = inst_26088__$1);
return statearr_26164;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_26136__$1,(10),inst_26089);
} else
{if((state_val_26137 === (5)))
{var inst_26080 = (state_26136[(7)]);var inst_26083 = cljs.core.seq_QMARK_.call(null,inst_26080);var state_26136__$1 = state_26136;if(inst_26083)
{var statearr_26165_26205 = state_26136__$1;(statearr_26165_26205[(1)] = (7));
} else
{var statearr_26166_26206 = state_26136__$1;(statearr_26166_26206[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26137 === (14)))
{var inst_26096 = (state_26136[(16)]);var inst_26103 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26096);var state_26136__$1 = state_26136;var statearr_26167_26207 = state_26136__$1;(statearr_26167_26207[(2)] = inst_26103);
(statearr_26167_26207[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26137 === (26)))
{var inst_26126 = (state_26136[(2)]);var state_26136__$1 = state_26136;var statearr_26168_26208 = state_26136__$1;(statearr_26168_26208[(2)] = inst_26126);
(statearr_26168_26208[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26137 === (16)))
{var inst_26106 = (state_26136[(2)]);var inst_26107 = calc_state.call(null);var inst_26080 = inst_26107;var state_26136__$1 = (function (){var statearr_26169 = state_26136;(statearr_26169[(18)] = inst_26106);
(statearr_26169[(7)] = inst_26080);
return statearr_26169;
})();var statearr_26170_26209 = state_26136__$1;(statearr_26170_26209[(2)] = null);
(statearr_26170_26209[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26137 === (10)))
{var inst_26095 = (state_26136[(8)]);var inst_26096 = (state_26136[(16)]);var inst_26094 = (state_26136[(2)]);var inst_26095__$1 = cljs.core.nth.call(null,inst_26094,(0),null);var inst_26096__$1 = cljs.core.nth.call(null,inst_26094,(1),null);var inst_26097 = (inst_26095__$1 == null);var inst_26098 = cljs.core._EQ_.call(null,inst_26096__$1,change);var inst_26099 = (inst_26097) || (inst_26098);var state_26136__$1 = (function (){var statearr_26171 = state_26136;(statearr_26171[(8)] = inst_26095__$1);
(statearr_26171[(16)] = inst_26096__$1);
return statearr_26171;
})();if(cljs.core.truth_(inst_26099))
{var statearr_26172_26210 = state_26136__$1;(statearr_26172_26210[(1)] = (11));
} else
{var statearr_26173_26211 = state_26136__$1;(statearr_26173_26211[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26137 === (18)))
{var inst_26091 = (state_26136[(15)]);var inst_26090 = (state_26136[(17)]);var inst_26096 = (state_26136[(16)]);var inst_26113 = cljs.core.empty_QMARK_.call(null,inst_26091);var inst_26114 = inst_26090.call(null,inst_26096);var inst_26115 = cljs.core.not.call(null,inst_26114);var inst_26116 = (inst_26113) && (inst_26115);var state_26136__$1 = state_26136;var statearr_26174_26212 = state_26136__$1;(statearr_26174_26212[(2)] = inst_26116);
(statearr_26174_26212[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26137 === (8)))
{var inst_26080 = (state_26136[(7)]);var state_26136__$1 = state_26136;var statearr_26175_26213 = state_26136__$1;(statearr_26175_26213[(2)] = inst_26080);
(statearr_26175_26213[(1)] = (9));
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
});})(c__11154__auto___26183,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__11098__auto__,c__11154__auto___26183,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_26179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26179[(0)] = state_machine__11099__auto__);
(statearr_26179[(1)] = (1));
return statearr_26179;
});
var state_machine__11099__auto____1 = (function (state_26136){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_26136);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e26180){if((e26180 instanceof Object))
{var ex__11102__auto__ = e26180;var statearr_26181_26214 = state_26136;(statearr_26181_26214[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26136);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26180;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26215 = state_26136;
state_26136 = G__26215;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_26136){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_26136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___26183,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11156__auto__ = (function (){var statearr_26182 = f__11155__auto__.call(null);(statearr_26182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___26183);
return statearr_26182;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___26183,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj26217 = {};return obj26217;
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
return (function (p1__26218_SHARP_){if(cljs.core.truth_(p1__26218_SHARP_.call(null,topic)))
{return p1__26218_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__26218_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26341 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26341 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26342){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26342 = meta26342;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26341.cljs$lang$type = true;
cljs.core.async.t26341.cljs$lang$ctorStr = "cljs.core.async/t26341";
cljs.core.async.t26341.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26341");
});})(mults,ensure_mult))
;
cljs.core.async.t26341.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26341.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26341.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26341.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26341.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26341.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26341.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26341.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26343){var self__ = this;
var _26343__$1 = this;return self__.meta26342;
});})(mults,ensure_mult))
;
cljs.core.async.t26341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26343,meta26342__$1){var self__ = this;
var _26343__$1 = this;return (new cljs.core.async.t26341(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26342__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26341 = ((function (mults,ensure_mult){
return (function __GT_t26341(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26342){return (new cljs.core.async.t26341(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26342));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26341(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11154__auto___26463 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___26463,mults,ensure_mult,p){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___26463,mults,ensure_mult,p){
return (function (state_26415){var state_val_26416 = (state_26415[(1)]);if((state_val_26416 === (7)))
{var inst_26411 = (state_26415[(2)]);var state_26415__$1 = state_26415;var statearr_26417_26464 = state_26415__$1;(statearr_26417_26464[(2)] = inst_26411);
(statearr_26417_26464[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26416 === (20)))
{var state_26415__$1 = state_26415;var statearr_26418_26465 = state_26415__$1;(statearr_26418_26465[(2)] = null);
(statearr_26418_26465[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26416 === (1)))
{var state_26415__$1 = state_26415;var statearr_26419_26466 = state_26415__$1;(statearr_26419_26466[(2)] = null);
(statearr_26419_26466[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26416 === (24)))
{var inst_26394 = (state_26415[(7)]);var inst_26403 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26394);var state_26415__$1 = state_26415;var statearr_26420_26467 = state_26415__$1;(statearr_26420_26467[(2)] = inst_26403);
(statearr_26420_26467[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26416 === (4)))
{var inst_26346 = (state_26415[(8)]);var inst_26346__$1 = (state_26415[(2)]);var inst_26347 = (inst_26346__$1 == null);var state_26415__$1 = (function (){var statearr_26421 = state_26415;(statearr_26421[(8)] = inst_26346__$1);
return statearr_26421;
})();if(cljs.core.truth_(inst_26347))
{var statearr_26422_26468 = state_26415__$1;(statearr_26422_26468[(1)] = (5));
} else
{var statearr_26423_26469 = state_26415__$1;(statearr_26423_26469[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26416 === (15)))
{var inst_26388 = (state_26415[(2)]);var state_26415__$1 = state_26415;var statearr_26424_26470 = state_26415__$1;(statearr_26424_26470[(2)] = inst_26388);
(statearr_26424_26470[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26416 === (21)))
{var inst_26408 = (state_26415[(2)]);var state_26415__$1 = (function (){var statearr_26425 = state_26415;(statearr_26425[(9)] = inst_26408);
return statearr_26425;
})();var statearr_26426_26471 = state_26415__$1;(statearr_26426_26471[(2)] = null);
(statearr_26426_26471[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26416 === (13)))
{var inst_26370 = (state_26415[(10)]);var inst_26372 = cljs.core.chunked_seq_QMARK_.call(null,inst_26370);var state_26415__$1 = state_26415;if(inst_26372)
{var statearr_26427_26472 = state_26415__$1;(statearr_26427_26472[(1)] = (16));
} else
{var statearr_26428_26473 = state_26415__$1;(statearr_26428_26473[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26416 === (22)))
{var inst_26400 = (state_26415[(2)]);var state_26415__$1 = state_26415;if(cljs.core.truth_(inst_26400))
{var statearr_26429_26474 = state_26415__$1;(statearr_26429_26474[(1)] = (23));
} else
{var statearr_26430_26475 = state_26415__$1;(statearr_26430_26475[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26416 === (6)))
{var inst_26346 = (state_26415[(8)]);var inst_26394 = (state_26415[(7)]);var inst_26396 = (state_26415[(11)]);var inst_26394__$1 = topic_fn.call(null,inst_26346);var inst_26395 = cljs.core.deref.call(null,mults);var inst_26396__$1 = cljs.core.get.call(null,inst_26395,inst_26394__$1);var state_26415__$1 = (function (){var statearr_26431 = state_26415;(statearr_26431[(7)] = inst_26394__$1);
(statearr_26431[(11)] = inst_26396__$1);
return statearr_26431;
})();if(cljs.core.truth_(inst_26396__$1))
{var statearr_26432_26476 = state_26415__$1;(statearr_26432_26476[(1)] = (19));
} else
{var statearr_26433_26477 = state_26415__$1;(statearr_26433_26477[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26416 === (25)))
{var inst_26405 = (state_26415[(2)]);var state_26415__$1 = state_26415;var statearr_26434_26478 = state_26415__$1;(statearr_26434_26478[(2)] = inst_26405);
(statearr_26434_26478[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26416 === (17)))
{var inst_26370 = (state_26415[(10)]);var inst_26379 = cljs.core.first.call(null,inst_26370);var inst_26380 = cljs.core.async.muxch_STAR_.call(null,inst_26379);var inst_26381 = cljs.core.async.close_BANG_.call(null,inst_26380);var inst_26382 = cljs.core.next.call(null,inst_26370);var inst_26356 = inst_26382;var inst_26357 = null;var inst_26358 = (0);var inst_26359 = (0);var state_26415__$1 = (function (){var statearr_26435 = state_26415;(statearr_26435[(12)] = inst_26358);
(statearr_26435[(13)] = inst_26357);
(statearr_26435[(14)] = inst_26356);
(statearr_26435[(15)] = inst_26381);
(statearr_26435[(16)] = inst_26359);
return statearr_26435;
})();var statearr_26436_26479 = state_26415__$1;(statearr_26436_26479[(2)] = null);
(statearr_26436_26479[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26416 === (3)))
{var inst_26413 = (state_26415[(2)]);var state_26415__$1 = state_26415;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26415__$1,inst_26413);
} else
{if((state_val_26416 === (12)))
{var inst_26390 = (state_26415[(2)]);var state_26415__$1 = state_26415;var statearr_26437_26480 = state_26415__$1;(statearr_26437_26480[(2)] = inst_26390);
(statearr_26437_26480[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26416 === (2)))
{var state_26415__$1 = state_26415;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26415__$1,(4),ch);
} else
{if((state_val_26416 === (23)))
{var state_26415__$1 = state_26415;var statearr_26438_26481 = state_26415__$1;(statearr_26438_26481[(2)] = null);
(statearr_26438_26481[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26416 === (19)))
{var inst_26346 = (state_26415[(8)]);var inst_26396 = (state_26415[(11)]);var inst_26398 = cljs.core.async.muxch_STAR_.call(null,inst_26396);var state_26415__$1 = state_26415;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26415__$1,(22),inst_26398,inst_26346);
} else
{if((state_val_26416 === (11)))
{var inst_26370 = (state_26415[(10)]);var inst_26356 = (state_26415[(14)]);var inst_26370__$1 = cljs.core.seq.call(null,inst_26356);var state_26415__$1 = (function (){var statearr_26439 = state_26415;(statearr_26439[(10)] = inst_26370__$1);
return statearr_26439;
})();if(inst_26370__$1)
{var statearr_26440_26482 = state_26415__$1;(statearr_26440_26482[(1)] = (13));
} else
{var statearr_26441_26483 = state_26415__$1;(statearr_26441_26483[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26416 === (9)))
{var inst_26392 = (state_26415[(2)]);var state_26415__$1 = state_26415;var statearr_26442_26484 = state_26415__$1;(statearr_26442_26484[(2)] = inst_26392);
(statearr_26442_26484[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26416 === (5)))
{var inst_26353 = cljs.core.deref.call(null,mults);var inst_26354 = cljs.core.vals.call(null,inst_26353);var inst_26355 = cljs.core.seq.call(null,inst_26354);var inst_26356 = inst_26355;var inst_26357 = null;var inst_26358 = (0);var inst_26359 = (0);var state_26415__$1 = (function (){var statearr_26443 = state_26415;(statearr_26443[(12)] = inst_26358);
(statearr_26443[(13)] = inst_26357);
(statearr_26443[(14)] = inst_26356);
(statearr_26443[(16)] = inst_26359);
return statearr_26443;
})();var statearr_26444_26485 = state_26415__$1;(statearr_26444_26485[(2)] = null);
(statearr_26444_26485[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26416 === (14)))
{var state_26415__$1 = state_26415;var statearr_26448_26486 = state_26415__$1;(statearr_26448_26486[(2)] = null);
(statearr_26448_26486[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26416 === (16)))
{var inst_26370 = (state_26415[(10)]);var inst_26374 = cljs.core.chunk_first.call(null,inst_26370);var inst_26375 = cljs.core.chunk_rest.call(null,inst_26370);var inst_26376 = cljs.core.count.call(null,inst_26374);var inst_26356 = inst_26375;var inst_26357 = inst_26374;var inst_26358 = inst_26376;var inst_26359 = (0);var state_26415__$1 = (function (){var statearr_26449 = state_26415;(statearr_26449[(12)] = inst_26358);
(statearr_26449[(13)] = inst_26357);
(statearr_26449[(14)] = inst_26356);
(statearr_26449[(16)] = inst_26359);
return statearr_26449;
})();var statearr_26450_26487 = state_26415__$1;(statearr_26450_26487[(2)] = null);
(statearr_26450_26487[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26416 === (10)))
{var inst_26358 = (state_26415[(12)]);var inst_26357 = (state_26415[(13)]);var inst_26356 = (state_26415[(14)]);var inst_26359 = (state_26415[(16)]);var inst_26364 = cljs.core._nth.call(null,inst_26357,inst_26359);var inst_26365 = cljs.core.async.muxch_STAR_.call(null,inst_26364);var inst_26366 = cljs.core.async.close_BANG_.call(null,inst_26365);var inst_26367 = (inst_26359 + (1));var tmp26445 = inst_26358;var tmp26446 = inst_26357;var tmp26447 = inst_26356;var inst_26356__$1 = tmp26447;var inst_26357__$1 = tmp26446;var inst_26358__$1 = tmp26445;var inst_26359__$1 = inst_26367;var state_26415__$1 = (function (){var statearr_26451 = state_26415;(statearr_26451[(12)] = inst_26358__$1);
(statearr_26451[(17)] = inst_26366);
(statearr_26451[(13)] = inst_26357__$1);
(statearr_26451[(14)] = inst_26356__$1);
(statearr_26451[(16)] = inst_26359__$1);
return statearr_26451;
})();var statearr_26452_26488 = state_26415__$1;(statearr_26452_26488[(2)] = null);
(statearr_26452_26488[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26416 === (18)))
{var inst_26385 = (state_26415[(2)]);var state_26415__$1 = state_26415;var statearr_26453_26489 = state_26415__$1;(statearr_26453_26489[(2)] = inst_26385);
(statearr_26453_26489[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26416 === (8)))
{var inst_26358 = (state_26415[(12)]);var inst_26359 = (state_26415[(16)]);var inst_26361 = (inst_26359 < inst_26358);var inst_26362 = inst_26361;var state_26415__$1 = state_26415;if(cljs.core.truth_(inst_26362))
{var statearr_26454_26490 = state_26415__$1;(statearr_26454_26490[(1)] = (10));
} else
{var statearr_26455_26491 = state_26415__$1;(statearr_26455_26491[(1)] = (11));
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
});})(c__11154__auto___26463,mults,ensure_mult,p))
;return ((function (switch__11098__auto__,c__11154__auto___26463,mults,ensure_mult,p){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_26459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26459[(0)] = state_machine__11099__auto__);
(statearr_26459[(1)] = (1));
return statearr_26459;
});
var state_machine__11099__auto____1 = (function (state_26415){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_26415);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e26460){if((e26460 instanceof Object))
{var ex__11102__auto__ = e26460;var statearr_26461_26492 = state_26415;(statearr_26461_26492[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26415);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26460;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26493 = state_26415;
state_26415 = G__26493;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_26415){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_26415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___26463,mults,ensure_mult,p))
})();var state__11156__auto__ = (function (){var statearr_26462 = f__11155__auto__.call(null);(statearr_26462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___26463);
return statearr_26462;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___26463,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__11154__auto___26630 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___26630,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___26630,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26600){var state_val_26601 = (state_26600[(1)]);if((state_val_26601 === (7)))
{var state_26600__$1 = state_26600;var statearr_26602_26631 = state_26600__$1;(statearr_26602_26631[(2)] = null);
(statearr_26602_26631[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26601 === (1)))
{var state_26600__$1 = state_26600;var statearr_26603_26632 = state_26600__$1;(statearr_26603_26632[(2)] = null);
(statearr_26603_26632[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26601 === (4)))
{var inst_26564 = (state_26600[(7)]);var inst_26566 = (inst_26564 < cnt);var state_26600__$1 = state_26600;if(cljs.core.truth_(inst_26566))
{var statearr_26604_26633 = state_26600__$1;(statearr_26604_26633[(1)] = (6));
} else
{var statearr_26605_26634 = state_26600__$1;(statearr_26605_26634[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26601 === (15)))
{var inst_26596 = (state_26600[(2)]);var state_26600__$1 = state_26600;var statearr_26606_26635 = state_26600__$1;(statearr_26606_26635[(2)] = inst_26596);
(statearr_26606_26635[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26601 === (13)))
{var inst_26589 = cljs.core.async.close_BANG_.call(null,out);var state_26600__$1 = state_26600;var statearr_26607_26636 = state_26600__$1;(statearr_26607_26636[(2)] = inst_26589);
(statearr_26607_26636[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26601 === (6)))
{var state_26600__$1 = state_26600;var statearr_26608_26637 = state_26600__$1;(statearr_26608_26637[(2)] = null);
(statearr_26608_26637[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26601 === (3)))
{var inst_26598 = (state_26600[(2)]);var state_26600__$1 = state_26600;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26600__$1,inst_26598);
} else
{if((state_val_26601 === (12)))
{var inst_26586 = (state_26600[(8)]);var inst_26586__$1 = (state_26600[(2)]);var inst_26587 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26586__$1);var state_26600__$1 = (function (){var statearr_26609 = state_26600;(statearr_26609[(8)] = inst_26586__$1);
return statearr_26609;
})();if(cljs.core.truth_(inst_26587))
{var statearr_26610_26638 = state_26600__$1;(statearr_26610_26638[(1)] = (13));
} else
{var statearr_26611_26639 = state_26600__$1;(statearr_26611_26639[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26601 === (2)))
{var inst_26563 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26564 = (0);var state_26600__$1 = (function (){var statearr_26612 = state_26600;(statearr_26612[(7)] = inst_26564);
(statearr_26612[(9)] = inst_26563);
return statearr_26612;
})();var statearr_26613_26640 = state_26600__$1;(statearr_26613_26640[(2)] = null);
(statearr_26613_26640[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26601 === (11)))
{var inst_26564 = (state_26600[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26600,(10),Object,null,(9));var inst_26573 = chs__$1.call(null,inst_26564);var inst_26574 = done.call(null,inst_26564);var inst_26575 = cljs.core.async.take_BANG_.call(null,inst_26573,inst_26574);var state_26600__$1 = state_26600;var statearr_26614_26641 = state_26600__$1;(statearr_26614_26641[(2)] = inst_26575);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26600__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26601 === (9)))
{var inst_26564 = (state_26600[(7)]);var inst_26577 = (state_26600[(2)]);var inst_26578 = (inst_26564 + (1));var inst_26564__$1 = inst_26578;var state_26600__$1 = (function (){var statearr_26615 = state_26600;(statearr_26615[(7)] = inst_26564__$1);
(statearr_26615[(10)] = inst_26577);
return statearr_26615;
})();var statearr_26616_26642 = state_26600__$1;(statearr_26616_26642[(2)] = null);
(statearr_26616_26642[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26601 === (5)))
{var inst_26584 = (state_26600[(2)]);var state_26600__$1 = (function (){var statearr_26617 = state_26600;(statearr_26617[(11)] = inst_26584);
return statearr_26617;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26600__$1,(12),dchan);
} else
{if((state_val_26601 === (14)))
{var inst_26586 = (state_26600[(8)]);var inst_26591 = cljs.core.apply.call(null,f,inst_26586);var state_26600__$1 = state_26600;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26600__$1,(16),out,inst_26591);
} else
{if((state_val_26601 === (16)))
{var inst_26593 = (state_26600[(2)]);var state_26600__$1 = (function (){var statearr_26618 = state_26600;(statearr_26618[(12)] = inst_26593);
return statearr_26618;
})();var statearr_26619_26643 = state_26600__$1;(statearr_26619_26643[(2)] = null);
(statearr_26619_26643[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26601 === (10)))
{var inst_26568 = (state_26600[(2)]);var inst_26569 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26600__$1 = (function (){var statearr_26620 = state_26600;(statearr_26620[(13)] = inst_26568);
return statearr_26620;
})();var statearr_26621_26644 = state_26600__$1;(statearr_26621_26644[(2)] = inst_26569);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26600__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26601 === (8)))
{var inst_26582 = (state_26600[(2)]);var state_26600__$1 = state_26600;var statearr_26622_26645 = state_26600__$1;(statearr_26622_26645[(2)] = inst_26582);
(statearr_26622_26645[(1)] = (5));
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
});})(c__11154__auto___26630,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__11098__auto__,c__11154__auto___26630,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_26626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26626[(0)] = state_machine__11099__auto__);
(statearr_26626[(1)] = (1));
return statearr_26626;
});
var state_machine__11099__auto____1 = (function (state_26600){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_26600);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e26627){if((e26627 instanceof Object))
{var ex__11102__auto__ = e26627;var statearr_26628_26646 = state_26600;(statearr_26628_26646[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26600);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26627;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26647 = state_26600;
state_26600 = G__26647;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_26600){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_26600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___26630,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11156__auto__ = (function (){var statearr_26629 = f__11155__auto__.call(null);(statearr_26629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___26630);
return statearr_26629;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___26630,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11154__auto___26755 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___26755,out){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___26755,out){
return (function (state_26731){var state_val_26732 = (state_26731[(1)]);if((state_val_26732 === (7)))
{var inst_26710 = (state_26731[(7)]);var inst_26711 = (state_26731[(8)]);var inst_26710__$1 = (state_26731[(2)]);var inst_26711__$1 = cljs.core.nth.call(null,inst_26710__$1,(0),null);var inst_26712 = cljs.core.nth.call(null,inst_26710__$1,(1),null);var inst_26713 = (inst_26711__$1 == null);var state_26731__$1 = (function (){var statearr_26733 = state_26731;(statearr_26733[(9)] = inst_26712);
(statearr_26733[(7)] = inst_26710__$1);
(statearr_26733[(8)] = inst_26711__$1);
return statearr_26733;
})();if(cljs.core.truth_(inst_26713))
{var statearr_26734_26756 = state_26731__$1;(statearr_26734_26756[(1)] = (8));
} else
{var statearr_26735_26757 = state_26731__$1;(statearr_26735_26757[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26732 === (1)))
{var inst_26702 = cljs.core.vec.call(null,chs);var inst_26703 = inst_26702;var state_26731__$1 = (function (){var statearr_26736 = state_26731;(statearr_26736[(10)] = inst_26703);
return statearr_26736;
})();var statearr_26737_26758 = state_26731__$1;(statearr_26737_26758[(2)] = null);
(statearr_26737_26758[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26732 === (4)))
{var inst_26703 = (state_26731[(10)]);var state_26731__$1 = state_26731;return cljs.core.async.ioc_alts_BANG_.call(null,state_26731__$1,(7),inst_26703);
} else
{if((state_val_26732 === (6)))
{var inst_26727 = (state_26731[(2)]);var state_26731__$1 = state_26731;var statearr_26738_26759 = state_26731__$1;(statearr_26738_26759[(2)] = inst_26727);
(statearr_26738_26759[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26732 === (3)))
{var inst_26729 = (state_26731[(2)]);var state_26731__$1 = state_26731;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26731__$1,inst_26729);
} else
{if((state_val_26732 === (2)))
{var inst_26703 = (state_26731[(10)]);var inst_26705 = cljs.core.count.call(null,inst_26703);var inst_26706 = (inst_26705 > (0));var state_26731__$1 = state_26731;if(cljs.core.truth_(inst_26706))
{var statearr_26740_26760 = state_26731__$1;(statearr_26740_26760[(1)] = (4));
} else
{var statearr_26741_26761 = state_26731__$1;(statearr_26741_26761[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26732 === (11)))
{var inst_26703 = (state_26731[(10)]);var inst_26720 = (state_26731[(2)]);var tmp26739 = inst_26703;var inst_26703__$1 = tmp26739;var state_26731__$1 = (function (){var statearr_26742 = state_26731;(statearr_26742[(11)] = inst_26720);
(statearr_26742[(10)] = inst_26703__$1);
return statearr_26742;
})();var statearr_26743_26762 = state_26731__$1;(statearr_26743_26762[(2)] = null);
(statearr_26743_26762[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26732 === (9)))
{var inst_26711 = (state_26731[(8)]);var state_26731__$1 = state_26731;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26731__$1,(11),out,inst_26711);
} else
{if((state_val_26732 === (5)))
{var inst_26725 = cljs.core.async.close_BANG_.call(null,out);var state_26731__$1 = state_26731;var statearr_26744_26763 = state_26731__$1;(statearr_26744_26763[(2)] = inst_26725);
(statearr_26744_26763[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26732 === (10)))
{var inst_26723 = (state_26731[(2)]);var state_26731__$1 = state_26731;var statearr_26745_26764 = state_26731__$1;(statearr_26745_26764[(2)] = inst_26723);
(statearr_26745_26764[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26732 === (8)))
{var inst_26712 = (state_26731[(9)]);var inst_26710 = (state_26731[(7)]);var inst_26711 = (state_26731[(8)]);var inst_26703 = (state_26731[(10)]);var inst_26715 = (function (){var c = inst_26712;var v = inst_26711;var vec__26708 = inst_26710;var cs = inst_26703;return ((function (c,v,vec__26708,cs,inst_26712,inst_26710,inst_26711,inst_26703,state_val_26732,c__11154__auto___26755,out){
return (function (p1__26648_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__26648_SHARP_);
});
;})(c,v,vec__26708,cs,inst_26712,inst_26710,inst_26711,inst_26703,state_val_26732,c__11154__auto___26755,out))
})();var inst_26716 = cljs.core.filterv.call(null,inst_26715,inst_26703);var inst_26703__$1 = inst_26716;var state_26731__$1 = (function (){var statearr_26746 = state_26731;(statearr_26746[(10)] = inst_26703__$1);
return statearr_26746;
})();var statearr_26747_26765 = state_26731__$1;(statearr_26747_26765[(2)] = null);
(statearr_26747_26765[(1)] = (2));
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
});})(c__11154__auto___26755,out))
;return ((function (switch__11098__auto__,c__11154__auto___26755,out){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_26751 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26751[(0)] = state_machine__11099__auto__);
(statearr_26751[(1)] = (1));
return statearr_26751;
});
var state_machine__11099__auto____1 = (function (state_26731){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_26731);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e26752){if((e26752 instanceof Object))
{var ex__11102__auto__ = e26752;var statearr_26753_26766 = state_26731;(statearr_26753_26766[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26731);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26752;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26767 = state_26731;
state_26731 = G__26767;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_26731){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_26731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___26755,out))
})();var state__11156__auto__ = (function (){var statearr_26754 = f__11155__auto__.call(null);(statearr_26754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___26755);
return statearr_26754;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___26755,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11154__auto___26860 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___26860,out){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___26860,out){
return (function (state_26837){var state_val_26838 = (state_26837[(1)]);if((state_val_26838 === (7)))
{var inst_26819 = (state_26837[(7)]);var inst_26819__$1 = (state_26837[(2)]);var inst_26820 = (inst_26819__$1 == null);var inst_26821 = cljs.core.not.call(null,inst_26820);var state_26837__$1 = (function (){var statearr_26839 = state_26837;(statearr_26839[(7)] = inst_26819__$1);
return statearr_26839;
})();if(inst_26821)
{var statearr_26840_26861 = state_26837__$1;(statearr_26840_26861[(1)] = (8));
} else
{var statearr_26841_26862 = state_26837__$1;(statearr_26841_26862[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26838 === (1)))
{var inst_26814 = (0);var state_26837__$1 = (function (){var statearr_26842 = state_26837;(statearr_26842[(8)] = inst_26814);
return statearr_26842;
})();var statearr_26843_26863 = state_26837__$1;(statearr_26843_26863[(2)] = null);
(statearr_26843_26863[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26838 === (4)))
{var state_26837__$1 = state_26837;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26837__$1,(7),ch);
} else
{if((state_val_26838 === (6)))
{var inst_26832 = (state_26837[(2)]);var state_26837__$1 = state_26837;var statearr_26844_26864 = state_26837__$1;(statearr_26844_26864[(2)] = inst_26832);
(statearr_26844_26864[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26838 === (3)))
{var inst_26834 = (state_26837[(2)]);var inst_26835 = cljs.core.async.close_BANG_.call(null,out);var state_26837__$1 = (function (){var statearr_26845 = state_26837;(statearr_26845[(9)] = inst_26834);
return statearr_26845;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26837__$1,inst_26835);
} else
{if((state_val_26838 === (2)))
{var inst_26814 = (state_26837[(8)]);var inst_26816 = (inst_26814 < n);var state_26837__$1 = state_26837;if(cljs.core.truth_(inst_26816))
{var statearr_26846_26865 = state_26837__$1;(statearr_26846_26865[(1)] = (4));
} else
{var statearr_26847_26866 = state_26837__$1;(statearr_26847_26866[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26838 === (11)))
{var inst_26814 = (state_26837[(8)]);var inst_26824 = (state_26837[(2)]);var inst_26825 = (inst_26814 + (1));var inst_26814__$1 = inst_26825;var state_26837__$1 = (function (){var statearr_26848 = state_26837;(statearr_26848[(8)] = inst_26814__$1);
(statearr_26848[(10)] = inst_26824);
return statearr_26848;
})();var statearr_26849_26867 = state_26837__$1;(statearr_26849_26867[(2)] = null);
(statearr_26849_26867[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26838 === (9)))
{var state_26837__$1 = state_26837;var statearr_26850_26868 = state_26837__$1;(statearr_26850_26868[(2)] = null);
(statearr_26850_26868[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26838 === (5)))
{var state_26837__$1 = state_26837;var statearr_26851_26869 = state_26837__$1;(statearr_26851_26869[(2)] = null);
(statearr_26851_26869[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26838 === (10)))
{var inst_26829 = (state_26837[(2)]);var state_26837__$1 = state_26837;var statearr_26852_26870 = state_26837__$1;(statearr_26852_26870[(2)] = inst_26829);
(statearr_26852_26870[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26838 === (8)))
{var inst_26819 = (state_26837[(7)]);var state_26837__$1 = state_26837;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26837__$1,(11),out,inst_26819);
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
});})(c__11154__auto___26860,out))
;return ((function (switch__11098__auto__,c__11154__auto___26860,out){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_26856 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26856[(0)] = state_machine__11099__auto__);
(statearr_26856[(1)] = (1));
return statearr_26856;
});
var state_machine__11099__auto____1 = (function (state_26837){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_26837);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e26857){if((e26857 instanceof Object))
{var ex__11102__auto__ = e26857;var statearr_26858_26871 = state_26837;(statearr_26858_26871[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26837);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26857;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26872 = state_26837;
state_26837 = G__26872;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_26837){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_26837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___26860,out))
})();var state__11156__auto__ = (function (){var statearr_26859 = f__11155__auto__.call(null);(statearr_26859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___26860);
return statearr_26859;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___26860,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26880 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26880 = (function (ch,f,map_LT_,meta26881){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26881 = meta26881;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26880.cljs$lang$type = true;
cljs.core.async.t26880.cljs$lang$ctorStr = "cljs.core.async/t26880";
cljs.core.async.t26880.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26880");
});
cljs.core.async.t26880.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26880.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t26880.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26880.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t26883 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26883 = (function (fn1,_,meta26881,ch,f,map_LT_,meta26884){
this.fn1 = fn1;
this._ = _;
this.meta26881 = meta26881;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26884 = meta26884;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26883.cljs$lang$type = true;
cljs.core.async.t26883.cljs$lang$ctorStr = "cljs.core.async/t26883";
cljs.core.async.t26883.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26883");
});})(___$1))
;
cljs.core.async.t26883.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26883.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t26883.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__26873_SHARP_){return f1.call(null,(((p1__26873_SHARP_ == null))?null:self__.f.call(null,p1__26873_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t26883.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26885){var self__ = this;
var _26885__$1 = this;return self__.meta26884;
});})(___$1))
;
cljs.core.async.t26883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26885,meta26884__$1){var self__ = this;
var _26885__$1 = this;return (new cljs.core.async.t26883(self__.fn1,self__._,self__.meta26881,self__.ch,self__.f,self__.map_LT_,meta26884__$1));
});})(___$1))
;
cljs.core.async.__GT_t26883 = ((function (___$1){
return (function __GT_t26883(fn1__$1,___$2,meta26881__$1,ch__$2,f__$2,map_LT___$2,meta26884){return (new cljs.core.async.t26883(fn1__$1,___$2,meta26881__$1,ch__$2,f__$2,map_LT___$2,meta26884));
});})(___$1))
;
}
return (new cljs.core.async.t26883(fn1,___$1,self__.meta26881,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t26880.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26880.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26880.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26882){var self__ = this;
var _26882__$1 = this;return self__.meta26881;
});
cljs.core.async.t26880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26882,meta26881__$1){var self__ = this;
var _26882__$1 = this;return (new cljs.core.async.t26880(self__.ch,self__.f,self__.map_LT_,meta26881__$1));
});
cljs.core.async.__GT_t26880 = (function __GT_t26880(ch__$1,f__$1,map_LT___$1,meta26881){return (new cljs.core.async.t26880(ch__$1,f__$1,map_LT___$1,meta26881));
});
}
return (new cljs.core.async.t26880(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26889 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26889 = (function (ch,f,map_GT_,meta26890){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26890 = meta26890;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26889.cljs$lang$type = true;
cljs.core.async.t26889.cljs$lang$ctorStr = "cljs.core.async/t26889";
cljs.core.async.t26889.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26889");
});
cljs.core.async.t26889.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26889.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t26889.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26889.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26889.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26889.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26891){var self__ = this;
var _26891__$1 = this;return self__.meta26890;
});
cljs.core.async.t26889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26891,meta26890__$1){var self__ = this;
var _26891__$1 = this;return (new cljs.core.async.t26889(self__.ch,self__.f,self__.map_GT_,meta26890__$1));
});
cljs.core.async.__GT_t26889 = (function __GT_t26889(ch__$1,f__$1,map_GT___$1,meta26890){return (new cljs.core.async.t26889(ch__$1,f__$1,map_GT___$1,meta26890));
});
}
return (new cljs.core.async.t26889(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26895 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26895 = (function (ch,p,filter_GT_,meta26896){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26896 = meta26896;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26895.cljs$lang$type = true;
cljs.core.async.t26895.cljs$lang$ctorStr = "cljs.core.async/t26895";
cljs.core.async.t26895.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26895");
});
cljs.core.async.t26895.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26895.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t26895.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26895.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26895.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26895.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26895.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26897){var self__ = this;
var _26897__$1 = this;return self__.meta26896;
});
cljs.core.async.t26895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26897,meta26896__$1){var self__ = this;
var _26897__$1 = this;return (new cljs.core.async.t26895(self__.ch,self__.p,self__.filter_GT_,meta26896__$1));
});
cljs.core.async.__GT_t26895 = (function __GT_t26895(ch__$1,p__$1,filter_GT___$1,meta26896){return (new cljs.core.async.t26895(ch__$1,p__$1,filter_GT___$1,meta26896));
});
}
return (new cljs.core.async.t26895(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11154__auto___26980 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___26980,out){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___26980,out){
return (function (state_26959){var state_val_26960 = (state_26959[(1)]);if((state_val_26960 === (7)))
{var inst_26955 = (state_26959[(2)]);var state_26959__$1 = state_26959;var statearr_26961_26981 = state_26959__$1;(statearr_26961_26981[(2)] = inst_26955);
(statearr_26961_26981[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26960 === (1)))
{var state_26959__$1 = state_26959;var statearr_26962_26982 = state_26959__$1;(statearr_26962_26982[(2)] = null);
(statearr_26962_26982[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26960 === (4)))
{var inst_26941 = (state_26959[(7)]);var inst_26941__$1 = (state_26959[(2)]);var inst_26942 = (inst_26941__$1 == null);var state_26959__$1 = (function (){var statearr_26963 = state_26959;(statearr_26963[(7)] = inst_26941__$1);
return statearr_26963;
})();if(cljs.core.truth_(inst_26942))
{var statearr_26964_26983 = state_26959__$1;(statearr_26964_26983[(1)] = (5));
} else
{var statearr_26965_26984 = state_26959__$1;(statearr_26965_26984[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26960 === (6)))
{var inst_26941 = (state_26959[(7)]);var inst_26946 = p.call(null,inst_26941);var state_26959__$1 = state_26959;if(cljs.core.truth_(inst_26946))
{var statearr_26966_26985 = state_26959__$1;(statearr_26966_26985[(1)] = (8));
} else
{var statearr_26967_26986 = state_26959__$1;(statearr_26967_26986[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26960 === (3)))
{var inst_26957 = (state_26959[(2)]);var state_26959__$1 = state_26959;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26959__$1,inst_26957);
} else
{if((state_val_26960 === (2)))
{var state_26959__$1 = state_26959;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26959__$1,(4),ch);
} else
{if((state_val_26960 === (11)))
{var inst_26949 = (state_26959[(2)]);var state_26959__$1 = state_26959;var statearr_26968_26987 = state_26959__$1;(statearr_26968_26987[(2)] = inst_26949);
(statearr_26968_26987[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26960 === (9)))
{var state_26959__$1 = state_26959;var statearr_26969_26988 = state_26959__$1;(statearr_26969_26988[(2)] = null);
(statearr_26969_26988[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26960 === (5)))
{var inst_26944 = cljs.core.async.close_BANG_.call(null,out);var state_26959__$1 = state_26959;var statearr_26970_26989 = state_26959__$1;(statearr_26970_26989[(2)] = inst_26944);
(statearr_26970_26989[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26960 === (10)))
{var inst_26952 = (state_26959[(2)]);var state_26959__$1 = (function (){var statearr_26971 = state_26959;(statearr_26971[(8)] = inst_26952);
return statearr_26971;
})();var statearr_26972_26990 = state_26959__$1;(statearr_26972_26990[(2)] = null);
(statearr_26972_26990[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26960 === (8)))
{var inst_26941 = (state_26959[(7)]);var state_26959__$1 = state_26959;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26959__$1,(11),out,inst_26941);
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
});})(c__11154__auto___26980,out))
;return ((function (switch__11098__auto__,c__11154__auto___26980,out){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_26976 = [null,null,null,null,null,null,null,null,null];(statearr_26976[(0)] = state_machine__11099__auto__);
(statearr_26976[(1)] = (1));
return statearr_26976;
});
var state_machine__11099__auto____1 = (function (state_26959){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_26959);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e26977){if((e26977 instanceof Object))
{var ex__11102__auto__ = e26977;var statearr_26978_26991 = state_26959;(statearr_26978_26991[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26959);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26977;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26992 = state_26959;
state_26959 = G__26992;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_26959){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_26959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___26980,out))
})();var state__11156__auto__ = (function (){var statearr_26979 = f__11155__auto__.call(null);(statearr_26979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___26980);
return statearr_26979;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___26980,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__){
return (function (state_27158){var state_val_27159 = (state_27158[(1)]);if((state_val_27159 === (7)))
{var inst_27154 = (state_27158[(2)]);var state_27158__$1 = state_27158;var statearr_27160_27201 = state_27158__$1;(statearr_27160_27201[(2)] = inst_27154);
(statearr_27160_27201[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27159 === (20)))
{var inst_27124 = (state_27158[(7)]);var inst_27135 = (state_27158[(2)]);var inst_27136 = cljs.core.next.call(null,inst_27124);var inst_27110 = inst_27136;var inst_27111 = null;var inst_27112 = (0);var inst_27113 = (0);var state_27158__$1 = (function (){var statearr_27161 = state_27158;(statearr_27161[(8)] = inst_27113);
(statearr_27161[(9)] = inst_27112);
(statearr_27161[(10)] = inst_27135);
(statearr_27161[(11)] = inst_27111);
(statearr_27161[(12)] = inst_27110);
return statearr_27161;
})();var statearr_27162_27202 = state_27158__$1;(statearr_27162_27202[(2)] = null);
(statearr_27162_27202[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27159 === (1)))
{var state_27158__$1 = state_27158;var statearr_27163_27203 = state_27158__$1;(statearr_27163_27203[(2)] = null);
(statearr_27163_27203[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27159 === (4)))
{var inst_27099 = (state_27158[(13)]);var inst_27099__$1 = (state_27158[(2)]);var inst_27100 = (inst_27099__$1 == null);var state_27158__$1 = (function (){var statearr_27164 = state_27158;(statearr_27164[(13)] = inst_27099__$1);
return statearr_27164;
})();if(cljs.core.truth_(inst_27100))
{var statearr_27165_27204 = state_27158__$1;(statearr_27165_27204[(1)] = (5));
} else
{var statearr_27166_27205 = state_27158__$1;(statearr_27166_27205[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27159 === (15)))
{var state_27158__$1 = state_27158;var statearr_27170_27206 = state_27158__$1;(statearr_27170_27206[(2)] = null);
(statearr_27170_27206[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27159 === (21)))
{var state_27158__$1 = state_27158;var statearr_27171_27207 = state_27158__$1;(statearr_27171_27207[(2)] = null);
(statearr_27171_27207[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27159 === (13)))
{var inst_27113 = (state_27158[(8)]);var inst_27112 = (state_27158[(9)]);var inst_27111 = (state_27158[(11)]);var inst_27110 = (state_27158[(12)]);var inst_27120 = (state_27158[(2)]);var inst_27121 = (inst_27113 + (1));var tmp27167 = inst_27112;var tmp27168 = inst_27111;var tmp27169 = inst_27110;var inst_27110__$1 = tmp27169;var inst_27111__$1 = tmp27168;var inst_27112__$1 = tmp27167;var inst_27113__$1 = inst_27121;var state_27158__$1 = (function (){var statearr_27172 = state_27158;(statearr_27172[(8)] = inst_27113__$1);
(statearr_27172[(9)] = inst_27112__$1);
(statearr_27172[(14)] = inst_27120);
(statearr_27172[(11)] = inst_27111__$1);
(statearr_27172[(12)] = inst_27110__$1);
return statearr_27172;
})();var statearr_27173_27208 = state_27158__$1;(statearr_27173_27208[(2)] = null);
(statearr_27173_27208[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27159 === (22)))
{var state_27158__$1 = state_27158;var statearr_27174_27209 = state_27158__$1;(statearr_27174_27209[(2)] = null);
(statearr_27174_27209[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27159 === (6)))
{var inst_27099 = (state_27158[(13)]);var inst_27108 = f.call(null,inst_27099);var inst_27109 = cljs.core.seq.call(null,inst_27108);var inst_27110 = inst_27109;var inst_27111 = null;var inst_27112 = (0);var inst_27113 = (0);var state_27158__$1 = (function (){var statearr_27175 = state_27158;(statearr_27175[(8)] = inst_27113);
(statearr_27175[(9)] = inst_27112);
(statearr_27175[(11)] = inst_27111);
(statearr_27175[(12)] = inst_27110);
return statearr_27175;
})();var statearr_27176_27210 = state_27158__$1;(statearr_27176_27210[(2)] = null);
(statearr_27176_27210[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27159 === (17)))
{var inst_27124 = (state_27158[(7)]);var inst_27128 = cljs.core.chunk_first.call(null,inst_27124);var inst_27129 = cljs.core.chunk_rest.call(null,inst_27124);var inst_27130 = cljs.core.count.call(null,inst_27128);var inst_27110 = inst_27129;var inst_27111 = inst_27128;var inst_27112 = inst_27130;var inst_27113 = (0);var state_27158__$1 = (function (){var statearr_27177 = state_27158;(statearr_27177[(8)] = inst_27113);
(statearr_27177[(9)] = inst_27112);
(statearr_27177[(11)] = inst_27111);
(statearr_27177[(12)] = inst_27110);
return statearr_27177;
})();var statearr_27178_27211 = state_27158__$1;(statearr_27178_27211[(2)] = null);
(statearr_27178_27211[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27159 === (3)))
{var inst_27156 = (state_27158[(2)]);var state_27158__$1 = state_27158;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27158__$1,inst_27156);
} else
{if((state_val_27159 === (12)))
{var inst_27144 = (state_27158[(2)]);var state_27158__$1 = state_27158;var statearr_27179_27212 = state_27158__$1;(statearr_27179_27212[(2)] = inst_27144);
(statearr_27179_27212[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27159 === (2)))
{var state_27158__$1 = state_27158;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27158__$1,(4),in$);
} else
{if((state_val_27159 === (23)))
{var inst_27152 = (state_27158[(2)]);var state_27158__$1 = state_27158;var statearr_27180_27213 = state_27158__$1;(statearr_27180_27213[(2)] = inst_27152);
(statearr_27180_27213[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27159 === (19)))
{var inst_27139 = (state_27158[(2)]);var state_27158__$1 = state_27158;var statearr_27181_27214 = state_27158__$1;(statearr_27181_27214[(2)] = inst_27139);
(statearr_27181_27214[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27159 === (11)))
{var inst_27124 = (state_27158[(7)]);var inst_27110 = (state_27158[(12)]);var inst_27124__$1 = cljs.core.seq.call(null,inst_27110);var state_27158__$1 = (function (){var statearr_27182 = state_27158;(statearr_27182[(7)] = inst_27124__$1);
return statearr_27182;
})();if(inst_27124__$1)
{var statearr_27183_27215 = state_27158__$1;(statearr_27183_27215[(1)] = (14));
} else
{var statearr_27184_27216 = state_27158__$1;(statearr_27184_27216[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27159 === (9)))
{var inst_27146 = (state_27158[(2)]);var inst_27147 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_27158__$1 = (function (){var statearr_27185 = state_27158;(statearr_27185[(15)] = inst_27146);
return statearr_27185;
})();if(cljs.core.truth_(inst_27147))
{var statearr_27186_27217 = state_27158__$1;(statearr_27186_27217[(1)] = (21));
} else
{var statearr_27187_27218 = state_27158__$1;(statearr_27187_27218[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27159 === (5)))
{var inst_27102 = cljs.core.async.close_BANG_.call(null,out);var state_27158__$1 = state_27158;var statearr_27188_27219 = state_27158__$1;(statearr_27188_27219[(2)] = inst_27102);
(statearr_27188_27219[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27159 === (14)))
{var inst_27124 = (state_27158[(7)]);var inst_27126 = cljs.core.chunked_seq_QMARK_.call(null,inst_27124);var state_27158__$1 = state_27158;if(inst_27126)
{var statearr_27189_27220 = state_27158__$1;(statearr_27189_27220[(1)] = (17));
} else
{var statearr_27190_27221 = state_27158__$1;(statearr_27190_27221[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27159 === (16)))
{var inst_27142 = (state_27158[(2)]);var state_27158__$1 = state_27158;var statearr_27191_27222 = state_27158__$1;(statearr_27191_27222[(2)] = inst_27142);
(statearr_27191_27222[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27159 === (10)))
{var inst_27113 = (state_27158[(8)]);var inst_27111 = (state_27158[(11)]);var inst_27118 = cljs.core._nth.call(null,inst_27111,inst_27113);var state_27158__$1 = state_27158;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27158__$1,(13),out,inst_27118);
} else
{if((state_val_27159 === (18)))
{var inst_27124 = (state_27158[(7)]);var inst_27133 = cljs.core.first.call(null,inst_27124);var state_27158__$1 = state_27158;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27158__$1,(20),out,inst_27133);
} else
{if((state_val_27159 === (8)))
{var inst_27113 = (state_27158[(8)]);var inst_27112 = (state_27158[(9)]);var inst_27115 = (inst_27113 < inst_27112);var inst_27116 = inst_27115;var state_27158__$1 = state_27158;if(cljs.core.truth_(inst_27116))
{var statearr_27192_27223 = state_27158__$1;(statearr_27192_27223[(1)] = (10));
} else
{var statearr_27193_27224 = state_27158__$1;(statearr_27193_27224[(1)] = (11));
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
});})(c__11154__auto__))
;return ((function (switch__11098__auto__,c__11154__auto__){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_27197 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27197[(0)] = state_machine__11099__auto__);
(statearr_27197[(1)] = (1));
return statearr_27197;
});
var state_machine__11099__auto____1 = (function (state_27158){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_27158);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e27198){if((e27198 instanceof Object))
{var ex__11102__auto__ = e27198;var statearr_27199_27225 = state_27158;(statearr_27199_27225[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27158);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27198;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27226 = state_27158;
state_27158 = G__27226;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_27158){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_27158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__))
})();var state__11156__auto__ = (function (){var statearr_27200 = f__11155__auto__.call(null);(statearr_27200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_27200;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__))
);
return c__11154__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11154__auto___27323 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___27323,out){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___27323,out){
return (function (state_27298){var state_val_27299 = (state_27298[(1)]);if((state_val_27299 === (7)))
{var inst_27293 = (state_27298[(2)]);var state_27298__$1 = state_27298;var statearr_27300_27324 = state_27298__$1;(statearr_27300_27324[(2)] = inst_27293);
(statearr_27300_27324[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27299 === (1)))
{var inst_27275 = null;var state_27298__$1 = (function (){var statearr_27301 = state_27298;(statearr_27301[(7)] = inst_27275);
return statearr_27301;
})();var statearr_27302_27325 = state_27298__$1;(statearr_27302_27325[(2)] = null);
(statearr_27302_27325[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27299 === (4)))
{var inst_27278 = (state_27298[(8)]);var inst_27278__$1 = (state_27298[(2)]);var inst_27279 = (inst_27278__$1 == null);var inst_27280 = cljs.core.not.call(null,inst_27279);var state_27298__$1 = (function (){var statearr_27303 = state_27298;(statearr_27303[(8)] = inst_27278__$1);
return statearr_27303;
})();if(inst_27280)
{var statearr_27304_27326 = state_27298__$1;(statearr_27304_27326[(1)] = (5));
} else
{var statearr_27305_27327 = state_27298__$1;(statearr_27305_27327[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27299 === (6)))
{var state_27298__$1 = state_27298;var statearr_27306_27328 = state_27298__$1;(statearr_27306_27328[(2)] = null);
(statearr_27306_27328[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27299 === (3)))
{var inst_27295 = (state_27298[(2)]);var inst_27296 = cljs.core.async.close_BANG_.call(null,out);var state_27298__$1 = (function (){var statearr_27307 = state_27298;(statearr_27307[(9)] = inst_27295);
return statearr_27307;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27298__$1,inst_27296);
} else
{if((state_val_27299 === (2)))
{var state_27298__$1 = state_27298;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27298__$1,(4),ch);
} else
{if((state_val_27299 === (11)))
{var inst_27278 = (state_27298[(8)]);var inst_27287 = (state_27298[(2)]);var inst_27275 = inst_27278;var state_27298__$1 = (function (){var statearr_27308 = state_27298;(statearr_27308[(7)] = inst_27275);
(statearr_27308[(10)] = inst_27287);
return statearr_27308;
})();var statearr_27309_27329 = state_27298__$1;(statearr_27309_27329[(2)] = null);
(statearr_27309_27329[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27299 === (9)))
{var inst_27278 = (state_27298[(8)]);var state_27298__$1 = state_27298;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27298__$1,(11),out,inst_27278);
} else
{if((state_val_27299 === (5)))
{var inst_27275 = (state_27298[(7)]);var inst_27278 = (state_27298[(8)]);var inst_27282 = cljs.core._EQ_.call(null,inst_27278,inst_27275);var state_27298__$1 = state_27298;if(inst_27282)
{var statearr_27311_27330 = state_27298__$1;(statearr_27311_27330[(1)] = (8));
} else
{var statearr_27312_27331 = state_27298__$1;(statearr_27312_27331[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27299 === (10)))
{var inst_27290 = (state_27298[(2)]);var state_27298__$1 = state_27298;var statearr_27313_27332 = state_27298__$1;(statearr_27313_27332[(2)] = inst_27290);
(statearr_27313_27332[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27299 === (8)))
{var inst_27275 = (state_27298[(7)]);var tmp27310 = inst_27275;var inst_27275__$1 = tmp27310;var state_27298__$1 = (function (){var statearr_27314 = state_27298;(statearr_27314[(7)] = inst_27275__$1);
return statearr_27314;
})();var statearr_27315_27333 = state_27298__$1;(statearr_27315_27333[(2)] = null);
(statearr_27315_27333[(1)] = (2));
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
});})(c__11154__auto___27323,out))
;return ((function (switch__11098__auto__,c__11154__auto___27323,out){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_27319 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27319[(0)] = state_machine__11099__auto__);
(statearr_27319[(1)] = (1));
return statearr_27319;
});
var state_machine__11099__auto____1 = (function (state_27298){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_27298);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e27320){if((e27320 instanceof Object))
{var ex__11102__auto__ = e27320;var statearr_27321_27334 = state_27298;(statearr_27321_27334[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27298);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27320;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27335 = state_27298;
state_27298 = G__27335;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_27298){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_27298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___27323,out))
})();var state__11156__auto__ = (function (){var statearr_27322 = f__11155__auto__.call(null);(statearr_27322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___27323);
return statearr_27322;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___27323,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11154__auto___27470 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___27470,out){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___27470,out){
return (function (state_27440){var state_val_27441 = (state_27440[(1)]);if((state_val_27441 === (7)))
{var inst_27436 = (state_27440[(2)]);var state_27440__$1 = state_27440;var statearr_27442_27471 = state_27440__$1;(statearr_27442_27471[(2)] = inst_27436);
(statearr_27442_27471[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27441 === (1)))
{var inst_27403 = (new Array(n));var inst_27404 = inst_27403;var inst_27405 = (0);var state_27440__$1 = (function (){var statearr_27443 = state_27440;(statearr_27443[(7)] = inst_27404);
(statearr_27443[(8)] = inst_27405);
return statearr_27443;
})();var statearr_27444_27472 = state_27440__$1;(statearr_27444_27472[(2)] = null);
(statearr_27444_27472[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27441 === (4)))
{var inst_27408 = (state_27440[(9)]);var inst_27408__$1 = (state_27440[(2)]);var inst_27409 = (inst_27408__$1 == null);var inst_27410 = cljs.core.not.call(null,inst_27409);var state_27440__$1 = (function (){var statearr_27445 = state_27440;(statearr_27445[(9)] = inst_27408__$1);
return statearr_27445;
})();if(inst_27410)
{var statearr_27446_27473 = state_27440__$1;(statearr_27446_27473[(1)] = (5));
} else
{var statearr_27447_27474 = state_27440__$1;(statearr_27447_27474[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27441 === (15)))
{var inst_27430 = (state_27440[(2)]);var state_27440__$1 = state_27440;var statearr_27448_27475 = state_27440__$1;(statearr_27448_27475[(2)] = inst_27430);
(statearr_27448_27475[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27441 === (13)))
{var state_27440__$1 = state_27440;var statearr_27449_27476 = state_27440__$1;(statearr_27449_27476[(2)] = null);
(statearr_27449_27476[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27441 === (6)))
{var inst_27405 = (state_27440[(8)]);var inst_27426 = (inst_27405 > (0));var state_27440__$1 = state_27440;if(cljs.core.truth_(inst_27426))
{var statearr_27450_27477 = state_27440__$1;(statearr_27450_27477[(1)] = (12));
} else
{var statearr_27451_27478 = state_27440__$1;(statearr_27451_27478[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27441 === (3)))
{var inst_27438 = (state_27440[(2)]);var state_27440__$1 = state_27440;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27440__$1,inst_27438);
} else
{if((state_val_27441 === (12)))
{var inst_27404 = (state_27440[(7)]);var inst_27428 = cljs.core.vec.call(null,inst_27404);var state_27440__$1 = state_27440;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27440__$1,(15),out,inst_27428);
} else
{if((state_val_27441 === (2)))
{var state_27440__$1 = state_27440;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27440__$1,(4),ch);
} else
{if((state_val_27441 === (11)))
{var inst_27420 = (state_27440[(2)]);var inst_27421 = (new Array(n));var inst_27404 = inst_27421;var inst_27405 = (0);var state_27440__$1 = (function (){var statearr_27452 = state_27440;(statearr_27452[(10)] = inst_27420);
(statearr_27452[(7)] = inst_27404);
(statearr_27452[(8)] = inst_27405);
return statearr_27452;
})();var statearr_27453_27479 = state_27440__$1;(statearr_27453_27479[(2)] = null);
(statearr_27453_27479[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27441 === (9)))
{var inst_27404 = (state_27440[(7)]);var inst_27418 = cljs.core.vec.call(null,inst_27404);var state_27440__$1 = state_27440;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27440__$1,(11),out,inst_27418);
} else
{if((state_val_27441 === (5)))
{var inst_27408 = (state_27440[(9)]);var inst_27413 = (state_27440[(11)]);var inst_27404 = (state_27440[(7)]);var inst_27405 = (state_27440[(8)]);var inst_27412 = (inst_27404[inst_27405] = inst_27408);var inst_27413__$1 = (inst_27405 + (1));var inst_27414 = (inst_27413__$1 < n);var state_27440__$1 = (function (){var statearr_27454 = state_27440;(statearr_27454[(11)] = inst_27413__$1);
(statearr_27454[(12)] = inst_27412);
return statearr_27454;
})();if(cljs.core.truth_(inst_27414))
{var statearr_27455_27480 = state_27440__$1;(statearr_27455_27480[(1)] = (8));
} else
{var statearr_27456_27481 = state_27440__$1;(statearr_27456_27481[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27441 === (14)))
{var inst_27433 = (state_27440[(2)]);var inst_27434 = cljs.core.async.close_BANG_.call(null,out);var state_27440__$1 = (function (){var statearr_27458 = state_27440;(statearr_27458[(13)] = inst_27433);
return statearr_27458;
})();var statearr_27459_27482 = state_27440__$1;(statearr_27459_27482[(2)] = inst_27434);
(statearr_27459_27482[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27441 === (10)))
{var inst_27424 = (state_27440[(2)]);var state_27440__$1 = state_27440;var statearr_27460_27483 = state_27440__$1;(statearr_27460_27483[(2)] = inst_27424);
(statearr_27460_27483[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27441 === (8)))
{var inst_27413 = (state_27440[(11)]);var inst_27404 = (state_27440[(7)]);var tmp27457 = inst_27404;var inst_27404__$1 = tmp27457;var inst_27405 = inst_27413;var state_27440__$1 = (function (){var statearr_27461 = state_27440;(statearr_27461[(7)] = inst_27404__$1);
(statearr_27461[(8)] = inst_27405);
return statearr_27461;
})();var statearr_27462_27484 = state_27440__$1;(statearr_27462_27484[(2)] = null);
(statearr_27462_27484[(1)] = (2));
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
});})(c__11154__auto___27470,out))
;return ((function (switch__11098__auto__,c__11154__auto___27470,out){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_27466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27466[(0)] = state_machine__11099__auto__);
(statearr_27466[(1)] = (1));
return statearr_27466;
});
var state_machine__11099__auto____1 = (function (state_27440){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_27440);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e27467){if((e27467 instanceof Object))
{var ex__11102__auto__ = e27467;var statearr_27468_27485 = state_27440;(statearr_27468_27485[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27440);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27467;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27486 = state_27440;
state_27440 = G__27486;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_27440){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_27440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___27470,out))
})();var state__11156__auto__ = (function (){var statearr_27469 = f__11155__auto__.call(null);(statearr_27469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___27470);
return statearr_27469;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___27470,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11154__auto___27629 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___27629,out){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___27629,out){
return (function (state_27599){var state_val_27600 = (state_27599[(1)]);if((state_val_27600 === (7)))
{var inst_27595 = (state_27599[(2)]);var state_27599__$1 = state_27599;var statearr_27601_27630 = state_27599__$1;(statearr_27601_27630[(2)] = inst_27595);
(statearr_27601_27630[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27600 === (1)))
{var inst_27558 = [];var inst_27559 = inst_27558;var inst_27560 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_27599__$1 = (function (){var statearr_27602 = state_27599;(statearr_27602[(7)] = inst_27559);
(statearr_27602[(8)] = inst_27560);
return statearr_27602;
})();var statearr_27603_27631 = state_27599__$1;(statearr_27603_27631[(2)] = null);
(statearr_27603_27631[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27600 === (4)))
{var inst_27563 = (state_27599[(9)]);var inst_27563__$1 = (state_27599[(2)]);var inst_27564 = (inst_27563__$1 == null);var inst_27565 = cljs.core.not.call(null,inst_27564);var state_27599__$1 = (function (){var statearr_27604 = state_27599;(statearr_27604[(9)] = inst_27563__$1);
return statearr_27604;
})();if(inst_27565)
{var statearr_27605_27632 = state_27599__$1;(statearr_27605_27632[(1)] = (5));
} else
{var statearr_27606_27633 = state_27599__$1;(statearr_27606_27633[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27600 === (15)))
{var inst_27589 = (state_27599[(2)]);var state_27599__$1 = state_27599;var statearr_27607_27634 = state_27599__$1;(statearr_27607_27634[(2)] = inst_27589);
(statearr_27607_27634[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27600 === (13)))
{var state_27599__$1 = state_27599;var statearr_27608_27635 = state_27599__$1;(statearr_27608_27635[(2)] = null);
(statearr_27608_27635[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27600 === (6)))
{var inst_27559 = (state_27599[(7)]);var inst_27584 = inst_27559.length;var inst_27585 = (inst_27584 > (0));var state_27599__$1 = state_27599;if(cljs.core.truth_(inst_27585))
{var statearr_27609_27636 = state_27599__$1;(statearr_27609_27636[(1)] = (12));
} else
{var statearr_27610_27637 = state_27599__$1;(statearr_27610_27637[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27600 === (3)))
{var inst_27597 = (state_27599[(2)]);var state_27599__$1 = state_27599;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27599__$1,inst_27597);
} else
{if((state_val_27600 === (12)))
{var inst_27559 = (state_27599[(7)]);var inst_27587 = cljs.core.vec.call(null,inst_27559);var state_27599__$1 = state_27599;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27599__$1,(15),out,inst_27587);
} else
{if((state_val_27600 === (2)))
{var state_27599__$1 = state_27599;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27599__$1,(4),ch);
} else
{if((state_val_27600 === (11)))
{var inst_27563 = (state_27599[(9)]);var inst_27567 = (state_27599[(10)]);var inst_27577 = (state_27599[(2)]);var inst_27578 = [];var inst_27579 = inst_27578.push(inst_27563);var inst_27559 = inst_27578;var inst_27560 = inst_27567;var state_27599__$1 = (function (){var statearr_27611 = state_27599;(statearr_27611[(11)] = inst_27579);
(statearr_27611[(12)] = inst_27577);
(statearr_27611[(7)] = inst_27559);
(statearr_27611[(8)] = inst_27560);
return statearr_27611;
})();var statearr_27612_27638 = state_27599__$1;(statearr_27612_27638[(2)] = null);
(statearr_27612_27638[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27600 === (9)))
{var inst_27559 = (state_27599[(7)]);var inst_27575 = cljs.core.vec.call(null,inst_27559);var state_27599__$1 = state_27599;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27599__$1,(11),out,inst_27575);
} else
{if((state_val_27600 === (5)))
{var inst_27563 = (state_27599[(9)]);var inst_27567 = (state_27599[(10)]);var inst_27560 = (state_27599[(8)]);var inst_27567__$1 = f.call(null,inst_27563);var inst_27568 = cljs.core._EQ_.call(null,inst_27567__$1,inst_27560);var inst_27569 = cljs.core.keyword_identical_QMARK_.call(null,inst_27560,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_27570 = (inst_27568) || (inst_27569);var state_27599__$1 = (function (){var statearr_27613 = state_27599;(statearr_27613[(10)] = inst_27567__$1);
return statearr_27613;
})();if(cljs.core.truth_(inst_27570))
{var statearr_27614_27639 = state_27599__$1;(statearr_27614_27639[(1)] = (8));
} else
{var statearr_27615_27640 = state_27599__$1;(statearr_27615_27640[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27600 === (14)))
{var inst_27592 = (state_27599[(2)]);var inst_27593 = cljs.core.async.close_BANG_.call(null,out);var state_27599__$1 = (function (){var statearr_27617 = state_27599;(statearr_27617[(13)] = inst_27592);
return statearr_27617;
})();var statearr_27618_27641 = state_27599__$1;(statearr_27618_27641[(2)] = inst_27593);
(statearr_27618_27641[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27600 === (10)))
{var inst_27582 = (state_27599[(2)]);var state_27599__$1 = state_27599;var statearr_27619_27642 = state_27599__$1;(statearr_27619_27642[(2)] = inst_27582);
(statearr_27619_27642[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27600 === (8)))
{var inst_27563 = (state_27599[(9)]);var inst_27559 = (state_27599[(7)]);var inst_27567 = (state_27599[(10)]);var inst_27572 = inst_27559.push(inst_27563);var tmp27616 = inst_27559;var inst_27559__$1 = tmp27616;var inst_27560 = inst_27567;var state_27599__$1 = (function (){var statearr_27620 = state_27599;(statearr_27620[(14)] = inst_27572);
(statearr_27620[(7)] = inst_27559__$1);
(statearr_27620[(8)] = inst_27560);
return statearr_27620;
})();var statearr_27621_27643 = state_27599__$1;(statearr_27621_27643[(2)] = null);
(statearr_27621_27643[(1)] = (2));
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
});})(c__11154__auto___27629,out))
;return ((function (switch__11098__auto__,c__11154__auto___27629,out){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_27625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27625[(0)] = state_machine__11099__auto__);
(statearr_27625[(1)] = (1));
return statearr_27625;
});
var state_machine__11099__auto____1 = (function (state_27599){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_27599);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e27626){if((e27626 instanceof Object))
{var ex__11102__auto__ = e27626;var statearr_27627_27644 = state_27599;(statearr_27627_27644[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27599);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27626;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27645 = state_27599;
state_27599 = G__27645;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_27599){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_27599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___27629,out))
})();var state__11156__auto__ = (function (){var statearr_27628 = f__11155__auto__.call(null);(statearr_27628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___27629);
return statearr_27628;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___27629,out))
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
