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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23121 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23121 = (function (f,fn_handler,meta23122){
this.f = f;
this.fn_handler = fn_handler;
this.meta23122 = meta23122;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23121.cljs$lang$type = true;
cljs.core.async.t23121.cljs$lang$ctorStr = "cljs.core.async/t23121";
cljs.core.async.t23121.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23121");
});
cljs.core.async.t23121.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23121.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23121.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23123){var self__ = this;
var _23123__$1 = this;return self__.meta23122;
});
cljs.core.async.t23121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23123,meta23122__$1){var self__ = this;
var _23123__$1 = this;return (new cljs.core.async.t23121(self__.f,self__.fn_handler,meta23122__$1));
});
cljs.core.async.__GT_t23121 = (function __GT_t23121(f__$1,fn_handler__$1,meta23122){return (new cljs.core.async.t23121(f__$1,fn_handler__$1,meta23122));
});
}
return (new cljs.core.async.t23121(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23125 = buff;if(G__23125)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__23125.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23125.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23125);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23125);
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
{var val_23126 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23126);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_23126,ret){
return (function (){return fn1.call(null,val_23126);
});})(val_23126,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___23127 = n;var x_23128 = (0);while(true){
if((x_23128 < n__4508__auto___23127))
{(a[x_23128] = (0));
{
var G__23129 = (x_23128 + (1));
x_23128 = G__23129;
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
var G__23130 = (i + (1));
i = G__23130;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23134 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23134 = (function (flag,alt_flag,meta23135){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23135 = meta23135;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23134.cljs$lang$type = true;
cljs.core.async.t23134.cljs$lang$ctorStr = "cljs.core.async/t23134";
cljs.core.async.t23134.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23134");
});})(flag))
;
cljs.core.async.t23134.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23134.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t23134.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t23134.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23136){var self__ = this;
var _23136__$1 = this;return self__.meta23135;
});})(flag))
;
cljs.core.async.t23134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23136,meta23135__$1){var self__ = this;
var _23136__$1 = this;return (new cljs.core.async.t23134(self__.flag,self__.alt_flag,meta23135__$1));
});})(flag))
;
cljs.core.async.__GT_t23134 = ((function (flag){
return (function __GT_t23134(flag__$1,alt_flag__$1,meta23135){return (new cljs.core.async.t23134(flag__$1,alt_flag__$1,meta23135));
});})(flag))
;
}
return (new cljs.core.async.t23134(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23140 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23140 = (function (cb,flag,alt_handler,meta23141){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23141 = meta23141;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23140.cljs$lang$type = true;
cljs.core.async.t23140.cljs$lang$ctorStr = "cljs.core.async/t23140";
cljs.core.async.t23140.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23140");
});
cljs.core.async.t23140.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23140.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23140.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23142){var self__ = this;
var _23142__$1 = this;return self__.meta23141;
});
cljs.core.async.t23140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23142,meta23141__$1){var self__ = this;
var _23142__$1 = this;return (new cljs.core.async.t23140(self__.cb,self__.flag,self__.alt_handler,meta23141__$1));
});
cljs.core.async.__GT_t23140 = (function __GT_t23140(cb__$1,flag__$1,alt_handler__$1,meta23141){return (new cljs.core.async.t23140(cb__$1,flag__$1,alt_handler__$1,meta23141));
});
}
return (new cljs.core.async.t23140(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23143_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23143_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23144_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23144_SHARP_,port], null));
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
var G__23145 = (i + (1));
i = G__23145;
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
var alts_BANG___delegate = function (ports,p__23146){var map__23148 = p__23146;var map__23148__$1 = ((cljs.core.seq_QMARK_.call(null,map__23148))?cljs.core.apply.call(null,cljs.core.hash_map,map__23148):map__23148);var opts = map__23148__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23146 = null;if (arguments.length > 1) {
  p__23146 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23146);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23149){
var ports = cljs.core.first(arglist__23149);
var p__23146 = cljs.core.rest(arglist__23149);
return alts_BANG___delegate(ports,p__23146);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__9125__auto___23244 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23244){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23244){
return (function (state_23220){var state_val_23221 = (state_23220[(1)]);if((state_val_23221 === (7)))
{var inst_23216 = (state_23220[(2)]);var state_23220__$1 = state_23220;var statearr_23222_23245 = state_23220__$1;(statearr_23222_23245[(2)] = inst_23216);
(statearr_23222_23245[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23221 === (1)))
{var state_23220__$1 = state_23220;var statearr_23223_23246 = state_23220__$1;(statearr_23223_23246[(2)] = null);
(statearr_23223_23246[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23221 === (4)))
{var inst_23199 = (state_23220[(7)]);var inst_23199__$1 = (state_23220[(2)]);var inst_23200 = (inst_23199__$1 == null);var state_23220__$1 = (function (){var statearr_23224 = state_23220;(statearr_23224[(7)] = inst_23199__$1);
return statearr_23224;
})();if(cljs.core.truth_(inst_23200))
{var statearr_23225_23247 = state_23220__$1;(statearr_23225_23247[(1)] = (5));
} else
{var statearr_23226_23248 = state_23220__$1;(statearr_23226_23248[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23221 === (13)))
{var state_23220__$1 = state_23220;var statearr_23227_23249 = state_23220__$1;(statearr_23227_23249[(2)] = null);
(statearr_23227_23249[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23221 === (6)))
{var inst_23199 = (state_23220[(7)]);var state_23220__$1 = state_23220;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23220__$1,(11),to,inst_23199);
} else
{if((state_val_23221 === (3)))
{var inst_23218 = (state_23220[(2)]);var state_23220__$1 = state_23220;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23220__$1,inst_23218);
} else
{if((state_val_23221 === (12)))
{var state_23220__$1 = state_23220;var statearr_23228_23250 = state_23220__$1;(statearr_23228_23250[(2)] = null);
(statearr_23228_23250[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23221 === (2)))
{var state_23220__$1 = state_23220;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23220__$1,(4),from);
} else
{if((state_val_23221 === (11)))
{var inst_23209 = (state_23220[(2)]);var state_23220__$1 = state_23220;if(cljs.core.truth_(inst_23209))
{var statearr_23229_23251 = state_23220__$1;(statearr_23229_23251[(1)] = (12));
} else
{var statearr_23230_23252 = state_23220__$1;(statearr_23230_23252[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23221 === (9)))
{var state_23220__$1 = state_23220;var statearr_23231_23253 = state_23220__$1;(statearr_23231_23253[(2)] = null);
(statearr_23231_23253[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23221 === (5)))
{var state_23220__$1 = state_23220;if(cljs.core.truth_(close_QMARK_))
{var statearr_23232_23254 = state_23220__$1;(statearr_23232_23254[(1)] = (8));
} else
{var statearr_23233_23255 = state_23220__$1;(statearr_23233_23255[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23221 === (14)))
{var inst_23214 = (state_23220[(2)]);var state_23220__$1 = state_23220;var statearr_23234_23256 = state_23220__$1;(statearr_23234_23256[(2)] = inst_23214);
(statearr_23234_23256[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23221 === (10)))
{var inst_23206 = (state_23220[(2)]);var state_23220__$1 = state_23220;var statearr_23235_23257 = state_23220__$1;(statearr_23235_23257[(2)] = inst_23206);
(statearr_23235_23257[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23221 === (8)))
{var inst_23203 = cljs.core.async.close_BANG_.call(null,to);var state_23220__$1 = state_23220;var statearr_23236_23258 = state_23220__$1;(statearr_23236_23258[(2)] = inst_23203);
(statearr_23236_23258[(1)] = (10));
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
});})(c__9125__auto___23244))
;return ((function (switch__9110__auto__,c__9125__auto___23244){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23240 = [null,null,null,null,null,null,null,null];(statearr_23240[(0)] = state_machine__9111__auto__);
(statearr_23240[(1)] = (1));
return statearr_23240;
});
var state_machine__9111__auto____1 = (function (state_23220){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23220);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23241){if((e23241 instanceof Object))
{var ex__9114__auto__ = e23241;var statearr_23242_23259 = state_23220;(statearr_23242_23259[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23220);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23241;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23260 = state_23220;
state_23220 = G__23260;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23220){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23244))
})();var state__9127__auto__ = (function (){var statearr_23243 = f__9126__auto__.call(null);(statearr_23243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23244);
return statearr_23243;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23244))
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
return (function (p__23444){var vec__23445 = p__23444;var v = cljs.core.nth.call(null,vec__23445,(0),null);var p = cljs.core.nth.call(null,vec__23445,(1),null);var job = vec__23445;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__9125__auto___23627 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23627,res,vec__23445,v,p,job,jobs,results){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23627,res,vec__23445,v,p,job,jobs,results){
return (function (state_23450){var state_val_23451 = (state_23450[(1)]);if((state_val_23451 === (2)))
{var inst_23447 = (state_23450[(2)]);var inst_23448 = cljs.core.async.close_BANG_.call(null,res);var state_23450__$1 = (function (){var statearr_23452 = state_23450;(statearr_23452[(7)] = inst_23447);
return statearr_23452;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23450__$1,inst_23448);
} else
{if((state_val_23451 === (1)))
{var state_23450__$1 = state_23450;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23450__$1,(2),res,v);
} else
{return null;
}
}
});})(c__9125__auto___23627,res,vec__23445,v,p,job,jobs,results))
;return ((function (switch__9110__auto__,c__9125__auto___23627,res,vec__23445,v,p,job,jobs,results){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23456 = [null,null,null,null,null,null,null,null];(statearr_23456[(0)] = state_machine__9111__auto__);
(statearr_23456[(1)] = (1));
return statearr_23456;
});
var state_machine__9111__auto____1 = (function (state_23450){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23450);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23457){if((e23457 instanceof Object))
{var ex__9114__auto__ = e23457;var statearr_23458_23628 = state_23450;(statearr_23458_23628[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23450);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23457;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23629 = state_23450;
state_23450 = G__23629;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23450){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23627,res,vec__23445,v,p,job,jobs,results))
})();var state__9127__auto__ = (function (){var statearr_23459 = f__9126__auto__.call(null);(statearr_23459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23627);
return statearr_23459;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23627,res,vec__23445,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__23460){var vec__23461 = p__23460;var v = cljs.core.nth.call(null,vec__23461,(0),null);var p = cljs.core.nth.call(null,vec__23461,(1),null);var job = vec__23461;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___23630 = n;var __23631 = (0);while(true){
if((__23631 < n__4508__auto___23630))
{var G__23462_23632 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__23462_23632) {
case "async":
var c__9125__auto___23634 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23631,c__9125__auto___23634,G__23462_23632,n__4508__auto___23630,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__23631,c__9125__auto___23634,G__23462_23632,n__4508__auto___23630,jobs,results,process,async){
return (function (state_23475){var state_val_23476 = (state_23475[(1)]);if((state_val_23476 === (7)))
{var inst_23471 = (state_23475[(2)]);var state_23475__$1 = state_23475;var statearr_23477_23635 = state_23475__$1;(statearr_23477_23635[(2)] = inst_23471);
(statearr_23477_23635[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23476 === (6)))
{var state_23475__$1 = state_23475;var statearr_23478_23636 = state_23475__$1;(statearr_23478_23636[(2)] = null);
(statearr_23478_23636[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23476 === (5)))
{var state_23475__$1 = state_23475;var statearr_23479_23637 = state_23475__$1;(statearr_23479_23637[(2)] = null);
(statearr_23479_23637[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23476 === (4)))
{var inst_23465 = (state_23475[(2)]);var inst_23466 = async.call(null,inst_23465);var state_23475__$1 = state_23475;if(cljs.core.truth_(inst_23466))
{var statearr_23480_23638 = state_23475__$1;(statearr_23480_23638[(1)] = (5));
} else
{var statearr_23481_23639 = state_23475__$1;(statearr_23481_23639[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23476 === (3)))
{var inst_23473 = (state_23475[(2)]);var state_23475__$1 = state_23475;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23475__$1,inst_23473);
} else
{if((state_val_23476 === (2)))
{var state_23475__$1 = state_23475;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23475__$1,(4),jobs);
} else
{if((state_val_23476 === (1)))
{var state_23475__$1 = state_23475;var statearr_23482_23640 = state_23475__$1;(statearr_23482_23640[(2)] = null);
(statearr_23482_23640[(1)] = (2));
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
});})(__23631,c__9125__auto___23634,G__23462_23632,n__4508__auto___23630,jobs,results,process,async))
;return ((function (__23631,switch__9110__auto__,c__9125__auto___23634,G__23462_23632,n__4508__auto___23630,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23486 = [null,null,null,null,null,null,null];(statearr_23486[(0)] = state_machine__9111__auto__);
(statearr_23486[(1)] = (1));
return statearr_23486;
});
var state_machine__9111__auto____1 = (function (state_23475){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23475);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23487){if((e23487 instanceof Object))
{var ex__9114__auto__ = e23487;var statearr_23488_23641 = state_23475;(statearr_23488_23641[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23475);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23487;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23642 = state_23475;
state_23475 = G__23642;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23475){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__23631,switch__9110__auto__,c__9125__auto___23634,G__23462_23632,n__4508__auto___23630,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23489 = f__9126__auto__.call(null);(statearr_23489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23634);
return statearr_23489;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__23631,c__9125__auto___23634,G__23462_23632,n__4508__auto___23630,jobs,results,process,async))
);

break;
case "compute":
var c__9125__auto___23643 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23631,c__9125__auto___23643,G__23462_23632,n__4508__auto___23630,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__23631,c__9125__auto___23643,G__23462_23632,n__4508__auto___23630,jobs,results,process,async){
return (function (state_23502){var state_val_23503 = (state_23502[(1)]);if((state_val_23503 === (7)))
{var inst_23498 = (state_23502[(2)]);var state_23502__$1 = state_23502;var statearr_23504_23644 = state_23502__$1;(statearr_23504_23644[(2)] = inst_23498);
(statearr_23504_23644[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23503 === (6)))
{var state_23502__$1 = state_23502;var statearr_23505_23645 = state_23502__$1;(statearr_23505_23645[(2)] = null);
(statearr_23505_23645[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23503 === (5)))
{var state_23502__$1 = state_23502;var statearr_23506_23646 = state_23502__$1;(statearr_23506_23646[(2)] = null);
(statearr_23506_23646[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23503 === (4)))
{var inst_23492 = (state_23502[(2)]);var inst_23493 = process.call(null,inst_23492);var state_23502__$1 = state_23502;if(cljs.core.truth_(inst_23493))
{var statearr_23507_23647 = state_23502__$1;(statearr_23507_23647[(1)] = (5));
} else
{var statearr_23508_23648 = state_23502__$1;(statearr_23508_23648[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23503 === (3)))
{var inst_23500 = (state_23502[(2)]);var state_23502__$1 = state_23502;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23502__$1,inst_23500);
} else
{if((state_val_23503 === (2)))
{var state_23502__$1 = state_23502;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23502__$1,(4),jobs);
} else
{if((state_val_23503 === (1)))
{var state_23502__$1 = state_23502;var statearr_23509_23649 = state_23502__$1;(statearr_23509_23649[(2)] = null);
(statearr_23509_23649[(1)] = (2));
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
});})(__23631,c__9125__auto___23643,G__23462_23632,n__4508__auto___23630,jobs,results,process,async))
;return ((function (__23631,switch__9110__auto__,c__9125__auto___23643,G__23462_23632,n__4508__auto___23630,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23513 = [null,null,null,null,null,null,null];(statearr_23513[(0)] = state_machine__9111__auto__);
(statearr_23513[(1)] = (1));
return statearr_23513;
});
var state_machine__9111__auto____1 = (function (state_23502){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23502);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23514){if((e23514 instanceof Object))
{var ex__9114__auto__ = e23514;var statearr_23515_23650 = state_23502;(statearr_23515_23650[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23502);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23514;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23651 = state_23502;
state_23502 = G__23651;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23502){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__23631,switch__9110__auto__,c__9125__auto___23643,G__23462_23632,n__4508__auto___23630,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23516 = f__9126__auto__.call(null);(statearr_23516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23643);
return statearr_23516;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__23631,c__9125__auto___23643,G__23462_23632,n__4508__auto___23630,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__23652 = (__23631 + (1));
__23631 = G__23652;
continue;
}
} else
{}
break;
}
var c__9125__auto___23653 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23653,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23653,jobs,results,process,async){
return (function (state_23538){var state_val_23539 = (state_23538[(1)]);if((state_val_23539 === (9)))
{var inst_23531 = (state_23538[(2)]);var state_23538__$1 = (function (){var statearr_23540 = state_23538;(statearr_23540[(7)] = inst_23531);
return statearr_23540;
})();var statearr_23541_23654 = state_23538__$1;(statearr_23541_23654[(2)] = null);
(statearr_23541_23654[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23539 === (8)))
{var inst_23524 = (state_23538[(8)]);var inst_23529 = (state_23538[(2)]);var state_23538__$1 = (function (){var statearr_23542 = state_23538;(statearr_23542[(9)] = inst_23529);
return statearr_23542;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23538__$1,(9),results,inst_23524);
} else
{if((state_val_23539 === (7)))
{var inst_23534 = (state_23538[(2)]);var state_23538__$1 = state_23538;var statearr_23543_23655 = state_23538__$1;(statearr_23543_23655[(2)] = inst_23534);
(statearr_23543_23655[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23539 === (6)))
{var inst_23519 = (state_23538[(10)]);var inst_23524 = (state_23538[(8)]);var inst_23524__$1 = cljs.core.async.chan.call(null,(1));var inst_23525 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23526 = [inst_23519,inst_23524__$1];var inst_23527 = (new cljs.core.PersistentVector(null,2,(5),inst_23525,inst_23526,null));var state_23538__$1 = (function (){var statearr_23544 = state_23538;(statearr_23544[(8)] = inst_23524__$1);
return statearr_23544;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23538__$1,(8),jobs,inst_23527);
} else
{if((state_val_23539 === (5)))
{var inst_23522 = cljs.core.async.close_BANG_.call(null,jobs);var state_23538__$1 = state_23538;var statearr_23545_23656 = state_23538__$1;(statearr_23545_23656[(2)] = inst_23522);
(statearr_23545_23656[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23539 === (4)))
{var inst_23519 = (state_23538[(10)]);var inst_23519__$1 = (state_23538[(2)]);var inst_23520 = (inst_23519__$1 == null);var state_23538__$1 = (function (){var statearr_23546 = state_23538;(statearr_23546[(10)] = inst_23519__$1);
return statearr_23546;
})();if(cljs.core.truth_(inst_23520))
{var statearr_23547_23657 = state_23538__$1;(statearr_23547_23657[(1)] = (5));
} else
{var statearr_23548_23658 = state_23538__$1;(statearr_23548_23658[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23539 === (3)))
{var inst_23536 = (state_23538[(2)]);var state_23538__$1 = state_23538;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23538__$1,inst_23536);
} else
{if((state_val_23539 === (2)))
{var state_23538__$1 = state_23538;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23538__$1,(4),from);
} else
{if((state_val_23539 === (1)))
{var state_23538__$1 = state_23538;var statearr_23549_23659 = state_23538__$1;(statearr_23549_23659[(2)] = null);
(statearr_23549_23659[(1)] = (2));
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
});})(c__9125__auto___23653,jobs,results,process,async))
;return ((function (switch__9110__auto__,c__9125__auto___23653,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23553 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23553[(0)] = state_machine__9111__auto__);
(statearr_23553[(1)] = (1));
return statearr_23553;
});
var state_machine__9111__auto____1 = (function (state_23538){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23538);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23554){if((e23554 instanceof Object))
{var ex__9114__auto__ = e23554;var statearr_23555_23660 = state_23538;(statearr_23555_23660[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23538);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23554;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23661 = state_23538;
state_23538 = G__23661;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23538){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23653,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23556 = f__9126__auto__.call(null);(statearr_23556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23653);
return statearr_23556;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23653,jobs,results,process,async))
);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,jobs,results,process,async){
return (function (state_23594){var state_val_23595 = (state_23594[(1)]);if((state_val_23595 === (7)))
{var inst_23590 = (state_23594[(2)]);var state_23594__$1 = state_23594;var statearr_23596_23662 = state_23594__$1;(statearr_23596_23662[(2)] = inst_23590);
(statearr_23596_23662[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23595 === (20)))
{var state_23594__$1 = state_23594;var statearr_23597_23663 = state_23594__$1;(statearr_23597_23663[(2)] = null);
(statearr_23597_23663[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23595 === (1)))
{var state_23594__$1 = state_23594;var statearr_23598_23664 = state_23594__$1;(statearr_23598_23664[(2)] = null);
(statearr_23598_23664[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23595 === (4)))
{var inst_23559 = (state_23594[(7)]);var inst_23559__$1 = (state_23594[(2)]);var inst_23560 = (inst_23559__$1 == null);var state_23594__$1 = (function (){var statearr_23599 = state_23594;(statearr_23599[(7)] = inst_23559__$1);
return statearr_23599;
})();if(cljs.core.truth_(inst_23560))
{var statearr_23600_23665 = state_23594__$1;(statearr_23600_23665[(1)] = (5));
} else
{var statearr_23601_23666 = state_23594__$1;(statearr_23601_23666[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23595 === (15)))
{var inst_23572 = (state_23594[(8)]);var state_23594__$1 = state_23594;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23594__$1,(18),to,inst_23572);
} else
{if((state_val_23595 === (21)))
{var inst_23585 = (state_23594[(2)]);var state_23594__$1 = state_23594;var statearr_23602_23667 = state_23594__$1;(statearr_23602_23667[(2)] = inst_23585);
(statearr_23602_23667[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23595 === (13)))
{var inst_23587 = (state_23594[(2)]);var state_23594__$1 = (function (){var statearr_23603 = state_23594;(statearr_23603[(9)] = inst_23587);
return statearr_23603;
})();var statearr_23604_23668 = state_23594__$1;(statearr_23604_23668[(2)] = null);
(statearr_23604_23668[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23595 === (6)))
{var inst_23559 = (state_23594[(7)]);var state_23594__$1 = state_23594;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23594__$1,(11),inst_23559);
} else
{if((state_val_23595 === (17)))
{var inst_23580 = (state_23594[(2)]);var state_23594__$1 = state_23594;if(cljs.core.truth_(inst_23580))
{var statearr_23605_23669 = state_23594__$1;(statearr_23605_23669[(1)] = (19));
} else
{var statearr_23606_23670 = state_23594__$1;(statearr_23606_23670[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23595 === (3)))
{var inst_23592 = (state_23594[(2)]);var state_23594__$1 = state_23594;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23594__$1,inst_23592);
} else
{if((state_val_23595 === (12)))
{var inst_23569 = (state_23594[(10)]);var state_23594__$1 = state_23594;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23594__$1,(14),inst_23569);
} else
{if((state_val_23595 === (2)))
{var state_23594__$1 = state_23594;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23594__$1,(4),results);
} else
{if((state_val_23595 === (19)))
{var state_23594__$1 = state_23594;var statearr_23607_23671 = state_23594__$1;(statearr_23607_23671[(2)] = null);
(statearr_23607_23671[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23595 === (11)))
{var inst_23569 = (state_23594[(2)]);var state_23594__$1 = (function (){var statearr_23608 = state_23594;(statearr_23608[(10)] = inst_23569);
return statearr_23608;
})();var statearr_23609_23672 = state_23594__$1;(statearr_23609_23672[(2)] = null);
(statearr_23609_23672[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23595 === (9)))
{var state_23594__$1 = state_23594;var statearr_23610_23673 = state_23594__$1;(statearr_23610_23673[(2)] = null);
(statearr_23610_23673[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23595 === (5)))
{var state_23594__$1 = state_23594;if(cljs.core.truth_(close_QMARK_))
{var statearr_23611_23674 = state_23594__$1;(statearr_23611_23674[(1)] = (8));
} else
{var statearr_23612_23675 = state_23594__$1;(statearr_23612_23675[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23595 === (14)))
{var inst_23574 = (state_23594[(11)]);var inst_23572 = (state_23594[(8)]);var inst_23572__$1 = (state_23594[(2)]);var inst_23573 = (inst_23572__$1 == null);var inst_23574__$1 = cljs.core.not.call(null,inst_23573);var state_23594__$1 = (function (){var statearr_23613 = state_23594;(statearr_23613[(11)] = inst_23574__$1);
(statearr_23613[(8)] = inst_23572__$1);
return statearr_23613;
})();if(inst_23574__$1)
{var statearr_23614_23676 = state_23594__$1;(statearr_23614_23676[(1)] = (15));
} else
{var statearr_23615_23677 = state_23594__$1;(statearr_23615_23677[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23595 === (16)))
{var inst_23574 = (state_23594[(11)]);var state_23594__$1 = state_23594;var statearr_23616_23678 = state_23594__$1;(statearr_23616_23678[(2)] = inst_23574);
(statearr_23616_23678[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23595 === (10)))
{var inst_23566 = (state_23594[(2)]);var state_23594__$1 = state_23594;var statearr_23617_23679 = state_23594__$1;(statearr_23617_23679[(2)] = inst_23566);
(statearr_23617_23679[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23595 === (18)))
{var inst_23577 = (state_23594[(2)]);var state_23594__$1 = state_23594;var statearr_23618_23680 = state_23594__$1;(statearr_23618_23680[(2)] = inst_23577);
(statearr_23618_23680[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23595 === (8)))
{var inst_23563 = cljs.core.async.close_BANG_.call(null,to);var state_23594__$1 = state_23594;var statearr_23619_23681 = state_23594__$1;(statearr_23619_23681[(2)] = inst_23563);
(statearr_23619_23681[(1)] = (10));
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
var state_machine__9111__auto____0 = (function (){var statearr_23623 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23623[(0)] = state_machine__9111__auto__);
(statearr_23623[(1)] = (1));
return statearr_23623;
});
var state_machine__9111__auto____1 = (function (state_23594){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23594);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23624){if((e23624 instanceof Object))
{var ex__9114__auto__ = e23624;var statearr_23625_23682 = state_23594;(statearr_23625_23682[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23594);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23624;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23683 = state_23594;
state_23594 = G__23683;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23594){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23626 = f__9126__auto__.call(null);(statearr_23626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_23626;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__9125__auto___23784 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23784,tc,fc){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23784,tc,fc){
return (function (state_23759){var state_val_23760 = (state_23759[(1)]);if((state_val_23760 === (7)))
{var inst_23755 = (state_23759[(2)]);var state_23759__$1 = state_23759;var statearr_23761_23785 = state_23759__$1;(statearr_23761_23785[(2)] = inst_23755);
(statearr_23761_23785[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23760 === (1)))
{var state_23759__$1 = state_23759;var statearr_23762_23786 = state_23759__$1;(statearr_23762_23786[(2)] = null);
(statearr_23762_23786[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23760 === (4)))
{var inst_23736 = (state_23759[(7)]);var inst_23736__$1 = (state_23759[(2)]);var inst_23737 = (inst_23736__$1 == null);var state_23759__$1 = (function (){var statearr_23763 = state_23759;(statearr_23763[(7)] = inst_23736__$1);
return statearr_23763;
})();if(cljs.core.truth_(inst_23737))
{var statearr_23764_23787 = state_23759__$1;(statearr_23764_23787[(1)] = (5));
} else
{var statearr_23765_23788 = state_23759__$1;(statearr_23765_23788[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23760 === (13)))
{var state_23759__$1 = state_23759;var statearr_23766_23789 = state_23759__$1;(statearr_23766_23789[(2)] = null);
(statearr_23766_23789[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23760 === (6)))
{var inst_23736 = (state_23759[(7)]);var inst_23742 = p.call(null,inst_23736);var state_23759__$1 = state_23759;if(cljs.core.truth_(inst_23742))
{var statearr_23767_23790 = state_23759__$1;(statearr_23767_23790[(1)] = (9));
} else
{var statearr_23768_23791 = state_23759__$1;(statearr_23768_23791[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23760 === (3)))
{var inst_23757 = (state_23759[(2)]);var state_23759__$1 = state_23759;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23759__$1,inst_23757);
} else
{if((state_val_23760 === (12)))
{var state_23759__$1 = state_23759;var statearr_23769_23792 = state_23759__$1;(statearr_23769_23792[(2)] = null);
(statearr_23769_23792[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23760 === (2)))
{var state_23759__$1 = state_23759;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23759__$1,(4),ch);
} else
{if((state_val_23760 === (11)))
{var inst_23736 = (state_23759[(7)]);var inst_23746 = (state_23759[(2)]);var state_23759__$1 = state_23759;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23759__$1,(8),inst_23746,inst_23736);
} else
{if((state_val_23760 === (9)))
{var state_23759__$1 = state_23759;var statearr_23770_23793 = state_23759__$1;(statearr_23770_23793[(2)] = tc);
(statearr_23770_23793[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23760 === (5)))
{var inst_23739 = cljs.core.async.close_BANG_.call(null,tc);var inst_23740 = cljs.core.async.close_BANG_.call(null,fc);var state_23759__$1 = (function (){var statearr_23771 = state_23759;(statearr_23771[(8)] = inst_23739);
return statearr_23771;
})();var statearr_23772_23794 = state_23759__$1;(statearr_23772_23794[(2)] = inst_23740);
(statearr_23772_23794[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23760 === (14)))
{var inst_23753 = (state_23759[(2)]);var state_23759__$1 = state_23759;var statearr_23773_23795 = state_23759__$1;(statearr_23773_23795[(2)] = inst_23753);
(statearr_23773_23795[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23760 === (10)))
{var state_23759__$1 = state_23759;var statearr_23774_23796 = state_23759__$1;(statearr_23774_23796[(2)] = fc);
(statearr_23774_23796[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23760 === (8)))
{var inst_23748 = (state_23759[(2)]);var state_23759__$1 = state_23759;if(cljs.core.truth_(inst_23748))
{var statearr_23775_23797 = state_23759__$1;(statearr_23775_23797[(1)] = (12));
} else
{var statearr_23776_23798 = state_23759__$1;(statearr_23776_23798[(1)] = (13));
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
});})(c__9125__auto___23784,tc,fc))
;return ((function (switch__9110__auto__,c__9125__auto___23784,tc,fc){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23780 = [null,null,null,null,null,null,null,null,null];(statearr_23780[(0)] = state_machine__9111__auto__);
(statearr_23780[(1)] = (1));
return statearr_23780;
});
var state_machine__9111__auto____1 = (function (state_23759){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23759);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23781){if((e23781 instanceof Object))
{var ex__9114__auto__ = e23781;var statearr_23782_23799 = state_23759;(statearr_23782_23799[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23759);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23781;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23800 = state_23759;
state_23759 = G__23800;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23759){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23784,tc,fc))
})();var state__9127__auto__ = (function (){var statearr_23783 = f__9126__auto__.call(null);(statearr_23783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23784);
return statearr_23783;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23784,tc,fc))
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
return (function (state_23847){var state_val_23848 = (state_23847[(1)]);if((state_val_23848 === (7)))
{var inst_23843 = (state_23847[(2)]);var state_23847__$1 = state_23847;var statearr_23849_23865 = state_23847__$1;(statearr_23849_23865[(2)] = inst_23843);
(statearr_23849_23865[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23848 === (6)))
{var inst_23833 = (state_23847[(7)]);var inst_23836 = (state_23847[(8)]);var inst_23840 = f.call(null,inst_23833,inst_23836);var inst_23833__$1 = inst_23840;var state_23847__$1 = (function (){var statearr_23850 = state_23847;(statearr_23850[(7)] = inst_23833__$1);
return statearr_23850;
})();var statearr_23851_23866 = state_23847__$1;(statearr_23851_23866[(2)] = null);
(statearr_23851_23866[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23848 === (5)))
{var inst_23833 = (state_23847[(7)]);var state_23847__$1 = state_23847;var statearr_23852_23867 = state_23847__$1;(statearr_23852_23867[(2)] = inst_23833);
(statearr_23852_23867[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23848 === (4)))
{var inst_23836 = (state_23847[(8)]);var inst_23836__$1 = (state_23847[(2)]);var inst_23837 = (inst_23836__$1 == null);var state_23847__$1 = (function (){var statearr_23853 = state_23847;(statearr_23853[(8)] = inst_23836__$1);
return statearr_23853;
})();if(cljs.core.truth_(inst_23837))
{var statearr_23854_23868 = state_23847__$1;(statearr_23854_23868[(1)] = (5));
} else
{var statearr_23855_23869 = state_23847__$1;(statearr_23855_23869[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23848 === (3)))
{var inst_23845 = (state_23847[(2)]);var state_23847__$1 = state_23847;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23847__$1,inst_23845);
} else
{if((state_val_23848 === (2)))
{var state_23847__$1 = state_23847;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23847__$1,(4),ch);
} else
{if((state_val_23848 === (1)))
{var inst_23833 = init;var state_23847__$1 = (function (){var statearr_23856 = state_23847;(statearr_23856[(7)] = inst_23833);
return statearr_23856;
})();var statearr_23857_23870 = state_23847__$1;(statearr_23857_23870[(2)] = null);
(statearr_23857_23870[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_23861 = [null,null,null,null,null,null,null,null,null];(statearr_23861[(0)] = state_machine__9111__auto__);
(statearr_23861[(1)] = (1));
return statearr_23861;
});
var state_machine__9111__auto____1 = (function (state_23847){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23847);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23862){if((e23862 instanceof Object))
{var ex__9114__auto__ = e23862;var statearr_23863_23871 = state_23847;(statearr_23863_23871[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23847);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23862;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23872 = state_23847;
state_23847 = G__23872;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23847){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_23864 = f__9126__auto__.call(null);(statearr_23864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_23864;
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
return (function (state_23946){var state_val_23947 = (state_23946[(1)]);if((state_val_23947 === (7)))
{var inst_23928 = (state_23946[(2)]);var state_23946__$1 = state_23946;var statearr_23948_23971 = state_23946__$1;(statearr_23948_23971[(2)] = inst_23928);
(statearr_23948_23971[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23947 === (1)))
{var inst_23922 = cljs.core.seq.call(null,coll);var inst_23923 = inst_23922;var state_23946__$1 = (function (){var statearr_23949 = state_23946;(statearr_23949[(7)] = inst_23923);
return statearr_23949;
})();var statearr_23950_23972 = state_23946__$1;(statearr_23950_23972[(2)] = null);
(statearr_23950_23972[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23947 === (4)))
{var inst_23923 = (state_23946[(7)]);var inst_23926 = cljs.core.first.call(null,inst_23923);var state_23946__$1 = state_23946;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23946__$1,(7),ch,inst_23926);
} else
{if((state_val_23947 === (13)))
{var inst_23940 = (state_23946[(2)]);var state_23946__$1 = state_23946;var statearr_23951_23973 = state_23946__$1;(statearr_23951_23973[(2)] = inst_23940);
(statearr_23951_23973[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23947 === (6)))
{var inst_23931 = (state_23946[(2)]);var state_23946__$1 = state_23946;if(cljs.core.truth_(inst_23931))
{var statearr_23952_23974 = state_23946__$1;(statearr_23952_23974[(1)] = (8));
} else
{var statearr_23953_23975 = state_23946__$1;(statearr_23953_23975[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23947 === (3)))
{var inst_23944 = (state_23946[(2)]);var state_23946__$1 = state_23946;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23946__$1,inst_23944);
} else
{if((state_val_23947 === (12)))
{var state_23946__$1 = state_23946;var statearr_23954_23976 = state_23946__$1;(statearr_23954_23976[(2)] = null);
(statearr_23954_23976[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23947 === (2)))
{var inst_23923 = (state_23946[(7)]);var state_23946__$1 = state_23946;if(cljs.core.truth_(inst_23923))
{var statearr_23955_23977 = state_23946__$1;(statearr_23955_23977[(1)] = (4));
} else
{var statearr_23956_23978 = state_23946__$1;(statearr_23956_23978[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23947 === (11)))
{var inst_23937 = cljs.core.async.close_BANG_.call(null,ch);var state_23946__$1 = state_23946;var statearr_23957_23979 = state_23946__$1;(statearr_23957_23979[(2)] = inst_23937);
(statearr_23957_23979[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23947 === (9)))
{var state_23946__$1 = state_23946;if(cljs.core.truth_(close_QMARK_))
{var statearr_23958_23980 = state_23946__$1;(statearr_23958_23980[(1)] = (11));
} else
{var statearr_23959_23981 = state_23946__$1;(statearr_23959_23981[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23947 === (5)))
{var inst_23923 = (state_23946[(7)]);var state_23946__$1 = state_23946;var statearr_23960_23982 = state_23946__$1;(statearr_23960_23982[(2)] = inst_23923);
(statearr_23960_23982[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23947 === (10)))
{var inst_23942 = (state_23946[(2)]);var state_23946__$1 = state_23946;var statearr_23961_23983 = state_23946__$1;(statearr_23961_23983[(2)] = inst_23942);
(statearr_23961_23983[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23947 === (8)))
{var inst_23923 = (state_23946[(7)]);var inst_23933 = cljs.core.next.call(null,inst_23923);var inst_23923__$1 = inst_23933;var state_23946__$1 = (function (){var statearr_23962 = state_23946;(statearr_23962[(7)] = inst_23923__$1);
return statearr_23962;
})();var statearr_23963_23984 = state_23946__$1;(statearr_23963_23984[(2)] = null);
(statearr_23963_23984[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_23967 = [null,null,null,null,null,null,null,null];(statearr_23967[(0)] = state_machine__9111__auto__);
(statearr_23967[(1)] = (1));
return statearr_23967;
});
var state_machine__9111__auto____1 = (function (state_23946){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23946);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23968){if((e23968 instanceof Object))
{var ex__9114__auto__ = e23968;var statearr_23969_23985 = state_23946;(statearr_23969_23985[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23946);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23968;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23986 = state_23946;
state_23946 = G__23986;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23946){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_23970 = f__9126__auto__.call(null);(statearr_23970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_23970;
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
cljs.core.async.Mux = (function (){var obj23988 = {};return obj23988;
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
cljs.core.async.Mult = (function (){var obj23990 = {};return obj23990;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24212 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24212 = (function (cs,ch,mult,meta24213){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24213 = meta24213;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24212.cljs$lang$type = true;
cljs.core.async.t24212.cljs$lang$ctorStr = "cljs.core.async/t24212";
cljs.core.async.t24212.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24212");
});})(cs))
;
cljs.core.async.t24212.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24212.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24212.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24212.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24212.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24212.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24212.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24214){var self__ = this;
var _24214__$1 = this;return self__.meta24213;
});})(cs))
;
cljs.core.async.t24212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24214,meta24213__$1){var self__ = this;
var _24214__$1 = this;return (new cljs.core.async.t24212(self__.cs,self__.ch,self__.mult,meta24213__$1));
});})(cs))
;
cljs.core.async.__GT_t24212 = ((function (cs){
return (function __GT_t24212(cs__$1,ch__$1,mult__$1,meta24213){return (new cljs.core.async.t24212(cs__$1,ch__$1,mult__$1,meta24213));
});})(cs))
;
}
return (new cljs.core.async.t24212(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__9125__auto___24433 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24433,cs,m,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24433,cs,m,dchan,dctr,done){
return (function (state_24345){var state_val_24346 = (state_24345[(1)]);if((state_val_24346 === (7)))
{var inst_24341 = (state_24345[(2)]);var state_24345__$1 = state_24345;var statearr_24347_24434 = state_24345__$1;(statearr_24347_24434[(2)] = inst_24341);
(statearr_24347_24434[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (20)))
{var inst_24246 = (state_24345[(7)]);var inst_24256 = cljs.core.first.call(null,inst_24246);var inst_24257 = cljs.core.nth.call(null,inst_24256,(0),null);var inst_24258 = cljs.core.nth.call(null,inst_24256,(1),null);var state_24345__$1 = (function (){var statearr_24348 = state_24345;(statearr_24348[(8)] = inst_24257);
return statearr_24348;
})();if(cljs.core.truth_(inst_24258))
{var statearr_24349_24435 = state_24345__$1;(statearr_24349_24435[(1)] = (22));
} else
{var statearr_24350_24436 = state_24345__$1;(statearr_24350_24436[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (27)))
{var inst_24286 = (state_24345[(9)]);var inst_24288 = (state_24345[(10)]);var inst_24217 = (state_24345[(11)]);var inst_24293 = (state_24345[(12)]);var inst_24293__$1 = cljs.core._nth.call(null,inst_24286,inst_24288);var inst_24294 = cljs.core.async.put_BANG_.call(null,inst_24293__$1,inst_24217,done);var state_24345__$1 = (function (){var statearr_24351 = state_24345;(statearr_24351[(12)] = inst_24293__$1);
return statearr_24351;
})();if(cljs.core.truth_(inst_24294))
{var statearr_24352_24437 = state_24345__$1;(statearr_24352_24437[(1)] = (30));
} else
{var statearr_24353_24438 = state_24345__$1;(statearr_24353_24438[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (1)))
{var state_24345__$1 = state_24345;var statearr_24354_24439 = state_24345__$1;(statearr_24354_24439[(2)] = null);
(statearr_24354_24439[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (24)))
{var inst_24246 = (state_24345[(7)]);var inst_24263 = (state_24345[(2)]);var inst_24264 = cljs.core.next.call(null,inst_24246);var inst_24226 = inst_24264;var inst_24227 = null;var inst_24228 = (0);var inst_24229 = (0);var state_24345__$1 = (function (){var statearr_24355 = state_24345;(statearr_24355[(13)] = inst_24226);
(statearr_24355[(14)] = inst_24227);
(statearr_24355[(15)] = inst_24228);
(statearr_24355[(16)] = inst_24263);
(statearr_24355[(17)] = inst_24229);
return statearr_24355;
})();var statearr_24356_24440 = state_24345__$1;(statearr_24356_24440[(2)] = null);
(statearr_24356_24440[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (39)))
{var state_24345__$1 = state_24345;var statearr_24360_24441 = state_24345__$1;(statearr_24360_24441[(2)] = null);
(statearr_24360_24441[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (4)))
{var inst_24217 = (state_24345[(11)]);var inst_24217__$1 = (state_24345[(2)]);var inst_24218 = (inst_24217__$1 == null);var state_24345__$1 = (function (){var statearr_24361 = state_24345;(statearr_24361[(11)] = inst_24217__$1);
return statearr_24361;
})();if(cljs.core.truth_(inst_24218))
{var statearr_24362_24442 = state_24345__$1;(statearr_24362_24442[(1)] = (5));
} else
{var statearr_24363_24443 = state_24345__$1;(statearr_24363_24443[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (15)))
{var inst_24226 = (state_24345[(13)]);var inst_24227 = (state_24345[(14)]);var inst_24228 = (state_24345[(15)]);var inst_24229 = (state_24345[(17)]);var inst_24242 = (state_24345[(2)]);var inst_24243 = (inst_24229 + (1));var tmp24357 = inst_24226;var tmp24358 = inst_24227;var tmp24359 = inst_24228;var inst_24226__$1 = tmp24357;var inst_24227__$1 = tmp24358;var inst_24228__$1 = tmp24359;var inst_24229__$1 = inst_24243;var state_24345__$1 = (function (){var statearr_24364 = state_24345;(statearr_24364[(13)] = inst_24226__$1);
(statearr_24364[(14)] = inst_24227__$1);
(statearr_24364[(15)] = inst_24228__$1);
(statearr_24364[(17)] = inst_24229__$1);
(statearr_24364[(18)] = inst_24242);
return statearr_24364;
})();var statearr_24365_24444 = state_24345__$1;(statearr_24365_24444[(2)] = null);
(statearr_24365_24444[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (21)))
{var inst_24267 = (state_24345[(2)]);var state_24345__$1 = state_24345;var statearr_24369_24445 = state_24345__$1;(statearr_24369_24445[(2)] = inst_24267);
(statearr_24369_24445[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (31)))
{var inst_24293 = (state_24345[(12)]);var inst_24297 = done.call(null,null);var inst_24298 = cljs.core.async.untap_STAR_.call(null,m,inst_24293);var state_24345__$1 = (function (){var statearr_24370 = state_24345;(statearr_24370[(19)] = inst_24297);
return statearr_24370;
})();var statearr_24371_24446 = state_24345__$1;(statearr_24371_24446[(2)] = inst_24298);
(statearr_24371_24446[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (32)))
{var inst_24286 = (state_24345[(9)]);var inst_24285 = (state_24345[(20)]);var inst_24288 = (state_24345[(10)]);var inst_24287 = (state_24345[(21)]);var inst_24300 = (state_24345[(2)]);var inst_24301 = (inst_24288 + (1));var tmp24366 = inst_24286;var tmp24367 = inst_24285;var tmp24368 = inst_24287;var inst_24285__$1 = tmp24367;var inst_24286__$1 = tmp24366;var inst_24287__$1 = tmp24368;var inst_24288__$1 = inst_24301;var state_24345__$1 = (function (){var statearr_24372 = state_24345;(statearr_24372[(9)] = inst_24286__$1);
(statearr_24372[(20)] = inst_24285__$1);
(statearr_24372[(10)] = inst_24288__$1);
(statearr_24372[(22)] = inst_24300);
(statearr_24372[(21)] = inst_24287__$1);
return statearr_24372;
})();var statearr_24373_24447 = state_24345__$1;(statearr_24373_24447[(2)] = null);
(statearr_24373_24447[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (40)))
{var inst_24313 = (state_24345[(23)]);var inst_24317 = done.call(null,null);var inst_24318 = cljs.core.async.untap_STAR_.call(null,m,inst_24313);var state_24345__$1 = (function (){var statearr_24374 = state_24345;(statearr_24374[(24)] = inst_24317);
return statearr_24374;
})();var statearr_24375_24448 = state_24345__$1;(statearr_24375_24448[(2)] = inst_24318);
(statearr_24375_24448[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (33)))
{var inst_24304 = (state_24345[(25)]);var inst_24306 = cljs.core.chunked_seq_QMARK_.call(null,inst_24304);var state_24345__$1 = state_24345;if(inst_24306)
{var statearr_24376_24449 = state_24345__$1;(statearr_24376_24449[(1)] = (36));
} else
{var statearr_24377_24450 = state_24345__$1;(statearr_24377_24450[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (13)))
{var inst_24236 = (state_24345[(26)]);var inst_24239 = cljs.core.async.close_BANG_.call(null,inst_24236);var state_24345__$1 = state_24345;var statearr_24378_24451 = state_24345__$1;(statearr_24378_24451[(2)] = inst_24239);
(statearr_24378_24451[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (22)))
{var inst_24257 = (state_24345[(8)]);var inst_24260 = cljs.core.async.close_BANG_.call(null,inst_24257);var state_24345__$1 = state_24345;var statearr_24379_24452 = state_24345__$1;(statearr_24379_24452[(2)] = inst_24260);
(statearr_24379_24452[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (36)))
{var inst_24304 = (state_24345[(25)]);var inst_24308 = cljs.core.chunk_first.call(null,inst_24304);var inst_24309 = cljs.core.chunk_rest.call(null,inst_24304);var inst_24310 = cljs.core.count.call(null,inst_24308);var inst_24285 = inst_24309;var inst_24286 = inst_24308;var inst_24287 = inst_24310;var inst_24288 = (0);var state_24345__$1 = (function (){var statearr_24380 = state_24345;(statearr_24380[(9)] = inst_24286);
(statearr_24380[(20)] = inst_24285);
(statearr_24380[(10)] = inst_24288);
(statearr_24380[(21)] = inst_24287);
return statearr_24380;
})();var statearr_24381_24453 = state_24345__$1;(statearr_24381_24453[(2)] = null);
(statearr_24381_24453[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (41)))
{var inst_24304 = (state_24345[(25)]);var inst_24320 = (state_24345[(2)]);var inst_24321 = cljs.core.next.call(null,inst_24304);var inst_24285 = inst_24321;var inst_24286 = null;var inst_24287 = (0);var inst_24288 = (0);var state_24345__$1 = (function (){var statearr_24382 = state_24345;(statearr_24382[(27)] = inst_24320);
(statearr_24382[(9)] = inst_24286);
(statearr_24382[(20)] = inst_24285);
(statearr_24382[(10)] = inst_24288);
(statearr_24382[(21)] = inst_24287);
return statearr_24382;
})();var statearr_24383_24454 = state_24345__$1;(statearr_24383_24454[(2)] = null);
(statearr_24383_24454[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (43)))
{var state_24345__$1 = state_24345;var statearr_24384_24455 = state_24345__$1;(statearr_24384_24455[(2)] = null);
(statearr_24384_24455[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (29)))
{var inst_24329 = (state_24345[(2)]);var state_24345__$1 = state_24345;var statearr_24385_24456 = state_24345__$1;(statearr_24385_24456[(2)] = inst_24329);
(statearr_24385_24456[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (44)))
{var inst_24338 = (state_24345[(2)]);var state_24345__$1 = (function (){var statearr_24386 = state_24345;(statearr_24386[(28)] = inst_24338);
return statearr_24386;
})();var statearr_24387_24457 = state_24345__$1;(statearr_24387_24457[(2)] = null);
(statearr_24387_24457[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (6)))
{var inst_24277 = (state_24345[(29)]);var inst_24276 = cljs.core.deref.call(null,cs);var inst_24277__$1 = cljs.core.keys.call(null,inst_24276);var inst_24278 = cljs.core.count.call(null,inst_24277__$1);var inst_24279 = cljs.core.reset_BANG_.call(null,dctr,inst_24278);var inst_24284 = cljs.core.seq.call(null,inst_24277__$1);var inst_24285 = inst_24284;var inst_24286 = null;var inst_24287 = (0);var inst_24288 = (0);var state_24345__$1 = (function (){var statearr_24388 = state_24345;(statearr_24388[(9)] = inst_24286);
(statearr_24388[(20)] = inst_24285);
(statearr_24388[(10)] = inst_24288);
(statearr_24388[(21)] = inst_24287);
(statearr_24388[(29)] = inst_24277__$1);
(statearr_24388[(30)] = inst_24279);
return statearr_24388;
})();var statearr_24389_24458 = state_24345__$1;(statearr_24389_24458[(2)] = null);
(statearr_24389_24458[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (28)))
{var inst_24285 = (state_24345[(20)]);var inst_24304 = (state_24345[(25)]);var inst_24304__$1 = cljs.core.seq.call(null,inst_24285);var state_24345__$1 = (function (){var statearr_24390 = state_24345;(statearr_24390[(25)] = inst_24304__$1);
return statearr_24390;
})();if(inst_24304__$1)
{var statearr_24391_24459 = state_24345__$1;(statearr_24391_24459[(1)] = (33));
} else
{var statearr_24392_24460 = state_24345__$1;(statearr_24392_24460[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (25)))
{var inst_24288 = (state_24345[(10)]);var inst_24287 = (state_24345[(21)]);var inst_24290 = (inst_24288 < inst_24287);var inst_24291 = inst_24290;var state_24345__$1 = state_24345;if(cljs.core.truth_(inst_24291))
{var statearr_24393_24461 = state_24345__$1;(statearr_24393_24461[(1)] = (27));
} else
{var statearr_24394_24462 = state_24345__$1;(statearr_24394_24462[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (34)))
{var state_24345__$1 = state_24345;var statearr_24395_24463 = state_24345__$1;(statearr_24395_24463[(2)] = null);
(statearr_24395_24463[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (17)))
{var state_24345__$1 = state_24345;var statearr_24396_24464 = state_24345__$1;(statearr_24396_24464[(2)] = null);
(statearr_24396_24464[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (3)))
{var inst_24343 = (state_24345[(2)]);var state_24345__$1 = state_24345;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24345__$1,inst_24343);
} else
{if((state_val_24346 === (12)))
{var inst_24272 = (state_24345[(2)]);var state_24345__$1 = state_24345;var statearr_24397_24465 = state_24345__$1;(statearr_24397_24465[(2)] = inst_24272);
(statearr_24397_24465[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (2)))
{var state_24345__$1 = state_24345;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24345__$1,(4),ch);
} else
{if((state_val_24346 === (23)))
{var state_24345__$1 = state_24345;var statearr_24398_24466 = state_24345__$1;(statearr_24398_24466[(2)] = null);
(statearr_24398_24466[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (35)))
{var inst_24327 = (state_24345[(2)]);var state_24345__$1 = state_24345;var statearr_24399_24467 = state_24345__$1;(statearr_24399_24467[(2)] = inst_24327);
(statearr_24399_24467[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (19)))
{var inst_24246 = (state_24345[(7)]);var inst_24250 = cljs.core.chunk_first.call(null,inst_24246);var inst_24251 = cljs.core.chunk_rest.call(null,inst_24246);var inst_24252 = cljs.core.count.call(null,inst_24250);var inst_24226 = inst_24251;var inst_24227 = inst_24250;var inst_24228 = inst_24252;var inst_24229 = (0);var state_24345__$1 = (function (){var statearr_24400 = state_24345;(statearr_24400[(13)] = inst_24226);
(statearr_24400[(14)] = inst_24227);
(statearr_24400[(15)] = inst_24228);
(statearr_24400[(17)] = inst_24229);
return statearr_24400;
})();var statearr_24401_24468 = state_24345__$1;(statearr_24401_24468[(2)] = null);
(statearr_24401_24468[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (11)))
{var inst_24226 = (state_24345[(13)]);var inst_24246 = (state_24345[(7)]);var inst_24246__$1 = cljs.core.seq.call(null,inst_24226);var state_24345__$1 = (function (){var statearr_24402 = state_24345;(statearr_24402[(7)] = inst_24246__$1);
return statearr_24402;
})();if(inst_24246__$1)
{var statearr_24403_24469 = state_24345__$1;(statearr_24403_24469[(1)] = (16));
} else
{var statearr_24404_24470 = state_24345__$1;(statearr_24404_24470[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (9)))
{var inst_24274 = (state_24345[(2)]);var state_24345__$1 = state_24345;var statearr_24405_24471 = state_24345__$1;(statearr_24405_24471[(2)] = inst_24274);
(statearr_24405_24471[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (5)))
{var inst_24224 = cljs.core.deref.call(null,cs);var inst_24225 = cljs.core.seq.call(null,inst_24224);var inst_24226 = inst_24225;var inst_24227 = null;var inst_24228 = (0);var inst_24229 = (0);var state_24345__$1 = (function (){var statearr_24406 = state_24345;(statearr_24406[(13)] = inst_24226);
(statearr_24406[(14)] = inst_24227);
(statearr_24406[(15)] = inst_24228);
(statearr_24406[(17)] = inst_24229);
return statearr_24406;
})();var statearr_24407_24472 = state_24345__$1;(statearr_24407_24472[(2)] = null);
(statearr_24407_24472[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (14)))
{var state_24345__$1 = state_24345;var statearr_24408_24473 = state_24345__$1;(statearr_24408_24473[(2)] = null);
(statearr_24408_24473[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (45)))
{var inst_24335 = (state_24345[(2)]);var state_24345__$1 = state_24345;var statearr_24409_24474 = state_24345__$1;(statearr_24409_24474[(2)] = inst_24335);
(statearr_24409_24474[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (26)))
{var inst_24277 = (state_24345[(29)]);var inst_24331 = (state_24345[(2)]);var inst_24332 = cljs.core.seq.call(null,inst_24277);var state_24345__$1 = (function (){var statearr_24410 = state_24345;(statearr_24410[(31)] = inst_24331);
return statearr_24410;
})();if(inst_24332)
{var statearr_24411_24475 = state_24345__$1;(statearr_24411_24475[(1)] = (42));
} else
{var statearr_24412_24476 = state_24345__$1;(statearr_24412_24476[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (16)))
{var inst_24246 = (state_24345[(7)]);var inst_24248 = cljs.core.chunked_seq_QMARK_.call(null,inst_24246);var state_24345__$1 = state_24345;if(inst_24248)
{var statearr_24413_24477 = state_24345__$1;(statearr_24413_24477[(1)] = (19));
} else
{var statearr_24414_24478 = state_24345__$1;(statearr_24414_24478[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (38)))
{var inst_24324 = (state_24345[(2)]);var state_24345__$1 = state_24345;var statearr_24415_24479 = state_24345__$1;(statearr_24415_24479[(2)] = inst_24324);
(statearr_24415_24479[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (30)))
{var state_24345__$1 = state_24345;var statearr_24416_24480 = state_24345__$1;(statearr_24416_24480[(2)] = null);
(statearr_24416_24480[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (10)))
{var inst_24227 = (state_24345[(14)]);var inst_24229 = (state_24345[(17)]);var inst_24235 = cljs.core._nth.call(null,inst_24227,inst_24229);var inst_24236 = cljs.core.nth.call(null,inst_24235,(0),null);var inst_24237 = cljs.core.nth.call(null,inst_24235,(1),null);var state_24345__$1 = (function (){var statearr_24417 = state_24345;(statearr_24417[(26)] = inst_24236);
return statearr_24417;
})();if(cljs.core.truth_(inst_24237))
{var statearr_24418_24481 = state_24345__$1;(statearr_24418_24481[(1)] = (13));
} else
{var statearr_24419_24482 = state_24345__$1;(statearr_24419_24482[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (18)))
{var inst_24270 = (state_24345[(2)]);var state_24345__$1 = state_24345;var statearr_24420_24483 = state_24345__$1;(statearr_24420_24483[(2)] = inst_24270);
(statearr_24420_24483[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (42)))
{var state_24345__$1 = state_24345;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24345__$1,(45),dchan);
} else
{if((state_val_24346 === (37)))
{var inst_24313 = (state_24345[(23)]);var inst_24304 = (state_24345[(25)]);var inst_24217 = (state_24345[(11)]);var inst_24313__$1 = cljs.core.first.call(null,inst_24304);var inst_24314 = cljs.core.async.put_BANG_.call(null,inst_24313__$1,inst_24217,done);var state_24345__$1 = (function (){var statearr_24421 = state_24345;(statearr_24421[(23)] = inst_24313__$1);
return statearr_24421;
})();if(cljs.core.truth_(inst_24314))
{var statearr_24422_24484 = state_24345__$1;(statearr_24422_24484[(1)] = (39));
} else
{var statearr_24423_24485 = state_24345__$1;(statearr_24423_24485[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24346 === (8)))
{var inst_24228 = (state_24345[(15)]);var inst_24229 = (state_24345[(17)]);var inst_24231 = (inst_24229 < inst_24228);var inst_24232 = inst_24231;var state_24345__$1 = state_24345;if(cljs.core.truth_(inst_24232))
{var statearr_24424_24486 = state_24345__$1;(statearr_24424_24486[(1)] = (10));
} else
{var statearr_24425_24487 = state_24345__$1;(statearr_24425_24487[(1)] = (11));
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
});})(c__9125__auto___24433,cs,m,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___24433,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24429[(0)] = state_machine__9111__auto__);
(statearr_24429[(1)] = (1));
return statearr_24429;
});
var state_machine__9111__auto____1 = (function (state_24345){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24345);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24430){if((e24430 instanceof Object))
{var ex__9114__auto__ = e24430;var statearr_24431_24488 = state_24345;(statearr_24431_24488[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24345);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24430;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24489 = state_24345;
state_24345 = G__24489;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24345){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24433,cs,m,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_24432 = f__9126__auto__.call(null);(statearr_24432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24433);
return statearr_24432;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24433,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj24491 = {};return obj24491;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24492){var map__24497 = p__24492;var map__24497__$1 = ((cljs.core.seq_QMARK_.call(null,map__24497))?cljs.core.apply.call(null,cljs.core.hash_map,map__24497):map__24497);var opts = map__24497__$1;var statearr_24498_24501 = state;(statearr_24498_24501[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24497,map__24497__$1,opts){
return (function (val){var statearr_24499_24502 = state;(statearr_24499_24502[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24497,map__24497__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_24500_24503 = state;(statearr_24500_24503[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24492 = null;if (arguments.length > 3) {
  p__24492 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24492);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24504){
var state = cljs.core.first(arglist__24504);
arglist__24504 = cljs.core.next(arglist__24504);
var cont_block = cljs.core.first(arglist__24504);
arglist__24504 = cljs.core.next(arglist__24504);
var ports = cljs.core.first(arglist__24504);
var p__24492 = cljs.core.rest(arglist__24504);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24492);
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
;var m = (function (){if(typeof cljs.core.async.t24624 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24624 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24625){
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
this.meta24625 = meta24625;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24624.cljs$lang$type = true;
cljs.core.async.t24624.cljs$lang$ctorStr = "cljs.core.async/t24624";
cljs.core.async.t24624.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24624");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24624.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24624.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24624.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24624.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24624.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24624.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24624.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24624.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24624.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24626){var self__ = this;
var _24626__$1 = this;return self__.meta24625;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24626,meta24625__$1){var self__ = this;
var _24626__$1 = this;return (new cljs.core.async.t24624(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24625__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24624 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24624(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24625){return (new cljs.core.async.t24624(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24625));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24624(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__9125__auto___24743 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24696){var state_val_24697 = (state_24696[(1)]);if((state_val_24697 === (7)))
{var inst_24640 = (state_24696[(7)]);var inst_24645 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24640);var state_24696__$1 = state_24696;var statearr_24698_24744 = state_24696__$1;(statearr_24698_24744[(2)] = inst_24645);
(statearr_24698_24744[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24697 === (20)))
{var inst_24655 = (state_24696[(8)]);var state_24696__$1 = state_24696;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24696__$1,(23),out,inst_24655);
} else
{if((state_val_24697 === (1)))
{var inst_24630 = (state_24696[(9)]);var inst_24630__$1 = calc_state.call(null);var inst_24631 = cljs.core.seq_QMARK_.call(null,inst_24630__$1);var state_24696__$1 = (function (){var statearr_24699 = state_24696;(statearr_24699[(9)] = inst_24630__$1);
return statearr_24699;
})();if(inst_24631)
{var statearr_24700_24745 = state_24696__$1;(statearr_24700_24745[(1)] = (2));
} else
{var statearr_24701_24746 = state_24696__$1;(statearr_24701_24746[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24697 === (24)))
{var inst_24648 = (state_24696[(10)]);var inst_24640 = inst_24648;var state_24696__$1 = (function (){var statearr_24702 = state_24696;(statearr_24702[(7)] = inst_24640);
return statearr_24702;
})();var statearr_24703_24747 = state_24696__$1;(statearr_24703_24747[(2)] = null);
(statearr_24703_24747[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24697 === (4)))
{var inst_24630 = (state_24696[(9)]);var inst_24636 = (state_24696[(2)]);var inst_24637 = cljs.core.get.call(null,inst_24636,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24638 = cljs.core.get.call(null,inst_24636,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24639 = cljs.core.get.call(null,inst_24636,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_24640 = inst_24630;var state_24696__$1 = (function (){var statearr_24704 = state_24696;(statearr_24704[(7)] = inst_24640);
(statearr_24704[(11)] = inst_24637);
(statearr_24704[(12)] = inst_24638);
(statearr_24704[(13)] = inst_24639);
return statearr_24704;
})();var statearr_24705_24748 = state_24696__$1;(statearr_24705_24748[(2)] = null);
(statearr_24705_24748[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24697 === (15)))
{var state_24696__$1 = state_24696;var statearr_24706_24749 = state_24696__$1;(statearr_24706_24749[(2)] = null);
(statearr_24706_24749[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24697 === (21)))
{var inst_24648 = (state_24696[(10)]);var inst_24640 = inst_24648;var state_24696__$1 = (function (){var statearr_24707 = state_24696;(statearr_24707[(7)] = inst_24640);
return statearr_24707;
})();var statearr_24708_24750 = state_24696__$1;(statearr_24708_24750[(2)] = null);
(statearr_24708_24750[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24697 === (13)))
{var inst_24692 = (state_24696[(2)]);var state_24696__$1 = state_24696;var statearr_24709_24751 = state_24696__$1;(statearr_24709_24751[(2)] = inst_24692);
(statearr_24709_24751[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24697 === (22)))
{var inst_24690 = (state_24696[(2)]);var state_24696__$1 = state_24696;var statearr_24710_24752 = state_24696__$1;(statearr_24710_24752[(2)] = inst_24690);
(statearr_24710_24752[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24697 === (6)))
{var inst_24694 = (state_24696[(2)]);var state_24696__$1 = state_24696;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24696__$1,inst_24694);
} else
{if((state_val_24697 === (25)))
{var state_24696__$1 = state_24696;var statearr_24711_24753 = state_24696__$1;(statearr_24711_24753[(2)] = null);
(statearr_24711_24753[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24697 === (17)))
{var inst_24670 = (state_24696[(14)]);var state_24696__$1 = state_24696;var statearr_24712_24754 = state_24696__$1;(statearr_24712_24754[(2)] = inst_24670);
(statearr_24712_24754[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24697 === (3)))
{var inst_24630 = (state_24696[(9)]);var state_24696__$1 = state_24696;var statearr_24713_24755 = state_24696__$1;(statearr_24713_24755[(2)] = inst_24630);
(statearr_24713_24755[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24697 === (12)))
{var inst_24656 = (state_24696[(15)]);var inst_24670 = (state_24696[(14)]);var inst_24651 = (state_24696[(16)]);var inst_24670__$1 = inst_24651.call(null,inst_24656);var state_24696__$1 = (function (){var statearr_24714 = state_24696;(statearr_24714[(14)] = inst_24670__$1);
return statearr_24714;
})();if(cljs.core.truth_(inst_24670__$1))
{var statearr_24715_24756 = state_24696__$1;(statearr_24715_24756[(1)] = (17));
} else
{var statearr_24716_24757 = state_24696__$1;(statearr_24716_24757[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24697 === (2)))
{var inst_24630 = (state_24696[(9)]);var inst_24633 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24630);var state_24696__$1 = state_24696;var statearr_24717_24758 = state_24696__$1;(statearr_24717_24758[(2)] = inst_24633);
(statearr_24717_24758[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24697 === (23)))
{var inst_24681 = (state_24696[(2)]);var state_24696__$1 = state_24696;if(cljs.core.truth_(inst_24681))
{var statearr_24718_24759 = state_24696__$1;(statearr_24718_24759[(1)] = (24));
} else
{var statearr_24719_24760 = state_24696__$1;(statearr_24719_24760[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24697 === (19)))
{var inst_24678 = (state_24696[(2)]);var state_24696__$1 = state_24696;if(cljs.core.truth_(inst_24678))
{var statearr_24720_24761 = state_24696__$1;(statearr_24720_24761[(1)] = (20));
} else
{var statearr_24721_24762 = state_24696__$1;(statearr_24721_24762[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24697 === (11)))
{var inst_24655 = (state_24696[(8)]);var inst_24661 = (inst_24655 == null);var state_24696__$1 = state_24696;if(cljs.core.truth_(inst_24661))
{var statearr_24722_24763 = state_24696__$1;(statearr_24722_24763[(1)] = (14));
} else
{var statearr_24723_24764 = state_24696__$1;(statearr_24723_24764[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24697 === (9)))
{var inst_24648 = (state_24696[(10)]);var inst_24648__$1 = (state_24696[(2)]);var inst_24649 = cljs.core.get.call(null,inst_24648__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24650 = cljs.core.get.call(null,inst_24648__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24651 = cljs.core.get.call(null,inst_24648__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_24696__$1 = (function (){var statearr_24724 = state_24696;(statearr_24724[(17)] = inst_24650);
(statearr_24724[(10)] = inst_24648__$1);
(statearr_24724[(16)] = inst_24651);
return statearr_24724;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_24696__$1,(10),inst_24649);
} else
{if((state_val_24697 === (5)))
{var inst_24640 = (state_24696[(7)]);var inst_24643 = cljs.core.seq_QMARK_.call(null,inst_24640);var state_24696__$1 = state_24696;if(inst_24643)
{var statearr_24725_24765 = state_24696__$1;(statearr_24725_24765[(1)] = (7));
} else
{var statearr_24726_24766 = state_24696__$1;(statearr_24726_24766[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24697 === (14)))
{var inst_24656 = (state_24696[(15)]);var inst_24663 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24656);var state_24696__$1 = state_24696;var statearr_24727_24767 = state_24696__$1;(statearr_24727_24767[(2)] = inst_24663);
(statearr_24727_24767[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24697 === (26)))
{var inst_24686 = (state_24696[(2)]);var state_24696__$1 = state_24696;var statearr_24728_24768 = state_24696__$1;(statearr_24728_24768[(2)] = inst_24686);
(statearr_24728_24768[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24697 === (16)))
{var inst_24666 = (state_24696[(2)]);var inst_24667 = calc_state.call(null);var inst_24640 = inst_24667;var state_24696__$1 = (function (){var statearr_24729 = state_24696;(statearr_24729[(7)] = inst_24640);
(statearr_24729[(18)] = inst_24666);
return statearr_24729;
})();var statearr_24730_24769 = state_24696__$1;(statearr_24730_24769[(2)] = null);
(statearr_24730_24769[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24697 === (10)))
{var inst_24656 = (state_24696[(15)]);var inst_24655 = (state_24696[(8)]);var inst_24654 = (state_24696[(2)]);var inst_24655__$1 = cljs.core.nth.call(null,inst_24654,(0),null);var inst_24656__$1 = cljs.core.nth.call(null,inst_24654,(1),null);var inst_24657 = (inst_24655__$1 == null);var inst_24658 = cljs.core._EQ_.call(null,inst_24656__$1,change);var inst_24659 = (inst_24657) || (inst_24658);var state_24696__$1 = (function (){var statearr_24731 = state_24696;(statearr_24731[(15)] = inst_24656__$1);
(statearr_24731[(8)] = inst_24655__$1);
return statearr_24731;
})();if(cljs.core.truth_(inst_24659))
{var statearr_24732_24770 = state_24696__$1;(statearr_24732_24770[(1)] = (11));
} else
{var statearr_24733_24771 = state_24696__$1;(statearr_24733_24771[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24697 === (18)))
{var inst_24656 = (state_24696[(15)]);var inst_24650 = (state_24696[(17)]);var inst_24651 = (state_24696[(16)]);var inst_24673 = cljs.core.empty_QMARK_.call(null,inst_24651);var inst_24674 = inst_24650.call(null,inst_24656);var inst_24675 = cljs.core.not.call(null,inst_24674);var inst_24676 = (inst_24673) && (inst_24675);var state_24696__$1 = state_24696;var statearr_24734_24772 = state_24696__$1;(statearr_24734_24772[(2)] = inst_24676);
(statearr_24734_24772[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24697 === (8)))
{var inst_24640 = (state_24696[(7)]);var state_24696__$1 = state_24696;var statearr_24735_24773 = state_24696__$1;(statearr_24735_24773[(2)] = inst_24640);
(statearr_24735_24773[(1)] = (9));
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
});})(c__9125__auto___24743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__9110__auto__,c__9125__auto___24743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24739[(0)] = state_machine__9111__auto__);
(statearr_24739[(1)] = (1));
return statearr_24739;
});
var state_machine__9111__auto____1 = (function (state_24696){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24696);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24740){if((e24740 instanceof Object))
{var ex__9114__auto__ = e24740;var statearr_24741_24774 = state_24696;(statearr_24741_24774[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24696);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24740;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24775 = state_24696;
state_24696 = G__24775;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24696){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__9127__auto__ = (function (){var statearr_24742 = f__9126__auto__.call(null);(statearr_24742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24743);
return statearr_24742;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj24777 = {};return obj24777;
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
return (function (p1__24778_SHARP_){if(cljs.core.truth_(p1__24778_SHARP_.call(null,topic)))
{return p1__24778_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__24778_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24901 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24901 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24902){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24902 = meta24902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24901.cljs$lang$type = true;
cljs.core.async.t24901.cljs$lang$ctorStr = "cljs.core.async/t24901";
cljs.core.async.t24901.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24901");
});})(mults,ensure_mult))
;
cljs.core.async.t24901.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24901.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24901.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24901.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24901.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24901.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24901.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24901.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24903){var self__ = this;
var _24903__$1 = this;return self__.meta24902;
});})(mults,ensure_mult))
;
cljs.core.async.t24901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24903,meta24902__$1){var self__ = this;
var _24903__$1 = this;return (new cljs.core.async.t24901(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24902__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24901 = ((function (mults,ensure_mult){
return (function __GT_t24901(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24902){return (new cljs.core.async.t24901(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24902));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24901(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__9125__auto___25023 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25023,mults,ensure_mult,p){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25023,mults,ensure_mult,p){
return (function (state_24975){var state_val_24976 = (state_24975[(1)]);if((state_val_24976 === (7)))
{var inst_24971 = (state_24975[(2)]);var state_24975__$1 = state_24975;var statearr_24977_25024 = state_24975__$1;(statearr_24977_25024[(2)] = inst_24971);
(statearr_24977_25024[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24976 === (20)))
{var state_24975__$1 = state_24975;var statearr_24978_25025 = state_24975__$1;(statearr_24978_25025[(2)] = null);
(statearr_24978_25025[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24976 === (1)))
{var state_24975__$1 = state_24975;var statearr_24979_25026 = state_24975__$1;(statearr_24979_25026[(2)] = null);
(statearr_24979_25026[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24976 === (24)))
{var inst_24954 = (state_24975[(7)]);var inst_24963 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24954);var state_24975__$1 = state_24975;var statearr_24980_25027 = state_24975__$1;(statearr_24980_25027[(2)] = inst_24963);
(statearr_24980_25027[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24976 === (4)))
{var inst_24906 = (state_24975[(8)]);var inst_24906__$1 = (state_24975[(2)]);var inst_24907 = (inst_24906__$1 == null);var state_24975__$1 = (function (){var statearr_24981 = state_24975;(statearr_24981[(8)] = inst_24906__$1);
return statearr_24981;
})();if(cljs.core.truth_(inst_24907))
{var statearr_24982_25028 = state_24975__$1;(statearr_24982_25028[(1)] = (5));
} else
{var statearr_24983_25029 = state_24975__$1;(statearr_24983_25029[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24976 === (15)))
{var inst_24948 = (state_24975[(2)]);var state_24975__$1 = state_24975;var statearr_24984_25030 = state_24975__$1;(statearr_24984_25030[(2)] = inst_24948);
(statearr_24984_25030[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24976 === (21)))
{var inst_24968 = (state_24975[(2)]);var state_24975__$1 = (function (){var statearr_24985 = state_24975;(statearr_24985[(9)] = inst_24968);
return statearr_24985;
})();var statearr_24986_25031 = state_24975__$1;(statearr_24986_25031[(2)] = null);
(statearr_24986_25031[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24976 === (13)))
{var inst_24930 = (state_24975[(10)]);var inst_24932 = cljs.core.chunked_seq_QMARK_.call(null,inst_24930);var state_24975__$1 = state_24975;if(inst_24932)
{var statearr_24987_25032 = state_24975__$1;(statearr_24987_25032[(1)] = (16));
} else
{var statearr_24988_25033 = state_24975__$1;(statearr_24988_25033[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24976 === (22)))
{var inst_24960 = (state_24975[(2)]);var state_24975__$1 = state_24975;if(cljs.core.truth_(inst_24960))
{var statearr_24989_25034 = state_24975__$1;(statearr_24989_25034[(1)] = (23));
} else
{var statearr_24990_25035 = state_24975__$1;(statearr_24990_25035[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24976 === (6)))
{var inst_24906 = (state_24975[(8)]);var inst_24954 = (state_24975[(7)]);var inst_24956 = (state_24975[(11)]);var inst_24954__$1 = topic_fn.call(null,inst_24906);var inst_24955 = cljs.core.deref.call(null,mults);var inst_24956__$1 = cljs.core.get.call(null,inst_24955,inst_24954__$1);var state_24975__$1 = (function (){var statearr_24991 = state_24975;(statearr_24991[(7)] = inst_24954__$1);
(statearr_24991[(11)] = inst_24956__$1);
return statearr_24991;
})();if(cljs.core.truth_(inst_24956__$1))
{var statearr_24992_25036 = state_24975__$1;(statearr_24992_25036[(1)] = (19));
} else
{var statearr_24993_25037 = state_24975__$1;(statearr_24993_25037[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24976 === (25)))
{var inst_24965 = (state_24975[(2)]);var state_24975__$1 = state_24975;var statearr_24994_25038 = state_24975__$1;(statearr_24994_25038[(2)] = inst_24965);
(statearr_24994_25038[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24976 === (17)))
{var inst_24930 = (state_24975[(10)]);var inst_24939 = cljs.core.first.call(null,inst_24930);var inst_24940 = cljs.core.async.muxch_STAR_.call(null,inst_24939);var inst_24941 = cljs.core.async.close_BANG_.call(null,inst_24940);var inst_24942 = cljs.core.next.call(null,inst_24930);var inst_24916 = inst_24942;var inst_24917 = null;var inst_24918 = (0);var inst_24919 = (0);var state_24975__$1 = (function (){var statearr_24995 = state_24975;(statearr_24995[(12)] = inst_24918);
(statearr_24995[(13)] = inst_24941);
(statearr_24995[(14)] = inst_24916);
(statearr_24995[(15)] = inst_24919);
(statearr_24995[(16)] = inst_24917);
return statearr_24995;
})();var statearr_24996_25039 = state_24975__$1;(statearr_24996_25039[(2)] = null);
(statearr_24996_25039[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24976 === (3)))
{var inst_24973 = (state_24975[(2)]);var state_24975__$1 = state_24975;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24975__$1,inst_24973);
} else
{if((state_val_24976 === (12)))
{var inst_24950 = (state_24975[(2)]);var state_24975__$1 = state_24975;var statearr_24997_25040 = state_24975__$1;(statearr_24997_25040[(2)] = inst_24950);
(statearr_24997_25040[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24976 === (2)))
{var state_24975__$1 = state_24975;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24975__$1,(4),ch);
} else
{if((state_val_24976 === (23)))
{var state_24975__$1 = state_24975;var statearr_24998_25041 = state_24975__$1;(statearr_24998_25041[(2)] = null);
(statearr_24998_25041[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24976 === (19)))
{var inst_24906 = (state_24975[(8)]);var inst_24956 = (state_24975[(11)]);var inst_24958 = cljs.core.async.muxch_STAR_.call(null,inst_24956);var state_24975__$1 = state_24975;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24975__$1,(22),inst_24958,inst_24906);
} else
{if((state_val_24976 === (11)))
{var inst_24930 = (state_24975[(10)]);var inst_24916 = (state_24975[(14)]);var inst_24930__$1 = cljs.core.seq.call(null,inst_24916);var state_24975__$1 = (function (){var statearr_24999 = state_24975;(statearr_24999[(10)] = inst_24930__$1);
return statearr_24999;
})();if(inst_24930__$1)
{var statearr_25000_25042 = state_24975__$1;(statearr_25000_25042[(1)] = (13));
} else
{var statearr_25001_25043 = state_24975__$1;(statearr_25001_25043[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24976 === (9)))
{var inst_24952 = (state_24975[(2)]);var state_24975__$1 = state_24975;var statearr_25002_25044 = state_24975__$1;(statearr_25002_25044[(2)] = inst_24952);
(statearr_25002_25044[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24976 === (5)))
{var inst_24913 = cljs.core.deref.call(null,mults);var inst_24914 = cljs.core.vals.call(null,inst_24913);var inst_24915 = cljs.core.seq.call(null,inst_24914);var inst_24916 = inst_24915;var inst_24917 = null;var inst_24918 = (0);var inst_24919 = (0);var state_24975__$1 = (function (){var statearr_25003 = state_24975;(statearr_25003[(12)] = inst_24918);
(statearr_25003[(14)] = inst_24916);
(statearr_25003[(15)] = inst_24919);
(statearr_25003[(16)] = inst_24917);
return statearr_25003;
})();var statearr_25004_25045 = state_24975__$1;(statearr_25004_25045[(2)] = null);
(statearr_25004_25045[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24976 === (14)))
{var state_24975__$1 = state_24975;var statearr_25008_25046 = state_24975__$1;(statearr_25008_25046[(2)] = null);
(statearr_25008_25046[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24976 === (16)))
{var inst_24930 = (state_24975[(10)]);var inst_24934 = cljs.core.chunk_first.call(null,inst_24930);var inst_24935 = cljs.core.chunk_rest.call(null,inst_24930);var inst_24936 = cljs.core.count.call(null,inst_24934);var inst_24916 = inst_24935;var inst_24917 = inst_24934;var inst_24918 = inst_24936;var inst_24919 = (0);var state_24975__$1 = (function (){var statearr_25009 = state_24975;(statearr_25009[(12)] = inst_24918);
(statearr_25009[(14)] = inst_24916);
(statearr_25009[(15)] = inst_24919);
(statearr_25009[(16)] = inst_24917);
return statearr_25009;
})();var statearr_25010_25047 = state_24975__$1;(statearr_25010_25047[(2)] = null);
(statearr_25010_25047[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24976 === (10)))
{var inst_24918 = (state_24975[(12)]);var inst_24916 = (state_24975[(14)]);var inst_24919 = (state_24975[(15)]);var inst_24917 = (state_24975[(16)]);var inst_24924 = cljs.core._nth.call(null,inst_24917,inst_24919);var inst_24925 = cljs.core.async.muxch_STAR_.call(null,inst_24924);var inst_24926 = cljs.core.async.close_BANG_.call(null,inst_24925);var inst_24927 = (inst_24919 + (1));var tmp25005 = inst_24918;var tmp25006 = inst_24916;var tmp25007 = inst_24917;var inst_24916__$1 = tmp25006;var inst_24917__$1 = tmp25007;var inst_24918__$1 = tmp25005;var inst_24919__$1 = inst_24927;var state_24975__$1 = (function (){var statearr_25011 = state_24975;(statearr_25011[(12)] = inst_24918__$1);
(statearr_25011[(17)] = inst_24926);
(statearr_25011[(14)] = inst_24916__$1);
(statearr_25011[(15)] = inst_24919__$1);
(statearr_25011[(16)] = inst_24917__$1);
return statearr_25011;
})();var statearr_25012_25048 = state_24975__$1;(statearr_25012_25048[(2)] = null);
(statearr_25012_25048[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24976 === (18)))
{var inst_24945 = (state_24975[(2)]);var state_24975__$1 = state_24975;var statearr_25013_25049 = state_24975__$1;(statearr_25013_25049[(2)] = inst_24945);
(statearr_25013_25049[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24976 === (8)))
{var inst_24918 = (state_24975[(12)]);var inst_24919 = (state_24975[(15)]);var inst_24921 = (inst_24919 < inst_24918);var inst_24922 = inst_24921;var state_24975__$1 = state_24975;if(cljs.core.truth_(inst_24922))
{var statearr_25014_25050 = state_24975__$1;(statearr_25014_25050[(1)] = (10));
} else
{var statearr_25015_25051 = state_24975__$1;(statearr_25015_25051[(1)] = (11));
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
});})(c__9125__auto___25023,mults,ensure_mult,p))
;return ((function (switch__9110__auto__,c__9125__auto___25023,mults,ensure_mult,p){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25019[(0)] = state_machine__9111__auto__);
(statearr_25019[(1)] = (1));
return statearr_25019;
});
var state_machine__9111__auto____1 = (function (state_24975){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24975);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25020){if((e25020 instanceof Object))
{var ex__9114__auto__ = e25020;var statearr_25021_25052 = state_24975;(statearr_25021_25052[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24975);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25020;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25053 = state_24975;
state_24975 = G__25053;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24975){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25023,mults,ensure_mult,p))
})();var state__9127__auto__ = (function (){var statearr_25022 = f__9126__auto__.call(null);(statearr_25022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25023);
return statearr_25022;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25023,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__9125__auto___25190 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25190,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25190,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25160){var state_val_25161 = (state_25160[(1)]);if((state_val_25161 === (7)))
{var state_25160__$1 = state_25160;var statearr_25162_25191 = state_25160__$1;(statearr_25162_25191[(2)] = null);
(statearr_25162_25191[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25161 === (1)))
{var state_25160__$1 = state_25160;var statearr_25163_25192 = state_25160__$1;(statearr_25163_25192[(2)] = null);
(statearr_25163_25192[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25161 === (4)))
{var inst_25124 = (state_25160[(7)]);var inst_25126 = (inst_25124 < cnt);var state_25160__$1 = state_25160;if(cljs.core.truth_(inst_25126))
{var statearr_25164_25193 = state_25160__$1;(statearr_25164_25193[(1)] = (6));
} else
{var statearr_25165_25194 = state_25160__$1;(statearr_25165_25194[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25161 === (15)))
{var inst_25156 = (state_25160[(2)]);var state_25160__$1 = state_25160;var statearr_25166_25195 = state_25160__$1;(statearr_25166_25195[(2)] = inst_25156);
(statearr_25166_25195[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25161 === (13)))
{var inst_25149 = cljs.core.async.close_BANG_.call(null,out);var state_25160__$1 = state_25160;var statearr_25167_25196 = state_25160__$1;(statearr_25167_25196[(2)] = inst_25149);
(statearr_25167_25196[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25161 === (6)))
{var state_25160__$1 = state_25160;var statearr_25168_25197 = state_25160__$1;(statearr_25168_25197[(2)] = null);
(statearr_25168_25197[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25161 === (3)))
{var inst_25158 = (state_25160[(2)]);var state_25160__$1 = state_25160;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25160__$1,inst_25158);
} else
{if((state_val_25161 === (12)))
{var inst_25146 = (state_25160[(8)]);var inst_25146__$1 = (state_25160[(2)]);var inst_25147 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25146__$1);var state_25160__$1 = (function (){var statearr_25169 = state_25160;(statearr_25169[(8)] = inst_25146__$1);
return statearr_25169;
})();if(cljs.core.truth_(inst_25147))
{var statearr_25170_25198 = state_25160__$1;(statearr_25170_25198[(1)] = (13));
} else
{var statearr_25171_25199 = state_25160__$1;(statearr_25171_25199[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25161 === (2)))
{var inst_25123 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_25124 = (0);var state_25160__$1 = (function (){var statearr_25172 = state_25160;(statearr_25172[(7)] = inst_25124);
(statearr_25172[(9)] = inst_25123);
return statearr_25172;
})();var statearr_25173_25200 = state_25160__$1;(statearr_25173_25200[(2)] = null);
(statearr_25173_25200[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25161 === (11)))
{var inst_25124 = (state_25160[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25160,(10),Object,null,(9));var inst_25133 = chs__$1.call(null,inst_25124);var inst_25134 = done.call(null,inst_25124);var inst_25135 = cljs.core.async.take_BANG_.call(null,inst_25133,inst_25134);var state_25160__$1 = state_25160;var statearr_25174_25201 = state_25160__$1;(statearr_25174_25201[(2)] = inst_25135);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25160__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25161 === (9)))
{var inst_25124 = (state_25160[(7)]);var inst_25137 = (state_25160[(2)]);var inst_25138 = (inst_25124 + (1));var inst_25124__$1 = inst_25138;var state_25160__$1 = (function (){var statearr_25175 = state_25160;(statearr_25175[(7)] = inst_25124__$1);
(statearr_25175[(10)] = inst_25137);
return statearr_25175;
})();var statearr_25176_25202 = state_25160__$1;(statearr_25176_25202[(2)] = null);
(statearr_25176_25202[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25161 === (5)))
{var inst_25144 = (state_25160[(2)]);var state_25160__$1 = (function (){var statearr_25177 = state_25160;(statearr_25177[(11)] = inst_25144);
return statearr_25177;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25160__$1,(12),dchan);
} else
{if((state_val_25161 === (14)))
{var inst_25146 = (state_25160[(8)]);var inst_25151 = cljs.core.apply.call(null,f,inst_25146);var state_25160__$1 = state_25160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25160__$1,(16),out,inst_25151);
} else
{if((state_val_25161 === (16)))
{var inst_25153 = (state_25160[(2)]);var state_25160__$1 = (function (){var statearr_25178 = state_25160;(statearr_25178[(12)] = inst_25153);
return statearr_25178;
})();var statearr_25179_25203 = state_25160__$1;(statearr_25179_25203[(2)] = null);
(statearr_25179_25203[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25161 === (10)))
{var inst_25128 = (state_25160[(2)]);var inst_25129 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_25160__$1 = (function (){var statearr_25180 = state_25160;(statearr_25180[(13)] = inst_25128);
return statearr_25180;
})();var statearr_25181_25204 = state_25160__$1;(statearr_25181_25204[(2)] = inst_25129);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25160__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25161 === (8)))
{var inst_25142 = (state_25160[(2)]);var state_25160__$1 = state_25160;var statearr_25182_25205 = state_25160__$1;(statearr_25182_25205[(2)] = inst_25142);
(statearr_25182_25205[(1)] = (5));
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
});})(c__9125__auto___25190,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___25190,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25186[(0)] = state_machine__9111__auto__);
(statearr_25186[(1)] = (1));
return statearr_25186;
});
var state_machine__9111__auto____1 = (function (state_25160){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25160);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25187){if((e25187 instanceof Object))
{var ex__9114__auto__ = e25187;var statearr_25188_25206 = state_25160;(statearr_25188_25206[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25160);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25187;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25207 = state_25160;
state_25160 = G__25207;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25160){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25190,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_25189 = f__9126__auto__.call(null);(statearr_25189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25190);
return statearr_25189;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25190,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25315 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25315,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25315,out){
return (function (state_25291){var state_val_25292 = (state_25291[(1)]);if((state_val_25292 === (7)))
{var inst_25270 = (state_25291[(7)]);var inst_25271 = (state_25291[(8)]);var inst_25270__$1 = (state_25291[(2)]);var inst_25271__$1 = cljs.core.nth.call(null,inst_25270__$1,(0),null);var inst_25272 = cljs.core.nth.call(null,inst_25270__$1,(1),null);var inst_25273 = (inst_25271__$1 == null);var state_25291__$1 = (function (){var statearr_25293 = state_25291;(statearr_25293[(9)] = inst_25272);
(statearr_25293[(7)] = inst_25270__$1);
(statearr_25293[(8)] = inst_25271__$1);
return statearr_25293;
})();if(cljs.core.truth_(inst_25273))
{var statearr_25294_25316 = state_25291__$1;(statearr_25294_25316[(1)] = (8));
} else
{var statearr_25295_25317 = state_25291__$1;(statearr_25295_25317[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25292 === (1)))
{var inst_25262 = cljs.core.vec.call(null,chs);var inst_25263 = inst_25262;var state_25291__$1 = (function (){var statearr_25296 = state_25291;(statearr_25296[(10)] = inst_25263);
return statearr_25296;
})();var statearr_25297_25318 = state_25291__$1;(statearr_25297_25318[(2)] = null);
(statearr_25297_25318[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25292 === (4)))
{var inst_25263 = (state_25291[(10)]);var state_25291__$1 = state_25291;return cljs.core.async.ioc_alts_BANG_.call(null,state_25291__$1,(7),inst_25263);
} else
{if((state_val_25292 === (6)))
{var inst_25287 = (state_25291[(2)]);var state_25291__$1 = state_25291;var statearr_25298_25319 = state_25291__$1;(statearr_25298_25319[(2)] = inst_25287);
(statearr_25298_25319[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25292 === (3)))
{var inst_25289 = (state_25291[(2)]);var state_25291__$1 = state_25291;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25291__$1,inst_25289);
} else
{if((state_val_25292 === (2)))
{var inst_25263 = (state_25291[(10)]);var inst_25265 = cljs.core.count.call(null,inst_25263);var inst_25266 = (inst_25265 > (0));var state_25291__$1 = state_25291;if(cljs.core.truth_(inst_25266))
{var statearr_25300_25320 = state_25291__$1;(statearr_25300_25320[(1)] = (4));
} else
{var statearr_25301_25321 = state_25291__$1;(statearr_25301_25321[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25292 === (11)))
{var inst_25263 = (state_25291[(10)]);var inst_25280 = (state_25291[(2)]);var tmp25299 = inst_25263;var inst_25263__$1 = tmp25299;var state_25291__$1 = (function (){var statearr_25302 = state_25291;(statearr_25302[(11)] = inst_25280);
(statearr_25302[(10)] = inst_25263__$1);
return statearr_25302;
})();var statearr_25303_25322 = state_25291__$1;(statearr_25303_25322[(2)] = null);
(statearr_25303_25322[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25292 === (9)))
{var inst_25271 = (state_25291[(8)]);var state_25291__$1 = state_25291;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25291__$1,(11),out,inst_25271);
} else
{if((state_val_25292 === (5)))
{var inst_25285 = cljs.core.async.close_BANG_.call(null,out);var state_25291__$1 = state_25291;var statearr_25304_25323 = state_25291__$1;(statearr_25304_25323[(2)] = inst_25285);
(statearr_25304_25323[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25292 === (10)))
{var inst_25283 = (state_25291[(2)]);var state_25291__$1 = state_25291;var statearr_25305_25324 = state_25291__$1;(statearr_25305_25324[(2)] = inst_25283);
(statearr_25305_25324[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25292 === (8)))
{var inst_25272 = (state_25291[(9)]);var inst_25270 = (state_25291[(7)]);var inst_25271 = (state_25291[(8)]);var inst_25263 = (state_25291[(10)]);var inst_25275 = (function (){var c = inst_25272;var v = inst_25271;var vec__25268 = inst_25270;var cs = inst_25263;return ((function (c,v,vec__25268,cs,inst_25272,inst_25270,inst_25271,inst_25263,state_val_25292,c__9125__auto___25315,out){
return (function (p1__25208_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25208_SHARP_);
});
;})(c,v,vec__25268,cs,inst_25272,inst_25270,inst_25271,inst_25263,state_val_25292,c__9125__auto___25315,out))
})();var inst_25276 = cljs.core.filterv.call(null,inst_25275,inst_25263);var inst_25263__$1 = inst_25276;var state_25291__$1 = (function (){var statearr_25306 = state_25291;(statearr_25306[(10)] = inst_25263__$1);
return statearr_25306;
})();var statearr_25307_25325 = state_25291__$1;(statearr_25307_25325[(2)] = null);
(statearr_25307_25325[(1)] = (2));
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
});})(c__9125__auto___25315,out))
;return ((function (switch__9110__auto__,c__9125__auto___25315,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25311 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25311[(0)] = state_machine__9111__auto__);
(statearr_25311[(1)] = (1));
return statearr_25311;
});
var state_machine__9111__auto____1 = (function (state_25291){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25291);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25312){if((e25312 instanceof Object))
{var ex__9114__auto__ = e25312;var statearr_25313_25326 = state_25291;(statearr_25313_25326[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25291);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25312;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25327 = state_25291;
state_25291 = G__25327;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25291){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25315,out))
})();var state__9127__auto__ = (function (){var statearr_25314 = f__9126__auto__.call(null);(statearr_25314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25315);
return statearr_25314;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25315,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25420 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25420,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25420,out){
return (function (state_25397){var state_val_25398 = (state_25397[(1)]);if((state_val_25398 === (7)))
{var inst_25379 = (state_25397[(7)]);var inst_25379__$1 = (state_25397[(2)]);var inst_25380 = (inst_25379__$1 == null);var inst_25381 = cljs.core.not.call(null,inst_25380);var state_25397__$1 = (function (){var statearr_25399 = state_25397;(statearr_25399[(7)] = inst_25379__$1);
return statearr_25399;
})();if(inst_25381)
{var statearr_25400_25421 = state_25397__$1;(statearr_25400_25421[(1)] = (8));
} else
{var statearr_25401_25422 = state_25397__$1;(statearr_25401_25422[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25398 === (1)))
{var inst_25374 = (0);var state_25397__$1 = (function (){var statearr_25402 = state_25397;(statearr_25402[(8)] = inst_25374);
return statearr_25402;
})();var statearr_25403_25423 = state_25397__$1;(statearr_25403_25423[(2)] = null);
(statearr_25403_25423[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25398 === (4)))
{var state_25397__$1 = state_25397;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25397__$1,(7),ch);
} else
{if((state_val_25398 === (6)))
{var inst_25392 = (state_25397[(2)]);var state_25397__$1 = state_25397;var statearr_25404_25424 = state_25397__$1;(statearr_25404_25424[(2)] = inst_25392);
(statearr_25404_25424[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25398 === (3)))
{var inst_25394 = (state_25397[(2)]);var inst_25395 = cljs.core.async.close_BANG_.call(null,out);var state_25397__$1 = (function (){var statearr_25405 = state_25397;(statearr_25405[(9)] = inst_25394);
return statearr_25405;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25397__$1,inst_25395);
} else
{if((state_val_25398 === (2)))
{var inst_25374 = (state_25397[(8)]);var inst_25376 = (inst_25374 < n);var state_25397__$1 = state_25397;if(cljs.core.truth_(inst_25376))
{var statearr_25406_25425 = state_25397__$1;(statearr_25406_25425[(1)] = (4));
} else
{var statearr_25407_25426 = state_25397__$1;(statearr_25407_25426[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25398 === (11)))
{var inst_25374 = (state_25397[(8)]);var inst_25384 = (state_25397[(2)]);var inst_25385 = (inst_25374 + (1));var inst_25374__$1 = inst_25385;var state_25397__$1 = (function (){var statearr_25408 = state_25397;(statearr_25408[(10)] = inst_25384);
(statearr_25408[(8)] = inst_25374__$1);
return statearr_25408;
})();var statearr_25409_25427 = state_25397__$1;(statearr_25409_25427[(2)] = null);
(statearr_25409_25427[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25398 === (9)))
{var state_25397__$1 = state_25397;var statearr_25410_25428 = state_25397__$1;(statearr_25410_25428[(2)] = null);
(statearr_25410_25428[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25398 === (5)))
{var state_25397__$1 = state_25397;var statearr_25411_25429 = state_25397__$1;(statearr_25411_25429[(2)] = null);
(statearr_25411_25429[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25398 === (10)))
{var inst_25389 = (state_25397[(2)]);var state_25397__$1 = state_25397;var statearr_25412_25430 = state_25397__$1;(statearr_25412_25430[(2)] = inst_25389);
(statearr_25412_25430[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25398 === (8)))
{var inst_25379 = (state_25397[(7)]);var state_25397__$1 = state_25397;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25397__$1,(11),out,inst_25379);
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
});})(c__9125__auto___25420,out))
;return ((function (switch__9110__auto__,c__9125__auto___25420,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25416 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25416[(0)] = state_machine__9111__auto__);
(statearr_25416[(1)] = (1));
return statearr_25416;
});
var state_machine__9111__auto____1 = (function (state_25397){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25397);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25417){if((e25417 instanceof Object))
{var ex__9114__auto__ = e25417;var statearr_25418_25431 = state_25397;(statearr_25418_25431[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25397);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25417;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25432 = state_25397;
state_25397 = G__25432;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25397){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25420,out))
})();var state__9127__auto__ = (function (){var statearr_25419 = f__9126__auto__.call(null);(statearr_25419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25420);
return statearr_25419;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25420,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25440 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25440 = (function (ch,f,map_LT_,meta25441){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25441 = meta25441;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25440.cljs$lang$type = true;
cljs.core.async.t25440.cljs$lang$ctorStr = "cljs.core.async/t25440";
cljs.core.async.t25440.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25440");
});
cljs.core.async.t25440.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25440.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t25440.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25440.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25443 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25443 = (function (fn1,_,meta25441,ch,f,map_LT_,meta25444){
this.fn1 = fn1;
this._ = _;
this.meta25441 = meta25441;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25444 = meta25444;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25443.cljs$lang$type = true;
cljs.core.async.t25443.cljs$lang$ctorStr = "cljs.core.async/t25443";
cljs.core.async.t25443.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25443");
});})(___$1))
;
cljs.core.async.t25443.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25443.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25443.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25433_SHARP_){return f1.call(null,(((p1__25433_SHARP_ == null))?null:self__.f.call(null,p1__25433_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25443.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25445){var self__ = this;
var _25445__$1 = this;return self__.meta25444;
});})(___$1))
;
cljs.core.async.t25443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25445,meta25444__$1){var self__ = this;
var _25445__$1 = this;return (new cljs.core.async.t25443(self__.fn1,self__._,self__.meta25441,self__.ch,self__.f,self__.map_LT_,meta25444__$1));
});})(___$1))
;
cljs.core.async.__GT_t25443 = ((function (___$1){
return (function __GT_t25443(fn1__$1,___$2,meta25441__$1,ch__$2,f__$2,map_LT___$2,meta25444){return (new cljs.core.async.t25443(fn1__$1,___$2,meta25441__$1,ch__$2,f__$2,map_LT___$2,meta25444));
});})(___$1))
;
}
return (new cljs.core.async.t25443(fn1,___$1,self__.meta25441,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t25440.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25440.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25440.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25442){var self__ = this;
var _25442__$1 = this;return self__.meta25441;
});
cljs.core.async.t25440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25442,meta25441__$1){var self__ = this;
var _25442__$1 = this;return (new cljs.core.async.t25440(self__.ch,self__.f,self__.map_LT_,meta25441__$1));
});
cljs.core.async.__GT_t25440 = (function __GT_t25440(ch__$1,f__$1,map_LT___$1,meta25441){return (new cljs.core.async.t25440(ch__$1,f__$1,map_LT___$1,meta25441));
});
}
return (new cljs.core.async.t25440(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25449 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25449 = (function (ch,f,map_GT_,meta25450){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25450 = meta25450;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25449.cljs$lang$type = true;
cljs.core.async.t25449.cljs$lang$ctorStr = "cljs.core.async/t25449";
cljs.core.async.t25449.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25449");
});
cljs.core.async.t25449.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25449.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t25449.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25449.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25449.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25449.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25451){var self__ = this;
var _25451__$1 = this;return self__.meta25450;
});
cljs.core.async.t25449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25451,meta25450__$1){var self__ = this;
var _25451__$1 = this;return (new cljs.core.async.t25449(self__.ch,self__.f,self__.map_GT_,meta25450__$1));
});
cljs.core.async.__GT_t25449 = (function __GT_t25449(ch__$1,f__$1,map_GT___$1,meta25450){return (new cljs.core.async.t25449(ch__$1,f__$1,map_GT___$1,meta25450));
});
}
return (new cljs.core.async.t25449(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25455 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25455 = (function (ch,p,filter_GT_,meta25456){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25456 = meta25456;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25455.cljs$lang$type = true;
cljs.core.async.t25455.cljs$lang$ctorStr = "cljs.core.async/t25455";
cljs.core.async.t25455.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25455");
});
cljs.core.async.t25455.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25455.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t25455.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25455.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25455.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25455.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25455.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25457){var self__ = this;
var _25457__$1 = this;return self__.meta25456;
});
cljs.core.async.t25455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25457,meta25456__$1){var self__ = this;
var _25457__$1 = this;return (new cljs.core.async.t25455(self__.ch,self__.p,self__.filter_GT_,meta25456__$1));
});
cljs.core.async.__GT_t25455 = (function __GT_t25455(ch__$1,p__$1,filter_GT___$1,meta25456){return (new cljs.core.async.t25455(ch__$1,p__$1,filter_GT___$1,meta25456));
});
}
return (new cljs.core.async.t25455(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25540 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25540,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25540,out){
return (function (state_25519){var state_val_25520 = (state_25519[(1)]);if((state_val_25520 === (7)))
{var inst_25515 = (state_25519[(2)]);var state_25519__$1 = state_25519;var statearr_25521_25541 = state_25519__$1;(statearr_25521_25541[(2)] = inst_25515);
(statearr_25521_25541[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25520 === (1)))
{var state_25519__$1 = state_25519;var statearr_25522_25542 = state_25519__$1;(statearr_25522_25542[(2)] = null);
(statearr_25522_25542[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25520 === (4)))
{var inst_25501 = (state_25519[(7)]);var inst_25501__$1 = (state_25519[(2)]);var inst_25502 = (inst_25501__$1 == null);var state_25519__$1 = (function (){var statearr_25523 = state_25519;(statearr_25523[(7)] = inst_25501__$1);
return statearr_25523;
})();if(cljs.core.truth_(inst_25502))
{var statearr_25524_25543 = state_25519__$1;(statearr_25524_25543[(1)] = (5));
} else
{var statearr_25525_25544 = state_25519__$1;(statearr_25525_25544[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25520 === (6)))
{var inst_25501 = (state_25519[(7)]);var inst_25506 = p.call(null,inst_25501);var state_25519__$1 = state_25519;if(cljs.core.truth_(inst_25506))
{var statearr_25526_25545 = state_25519__$1;(statearr_25526_25545[(1)] = (8));
} else
{var statearr_25527_25546 = state_25519__$1;(statearr_25527_25546[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25520 === (3)))
{var inst_25517 = (state_25519[(2)]);var state_25519__$1 = state_25519;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25519__$1,inst_25517);
} else
{if((state_val_25520 === (2)))
{var state_25519__$1 = state_25519;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25519__$1,(4),ch);
} else
{if((state_val_25520 === (11)))
{var inst_25509 = (state_25519[(2)]);var state_25519__$1 = state_25519;var statearr_25528_25547 = state_25519__$1;(statearr_25528_25547[(2)] = inst_25509);
(statearr_25528_25547[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25520 === (9)))
{var state_25519__$1 = state_25519;var statearr_25529_25548 = state_25519__$1;(statearr_25529_25548[(2)] = null);
(statearr_25529_25548[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25520 === (5)))
{var inst_25504 = cljs.core.async.close_BANG_.call(null,out);var state_25519__$1 = state_25519;var statearr_25530_25549 = state_25519__$1;(statearr_25530_25549[(2)] = inst_25504);
(statearr_25530_25549[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25520 === (10)))
{var inst_25512 = (state_25519[(2)]);var state_25519__$1 = (function (){var statearr_25531 = state_25519;(statearr_25531[(8)] = inst_25512);
return statearr_25531;
})();var statearr_25532_25550 = state_25519__$1;(statearr_25532_25550[(2)] = null);
(statearr_25532_25550[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25520 === (8)))
{var inst_25501 = (state_25519[(7)]);var state_25519__$1 = state_25519;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25519__$1,(11),out,inst_25501);
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
});})(c__9125__auto___25540,out))
;return ((function (switch__9110__auto__,c__9125__auto___25540,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25536 = [null,null,null,null,null,null,null,null,null];(statearr_25536[(0)] = state_machine__9111__auto__);
(statearr_25536[(1)] = (1));
return statearr_25536;
});
var state_machine__9111__auto____1 = (function (state_25519){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25519);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25537){if((e25537 instanceof Object))
{var ex__9114__auto__ = e25537;var statearr_25538_25551 = state_25519;(statearr_25538_25551[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25519);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25537;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25552 = state_25519;
state_25519 = G__25552;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25519){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25540,out))
})();var state__9127__auto__ = (function (){var statearr_25539 = f__9126__auto__.call(null);(statearr_25539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25540);
return statearr_25539;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25540,out))
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
return (function (state_25718){var state_val_25719 = (state_25718[(1)]);if((state_val_25719 === (7)))
{var inst_25714 = (state_25718[(2)]);var state_25718__$1 = state_25718;var statearr_25720_25761 = state_25718__$1;(statearr_25720_25761[(2)] = inst_25714);
(statearr_25720_25761[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25719 === (20)))
{var inst_25684 = (state_25718[(7)]);var inst_25695 = (state_25718[(2)]);var inst_25696 = cljs.core.next.call(null,inst_25684);var inst_25670 = inst_25696;var inst_25671 = null;var inst_25672 = (0);var inst_25673 = (0);var state_25718__$1 = (function (){var statearr_25721 = state_25718;(statearr_25721[(8)] = inst_25673);
(statearr_25721[(9)] = inst_25671);
(statearr_25721[(10)] = inst_25672);
(statearr_25721[(11)] = inst_25670);
(statearr_25721[(12)] = inst_25695);
return statearr_25721;
})();var statearr_25722_25762 = state_25718__$1;(statearr_25722_25762[(2)] = null);
(statearr_25722_25762[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25719 === (1)))
{var state_25718__$1 = state_25718;var statearr_25723_25763 = state_25718__$1;(statearr_25723_25763[(2)] = null);
(statearr_25723_25763[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25719 === (4)))
{var inst_25659 = (state_25718[(13)]);var inst_25659__$1 = (state_25718[(2)]);var inst_25660 = (inst_25659__$1 == null);var state_25718__$1 = (function (){var statearr_25724 = state_25718;(statearr_25724[(13)] = inst_25659__$1);
return statearr_25724;
})();if(cljs.core.truth_(inst_25660))
{var statearr_25725_25764 = state_25718__$1;(statearr_25725_25764[(1)] = (5));
} else
{var statearr_25726_25765 = state_25718__$1;(statearr_25726_25765[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25719 === (15)))
{var state_25718__$1 = state_25718;var statearr_25730_25766 = state_25718__$1;(statearr_25730_25766[(2)] = null);
(statearr_25730_25766[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25719 === (21)))
{var state_25718__$1 = state_25718;var statearr_25731_25767 = state_25718__$1;(statearr_25731_25767[(2)] = null);
(statearr_25731_25767[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25719 === (13)))
{var inst_25673 = (state_25718[(8)]);var inst_25671 = (state_25718[(9)]);var inst_25672 = (state_25718[(10)]);var inst_25670 = (state_25718[(11)]);var inst_25680 = (state_25718[(2)]);var inst_25681 = (inst_25673 + (1));var tmp25727 = inst_25671;var tmp25728 = inst_25672;var tmp25729 = inst_25670;var inst_25670__$1 = tmp25729;var inst_25671__$1 = tmp25727;var inst_25672__$1 = tmp25728;var inst_25673__$1 = inst_25681;var state_25718__$1 = (function (){var statearr_25732 = state_25718;(statearr_25732[(14)] = inst_25680);
(statearr_25732[(8)] = inst_25673__$1);
(statearr_25732[(9)] = inst_25671__$1);
(statearr_25732[(10)] = inst_25672__$1);
(statearr_25732[(11)] = inst_25670__$1);
return statearr_25732;
})();var statearr_25733_25768 = state_25718__$1;(statearr_25733_25768[(2)] = null);
(statearr_25733_25768[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25719 === (22)))
{var state_25718__$1 = state_25718;var statearr_25734_25769 = state_25718__$1;(statearr_25734_25769[(2)] = null);
(statearr_25734_25769[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25719 === (6)))
{var inst_25659 = (state_25718[(13)]);var inst_25668 = f.call(null,inst_25659);var inst_25669 = cljs.core.seq.call(null,inst_25668);var inst_25670 = inst_25669;var inst_25671 = null;var inst_25672 = (0);var inst_25673 = (0);var state_25718__$1 = (function (){var statearr_25735 = state_25718;(statearr_25735[(8)] = inst_25673);
(statearr_25735[(9)] = inst_25671);
(statearr_25735[(10)] = inst_25672);
(statearr_25735[(11)] = inst_25670);
return statearr_25735;
})();var statearr_25736_25770 = state_25718__$1;(statearr_25736_25770[(2)] = null);
(statearr_25736_25770[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25719 === (17)))
{var inst_25684 = (state_25718[(7)]);var inst_25688 = cljs.core.chunk_first.call(null,inst_25684);var inst_25689 = cljs.core.chunk_rest.call(null,inst_25684);var inst_25690 = cljs.core.count.call(null,inst_25688);var inst_25670 = inst_25689;var inst_25671 = inst_25688;var inst_25672 = inst_25690;var inst_25673 = (0);var state_25718__$1 = (function (){var statearr_25737 = state_25718;(statearr_25737[(8)] = inst_25673);
(statearr_25737[(9)] = inst_25671);
(statearr_25737[(10)] = inst_25672);
(statearr_25737[(11)] = inst_25670);
return statearr_25737;
})();var statearr_25738_25771 = state_25718__$1;(statearr_25738_25771[(2)] = null);
(statearr_25738_25771[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25719 === (3)))
{var inst_25716 = (state_25718[(2)]);var state_25718__$1 = state_25718;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25718__$1,inst_25716);
} else
{if((state_val_25719 === (12)))
{var inst_25704 = (state_25718[(2)]);var state_25718__$1 = state_25718;var statearr_25739_25772 = state_25718__$1;(statearr_25739_25772[(2)] = inst_25704);
(statearr_25739_25772[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25719 === (2)))
{var state_25718__$1 = state_25718;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25718__$1,(4),in$);
} else
{if((state_val_25719 === (23)))
{var inst_25712 = (state_25718[(2)]);var state_25718__$1 = state_25718;var statearr_25740_25773 = state_25718__$1;(statearr_25740_25773[(2)] = inst_25712);
(statearr_25740_25773[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25719 === (19)))
{var inst_25699 = (state_25718[(2)]);var state_25718__$1 = state_25718;var statearr_25741_25774 = state_25718__$1;(statearr_25741_25774[(2)] = inst_25699);
(statearr_25741_25774[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25719 === (11)))
{var inst_25684 = (state_25718[(7)]);var inst_25670 = (state_25718[(11)]);var inst_25684__$1 = cljs.core.seq.call(null,inst_25670);var state_25718__$1 = (function (){var statearr_25742 = state_25718;(statearr_25742[(7)] = inst_25684__$1);
return statearr_25742;
})();if(inst_25684__$1)
{var statearr_25743_25775 = state_25718__$1;(statearr_25743_25775[(1)] = (14));
} else
{var statearr_25744_25776 = state_25718__$1;(statearr_25744_25776[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25719 === (9)))
{var inst_25706 = (state_25718[(2)]);var inst_25707 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_25718__$1 = (function (){var statearr_25745 = state_25718;(statearr_25745[(15)] = inst_25706);
return statearr_25745;
})();if(cljs.core.truth_(inst_25707))
{var statearr_25746_25777 = state_25718__$1;(statearr_25746_25777[(1)] = (21));
} else
{var statearr_25747_25778 = state_25718__$1;(statearr_25747_25778[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25719 === (5)))
{var inst_25662 = cljs.core.async.close_BANG_.call(null,out);var state_25718__$1 = state_25718;var statearr_25748_25779 = state_25718__$1;(statearr_25748_25779[(2)] = inst_25662);
(statearr_25748_25779[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25719 === (14)))
{var inst_25684 = (state_25718[(7)]);var inst_25686 = cljs.core.chunked_seq_QMARK_.call(null,inst_25684);var state_25718__$1 = state_25718;if(inst_25686)
{var statearr_25749_25780 = state_25718__$1;(statearr_25749_25780[(1)] = (17));
} else
{var statearr_25750_25781 = state_25718__$1;(statearr_25750_25781[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25719 === (16)))
{var inst_25702 = (state_25718[(2)]);var state_25718__$1 = state_25718;var statearr_25751_25782 = state_25718__$1;(statearr_25751_25782[(2)] = inst_25702);
(statearr_25751_25782[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25719 === (10)))
{var inst_25673 = (state_25718[(8)]);var inst_25671 = (state_25718[(9)]);var inst_25678 = cljs.core._nth.call(null,inst_25671,inst_25673);var state_25718__$1 = state_25718;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25718__$1,(13),out,inst_25678);
} else
{if((state_val_25719 === (18)))
{var inst_25684 = (state_25718[(7)]);var inst_25693 = cljs.core.first.call(null,inst_25684);var state_25718__$1 = state_25718;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25718__$1,(20),out,inst_25693);
} else
{if((state_val_25719 === (8)))
{var inst_25673 = (state_25718[(8)]);var inst_25672 = (state_25718[(10)]);var inst_25675 = (inst_25673 < inst_25672);var inst_25676 = inst_25675;var state_25718__$1 = state_25718;if(cljs.core.truth_(inst_25676))
{var statearr_25752_25783 = state_25718__$1;(statearr_25752_25783[(1)] = (10));
} else
{var statearr_25753_25784 = state_25718__$1;(statearr_25753_25784[(1)] = (11));
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
var state_machine__9111__auto____0 = (function (){var statearr_25757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25757[(0)] = state_machine__9111__auto__);
(statearr_25757[(1)] = (1));
return statearr_25757;
});
var state_machine__9111__auto____1 = (function (state_25718){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25718);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25758){if((e25758 instanceof Object))
{var ex__9114__auto__ = e25758;var statearr_25759_25785 = state_25718;(statearr_25759_25785[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25718);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25758;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25786 = state_25718;
state_25718 = G__25786;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25718){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_25760 = f__9126__auto__.call(null);(statearr_25760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_25760;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25883 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25883,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25883,out){
return (function (state_25858){var state_val_25859 = (state_25858[(1)]);if((state_val_25859 === (7)))
{var inst_25853 = (state_25858[(2)]);var state_25858__$1 = state_25858;var statearr_25860_25884 = state_25858__$1;(statearr_25860_25884[(2)] = inst_25853);
(statearr_25860_25884[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25859 === (1)))
{var inst_25835 = null;var state_25858__$1 = (function (){var statearr_25861 = state_25858;(statearr_25861[(7)] = inst_25835);
return statearr_25861;
})();var statearr_25862_25885 = state_25858__$1;(statearr_25862_25885[(2)] = null);
(statearr_25862_25885[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25859 === (4)))
{var inst_25838 = (state_25858[(8)]);var inst_25838__$1 = (state_25858[(2)]);var inst_25839 = (inst_25838__$1 == null);var inst_25840 = cljs.core.not.call(null,inst_25839);var state_25858__$1 = (function (){var statearr_25863 = state_25858;(statearr_25863[(8)] = inst_25838__$1);
return statearr_25863;
})();if(inst_25840)
{var statearr_25864_25886 = state_25858__$1;(statearr_25864_25886[(1)] = (5));
} else
{var statearr_25865_25887 = state_25858__$1;(statearr_25865_25887[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25859 === (6)))
{var state_25858__$1 = state_25858;var statearr_25866_25888 = state_25858__$1;(statearr_25866_25888[(2)] = null);
(statearr_25866_25888[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25859 === (3)))
{var inst_25855 = (state_25858[(2)]);var inst_25856 = cljs.core.async.close_BANG_.call(null,out);var state_25858__$1 = (function (){var statearr_25867 = state_25858;(statearr_25867[(9)] = inst_25855);
return statearr_25867;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25858__$1,inst_25856);
} else
{if((state_val_25859 === (2)))
{var state_25858__$1 = state_25858;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25858__$1,(4),ch);
} else
{if((state_val_25859 === (11)))
{var inst_25838 = (state_25858[(8)]);var inst_25847 = (state_25858[(2)]);var inst_25835 = inst_25838;var state_25858__$1 = (function (){var statearr_25868 = state_25858;(statearr_25868[(10)] = inst_25847);
(statearr_25868[(7)] = inst_25835);
return statearr_25868;
})();var statearr_25869_25889 = state_25858__$1;(statearr_25869_25889[(2)] = null);
(statearr_25869_25889[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25859 === (9)))
{var inst_25838 = (state_25858[(8)]);var state_25858__$1 = state_25858;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25858__$1,(11),out,inst_25838);
} else
{if((state_val_25859 === (5)))
{var inst_25838 = (state_25858[(8)]);var inst_25835 = (state_25858[(7)]);var inst_25842 = cljs.core._EQ_.call(null,inst_25838,inst_25835);var state_25858__$1 = state_25858;if(inst_25842)
{var statearr_25871_25890 = state_25858__$1;(statearr_25871_25890[(1)] = (8));
} else
{var statearr_25872_25891 = state_25858__$1;(statearr_25872_25891[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25859 === (10)))
{var inst_25850 = (state_25858[(2)]);var state_25858__$1 = state_25858;var statearr_25873_25892 = state_25858__$1;(statearr_25873_25892[(2)] = inst_25850);
(statearr_25873_25892[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25859 === (8)))
{var inst_25835 = (state_25858[(7)]);var tmp25870 = inst_25835;var inst_25835__$1 = tmp25870;var state_25858__$1 = (function (){var statearr_25874 = state_25858;(statearr_25874[(7)] = inst_25835__$1);
return statearr_25874;
})();var statearr_25875_25893 = state_25858__$1;(statearr_25875_25893[(2)] = null);
(statearr_25875_25893[(1)] = (2));
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
});})(c__9125__auto___25883,out))
;return ((function (switch__9110__auto__,c__9125__auto___25883,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25879 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25879[(0)] = state_machine__9111__auto__);
(statearr_25879[(1)] = (1));
return statearr_25879;
});
var state_machine__9111__auto____1 = (function (state_25858){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25858);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25880){if((e25880 instanceof Object))
{var ex__9114__auto__ = e25880;var statearr_25881_25894 = state_25858;(statearr_25881_25894[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25858);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25880;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25895 = state_25858;
state_25858 = G__25895;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25858){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25883,out))
})();var state__9127__auto__ = (function (){var statearr_25882 = f__9126__auto__.call(null);(statearr_25882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25883);
return statearr_25882;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25883,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26030 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26030,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26030,out){
return (function (state_26000){var state_val_26001 = (state_26000[(1)]);if((state_val_26001 === (7)))
{var inst_25996 = (state_26000[(2)]);var state_26000__$1 = state_26000;var statearr_26002_26031 = state_26000__$1;(statearr_26002_26031[(2)] = inst_25996);
(statearr_26002_26031[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26001 === (1)))
{var inst_25963 = (new Array(n));var inst_25964 = inst_25963;var inst_25965 = (0);var state_26000__$1 = (function (){var statearr_26003 = state_26000;(statearr_26003[(7)] = inst_25964);
(statearr_26003[(8)] = inst_25965);
return statearr_26003;
})();var statearr_26004_26032 = state_26000__$1;(statearr_26004_26032[(2)] = null);
(statearr_26004_26032[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26001 === (4)))
{var inst_25968 = (state_26000[(9)]);var inst_25968__$1 = (state_26000[(2)]);var inst_25969 = (inst_25968__$1 == null);var inst_25970 = cljs.core.not.call(null,inst_25969);var state_26000__$1 = (function (){var statearr_26005 = state_26000;(statearr_26005[(9)] = inst_25968__$1);
return statearr_26005;
})();if(inst_25970)
{var statearr_26006_26033 = state_26000__$1;(statearr_26006_26033[(1)] = (5));
} else
{var statearr_26007_26034 = state_26000__$1;(statearr_26007_26034[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26001 === (15)))
{var inst_25990 = (state_26000[(2)]);var state_26000__$1 = state_26000;var statearr_26008_26035 = state_26000__$1;(statearr_26008_26035[(2)] = inst_25990);
(statearr_26008_26035[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26001 === (13)))
{var state_26000__$1 = state_26000;var statearr_26009_26036 = state_26000__$1;(statearr_26009_26036[(2)] = null);
(statearr_26009_26036[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26001 === (6)))
{var inst_25965 = (state_26000[(8)]);var inst_25986 = (inst_25965 > (0));var state_26000__$1 = state_26000;if(cljs.core.truth_(inst_25986))
{var statearr_26010_26037 = state_26000__$1;(statearr_26010_26037[(1)] = (12));
} else
{var statearr_26011_26038 = state_26000__$1;(statearr_26011_26038[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26001 === (3)))
{var inst_25998 = (state_26000[(2)]);var state_26000__$1 = state_26000;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26000__$1,inst_25998);
} else
{if((state_val_26001 === (12)))
{var inst_25964 = (state_26000[(7)]);var inst_25988 = cljs.core.vec.call(null,inst_25964);var state_26000__$1 = state_26000;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26000__$1,(15),out,inst_25988);
} else
{if((state_val_26001 === (2)))
{var state_26000__$1 = state_26000;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26000__$1,(4),ch);
} else
{if((state_val_26001 === (11)))
{var inst_25980 = (state_26000[(2)]);var inst_25981 = (new Array(n));var inst_25964 = inst_25981;var inst_25965 = (0);var state_26000__$1 = (function (){var statearr_26012 = state_26000;(statearr_26012[(7)] = inst_25964);
(statearr_26012[(10)] = inst_25980);
(statearr_26012[(8)] = inst_25965);
return statearr_26012;
})();var statearr_26013_26039 = state_26000__$1;(statearr_26013_26039[(2)] = null);
(statearr_26013_26039[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26001 === (9)))
{var inst_25964 = (state_26000[(7)]);var inst_25978 = cljs.core.vec.call(null,inst_25964);var state_26000__$1 = state_26000;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26000__$1,(11),out,inst_25978);
} else
{if((state_val_26001 === (5)))
{var inst_25964 = (state_26000[(7)]);var inst_25968 = (state_26000[(9)]);var inst_25973 = (state_26000[(11)]);var inst_25965 = (state_26000[(8)]);var inst_25972 = (inst_25964[inst_25965] = inst_25968);var inst_25973__$1 = (inst_25965 + (1));var inst_25974 = (inst_25973__$1 < n);var state_26000__$1 = (function (){var statearr_26014 = state_26000;(statearr_26014[(12)] = inst_25972);
(statearr_26014[(11)] = inst_25973__$1);
return statearr_26014;
})();if(cljs.core.truth_(inst_25974))
{var statearr_26015_26040 = state_26000__$1;(statearr_26015_26040[(1)] = (8));
} else
{var statearr_26016_26041 = state_26000__$1;(statearr_26016_26041[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26001 === (14)))
{var inst_25993 = (state_26000[(2)]);var inst_25994 = cljs.core.async.close_BANG_.call(null,out);var state_26000__$1 = (function (){var statearr_26018 = state_26000;(statearr_26018[(13)] = inst_25993);
return statearr_26018;
})();var statearr_26019_26042 = state_26000__$1;(statearr_26019_26042[(2)] = inst_25994);
(statearr_26019_26042[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26001 === (10)))
{var inst_25984 = (state_26000[(2)]);var state_26000__$1 = state_26000;var statearr_26020_26043 = state_26000__$1;(statearr_26020_26043[(2)] = inst_25984);
(statearr_26020_26043[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26001 === (8)))
{var inst_25964 = (state_26000[(7)]);var inst_25973 = (state_26000[(11)]);var tmp26017 = inst_25964;var inst_25964__$1 = tmp26017;var inst_25965 = inst_25973;var state_26000__$1 = (function (){var statearr_26021 = state_26000;(statearr_26021[(7)] = inst_25964__$1);
(statearr_26021[(8)] = inst_25965);
return statearr_26021;
})();var statearr_26022_26044 = state_26000__$1;(statearr_26022_26044[(2)] = null);
(statearr_26022_26044[(1)] = (2));
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
});})(c__9125__auto___26030,out))
;return ((function (switch__9110__auto__,c__9125__auto___26030,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26026[(0)] = state_machine__9111__auto__);
(statearr_26026[(1)] = (1));
return statearr_26026;
});
var state_machine__9111__auto____1 = (function (state_26000){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26000);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26027){if((e26027 instanceof Object))
{var ex__9114__auto__ = e26027;var statearr_26028_26045 = state_26000;(statearr_26028_26045[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26000);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26027;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26046 = state_26000;
state_26000 = G__26046;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26000){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26030,out))
})();var state__9127__auto__ = (function (){var statearr_26029 = f__9126__auto__.call(null);(statearr_26029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26030);
return statearr_26029;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26030,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26189 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26189,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26189,out){
return (function (state_26159){var state_val_26160 = (state_26159[(1)]);if((state_val_26160 === (7)))
{var inst_26155 = (state_26159[(2)]);var state_26159__$1 = state_26159;var statearr_26161_26190 = state_26159__$1;(statearr_26161_26190[(2)] = inst_26155);
(statearr_26161_26190[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26160 === (1)))
{var inst_26118 = [];var inst_26119 = inst_26118;var inst_26120 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_26159__$1 = (function (){var statearr_26162 = state_26159;(statearr_26162[(7)] = inst_26120);
(statearr_26162[(8)] = inst_26119);
return statearr_26162;
})();var statearr_26163_26191 = state_26159__$1;(statearr_26163_26191[(2)] = null);
(statearr_26163_26191[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26160 === (4)))
{var inst_26123 = (state_26159[(9)]);var inst_26123__$1 = (state_26159[(2)]);var inst_26124 = (inst_26123__$1 == null);var inst_26125 = cljs.core.not.call(null,inst_26124);var state_26159__$1 = (function (){var statearr_26164 = state_26159;(statearr_26164[(9)] = inst_26123__$1);
return statearr_26164;
})();if(inst_26125)
{var statearr_26165_26192 = state_26159__$1;(statearr_26165_26192[(1)] = (5));
} else
{var statearr_26166_26193 = state_26159__$1;(statearr_26166_26193[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26160 === (15)))
{var inst_26149 = (state_26159[(2)]);var state_26159__$1 = state_26159;var statearr_26167_26194 = state_26159__$1;(statearr_26167_26194[(2)] = inst_26149);
(statearr_26167_26194[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26160 === (13)))
{var state_26159__$1 = state_26159;var statearr_26168_26195 = state_26159__$1;(statearr_26168_26195[(2)] = null);
(statearr_26168_26195[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26160 === (6)))
{var inst_26119 = (state_26159[(8)]);var inst_26144 = inst_26119.length;var inst_26145 = (inst_26144 > (0));var state_26159__$1 = state_26159;if(cljs.core.truth_(inst_26145))
{var statearr_26169_26196 = state_26159__$1;(statearr_26169_26196[(1)] = (12));
} else
{var statearr_26170_26197 = state_26159__$1;(statearr_26170_26197[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26160 === (3)))
{var inst_26157 = (state_26159[(2)]);var state_26159__$1 = state_26159;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26159__$1,inst_26157);
} else
{if((state_val_26160 === (12)))
{var inst_26119 = (state_26159[(8)]);var inst_26147 = cljs.core.vec.call(null,inst_26119);var state_26159__$1 = state_26159;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26159__$1,(15),out,inst_26147);
} else
{if((state_val_26160 === (2)))
{var state_26159__$1 = state_26159;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26159__$1,(4),ch);
} else
{if((state_val_26160 === (11)))
{var inst_26127 = (state_26159[(10)]);var inst_26123 = (state_26159[(9)]);var inst_26137 = (state_26159[(2)]);var inst_26138 = [];var inst_26139 = inst_26138.push(inst_26123);var inst_26119 = inst_26138;var inst_26120 = inst_26127;var state_26159__$1 = (function (){var statearr_26171 = state_26159;(statearr_26171[(7)] = inst_26120);
(statearr_26171[(11)] = inst_26139);
(statearr_26171[(12)] = inst_26137);
(statearr_26171[(8)] = inst_26119);
return statearr_26171;
})();var statearr_26172_26198 = state_26159__$1;(statearr_26172_26198[(2)] = null);
(statearr_26172_26198[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26160 === (9)))
{var inst_26119 = (state_26159[(8)]);var inst_26135 = cljs.core.vec.call(null,inst_26119);var state_26159__$1 = state_26159;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26159__$1,(11),out,inst_26135);
} else
{if((state_val_26160 === (5)))
{var inst_26120 = (state_26159[(7)]);var inst_26127 = (state_26159[(10)]);var inst_26123 = (state_26159[(9)]);var inst_26127__$1 = f.call(null,inst_26123);var inst_26128 = cljs.core._EQ_.call(null,inst_26127__$1,inst_26120);var inst_26129 = cljs.core.keyword_identical_QMARK_.call(null,inst_26120,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_26130 = (inst_26128) || (inst_26129);var state_26159__$1 = (function (){var statearr_26173 = state_26159;(statearr_26173[(10)] = inst_26127__$1);
return statearr_26173;
})();if(cljs.core.truth_(inst_26130))
{var statearr_26174_26199 = state_26159__$1;(statearr_26174_26199[(1)] = (8));
} else
{var statearr_26175_26200 = state_26159__$1;(statearr_26175_26200[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26160 === (14)))
{var inst_26152 = (state_26159[(2)]);var inst_26153 = cljs.core.async.close_BANG_.call(null,out);var state_26159__$1 = (function (){var statearr_26177 = state_26159;(statearr_26177[(13)] = inst_26152);
return statearr_26177;
})();var statearr_26178_26201 = state_26159__$1;(statearr_26178_26201[(2)] = inst_26153);
(statearr_26178_26201[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26160 === (10)))
{var inst_26142 = (state_26159[(2)]);var state_26159__$1 = state_26159;var statearr_26179_26202 = state_26159__$1;(statearr_26179_26202[(2)] = inst_26142);
(statearr_26179_26202[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26160 === (8)))
{var inst_26127 = (state_26159[(10)]);var inst_26123 = (state_26159[(9)]);var inst_26119 = (state_26159[(8)]);var inst_26132 = inst_26119.push(inst_26123);var tmp26176 = inst_26119;var inst_26119__$1 = tmp26176;var inst_26120 = inst_26127;var state_26159__$1 = (function (){var statearr_26180 = state_26159;(statearr_26180[(7)] = inst_26120);
(statearr_26180[(14)] = inst_26132);
(statearr_26180[(8)] = inst_26119__$1);
return statearr_26180;
})();var statearr_26181_26203 = state_26159__$1;(statearr_26181_26203[(2)] = null);
(statearr_26181_26203[(1)] = (2));
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
});})(c__9125__auto___26189,out))
;return ((function (switch__9110__auto__,c__9125__auto___26189,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26185[(0)] = state_machine__9111__auto__);
(statearr_26185[(1)] = (1));
return statearr_26185;
});
var state_machine__9111__auto____1 = (function (state_26159){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26159);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26186){if((e26186 instanceof Object))
{var ex__9114__auto__ = e26186;var statearr_26187_26204 = state_26159;(statearr_26187_26204[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26159);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26186;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26205 = state_26159;
state_26159 = G__26205;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26159){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26189,out))
})();var state__9127__auto__ = (function (){var statearr_26188 = f__9126__auto__.call(null);(statearr_26188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26189);
return statearr_26188;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26189,out))
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
