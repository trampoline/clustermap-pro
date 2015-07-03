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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23498 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23498 = (function (f,fn_handler,meta23499){
this.f = f;
this.fn_handler = fn_handler;
this.meta23499 = meta23499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23498.cljs$lang$type = true;
cljs.core.async.t23498.cljs$lang$ctorStr = "cljs.core.async/t23498";
cljs.core.async.t23498.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23498");
});
cljs.core.async.t23498.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23498.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23498.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23500){var self__ = this;
var _23500__$1 = this;return self__.meta23499;
});
cljs.core.async.t23498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23500,meta23499__$1){var self__ = this;
var _23500__$1 = this;return (new cljs.core.async.t23498(self__.f,self__.fn_handler,meta23499__$1));
});
cljs.core.async.__GT_t23498 = (function __GT_t23498(f__$1,fn_handler__$1,meta23499){return (new cljs.core.async.t23498(f__$1,fn_handler__$1,meta23499));
});
}
return (new cljs.core.async.t23498(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23502 = buff;if(G__23502)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__23502.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23502.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23502);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23502);
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
{var val_23503 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23503);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_23503,ret){
return (function (){return fn1.call(null,val_23503);
});})(val_23503,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___23504 = n;var x_23505 = (0);while(true){
if((x_23505 < n__4508__auto___23504))
{(a[x_23505] = (0));
{
var G__23506 = (x_23505 + (1));
x_23505 = G__23506;
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
var G__23507 = (i + (1));
i = G__23507;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23511 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23511 = (function (flag,alt_flag,meta23512){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23512 = meta23512;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23511.cljs$lang$type = true;
cljs.core.async.t23511.cljs$lang$ctorStr = "cljs.core.async/t23511";
cljs.core.async.t23511.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23511");
});})(flag))
;
cljs.core.async.t23511.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23511.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t23511.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t23511.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23513){var self__ = this;
var _23513__$1 = this;return self__.meta23512;
});})(flag))
;
cljs.core.async.t23511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23513,meta23512__$1){var self__ = this;
var _23513__$1 = this;return (new cljs.core.async.t23511(self__.flag,self__.alt_flag,meta23512__$1));
});})(flag))
;
cljs.core.async.__GT_t23511 = ((function (flag){
return (function __GT_t23511(flag__$1,alt_flag__$1,meta23512){return (new cljs.core.async.t23511(flag__$1,alt_flag__$1,meta23512));
});})(flag))
;
}
return (new cljs.core.async.t23511(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23517 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23517 = (function (cb,flag,alt_handler,meta23518){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23518 = meta23518;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23517.cljs$lang$type = true;
cljs.core.async.t23517.cljs$lang$ctorStr = "cljs.core.async/t23517";
cljs.core.async.t23517.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23517");
});
cljs.core.async.t23517.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23517.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23517.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23519){var self__ = this;
var _23519__$1 = this;return self__.meta23518;
});
cljs.core.async.t23517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23519,meta23518__$1){var self__ = this;
var _23519__$1 = this;return (new cljs.core.async.t23517(self__.cb,self__.flag,self__.alt_handler,meta23518__$1));
});
cljs.core.async.__GT_t23517 = (function __GT_t23517(cb__$1,flag__$1,alt_handler__$1,meta23518){return (new cljs.core.async.t23517(cb__$1,flag__$1,alt_handler__$1,meta23518));
});
}
return (new cljs.core.async.t23517(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23520_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23520_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23521_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23521_SHARP_,port], null));
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
var G__23522 = (i + (1));
i = G__23522;
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
var alts_BANG___delegate = function (ports,p__23523){var map__23525 = p__23523;var map__23525__$1 = ((cljs.core.seq_QMARK_.call(null,map__23525))?cljs.core.apply.call(null,cljs.core.hash_map,map__23525):map__23525);var opts = map__23525__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23523 = null;if (arguments.length > 1) {
  p__23523 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23523);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23526){
var ports = cljs.core.first(arglist__23526);
var p__23523 = cljs.core.rest(arglist__23526);
return alts_BANG___delegate(ports,p__23523);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__9125__auto___23621 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23621){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23621){
return (function (state_23597){var state_val_23598 = (state_23597[(1)]);if((state_val_23598 === (7)))
{var inst_23593 = (state_23597[(2)]);var state_23597__$1 = state_23597;var statearr_23599_23622 = state_23597__$1;(statearr_23599_23622[(2)] = inst_23593);
(statearr_23599_23622[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23598 === (1)))
{var state_23597__$1 = state_23597;var statearr_23600_23623 = state_23597__$1;(statearr_23600_23623[(2)] = null);
(statearr_23600_23623[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23598 === (4)))
{var inst_23576 = (state_23597[(7)]);var inst_23576__$1 = (state_23597[(2)]);var inst_23577 = (inst_23576__$1 == null);var state_23597__$1 = (function (){var statearr_23601 = state_23597;(statearr_23601[(7)] = inst_23576__$1);
return statearr_23601;
})();if(cljs.core.truth_(inst_23577))
{var statearr_23602_23624 = state_23597__$1;(statearr_23602_23624[(1)] = (5));
} else
{var statearr_23603_23625 = state_23597__$1;(statearr_23603_23625[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23598 === (13)))
{var state_23597__$1 = state_23597;var statearr_23604_23626 = state_23597__$1;(statearr_23604_23626[(2)] = null);
(statearr_23604_23626[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23598 === (6)))
{var inst_23576 = (state_23597[(7)]);var state_23597__$1 = state_23597;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23597__$1,(11),to,inst_23576);
} else
{if((state_val_23598 === (3)))
{var inst_23595 = (state_23597[(2)]);var state_23597__$1 = state_23597;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23597__$1,inst_23595);
} else
{if((state_val_23598 === (12)))
{var state_23597__$1 = state_23597;var statearr_23605_23627 = state_23597__$1;(statearr_23605_23627[(2)] = null);
(statearr_23605_23627[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23598 === (2)))
{var state_23597__$1 = state_23597;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23597__$1,(4),from);
} else
{if((state_val_23598 === (11)))
{var inst_23586 = (state_23597[(2)]);var state_23597__$1 = state_23597;if(cljs.core.truth_(inst_23586))
{var statearr_23606_23628 = state_23597__$1;(statearr_23606_23628[(1)] = (12));
} else
{var statearr_23607_23629 = state_23597__$1;(statearr_23607_23629[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23598 === (9)))
{var state_23597__$1 = state_23597;var statearr_23608_23630 = state_23597__$1;(statearr_23608_23630[(2)] = null);
(statearr_23608_23630[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23598 === (5)))
{var state_23597__$1 = state_23597;if(cljs.core.truth_(close_QMARK_))
{var statearr_23609_23631 = state_23597__$1;(statearr_23609_23631[(1)] = (8));
} else
{var statearr_23610_23632 = state_23597__$1;(statearr_23610_23632[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23598 === (14)))
{var inst_23591 = (state_23597[(2)]);var state_23597__$1 = state_23597;var statearr_23611_23633 = state_23597__$1;(statearr_23611_23633[(2)] = inst_23591);
(statearr_23611_23633[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23598 === (10)))
{var inst_23583 = (state_23597[(2)]);var state_23597__$1 = state_23597;var statearr_23612_23634 = state_23597__$1;(statearr_23612_23634[(2)] = inst_23583);
(statearr_23612_23634[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23598 === (8)))
{var inst_23580 = cljs.core.async.close_BANG_.call(null,to);var state_23597__$1 = state_23597;var statearr_23613_23635 = state_23597__$1;(statearr_23613_23635[(2)] = inst_23580);
(statearr_23613_23635[(1)] = (10));
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
});})(c__9125__auto___23621))
;return ((function (switch__9110__auto__,c__9125__auto___23621){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23617 = [null,null,null,null,null,null,null,null];(statearr_23617[(0)] = state_machine__9111__auto__);
(statearr_23617[(1)] = (1));
return statearr_23617;
});
var state_machine__9111__auto____1 = (function (state_23597){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23597);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23618){if((e23618 instanceof Object))
{var ex__9114__auto__ = e23618;var statearr_23619_23636 = state_23597;(statearr_23619_23636[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23597);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23618;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23637 = state_23597;
state_23597 = G__23637;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23597){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23621))
})();var state__9127__auto__ = (function (){var statearr_23620 = f__9126__auto__.call(null);(statearr_23620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23621);
return statearr_23620;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23621))
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
return (function (p__23821){var vec__23822 = p__23821;var v = cljs.core.nth.call(null,vec__23822,(0),null);var p = cljs.core.nth.call(null,vec__23822,(1),null);var job = vec__23822;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__9125__auto___24004 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24004,res,vec__23822,v,p,job,jobs,results){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24004,res,vec__23822,v,p,job,jobs,results){
return (function (state_23827){var state_val_23828 = (state_23827[(1)]);if((state_val_23828 === (2)))
{var inst_23824 = (state_23827[(2)]);var inst_23825 = cljs.core.async.close_BANG_.call(null,res);var state_23827__$1 = (function (){var statearr_23829 = state_23827;(statearr_23829[(7)] = inst_23824);
return statearr_23829;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23827__$1,inst_23825);
} else
{if((state_val_23828 === (1)))
{var state_23827__$1 = state_23827;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23827__$1,(2),res,v);
} else
{return null;
}
}
});})(c__9125__auto___24004,res,vec__23822,v,p,job,jobs,results))
;return ((function (switch__9110__auto__,c__9125__auto___24004,res,vec__23822,v,p,job,jobs,results){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23833 = [null,null,null,null,null,null,null,null];(statearr_23833[(0)] = state_machine__9111__auto__);
(statearr_23833[(1)] = (1));
return statearr_23833;
});
var state_machine__9111__auto____1 = (function (state_23827){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23827);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23834){if((e23834 instanceof Object))
{var ex__9114__auto__ = e23834;var statearr_23835_24005 = state_23827;(statearr_23835_24005[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23827);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23834;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24006 = state_23827;
state_23827 = G__24006;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23827){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24004,res,vec__23822,v,p,job,jobs,results))
})();var state__9127__auto__ = (function (){var statearr_23836 = f__9126__auto__.call(null);(statearr_23836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24004);
return statearr_23836;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24004,res,vec__23822,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__23837){var vec__23838 = p__23837;var v = cljs.core.nth.call(null,vec__23838,(0),null);var p = cljs.core.nth.call(null,vec__23838,(1),null);var job = vec__23838;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___24007 = n;var __24008 = (0);while(true){
if((__24008 < n__4508__auto___24007))
{var G__23839_24009 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__23839_24009) {
case "async":
var c__9125__auto___24011 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24008,c__9125__auto___24011,G__23839_24009,n__4508__auto___24007,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__24008,c__9125__auto___24011,G__23839_24009,n__4508__auto___24007,jobs,results,process,async){
return (function (state_23852){var state_val_23853 = (state_23852[(1)]);if((state_val_23853 === (7)))
{var inst_23848 = (state_23852[(2)]);var state_23852__$1 = state_23852;var statearr_23854_24012 = state_23852__$1;(statearr_23854_24012[(2)] = inst_23848);
(statearr_23854_24012[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23853 === (6)))
{var state_23852__$1 = state_23852;var statearr_23855_24013 = state_23852__$1;(statearr_23855_24013[(2)] = null);
(statearr_23855_24013[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23853 === (5)))
{var state_23852__$1 = state_23852;var statearr_23856_24014 = state_23852__$1;(statearr_23856_24014[(2)] = null);
(statearr_23856_24014[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23853 === (4)))
{var inst_23842 = (state_23852[(2)]);var inst_23843 = async.call(null,inst_23842);var state_23852__$1 = state_23852;if(cljs.core.truth_(inst_23843))
{var statearr_23857_24015 = state_23852__$1;(statearr_23857_24015[(1)] = (5));
} else
{var statearr_23858_24016 = state_23852__$1;(statearr_23858_24016[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23853 === (3)))
{var inst_23850 = (state_23852[(2)]);var state_23852__$1 = state_23852;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23852__$1,inst_23850);
} else
{if((state_val_23853 === (2)))
{var state_23852__$1 = state_23852;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23852__$1,(4),jobs);
} else
{if((state_val_23853 === (1)))
{var state_23852__$1 = state_23852;var statearr_23859_24017 = state_23852__$1;(statearr_23859_24017[(2)] = null);
(statearr_23859_24017[(1)] = (2));
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
});})(__24008,c__9125__auto___24011,G__23839_24009,n__4508__auto___24007,jobs,results,process,async))
;return ((function (__24008,switch__9110__auto__,c__9125__auto___24011,G__23839_24009,n__4508__auto___24007,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23863 = [null,null,null,null,null,null,null];(statearr_23863[(0)] = state_machine__9111__auto__);
(statearr_23863[(1)] = (1));
return statearr_23863;
});
var state_machine__9111__auto____1 = (function (state_23852){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23852);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23864){if((e23864 instanceof Object))
{var ex__9114__auto__ = e23864;var statearr_23865_24018 = state_23852;(statearr_23865_24018[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23852);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23864;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24019 = state_23852;
state_23852 = G__24019;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23852){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__24008,switch__9110__auto__,c__9125__auto___24011,G__23839_24009,n__4508__auto___24007,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23866 = f__9126__auto__.call(null);(statearr_23866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24011);
return statearr_23866;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__24008,c__9125__auto___24011,G__23839_24009,n__4508__auto___24007,jobs,results,process,async))
);

break;
case "compute":
var c__9125__auto___24020 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24008,c__9125__auto___24020,G__23839_24009,n__4508__auto___24007,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__24008,c__9125__auto___24020,G__23839_24009,n__4508__auto___24007,jobs,results,process,async){
return (function (state_23879){var state_val_23880 = (state_23879[(1)]);if((state_val_23880 === (7)))
{var inst_23875 = (state_23879[(2)]);var state_23879__$1 = state_23879;var statearr_23881_24021 = state_23879__$1;(statearr_23881_24021[(2)] = inst_23875);
(statearr_23881_24021[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23880 === (6)))
{var state_23879__$1 = state_23879;var statearr_23882_24022 = state_23879__$1;(statearr_23882_24022[(2)] = null);
(statearr_23882_24022[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23880 === (5)))
{var state_23879__$1 = state_23879;var statearr_23883_24023 = state_23879__$1;(statearr_23883_24023[(2)] = null);
(statearr_23883_24023[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23880 === (4)))
{var inst_23869 = (state_23879[(2)]);var inst_23870 = process.call(null,inst_23869);var state_23879__$1 = state_23879;if(cljs.core.truth_(inst_23870))
{var statearr_23884_24024 = state_23879__$1;(statearr_23884_24024[(1)] = (5));
} else
{var statearr_23885_24025 = state_23879__$1;(statearr_23885_24025[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23880 === (3)))
{var inst_23877 = (state_23879[(2)]);var state_23879__$1 = state_23879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23879__$1,inst_23877);
} else
{if((state_val_23880 === (2)))
{var state_23879__$1 = state_23879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23879__$1,(4),jobs);
} else
{if((state_val_23880 === (1)))
{var state_23879__$1 = state_23879;var statearr_23886_24026 = state_23879__$1;(statearr_23886_24026[(2)] = null);
(statearr_23886_24026[(1)] = (2));
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
});})(__24008,c__9125__auto___24020,G__23839_24009,n__4508__auto___24007,jobs,results,process,async))
;return ((function (__24008,switch__9110__auto__,c__9125__auto___24020,G__23839_24009,n__4508__auto___24007,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23890 = [null,null,null,null,null,null,null];(statearr_23890[(0)] = state_machine__9111__auto__);
(statearr_23890[(1)] = (1));
return statearr_23890;
});
var state_machine__9111__auto____1 = (function (state_23879){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23879);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23891){if((e23891 instanceof Object))
{var ex__9114__auto__ = e23891;var statearr_23892_24027 = state_23879;(statearr_23892_24027[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23879);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23891;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24028 = state_23879;
state_23879 = G__24028;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23879){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__24008,switch__9110__auto__,c__9125__auto___24020,G__23839_24009,n__4508__auto___24007,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23893 = f__9126__auto__.call(null);(statearr_23893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24020);
return statearr_23893;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__24008,c__9125__auto___24020,G__23839_24009,n__4508__auto___24007,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__24029 = (__24008 + (1));
__24008 = G__24029;
continue;
}
} else
{}
break;
}
var c__9125__auto___24030 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24030,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24030,jobs,results,process,async){
return (function (state_23915){var state_val_23916 = (state_23915[(1)]);if((state_val_23916 === (9)))
{var inst_23908 = (state_23915[(2)]);var state_23915__$1 = (function (){var statearr_23917 = state_23915;(statearr_23917[(7)] = inst_23908);
return statearr_23917;
})();var statearr_23918_24031 = state_23915__$1;(statearr_23918_24031[(2)] = null);
(statearr_23918_24031[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23916 === (8)))
{var inst_23901 = (state_23915[(8)]);var inst_23906 = (state_23915[(2)]);var state_23915__$1 = (function (){var statearr_23919 = state_23915;(statearr_23919[(9)] = inst_23906);
return statearr_23919;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23915__$1,(9),results,inst_23901);
} else
{if((state_val_23916 === (7)))
{var inst_23911 = (state_23915[(2)]);var state_23915__$1 = state_23915;var statearr_23920_24032 = state_23915__$1;(statearr_23920_24032[(2)] = inst_23911);
(statearr_23920_24032[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23916 === (6)))
{var inst_23901 = (state_23915[(8)]);var inst_23896 = (state_23915[(10)]);var inst_23901__$1 = cljs.core.async.chan.call(null,(1));var inst_23902 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23903 = [inst_23896,inst_23901__$1];var inst_23904 = (new cljs.core.PersistentVector(null,2,(5),inst_23902,inst_23903,null));var state_23915__$1 = (function (){var statearr_23921 = state_23915;(statearr_23921[(8)] = inst_23901__$1);
return statearr_23921;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23915__$1,(8),jobs,inst_23904);
} else
{if((state_val_23916 === (5)))
{var inst_23899 = cljs.core.async.close_BANG_.call(null,jobs);var state_23915__$1 = state_23915;var statearr_23922_24033 = state_23915__$1;(statearr_23922_24033[(2)] = inst_23899);
(statearr_23922_24033[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23916 === (4)))
{var inst_23896 = (state_23915[(10)]);var inst_23896__$1 = (state_23915[(2)]);var inst_23897 = (inst_23896__$1 == null);var state_23915__$1 = (function (){var statearr_23923 = state_23915;(statearr_23923[(10)] = inst_23896__$1);
return statearr_23923;
})();if(cljs.core.truth_(inst_23897))
{var statearr_23924_24034 = state_23915__$1;(statearr_23924_24034[(1)] = (5));
} else
{var statearr_23925_24035 = state_23915__$1;(statearr_23925_24035[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23916 === (3)))
{var inst_23913 = (state_23915[(2)]);var state_23915__$1 = state_23915;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23915__$1,inst_23913);
} else
{if((state_val_23916 === (2)))
{var state_23915__$1 = state_23915;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23915__$1,(4),from);
} else
{if((state_val_23916 === (1)))
{var state_23915__$1 = state_23915;var statearr_23926_24036 = state_23915__$1;(statearr_23926_24036[(2)] = null);
(statearr_23926_24036[(1)] = (2));
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
});})(c__9125__auto___24030,jobs,results,process,async))
;return ((function (switch__9110__auto__,c__9125__auto___24030,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23930 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23930[(0)] = state_machine__9111__auto__);
(statearr_23930[(1)] = (1));
return statearr_23930;
});
var state_machine__9111__auto____1 = (function (state_23915){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23915);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23931){if((e23931 instanceof Object))
{var ex__9114__auto__ = e23931;var statearr_23932_24037 = state_23915;(statearr_23932_24037[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23915);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23931;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24038 = state_23915;
state_23915 = G__24038;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23915){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24030,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23933 = f__9126__auto__.call(null);(statearr_23933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24030);
return statearr_23933;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24030,jobs,results,process,async))
);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,jobs,results,process,async){
return (function (state_23971){var state_val_23972 = (state_23971[(1)]);if((state_val_23972 === (7)))
{var inst_23967 = (state_23971[(2)]);var state_23971__$1 = state_23971;var statearr_23973_24039 = state_23971__$1;(statearr_23973_24039[(2)] = inst_23967);
(statearr_23973_24039[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23972 === (20)))
{var state_23971__$1 = state_23971;var statearr_23974_24040 = state_23971__$1;(statearr_23974_24040[(2)] = null);
(statearr_23974_24040[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23972 === (1)))
{var state_23971__$1 = state_23971;var statearr_23975_24041 = state_23971__$1;(statearr_23975_24041[(2)] = null);
(statearr_23975_24041[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23972 === (4)))
{var inst_23936 = (state_23971[(7)]);var inst_23936__$1 = (state_23971[(2)]);var inst_23937 = (inst_23936__$1 == null);var state_23971__$1 = (function (){var statearr_23976 = state_23971;(statearr_23976[(7)] = inst_23936__$1);
return statearr_23976;
})();if(cljs.core.truth_(inst_23937))
{var statearr_23977_24042 = state_23971__$1;(statearr_23977_24042[(1)] = (5));
} else
{var statearr_23978_24043 = state_23971__$1;(statearr_23978_24043[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23972 === (15)))
{var inst_23949 = (state_23971[(8)]);var state_23971__$1 = state_23971;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23971__$1,(18),to,inst_23949);
} else
{if((state_val_23972 === (21)))
{var inst_23962 = (state_23971[(2)]);var state_23971__$1 = state_23971;var statearr_23979_24044 = state_23971__$1;(statearr_23979_24044[(2)] = inst_23962);
(statearr_23979_24044[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23972 === (13)))
{var inst_23964 = (state_23971[(2)]);var state_23971__$1 = (function (){var statearr_23980 = state_23971;(statearr_23980[(9)] = inst_23964);
return statearr_23980;
})();var statearr_23981_24045 = state_23971__$1;(statearr_23981_24045[(2)] = null);
(statearr_23981_24045[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23972 === (6)))
{var inst_23936 = (state_23971[(7)]);var state_23971__$1 = state_23971;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23971__$1,(11),inst_23936);
} else
{if((state_val_23972 === (17)))
{var inst_23957 = (state_23971[(2)]);var state_23971__$1 = state_23971;if(cljs.core.truth_(inst_23957))
{var statearr_23982_24046 = state_23971__$1;(statearr_23982_24046[(1)] = (19));
} else
{var statearr_23983_24047 = state_23971__$1;(statearr_23983_24047[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23972 === (3)))
{var inst_23969 = (state_23971[(2)]);var state_23971__$1 = state_23971;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23971__$1,inst_23969);
} else
{if((state_val_23972 === (12)))
{var inst_23946 = (state_23971[(10)]);var state_23971__$1 = state_23971;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23971__$1,(14),inst_23946);
} else
{if((state_val_23972 === (2)))
{var state_23971__$1 = state_23971;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23971__$1,(4),results);
} else
{if((state_val_23972 === (19)))
{var state_23971__$1 = state_23971;var statearr_23984_24048 = state_23971__$1;(statearr_23984_24048[(2)] = null);
(statearr_23984_24048[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23972 === (11)))
{var inst_23946 = (state_23971[(2)]);var state_23971__$1 = (function (){var statearr_23985 = state_23971;(statearr_23985[(10)] = inst_23946);
return statearr_23985;
})();var statearr_23986_24049 = state_23971__$1;(statearr_23986_24049[(2)] = null);
(statearr_23986_24049[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23972 === (9)))
{var state_23971__$1 = state_23971;var statearr_23987_24050 = state_23971__$1;(statearr_23987_24050[(2)] = null);
(statearr_23987_24050[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23972 === (5)))
{var state_23971__$1 = state_23971;if(cljs.core.truth_(close_QMARK_))
{var statearr_23988_24051 = state_23971__$1;(statearr_23988_24051[(1)] = (8));
} else
{var statearr_23989_24052 = state_23971__$1;(statearr_23989_24052[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23972 === (14)))
{var inst_23949 = (state_23971[(8)]);var inst_23951 = (state_23971[(11)]);var inst_23949__$1 = (state_23971[(2)]);var inst_23950 = (inst_23949__$1 == null);var inst_23951__$1 = cljs.core.not.call(null,inst_23950);var state_23971__$1 = (function (){var statearr_23990 = state_23971;(statearr_23990[(8)] = inst_23949__$1);
(statearr_23990[(11)] = inst_23951__$1);
return statearr_23990;
})();if(inst_23951__$1)
{var statearr_23991_24053 = state_23971__$1;(statearr_23991_24053[(1)] = (15));
} else
{var statearr_23992_24054 = state_23971__$1;(statearr_23992_24054[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23972 === (16)))
{var inst_23951 = (state_23971[(11)]);var state_23971__$1 = state_23971;var statearr_23993_24055 = state_23971__$1;(statearr_23993_24055[(2)] = inst_23951);
(statearr_23993_24055[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23972 === (10)))
{var inst_23943 = (state_23971[(2)]);var state_23971__$1 = state_23971;var statearr_23994_24056 = state_23971__$1;(statearr_23994_24056[(2)] = inst_23943);
(statearr_23994_24056[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23972 === (18)))
{var inst_23954 = (state_23971[(2)]);var state_23971__$1 = state_23971;var statearr_23995_24057 = state_23971__$1;(statearr_23995_24057[(2)] = inst_23954);
(statearr_23995_24057[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23972 === (8)))
{var inst_23940 = cljs.core.async.close_BANG_.call(null,to);var state_23971__$1 = state_23971;var statearr_23996_24058 = state_23971__$1;(statearr_23996_24058[(2)] = inst_23940);
(statearr_23996_24058[(1)] = (10));
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
var state_machine__9111__auto____0 = (function (){var statearr_24000 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24000[(0)] = state_machine__9111__auto__);
(statearr_24000[(1)] = (1));
return statearr_24000;
});
var state_machine__9111__auto____1 = (function (state_23971){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23971);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24001){if((e24001 instanceof Object))
{var ex__9114__auto__ = e24001;var statearr_24002_24059 = state_23971;(statearr_24002_24059[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23971);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24001;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24060 = state_23971;
state_23971 = G__24060;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23971){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_24003 = f__9126__auto__.call(null);(statearr_24003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24003;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__9125__auto___24161 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24161,tc,fc){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24161,tc,fc){
return (function (state_24136){var state_val_24137 = (state_24136[(1)]);if((state_val_24137 === (7)))
{var inst_24132 = (state_24136[(2)]);var state_24136__$1 = state_24136;var statearr_24138_24162 = state_24136__$1;(statearr_24138_24162[(2)] = inst_24132);
(statearr_24138_24162[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24137 === (1)))
{var state_24136__$1 = state_24136;var statearr_24139_24163 = state_24136__$1;(statearr_24139_24163[(2)] = null);
(statearr_24139_24163[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24137 === (4)))
{var inst_24113 = (state_24136[(7)]);var inst_24113__$1 = (state_24136[(2)]);var inst_24114 = (inst_24113__$1 == null);var state_24136__$1 = (function (){var statearr_24140 = state_24136;(statearr_24140[(7)] = inst_24113__$1);
return statearr_24140;
})();if(cljs.core.truth_(inst_24114))
{var statearr_24141_24164 = state_24136__$1;(statearr_24141_24164[(1)] = (5));
} else
{var statearr_24142_24165 = state_24136__$1;(statearr_24142_24165[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24137 === (13)))
{var state_24136__$1 = state_24136;var statearr_24143_24166 = state_24136__$1;(statearr_24143_24166[(2)] = null);
(statearr_24143_24166[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24137 === (6)))
{var inst_24113 = (state_24136[(7)]);var inst_24119 = p.call(null,inst_24113);var state_24136__$1 = state_24136;if(cljs.core.truth_(inst_24119))
{var statearr_24144_24167 = state_24136__$1;(statearr_24144_24167[(1)] = (9));
} else
{var statearr_24145_24168 = state_24136__$1;(statearr_24145_24168[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24137 === (3)))
{var inst_24134 = (state_24136[(2)]);var state_24136__$1 = state_24136;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24136__$1,inst_24134);
} else
{if((state_val_24137 === (12)))
{var state_24136__$1 = state_24136;var statearr_24146_24169 = state_24136__$1;(statearr_24146_24169[(2)] = null);
(statearr_24146_24169[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24137 === (2)))
{var state_24136__$1 = state_24136;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24136__$1,(4),ch);
} else
{if((state_val_24137 === (11)))
{var inst_24113 = (state_24136[(7)]);var inst_24123 = (state_24136[(2)]);var state_24136__$1 = state_24136;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24136__$1,(8),inst_24123,inst_24113);
} else
{if((state_val_24137 === (9)))
{var state_24136__$1 = state_24136;var statearr_24147_24170 = state_24136__$1;(statearr_24147_24170[(2)] = tc);
(statearr_24147_24170[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24137 === (5)))
{var inst_24116 = cljs.core.async.close_BANG_.call(null,tc);var inst_24117 = cljs.core.async.close_BANG_.call(null,fc);var state_24136__$1 = (function (){var statearr_24148 = state_24136;(statearr_24148[(8)] = inst_24116);
return statearr_24148;
})();var statearr_24149_24171 = state_24136__$1;(statearr_24149_24171[(2)] = inst_24117);
(statearr_24149_24171[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24137 === (14)))
{var inst_24130 = (state_24136[(2)]);var state_24136__$1 = state_24136;var statearr_24150_24172 = state_24136__$1;(statearr_24150_24172[(2)] = inst_24130);
(statearr_24150_24172[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24137 === (10)))
{var state_24136__$1 = state_24136;var statearr_24151_24173 = state_24136__$1;(statearr_24151_24173[(2)] = fc);
(statearr_24151_24173[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24137 === (8)))
{var inst_24125 = (state_24136[(2)]);var state_24136__$1 = state_24136;if(cljs.core.truth_(inst_24125))
{var statearr_24152_24174 = state_24136__$1;(statearr_24152_24174[(1)] = (12));
} else
{var statearr_24153_24175 = state_24136__$1;(statearr_24153_24175[(1)] = (13));
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
});})(c__9125__auto___24161,tc,fc))
;return ((function (switch__9110__auto__,c__9125__auto___24161,tc,fc){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24157 = [null,null,null,null,null,null,null,null,null];(statearr_24157[(0)] = state_machine__9111__auto__);
(statearr_24157[(1)] = (1));
return statearr_24157;
});
var state_machine__9111__auto____1 = (function (state_24136){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24136);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24158){if((e24158 instanceof Object))
{var ex__9114__auto__ = e24158;var statearr_24159_24176 = state_24136;(statearr_24159_24176[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24136);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24158;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24177 = state_24136;
state_24136 = G__24177;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24136){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24161,tc,fc))
})();var state__9127__auto__ = (function (){var statearr_24160 = f__9126__auto__.call(null);(statearr_24160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24161);
return statearr_24160;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24161,tc,fc))
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
return (function (state_24224){var state_val_24225 = (state_24224[(1)]);if((state_val_24225 === (7)))
{var inst_24220 = (state_24224[(2)]);var state_24224__$1 = state_24224;var statearr_24226_24242 = state_24224__$1;(statearr_24226_24242[(2)] = inst_24220);
(statearr_24226_24242[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24225 === (6)))
{var inst_24210 = (state_24224[(7)]);var inst_24213 = (state_24224[(8)]);var inst_24217 = f.call(null,inst_24210,inst_24213);var inst_24210__$1 = inst_24217;var state_24224__$1 = (function (){var statearr_24227 = state_24224;(statearr_24227[(7)] = inst_24210__$1);
return statearr_24227;
})();var statearr_24228_24243 = state_24224__$1;(statearr_24228_24243[(2)] = null);
(statearr_24228_24243[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24225 === (5)))
{var inst_24210 = (state_24224[(7)]);var state_24224__$1 = state_24224;var statearr_24229_24244 = state_24224__$1;(statearr_24229_24244[(2)] = inst_24210);
(statearr_24229_24244[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24225 === (4)))
{var inst_24213 = (state_24224[(8)]);var inst_24213__$1 = (state_24224[(2)]);var inst_24214 = (inst_24213__$1 == null);var state_24224__$1 = (function (){var statearr_24230 = state_24224;(statearr_24230[(8)] = inst_24213__$1);
return statearr_24230;
})();if(cljs.core.truth_(inst_24214))
{var statearr_24231_24245 = state_24224__$1;(statearr_24231_24245[(1)] = (5));
} else
{var statearr_24232_24246 = state_24224__$1;(statearr_24232_24246[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24225 === (3)))
{var inst_24222 = (state_24224[(2)]);var state_24224__$1 = state_24224;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24224__$1,inst_24222);
} else
{if((state_val_24225 === (2)))
{var state_24224__$1 = state_24224;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24224__$1,(4),ch);
} else
{if((state_val_24225 === (1)))
{var inst_24210 = init;var state_24224__$1 = (function (){var statearr_24233 = state_24224;(statearr_24233[(7)] = inst_24210);
return statearr_24233;
})();var statearr_24234_24247 = state_24224__$1;(statearr_24234_24247[(2)] = null);
(statearr_24234_24247[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_24238 = [null,null,null,null,null,null,null,null,null];(statearr_24238[(0)] = state_machine__9111__auto__);
(statearr_24238[(1)] = (1));
return statearr_24238;
});
var state_machine__9111__auto____1 = (function (state_24224){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24224);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24239){if((e24239 instanceof Object))
{var ex__9114__auto__ = e24239;var statearr_24240_24248 = state_24224;(statearr_24240_24248[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24224);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24239;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24249 = state_24224;
state_24224 = G__24249;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24224){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24241 = f__9126__auto__.call(null);(statearr_24241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24241;
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
return (function (state_24323){var state_val_24324 = (state_24323[(1)]);if((state_val_24324 === (7)))
{var inst_24305 = (state_24323[(2)]);var state_24323__$1 = state_24323;var statearr_24325_24348 = state_24323__$1;(statearr_24325_24348[(2)] = inst_24305);
(statearr_24325_24348[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24324 === (1)))
{var inst_24299 = cljs.core.seq.call(null,coll);var inst_24300 = inst_24299;var state_24323__$1 = (function (){var statearr_24326 = state_24323;(statearr_24326[(7)] = inst_24300);
return statearr_24326;
})();var statearr_24327_24349 = state_24323__$1;(statearr_24327_24349[(2)] = null);
(statearr_24327_24349[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24324 === (4)))
{var inst_24300 = (state_24323[(7)]);var inst_24303 = cljs.core.first.call(null,inst_24300);var state_24323__$1 = state_24323;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24323__$1,(7),ch,inst_24303);
} else
{if((state_val_24324 === (13)))
{var inst_24317 = (state_24323[(2)]);var state_24323__$1 = state_24323;var statearr_24328_24350 = state_24323__$1;(statearr_24328_24350[(2)] = inst_24317);
(statearr_24328_24350[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24324 === (6)))
{var inst_24308 = (state_24323[(2)]);var state_24323__$1 = state_24323;if(cljs.core.truth_(inst_24308))
{var statearr_24329_24351 = state_24323__$1;(statearr_24329_24351[(1)] = (8));
} else
{var statearr_24330_24352 = state_24323__$1;(statearr_24330_24352[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24324 === (3)))
{var inst_24321 = (state_24323[(2)]);var state_24323__$1 = state_24323;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24323__$1,inst_24321);
} else
{if((state_val_24324 === (12)))
{var state_24323__$1 = state_24323;var statearr_24331_24353 = state_24323__$1;(statearr_24331_24353[(2)] = null);
(statearr_24331_24353[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24324 === (2)))
{var inst_24300 = (state_24323[(7)]);var state_24323__$1 = state_24323;if(cljs.core.truth_(inst_24300))
{var statearr_24332_24354 = state_24323__$1;(statearr_24332_24354[(1)] = (4));
} else
{var statearr_24333_24355 = state_24323__$1;(statearr_24333_24355[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24324 === (11)))
{var inst_24314 = cljs.core.async.close_BANG_.call(null,ch);var state_24323__$1 = state_24323;var statearr_24334_24356 = state_24323__$1;(statearr_24334_24356[(2)] = inst_24314);
(statearr_24334_24356[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24324 === (9)))
{var state_24323__$1 = state_24323;if(cljs.core.truth_(close_QMARK_))
{var statearr_24335_24357 = state_24323__$1;(statearr_24335_24357[(1)] = (11));
} else
{var statearr_24336_24358 = state_24323__$1;(statearr_24336_24358[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24324 === (5)))
{var inst_24300 = (state_24323[(7)]);var state_24323__$1 = state_24323;var statearr_24337_24359 = state_24323__$1;(statearr_24337_24359[(2)] = inst_24300);
(statearr_24337_24359[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24324 === (10)))
{var inst_24319 = (state_24323[(2)]);var state_24323__$1 = state_24323;var statearr_24338_24360 = state_24323__$1;(statearr_24338_24360[(2)] = inst_24319);
(statearr_24338_24360[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24324 === (8)))
{var inst_24300 = (state_24323[(7)]);var inst_24310 = cljs.core.next.call(null,inst_24300);var inst_24300__$1 = inst_24310;var state_24323__$1 = (function (){var statearr_24339 = state_24323;(statearr_24339[(7)] = inst_24300__$1);
return statearr_24339;
})();var statearr_24340_24361 = state_24323__$1;(statearr_24340_24361[(2)] = null);
(statearr_24340_24361[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_24344 = [null,null,null,null,null,null,null,null];(statearr_24344[(0)] = state_machine__9111__auto__);
(statearr_24344[(1)] = (1));
return statearr_24344;
});
var state_machine__9111__auto____1 = (function (state_24323){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24323);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24345){if((e24345 instanceof Object))
{var ex__9114__auto__ = e24345;var statearr_24346_24362 = state_24323;(statearr_24346_24362[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24323);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24345;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24363 = state_24323;
state_24323 = G__24363;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24323){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24347 = f__9126__auto__.call(null);(statearr_24347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24347;
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
cljs.core.async.Mux = (function (){var obj24365 = {};return obj24365;
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
cljs.core.async.Mult = (function (){var obj24367 = {};return obj24367;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24589 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24589 = (function (cs,ch,mult,meta24590){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24590 = meta24590;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24589.cljs$lang$type = true;
cljs.core.async.t24589.cljs$lang$ctorStr = "cljs.core.async/t24589";
cljs.core.async.t24589.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24589");
});})(cs))
;
cljs.core.async.t24589.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24589.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24589.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24589.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24589.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24589.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24589.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24591){var self__ = this;
var _24591__$1 = this;return self__.meta24590;
});})(cs))
;
cljs.core.async.t24589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24591,meta24590__$1){var self__ = this;
var _24591__$1 = this;return (new cljs.core.async.t24589(self__.cs,self__.ch,self__.mult,meta24590__$1));
});})(cs))
;
cljs.core.async.__GT_t24589 = ((function (cs){
return (function __GT_t24589(cs__$1,ch__$1,mult__$1,meta24590){return (new cljs.core.async.t24589(cs__$1,ch__$1,mult__$1,meta24590));
});})(cs))
;
}
return (new cljs.core.async.t24589(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__9125__auto___24810 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24810,cs,m,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24810,cs,m,dchan,dctr,done){
return (function (state_24722){var state_val_24723 = (state_24722[(1)]);if((state_val_24723 === (7)))
{var inst_24718 = (state_24722[(2)]);var state_24722__$1 = state_24722;var statearr_24724_24811 = state_24722__$1;(statearr_24724_24811[(2)] = inst_24718);
(statearr_24724_24811[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (20)))
{var inst_24623 = (state_24722[(7)]);var inst_24633 = cljs.core.first.call(null,inst_24623);var inst_24634 = cljs.core.nth.call(null,inst_24633,(0),null);var inst_24635 = cljs.core.nth.call(null,inst_24633,(1),null);var state_24722__$1 = (function (){var statearr_24725 = state_24722;(statearr_24725[(8)] = inst_24634);
return statearr_24725;
})();if(cljs.core.truth_(inst_24635))
{var statearr_24726_24812 = state_24722__$1;(statearr_24726_24812[(1)] = (22));
} else
{var statearr_24727_24813 = state_24722__$1;(statearr_24727_24813[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (27)))
{var inst_24663 = (state_24722[(9)]);var inst_24670 = (state_24722[(10)]);var inst_24594 = (state_24722[(11)]);var inst_24665 = (state_24722[(12)]);var inst_24670__$1 = cljs.core._nth.call(null,inst_24663,inst_24665);var inst_24671 = cljs.core.async.put_BANG_.call(null,inst_24670__$1,inst_24594,done);var state_24722__$1 = (function (){var statearr_24728 = state_24722;(statearr_24728[(10)] = inst_24670__$1);
return statearr_24728;
})();if(cljs.core.truth_(inst_24671))
{var statearr_24729_24814 = state_24722__$1;(statearr_24729_24814[(1)] = (30));
} else
{var statearr_24730_24815 = state_24722__$1;(statearr_24730_24815[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (1)))
{var state_24722__$1 = state_24722;var statearr_24731_24816 = state_24722__$1;(statearr_24731_24816[(2)] = null);
(statearr_24731_24816[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (24)))
{var inst_24623 = (state_24722[(7)]);var inst_24640 = (state_24722[(2)]);var inst_24641 = cljs.core.next.call(null,inst_24623);var inst_24603 = inst_24641;var inst_24604 = null;var inst_24605 = (0);var inst_24606 = (0);var state_24722__$1 = (function (){var statearr_24732 = state_24722;(statearr_24732[(13)] = inst_24640);
(statearr_24732[(14)] = inst_24604);
(statearr_24732[(15)] = inst_24605);
(statearr_24732[(16)] = inst_24603);
(statearr_24732[(17)] = inst_24606);
return statearr_24732;
})();var statearr_24733_24817 = state_24722__$1;(statearr_24733_24817[(2)] = null);
(statearr_24733_24817[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (39)))
{var state_24722__$1 = state_24722;var statearr_24737_24818 = state_24722__$1;(statearr_24737_24818[(2)] = null);
(statearr_24737_24818[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (4)))
{var inst_24594 = (state_24722[(11)]);var inst_24594__$1 = (state_24722[(2)]);var inst_24595 = (inst_24594__$1 == null);var state_24722__$1 = (function (){var statearr_24738 = state_24722;(statearr_24738[(11)] = inst_24594__$1);
return statearr_24738;
})();if(cljs.core.truth_(inst_24595))
{var statearr_24739_24819 = state_24722__$1;(statearr_24739_24819[(1)] = (5));
} else
{var statearr_24740_24820 = state_24722__$1;(statearr_24740_24820[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (15)))
{var inst_24604 = (state_24722[(14)]);var inst_24605 = (state_24722[(15)]);var inst_24603 = (state_24722[(16)]);var inst_24606 = (state_24722[(17)]);var inst_24619 = (state_24722[(2)]);var inst_24620 = (inst_24606 + (1));var tmp24734 = inst_24604;var tmp24735 = inst_24605;var tmp24736 = inst_24603;var inst_24603__$1 = tmp24736;var inst_24604__$1 = tmp24734;var inst_24605__$1 = tmp24735;var inst_24606__$1 = inst_24620;var state_24722__$1 = (function (){var statearr_24741 = state_24722;(statearr_24741[(18)] = inst_24619);
(statearr_24741[(14)] = inst_24604__$1);
(statearr_24741[(15)] = inst_24605__$1);
(statearr_24741[(16)] = inst_24603__$1);
(statearr_24741[(17)] = inst_24606__$1);
return statearr_24741;
})();var statearr_24742_24821 = state_24722__$1;(statearr_24742_24821[(2)] = null);
(statearr_24742_24821[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (21)))
{var inst_24644 = (state_24722[(2)]);var state_24722__$1 = state_24722;var statearr_24746_24822 = state_24722__$1;(statearr_24746_24822[(2)] = inst_24644);
(statearr_24746_24822[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (31)))
{var inst_24670 = (state_24722[(10)]);var inst_24674 = done.call(null,null);var inst_24675 = cljs.core.async.untap_STAR_.call(null,m,inst_24670);var state_24722__$1 = (function (){var statearr_24747 = state_24722;(statearr_24747[(19)] = inst_24674);
return statearr_24747;
})();var statearr_24748_24823 = state_24722__$1;(statearr_24748_24823[(2)] = inst_24675);
(statearr_24748_24823[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (32)))
{var inst_24663 = (state_24722[(9)]);var inst_24664 = (state_24722[(20)]);var inst_24662 = (state_24722[(21)]);var inst_24665 = (state_24722[(12)]);var inst_24677 = (state_24722[(2)]);var inst_24678 = (inst_24665 + (1));var tmp24743 = inst_24663;var tmp24744 = inst_24664;var tmp24745 = inst_24662;var inst_24662__$1 = tmp24745;var inst_24663__$1 = tmp24743;var inst_24664__$1 = tmp24744;var inst_24665__$1 = inst_24678;var state_24722__$1 = (function (){var statearr_24749 = state_24722;(statearr_24749[(9)] = inst_24663__$1);
(statearr_24749[(22)] = inst_24677);
(statearr_24749[(20)] = inst_24664__$1);
(statearr_24749[(21)] = inst_24662__$1);
(statearr_24749[(12)] = inst_24665__$1);
return statearr_24749;
})();var statearr_24750_24824 = state_24722__$1;(statearr_24750_24824[(2)] = null);
(statearr_24750_24824[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (40)))
{var inst_24690 = (state_24722[(23)]);var inst_24694 = done.call(null,null);var inst_24695 = cljs.core.async.untap_STAR_.call(null,m,inst_24690);var state_24722__$1 = (function (){var statearr_24751 = state_24722;(statearr_24751[(24)] = inst_24694);
return statearr_24751;
})();var statearr_24752_24825 = state_24722__$1;(statearr_24752_24825[(2)] = inst_24695);
(statearr_24752_24825[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (33)))
{var inst_24681 = (state_24722[(25)]);var inst_24683 = cljs.core.chunked_seq_QMARK_.call(null,inst_24681);var state_24722__$1 = state_24722;if(inst_24683)
{var statearr_24753_24826 = state_24722__$1;(statearr_24753_24826[(1)] = (36));
} else
{var statearr_24754_24827 = state_24722__$1;(statearr_24754_24827[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (13)))
{var inst_24613 = (state_24722[(26)]);var inst_24616 = cljs.core.async.close_BANG_.call(null,inst_24613);var state_24722__$1 = state_24722;var statearr_24755_24828 = state_24722__$1;(statearr_24755_24828[(2)] = inst_24616);
(statearr_24755_24828[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (22)))
{var inst_24634 = (state_24722[(8)]);var inst_24637 = cljs.core.async.close_BANG_.call(null,inst_24634);var state_24722__$1 = state_24722;var statearr_24756_24829 = state_24722__$1;(statearr_24756_24829[(2)] = inst_24637);
(statearr_24756_24829[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (36)))
{var inst_24681 = (state_24722[(25)]);var inst_24685 = cljs.core.chunk_first.call(null,inst_24681);var inst_24686 = cljs.core.chunk_rest.call(null,inst_24681);var inst_24687 = cljs.core.count.call(null,inst_24685);var inst_24662 = inst_24686;var inst_24663 = inst_24685;var inst_24664 = inst_24687;var inst_24665 = (0);var state_24722__$1 = (function (){var statearr_24757 = state_24722;(statearr_24757[(9)] = inst_24663);
(statearr_24757[(20)] = inst_24664);
(statearr_24757[(21)] = inst_24662);
(statearr_24757[(12)] = inst_24665);
return statearr_24757;
})();var statearr_24758_24830 = state_24722__$1;(statearr_24758_24830[(2)] = null);
(statearr_24758_24830[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (41)))
{var inst_24681 = (state_24722[(25)]);var inst_24697 = (state_24722[(2)]);var inst_24698 = cljs.core.next.call(null,inst_24681);var inst_24662 = inst_24698;var inst_24663 = null;var inst_24664 = (0);var inst_24665 = (0);var state_24722__$1 = (function (){var statearr_24759 = state_24722;(statearr_24759[(9)] = inst_24663);
(statearr_24759[(20)] = inst_24664);
(statearr_24759[(21)] = inst_24662);
(statearr_24759[(27)] = inst_24697);
(statearr_24759[(12)] = inst_24665);
return statearr_24759;
})();var statearr_24760_24831 = state_24722__$1;(statearr_24760_24831[(2)] = null);
(statearr_24760_24831[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (43)))
{var state_24722__$1 = state_24722;var statearr_24761_24832 = state_24722__$1;(statearr_24761_24832[(2)] = null);
(statearr_24761_24832[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (29)))
{var inst_24706 = (state_24722[(2)]);var state_24722__$1 = state_24722;var statearr_24762_24833 = state_24722__$1;(statearr_24762_24833[(2)] = inst_24706);
(statearr_24762_24833[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (44)))
{var inst_24715 = (state_24722[(2)]);var state_24722__$1 = (function (){var statearr_24763 = state_24722;(statearr_24763[(28)] = inst_24715);
return statearr_24763;
})();var statearr_24764_24834 = state_24722__$1;(statearr_24764_24834[(2)] = null);
(statearr_24764_24834[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (6)))
{var inst_24654 = (state_24722[(29)]);var inst_24653 = cljs.core.deref.call(null,cs);var inst_24654__$1 = cljs.core.keys.call(null,inst_24653);var inst_24655 = cljs.core.count.call(null,inst_24654__$1);var inst_24656 = cljs.core.reset_BANG_.call(null,dctr,inst_24655);var inst_24661 = cljs.core.seq.call(null,inst_24654__$1);var inst_24662 = inst_24661;var inst_24663 = null;var inst_24664 = (0);var inst_24665 = (0);var state_24722__$1 = (function (){var statearr_24765 = state_24722;(statearr_24765[(30)] = inst_24656);
(statearr_24765[(9)] = inst_24663);
(statearr_24765[(29)] = inst_24654__$1);
(statearr_24765[(20)] = inst_24664);
(statearr_24765[(21)] = inst_24662);
(statearr_24765[(12)] = inst_24665);
return statearr_24765;
})();var statearr_24766_24835 = state_24722__$1;(statearr_24766_24835[(2)] = null);
(statearr_24766_24835[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (28)))
{var inst_24681 = (state_24722[(25)]);var inst_24662 = (state_24722[(21)]);var inst_24681__$1 = cljs.core.seq.call(null,inst_24662);var state_24722__$1 = (function (){var statearr_24767 = state_24722;(statearr_24767[(25)] = inst_24681__$1);
return statearr_24767;
})();if(inst_24681__$1)
{var statearr_24768_24836 = state_24722__$1;(statearr_24768_24836[(1)] = (33));
} else
{var statearr_24769_24837 = state_24722__$1;(statearr_24769_24837[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (25)))
{var inst_24664 = (state_24722[(20)]);var inst_24665 = (state_24722[(12)]);var inst_24667 = (inst_24665 < inst_24664);var inst_24668 = inst_24667;var state_24722__$1 = state_24722;if(cljs.core.truth_(inst_24668))
{var statearr_24770_24838 = state_24722__$1;(statearr_24770_24838[(1)] = (27));
} else
{var statearr_24771_24839 = state_24722__$1;(statearr_24771_24839[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (34)))
{var state_24722__$1 = state_24722;var statearr_24772_24840 = state_24722__$1;(statearr_24772_24840[(2)] = null);
(statearr_24772_24840[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (17)))
{var state_24722__$1 = state_24722;var statearr_24773_24841 = state_24722__$1;(statearr_24773_24841[(2)] = null);
(statearr_24773_24841[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (3)))
{var inst_24720 = (state_24722[(2)]);var state_24722__$1 = state_24722;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24722__$1,inst_24720);
} else
{if((state_val_24723 === (12)))
{var inst_24649 = (state_24722[(2)]);var state_24722__$1 = state_24722;var statearr_24774_24842 = state_24722__$1;(statearr_24774_24842[(2)] = inst_24649);
(statearr_24774_24842[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (2)))
{var state_24722__$1 = state_24722;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24722__$1,(4),ch);
} else
{if((state_val_24723 === (23)))
{var state_24722__$1 = state_24722;var statearr_24775_24843 = state_24722__$1;(statearr_24775_24843[(2)] = null);
(statearr_24775_24843[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (35)))
{var inst_24704 = (state_24722[(2)]);var state_24722__$1 = state_24722;var statearr_24776_24844 = state_24722__$1;(statearr_24776_24844[(2)] = inst_24704);
(statearr_24776_24844[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (19)))
{var inst_24623 = (state_24722[(7)]);var inst_24627 = cljs.core.chunk_first.call(null,inst_24623);var inst_24628 = cljs.core.chunk_rest.call(null,inst_24623);var inst_24629 = cljs.core.count.call(null,inst_24627);var inst_24603 = inst_24628;var inst_24604 = inst_24627;var inst_24605 = inst_24629;var inst_24606 = (0);var state_24722__$1 = (function (){var statearr_24777 = state_24722;(statearr_24777[(14)] = inst_24604);
(statearr_24777[(15)] = inst_24605);
(statearr_24777[(16)] = inst_24603);
(statearr_24777[(17)] = inst_24606);
return statearr_24777;
})();var statearr_24778_24845 = state_24722__$1;(statearr_24778_24845[(2)] = null);
(statearr_24778_24845[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (11)))
{var inst_24623 = (state_24722[(7)]);var inst_24603 = (state_24722[(16)]);var inst_24623__$1 = cljs.core.seq.call(null,inst_24603);var state_24722__$1 = (function (){var statearr_24779 = state_24722;(statearr_24779[(7)] = inst_24623__$1);
return statearr_24779;
})();if(inst_24623__$1)
{var statearr_24780_24846 = state_24722__$1;(statearr_24780_24846[(1)] = (16));
} else
{var statearr_24781_24847 = state_24722__$1;(statearr_24781_24847[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (9)))
{var inst_24651 = (state_24722[(2)]);var state_24722__$1 = state_24722;var statearr_24782_24848 = state_24722__$1;(statearr_24782_24848[(2)] = inst_24651);
(statearr_24782_24848[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (5)))
{var inst_24601 = cljs.core.deref.call(null,cs);var inst_24602 = cljs.core.seq.call(null,inst_24601);var inst_24603 = inst_24602;var inst_24604 = null;var inst_24605 = (0);var inst_24606 = (0);var state_24722__$1 = (function (){var statearr_24783 = state_24722;(statearr_24783[(14)] = inst_24604);
(statearr_24783[(15)] = inst_24605);
(statearr_24783[(16)] = inst_24603);
(statearr_24783[(17)] = inst_24606);
return statearr_24783;
})();var statearr_24784_24849 = state_24722__$1;(statearr_24784_24849[(2)] = null);
(statearr_24784_24849[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (14)))
{var state_24722__$1 = state_24722;var statearr_24785_24850 = state_24722__$1;(statearr_24785_24850[(2)] = null);
(statearr_24785_24850[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (45)))
{var inst_24712 = (state_24722[(2)]);var state_24722__$1 = state_24722;var statearr_24786_24851 = state_24722__$1;(statearr_24786_24851[(2)] = inst_24712);
(statearr_24786_24851[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (26)))
{var inst_24654 = (state_24722[(29)]);var inst_24708 = (state_24722[(2)]);var inst_24709 = cljs.core.seq.call(null,inst_24654);var state_24722__$1 = (function (){var statearr_24787 = state_24722;(statearr_24787[(31)] = inst_24708);
return statearr_24787;
})();if(inst_24709)
{var statearr_24788_24852 = state_24722__$1;(statearr_24788_24852[(1)] = (42));
} else
{var statearr_24789_24853 = state_24722__$1;(statearr_24789_24853[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (16)))
{var inst_24623 = (state_24722[(7)]);var inst_24625 = cljs.core.chunked_seq_QMARK_.call(null,inst_24623);var state_24722__$1 = state_24722;if(inst_24625)
{var statearr_24790_24854 = state_24722__$1;(statearr_24790_24854[(1)] = (19));
} else
{var statearr_24791_24855 = state_24722__$1;(statearr_24791_24855[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (38)))
{var inst_24701 = (state_24722[(2)]);var state_24722__$1 = state_24722;var statearr_24792_24856 = state_24722__$1;(statearr_24792_24856[(2)] = inst_24701);
(statearr_24792_24856[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (30)))
{var state_24722__$1 = state_24722;var statearr_24793_24857 = state_24722__$1;(statearr_24793_24857[(2)] = null);
(statearr_24793_24857[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (10)))
{var inst_24604 = (state_24722[(14)]);var inst_24606 = (state_24722[(17)]);var inst_24612 = cljs.core._nth.call(null,inst_24604,inst_24606);var inst_24613 = cljs.core.nth.call(null,inst_24612,(0),null);var inst_24614 = cljs.core.nth.call(null,inst_24612,(1),null);var state_24722__$1 = (function (){var statearr_24794 = state_24722;(statearr_24794[(26)] = inst_24613);
return statearr_24794;
})();if(cljs.core.truth_(inst_24614))
{var statearr_24795_24858 = state_24722__$1;(statearr_24795_24858[(1)] = (13));
} else
{var statearr_24796_24859 = state_24722__$1;(statearr_24796_24859[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (18)))
{var inst_24647 = (state_24722[(2)]);var state_24722__$1 = state_24722;var statearr_24797_24860 = state_24722__$1;(statearr_24797_24860[(2)] = inst_24647);
(statearr_24797_24860[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (42)))
{var state_24722__$1 = state_24722;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24722__$1,(45),dchan);
} else
{if((state_val_24723 === (37)))
{var inst_24681 = (state_24722[(25)]);var inst_24690 = (state_24722[(23)]);var inst_24594 = (state_24722[(11)]);var inst_24690__$1 = cljs.core.first.call(null,inst_24681);var inst_24691 = cljs.core.async.put_BANG_.call(null,inst_24690__$1,inst_24594,done);var state_24722__$1 = (function (){var statearr_24798 = state_24722;(statearr_24798[(23)] = inst_24690__$1);
return statearr_24798;
})();if(cljs.core.truth_(inst_24691))
{var statearr_24799_24861 = state_24722__$1;(statearr_24799_24861[(1)] = (39));
} else
{var statearr_24800_24862 = state_24722__$1;(statearr_24800_24862[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24723 === (8)))
{var inst_24605 = (state_24722[(15)]);var inst_24606 = (state_24722[(17)]);var inst_24608 = (inst_24606 < inst_24605);var inst_24609 = inst_24608;var state_24722__$1 = state_24722;if(cljs.core.truth_(inst_24609))
{var statearr_24801_24863 = state_24722__$1;(statearr_24801_24863[(1)] = (10));
} else
{var statearr_24802_24864 = state_24722__$1;(statearr_24802_24864[(1)] = (11));
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
});})(c__9125__auto___24810,cs,m,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___24810,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24806[(0)] = state_machine__9111__auto__);
(statearr_24806[(1)] = (1));
return statearr_24806;
});
var state_machine__9111__auto____1 = (function (state_24722){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24722);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24807){if((e24807 instanceof Object))
{var ex__9114__auto__ = e24807;var statearr_24808_24865 = state_24722;(statearr_24808_24865[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24722);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24807;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24866 = state_24722;
state_24722 = G__24866;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24722){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24810,cs,m,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_24809 = f__9126__auto__.call(null);(statearr_24809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24810);
return statearr_24809;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24810,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj24868 = {};return obj24868;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24869){var map__24874 = p__24869;var map__24874__$1 = ((cljs.core.seq_QMARK_.call(null,map__24874))?cljs.core.apply.call(null,cljs.core.hash_map,map__24874):map__24874);var opts = map__24874__$1;var statearr_24875_24878 = state;(statearr_24875_24878[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24874,map__24874__$1,opts){
return (function (val){var statearr_24876_24879 = state;(statearr_24876_24879[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24874,map__24874__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_24877_24880 = state;(statearr_24877_24880[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24869 = null;if (arguments.length > 3) {
  p__24869 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24869);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24881){
var state = cljs.core.first(arglist__24881);
arglist__24881 = cljs.core.next(arglist__24881);
var cont_block = cljs.core.first(arglist__24881);
arglist__24881 = cljs.core.next(arglist__24881);
var ports = cljs.core.first(arglist__24881);
var p__24869 = cljs.core.rest(arglist__24881);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24869);
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
;var m = (function (){if(typeof cljs.core.async.t25001 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25001 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25002){
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
this.meta25002 = meta25002;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25001.cljs$lang$type = true;
cljs.core.async.t25001.cljs$lang$ctorStr = "cljs.core.async/t25001";
cljs.core.async.t25001.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25001");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25001.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25001.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25001.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25001.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25001.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25001.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25001.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25001.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25001.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25003){var self__ = this;
var _25003__$1 = this;return self__.meta25002;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25003,meta25002__$1){var self__ = this;
var _25003__$1 = this;return (new cljs.core.async.t25001(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25002__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25001 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25001(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25002){return (new cljs.core.async.t25001(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25002));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25001(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__9125__auto___25120 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25073){var state_val_25074 = (state_25073[(1)]);if((state_val_25074 === (7)))
{var inst_25017 = (state_25073[(7)]);var inst_25022 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25017);var state_25073__$1 = state_25073;var statearr_25075_25121 = state_25073__$1;(statearr_25075_25121[(2)] = inst_25022);
(statearr_25075_25121[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25074 === (20)))
{var inst_25032 = (state_25073[(8)]);var state_25073__$1 = state_25073;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25073__$1,(23),out,inst_25032);
} else
{if((state_val_25074 === (1)))
{var inst_25007 = (state_25073[(9)]);var inst_25007__$1 = calc_state.call(null);var inst_25008 = cljs.core.seq_QMARK_.call(null,inst_25007__$1);var state_25073__$1 = (function (){var statearr_25076 = state_25073;(statearr_25076[(9)] = inst_25007__$1);
return statearr_25076;
})();if(inst_25008)
{var statearr_25077_25122 = state_25073__$1;(statearr_25077_25122[(1)] = (2));
} else
{var statearr_25078_25123 = state_25073__$1;(statearr_25078_25123[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25074 === (24)))
{var inst_25025 = (state_25073[(10)]);var inst_25017 = inst_25025;var state_25073__$1 = (function (){var statearr_25079 = state_25073;(statearr_25079[(7)] = inst_25017);
return statearr_25079;
})();var statearr_25080_25124 = state_25073__$1;(statearr_25080_25124[(2)] = null);
(statearr_25080_25124[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25074 === (4)))
{var inst_25007 = (state_25073[(9)]);var inst_25013 = (state_25073[(2)]);var inst_25014 = cljs.core.get.call(null,inst_25013,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25015 = cljs.core.get.call(null,inst_25013,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25016 = cljs.core.get.call(null,inst_25013,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_25017 = inst_25007;var state_25073__$1 = (function (){var statearr_25081 = state_25073;(statearr_25081[(11)] = inst_25016);
(statearr_25081[(12)] = inst_25014);
(statearr_25081[(7)] = inst_25017);
(statearr_25081[(13)] = inst_25015);
return statearr_25081;
})();var statearr_25082_25125 = state_25073__$1;(statearr_25082_25125[(2)] = null);
(statearr_25082_25125[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25074 === (15)))
{var state_25073__$1 = state_25073;var statearr_25083_25126 = state_25073__$1;(statearr_25083_25126[(2)] = null);
(statearr_25083_25126[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25074 === (21)))
{var inst_25025 = (state_25073[(10)]);var inst_25017 = inst_25025;var state_25073__$1 = (function (){var statearr_25084 = state_25073;(statearr_25084[(7)] = inst_25017);
return statearr_25084;
})();var statearr_25085_25127 = state_25073__$1;(statearr_25085_25127[(2)] = null);
(statearr_25085_25127[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25074 === (13)))
{var inst_25069 = (state_25073[(2)]);var state_25073__$1 = state_25073;var statearr_25086_25128 = state_25073__$1;(statearr_25086_25128[(2)] = inst_25069);
(statearr_25086_25128[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25074 === (22)))
{var inst_25067 = (state_25073[(2)]);var state_25073__$1 = state_25073;var statearr_25087_25129 = state_25073__$1;(statearr_25087_25129[(2)] = inst_25067);
(statearr_25087_25129[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25074 === (6)))
{var inst_25071 = (state_25073[(2)]);var state_25073__$1 = state_25073;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25073__$1,inst_25071);
} else
{if((state_val_25074 === (25)))
{var state_25073__$1 = state_25073;var statearr_25088_25130 = state_25073__$1;(statearr_25088_25130[(2)] = null);
(statearr_25088_25130[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25074 === (17)))
{var inst_25047 = (state_25073[(14)]);var state_25073__$1 = state_25073;var statearr_25089_25131 = state_25073__$1;(statearr_25089_25131[(2)] = inst_25047);
(statearr_25089_25131[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25074 === (3)))
{var inst_25007 = (state_25073[(9)]);var state_25073__$1 = state_25073;var statearr_25090_25132 = state_25073__$1;(statearr_25090_25132[(2)] = inst_25007);
(statearr_25090_25132[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25074 === (12)))
{var inst_25028 = (state_25073[(15)]);var inst_25047 = (state_25073[(14)]);var inst_25033 = (state_25073[(16)]);var inst_25047__$1 = inst_25028.call(null,inst_25033);var state_25073__$1 = (function (){var statearr_25091 = state_25073;(statearr_25091[(14)] = inst_25047__$1);
return statearr_25091;
})();if(cljs.core.truth_(inst_25047__$1))
{var statearr_25092_25133 = state_25073__$1;(statearr_25092_25133[(1)] = (17));
} else
{var statearr_25093_25134 = state_25073__$1;(statearr_25093_25134[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25074 === (2)))
{var inst_25007 = (state_25073[(9)]);var inst_25010 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25007);var state_25073__$1 = state_25073;var statearr_25094_25135 = state_25073__$1;(statearr_25094_25135[(2)] = inst_25010);
(statearr_25094_25135[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25074 === (23)))
{var inst_25058 = (state_25073[(2)]);var state_25073__$1 = state_25073;if(cljs.core.truth_(inst_25058))
{var statearr_25095_25136 = state_25073__$1;(statearr_25095_25136[(1)] = (24));
} else
{var statearr_25096_25137 = state_25073__$1;(statearr_25096_25137[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25074 === (19)))
{var inst_25055 = (state_25073[(2)]);var state_25073__$1 = state_25073;if(cljs.core.truth_(inst_25055))
{var statearr_25097_25138 = state_25073__$1;(statearr_25097_25138[(1)] = (20));
} else
{var statearr_25098_25139 = state_25073__$1;(statearr_25098_25139[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25074 === (11)))
{var inst_25032 = (state_25073[(8)]);var inst_25038 = (inst_25032 == null);var state_25073__$1 = state_25073;if(cljs.core.truth_(inst_25038))
{var statearr_25099_25140 = state_25073__$1;(statearr_25099_25140[(1)] = (14));
} else
{var statearr_25100_25141 = state_25073__$1;(statearr_25100_25141[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25074 === (9)))
{var inst_25025 = (state_25073[(10)]);var inst_25025__$1 = (state_25073[(2)]);var inst_25026 = cljs.core.get.call(null,inst_25025__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25027 = cljs.core.get.call(null,inst_25025__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25028 = cljs.core.get.call(null,inst_25025__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_25073__$1 = (function (){var statearr_25101 = state_25073;(statearr_25101[(15)] = inst_25028);
(statearr_25101[(10)] = inst_25025__$1);
(statearr_25101[(17)] = inst_25027);
return statearr_25101;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_25073__$1,(10),inst_25026);
} else
{if((state_val_25074 === (5)))
{var inst_25017 = (state_25073[(7)]);var inst_25020 = cljs.core.seq_QMARK_.call(null,inst_25017);var state_25073__$1 = state_25073;if(inst_25020)
{var statearr_25102_25142 = state_25073__$1;(statearr_25102_25142[(1)] = (7));
} else
{var statearr_25103_25143 = state_25073__$1;(statearr_25103_25143[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25074 === (14)))
{var inst_25033 = (state_25073[(16)]);var inst_25040 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25033);var state_25073__$1 = state_25073;var statearr_25104_25144 = state_25073__$1;(statearr_25104_25144[(2)] = inst_25040);
(statearr_25104_25144[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25074 === (26)))
{var inst_25063 = (state_25073[(2)]);var state_25073__$1 = state_25073;var statearr_25105_25145 = state_25073__$1;(statearr_25105_25145[(2)] = inst_25063);
(statearr_25105_25145[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25074 === (16)))
{var inst_25043 = (state_25073[(2)]);var inst_25044 = calc_state.call(null);var inst_25017 = inst_25044;var state_25073__$1 = (function (){var statearr_25106 = state_25073;(statearr_25106[(7)] = inst_25017);
(statearr_25106[(18)] = inst_25043);
return statearr_25106;
})();var statearr_25107_25146 = state_25073__$1;(statearr_25107_25146[(2)] = null);
(statearr_25107_25146[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25074 === (10)))
{var inst_25033 = (state_25073[(16)]);var inst_25032 = (state_25073[(8)]);var inst_25031 = (state_25073[(2)]);var inst_25032__$1 = cljs.core.nth.call(null,inst_25031,(0),null);var inst_25033__$1 = cljs.core.nth.call(null,inst_25031,(1),null);var inst_25034 = (inst_25032__$1 == null);var inst_25035 = cljs.core._EQ_.call(null,inst_25033__$1,change);var inst_25036 = (inst_25034) || (inst_25035);var state_25073__$1 = (function (){var statearr_25108 = state_25073;(statearr_25108[(16)] = inst_25033__$1);
(statearr_25108[(8)] = inst_25032__$1);
return statearr_25108;
})();if(cljs.core.truth_(inst_25036))
{var statearr_25109_25147 = state_25073__$1;(statearr_25109_25147[(1)] = (11));
} else
{var statearr_25110_25148 = state_25073__$1;(statearr_25110_25148[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25074 === (18)))
{var inst_25028 = (state_25073[(15)]);var inst_25027 = (state_25073[(17)]);var inst_25033 = (state_25073[(16)]);var inst_25050 = cljs.core.empty_QMARK_.call(null,inst_25028);var inst_25051 = inst_25027.call(null,inst_25033);var inst_25052 = cljs.core.not.call(null,inst_25051);var inst_25053 = (inst_25050) && (inst_25052);var state_25073__$1 = state_25073;var statearr_25111_25149 = state_25073__$1;(statearr_25111_25149[(2)] = inst_25053);
(statearr_25111_25149[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25074 === (8)))
{var inst_25017 = (state_25073[(7)]);var state_25073__$1 = state_25073;var statearr_25112_25150 = state_25073__$1;(statearr_25112_25150[(2)] = inst_25017);
(statearr_25112_25150[(1)] = (9));
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
});})(c__9125__auto___25120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__9110__auto__,c__9125__auto___25120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25116[(0)] = state_machine__9111__auto__);
(statearr_25116[(1)] = (1));
return statearr_25116;
});
var state_machine__9111__auto____1 = (function (state_25073){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25073);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25117){if((e25117 instanceof Object))
{var ex__9114__auto__ = e25117;var statearr_25118_25151 = state_25073;(statearr_25118_25151[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25073);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25117;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25152 = state_25073;
state_25073 = G__25152;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25073){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__9127__auto__ = (function (){var statearr_25119 = f__9126__auto__.call(null);(statearr_25119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25120);
return statearr_25119;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25154 = {};return obj25154;
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
return (function (p1__25155_SHARP_){if(cljs.core.truth_(p1__25155_SHARP_.call(null,topic)))
{return p1__25155_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__25155_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25278 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25278 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25279){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25279 = meta25279;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25278.cljs$lang$type = true;
cljs.core.async.t25278.cljs$lang$ctorStr = "cljs.core.async/t25278";
cljs.core.async.t25278.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25278");
});})(mults,ensure_mult))
;
cljs.core.async.t25278.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25278.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25278.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25278.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25278.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25278.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25278.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25278.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25280){var self__ = this;
var _25280__$1 = this;return self__.meta25279;
});})(mults,ensure_mult))
;
cljs.core.async.t25278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25280,meta25279__$1){var self__ = this;
var _25280__$1 = this;return (new cljs.core.async.t25278(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25279__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25278 = ((function (mults,ensure_mult){
return (function __GT_t25278(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25279){return (new cljs.core.async.t25278(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25279));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25278(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__9125__auto___25400 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25400,mults,ensure_mult,p){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25400,mults,ensure_mult,p){
return (function (state_25352){var state_val_25353 = (state_25352[(1)]);if((state_val_25353 === (7)))
{var inst_25348 = (state_25352[(2)]);var state_25352__$1 = state_25352;var statearr_25354_25401 = state_25352__$1;(statearr_25354_25401[(2)] = inst_25348);
(statearr_25354_25401[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25353 === (20)))
{var state_25352__$1 = state_25352;var statearr_25355_25402 = state_25352__$1;(statearr_25355_25402[(2)] = null);
(statearr_25355_25402[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25353 === (1)))
{var state_25352__$1 = state_25352;var statearr_25356_25403 = state_25352__$1;(statearr_25356_25403[(2)] = null);
(statearr_25356_25403[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25353 === (24)))
{var inst_25331 = (state_25352[(7)]);var inst_25340 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25331);var state_25352__$1 = state_25352;var statearr_25357_25404 = state_25352__$1;(statearr_25357_25404[(2)] = inst_25340);
(statearr_25357_25404[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25353 === (4)))
{var inst_25283 = (state_25352[(8)]);var inst_25283__$1 = (state_25352[(2)]);var inst_25284 = (inst_25283__$1 == null);var state_25352__$1 = (function (){var statearr_25358 = state_25352;(statearr_25358[(8)] = inst_25283__$1);
return statearr_25358;
})();if(cljs.core.truth_(inst_25284))
{var statearr_25359_25405 = state_25352__$1;(statearr_25359_25405[(1)] = (5));
} else
{var statearr_25360_25406 = state_25352__$1;(statearr_25360_25406[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25353 === (15)))
{var inst_25325 = (state_25352[(2)]);var state_25352__$1 = state_25352;var statearr_25361_25407 = state_25352__$1;(statearr_25361_25407[(2)] = inst_25325);
(statearr_25361_25407[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25353 === (21)))
{var inst_25345 = (state_25352[(2)]);var state_25352__$1 = (function (){var statearr_25362 = state_25352;(statearr_25362[(9)] = inst_25345);
return statearr_25362;
})();var statearr_25363_25408 = state_25352__$1;(statearr_25363_25408[(2)] = null);
(statearr_25363_25408[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25353 === (13)))
{var inst_25307 = (state_25352[(10)]);var inst_25309 = cljs.core.chunked_seq_QMARK_.call(null,inst_25307);var state_25352__$1 = state_25352;if(inst_25309)
{var statearr_25364_25409 = state_25352__$1;(statearr_25364_25409[(1)] = (16));
} else
{var statearr_25365_25410 = state_25352__$1;(statearr_25365_25410[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25353 === (22)))
{var inst_25337 = (state_25352[(2)]);var state_25352__$1 = state_25352;if(cljs.core.truth_(inst_25337))
{var statearr_25366_25411 = state_25352__$1;(statearr_25366_25411[(1)] = (23));
} else
{var statearr_25367_25412 = state_25352__$1;(statearr_25367_25412[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25353 === (6)))
{var inst_25333 = (state_25352[(11)]);var inst_25331 = (state_25352[(7)]);var inst_25283 = (state_25352[(8)]);var inst_25331__$1 = topic_fn.call(null,inst_25283);var inst_25332 = cljs.core.deref.call(null,mults);var inst_25333__$1 = cljs.core.get.call(null,inst_25332,inst_25331__$1);var state_25352__$1 = (function (){var statearr_25368 = state_25352;(statearr_25368[(11)] = inst_25333__$1);
(statearr_25368[(7)] = inst_25331__$1);
return statearr_25368;
})();if(cljs.core.truth_(inst_25333__$1))
{var statearr_25369_25413 = state_25352__$1;(statearr_25369_25413[(1)] = (19));
} else
{var statearr_25370_25414 = state_25352__$1;(statearr_25370_25414[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25353 === (25)))
{var inst_25342 = (state_25352[(2)]);var state_25352__$1 = state_25352;var statearr_25371_25415 = state_25352__$1;(statearr_25371_25415[(2)] = inst_25342);
(statearr_25371_25415[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25353 === (17)))
{var inst_25307 = (state_25352[(10)]);var inst_25316 = cljs.core.first.call(null,inst_25307);var inst_25317 = cljs.core.async.muxch_STAR_.call(null,inst_25316);var inst_25318 = cljs.core.async.close_BANG_.call(null,inst_25317);var inst_25319 = cljs.core.next.call(null,inst_25307);var inst_25293 = inst_25319;var inst_25294 = null;var inst_25295 = (0);var inst_25296 = (0);var state_25352__$1 = (function (){var statearr_25372 = state_25352;(statearr_25372[(12)] = inst_25296);
(statearr_25372[(13)] = inst_25318);
(statearr_25372[(14)] = inst_25294);
(statearr_25372[(15)] = inst_25295);
(statearr_25372[(16)] = inst_25293);
return statearr_25372;
})();var statearr_25373_25416 = state_25352__$1;(statearr_25373_25416[(2)] = null);
(statearr_25373_25416[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25353 === (3)))
{var inst_25350 = (state_25352[(2)]);var state_25352__$1 = state_25352;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25352__$1,inst_25350);
} else
{if((state_val_25353 === (12)))
{var inst_25327 = (state_25352[(2)]);var state_25352__$1 = state_25352;var statearr_25374_25417 = state_25352__$1;(statearr_25374_25417[(2)] = inst_25327);
(statearr_25374_25417[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25353 === (2)))
{var state_25352__$1 = state_25352;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25352__$1,(4),ch);
} else
{if((state_val_25353 === (23)))
{var state_25352__$1 = state_25352;var statearr_25375_25418 = state_25352__$1;(statearr_25375_25418[(2)] = null);
(statearr_25375_25418[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25353 === (19)))
{var inst_25333 = (state_25352[(11)]);var inst_25283 = (state_25352[(8)]);var inst_25335 = cljs.core.async.muxch_STAR_.call(null,inst_25333);var state_25352__$1 = state_25352;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25352__$1,(22),inst_25335,inst_25283);
} else
{if((state_val_25353 === (11)))
{var inst_25307 = (state_25352[(10)]);var inst_25293 = (state_25352[(16)]);var inst_25307__$1 = cljs.core.seq.call(null,inst_25293);var state_25352__$1 = (function (){var statearr_25376 = state_25352;(statearr_25376[(10)] = inst_25307__$1);
return statearr_25376;
})();if(inst_25307__$1)
{var statearr_25377_25419 = state_25352__$1;(statearr_25377_25419[(1)] = (13));
} else
{var statearr_25378_25420 = state_25352__$1;(statearr_25378_25420[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25353 === (9)))
{var inst_25329 = (state_25352[(2)]);var state_25352__$1 = state_25352;var statearr_25379_25421 = state_25352__$1;(statearr_25379_25421[(2)] = inst_25329);
(statearr_25379_25421[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25353 === (5)))
{var inst_25290 = cljs.core.deref.call(null,mults);var inst_25291 = cljs.core.vals.call(null,inst_25290);var inst_25292 = cljs.core.seq.call(null,inst_25291);var inst_25293 = inst_25292;var inst_25294 = null;var inst_25295 = (0);var inst_25296 = (0);var state_25352__$1 = (function (){var statearr_25380 = state_25352;(statearr_25380[(12)] = inst_25296);
(statearr_25380[(14)] = inst_25294);
(statearr_25380[(15)] = inst_25295);
(statearr_25380[(16)] = inst_25293);
return statearr_25380;
})();var statearr_25381_25422 = state_25352__$1;(statearr_25381_25422[(2)] = null);
(statearr_25381_25422[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25353 === (14)))
{var state_25352__$1 = state_25352;var statearr_25385_25423 = state_25352__$1;(statearr_25385_25423[(2)] = null);
(statearr_25385_25423[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25353 === (16)))
{var inst_25307 = (state_25352[(10)]);var inst_25311 = cljs.core.chunk_first.call(null,inst_25307);var inst_25312 = cljs.core.chunk_rest.call(null,inst_25307);var inst_25313 = cljs.core.count.call(null,inst_25311);var inst_25293 = inst_25312;var inst_25294 = inst_25311;var inst_25295 = inst_25313;var inst_25296 = (0);var state_25352__$1 = (function (){var statearr_25386 = state_25352;(statearr_25386[(12)] = inst_25296);
(statearr_25386[(14)] = inst_25294);
(statearr_25386[(15)] = inst_25295);
(statearr_25386[(16)] = inst_25293);
return statearr_25386;
})();var statearr_25387_25424 = state_25352__$1;(statearr_25387_25424[(2)] = null);
(statearr_25387_25424[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25353 === (10)))
{var inst_25296 = (state_25352[(12)]);var inst_25294 = (state_25352[(14)]);var inst_25295 = (state_25352[(15)]);var inst_25293 = (state_25352[(16)]);var inst_25301 = cljs.core._nth.call(null,inst_25294,inst_25296);var inst_25302 = cljs.core.async.muxch_STAR_.call(null,inst_25301);var inst_25303 = cljs.core.async.close_BANG_.call(null,inst_25302);var inst_25304 = (inst_25296 + (1));var tmp25382 = inst_25294;var tmp25383 = inst_25295;var tmp25384 = inst_25293;var inst_25293__$1 = tmp25384;var inst_25294__$1 = tmp25382;var inst_25295__$1 = tmp25383;var inst_25296__$1 = inst_25304;var state_25352__$1 = (function (){var statearr_25388 = state_25352;(statearr_25388[(12)] = inst_25296__$1);
(statearr_25388[(14)] = inst_25294__$1);
(statearr_25388[(15)] = inst_25295__$1);
(statearr_25388[(17)] = inst_25303);
(statearr_25388[(16)] = inst_25293__$1);
return statearr_25388;
})();var statearr_25389_25425 = state_25352__$1;(statearr_25389_25425[(2)] = null);
(statearr_25389_25425[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25353 === (18)))
{var inst_25322 = (state_25352[(2)]);var state_25352__$1 = state_25352;var statearr_25390_25426 = state_25352__$1;(statearr_25390_25426[(2)] = inst_25322);
(statearr_25390_25426[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25353 === (8)))
{var inst_25296 = (state_25352[(12)]);var inst_25295 = (state_25352[(15)]);var inst_25298 = (inst_25296 < inst_25295);var inst_25299 = inst_25298;var state_25352__$1 = state_25352;if(cljs.core.truth_(inst_25299))
{var statearr_25391_25427 = state_25352__$1;(statearr_25391_25427[(1)] = (10));
} else
{var statearr_25392_25428 = state_25352__$1;(statearr_25392_25428[(1)] = (11));
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
});})(c__9125__auto___25400,mults,ensure_mult,p))
;return ((function (switch__9110__auto__,c__9125__auto___25400,mults,ensure_mult,p){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25396[(0)] = state_machine__9111__auto__);
(statearr_25396[(1)] = (1));
return statearr_25396;
});
var state_machine__9111__auto____1 = (function (state_25352){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25352);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25397){if((e25397 instanceof Object))
{var ex__9114__auto__ = e25397;var statearr_25398_25429 = state_25352;(statearr_25398_25429[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25352);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25397;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25430 = state_25352;
state_25352 = G__25430;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25352){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25400,mults,ensure_mult,p))
})();var state__9127__auto__ = (function (){var statearr_25399 = f__9126__auto__.call(null);(statearr_25399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25400);
return statearr_25399;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25400,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__9125__auto___25567 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25567,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25567,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25537){var state_val_25538 = (state_25537[(1)]);if((state_val_25538 === (7)))
{var state_25537__$1 = state_25537;var statearr_25539_25568 = state_25537__$1;(statearr_25539_25568[(2)] = null);
(statearr_25539_25568[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25538 === (1)))
{var state_25537__$1 = state_25537;var statearr_25540_25569 = state_25537__$1;(statearr_25540_25569[(2)] = null);
(statearr_25540_25569[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25538 === (4)))
{var inst_25501 = (state_25537[(7)]);var inst_25503 = (inst_25501 < cnt);var state_25537__$1 = state_25537;if(cljs.core.truth_(inst_25503))
{var statearr_25541_25570 = state_25537__$1;(statearr_25541_25570[(1)] = (6));
} else
{var statearr_25542_25571 = state_25537__$1;(statearr_25542_25571[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25538 === (15)))
{var inst_25533 = (state_25537[(2)]);var state_25537__$1 = state_25537;var statearr_25543_25572 = state_25537__$1;(statearr_25543_25572[(2)] = inst_25533);
(statearr_25543_25572[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25538 === (13)))
{var inst_25526 = cljs.core.async.close_BANG_.call(null,out);var state_25537__$1 = state_25537;var statearr_25544_25573 = state_25537__$1;(statearr_25544_25573[(2)] = inst_25526);
(statearr_25544_25573[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25538 === (6)))
{var state_25537__$1 = state_25537;var statearr_25545_25574 = state_25537__$1;(statearr_25545_25574[(2)] = null);
(statearr_25545_25574[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25538 === (3)))
{var inst_25535 = (state_25537[(2)]);var state_25537__$1 = state_25537;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25537__$1,inst_25535);
} else
{if((state_val_25538 === (12)))
{var inst_25523 = (state_25537[(8)]);var inst_25523__$1 = (state_25537[(2)]);var inst_25524 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25523__$1);var state_25537__$1 = (function (){var statearr_25546 = state_25537;(statearr_25546[(8)] = inst_25523__$1);
return statearr_25546;
})();if(cljs.core.truth_(inst_25524))
{var statearr_25547_25575 = state_25537__$1;(statearr_25547_25575[(1)] = (13));
} else
{var statearr_25548_25576 = state_25537__$1;(statearr_25548_25576[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25538 === (2)))
{var inst_25500 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_25501 = (0);var state_25537__$1 = (function (){var statearr_25549 = state_25537;(statearr_25549[(9)] = inst_25500);
(statearr_25549[(7)] = inst_25501);
return statearr_25549;
})();var statearr_25550_25577 = state_25537__$1;(statearr_25550_25577[(2)] = null);
(statearr_25550_25577[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25538 === (11)))
{var inst_25501 = (state_25537[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25537,(10),Object,null,(9));var inst_25510 = chs__$1.call(null,inst_25501);var inst_25511 = done.call(null,inst_25501);var inst_25512 = cljs.core.async.take_BANG_.call(null,inst_25510,inst_25511);var state_25537__$1 = state_25537;var statearr_25551_25578 = state_25537__$1;(statearr_25551_25578[(2)] = inst_25512);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25537__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25538 === (9)))
{var inst_25501 = (state_25537[(7)]);var inst_25514 = (state_25537[(2)]);var inst_25515 = (inst_25501 + (1));var inst_25501__$1 = inst_25515;var state_25537__$1 = (function (){var statearr_25552 = state_25537;(statearr_25552[(10)] = inst_25514);
(statearr_25552[(7)] = inst_25501__$1);
return statearr_25552;
})();var statearr_25553_25579 = state_25537__$1;(statearr_25553_25579[(2)] = null);
(statearr_25553_25579[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25538 === (5)))
{var inst_25521 = (state_25537[(2)]);var state_25537__$1 = (function (){var statearr_25554 = state_25537;(statearr_25554[(11)] = inst_25521);
return statearr_25554;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25537__$1,(12),dchan);
} else
{if((state_val_25538 === (14)))
{var inst_25523 = (state_25537[(8)]);var inst_25528 = cljs.core.apply.call(null,f,inst_25523);var state_25537__$1 = state_25537;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25537__$1,(16),out,inst_25528);
} else
{if((state_val_25538 === (16)))
{var inst_25530 = (state_25537[(2)]);var state_25537__$1 = (function (){var statearr_25555 = state_25537;(statearr_25555[(12)] = inst_25530);
return statearr_25555;
})();var statearr_25556_25580 = state_25537__$1;(statearr_25556_25580[(2)] = null);
(statearr_25556_25580[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25538 === (10)))
{var inst_25505 = (state_25537[(2)]);var inst_25506 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_25537__$1 = (function (){var statearr_25557 = state_25537;(statearr_25557[(13)] = inst_25505);
return statearr_25557;
})();var statearr_25558_25581 = state_25537__$1;(statearr_25558_25581[(2)] = inst_25506);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25537__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25538 === (8)))
{var inst_25519 = (state_25537[(2)]);var state_25537__$1 = state_25537;var statearr_25559_25582 = state_25537__$1;(statearr_25559_25582[(2)] = inst_25519);
(statearr_25559_25582[(1)] = (5));
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
});})(c__9125__auto___25567,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___25567,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25563[(0)] = state_machine__9111__auto__);
(statearr_25563[(1)] = (1));
return statearr_25563;
});
var state_machine__9111__auto____1 = (function (state_25537){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25537);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25564){if((e25564 instanceof Object))
{var ex__9114__auto__ = e25564;var statearr_25565_25583 = state_25537;(statearr_25565_25583[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25537);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25564;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25584 = state_25537;
state_25537 = G__25584;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25537){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25567,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_25566 = f__9126__auto__.call(null);(statearr_25566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25567);
return statearr_25566;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25567,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25692 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25692,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25692,out){
return (function (state_25668){var state_val_25669 = (state_25668[(1)]);if((state_val_25669 === (7)))
{var inst_25647 = (state_25668[(7)]);var inst_25648 = (state_25668[(8)]);var inst_25647__$1 = (state_25668[(2)]);var inst_25648__$1 = cljs.core.nth.call(null,inst_25647__$1,(0),null);var inst_25649 = cljs.core.nth.call(null,inst_25647__$1,(1),null);var inst_25650 = (inst_25648__$1 == null);var state_25668__$1 = (function (){var statearr_25670 = state_25668;(statearr_25670[(9)] = inst_25649);
(statearr_25670[(7)] = inst_25647__$1);
(statearr_25670[(8)] = inst_25648__$1);
return statearr_25670;
})();if(cljs.core.truth_(inst_25650))
{var statearr_25671_25693 = state_25668__$1;(statearr_25671_25693[(1)] = (8));
} else
{var statearr_25672_25694 = state_25668__$1;(statearr_25672_25694[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25669 === (1)))
{var inst_25639 = cljs.core.vec.call(null,chs);var inst_25640 = inst_25639;var state_25668__$1 = (function (){var statearr_25673 = state_25668;(statearr_25673[(10)] = inst_25640);
return statearr_25673;
})();var statearr_25674_25695 = state_25668__$1;(statearr_25674_25695[(2)] = null);
(statearr_25674_25695[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25669 === (4)))
{var inst_25640 = (state_25668[(10)]);var state_25668__$1 = state_25668;return cljs.core.async.ioc_alts_BANG_.call(null,state_25668__$1,(7),inst_25640);
} else
{if((state_val_25669 === (6)))
{var inst_25664 = (state_25668[(2)]);var state_25668__$1 = state_25668;var statearr_25675_25696 = state_25668__$1;(statearr_25675_25696[(2)] = inst_25664);
(statearr_25675_25696[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25669 === (3)))
{var inst_25666 = (state_25668[(2)]);var state_25668__$1 = state_25668;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25668__$1,inst_25666);
} else
{if((state_val_25669 === (2)))
{var inst_25640 = (state_25668[(10)]);var inst_25642 = cljs.core.count.call(null,inst_25640);var inst_25643 = (inst_25642 > (0));var state_25668__$1 = state_25668;if(cljs.core.truth_(inst_25643))
{var statearr_25677_25697 = state_25668__$1;(statearr_25677_25697[(1)] = (4));
} else
{var statearr_25678_25698 = state_25668__$1;(statearr_25678_25698[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25669 === (11)))
{var inst_25640 = (state_25668[(10)]);var inst_25657 = (state_25668[(2)]);var tmp25676 = inst_25640;var inst_25640__$1 = tmp25676;var state_25668__$1 = (function (){var statearr_25679 = state_25668;(statearr_25679[(10)] = inst_25640__$1);
(statearr_25679[(11)] = inst_25657);
return statearr_25679;
})();var statearr_25680_25699 = state_25668__$1;(statearr_25680_25699[(2)] = null);
(statearr_25680_25699[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25669 === (9)))
{var inst_25648 = (state_25668[(8)]);var state_25668__$1 = state_25668;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25668__$1,(11),out,inst_25648);
} else
{if((state_val_25669 === (5)))
{var inst_25662 = cljs.core.async.close_BANG_.call(null,out);var state_25668__$1 = state_25668;var statearr_25681_25700 = state_25668__$1;(statearr_25681_25700[(2)] = inst_25662);
(statearr_25681_25700[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25669 === (10)))
{var inst_25660 = (state_25668[(2)]);var state_25668__$1 = state_25668;var statearr_25682_25701 = state_25668__$1;(statearr_25682_25701[(2)] = inst_25660);
(statearr_25682_25701[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25669 === (8)))
{var inst_25649 = (state_25668[(9)]);var inst_25647 = (state_25668[(7)]);var inst_25640 = (state_25668[(10)]);var inst_25648 = (state_25668[(8)]);var inst_25652 = (function (){var c = inst_25649;var v = inst_25648;var vec__25645 = inst_25647;var cs = inst_25640;return ((function (c,v,vec__25645,cs,inst_25649,inst_25647,inst_25640,inst_25648,state_val_25669,c__9125__auto___25692,out){
return (function (p1__25585_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25585_SHARP_);
});
;})(c,v,vec__25645,cs,inst_25649,inst_25647,inst_25640,inst_25648,state_val_25669,c__9125__auto___25692,out))
})();var inst_25653 = cljs.core.filterv.call(null,inst_25652,inst_25640);var inst_25640__$1 = inst_25653;var state_25668__$1 = (function (){var statearr_25683 = state_25668;(statearr_25683[(10)] = inst_25640__$1);
return statearr_25683;
})();var statearr_25684_25702 = state_25668__$1;(statearr_25684_25702[(2)] = null);
(statearr_25684_25702[(1)] = (2));
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
});})(c__9125__auto___25692,out))
;return ((function (switch__9110__auto__,c__9125__auto___25692,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25688 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25688[(0)] = state_machine__9111__auto__);
(statearr_25688[(1)] = (1));
return statearr_25688;
});
var state_machine__9111__auto____1 = (function (state_25668){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25668);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25689){if((e25689 instanceof Object))
{var ex__9114__auto__ = e25689;var statearr_25690_25703 = state_25668;(statearr_25690_25703[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25668);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25689;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25704 = state_25668;
state_25668 = G__25704;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25668){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25692,out))
})();var state__9127__auto__ = (function (){var statearr_25691 = f__9126__auto__.call(null);(statearr_25691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25692);
return statearr_25691;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25692,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25797 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25797,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25797,out){
return (function (state_25774){var state_val_25775 = (state_25774[(1)]);if((state_val_25775 === (7)))
{var inst_25756 = (state_25774[(7)]);var inst_25756__$1 = (state_25774[(2)]);var inst_25757 = (inst_25756__$1 == null);var inst_25758 = cljs.core.not.call(null,inst_25757);var state_25774__$1 = (function (){var statearr_25776 = state_25774;(statearr_25776[(7)] = inst_25756__$1);
return statearr_25776;
})();if(inst_25758)
{var statearr_25777_25798 = state_25774__$1;(statearr_25777_25798[(1)] = (8));
} else
{var statearr_25778_25799 = state_25774__$1;(statearr_25778_25799[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25775 === (1)))
{var inst_25751 = (0);var state_25774__$1 = (function (){var statearr_25779 = state_25774;(statearr_25779[(8)] = inst_25751);
return statearr_25779;
})();var statearr_25780_25800 = state_25774__$1;(statearr_25780_25800[(2)] = null);
(statearr_25780_25800[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25775 === (4)))
{var state_25774__$1 = state_25774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25774__$1,(7),ch);
} else
{if((state_val_25775 === (6)))
{var inst_25769 = (state_25774[(2)]);var state_25774__$1 = state_25774;var statearr_25781_25801 = state_25774__$1;(statearr_25781_25801[(2)] = inst_25769);
(statearr_25781_25801[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25775 === (3)))
{var inst_25771 = (state_25774[(2)]);var inst_25772 = cljs.core.async.close_BANG_.call(null,out);var state_25774__$1 = (function (){var statearr_25782 = state_25774;(statearr_25782[(9)] = inst_25771);
return statearr_25782;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25774__$1,inst_25772);
} else
{if((state_val_25775 === (2)))
{var inst_25751 = (state_25774[(8)]);var inst_25753 = (inst_25751 < n);var state_25774__$1 = state_25774;if(cljs.core.truth_(inst_25753))
{var statearr_25783_25802 = state_25774__$1;(statearr_25783_25802[(1)] = (4));
} else
{var statearr_25784_25803 = state_25774__$1;(statearr_25784_25803[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25775 === (11)))
{var inst_25751 = (state_25774[(8)]);var inst_25761 = (state_25774[(2)]);var inst_25762 = (inst_25751 + (1));var inst_25751__$1 = inst_25762;var state_25774__$1 = (function (){var statearr_25785 = state_25774;(statearr_25785[(10)] = inst_25761);
(statearr_25785[(8)] = inst_25751__$1);
return statearr_25785;
})();var statearr_25786_25804 = state_25774__$1;(statearr_25786_25804[(2)] = null);
(statearr_25786_25804[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25775 === (9)))
{var state_25774__$1 = state_25774;var statearr_25787_25805 = state_25774__$1;(statearr_25787_25805[(2)] = null);
(statearr_25787_25805[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25775 === (5)))
{var state_25774__$1 = state_25774;var statearr_25788_25806 = state_25774__$1;(statearr_25788_25806[(2)] = null);
(statearr_25788_25806[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25775 === (10)))
{var inst_25766 = (state_25774[(2)]);var state_25774__$1 = state_25774;var statearr_25789_25807 = state_25774__$1;(statearr_25789_25807[(2)] = inst_25766);
(statearr_25789_25807[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25775 === (8)))
{var inst_25756 = (state_25774[(7)]);var state_25774__$1 = state_25774;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25774__$1,(11),out,inst_25756);
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
});})(c__9125__auto___25797,out))
;return ((function (switch__9110__auto__,c__9125__auto___25797,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25793 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25793[(0)] = state_machine__9111__auto__);
(statearr_25793[(1)] = (1));
return statearr_25793;
});
var state_machine__9111__auto____1 = (function (state_25774){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25774);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25794){if((e25794 instanceof Object))
{var ex__9114__auto__ = e25794;var statearr_25795_25808 = state_25774;(statearr_25795_25808[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25774);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25794;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25809 = state_25774;
state_25774 = G__25809;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25774){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25797,out))
})();var state__9127__auto__ = (function (){var statearr_25796 = f__9126__auto__.call(null);(statearr_25796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25797);
return statearr_25796;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25797,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25817 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25817 = (function (ch,f,map_LT_,meta25818){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25818 = meta25818;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25817.cljs$lang$type = true;
cljs.core.async.t25817.cljs$lang$ctorStr = "cljs.core.async/t25817";
cljs.core.async.t25817.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25817");
});
cljs.core.async.t25817.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25817.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t25817.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25817.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25820 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25820 = (function (fn1,_,meta25818,ch,f,map_LT_,meta25821){
this.fn1 = fn1;
this._ = _;
this.meta25818 = meta25818;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25821 = meta25821;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25820.cljs$lang$type = true;
cljs.core.async.t25820.cljs$lang$ctorStr = "cljs.core.async/t25820";
cljs.core.async.t25820.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25820");
});})(___$1))
;
cljs.core.async.t25820.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25820.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25820.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25810_SHARP_){return f1.call(null,(((p1__25810_SHARP_ == null))?null:self__.f.call(null,p1__25810_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25820.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25822){var self__ = this;
var _25822__$1 = this;return self__.meta25821;
});})(___$1))
;
cljs.core.async.t25820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25822,meta25821__$1){var self__ = this;
var _25822__$1 = this;return (new cljs.core.async.t25820(self__.fn1,self__._,self__.meta25818,self__.ch,self__.f,self__.map_LT_,meta25821__$1));
});})(___$1))
;
cljs.core.async.__GT_t25820 = ((function (___$1){
return (function __GT_t25820(fn1__$1,___$2,meta25818__$1,ch__$2,f__$2,map_LT___$2,meta25821){return (new cljs.core.async.t25820(fn1__$1,___$2,meta25818__$1,ch__$2,f__$2,map_LT___$2,meta25821));
});})(___$1))
;
}
return (new cljs.core.async.t25820(fn1,___$1,self__.meta25818,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t25817.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25817.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25817.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25819){var self__ = this;
var _25819__$1 = this;return self__.meta25818;
});
cljs.core.async.t25817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25819,meta25818__$1){var self__ = this;
var _25819__$1 = this;return (new cljs.core.async.t25817(self__.ch,self__.f,self__.map_LT_,meta25818__$1));
});
cljs.core.async.__GT_t25817 = (function __GT_t25817(ch__$1,f__$1,map_LT___$1,meta25818){return (new cljs.core.async.t25817(ch__$1,f__$1,map_LT___$1,meta25818));
});
}
return (new cljs.core.async.t25817(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25826 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25826 = (function (ch,f,map_GT_,meta25827){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25827 = meta25827;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25826.cljs$lang$type = true;
cljs.core.async.t25826.cljs$lang$ctorStr = "cljs.core.async/t25826";
cljs.core.async.t25826.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25826");
});
cljs.core.async.t25826.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25826.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t25826.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25826.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25826.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25826.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25828){var self__ = this;
var _25828__$1 = this;return self__.meta25827;
});
cljs.core.async.t25826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25828,meta25827__$1){var self__ = this;
var _25828__$1 = this;return (new cljs.core.async.t25826(self__.ch,self__.f,self__.map_GT_,meta25827__$1));
});
cljs.core.async.__GT_t25826 = (function __GT_t25826(ch__$1,f__$1,map_GT___$1,meta25827){return (new cljs.core.async.t25826(ch__$1,f__$1,map_GT___$1,meta25827));
});
}
return (new cljs.core.async.t25826(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25832 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25832 = (function (ch,p,filter_GT_,meta25833){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25833 = meta25833;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25832.cljs$lang$type = true;
cljs.core.async.t25832.cljs$lang$ctorStr = "cljs.core.async/t25832";
cljs.core.async.t25832.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25832");
});
cljs.core.async.t25832.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25832.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t25832.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25832.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25832.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25832.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25832.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25834){var self__ = this;
var _25834__$1 = this;return self__.meta25833;
});
cljs.core.async.t25832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25834,meta25833__$1){var self__ = this;
var _25834__$1 = this;return (new cljs.core.async.t25832(self__.ch,self__.p,self__.filter_GT_,meta25833__$1));
});
cljs.core.async.__GT_t25832 = (function __GT_t25832(ch__$1,p__$1,filter_GT___$1,meta25833){return (new cljs.core.async.t25832(ch__$1,p__$1,filter_GT___$1,meta25833));
});
}
return (new cljs.core.async.t25832(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25917 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25917,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25917,out){
return (function (state_25896){var state_val_25897 = (state_25896[(1)]);if((state_val_25897 === (7)))
{var inst_25892 = (state_25896[(2)]);var state_25896__$1 = state_25896;var statearr_25898_25918 = state_25896__$1;(statearr_25898_25918[(2)] = inst_25892);
(statearr_25898_25918[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25897 === (1)))
{var state_25896__$1 = state_25896;var statearr_25899_25919 = state_25896__$1;(statearr_25899_25919[(2)] = null);
(statearr_25899_25919[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25897 === (4)))
{var inst_25878 = (state_25896[(7)]);var inst_25878__$1 = (state_25896[(2)]);var inst_25879 = (inst_25878__$1 == null);var state_25896__$1 = (function (){var statearr_25900 = state_25896;(statearr_25900[(7)] = inst_25878__$1);
return statearr_25900;
})();if(cljs.core.truth_(inst_25879))
{var statearr_25901_25920 = state_25896__$1;(statearr_25901_25920[(1)] = (5));
} else
{var statearr_25902_25921 = state_25896__$1;(statearr_25902_25921[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25897 === (6)))
{var inst_25878 = (state_25896[(7)]);var inst_25883 = p.call(null,inst_25878);var state_25896__$1 = state_25896;if(cljs.core.truth_(inst_25883))
{var statearr_25903_25922 = state_25896__$1;(statearr_25903_25922[(1)] = (8));
} else
{var statearr_25904_25923 = state_25896__$1;(statearr_25904_25923[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25897 === (3)))
{var inst_25894 = (state_25896[(2)]);var state_25896__$1 = state_25896;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25896__$1,inst_25894);
} else
{if((state_val_25897 === (2)))
{var state_25896__$1 = state_25896;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25896__$1,(4),ch);
} else
{if((state_val_25897 === (11)))
{var inst_25886 = (state_25896[(2)]);var state_25896__$1 = state_25896;var statearr_25905_25924 = state_25896__$1;(statearr_25905_25924[(2)] = inst_25886);
(statearr_25905_25924[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25897 === (9)))
{var state_25896__$1 = state_25896;var statearr_25906_25925 = state_25896__$1;(statearr_25906_25925[(2)] = null);
(statearr_25906_25925[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25897 === (5)))
{var inst_25881 = cljs.core.async.close_BANG_.call(null,out);var state_25896__$1 = state_25896;var statearr_25907_25926 = state_25896__$1;(statearr_25907_25926[(2)] = inst_25881);
(statearr_25907_25926[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25897 === (10)))
{var inst_25889 = (state_25896[(2)]);var state_25896__$1 = (function (){var statearr_25908 = state_25896;(statearr_25908[(8)] = inst_25889);
return statearr_25908;
})();var statearr_25909_25927 = state_25896__$1;(statearr_25909_25927[(2)] = null);
(statearr_25909_25927[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25897 === (8)))
{var inst_25878 = (state_25896[(7)]);var state_25896__$1 = state_25896;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25896__$1,(11),out,inst_25878);
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
});})(c__9125__auto___25917,out))
;return ((function (switch__9110__auto__,c__9125__auto___25917,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25913 = [null,null,null,null,null,null,null,null,null];(statearr_25913[(0)] = state_machine__9111__auto__);
(statearr_25913[(1)] = (1));
return statearr_25913;
});
var state_machine__9111__auto____1 = (function (state_25896){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25896);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25914){if((e25914 instanceof Object))
{var ex__9114__auto__ = e25914;var statearr_25915_25928 = state_25896;(statearr_25915_25928[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25896);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25914;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25929 = state_25896;
state_25896 = G__25929;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25896){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25917,out))
})();var state__9127__auto__ = (function (){var statearr_25916 = f__9126__auto__.call(null);(statearr_25916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25917);
return statearr_25916;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25917,out))
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
return (function (state_26095){var state_val_26096 = (state_26095[(1)]);if((state_val_26096 === (7)))
{var inst_26091 = (state_26095[(2)]);var state_26095__$1 = state_26095;var statearr_26097_26138 = state_26095__$1;(statearr_26097_26138[(2)] = inst_26091);
(statearr_26097_26138[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26096 === (20)))
{var inst_26061 = (state_26095[(7)]);var inst_26072 = (state_26095[(2)]);var inst_26073 = cljs.core.next.call(null,inst_26061);var inst_26047 = inst_26073;var inst_26048 = null;var inst_26049 = (0);var inst_26050 = (0);var state_26095__$1 = (function (){var statearr_26098 = state_26095;(statearr_26098[(8)] = inst_26049);
(statearr_26098[(9)] = inst_26048);
(statearr_26098[(10)] = inst_26050);
(statearr_26098[(11)] = inst_26047);
(statearr_26098[(12)] = inst_26072);
return statearr_26098;
})();var statearr_26099_26139 = state_26095__$1;(statearr_26099_26139[(2)] = null);
(statearr_26099_26139[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26096 === (1)))
{var state_26095__$1 = state_26095;var statearr_26100_26140 = state_26095__$1;(statearr_26100_26140[(2)] = null);
(statearr_26100_26140[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26096 === (4)))
{var inst_26036 = (state_26095[(13)]);var inst_26036__$1 = (state_26095[(2)]);var inst_26037 = (inst_26036__$1 == null);var state_26095__$1 = (function (){var statearr_26101 = state_26095;(statearr_26101[(13)] = inst_26036__$1);
return statearr_26101;
})();if(cljs.core.truth_(inst_26037))
{var statearr_26102_26141 = state_26095__$1;(statearr_26102_26141[(1)] = (5));
} else
{var statearr_26103_26142 = state_26095__$1;(statearr_26103_26142[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26096 === (15)))
{var state_26095__$1 = state_26095;var statearr_26107_26143 = state_26095__$1;(statearr_26107_26143[(2)] = null);
(statearr_26107_26143[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26096 === (21)))
{var state_26095__$1 = state_26095;var statearr_26108_26144 = state_26095__$1;(statearr_26108_26144[(2)] = null);
(statearr_26108_26144[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26096 === (13)))
{var inst_26049 = (state_26095[(8)]);var inst_26048 = (state_26095[(9)]);var inst_26050 = (state_26095[(10)]);var inst_26047 = (state_26095[(11)]);var inst_26057 = (state_26095[(2)]);var inst_26058 = (inst_26050 + (1));var tmp26104 = inst_26049;var tmp26105 = inst_26048;var tmp26106 = inst_26047;var inst_26047__$1 = tmp26106;var inst_26048__$1 = tmp26105;var inst_26049__$1 = tmp26104;var inst_26050__$1 = inst_26058;var state_26095__$1 = (function (){var statearr_26109 = state_26095;(statearr_26109[(8)] = inst_26049__$1);
(statearr_26109[(9)] = inst_26048__$1);
(statearr_26109[(10)] = inst_26050__$1);
(statearr_26109[(14)] = inst_26057);
(statearr_26109[(11)] = inst_26047__$1);
return statearr_26109;
})();var statearr_26110_26145 = state_26095__$1;(statearr_26110_26145[(2)] = null);
(statearr_26110_26145[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26096 === (22)))
{var state_26095__$1 = state_26095;var statearr_26111_26146 = state_26095__$1;(statearr_26111_26146[(2)] = null);
(statearr_26111_26146[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26096 === (6)))
{var inst_26036 = (state_26095[(13)]);var inst_26045 = f.call(null,inst_26036);var inst_26046 = cljs.core.seq.call(null,inst_26045);var inst_26047 = inst_26046;var inst_26048 = null;var inst_26049 = (0);var inst_26050 = (0);var state_26095__$1 = (function (){var statearr_26112 = state_26095;(statearr_26112[(8)] = inst_26049);
(statearr_26112[(9)] = inst_26048);
(statearr_26112[(10)] = inst_26050);
(statearr_26112[(11)] = inst_26047);
return statearr_26112;
})();var statearr_26113_26147 = state_26095__$1;(statearr_26113_26147[(2)] = null);
(statearr_26113_26147[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26096 === (17)))
{var inst_26061 = (state_26095[(7)]);var inst_26065 = cljs.core.chunk_first.call(null,inst_26061);var inst_26066 = cljs.core.chunk_rest.call(null,inst_26061);var inst_26067 = cljs.core.count.call(null,inst_26065);var inst_26047 = inst_26066;var inst_26048 = inst_26065;var inst_26049 = inst_26067;var inst_26050 = (0);var state_26095__$1 = (function (){var statearr_26114 = state_26095;(statearr_26114[(8)] = inst_26049);
(statearr_26114[(9)] = inst_26048);
(statearr_26114[(10)] = inst_26050);
(statearr_26114[(11)] = inst_26047);
return statearr_26114;
})();var statearr_26115_26148 = state_26095__$1;(statearr_26115_26148[(2)] = null);
(statearr_26115_26148[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26096 === (3)))
{var inst_26093 = (state_26095[(2)]);var state_26095__$1 = state_26095;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26095__$1,inst_26093);
} else
{if((state_val_26096 === (12)))
{var inst_26081 = (state_26095[(2)]);var state_26095__$1 = state_26095;var statearr_26116_26149 = state_26095__$1;(statearr_26116_26149[(2)] = inst_26081);
(statearr_26116_26149[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26096 === (2)))
{var state_26095__$1 = state_26095;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26095__$1,(4),in$);
} else
{if((state_val_26096 === (23)))
{var inst_26089 = (state_26095[(2)]);var state_26095__$1 = state_26095;var statearr_26117_26150 = state_26095__$1;(statearr_26117_26150[(2)] = inst_26089);
(statearr_26117_26150[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26096 === (19)))
{var inst_26076 = (state_26095[(2)]);var state_26095__$1 = state_26095;var statearr_26118_26151 = state_26095__$1;(statearr_26118_26151[(2)] = inst_26076);
(statearr_26118_26151[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26096 === (11)))
{var inst_26061 = (state_26095[(7)]);var inst_26047 = (state_26095[(11)]);var inst_26061__$1 = cljs.core.seq.call(null,inst_26047);var state_26095__$1 = (function (){var statearr_26119 = state_26095;(statearr_26119[(7)] = inst_26061__$1);
return statearr_26119;
})();if(inst_26061__$1)
{var statearr_26120_26152 = state_26095__$1;(statearr_26120_26152[(1)] = (14));
} else
{var statearr_26121_26153 = state_26095__$1;(statearr_26121_26153[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26096 === (9)))
{var inst_26083 = (state_26095[(2)]);var inst_26084 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_26095__$1 = (function (){var statearr_26122 = state_26095;(statearr_26122[(15)] = inst_26083);
return statearr_26122;
})();if(cljs.core.truth_(inst_26084))
{var statearr_26123_26154 = state_26095__$1;(statearr_26123_26154[(1)] = (21));
} else
{var statearr_26124_26155 = state_26095__$1;(statearr_26124_26155[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26096 === (5)))
{var inst_26039 = cljs.core.async.close_BANG_.call(null,out);var state_26095__$1 = state_26095;var statearr_26125_26156 = state_26095__$1;(statearr_26125_26156[(2)] = inst_26039);
(statearr_26125_26156[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26096 === (14)))
{var inst_26061 = (state_26095[(7)]);var inst_26063 = cljs.core.chunked_seq_QMARK_.call(null,inst_26061);var state_26095__$1 = state_26095;if(inst_26063)
{var statearr_26126_26157 = state_26095__$1;(statearr_26126_26157[(1)] = (17));
} else
{var statearr_26127_26158 = state_26095__$1;(statearr_26127_26158[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26096 === (16)))
{var inst_26079 = (state_26095[(2)]);var state_26095__$1 = state_26095;var statearr_26128_26159 = state_26095__$1;(statearr_26128_26159[(2)] = inst_26079);
(statearr_26128_26159[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26096 === (10)))
{var inst_26048 = (state_26095[(9)]);var inst_26050 = (state_26095[(10)]);var inst_26055 = cljs.core._nth.call(null,inst_26048,inst_26050);var state_26095__$1 = state_26095;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26095__$1,(13),out,inst_26055);
} else
{if((state_val_26096 === (18)))
{var inst_26061 = (state_26095[(7)]);var inst_26070 = cljs.core.first.call(null,inst_26061);var state_26095__$1 = state_26095;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26095__$1,(20),out,inst_26070);
} else
{if((state_val_26096 === (8)))
{var inst_26049 = (state_26095[(8)]);var inst_26050 = (state_26095[(10)]);var inst_26052 = (inst_26050 < inst_26049);var inst_26053 = inst_26052;var state_26095__$1 = state_26095;if(cljs.core.truth_(inst_26053))
{var statearr_26129_26160 = state_26095__$1;(statearr_26129_26160[(1)] = (10));
} else
{var statearr_26130_26161 = state_26095__$1;(statearr_26130_26161[(1)] = (11));
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
var state_machine__9111__auto____0 = (function (){var statearr_26134 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26134[(0)] = state_machine__9111__auto__);
(statearr_26134[(1)] = (1));
return statearr_26134;
});
var state_machine__9111__auto____1 = (function (state_26095){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26095);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26135){if((e26135 instanceof Object))
{var ex__9114__auto__ = e26135;var statearr_26136_26162 = state_26095;(statearr_26136_26162[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26095);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26135;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26163 = state_26095;
state_26095 = G__26163;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26095){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_26137 = f__9126__auto__.call(null);(statearr_26137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_26137;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26260 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26260,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26260,out){
return (function (state_26235){var state_val_26236 = (state_26235[(1)]);if((state_val_26236 === (7)))
{var inst_26230 = (state_26235[(2)]);var state_26235__$1 = state_26235;var statearr_26237_26261 = state_26235__$1;(statearr_26237_26261[(2)] = inst_26230);
(statearr_26237_26261[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26236 === (1)))
{var inst_26212 = null;var state_26235__$1 = (function (){var statearr_26238 = state_26235;(statearr_26238[(7)] = inst_26212);
return statearr_26238;
})();var statearr_26239_26262 = state_26235__$1;(statearr_26239_26262[(2)] = null);
(statearr_26239_26262[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26236 === (4)))
{var inst_26215 = (state_26235[(8)]);var inst_26215__$1 = (state_26235[(2)]);var inst_26216 = (inst_26215__$1 == null);var inst_26217 = cljs.core.not.call(null,inst_26216);var state_26235__$1 = (function (){var statearr_26240 = state_26235;(statearr_26240[(8)] = inst_26215__$1);
return statearr_26240;
})();if(inst_26217)
{var statearr_26241_26263 = state_26235__$1;(statearr_26241_26263[(1)] = (5));
} else
{var statearr_26242_26264 = state_26235__$1;(statearr_26242_26264[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26236 === (6)))
{var state_26235__$1 = state_26235;var statearr_26243_26265 = state_26235__$1;(statearr_26243_26265[(2)] = null);
(statearr_26243_26265[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26236 === (3)))
{var inst_26232 = (state_26235[(2)]);var inst_26233 = cljs.core.async.close_BANG_.call(null,out);var state_26235__$1 = (function (){var statearr_26244 = state_26235;(statearr_26244[(9)] = inst_26232);
return statearr_26244;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26235__$1,inst_26233);
} else
{if((state_val_26236 === (2)))
{var state_26235__$1 = state_26235;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26235__$1,(4),ch);
} else
{if((state_val_26236 === (11)))
{var inst_26215 = (state_26235[(8)]);var inst_26224 = (state_26235[(2)]);var inst_26212 = inst_26215;var state_26235__$1 = (function (){var statearr_26245 = state_26235;(statearr_26245[(7)] = inst_26212);
(statearr_26245[(10)] = inst_26224);
return statearr_26245;
})();var statearr_26246_26266 = state_26235__$1;(statearr_26246_26266[(2)] = null);
(statearr_26246_26266[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26236 === (9)))
{var inst_26215 = (state_26235[(8)]);var state_26235__$1 = state_26235;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26235__$1,(11),out,inst_26215);
} else
{if((state_val_26236 === (5)))
{var inst_26215 = (state_26235[(8)]);var inst_26212 = (state_26235[(7)]);var inst_26219 = cljs.core._EQ_.call(null,inst_26215,inst_26212);var state_26235__$1 = state_26235;if(inst_26219)
{var statearr_26248_26267 = state_26235__$1;(statearr_26248_26267[(1)] = (8));
} else
{var statearr_26249_26268 = state_26235__$1;(statearr_26249_26268[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26236 === (10)))
{var inst_26227 = (state_26235[(2)]);var state_26235__$1 = state_26235;var statearr_26250_26269 = state_26235__$1;(statearr_26250_26269[(2)] = inst_26227);
(statearr_26250_26269[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26236 === (8)))
{var inst_26212 = (state_26235[(7)]);var tmp26247 = inst_26212;var inst_26212__$1 = tmp26247;var state_26235__$1 = (function (){var statearr_26251 = state_26235;(statearr_26251[(7)] = inst_26212__$1);
return statearr_26251;
})();var statearr_26252_26270 = state_26235__$1;(statearr_26252_26270[(2)] = null);
(statearr_26252_26270[(1)] = (2));
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
});})(c__9125__auto___26260,out))
;return ((function (switch__9110__auto__,c__9125__auto___26260,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26256 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26256[(0)] = state_machine__9111__auto__);
(statearr_26256[(1)] = (1));
return statearr_26256;
});
var state_machine__9111__auto____1 = (function (state_26235){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26235);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26257){if((e26257 instanceof Object))
{var ex__9114__auto__ = e26257;var statearr_26258_26271 = state_26235;(statearr_26258_26271[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26235);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26257;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26272 = state_26235;
state_26235 = G__26272;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26235){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26260,out))
})();var state__9127__auto__ = (function (){var statearr_26259 = f__9126__auto__.call(null);(statearr_26259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26260);
return statearr_26259;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26260,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26407 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26407,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26407,out){
return (function (state_26377){var state_val_26378 = (state_26377[(1)]);if((state_val_26378 === (7)))
{var inst_26373 = (state_26377[(2)]);var state_26377__$1 = state_26377;var statearr_26379_26408 = state_26377__$1;(statearr_26379_26408[(2)] = inst_26373);
(statearr_26379_26408[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26378 === (1)))
{var inst_26340 = (new Array(n));var inst_26341 = inst_26340;var inst_26342 = (0);var state_26377__$1 = (function (){var statearr_26380 = state_26377;(statearr_26380[(7)] = inst_26342);
(statearr_26380[(8)] = inst_26341);
return statearr_26380;
})();var statearr_26381_26409 = state_26377__$1;(statearr_26381_26409[(2)] = null);
(statearr_26381_26409[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26378 === (4)))
{var inst_26345 = (state_26377[(9)]);var inst_26345__$1 = (state_26377[(2)]);var inst_26346 = (inst_26345__$1 == null);var inst_26347 = cljs.core.not.call(null,inst_26346);var state_26377__$1 = (function (){var statearr_26382 = state_26377;(statearr_26382[(9)] = inst_26345__$1);
return statearr_26382;
})();if(inst_26347)
{var statearr_26383_26410 = state_26377__$1;(statearr_26383_26410[(1)] = (5));
} else
{var statearr_26384_26411 = state_26377__$1;(statearr_26384_26411[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26378 === (15)))
{var inst_26367 = (state_26377[(2)]);var state_26377__$1 = state_26377;var statearr_26385_26412 = state_26377__$1;(statearr_26385_26412[(2)] = inst_26367);
(statearr_26385_26412[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26378 === (13)))
{var state_26377__$1 = state_26377;var statearr_26386_26413 = state_26377__$1;(statearr_26386_26413[(2)] = null);
(statearr_26386_26413[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26378 === (6)))
{var inst_26342 = (state_26377[(7)]);var inst_26363 = (inst_26342 > (0));var state_26377__$1 = state_26377;if(cljs.core.truth_(inst_26363))
{var statearr_26387_26414 = state_26377__$1;(statearr_26387_26414[(1)] = (12));
} else
{var statearr_26388_26415 = state_26377__$1;(statearr_26388_26415[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26378 === (3)))
{var inst_26375 = (state_26377[(2)]);var state_26377__$1 = state_26377;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26377__$1,inst_26375);
} else
{if((state_val_26378 === (12)))
{var inst_26341 = (state_26377[(8)]);var inst_26365 = cljs.core.vec.call(null,inst_26341);var state_26377__$1 = state_26377;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26377__$1,(15),out,inst_26365);
} else
{if((state_val_26378 === (2)))
{var state_26377__$1 = state_26377;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26377__$1,(4),ch);
} else
{if((state_val_26378 === (11)))
{var inst_26357 = (state_26377[(2)]);var inst_26358 = (new Array(n));var inst_26341 = inst_26358;var inst_26342 = (0);var state_26377__$1 = (function (){var statearr_26389 = state_26377;(statearr_26389[(7)] = inst_26342);
(statearr_26389[(10)] = inst_26357);
(statearr_26389[(8)] = inst_26341);
return statearr_26389;
})();var statearr_26390_26416 = state_26377__$1;(statearr_26390_26416[(2)] = null);
(statearr_26390_26416[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26378 === (9)))
{var inst_26341 = (state_26377[(8)]);var inst_26355 = cljs.core.vec.call(null,inst_26341);var state_26377__$1 = state_26377;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26377__$1,(11),out,inst_26355);
} else
{if((state_val_26378 === (5)))
{var inst_26342 = (state_26377[(7)]);var inst_26350 = (state_26377[(11)]);var inst_26345 = (state_26377[(9)]);var inst_26341 = (state_26377[(8)]);var inst_26349 = (inst_26341[inst_26342] = inst_26345);var inst_26350__$1 = (inst_26342 + (1));var inst_26351 = (inst_26350__$1 < n);var state_26377__$1 = (function (){var statearr_26391 = state_26377;(statearr_26391[(12)] = inst_26349);
(statearr_26391[(11)] = inst_26350__$1);
return statearr_26391;
})();if(cljs.core.truth_(inst_26351))
{var statearr_26392_26417 = state_26377__$1;(statearr_26392_26417[(1)] = (8));
} else
{var statearr_26393_26418 = state_26377__$1;(statearr_26393_26418[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26378 === (14)))
{var inst_26370 = (state_26377[(2)]);var inst_26371 = cljs.core.async.close_BANG_.call(null,out);var state_26377__$1 = (function (){var statearr_26395 = state_26377;(statearr_26395[(13)] = inst_26370);
return statearr_26395;
})();var statearr_26396_26419 = state_26377__$1;(statearr_26396_26419[(2)] = inst_26371);
(statearr_26396_26419[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26378 === (10)))
{var inst_26361 = (state_26377[(2)]);var state_26377__$1 = state_26377;var statearr_26397_26420 = state_26377__$1;(statearr_26397_26420[(2)] = inst_26361);
(statearr_26397_26420[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26378 === (8)))
{var inst_26350 = (state_26377[(11)]);var inst_26341 = (state_26377[(8)]);var tmp26394 = inst_26341;var inst_26341__$1 = tmp26394;var inst_26342 = inst_26350;var state_26377__$1 = (function (){var statearr_26398 = state_26377;(statearr_26398[(7)] = inst_26342);
(statearr_26398[(8)] = inst_26341__$1);
return statearr_26398;
})();var statearr_26399_26421 = state_26377__$1;(statearr_26399_26421[(2)] = null);
(statearr_26399_26421[(1)] = (2));
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
});})(c__9125__auto___26407,out))
;return ((function (switch__9110__auto__,c__9125__auto___26407,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26403[(0)] = state_machine__9111__auto__);
(statearr_26403[(1)] = (1));
return statearr_26403;
});
var state_machine__9111__auto____1 = (function (state_26377){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26377);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26404){if((e26404 instanceof Object))
{var ex__9114__auto__ = e26404;var statearr_26405_26422 = state_26377;(statearr_26405_26422[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26377);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26404;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26423 = state_26377;
state_26377 = G__26423;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26377){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26407,out))
})();var state__9127__auto__ = (function (){var statearr_26406 = f__9126__auto__.call(null);(statearr_26406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26407);
return statearr_26406;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26407,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26566 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26566,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26566,out){
return (function (state_26536){var state_val_26537 = (state_26536[(1)]);if((state_val_26537 === (7)))
{var inst_26532 = (state_26536[(2)]);var state_26536__$1 = state_26536;var statearr_26538_26567 = state_26536__$1;(statearr_26538_26567[(2)] = inst_26532);
(statearr_26538_26567[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26537 === (1)))
{var inst_26495 = [];var inst_26496 = inst_26495;var inst_26497 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_26536__$1 = (function (){var statearr_26539 = state_26536;(statearr_26539[(7)] = inst_26496);
(statearr_26539[(8)] = inst_26497);
return statearr_26539;
})();var statearr_26540_26568 = state_26536__$1;(statearr_26540_26568[(2)] = null);
(statearr_26540_26568[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26537 === (4)))
{var inst_26500 = (state_26536[(9)]);var inst_26500__$1 = (state_26536[(2)]);var inst_26501 = (inst_26500__$1 == null);var inst_26502 = cljs.core.not.call(null,inst_26501);var state_26536__$1 = (function (){var statearr_26541 = state_26536;(statearr_26541[(9)] = inst_26500__$1);
return statearr_26541;
})();if(inst_26502)
{var statearr_26542_26569 = state_26536__$1;(statearr_26542_26569[(1)] = (5));
} else
{var statearr_26543_26570 = state_26536__$1;(statearr_26543_26570[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26537 === (15)))
{var inst_26526 = (state_26536[(2)]);var state_26536__$1 = state_26536;var statearr_26544_26571 = state_26536__$1;(statearr_26544_26571[(2)] = inst_26526);
(statearr_26544_26571[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26537 === (13)))
{var state_26536__$1 = state_26536;var statearr_26545_26572 = state_26536__$1;(statearr_26545_26572[(2)] = null);
(statearr_26545_26572[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26537 === (6)))
{var inst_26496 = (state_26536[(7)]);var inst_26521 = inst_26496.length;var inst_26522 = (inst_26521 > (0));var state_26536__$1 = state_26536;if(cljs.core.truth_(inst_26522))
{var statearr_26546_26573 = state_26536__$1;(statearr_26546_26573[(1)] = (12));
} else
{var statearr_26547_26574 = state_26536__$1;(statearr_26547_26574[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26537 === (3)))
{var inst_26534 = (state_26536[(2)]);var state_26536__$1 = state_26536;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26536__$1,inst_26534);
} else
{if((state_val_26537 === (12)))
{var inst_26496 = (state_26536[(7)]);var inst_26524 = cljs.core.vec.call(null,inst_26496);var state_26536__$1 = state_26536;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26536__$1,(15),out,inst_26524);
} else
{if((state_val_26537 === (2)))
{var state_26536__$1 = state_26536;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26536__$1,(4),ch);
} else
{if((state_val_26537 === (11)))
{var inst_26504 = (state_26536[(10)]);var inst_26500 = (state_26536[(9)]);var inst_26514 = (state_26536[(2)]);var inst_26515 = [];var inst_26516 = inst_26515.push(inst_26500);var inst_26496 = inst_26515;var inst_26497 = inst_26504;var state_26536__$1 = (function (){var statearr_26548 = state_26536;(statearr_26548[(7)] = inst_26496);
(statearr_26548[(11)] = inst_26514);
(statearr_26548[(8)] = inst_26497);
(statearr_26548[(12)] = inst_26516);
return statearr_26548;
})();var statearr_26549_26575 = state_26536__$1;(statearr_26549_26575[(2)] = null);
(statearr_26549_26575[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26537 === (9)))
{var inst_26496 = (state_26536[(7)]);var inst_26512 = cljs.core.vec.call(null,inst_26496);var state_26536__$1 = state_26536;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26536__$1,(11),out,inst_26512);
} else
{if((state_val_26537 === (5)))
{var inst_26504 = (state_26536[(10)]);var inst_26497 = (state_26536[(8)]);var inst_26500 = (state_26536[(9)]);var inst_26504__$1 = f.call(null,inst_26500);var inst_26505 = cljs.core._EQ_.call(null,inst_26504__$1,inst_26497);var inst_26506 = cljs.core.keyword_identical_QMARK_.call(null,inst_26497,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_26507 = (inst_26505) || (inst_26506);var state_26536__$1 = (function (){var statearr_26550 = state_26536;(statearr_26550[(10)] = inst_26504__$1);
return statearr_26550;
})();if(cljs.core.truth_(inst_26507))
{var statearr_26551_26576 = state_26536__$1;(statearr_26551_26576[(1)] = (8));
} else
{var statearr_26552_26577 = state_26536__$1;(statearr_26552_26577[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26537 === (14)))
{var inst_26529 = (state_26536[(2)]);var inst_26530 = cljs.core.async.close_BANG_.call(null,out);var state_26536__$1 = (function (){var statearr_26554 = state_26536;(statearr_26554[(13)] = inst_26529);
return statearr_26554;
})();var statearr_26555_26578 = state_26536__$1;(statearr_26555_26578[(2)] = inst_26530);
(statearr_26555_26578[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26537 === (10)))
{var inst_26519 = (state_26536[(2)]);var state_26536__$1 = state_26536;var statearr_26556_26579 = state_26536__$1;(statearr_26556_26579[(2)] = inst_26519);
(statearr_26556_26579[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26537 === (8)))
{var inst_26496 = (state_26536[(7)]);var inst_26504 = (state_26536[(10)]);var inst_26500 = (state_26536[(9)]);var inst_26509 = inst_26496.push(inst_26500);var tmp26553 = inst_26496;var inst_26496__$1 = tmp26553;var inst_26497 = inst_26504;var state_26536__$1 = (function (){var statearr_26557 = state_26536;(statearr_26557[(7)] = inst_26496__$1);
(statearr_26557[(8)] = inst_26497);
(statearr_26557[(14)] = inst_26509);
return statearr_26557;
})();var statearr_26558_26580 = state_26536__$1;(statearr_26558_26580[(2)] = null);
(statearr_26558_26580[(1)] = (2));
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
});})(c__9125__auto___26566,out))
;return ((function (switch__9110__auto__,c__9125__auto___26566,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26562[(0)] = state_machine__9111__auto__);
(statearr_26562[(1)] = (1));
return statearr_26562;
});
var state_machine__9111__auto____1 = (function (state_26536){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26536);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26563){if((e26563 instanceof Object))
{var ex__9114__auto__ = e26563;var statearr_26564_26581 = state_26536;(statearr_26564_26581[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26536);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26563;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26582 = state_26536;
state_26536 = G__26582;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26536){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26566,out))
})();var state__9127__auto__ = (function (){var statearr_26565 = f__9126__auto__.call(null);(statearr_26565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26566);
return statearr_26565;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26566,out))
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
