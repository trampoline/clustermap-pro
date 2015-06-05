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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t22904 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22904 = (function (f,fn_handler,meta22905){
this.f = f;
this.fn_handler = fn_handler;
this.meta22905 = meta22905;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22904.cljs$lang$type = true;
cljs.core.async.t22904.cljs$lang$ctorStr = "cljs.core.async/t22904";
cljs.core.async.t22904.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t22904");
});
cljs.core.async.t22904.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22904.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t22904.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t22904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22906){var self__ = this;
var _22906__$1 = this;return self__.meta22905;
});
cljs.core.async.t22904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22906,meta22905__$1){var self__ = this;
var _22906__$1 = this;return (new cljs.core.async.t22904(self__.f,self__.fn_handler,meta22905__$1));
});
cljs.core.async.__GT_t22904 = (function __GT_t22904(f__$1,fn_handler__$1,meta22905){return (new cljs.core.async.t22904(f__$1,fn_handler__$1,meta22905));
});
}
return (new cljs.core.async.t22904(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__22908 = buff;if(G__22908)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__22908.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__22908.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22908);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22908);
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
{var val_22909 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_22909);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_22909,ret){
return (function (){return fn1.call(null,val_22909);
});})(val_22909,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___22910 = n;var x_22911 = (0);while(true){
if((x_22911 < n__4508__auto___22910))
{(a[x_22911] = (0));
{
var G__22912 = (x_22911 + (1));
x_22911 = G__22912;
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
var G__22913 = (i + (1));
i = G__22913;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t22917 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22917 = (function (flag,alt_flag,meta22918){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22918 = meta22918;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22917.cljs$lang$type = true;
cljs.core.async.t22917.cljs$lang$ctorStr = "cljs.core.async/t22917";
cljs.core.async.t22917.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t22917");
});})(flag))
;
cljs.core.async.t22917.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22917.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t22917.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t22917.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22919){var self__ = this;
var _22919__$1 = this;return self__.meta22918;
});})(flag))
;
cljs.core.async.t22917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22919,meta22918__$1){var self__ = this;
var _22919__$1 = this;return (new cljs.core.async.t22917(self__.flag,self__.alt_flag,meta22918__$1));
});})(flag))
;
cljs.core.async.__GT_t22917 = ((function (flag){
return (function __GT_t22917(flag__$1,alt_flag__$1,meta22918){return (new cljs.core.async.t22917(flag__$1,alt_flag__$1,meta22918));
});})(flag))
;
}
return (new cljs.core.async.t22917(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t22923 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22923 = (function (cb,flag,alt_handler,meta22924){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22924 = meta22924;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22923.cljs$lang$type = true;
cljs.core.async.t22923.cljs$lang$ctorStr = "cljs.core.async/t22923";
cljs.core.async.t22923.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t22923");
});
cljs.core.async.t22923.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22923.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t22923.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t22923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22925){var self__ = this;
var _22925__$1 = this;return self__.meta22924;
});
cljs.core.async.t22923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22925,meta22924__$1){var self__ = this;
var _22925__$1 = this;return (new cljs.core.async.t22923(self__.cb,self__.flag,self__.alt_handler,meta22924__$1));
});
cljs.core.async.__GT_t22923 = (function __GT_t22923(cb__$1,flag__$1,alt_handler__$1,meta22924){return (new cljs.core.async.t22923(cb__$1,flag__$1,alt_handler__$1,meta22924));
});
}
return (new cljs.core.async.t22923(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22926_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22926_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22927_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22927_SHARP_,port], null));
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
var G__22928 = (i + (1));
i = G__22928;
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
var alts_BANG___delegate = function (ports,p__22929){var map__22931 = p__22929;var map__22931__$1 = ((cljs.core.seq_QMARK_.call(null,map__22931))?cljs.core.apply.call(null,cljs.core.hash_map,map__22931):map__22931);var opts = map__22931__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__22929 = null;if (arguments.length > 1) {
  p__22929 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__22929);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22932){
var ports = cljs.core.first(arglist__22932);
var p__22929 = cljs.core.rest(arglist__22932);
return alts_BANG___delegate(ports,p__22929);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__9125__auto___23027 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23027){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23027){
return (function (state_23003){var state_val_23004 = (state_23003[(1)]);if((state_val_23004 === (7)))
{var inst_22999 = (state_23003[(2)]);var state_23003__$1 = state_23003;var statearr_23005_23028 = state_23003__$1;(statearr_23005_23028[(2)] = inst_22999);
(statearr_23005_23028[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23004 === (1)))
{var state_23003__$1 = state_23003;var statearr_23006_23029 = state_23003__$1;(statearr_23006_23029[(2)] = null);
(statearr_23006_23029[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23004 === (4)))
{var inst_22982 = (state_23003[(7)]);var inst_22982__$1 = (state_23003[(2)]);var inst_22983 = (inst_22982__$1 == null);var state_23003__$1 = (function (){var statearr_23007 = state_23003;(statearr_23007[(7)] = inst_22982__$1);
return statearr_23007;
})();if(cljs.core.truth_(inst_22983))
{var statearr_23008_23030 = state_23003__$1;(statearr_23008_23030[(1)] = (5));
} else
{var statearr_23009_23031 = state_23003__$1;(statearr_23009_23031[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23004 === (13)))
{var state_23003__$1 = state_23003;var statearr_23010_23032 = state_23003__$1;(statearr_23010_23032[(2)] = null);
(statearr_23010_23032[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23004 === (6)))
{var inst_22982 = (state_23003[(7)]);var state_23003__$1 = state_23003;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23003__$1,(11),to,inst_22982);
} else
{if((state_val_23004 === (3)))
{var inst_23001 = (state_23003[(2)]);var state_23003__$1 = state_23003;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23003__$1,inst_23001);
} else
{if((state_val_23004 === (12)))
{var state_23003__$1 = state_23003;var statearr_23011_23033 = state_23003__$1;(statearr_23011_23033[(2)] = null);
(statearr_23011_23033[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23004 === (2)))
{var state_23003__$1 = state_23003;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23003__$1,(4),from);
} else
{if((state_val_23004 === (11)))
{var inst_22992 = (state_23003[(2)]);var state_23003__$1 = state_23003;if(cljs.core.truth_(inst_22992))
{var statearr_23012_23034 = state_23003__$1;(statearr_23012_23034[(1)] = (12));
} else
{var statearr_23013_23035 = state_23003__$1;(statearr_23013_23035[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23004 === (9)))
{var state_23003__$1 = state_23003;var statearr_23014_23036 = state_23003__$1;(statearr_23014_23036[(2)] = null);
(statearr_23014_23036[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23004 === (5)))
{var state_23003__$1 = state_23003;if(cljs.core.truth_(close_QMARK_))
{var statearr_23015_23037 = state_23003__$1;(statearr_23015_23037[(1)] = (8));
} else
{var statearr_23016_23038 = state_23003__$1;(statearr_23016_23038[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23004 === (14)))
{var inst_22997 = (state_23003[(2)]);var state_23003__$1 = state_23003;var statearr_23017_23039 = state_23003__$1;(statearr_23017_23039[(2)] = inst_22997);
(statearr_23017_23039[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23004 === (10)))
{var inst_22989 = (state_23003[(2)]);var state_23003__$1 = state_23003;var statearr_23018_23040 = state_23003__$1;(statearr_23018_23040[(2)] = inst_22989);
(statearr_23018_23040[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23004 === (8)))
{var inst_22986 = cljs.core.async.close_BANG_.call(null,to);var state_23003__$1 = state_23003;var statearr_23019_23041 = state_23003__$1;(statearr_23019_23041[(2)] = inst_22986);
(statearr_23019_23041[(1)] = (10));
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
});})(c__9125__auto___23027))
;return ((function (switch__9110__auto__,c__9125__auto___23027){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23023 = [null,null,null,null,null,null,null,null];(statearr_23023[(0)] = state_machine__9111__auto__);
(statearr_23023[(1)] = (1));
return statearr_23023;
});
var state_machine__9111__auto____1 = (function (state_23003){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23003);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23024){if((e23024 instanceof Object))
{var ex__9114__auto__ = e23024;var statearr_23025_23042 = state_23003;(statearr_23025_23042[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23003);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23024;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23043 = state_23003;
state_23003 = G__23043;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23003){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23027))
})();var state__9127__auto__ = (function (){var statearr_23026 = f__9126__auto__.call(null);(statearr_23026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23027);
return statearr_23026;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23027))
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
return (function (p__23227){var vec__23228 = p__23227;var v = cljs.core.nth.call(null,vec__23228,(0),null);var p = cljs.core.nth.call(null,vec__23228,(1),null);var job = vec__23228;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__9125__auto___23410 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23410,res,vec__23228,v,p,job,jobs,results){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23410,res,vec__23228,v,p,job,jobs,results){
return (function (state_23233){var state_val_23234 = (state_23233[(1)]);if((state_val_23234 === (2)))
{var inst_23230 = (state_23233[(2)]);var inst_23231 = cljs.core.async.close_BANG_.call(null,res);var state_23233__$1 = (function (){var statearr_23235 = state_23233;(statearr_23235[(7)] = inst_23230);
return statearr_23235;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23233__$1,inst_23231);
} else
{if((state_val_23234 === (1)))
{var state_23233__$1 = state_23233;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23233__$1,(2),res,v);
} else
{return null;
}
}
});})(c__9125__auto___23410,res,vec__23228,v,p,job,jobs,results))
;return ((function (switch__9110__auto__,c__9125__auto___23410,res,vec__23228,v,p,job,jobs,results){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23239 = [null,null,null,null,null,null,null,null];(statearr_23239[(0)] = state_machine__9111__auto__);
(statearr_23239[(1)] = (1));
return statearr_23239;
});
var state_machine__9111__auto____1 = (function (state_23233){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23233);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23240){if((e23240 instanceof Object))
{var ex__9114__auto__ = e23240;var statearr_23241_23411 = state_23233;(statearr_23241_23411[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23233);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23240;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23412 = state_23233;
state_23233 = G__23412;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23233){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23410,res,vec__23228,v,p,job,jobs,results))
})();var state__9127__auto__ = (function (){var statearr_23242 = f__9126__auto__.call(null);(statearr_23242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23410);
return statearr_23242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23410,res,vec__23228,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__23243){var vec__23244 = p__23243;var v = cljs.core.nth.call(null,vec__23244,(0),null);var p = cljs.core.nth.call(null,vec__23244,(1),null);var job = vec__23244;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___23413 = n;var __23414 = (0);while(true){
if((__23414 < n__4508__auto___23413))
{var G__23245_23415 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__23245_23415) {
case "async":
var c__9125__auto___23417 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23414,c__9125__auto___23417,G__23245_23415,n__4508__auto___23413,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__23414,c__9125__auto___23417,G__23245_23415,n__4508__auto___23413,jobs,results,process,async){
return (function (state_23258){var state_val_23259 = (state_23258[(1)]);if((state_val_23259 === (7)))
{var inst_23254 = (state_23258[(2)]);var state_23258__$1 = state_23258;var statearr_23260_23418 = state_23258__$1;(statearr_23260_23418[(2)] = inst_23254);
(statearr_23260_23418[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23259 === (6)))
{var state_23258__$1 = state_23258;var statearr_23261_23419 = state_23258__$1;(statearr_23261_23419[(2)] = null);
(statearr_23261_23419[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23259 === (5)))
{var state_23258__$1 = state_23258;var statearr_23262_23420 = state_23258__$1;(statearr_23262_23420[(2)] = null);
(statearr_23262_23420[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23259 === (4)))
{var inst_23248 = (state_23258[(2)]);var inst_23249 = async.call(null,inst_23248);var state_23258__$1 = state_23258;if(cljs.core.truth_(inst_23249))
{var statearr_23263_23421 = state_23258__$1;(statearr_23263_23421[(1)] = (5));
} else
{var statearr_23264_23422 = state_23258__$1;(statearr_23264_23422[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23259 === (3)))
{var inst_23256 = (state_23258[(2)]);var state_23258__$1 = state_23258;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23258__$1,inst_23256);
} else
{if((state_val_23259 === (2)))
{var state_23258__$1 = state_23258;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23258__$1,(4),jobs);
} else
{if((state_val_23259 === (1)))
{var state_23258__$1 = state_23258;var statearr_23265_23423 = state_23258__$1;(statearr_23265_23423[(2)] = null);
(statearr_23265_23423[(1)] = (2));
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
});})(__23414,c__9125__auto___23417,G__23245_23415,n__4508__auto___23413,jobs,results,process,async))
;return ((function (__23414,switch__9110__auto__,c__9125__auto___23417,G__23245_23415,n__4508__auto___23413,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23269 = [null,null,null,null,null,null,null];(statearr_23269[(0)] = state_machine__9111__auto__);
(statearr_23269[(1)] = (1));
return statearr_23269;
});
var state_machine__9111__auto____1 = (function (state_23258){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23258);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23270){if((e23270 instanceof Object))
{var ex__9114__auto__ = e23270;var statearr_23271_23424 = state_23258;(statearr_23271_23424[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23258);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23270;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23425 = state_23258;
state_23258 = G__23425;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23258){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__23414,switch__9110__auto__,c__9125__auto___23417,G__23245_23415,n__4508__auto___23413,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23272 = f__9126__auto__.call(null);(statearr_23272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23417);
return statearr_23272;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__23414,c__9125__auto___23417,G__23245_23415,n__4508__auto___23413,jobs,results,process,async))
);

break;
case "compute":
var c__9125__auto___23426 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23414,c__9125__auto___23426,G__23245_23415,n__4508__auto___23413,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__23414,c__9125__auto___23426,G__23245_23415,n__4508__auto___23413,jobs,results,process,async){
return (function (state_23285){var state_val_23286 = (state_23285[(1)]);if((state_val_23286 === (7)))
{var inst_23281 = (state_23285[(2)]);var state_23285__$1 = state_23285;var statearr_23287_23427 = state_23285__$1;(statearr_23287_23427[(2)] = inst_23281);
(statearr_23287_23427[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23286 === (6)))
{var state_23285__$1 = state_23285;var statearr_23288_23428 = state_23285__$1;(statearr_23288_23428[(2)] = null);
(statearr_23288_23428[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23286 === (5)))
{var state_23285__$1 = state_23285;var statearr_23289_23429 = state_23285__$1;(statearr_23289_23429[(2)] = null);
(statearr_23289_23429[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23286 === (4)))
{var inst_23275 = (state_23285[(2)]);var inst_23276 = process.call(null,inst_23275);var state_23285__$1 = state_23285;if(cljs.core.truth_(inst_23276))
{var statearr_23290_23430 = state_23285__$1;(statearr_23290_23430[(1)] = (5));
} else
{var statearr_23291_23431 = state_23285__$1;(statearr_23291_23431[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23286 === (3)))
{var inst_23283 = (state_23285[(2)]);var state_23285__$1 = state_23285;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23285__$1,inst_23283);
} else
{if((state_val_23286 === (2)))
{var state_23285__$1 = state_23285;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23285__$1,(4),jobs);
} else
{if((state_val_23286 === (1)))
{var state_23285__$1 = state_23285;var statearr_23292_23432 = state_23285__$1;(statearr_23292_23432[(2)] = null);
(statearr_23292_23432[(1)] = (2));
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
});})(__23414,c__9125__auto___23426,G__23245_23415,n__4508__auto___23413,jobs,results,process,async))
;return ((function (__23414,switch__9110__auto__,c__9125__auto___23426,G__23245_23415,n__4508__auto___23413,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23296 = [null,null,null,null,null,null,null];(statearr_23296[(0)] = state_machine__9111__auto__);
(statearr_23296[(1)] = (1));
return statearr_23296;
});
var state_machine__9111__auto____1 = (function (state_23285){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23285);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23297){if((e23297 instanceof Object))
{var ex__9114__auto__ = e23297;var statearr_23298_23433 = state_23285;(statearr_23298_23433[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23285);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23297;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23434 = state_23285;
state_23285 = G__23434;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23285){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__23414,switch__9110__auto__,c__9125__auto___23426,G__23245_23415,n__4508__auto___23413,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23299 = f__9126__auto__.call(null);(statearr_23299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23426);
return statearr_23299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__23414,c__9125__auto___23426,G__23245_23415,n__4508__auto___23413,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__23435 = (__23414 + (1));
__23414 = G__23435;
continue;
}
} else
{}
break;
}
var c__9125__auto___23436 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23436,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23436,jobs,results,process,async){
return (function (state_23321){var state_val_23322 = (state_23321[(1)]);if((state_val_23322 === (9)))
{var inst_23314 = (state_23321[(2)]);var state_23321__$1 = (function (){var statearr_23323 = state_23321;(statearr_23323[(7)] = inst_23314);
return statearr_23323;
})();var statearr_23324_23437 = state_23321__$1;(statearr_23324_23437[(2)] = null);
(statearr_23324_23437[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23322 === (8)))
{var inst_23307 = (state_23321[(8)]);var inst_23312 = (state_23321[(2)]);var state_23321__$1 = (function (){var statearr_23325 = state_23321;(statearr_23325[(9)] = inst_23312);
return statearr_23325;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23321__$1,(9),results,inst_23307);
} else
{if((state_val_23322 === (7)))
{var inst_23317 = (state_23321[(2)]);var state_23321__$1 = state_23321;var statearr_23326_23438 = state_23321__$1;(statearr_23326_23438[(2)] = inst_23317);
(statearr_23326_23438[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23322 === (6)))
{var inst_23307 = (state_23321[(8)]);var inst_23302 = (state_23321[(10)]);var inst_23307__$1 = cljs.core.async.chan.call(null,(1));var inst_23308 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23309 = [inst_23302,inst_23307__$1];var inst_23310 = (new cljs.core.PersistentVector(null,2,(5),inst_23308,inst_23309,null));var state_23321__$1 = (function (){var statearr_23327 = state_23321;(statearr_23327[(8)] = inst_23307__$1);
return statearr_23327;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23321__$1,(8),jobs,inst_23310);
} else
{if((state_val_23322 === (5)))
{var inst_23305 = cljs.core.async.close_BANG_.call(null,jobs);var state_23321__$1 = state_23321;var statearr_23328_23439 = state_23321__$1;(statearr_23328_23439[(2)] = inst_23305);
(statearr_23328_23439[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23322 === (4)))
{var inst_23302 = (state_23321[(10)]);var inst_23302__$1 = (state_23321[(2)]);var inst_23303 = (inst_23302__$1 == null);var state_23321__$1 = (function (){var statearr_23329 = state_23321;(statearr_23329[(10)] = inst_23302__$1);
return statearr_23329;
})();if(cljs.core.truth_(inst_23303))
{var statearr_23330_23440 = state_23321__$1;(statearr_23330_23440[(1)] = (5));
} else
{var statearr_23331_23441 = state_23321__$1;(statearr_23331_23441[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23322 === (3)))
{var inst_23319 = (state_23321[(2)]);var state_23321__$1 = state_23321;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23321__$1,inst_23319);
} else
{if((state_val_23322 === (2)))
{var state_23321__$1 = state_23321;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23321__$1,(4),from);
} else
{if((state_val_23322 === (1)))
{var state_23321__$1 = state_23321;var statearr_23332_23442 = state_23321__$1;(statearr_23332_23442[(2)] = null);
(statearr_23332_23442[(1)] = (2));
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
});})(c__9125__auto___23436,jobs,results,process,async))
;return ((function (switch__9110__auto__,c__9125__auto___23436,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23336 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23336[(0)] = state_machine__9111__auto__);
(statearr_23336[(1)] = (1));
return statearr_23336;
});
var state_machine__9111__auto____1 = (function (state_23321){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23321);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23337){if((e23337 instanceof Object))
{var ex__9114__auto__ = e23337;var statearr_23338_23443 = state_23321;(statearr_23338_23443[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23321);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23337;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23444 = state_23321;
state_23321 = G__23444;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23321){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23436,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23339 = f__9126__auto__.call(null);(statearr_23339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23436);
return statearr_23339;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23436,jobs,results,process,async))
);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,jobs,results,process,async){
return (function (state_23377){var state_val_23378 = (state_23377[(1)]);if((state_val_23378 === (7)))
{var inst_23373 = (state_23377[(2)]);var state_23377__$1 = state_23377;var statearr_23379_23445 = state_23377__$1;(statearr_23379_23445[(2)] = inst_23373);
(statearr_23379_23445[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23378 === (20)))
{var state_23377__$1 = state_23377;var statearr_23380_23446 = state_23377__$1;(statearr_23380_23446[(2)] = null);
(statearr_23380_23446[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23378 === (1)))
{var state_23377__$1 = state_23377;var statearr_23381_23447 = state_23377__$1;(statearr_23381_23447[(2)] = null);
(statearr_23381_23447[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23378 === (4)))
{var inst_23342 = (state_23377[(7)]);var inst_23342__$1 = (state_23377[(2)]);var inst_23343 = (inst_23342__$1 == null);var state_23377__$1 = (function (){var statearr_23382 = state_23377;(statearr_23382[(7)] = inst_23342__$1);
return statearr_23382;
})();if(cljs.core.truth_(inst_23343))
{var statearr_23383_23448 = state_23377__$1;(statearr_23383_23448[(1)] = (5));
} else
{var statearr_23384_23449 = state_23377__$1;(statearr_23384_23449[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23378 === (15)))
{var inst_23355 = (state_23377[(8)]);var state_23377__$1 = state_23377;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23377__$1,(18),to,inst_23355);
} else
{if((state_val_23378 === (21)))
{var inst_23368 = (state_23377[(2)]);var state_23377__$1 = state_23377;var statearr_23385_23450 = state_23377__$1;(statearr_23385_23450[(2)] = inst_23368);
(statearr_23385_23450[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23378 === (13)))
{var inst_23370 = (state_23377[(2)]);var state_23377__$1 = (function (){var statearr_23386 = state_23377;(statearr_23386[(9)] = inst_23370);
return statearr_23386;
})();var statearr_23387_23451 = state_23377__$1;(statearr_23387_23451[(2)] = null);
(statearr_23387_23451[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23378 === (6)))
{var inst_23342 = (state_23377[(7)]);var state_23377__$1 = state_23377;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23377__$1,(11),inst_23342);
} else
{if((state_val_23378 === (17)))
{var inst_23363 = (state_23377[(2)]);var state_23377__$1 = state_23377;if(cljs.core.truth_(inst_23363))
{var statearr_23388_23452 = state_23377__$1;(statearr_23388_23452[(1)] = (19));
} else
{var statearr_23389_23453 = state_23377__$1;(statearr_23389_23453[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23378 === (3)))
{var inst_23375 = (state_23377[(2)]);var state_23377__$1 = state_23377;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23377__$1,inst_23375);
} else
{if((state_val_23378 === (12)))
{var inst_23352 = (state_23377[(10)]);var state_23377__$1 = state_23377;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23377__$1,(14),inst_23352);
} else
{if((state_val_23378 === (2)))
{var state_23377__$1 = state_23377;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23377__$1,(4),results);
} else
{if((state_val_23378 === (19)))
{var state_23377__$1 = state_23377;var statearr_23390_23454 = state_23377__$1;(statearr_23390_23454[(2)] = null);
(statearr_23390_23454[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23378 === (11)))
{var inst_23352 = (state_23377[(2)]);var state_23377__$1 = (function (){var statearr_23391 = state_23377;(statearr_23391[(10)] = inst_23352);
return statearr_23391;
})();var statearr_23392_23455 = state_23377__$1;(statearr_23392_23455[(2)] = null);
(statearr_23392_23455[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23378 === (9)))
{var state_23377__$1 = state_23377;var statearr_23393_23456 = state_23377__$1;(statearr_23393_23456[(2)] = null);
(statearr_23393_23456[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23378 === (5)))
{var state_23377__$1 = state_23377;if(cljs.core.truth_(close_QMARK_))
{var statearr_23394_23457 = state_23377__$1;(statearr_23394_23457[(1)] = (8));
} else
{var statearr_23395_23458 = state_23377__$1;(statearr_23395_23458[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23378 === (14)))
{var inst_23357 = (state_23377[(11)]);var inst_23355 = (state_23377[(8)]);var inst_23355__$1 = (state_23377[(2)]);var inst_23356 = (inst_23355__$1 == null);var inst_23357__$1 = cljs.core.not.call(null,inst_23356);var state_23377__$1 = (function (){var statearr_23396 = state_23377;(statearr_23396[(11)] = inst_23357__$1);
(statearr_23396[(8)] = inst_23355__$1);
return statearr_23396;
})();if(inst_23357__$1)
{var statearr_23397_23459 = state_23377__$1;(statearr_23397_23459[(1)] = (15));
} else
{var statearr_23398_23460 = state_23377__$1;(statearr_23398_23460[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23378 === (16)))
{var inst_23357 = (state_23377[(11)]);var state_23377__$1 = state_23377;var statearr_23399_23461 = state_23377__$1;(statearr_23399_23461[(2)] = inst_23357);
(statearr_23399_23461[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23378 === (10)))
{var inst_23349 = (state_23377[(2)]);var state_23377__$1 = state_23377;var statearr_23400_23462 = state_23377__$1;(statearr_23400_23462[(2)] = inst_23349);
(statearr_23400_23462[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23378 === (18)))
{var inst_23360 = (state_23377[(2)]);var state_23377__$1 = state_23377;var statearr_23401_23463 = state_23377__$1;(statearr_23401_23463[(2)] = inst_23360);
(statearr_23401_23463[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23378 === (8)))
{var inst_23346 = cljs.core.async.close_BANG_.call(null,to);var state_23377__$1 = state_23377;var statearr_23402_23464 = state_23377__$1;(statearr_23402_23464[(2)] = inst_23346);
(statearr_23402_23464[(1)] = (10));
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
var state_machine__9111__auto____0 = (function (){var statearr_23406 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23406[(0)] = state_machine__9111__auto__);
(statearr_23406[(1)] = (1));
return statearr_23406;
});
var state_machine__9111__auto____1 = (function (state_23377){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23377);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23407){if((e23407 instanceof Object))
{var ex__9114__auto__ = e23407;var statearr_23408_23465 = state_23377;(statearr_23408_23465[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23377);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23407;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23466 = state_23377;
state_23377 = G__23466;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23377){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23409 = f__9126__auto__.call(null);(statearr_23409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_23409;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__9125__auto___23567 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23567,tc,fc){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23567,tc,fc){
return (function (state_23542){var state_val_23543 = (state_23542[(1)]);if((state_val_23543 === (7)))
{var inst_23538 = (state_23542[(2)]);var state_23542__$1 = state_23542;var statearr_23544_23568 = state_23542__$1;(statearr_23544_23568[(2)] = inst_23538);
(statearr_23544_23568[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23543 === (1)))
{var state_23542__$1 = state_23542;var statearr_23545_23569 = state_23542__$1;(statearr_23545_23569[(2)] = null);
(statearr_23545_23569[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23543 === (4)))
{var inst_23519 = (state_23542[(7)]);var inst_23519__$1 = (state_23542[(2)]);var inst_23520 = (inst_23519__$1 == null);var state_23542__$1 = (function (){var statearr_23546 = state_23542;(statearr_23546[(7)] = inst_23519__$1);
return statearr_23546;
})();if(cljs.core.truth_(inst_23520))
{var statearr_23547_23570 = state_23542__$1;(statearr_23547_23570[(1)] = (5));
} else
{var statearr_23548_23571 = state_23542__$1;(statearr_23548_23571[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23543 === (13)))
{var state_23542__$1 = state_23542;var statearr_23549_23572 = state_23542__$1;(statearr_23549_23572[(2)] = null);
(statearr_23549_23572[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23543 === (6)))
{var inst_23519 = (state_23542[(7)]);var inst_23525 = p.call(null,inst_23519);var state_23542__$1 = state_23542;if(cljs.core.truth_(inst_23525))
{var statearr_23550_23573 = state_23542__$1;(statearr_23550_23573[(1)] = (9));
} else
{var statearr_23551_23574 = state_23542__$1;(statearr_23551_23574[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23543 === (3)))
{var inst_23540 = (state_23542[(2)]);var state_23542__$1 = state_23542;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23542__$1,inst_23540);
} else
{if((state_val_23543 === (12)))
{var state_23542__$1 = state_23542;var statearr_23552_23575 = state_23542__$1;(statearr_23552_23575[(2)] = null);
(statearr_23552_23575[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23543 === (2)))
{var state_23542__$1 = state_23542;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23542__$1,(4),ch);
} else
{if((state_val_23543 === (11)))
{var inst_23519 = (state_23542[(7)]);var inst_23529 = (state_23542[(2)]);var state_23542__$1 = state_23542;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23542__$1,(8),inst_23529,inst_23519);
} else
{if((state_val_23543 === (9)))
{var state_23542__$1 = state_23542;var statearr_23553_23576 = state_23542__$1;(statearr_23553_23576[(2)] = tc);
(statearr_23553_23576[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23543 === (5)))
{var inst_23522 = cljs.core.async.close_BANG_.call(null,tc);var inst_23523 = cljs.core.async.close_BANG_.call(null,fc);var state_23542__$1 = (function (){var statearr_23554 = state_23542;(statearr_23554[(8)] = inst_23522);
return statearr_23554;
})();var statearr_23555_23577 = state_23542__$1;(statearr_23555_23577[(2)] = inst_23523);
(statearr_23555_23577[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23543 === (14)))
{var inst_23536 = (state_23542[(2)]);var state_23542__$1 = state_23542;var statearr_23556_23578 = state_23542__$1;(statearr_23556_23578[(2)] = inst_23536);
(statearr_23556_23578[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23543 === (10)))
{var state_23542__$1 = state_23542;var statearr_23557_23579 = state_23542__$1;(statearr_23557_23579[(2)] = fc);
(statearr_23557_23579[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23543 === (8)))
{var inst_23531 = (state_23542[(2)]);var state_23542__$1 = state_23542;if(cljs.core.truth_(inst_23531))
{var statearr_23558_23580 = state_23542__$1;(statearr_23558_23580[(1)] = (12));
} else
{var statearr_23559_23581 = state_23542__$1;(statearr_23559_23581[(1)] = (13));
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
});})(c__9125__auto___23567,tc,fc))
;return ((function (switch__9110__auto__,c__9125__auto___23567,tc,fc){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23563 = [null,null,null,null,null,null,null,null,null];(statearr_23563[(0)] = state_machine__9111__auto__);
(statearr_23563[(1)] = (1));
return statearr_23563;
});
var state_machine__9111__auto____1 = (function (state_23542){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23542);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23564){if((e23564 instanceof Object))
{var ex__9114__auto__ = e23564;var statearr_23565_23582 = state_23542;(statearr_23565_23582[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23542);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23564;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23583 = state_23542;
state_23542 = G__23583;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23542){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23567,tc,fc))
})();var state__9127__auto__ = (function (){var statearr_23566 = f__9126__auto__.call(null);(statearr_23566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23567);
return statearr_23566;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23567,tc,fc))
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
return (function (state_23630){var state_val_23631 = (state_23630[(1)]);if((state_val_23631 === (7)))
{var inst_23626 = (state_23630[(2)]);var state_23630__$1 = state_23630;var statearr_23632_23648 = state_23630__$1;(statearr_23632_23648[(2)] = inst_23626);
(statearr_23632_23648[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23631 === (6)))
{var inst_23619 = (state_23630[(7)]);var inst_23616 = (state_23630[(8)]);var inst_23623 = f.call(null,inst_23616,inst_23619);var inst_23616__$1 = inst_23623;var state_23630__$1 = (function (){var statearr_23633 = state_23630;(statearr_23633[(8)] = inst_23616__$1);
return statearr_23633;
})();var statearr_23634_23649 = state_23630__$1;(statearr_23634_23649[(2)] = null);
(statearr_23634_23649[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23631 === (5)))
{var inst_23616 = (state_23630[(8)]);var state_23630__$1 = state_23630;var statearr_23635_23650 = state_23630__$1;(statearr_23635_23650[(2)] = inst_23616);
(statearr_23635_23650[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23631 === (4)))
{var inst_23619 = (state_23630[(7)]);var inst_23619__$1 = (state_23630[(2)]);var inst_23620 = (inst_23619__$1 == null);var state_23630__$1 = (function (){var statearr_23636 = state_23630;(statearr_23636[(7)] = inst_23619__$1);
return statearr_23636;
})();if(cljs.core.truth_(inst_23620))
{var statearr_23637_23651 = state_23630__$1;(statearr_23637_23651[(1)] = (5));
} else
{var statearr_23638_23652 = state_23630__$1;(statearr_23638_23652[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23631 === (3)))
{var inst_23628 = (state_23630[(2)]);var state_23630__$1 = state_23630;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23630__$1,inst_23628);
} else
{if((state_val_23631 === (2)))
{var state_23630__$1 = state_23630;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23630__$1,(4),ch);
} else
{if((state_val_23631 === (1)))
{var inst_23616 = init;var state_23630__$1 = (function (){var statearr_23639 = state_23630;(statearr_23639[(8)] = inst_23616);
return statearr_23639;
})();var statearr_23640_23653 = state_23630__$1;(statearr_23640_23653[(2)] = null);
(statearr_23640_23653[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_23644 = [null,null,null,null,null,null,null,null,null];(statearr_23644[(0)] = state_machine__9111__auto__);
(statearr_23644[(1)] = (1));
return statearr_23644;
});
var state_machine__9111__auto____1 = (function (state_23630){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23630);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23645){if((e23645 instanceof Object))
{var ex__9114__auto__ = e23645;var statearr_23646_23654 = state_23630;(statearr_23646_23654[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23630);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23645;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23655 = state_23630;
state_23630 = G__23655;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23630){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_23647 = f__9126__auto__.call(null);(statearr_23647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_23647;
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
return (function (state_23729){var state_val_23730 = (state_23729[(1)]);if((state_val_23730 === (7)))
{var inst_23711 = (state_23729[(2)]);var state_23729__$1 = state_23729;var statearr_23731_23754 = state_23729__$1;(statearr_23731_23754[(2)] = inst_23711);
(statearr_23731_23754[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23730 === (1)))
{var inst_23705 = cljs.core.seq.call(null,coll);var inst_23706 = inst_23705;var state_23729__$1 = (function (){var statearr_23732 = state_23729;(statearr_23732[(7)] = inst_23706);
return statearr_23732;
})();var statearr_23733_23755 = state_23729__$1;(statearr_23733_23755[(2)] = null);
(statearr_23733_23755[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23730 === (4)))
{var inst_23706 = (state_23729[(7)]);var inst_23709 = cljs.core.first.call(null,inst_23706);var state_23729__$1 = state_23729;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23729__$1,(7),ch,inst_23709);
} else
{if((state_val_23730 === (13)))
{var inst_23723 = (state_23729[(2)]);var state_23729__$1 = state_23729;var statearr_23734_23756 = state_23729__$1;(statearr_23734_23756[(2)] = inst_23723);
(statearr_23734_23756[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23730 === (6)))
{var inst_23714 = (state_23729[(2)]);var state_23729__$1 = state_23729;if(cljs.core.truth_(inst_23714))
{var statearr_23735_23757 = state_23729__$1;(statearr_23735_23757[(1)] = (8));
} else
{var statearr_23736_23758 = state_23729__$1;(statearr_23736_23758[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23730 === (3)))
{var inst_23727 = (state_23729[(2)]);var state_23729__$1 = state_23729;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23729__$1,inst_23727);
} else
{if((state_val_23730 === (12)))
{var state_23729__$1 = state_23729;var statearr_23737_23759 = state_23729__$1;(statearr_23737_23759[(2)] = null);
(statearr_23737_23759[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23730 === (2)))
{var inst_23706 = (state_23729[(7)]);var state_23729__$1 = state_23729;if(cljs.core.truth_(inst_23706))
{var statearr_23738_23760 = state_23729__$1;(statearr_23738_23760[(1)] = (4));
} else
{var statearr_23739_23761 = state_23729__$1;(statearr_23739_23761[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23730 === (11)))
{var inst_23720 = cljs.core.async.close_BANG_.call(null,ch);var state_23729__$1 = state_23729;var statearr_23740_23762 = state_23729__$1;(statearr_23740_23762[(2)] = inst_23720);
(statearr_23740_23762[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23730 === (9)))
{var state_23729__$1 = state_23729;if(cljs.core.truth_(close_QMARK_))
{var statearr_23741_23763 = state_23729__$1;(statearr_23741_23763[(1)] = (11));
} else
{var statearr_23742_23764 = state_23729__$1;(statearr_23742_23764[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23730 === (5)))
{var inst_23706 = (state_23729[(7)]);var state_23729__$1 = state_23729;var statearr_23743_23765 = state_23729__$1;(statearr_23743_23765[(2)] = inst_23706);
(statearr_23743_23765[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23730 === (10)))
{var inst_23725 = (state_23729[(2)]);var state_23729__$1 = state_23729;var statearr_23744_23766 = state_23729__$1;(statearr_23744_23766[(2)] = inst_23725);
(statearr_23744_23766[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23730 === (8)))
{var inst_23706 = (state_23729[(7)]);var inst_23716 = cljs.core.next.call(null,inst_23706);var inst_23706__$1 = inst_23716;var state_23729__$1 = (function (){var statearr_23745 = state_23729;(statearr_23745[(7)] = inst_23706__$1);
return statearr_23745;
})();var statearr_23746_23767 = state_23729__$1;(statearr_23746_23767[(2)] = null);
(statearr_23746_23767[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_23750 = [null,null,null,null,null,null,null,null];(statearr_23750[(0)] = state_machine__9111__auto__);
(statearr_23750[(1)] = (1));
return statearr_23750;
});
var state_machine__9111__auto____1 = (function (state_23729){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23729);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23751){if((e23751 instanceof Object))
{var ex__9114__auto__ = e23751;var statearr_23752_23768 = state_23729;(statearr_23752_23768[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23729);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23751;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23769 = state_23729;
state_23729 = G__23769;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23729){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_23753 = f__9126__auto__.call(null);(statearr_23753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_23753;
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
cljs.core.async.Mux = (function (){var obj23771 = {};return obj23771;
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
cljs.core.async.Mult = (function (){var obj23773 = {};return obj23773;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t23995 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23995 = (function (cs,ch,mult,meta23996){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23996 = meta23996;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23995.cljs$lang$type = true;
cljs.core.async.t23995.cljs$lang$ctorStr = "cljs.core.async/t23995";
cljs.core.async.t23995.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23995");
});})(cs))
;
cljs.core.async.t23995.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t23995.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t23995.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t23995.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t23995.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23995.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t23995.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23997){var self__ = this;
var _23997__$1 = this;return self__.meta23996;
});})(cs))
;
cljs.core.async.t23995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23997,meta23996__$1){var self__ = this;
var _23997__$1 = this;return (new cljs.core.async.t23995(self__.cs,self__.ch,self__.mult,meta23996__$1));
});})(cs))
;
cljs.core.async.__GT_t23995 = ((function (cs){
return (function __GT_t23995(cs__$1,ch__$1,mult__$1,meta23996){return (new cljs.core.async.t23995(cs__$1,ch__$1,mult__$1,meta23996));
});})(cs))
;
}
return (new cljs.core.async.t23995(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__9125__auto___24216 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24216,cs,m,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24216,cs,m,dchan,dctr,done){
return (function (state_24128){var state_val_24129 = (state_24128[(1)]);if((state_val_24129 === (7)))
{var inst_24124 = (state_24128[(2)]);var state_24128__$1 = state_24128;var statearr_24130_24217 = state_24128__$1;(statearr_24130_24217[(2)] = inst_24124);
(statearr_24130_24217[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (20)))
{var inst_24029 = (state_24128[(7)]);var inst_24039 = cljs.core.first.call(null,inst_24029);var inst_24040 = cljs.core.nth.call(null,inst_24039,(0),null);var inst_24041 = cljs.core.nth.call(null,inst_24039,(1),null);var state_24128__$1 = (function (){var statearr_24131 = state_24128;(statearr_24131[(8)] = inst_24040);
return statearr_24131;
})();if(cljs.core.truth_(inst_24041))
{var statearr_24132_24218 = state_24128__$1;(statearr_24132_24218[(1)] = (22));
} else
{var statearr_24133_24219 = state_24128__$1;(statearr_24133_24219[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (27)))
{var inst_24071 = (state_24128[(9)]);var inst_24076 = (state_24128[(10)]);var inst_24000 = (state_24128[(11)]);var inst_24069 = (state_24128[(12)]);var inst_24076__$1 = cljs.core._nth.call(null,inst_24069,inst_24071);var inst_24077 = cljs.core.async.put_BANG_.call(null,inst_24076__$1,inst_24000,done);var state_24128__$1 = (function (){var statearr_24134 = state_24128;(statearr_24134[(10)] = inst_24076__$1);
return statearr_24134;
})();if(cljs.core.truth_(inst_24077))
{var statearr_24135_24220 = state_24128__$1;(statearr_24135_24220[(1)] = (30));
} else
{var statearr_24136_24221 = state_24128__$1;(statearr_24136_24221[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (1)))
{var state_24128__$1 = state_24128;var statearr_24137_24222 = state_24128__$1;(statearr_24137_24222[(2)] = null);
(statearr_24137_24222[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (24)))
{var inst_24029 = (state_24128[(7)]);var inst_24046 = (state_24128[(2)]);var inst_24047 = cljs.core.next.call(null,inst_24029);var inst_24009 = inst_24047;var inst_24010 = null;var inst_24011 = (0);var inst_24012 = (0);var state_24128__$1 = (function (){var statearr_24138 = state_24128;(statearr_24138[(13)] = inst_24012);
(statearr_24138[(14)] = inst_24046);
(statearr_24138[(15)] = inst_24010);
(statearr_24138[(16)] = inst_24011);
(statearr_24138[(17)] = inst_24009);
return statearr_24138;
})();var statearr_24139_24223 = state_24128__$1;(statearr_24139_24223[(2)] = null);
(statearr_24139_24223[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (39)))
{var state_24128__$1 = state_24128;var statearr_24143_24224 = state_24128__$1;(statearr_24143_24224[(2)] = null);
(statearr_24143_24224[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (4)))
{var inst_24000 = (state_24128[(11)]);var inst_24000__$1 = (state_24128[(2)]);var inst_24001 = (inst_24000__$1 == null);var state_24128__$1 = (function (){var statearr_24144 = state_24128;(statearr_24144[(11)] = inst_24000__$1);
return statearr_24144;
})();if(cljs.core.truth_(inst_24001))
{var statearr_24145_24225 = state_24128__$1;(statearr_24145_24225[(1)] = (5));
} else
{var statearr_24146_24226 = state_24128__$1;(statearr_24146_24226[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (15)))
{var inst_24012 = (state_24128[(13)]);var inst_24010 = (state_24128[(15)]);var inst_24011 = (state_24128[(16)]);var inst_24009 = (state_24128[(17)]);var inst_24025 = (state_24128[(2)]);var inst_24026 = (inst_24012 + (1));var tmp24140 = inst_24010;var tmp24141 = inst_24011;var tmp24142 = inst_24009;var inst_24009__$1 = tmp24142;var inst_24010__$1 = tmp24140;var inst_24011__$1 = tmp24141;var inst_24012__$1 = inst_24026;var state_24128__$1 = (function (){var statearr_24147 = state_24128;(statearr_24147[(13)] = inst_24012__$1);
(statearr_24147[(18)] = inst_24025);
(statearr_24147[(15)] = inst_24010__$1);
(statearr_24147[(16)] = inst_24011__$1);
(statearr_24147[(17)] = inst_24009__$1);
return statearr_24147;
})();var statearr_24148_24227 = state_24128__$1;(statearr_24148_24227[(2)] = null);
(statearr_24148_24227[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (21)))
{var inst_24050 = (state_24128[(2)]);var state_24128__$1 = state_24128;var statearr_24152_24228 = state_24128__$1;(statearr_24152_24228[(2)] = inst_24050);
(statearr_24152_24228[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (31)))
{var inst_24076 = (state_24128[(10)]);var inst_24080 = done.call(null,null);var inst_24081 = cljs.core.async.untap_STAR_.call(null,m,inst_24076);var state_24128__$1 = (function (){var statearr_24153 = state_24128;(statearr_24153[(19)] = inst_24080);
return statearr_24153;
})();var statearr_24154_24229 = state_24128__$1;(statearr_24154_24229[(2)] = inst_24081);
(statearr_24154_24229[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (32)))
{var inst_24071 = (state_24128[(9)]);var inst_24068 = (state_24128[(20)]);var inst_24069 = (state_24128[(12)]);var inst_24070 = (state_24128[(21)]);var inst_24083 = (state_24128[(2)]);var inst_24084 = (inst_24071 + (1));var tmp24149 = inst_24068;var tmp24150 = inst_24069;var tmp24151 = inst_24070;var inst_24068__$1 = tmp24149;var inst_24069__$1 = tmp24150;var inst_24070__$1 = tmp24151;var inst_24071__$1 = inst_24084;var state_24128__$1 = (function (){var statearr_24155 = state_24128;(statearr_24155[(22)] = inst_24083);
(statearr_24155[(9)] = inst_24071__$1);
(statearr_24155[(20)] = inst_24068__$1);
(statearr_24155[(12)] = inst_24069__$1);
(statearr_24155[(21)] = inst_24070__$1);
return statearr_24155;
})();var statearr_24156_24230 = state_24128__$1;(statearr_24156_24230[(2)] = null);
(statearr_24156_24230[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (40)))
{var inst_24096 = (state_24128[(23)]);var inst_24100 = done.call(null,null);var inst_24101 = cljs.core.async.untap_STAR_.call(null,m,inst_24096);var state_24128__$1 = (function (){var statearr_24157 = state_24128;(statearr_24157[(24)] = inst_24100);
return statearr_24157;
})();var statearr_24158_24231 = state_24128__$1;(statearr_24158_24231[(2)] = inst_24101);
(statearr_24158_24231[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (33)))
{var inst_24087 = (state_24128[(25)]);var inst_24089 = cljs.core.chunked_seq_QMARK_.call(null,inst_24087);var state_24128__$1 = state_24128;if(inst_24089)
{var statearr_24159_24232 = state_24128__$1;(statearr_24159_24232[(1)] = (36));
} else
{var statearr_24160_24233 = state_24128__$1;(statearr_24160_24233[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (13)))
{var inst_24019 = (state_24128[(26)]);var inst_24022 = cljs.core.async.close_BANG_.call(null,inst_24019);var state_24128__$1 = state_24128;var statearr_24161_24234 = state_24128__$1;(statearr_24161_24234[(2)] = inst_24022);
(statearr_24161_24234[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (22)))
{var inst_24040 = (state_24128[(8)]);var inst_24043 = cljs.core.async.close_BANG_.call(null,inst_24040);var state_24128__$1 = state_24128;var statearr_24162_24235 = state_24128__$1;(statearr_24162_24235[(2)] = inst_24043);
(statearr_24162_24235[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (36)))
{var inst_24087 = (state_24128[(25)]);var inst_24091 = cljs.core.chunk_first.call(null,inst_24087);var inst_24092 = cljs.core.chunk_rest.call(null,inst_24087);var inst_24093 = cljs.core.count.call(null,inst_24091);var inst_24068 = inst_24092;var inst_24069 = inst_24091;var inst_24070 = inst_24093;var inst_24071 = (0);var state_24128__$1 = (function (){var statearr_24163 = state_24128;(statearr_24163[(9)] = inst_24071);
(statearr_24163[(20)] = inst_24068);
(statearr_24163[(12)] = inst_24069);
(statearr_24163[(21)] = inst_24070);
return statearr_24163;
})();var statearr_24164_24236 = state_24128__$1;(statearr_24164_24236[(2)] = null);
(statearr_24164_24236[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (41)))
{var inst_24087 = (state_24128[(25)]);var inst_24103 = (state_24128[(2)]);var inst_24104 = cljs.core.next.call(null,inst_24087);var inst_24068 = inst_24104;var inst_24069 = null;var inst_24070 = (0);var inst_24071 = (0);var state_24128__$1 = (function (){var statearr_24165 = state_24128;(statearr_24165[(27)] = inst_24103);
(statearr_24165[(9)] = inst_24071);
(statearr_24165[(20)] = inst_24068);
(statearr_24165[(12)] = inst_24069);
(statearr_24165[(21)] = inst_24070);
return statearr_24165;
})();var statearr_24166_24237 = state_24128__$1;(statearr_24166_24237[(2)] = null);
(statearr_24166_24237[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (43)))
{var state_24128__$1 = state_24128;var statearr_24167_24238 = state_24128__$1;(statearr_24167_24238[(2)] = null);
(statearr_24167_24238[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (29)))
{var inst_24112 = (state_24128[(2)]);var state_24128__$1 = state_24128;var statearr_24168_24239 = state_24128__$1;(statearr_24168_24239[(2)] = inst_24112);
(statearr_24168_24239[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (44)))
{var inst_24121 = (state_24128[(2)]);var state_24128__$1 = (function (){var statearr_24169 = state_24128;(statearr_24169[(28)] = inst_24121);
return statearr_24169;
})();var statearr_24170_24240 = state_24128__$1;(statearr_24170_24240[(2)] = null);
(statearr_24170_24240[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (6)))
{var inst_24060 = (state_24128[(29)]);var inst_24059 = cljs.core.deref.call(null,cs);var inst_24060__$1 = cljs.core.keys.call(null,inst_24059);var inst_24061 = cljs.core.count.call(null,inst_24060__$1);var inst_24062 = cljs.core.reset_BANG_.call(null,dctr,inst_24061);var inst_24067 = cljs.core.seq.call(null,inst_24060__$1);var inst_24068 = inst_24067;var inst_24069 = null;var inst_24070 = (0);var inst_24071 = (0);var state_24128__$1 = (function (){var statearr_24171 = state_24128;(statearr_24171[(9)] = inst_24071);
(statearr_24171[(29)] = inst_24060__$1);
(statearr_24171[(20)] = inst_24068);
(statearr_24171[(12)] = inst_24069);
(statearr_24171[(30)] = inst_24062);
(statearr_24171[(21)] = inst_24070);
return statearr_24171;
})();var statearr_24172_24241 = state_24128__$1;(statearr_24172_24241[(2)] = null);
(statearr_24172_24241[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (28)))
{var inst_24068 = (state_24128[(20)]);var inst_24087 = (state_24128[(25)]);var inst_24087__$1 = cljs.core.seq.call(null,inst_24068);var state_24128__$1 = (function (){var statearr_24173 = state_24128;(statearr_24173[(25)] = inst_24087__$1);
return statearr_24173;
})();if(inst_24087__$1)
{var statearr_24174_24242 = state_24128__$1;(statearr_24174_24242[(1)] = (33));
} else
{var statearr_24175_24243 = state_24128__$1;(statearr_24175_24243[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (25)))
{var inst_24071 = (state_24128[(9)]);var inst_24070 = (state_24128[(21)]);var inst_24073 = (inst_24071 < inst_24070);var inst_24074 = inst_24073;var state_24128__$1 = state_24128;if(cljs.core.truth_(inst_24074))
{var statearr_24176_24244 = state_24128__$1;(statearr_24176_24244[(1)] = (27));
} else
{var statearr_24177_24245 = state_24128__$1;(statearr_24177_24245[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (34)))
{var state_24128__$1 = state_24128;var statearr_24178_24246 = state_24128__$1;(statearr_24178_24246[(2)] = null);
(statearr_24178_24246[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (17)))
{var state_24128__$1 = state_24128;var statearr_24179_24247 = state_24128__$1;(statearr_24179_24247[(2)] = null);
(statearr_24179_24247[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (3)))
{var inst_24126 = (state_24128[(2)]);var state_24128__$1 = state_24128;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24128__$1,inst_24126);
} else
{if((state_val_24129 === (12)))
{var inst_24055 = (state_24128[(2)]);var state_24128__$1 = state_24128;var statearr_24180_24248 = state_24128__$1;(statearr_24180_24248[(2)] = inst_24055);
(statearr_24180_24248[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (2)))
{var state_24128__$1 = state_24128;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24128__$1,(4),ch);
} else
{if((state_val_24129 === (23)))
{var state_24128__$1 = state_24128;var statearr_24181_24249 = state_24128__$1;(statearr_24181_24249[(2)] = null);
(statearr_24181_24249[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (35)))
{var inst_24110 = (state_24128[(2)]);var state_24128__$1 = state_24128;var statearr_24182_24250 = state_24128__$1;(statearr_24182_24250[(2)] = inst_24110);
(statearr_24182_24250[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (19)))
{var inst_24029 = (state_24128[(7)]);var inst_24033 = cljs.core.chunk_first.call(null,inst_24029);var inst_24034 = cljs.core.chunk_rest.call(null,inst_24029);var inst_24035 = cljs.core.count.call(null,inst_24033);var inst_24009 = inst_24034;var inst_24010 = inst_24033;var inst_24011 = inst_24035;var inst_24012 = (0);var state_24128__$1 = (function (){var statearr_24183 = state_24128;(statearr_24183[(13)] = inst_24012);
(statearr_24183[(15)] = inst_24010);
(statearr_24183[(16)] = inst_24011);
(statearr_24183[(17)] = inst_24009);
return statearr_24183;
})();var statearr_24184_24251 = state_24128__$1;(statearr_24184_24251[(2)] = null);
(statearr_24184_24251[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (11)))
{var inst_24029 = (state_24128[(7)]);var inst_24009 = (state_24128[(17)]);var inst_24029__$1 = cljs.core.seq.call(null,inst_24009);var state_24128__$1 = (function (){var statearr_24185 = state_24128;(statearr_24185[(7)] = inst_24029__$1);
return statearr_24185;
})();if(inst_24029__$1)
{var statearr_24186_24252 = state_24128__$1;(statearr_24186_24252[(1)] = (16));
} else
{var statearr_24187_24253 = state_24128__$1;(statearr_24187_24253[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (9)))
{var inst_24057 = (state_24128[(2)]);var state_24128__$1 = state_24128;var statearr_24188_24254 = state_24128__$1;(statearr_24188_24254[(2)] = inst_24057);
(statearr_24188_24254[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (5)))
{var inst_24007 = cljs.core.deref.call(null,cs);var inst_24008 = cljs.core.seq.call(null,inst_24007);var inst_24009 = inst_24008;var inst_24010 = null;var inst_24011 = (0);var inst_24012 = (0);var state_24128__$1 = (function (){var statearr_24189 = state_24128;(statearr_24189[(13)] = inst_24012);
(statearr_24189[(15)] = inst_24010);
(statearr_24189[(16)] = inst_24011);
(statearr_24189[(17)] = inst_24009);
return statearr_24189;
})();var statearr_24190_24255 = state_24128__$1;(statearr_24190_24255[(2)] = null);
(statearr_24190_24255[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (14)))
{var state_24128__$1 = state_24128;var statearr_24191_24256 = state_24128__$1;(statearr_24191_24256[(2)] = null);
(statearr_24191_24256[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (45)))
{var inst_24118 = (state_24128[(2)]);var state_24128__$1 = state_24128;var statearr_24192_24257 = state_24128__$1;(statearr_24192_24257[(2)] = inst_24118);
(statearr_24192_24257[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (26)))
{var inst_24060 = (state_24128[(29)]);var inst_24114 = (state_24128[(2)]);var inst_24115 = cljs.core.seq.call(null,inst_24060);var state_24128__$1 = (function (){var statearr_24193 = state_24128;(statearr_24193[(31)] = inst_24114);
return statearr_24193;
})();if(inst_24115)
{var statearr_24194_24258 = state_24128__$1;(statearr_24194_24258[(1)] = (42));
} else
{var statearr_24195_24259 = state_24128__$1;(statearr_24195_24259[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (16)))
{var inst_24029 = (state_24128[(7)]);var inst_24031 = cljs.core.chunked_seq_QMARK_.call(null,inst_24029);var state_24128__$1 = state_24128;if(inst_24031)
{var statearr_24196_24260 = state_24128__$1;(statearr_24196_24260[(1)] = (19));
} else
{var statearr_24197_24261 = state_24128__$1;(statearr_24197_24261[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (38)))
{var inst_24107 = (state_24128[(2)]);var state_24128__$1 = state_24128;var statearr_24198_24262 = state_24128__$1;(statearr_24198_24262[(2)] = inst_24107);
(statearr_24198_24262[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (30)))
{var state_24128__$1 = state_24128;var statearr_24199_24263 = state_24128__$1;(statearr_24199_24263[(2)] = null);
(statearr_24199_24263[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (10)))
{var inst_24012 = (state_24128[(13)]);var inst_24010 = (state_24128[(15)]);var inst_24018 = cljs.core._nth.call(null,inst_24010,inst_24012);var inst_24019 = cljs.core.nth.call(null,inst_24018,(0),null);var inst_24020 = cljs.core.nth.call(null,inst_24018,(1),null);var state_24128__$1 = (function (){var statearr_24200 = state_24128;(statearr_24200[(26)] = inst_24019);
return statearr_24200;
})();if(cljs.core.truth_(inst_24020))
{var statearr_24201_24264 = state_24128__$1;(statearr_24201_24264[(1)] = (13));
} else
{var statearr_24202_24265 = state_24128__$1;(statearr_24202_24265[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (18)))
{var inst_24053 = (state_24128[(2)]);var state_24128__$1 = state_24128;var statearr_24203_24266 = state_24128__$1;(statearr_24203_24266[(2)] = inst_24053);
(statearr_24203_24266[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (42)))
{var state_24128__$1 = state_24128;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24128__$1,(45),dchan);
} else
{if((state_val_24129 === (37)))
{var inst_24096 = (state_24128[(23)]);var inst_24000 = (state_24128[(11)]);var inst_24087 = (state_24128[(25)]);var inst_24096__$1 = cljs.core.first.call(null,inst_24087);var inst_24097 = cljs.core.async.put_BANG_.call(null,inst_24096__$1,inst_24000,done);var state_24128__$1 = (function (){var statearr_24204 = state_24128;(statearr_24204[(23)] = inst_24096__$1);
return statearr_24204;
})();if(cljs.core.truth_(inst_24097))
{var statearr_24205_24267 = state_24128__$1;(statearr_24205_24267[(1)] = (39));
} else
{var statearr_24206_24268 = state_24128__$1;(statearr_24206_24268[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24129 === (8)))
{var inst_24012 = (state_24128[(13)]);var inst_24011 = (state_24128[(16)]);var inst_24014 = (inst_24012 < inst_24011);var inst_24015 = inst_24014;var state_24128__$1 = state_24128;if(cljs.core.truth_(inst_24015))
{var statearr_24207_24269 = state_24128__$1;(statearr_24207_24269[(1)] = (10));
} else
{var statearr_24208_24270 = state_24128__$1;(statearr_24208_24270[(1)] = (11));
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
});})(c__9125__auto___24216,cs,m,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___24216,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24212[(0)] = state_machine__9111__auto__);
(statearr_24212[(1)] = (1));
return statearr_24212;
});
var state_machine__9111__auto____1 = (function (state_24128){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24128);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24213){if((e24213 instanceof Object))
{var ex__9114__auto__ = e24213;var statearr_24214_24271 = state_24128;(statearr_24214_24271[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24128);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24213;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24272 = state_24128;
state_24128 = G__24272;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24128){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24216,cs,m,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_24215 = f__9126__auto__.call(null);(statearr_24215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24216);
return statearr_24215;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24216,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj24274 = {};return obj24274;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24275){var map__24280 = p__24275;var map__24280__$1 = ((cljs.core.seq_QMARK_.call(null,map__24280))?cljs.core.apply.call(null,cljs.core.hash_map,map__24280):map__24280);var opts = map__24280__$1;var statearr_24281_24284 = state;(statearr_24281_24284[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24280,map__24280__$1,opts){
return (function (val){var statearr_24282_24285 = state;(statearr_24282_24285[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24280,map__24280__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_24283_24286 = state;(statearr_24283_24286[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24275 = null;if (arguments.length > 3) {
  p__24275 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24275);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24287){
var state = cljs.core.first(arglist__24287);
arglist__24287 = cljs.core.next(arglist__24287);
var cont_block = cljs.core.first(arglist__24287);
arglist__24287 = cljs.core.next(arglist__24287);
var ports = cljs.core.first(arglist__24287);
var p__24275 = cljs.core.rest(arglist__24287);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24275);
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
;var m = (function (){if(typeof cljs.core.async.t24407 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24407 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24408){
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
this.meta24408 = meta24408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24407.cljs$lang$type = true;
cljs.core.async.t24407.cljs$lang$ctorStr = "cljs.core.async/t24407";
cljs.core.async.t24407.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24407");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24407.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24407.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24407.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24407.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24407.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24407.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24407.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24407.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24407.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24409){var self__ = this;
var _24409__$1 = this;return self__.meta24408;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24409,meta24408__$1){var self__ = this;
var _24409__$1 = this;return (new cljs.core.async.t24407(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24408__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24407 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24407(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24408){return (new cljs.core.async.t24407(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24408));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24407(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__9125__auto___24526 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24479){var state_val_24480 = (state_24479[(1)]);if((state_val_24480 === (7)))
{var inst_24423 = (state_24479[(7)]);var inst_24428 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24423);var state_24479__$1 = state_24479;var statearr_24481_24527 = state_24479__$1;(statearr_24481_24527[(2)] = inst_24428);
(statearr_24481_24527[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24480 === (20)))
{var inst_24438 = (state_24479[(8)]);var state_24479__$1 = state_24479;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24479__$1,(23),out,inst_24438);
} else
{if((state_val_24480 === (1)))
{var inst_24413 = (state_24479[(9)]);var inst_24413__$1 = calc_state.call(null);var inst_24414 = cljs.core.seq_QMARK_.call(null,inst_24413__$1);var state_24479__$1 = (function (){var statearr_24482 = state_24479;(statearr_24482[(9)] = inst_24413__$1);
return statearr_24482;
})();if(inst_24414)
{var statearr_24483_24528 = state_24479__$1;(statearr_24483_24528[(1)] = (2));
} else
{var statearr_24484_24529 = state_24479__$1;(statearr_24484_24529[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24480 === (24)))
{var inst_24431 = (state_24479[(10)]);var inst_24423 = inst_24431;var state_24479__$1 = (function (){var statearr_24485 = state_24479;(statearr_24485[(7)] = inst_24423);
return statearr_24485;
})();var statearr_24486_24530 = state_24479__$1;(statearr_24486_24530[(2)] = null);
(statearr_24486_24530[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24480 === (4)))
{var inst_24413 = (state_24479[(9)]);var inst_24419 = (state_24479[(2)]);var inst_24420 = cljs.core.get.call(null,inst_24419,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24421 = cljs.core.get.call(null,inst_24419,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24422 = cljs.core.get.call(null,inst_24419,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_24423 = inst_24413;var state_24479__$1 = (function (){var statearr_24487 = state_24479;(statearr_24487[(11)] = inst_24420);
(statearr_24487[(7)] = inst_24423);
(statearr_24487[(12)] = inst_24422);
(statearr_24487[(13)] = inst_24421);
return statearr_24487;
})();var statearr_24488_24531 = state_24479__$1;(statearr_24488_24531[(2)] = null);
(statearr_24488_24531[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24480 === (15)))
{var state_24479__$1 = state_24479;var statearr_24489_24532 = state_24479__$1;(statearr_24489_24532[(2)] = null);
(statearr_24489_24532[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24480 === (21)))
{var inst_24431 = (state_24479[(10)]);var inst_24423 = inst_24431;var state_24479__$1 = (function (){var statearr_24490 = state_24479;(statearr_24490[(7)] = inst_24423);
return statearr_24490;
})();var statearr_24491_24533 = state_24479__$1;(statearr_24491_24533[(2)] = null);
(statearr_24491_24533[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24480 === (13)))
{var inst_24475 = (state_24479[(2)]);var state_24479__$1 = state_24479;var statearr_24492_24534 = state_24479__$1;(statearr_24492_24534[(2)] = inst_24475);
(statearr_24492_24534[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24480 === (22)))
{var inst_24473 = (state_24479[(2)]);var state_24479__$1 = state_24479;var statearr_24493_24535 = state_24479__$1;(statearr_24493_24535[(2)] = inst_24473);
(statearr_24493_24535[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24480 === (6)))
{var inst_24477 = (state_24479[(2)]);var state_24479__$1 = state_24479;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24479__$1,inst_24477);
} else
{if((state_val_24480 === (25)))
{var state_24479__$1 = state_24479;var statearr_24494_24536 = state_24479__$1;(statearr_24494_24536[(2)] = null);
(statearr_24494_24536[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24480 === (17)))
{var inst_24453 = (state_24479[(14)]);var state_24479__$1 = state_24479;var statearr_24495_24537 = state_24479__$1;(statearr_24495_24537[(2)] = inst_24453);
(statearr_24495_24537[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24480 === (3)))
{var inst_24413 = (state_24479[(9)]);var state_24479__$1 = state_24479;var statearr_24496_24538 = state_24479__$1;(statearr_24496_24538[(2)] = inst_24413);
(statearr_24496_24538[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24480 === (12)))
{var inst_24439 = (state_24479[(15)]);var inst_24453 = (state_24479[(14)]);var inst_24434 = (state_24479[(16)]);var inst_24453__$1 = inst_24434.call(null,inst_24439);var state_24479__$1 = (function (){var statearr_24497 = state_24479;(statearr_24497[(14)] = inst_24453__$1);
return statearr_24497;
})();if(cljs.core.truth_(inst_24453__$1))
{var statearr_24498_24539 = state_24479__$1;(statearr_24498_24539[(1)] = (17));
} else
{var statearr_24499_24540 = state_24479__$1;(statearr_24499_24540[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24480 === (2)))
{var inst_24413 = (state_24479[(9)]);var inst_24416 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24413);var state_24479__$1 = state_24479;var statearr_24500_24541 = state_24479__$1;(statearr_24500_24541[(2)] = inst_24416);
(statearr_24500_24541[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24480 === (23)))
{var inst_24464 = (state_24479[(2)]);var state_24479__$1 = state_24479;if(cljs.core.truth_(inst_24464))
{var statearr_24501_24542 = state_24479__$1;(statearr_24501_24542[(1)] = (24));
} else
{var statearr_24502_24543 = state_24479__$1;(statearr_24502_24543[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24480 === (19)))
{var inst_24461 = (state_24479[(2)]);var state_24479__$1 = state_24479;if(cljs.core.truth_(inst_24461))
{var statearr_24503_24544 = state_24479__$1;(statearr_24503_24544[(1)] = (20));
} else
{var statearr_24504_24545 = state_24479__$1;(statearr_24504_24545[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24480 === (11)))
{var inst_24438 = (state_24479[(8)]);var inst_24444 = (inst_24438 == null);var state_24479__$1 = state_24479;if(cljs.core.truth_(inst_24444))
{var statearr_24505_24546 = state_24479__$1;(statearr_24505_24546[(1)] = (14));
} else
{var statearr_24506_24547 = state_24479__$1;(statearr_24506_24547[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24480 === (9)))
{var inst_24431 = (state_24479[(10)]);var inst_24431__$1 = (state_24479[(2)]);var inst_24432 = cljs.core.get.call(null,inst_24431__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24433 = cljs.core.get.call(null,inst_24431__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24434 = cljs.core.get.call(null,inst_24431__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_24479__$1 = (function (){var statearr_24507 = state_24479;(statearr_24507[(10)] = inst_24431__$1);
(statearr_24507[(17)] = inst_24433);
(statearr_24507[(16)] = inst_24434);
return statearr_24507;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_24479__$1,(10),inst_24432);
} else
{if((state_val_24480 === (5)))
{var inst_24423 = (state_24479[(7)]);var inst_24426 = cljs.core.seq_QMARK_.call(null,inst_24423);var state_24479__$1 = state_24479;if(inst_24426)
{var statearr_24508_24548 = state_24479__$1;(statearr_24508_24548[(1)] = (7));
} else
{var statearr_24509_24549 = state_24479__$1;(statearr_24509_24549[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24480 === (14)))
{var inst_24439 = (state_24479[(15)]);var inst_24446 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24439);var state_24479__$1 = state_24479;var statearr_24510_24550 = state_24479__$1;(statearr_24510_24550[(2)] = inst_24446);
(statearr_24510_24550[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24480 === (26)))
{var inst_24469 = (state_24479[(2)]);var state_24479__$1 = state_24479;var statearr_24511_24551 = state_24479__$1;(statearr_24511_24551[(2)] = inst_24469);
(statearr_24511_24551[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24480 === (16)))
{var inst_24449 = (state_24479[(2)]);var inst_24450 = calc_state.call(null);var inst_24423 = inst_24450;var state_24479__$1 = (function (){var statearr_24512 = state_24479;(statearr_24512[(18)] = inst_24449);
(statearr_24512[(7)] = inst_24423);
return statearr_24512;
})();var statearr_24513_24552 = state_24479__$1;(statearr_24513_24552[(2)] = null);
(statearr_24513_24552[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24480 === (10)))
{var inst_24439 = (state_24479[(15)]);var inst_24438 = (state_24479[(8)]);var inst_24437 = (state_24479[(2)]);var inst_24438__$1 = cljs.core.nth.call(null,inst_24437,(0),null);var inst_24439__$1 = cljs.core.nth.call(null,inst_24437,(1),null);var inst_24440 = (inst_24438__$1 == null);var inst_24441 = cljs.core._EQ_.call(null,inst_24439__$1,change);var inst_24442 = (inst_24440) || (inst_24441);var state_24479__$1 = (function (){var statearr_24514 = state_24479;(statearr_24514[(15)] = inst_24439__$1);
(statearr_24514[(8)] = inst_24438__$1);
return statearr_24514;
})();if(cljs.core.truth_(inst_24442))
{var statearr_24515_24553 = state_24479__$1;(statearr_24515_24553[(1)] = (11));
} else
{var statearr_24516_24554 = state_24479__$1;(statearr_24516_24554[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24480 === (18)))
{var inst_24439 = (state_24479[(15)]);var inst_24433 = (state_24479[(17)]);var inst_24434 = (state_24479[(16)]);var inst_24456 = cljs.core.empty_QMARK_.call(null,inst_24434);var inst_24457 = inst_24433.call(null,inst_24439);var inst_24458 = cljs.core.not.call(null,inst_24457);var inst_24459 = (inst_24456) && (inst_24458);var state_24479__$1 = state_24479;var statearr_24517_24555 = state_24479__$1;(statearr_24517_24555[(2)] = inst_24459);
(statearr_24517_24555[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24480 === (8)))
{var inst_24423 = (state_24479[(7)]);var state_24479__$1 = state_24479;var statearr_24518_24556 = state_24479__$1;(statearr_24518_24556[(2)] = inst_24423);
(statearr_24518_24556[(1)] = (9));
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
});})(c__9125__auto___24526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__9110__auto__,c__9125__auto___24526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24522[(0)] = state_machine__9111__auto__);
(statearr_24522[(1)] = (1));
return statearr_24522;
});
var state_machine__9111__auto____1 = (function (state_24479){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24479);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24523){if((e24523 instanceof Object))
{var ex__9114__auto__ = e24523;var statearr_24524_24557 = state_24479;(statearr_24524_24557[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24479);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24523;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24558 = state_24479;
state_24479 = G__24558;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24479){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__9127__auto__ = (function (){var statearr_24525 = f__9126__auto__.call(null);(statearr_24525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24526);
return statearr_24525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj24560 = {};return obj24560;
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
return (function (p1__24561_SHARP_){if(cljs.core.truth_(p1__24561_SHARP_.call(null,topic)))
{return p1__24561_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__24561_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24684 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24684 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24685){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24685 = meta24685;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24684.cljs$lang$type = true;
cljs.core.async.t24684.cljs$lang$ctorStr = "cljs.core.async/t24684";
cljs.core.async.t24684.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24684");
});})(mults,ensure_mult))
;
cljs.core.async.t24684.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24684.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24684.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24684.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24684.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24684.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24684.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24684.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24686){var self__ = this;
var _24686__$1 = this;return self__.meta24685;
});})(mults,ensure_mult))
;
cljs.core.async.t24684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24686,meta24685__$1){var self__ = this;
var _24686__$1 = this;return (new cljs.core.async.t24684(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24685__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24684 = ((function (mults,ensure_mult){
return (function __GT_t24684(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24685){return (new cljs.core.async.t24684(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24685));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24684(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__9125__auto___24806 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24806,mults,ensure_mult,p){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24806,mults,ensure_mult,p){
return (function (state_24758){var state_val_24759 = (state_24758[(1)]);if((state_val_24759 === (7)))
{var inst_24754 = (state_24758[(2)]);var state_24758__$1 = state_24758;var statearr_24760_24807 = state_24758__$1;(statearr_24760_24807[(2)] = inst_24754);
(statearr_24760_24807[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24759 === (20)))
{var state_24758__$1 = state_24758;var statearr_24761_24808 = state_24758__$1;(statearr_24761_24808[(2)] = null);
(statearr_24761_24808[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24759 === (1)))
{var state_24758__$1 = state_24758;var statearr_24762_24809 = state_24758__$1;(statearr_24762_24809[(2)] = null);
(statearr_24762_24809[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24759 === (24)))
{var inst_24737 = (state_24758[(7)]);var inst_24746 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24737);var state_24758__$1 = state_24758;var statearr_24763_24810 = state_24758__$1;(statearr_24763_24810[(2)] = inst_24746);
(statearr_24763_24810[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24759 === (4)))
{var inst_24689 = (state_24758[(8)]);var inst_24689__$1 = (state_24758[(2)]);var inst_24690 = (inst_24689__$1 == null);var state_24758__$1 = (function (){var statearr_24764 = state_24758;(statearr_24764[(8)] = inst_24689__$1);
return statearr_24764;
})();if(cljs.core.truth_(inst_24690))
{var statearr_24765_24811 = state_24758__$1;(statearr_24765_24811[(1)] = (5));
} else
{var statearr_24766_24812 = state_24758__$1;(statearr_24766_24812[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24759 === (15)))
{var inst_24731 = (state_24758[(2)]);var state_24758__$1 = state_24758;var statearr_24767_24813 = state_24758__$1;(statearr_24767_24813[(2)] = inst_24731);
(statearr_24767_24813[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24759 === (21)))
{var inst_24751 = (state_24758[(2)]);var state_24758__$1 = (function (){var statearr_24768 = state_24758;(statearr_24768[(9)] = inst_24751);
return statearr_24768;
})();var statearr_24769_24814 = state_24758__$1;(statearr_24769_24814[(2)] = null);
(statearr_24769_24814[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24759 === (13)))
{var inst_24713 = (state_24758[(10)]);var inst_24715 = cljs.core.chunked_seq_QMARK_.call(null,inst_24713);var state_24758__$1 = state_24758;if(inst_24715)
{var statearr_24770_24815 = state_24758__$1;(statearr_24770_24815[(1)] = (16));
} else
{var statearr_24771_24816 = state_24758__$1;(statearr_24771_24816[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24759 === (22)))
{var inst_24743 = (state_24758[(2)]);var state_24758__$1 = state_24758;if(cljs.core.truth_(inst_24743))
{var statearr_24772_24817 = state_24758__$1;(statearr_24772_24817[(1)] = (23));
} else
{var statearr_24773_24818 = state_24758__$1;(statearr_24773_24818[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24759 === (6)))
{var inst_24689 = (state_24758[(8)]);var inst_24737 = (state_24758[(7)]);var inst_24739 = (state_24758[(11)]);var inst_24737__$1 = topic_fn.call(null,inst_24689);var inst_24738 = cljs.core.deref.call(null,mults);var inst_24739__$1 = cljs.core.get.call(null,inst_24738,inst_24737__$1);var state_24758__$1 = (function (){var statearr_24774 = state_24758;(statearr_24774[(7)] = inst_24737__$1);
(statearr_24774[(11)] = inst_24739__$1);
return statearr_24774;
})();if(cljs.core.truth_(inst_24739__$1))
{var statearr_24775_24819 = state_24758__$1;(statearr_24775_24819[(1)] = (19));
} else
{var statearr_24776_24820 = state_24758__$1;(statearr_24776_24820[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24759 === (25)))
{var inst_24748 = (state_24758[(2)]);var state_24758__$1 = state_24758;var statearr_24777_24821 = state_24758__$1;(statearr_24777_24821[(2)] = inst_24748);
(statearr_24777_24821[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24759 === (17)))
{var inst_24713 = (state_24758[(10)]);var inst_24722 = cljs.core.first.call(null,inst_24713);var inst_24723 = cljs.core.async.muxch_STAR_.call(null,inst_24722);var inst_24724 = cljs.core.async.close_BANG_.call(null,inst_24723);var inst_24725 = cljs.core.next.call(null,inst_24713);var inst_24699 = inst_24725;var inst_24700 = null;var inst_24701 = (0);var inst_24702 = (0);var state_24758__$1 = (function (){var statearr_24778 = state_24758;(statearr_24778[(12)] = inst_24724);
(statearr_24778[(13)] = inst_24699);
(statearr_24778[(14)] = inst_24701);
(statearr_24778[(15)] = inst_24702);
(statearr_24778[(16)] = inst_24700);
return statearr_24778;
})();var statearr_24779_24822 = state_24758__$1;(statearr_24779_24822[(2)] = null);
(statearr_24779_24822[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24759 === (3)))
{var inst_24756 = (state_24758[(2)]);var state_24758__$1 = state_24758;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24758__$1,inst_24756);
} else
{if((state_val_24759 === (12)))
{var inst_24733 = (state_24758[(2)]);var state_24758__$1 = state_24758;var statearr_24780_24823 = state_24758__$1;(statearr_24780_24823[(2)] = inst_24733);
(statearr_24780_24823[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24759 === (2)))
{var state_24758__$1 = state_24758;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24758__$1,(4),ch);
} else
{if((state_val_24759 === (23)))
{var state_24758__$1 = state_24758;var statearr_24781_24824 = state_24758__$1;(statearr_24781_24824[(2)] = null);
(statearr_24781_24824[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24759 === (19)))
{var inst_24689 = (state_24758[(8)]);var inst_24739 = (state_24758[(11)]);var inst_24741 = cljs.core.async.muxch_STAR_.call(null,inst_24739);var state_24758__$1 = state_24758;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24758__$1,(22),inst_24741,inst_24689);
} else
{if((state_val_24759 === (11)))
{var inst_24699 = (state_24758[(13)]);var inst_24713 = (state_24758[(10)]);var inst_24713__$1 = cljs.core.seq.call(null,inst_24699);var state_24758__$1 = (function (){var statearr_24782 = state_24758;(statearr_24782[(10)] = inst_24713__$1);
return statearr_24782;
})();if(inst_24713__$1)
{var statearr_24783_24825 = state_24758__$1;(statearr_24783_24825[(1)] = (13));
} else
{var statearr_24784_24826 = state_24758__$1;(statearr_24784_24826[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24759 === (9)))
{var inst_24735 = (state_24758[(2)]);var state_24758__$1 = state_24758;var statearr_24785_24827 = state_24758__$1;(statearr_24785_24827[(2)] = inst_24735);
(statearr_24785_24827[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24759 === (5)))
{var inst_24696 = cljs.core.deref.call(null,mults);var inst_24697 = cljs.core.vals.call(null,inst_24696);var inst_24698 = cljs.core.seq.call(null,inst_24697);var inst_24699 = inst_24698;var inst_24700 = null;var inst_24701 = (0);var inst_24702 = (0);var state_24758__$1 = (function (){var statearr_24786 = state_24758;(statearr_24786[(13)] = inst_24699);
(statearr_24786[(14)] = inst_24701);
(statearr_24786[(15)] = inst_24702);
(statearr_24786[(16)] = inst_24700);
return statearr_24786;
})();var statearr_24787_24828 = state_24758__$1;(statearr_24787_24828[(2)] = null);
(statearr_24787_24828[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24759 === (14)))
{var state_24758__$1 = state_24758;var statearr_24791_24829 = state_24758__$1;(statearr_24791_24829[(2)] = null);
(statearr_24791_24829[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24759 === (16)))
{var inst_24713 = (state_24758[(10)]);var inst_24717 = cljs.core.chunk_first.call(null,inst_24713);var inst_24718 = cljs.core.chunk_rest.call(null,inst_24713);var inst_24719 = cljs.core.count.call(null,inst_24717);var inst_24699 = inst_24718;var inst_24700 = inst_24717;var inst_24701 = inst_24719;var inst_24702 = (0);var state_24758__$1 = (function (){var statearr_24792 = state_24758;(statearr_24792[(13)] = inst_24699);
(statearr_24792[(14)] = inst_24701);
(statearr_24792[(15)] = inst_24702);
(statearr_24792[(16)] = inst_24700);
return statearr_24792;
})();var statearr_24793_24830 = state_24758__$1;(statearr_24793_24830[(2)] = null);
(statearr_24793_24830[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24759 === (10)))
{var inst_24699 = (state_24758[(13)]);var inst_24701 = (state_24758[(14)]);var inst_24702 = (state_24758[(15)]);var inst_24700 = (state_24758[(16)]);var inst_24707 = cljs.core._nth.call(null,inst_24700,inst_24702);var inst_24708 = cljs.core.async.muxch_STAR_.call(null,inst_24707);var inst_24709 = cljs.core.async.close_BANG_.call(null,inst_24708);var inst_24710 = (inst_24702 + (1));var tmp24788 = inst_24699;var tmp24789 = inst_24701;var tmp24790 = inst_24700;var inst_24699__$1 = tmp24788;var inst_24700__$1 = tmp24790;var inst_24701__$1 = tmp24789;var inst_24702__$1 = inst_24710;var state_24758__$1 = (function (){var statearr_24794 = state_24758;(statearr_24794[(13)] = inst_24699__$1);
(statearr_24794[(14)] = inst_24701__$1);
(statearr_24794[(15)] = inst_24702__$1);
(statearr_24794[(16)] = inst_24700__$1);
(statearr_24794[(17)] = inst_24709);
return statearr_24794;
})();var statearr_24795_24831 = state_24758__$1;(statearr_24795_24831[(2)] = null);
(statearr_24795_24831[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24759 === (18)))
{var inst_24728 = (state_24758[(2)]);var state_24758__$1 = state_24758;var statearr_24796_24832 = state_24758__$1;(statearr_24796_24832[(2)] = inst_24728);
(statearr_24796_24832[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24759 === (8)))
{var inst_24701 = (state_24758[(14)]);var inst_24702 = (state_24758[(15)]);var inst_24704 = (inst_24702 < inst_24701);var inst_24705 = inst_24704;var state_24758__$1 = state_24758;if(cljs.core.truth_(inst_24705))
{var statearr_24797_24833 = state_24758__$1;(statearr_24797_24833[(1)] = (10));
} else
{var statearr_24798_24834 = state_24758__$1;(statearr_24798_24834[(1)] = (11));
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
});})(c__9125__auto___24806,mults,ensure_mult,p))
;return ((function (switch__9110__auto__,c__9125__auto___24806,mults,ensure_mult,p){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24802[(0)] = state_machine__9111__auto__);
(statearr_24802[(1)] = (1));
return statearr_24802;
});
var state_machine__9111__auto____1 = (function (state_24758){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24758);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24803){if((e24803 instanceof Object))
{var ex__9114__auto__ = e24803;var statearr_24804_24835 = state_24758;(statearr_24804_24835[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24758);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24803;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24836 = state_24758;
state_24758 = G__24836;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24758){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24806,mults,ensure_mult,p))
})();var state__9127__auto__ = (function (){var statearr_24805 = f__9126__auto__.call(null);(statearr_24805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24806);
return statearr_24805;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24806,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__9125__auto___24973 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24973,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24973,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24943){var state_val_24944 = (state_24943[(1)]);if((state_val_24944 === (7)))
{var state_24943__$1 = state_24943;var statearr_24945_24974 = state_24943__$1;(statearr_24945_24974[(2)] = null);
(statearr_24945_24974[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24944 === (1)))
{var state_24943__$1 = state_24943;var statearr_24946_24975 = state_24943__$1;(statearr_24946_24975[(2)] = null);
(statearr_24946_24975[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24944 === (4)))
{var inst_24907 = (state_24943[(7)]);var inst_24909 = (inst_24907 < cnt);var state_24943__$1 = state_24943;if(cljs.core.truth_(inst_24909))
{var statearr_24947_24976 = state_24943__$1;(statearr_24947_24976[(1)] = (6));
} else
{var statearr_24948_24977 = state_24943__$1;(statearr_24948_24977[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24944 === (15)))
{var inst_24939 = (state_24943[(2)]);var state_24943__$1 = state_24943;var statearr_24949_24978 = state_24943__$1;(statearr_24949_24978[(2)] = inst_24939);
(statearr_24949_24978[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24944 === (13)))
{var inst_24932 = cljs.core.async.close_BANG_.call(null,out);var state_24943__$1 = state_24943;var statearr_24950_24979 = state_24943__$1;(statearr_24950_24979[(2)] = inst_24932);
(statearr_24950_24979[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24944 === (6)))
{var state_24943__$1 = state_24943;var statearr_24951_24980 = state_24943__$1;(statearr_24951_24980[(2)] = null);
(statearr_24951_24980[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24944 === (3)))
{var inst_24941 = (state_24943[(2)]);var state_24943__$1 = state_24943;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24943__$1,inst_24941);
} else
{if((state_val_24944 === (12)))
{var inst_24929 = (state_24943[(8)]);var inst_24929__$1 = (state_24943[(2)]);var inst_24930 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24929__$1);var state_24943__$1 = (function (){var statearr_24952 = state_24943;(statearr_24952[(8)] = inst_24929__$1);
return statearr_24952;
})();if(cljs.core.truth_(inst_24930))
{var statearr_24953_24981 = state_24943__$1;(statearr_24953_24981[(1)] = (13));
} else
{var statearr_24954_24982 = state_24943__$1;(statearr_24954_24982[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24944 === (2)))
{var inst_24906 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_24907 = (0);var state_24943__$1 = (function (){var statearr_24955 = state_24943;(statearr_24955[(9)] = inst_24906);
(statearr_24955[(7)] = inst_24907);
return statearr_24955;
})();var statearr_24956_24983 = state_24943__$1;(statearr_24956_24983[(2)] = null);
(statearr_24956_24983[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24944 === (11)))
{var inst_24907 = (state_24943[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24943,(10),Object,null,(9));var inst_24916 = chs__$1.call(null,inst_24907);var inst_24917 = done.call(null,inst_24907);var inst_24918 = cljs.core.async.take_BANG_.call(null,inst_24916,inst_24917);var state_24943__$1 = state_24943;var statearr_24957_24984 = state_24943__$1;(statearr_24957_24984[(2)] = inst_24918);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24943__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24944 === (9)))
{var inst_24907 = (state_24943[(7)]);var inst_24920 = (state_24943[(2)]);var inst_24921 = (inst_24907 + (1));var inst_24907__$1 = inst_24921;var state_24943__$1 = (function (){var statearr_24958 = state_24943;(statearr_24958[(7)] = inst_24907__$1);
(statearr_24958[(10)] = inst_24920);
return statearr_24958;
})();var statearr_24959_24985 = state_24943__$1;(statearr_24959_24985[(2)] = null);
(statearr_24959_24985[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24944 === (5)))
{var inst_24927 = (state_24943[(2)]);var state_24943__$1 = (function (){var statearr_24960 = state_24943;(statearr_24960[(11)] = inst_24927);
return statearr_24960;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24943__$1,(12),dchan);
} else
{if((state_val_24944 === (14)))
{var inst_24929 = (state_24943[(8)]);var inst_24934 = cljs.core.apply.call(null,f,inst_24929);var state_24943__$1 = state_24943;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24943__$1,(16),out,inst_24934);
} else
{if((state_val_24944 === (16)))
{var inst_24936 = (state_24943[(2)]);var state_24943__$1 = (function (){var statearr_24961 = state_24943;(statearr_24961[(12)] = inst_24936);
return statearr_24961;
})();var statearr_24962_24986 = state_24943__$1;(statearr_24962_24986[(2)] = null);
(statearr_24962_24986[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24944 === (10)))
{var inst_24911 = (state_24943[(2)]);var inst_24912 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_24943__$1 = (function (){var statearr_24963 = state_24943;(statearr_24963[(13)] = inst_24911);
return statearr_24963;
})();var statearr_24964_24987 = state_24943__$1;(statearr_24964_24987[(2)] = inst_24912);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24943__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24944 === (8)))
{var inst_24925 = (state_24943[(2)]);var state_24943__$1 = state_24943;var statearr_24965_24988 = state_24943__$1;(statearr_24965_24988[(2)] = inst_24925);
(statearr_24965_24988[(1)] = (5));
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
});})(c__9125__auto___24973,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___24973,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24969[(0)] = state_machine__9111__auto__);
(statearr_24969[(1)] = (1));
return statearr_24969;
});
var state_machine__9111__auto____1 = (function (state_24943){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24943);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24970){if((e24970 instanceof Object))
{var ex__9114__auto__ = e24970;var statearr_24971_24989 = state_24943;(statearr_24971_24989[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24943);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24970;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24990 = state_24943;
state_24943 = G__24990;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24943){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24973,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_24972 = f__9126__auto__.call(null);(statearr_24972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24973);
return statearr_24972;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24973,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25098 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25098,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25098,out){
return (function (state_25074){var state_val_25075 = (state_25074[(1)]);if((state_val_25075 === (7)))
{var inst_25054 = (state_25074[(7)]);var inst_25053 = (state_25074[(8)]);var inst_25053__$1 = (state_25074[(2)]);var inst_25054__$1 = cljs.core.nth.call(null,inst_25053__$1,(0),null);var inst_25055 = cljs.core.nth.call(null,inst_25053__$1,(1),null);var inst_25056 = (inst_25054__$1 == null);var state_25074__$1 = (function (){var statearr_25076 = state_25074;(statearr_25076[(7)] = inst_25054__$1);
(statearr_25076[(8)] = inst_25053__$1);
(statearr_25076[(9)] = inst_25055);
return statearr_25076;
})();if(cljs.core.truth_(inst_25056))
{var statearr_25077_25099 = state_25074__$1;(statearr_25077_25099[(1)] = (8));
} else
{var statearr_25078_25100 = state_25074__$1;(statearr_25078_25100[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25075 === (1)))
{var inst_25045 = cljs.core.vec.call(null,chs);var inst_25046 = inst_25045;var state_25074__$1 = (function (){var statearr_25079 = state_25074;(statearr_25079[(10)] = inst_25046);
return statearr_25079;
})();var statearr_25080_25101 = state_25074__$1;(statearr_25080_25101[(2)] = null);
(statearr_25080_25101[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25075 === (4)))
{var inst_25046 = (state_25074[(10)]);var state_25074__$1 = state_25074;return cljs.core.async.ioc_alts_BANG_.call(null,state_25074__$1,(7),inst_25046);
} else
{if((state_val_25075 === (6)))
{var inst_25070 = (state_25074[(2)]);var state_25074__$1 = state_25074;var statearr_25081_25102 = state_25074__$1;(statearr_25081_25102[(2)] = inst_25070);
(statearr_25081_25102[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25075 === (3)))
{var inst_25072 = (state_25074[(2)]);var state_25074__$1 = state_25074;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25074__$1,inst_25072);
} else
{if((state_val_25075 === (2)))
{var inst_25046 = (state_25074[(10)]);var inst_25048 = cljs.core.count.call(null,inst_25046);var inst_25049 = (inst_25048 > (0));var state_25074__$1 = state_25074;if(cljs.core.truth_(inst_25049))
{var statearr_25083_25103 = state_25074__$1;(statearr_25083_25103[(1)] = (4));
} else
{var statearr_25084_25104 = state_25074__$1;(statearr_25084_25104[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25075 === (11)))
{var inst_25046 = (state_25074[(10)]);var inst_25063 = (state_25074[(2)]);var tmp25082 = inst_25046;var inst_25046__$1 = tmp25082;var state_25074__$1 = (function (){var statearr_25085 = state_25074;(statearr_25085[(11)] = inst_25063);
(statearr_25085[(10)] = inst_25046__$1);
return statearr_25085;
})();var statearr_25086_25105 = state_25074__$1;(statearr_25086_25105[(2)] = null);
(statearr_25086_25105[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25075 === (9)))
{var inst_25054 = (state_25074[(7)]);var state_25074__$1 = state_25074;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25074__$1,(11),out,inst_25054);
} else
{if((state_val_25075 === (5)))
{var inst_25068 = cljs.core.async.close_BANG_.call(null,out);var state_25074__$1 = state_25074;var statearr_25087_25106 = state_25074__$1;(statearr_25087_25106[(2)] = inst_25068);
(statearr_25087_25106[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25075 === (10)))
{var inst_25066 = (state_25074[(2)]);var state_25074__$1 = state_25074;var statearr_25088_25107 = state_25074__$1;(statearr_25088_25107[(2)] = inst_25066);
(statearr_25088_25107[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25075 === (8)))
{var inst_25054 = (state_25074[(7)]);var inst_25053 = (state_25074[(8)]);var inst_25055 = (state_25074[(9)]);var inst_25046 = (state_25074[(10)]);var inst_25058 = (function (){var c = inst_25055;var v = inst_25054;var vec__25051 = inst_25053;var cs = inst_25046;return ((function (c,v,vec__25051,cs,inst_25054,inst_25053,inst_25055,inst_25046,state_val_25075,c__9125__auto___25098,out){
return (function (p1__24991_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__24991_SHARP_);
});
;})(c,v,vec__25051,cs,inst_25054,inst_25053,inst_25055,inst_25046,state_val_25075,c__9125__auto___25098,out))
})();var inst_25059 = cljs.core.filterv.call(null,inst_25058,inst_25046);var inst_25046__$1 = inst_25059;var state_25074__$1 = (function (){var statearr_25089 = state_25074;(statearr_25089[(10)] = inst_25046__$1);
return statearr_25089;
})();var statearr_25090_25108 = state_25074__$1;(statearr_25090_25108[(2)] = null);
(statearr_25090_25108[(1)] = (2));
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
});})(c__9125__auto___25098,out))
;return ((function (switch__9110__auto__,c__9125__auto___25098,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25094 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25094[(0)] = state_machine__9111__auto__);
(statearr_25094[(1)] = (1));
return statearr_25094;
});
var state_machine__9111__auto____1 = (function (state_25074){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25074);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25095){if((e25095 instanceof Object))
{var ex__9114__auto__ = e25095;var statearr_25096_25109 = state_25074;(statearr_25096_25109[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25074);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25095;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25110 = state_25074;
state_25074 = G__25110;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25074){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25098,out))
})();var state__9127__auto__ = (function (){var statearr_25097 = f__9126__auto__.call(null);(statearr_25097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25098);
return statearr_25097;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25098,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25203 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25203,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25203,out){
return (function (state_25180){var state_val_25181 = (state_25180[(1)]);if((state_val_25181 === (7)))
{var inst_25162 = (state_25180[(7)]);var inst_25162__$1 = (state_25180[(2)]);var inst_25163 = (inst_25162__$1 == null);var inst_25164 = cljs.core.not.call(null,inst_25163);var state_25180__$1 = (function (){var statearr_25182 = state_25180;(statearr_25182[(7)] = inst_25162__$1);
return statearr_25182;
})();if(inst_25164)
{var statearr_25183_25204 = state_25180__$1;(statearr_25183_25204[(1)] = (8));
} else
{var statearr_25184_25205 = state_25180__$1;(statearr_25184_25205[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25181 === (1)))
{var inst_25157 = (0);var state_25180__$1 = (function (){var statearr_25185 = state_25180;(statearr_25185[(8)] = inst_25157);
return statearr_25185;
})();var statearr_25186_25206 = state_25180__$1;(statearr_25186_25206[(2)] = null);
(statearr_25186_25206[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25181 === (4)))
{var state_25180__$1 = state_25180;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25180__$1,(7),ch);
} else
{if((state_val_25181 === (6)))
{var inst_25175 = (state_25180[(2)]);var state_25180__$1 = state_25180;var statearr_25187_25207 = state_25180__$1;(statearr_25187_25207[(2)] = inst_25175);
(statearr_25187_25207[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25181 === (3)))
{var inst_25177 = (state_25180[(2)]);var inst_25178 = cljs.core.async.close_BANG_.call(null,out);var state_25180__$1 = (function (){var statearr_25188 = state_25180;(statearr_25188[(9)] = inst_25177);
return statearr_25188;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25180__$1,inst_25178);
} else
{if((state_val_25181 === (2)))
{var inst_25157 = (state_25180[(8)]);var inst_25159 = (inst_25157 < n);var state_25180__$1 = state_25180;if(cljs.core.truth_(inst_25159))
{var statearr_25189_25208 = state_25180__$1;(statearr_25189_25208[(1)] = (4));
} else
{var statearr_25190_25209 = state_25180__$1;(statearr_25190_25209[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25181 === (11)))
{var inst_25157 = (state_25180[(8)]);var inst_25167 = (state_25180[(2)]);var inst_25168 = (inst_25157 + (1));var inst_25157__$1 = inst_25168;var state_25180__$1 = (function (){var statearr_25191 = state_25180;(statearr_25191[(8)] = inst_25157__$1);
(statearr_25191[(10)] = inst_25167);
return statearr_25191;
})();var statearr_25192_25210 = state_25180__$1;(statearr_25192_25210[(2)] = null);
(statearr_25192_25210[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25181 === (9)))
{var state_25180__$1 = state_25180;var statearr_25193_25211 = state_25180__$1;(statearr_25193_25211[(2)] = null);
(statearr_25193_25211[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25181 === (5)))
{var state_25180__$1 = state_25180;var statearr_25194_25212 = state_25180__$1;(statearr_25194_25212[(2)] = null);
(statearr_25194_25212[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25181 === (10)))
{var inst_25172 = (state_25180[(2)]);var state_25180__$1 = state_25180;var statearr_25195_25213 = state_25180__$1;(statearr_25195_25213[(2)] = inst_25172);
(statearr_25195_25213[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25181 === (8)))
{var inst_25162 = (state_25180[(7)]);var state_25180__$1 = state_25180;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25180__$1,(11),out,inst_25162);
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
});})(c__9125__auto___25203,out))
;return ((function (switch__9110__auto__,c__9125__auto___25203,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25199 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25199[(0)] = state_machine__9111__auto__);
(statearr_25199[(1)] = (1));
return statearr_25199;
});
var state_machine__9111__auto____1 = (function (state_25180){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25180);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25200){if((e25200 instanceof Object))
{var ex__9114__auto__ = e25200;var statearr_25201_25214 = state_25180;(statearr_25201_25214[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25180);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25200;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25215 = state_25180;
state_25180 = G__25215;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25180){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25203,out))
})();var state__9127__auto__ = (function (){var statearr_25202 = f__9126__auto__.call(null);(statearr_25202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25203);
return statearr_25202;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25203,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25223 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25223 = (function (ch,f,map_LT_,meta25224){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25224 = meta25224;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25223.cljs$lang$type = true;
cljs.core.async.t25223.cljs$lang$ctorStr = "cljs.core.async/t25223";
cljs.core.async.t25223.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25223");
});
cljs.core.async.t25223.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25223.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t25223.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25223.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25226 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25226 = (function (fn1,_,meta25224,ch,f,map_LT_,meta25227){
this.fn1 = fn1;
this._ = _;
this.meta25224 = meta25224;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25227 = meta25227;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25226.cljs$lang$type = true;
cljs.core.async.t25226.cljs$lang$ctorStr = "cljs.core.async/t25226";
cljs.core.async.t25226.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25226");
});})(___$1))
;
cljs.core.async.t25226.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25226.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25226.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25216_SHARP_){return f1.call(null,(((p1__25216_SHARP_ == null))?null:self__.f.call(null,p1__25216_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25226.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25228){var self__ = this;
var _25228__$1 = this;return self__.meta25227;
});})(___$1))
;
cljs.core.async.t25226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25228,meta25227__$1){var self__ = this;
var _25228__$1 = this;return (new cljs.core.async.t25226(self__.fn1,self__._,self__.meta25224,self__.ch,self__.f,self__.map_LT_,meta25227__$1));
});})(___$1))
;
cljs.core.async.__GT_t25226 = ((function (___$1){
return (function __GT_t25226(fn1__$1,___$2,meta25224__$1,ch__$2,f__$2,map_LT___$2,meta25227){return (new cljs.core.async.t25226(fn1__$1,___$2,meta25224__$1,ch__$2,f__$2,map_LT___$2,meta25227));
});})(___$1))
;
}
return (new cljs.core.async.t25226(fn1,___$1,self__.meta25224,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t25223.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25223.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25223.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25225){var self__ = this;
var _25225__$1 = this;return self__.meta25224;
});
cljs.core.async.t25223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25225,meta25224__$1){var self__ = this;
var _25225__$1 = this;return (new cljs.core.async.t25223(self__.ch,self__.f,self__.map_LT_,meta25224__$1));
});
cljs.core.async.__GT_t25223 = (function __GT_t25223(ch__$1,f__$1,map_LT___$1,meta25224){return (new cljs.core.async.t25223(ch__$1,f__$1,map_LT___$1,meta25224));
});
}
return (new cljs.core.async.t25223(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25232 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25232 = (function (ch,f,map_GT_,meta25233){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25233 = meta25233;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25232.cljs$lang$type = true;
cljs.core.async.t25232.cljs$lang$ctorStr = "cljs.core.async/t25232";
cljs.core.async.t25232.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25232");
});
cljs.core.async.t25232.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25232.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t25232.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25232.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25232.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25232.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25234){var self__ = this;
var _25234__$1 = this;return self__.meta25233;
});
cljs.core.async.t25232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25234,meta25233__$1){var self__ = this;
var _25234__$1 = this;return (new cljs.core.async.t25232(self__.ch,self__.f,self__.map_GT_,meta25233__$1));
});
cljs.core.async.__GT_t25232 = (function __GT_t25232(ch__$1,f__$1,map_GT___$1,meta25233){return (new cljs.core.async.t25232(ch__$1,f__$1,map_GT___$1,meta25233));
});
}
return (new cljs.core.async.t25232(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25238 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25238 = (function (ch,p,filter_GT_,meta25239){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25239 = meta25239;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25238.cljs$lang$type = true;
cljs.core.async.t25238.cljs$lang$ctorStr = "cljs.core.async/t25238";
cljs.core.async.t25238.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25238");
});
cljs.core.async.t25238.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25238.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t25238.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25238.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25238.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25238.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25238.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25240){var self__ = this;
var _25240__$1 = this;return self__.meta25239;
});
cljs.core.async.t25238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25240,meta25239__$1){var self__ = this;
var _25240__$1 = this;return (new cljs.core.async.t25238(self__.ch,self__.p,self__.filter_GT_,meta25239__$1));
});
cljs.core.async.__GT_t25238 = (function __GT_t25238(ch__$1,p__$1,filter_GT___$1,meta25239){return (new cljs.core.async.t25238(ch__$1,p__$1,filter_GT___$1,meta25239));
});
}
return (new cljs.core.async.t25238(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25323 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25323,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25323,out){
return (function (state_25302){var state_val_25303 = (state_25302[(1)]);if((state_val_25303 === (7)))
{var inst_25298 = (state_25302[(2)]);var state_25302__$1 = state_25302;var statearr_25304_25324 = state_25302__$1;(statearr_25304_25324[(2)] = inst_25298);
(statearr_25304_25324[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25303 === (1)))
{var state_25302__$1 = state_25302;var statearr_25305_25325 = state_25302__$1;(statearr_25305_25325[(2)] = null);
(statearr_25305_25325[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25303 === (4)))
{var inst_25284 = (state_25302[(7)]);var inst_25284__$1 = (state_25302[(2)]);var inst_25285 = (inst_25284__$1 == null);var state_25302__$1 = (function (){var statearr_25306 = state_25302;(statearr_25306[(7)] = inst_25284__$1);
return statearr_25306;
})();if(cljs.core.truth_(inst_25285))
{var statearr_25307_25326 = state_25302__$1;(statearr_25307_25326[(1)] = (5));
} else
{var statearr_25308_25327 = state_25302__$1;(statearr_25308_25327[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25303 === (6)))
{var inst_25284 = (state_25302[(7)]);var inst_25289 = p.call(null,inst_25284);var state_25302__$1 = state_25302;if(cljs.core.truth_(inst_25289))
{var statearr_25309_25328 = state_25302__$1;(statearr_25309_25328[(1)] = (8));
} else
{var statearr_25310_25329 = state_25302__$1;(statearr_25310_25329[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25303 === (3)))
{var inst_25300 = (state_25302[(2)]);var state_25302__$1 = state_25302;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25302__$1,inst_25300);
} else
{if((state_val_25303 === (2)))
{var state_25302__$1 = state_25302;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25302__$1,(4),ch);
} else
{if((state_val_25303 === (11)))
{var inst_25292 = (state_25302[(2)]);var state_25302__$1 = state_25302;var statearr_25311_25330 = state_25302__$1;(statearr_25311_25330[(2)] = inst_25292);
(statearr_25311_25330[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25303 === (9)))
{var state_25302__$1 = state_25302;var statearr_25312_25331 = state_25302__$1;(statearr_25312_25331[(2)] = null);
(statearr_25312_25331[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25303 === (5)))
{var inst_25287 = cljs.core.async.close_BANG_.call(null,out);var state_25302__$1 = state_25302;var statearr_25313_25332 = state_25302__$1;(statearr_25313_25332[(2)] = inst_25287);
(statearr_25313_25332[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25303 === (10)))
{var inst_25295 = (state_25302[(2)]);var state_25302__$1 = (function (){var statearr_25314 = state_25302;(statearr_25314[(8)] = inst_25295);
return statearr_25314;
})();var statearr_25315_25333 = state_25302__$1;(statearr_25315_25333[(2)] = null);
(statearr_25315_25333[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25303 === (8)))
{var inst_25284 = (state_25302[(7)]);var state_25302__$1 = state_25302;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25302__$1,(11),out,inst_25284);
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
});})(c__9125__auto___25323,out))
;return ((function (switch__9110__auto__,c__9125__auto___25323,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25319 = [null,null,null,null,null,null,null,null,null];(statearr_25319[(0)] = state_machine__9111__auto__);
(statearr_25319[(1)] = (1));
return statearr_25319;
});
var state_machine__9111__auto____1 = (function (state_25302){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25302);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25320){if((e25320 instanceof Object))
{var ex__9114__auto__ = e25320;var statearr_25321_25334 = state_25302;(statearr_25321_25334[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25302);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25320;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25335 = state_25302;
state_25302 = G__25335;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25302){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25323,out))
})();var state__9127__auto__ = (function (){var statearr_25322 = f__9126__auto__.call(null);(statearr_25322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25323);
return statearr_25322;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25323,out))
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
return (function (state_25501){var state_val_25502 = (state_25501[(1)]);if((state_val_25502 === (7)))
{var inst_25497 = (state_25501[(2)]);var state_25501__$1 = state_25501;var statearr_25503_25544 = state_25501__$1;(statearr_25503_25544[(2)] = inst_25497);
(statearr_25503_25544[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25502 === (20)))
{var inst_25467 = (state_25501[(7)]);var inst_25478 = (state_25501[(2)]);var inst_25479 = cljs.core.next.call(null,inst_25467);var inst_25453 = inst_25479;var inst_25454 = null;var inst_25455 = (0);var inst_25456 = (0);var state_25501__$1 = (function (){var statearr_25504 = state_25501;(statearr_25504[(8)] = inst_25478);
(statearr_25504[(9)] = inst_25456);
(statearr_25504[(10)] = inst_25454);
(statearr_25504[(11)] = inst_25455);
(statearr_25504[(12)] = inst_25453);
return statearr_25504;
})();var statearr_25505_25545 = state_25501__$1;(statearr_25505_25545[(2)] = null);
(statearr_25505_25545[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25502 === (1)))
{var state_25501__$1 = state_25501;var statearr_25506_25546 = state_25501__$1;(statearr_25506_25546[(2)] = null);
(statearr_25506_25546[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25502 === (4)))
{var inst_25442 = (state_25501[(13)]);var inst_25442__$1 = (state_25501[(2)]);var inst_25443 = (inst_25442__$1 == null);var state_25501__$1 = (function (){var statearr_25507 = state_25501;(statearr_25507[(13)] = inst_25442__$1);
return statearr_25507;
})();if(cljs.core.truth_(inst_25443))
{var statearr_25508_25547 = state_25501__$1;(statearr_25508_25547[(1)] = (5));
} else
{var statearr_25509_25548 = state_25501__$1;(statearr_25509_25548[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25502 === (15)))
{var state_25501__$1 = state_25501;var statearr_25513_25549 = state_25501__$1;(statearr_25513_25549[(2)] = null);
(statearr_25513_25549[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25502 === (21)))
{var state_25501__$1 = state_25501;var statearr_25514_25550 = state_25501__$1;(statearr_25514_25550[(2)] = null);
(statearr_25514_25550[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25502 === (13)))
{var inst_25456 = (state_25501[(9)]);var inst_25454 = (state_25501[(10)]);var inst_25455 = (state_25501[(11)]);var inst_25453 = (state_25501[(12)]);var inst_25463 = (state_25501[(2)]);var inst_25464 = (inst_25456 + (1));var tmp25510 = inst_25454;var tmp25511 = inst_25455;var tmp25512 = inst_25453;var inst_25453__$1 = tmp25512;var inst_25454__$1 = tmp25510;var inst_25455__$1 = tmp25511;var inst_25456__$1 = inst_25464;var state_25501__$1 = (function (){var statearr_25515 = state_25501;(statearr_25515[(14)] = inst_25463);
(statearr_25515[(9)] = inst_25456__$1);
(statearr_25515[(10)] = inst_25454__$1);
(statearr_25515[(11)] = inst_25455__$1);
(statearr_25515[(12)] = inst_25453__$1);
return statearr_25515;
})();var statearr_25516_25551 = state_25501__$1;(statearr_25516_25551[(2)] = null);
(statearr_25516_25551[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25502 === (22)))
{var state_25501__$1 = state_25501;var statearr_25517_25552 = state_25501__$1;(statearr_25517_25552[(2)] = null);
(statearr_25517_25552[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25502 === (6)))
{var inst_25442 = (state_25501[(13)]);var inst_25451 = f.call(null,inst_25442);var inst_25452 = cljs.core.seq.call(null,inst_25451);var inst_25453 = inst_25452;var inst_25454 = null;var inst_25455 = (0);var inst_25456 = (0);var state_25501__$1 = (function (){var statearr_25518 = state_25501;(statearr_25518[(9)] = inst_25456);
(statearr_25518[(10)] = inst_25454);
(statearr_25518[(11)] = inst_25455);
(statearr_25518[(12)] = inst_25453);
return statearr_25518;
})();var statearr_25519_25553 = state_25501__$1;(statearr_25519_25553[(2)] = null);
(statearr_25519_25553[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25502 === (17)))
{var inst_25467 = (state_25501[(7)]);var inst_25471 = cljs.core.chunk_first.call(null,inst_25467);var inst_25472 = cljs.core.chunk_rest.call(null,inst_25467);var inst_25473 = cljs.core.count.call(null,inst_25471);var inst_25453 = inst_25472;var inst_25454 = inst_25471;var inst_25455 = inst_25473;var inst_25456 = (0);var state_25501__$1 = (function (){var statearr_25520 = state_25501;(statearr_25520[(9)] = inst_25456);
(statearr_25520[(10)] = inst_25454);
(statearr_25520[(11)] = inst_25455);
(statearr_25520[(12)] = inst_25453);
return statearr_25520;
})();var statearr_25521_25554 = state_25501__$1;(statearr_25521_25554[(2)] = null);
(statearr_25521_25554[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25502 === (3)))
{var inst_25499 = (state_25501[(2)]);var state_25501__$1 = state_25501;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25501__$1,inst_25499);
} else
{if((state_val_25502 === (12)))
{var inst_25487 = (state_25501[(2)]);var state_25501__$1 = state_25501;var statearr_25522_25555 = state_25501__$1;(statearr_25522_25555[(2)] = inst_25487);
(statearr_25522_25555[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25502 === (2)))
{var state_25501__$1 = state_25501;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25501__$1,(4),in$);
} else
{if((state_val_25502 === (23)))
{var inst_25495 = (state_25501[(2)]);var state_25501__$1 = state_25501;var statearr_25523_25556 = state_25501__$1;(statearr_25523_25556[(2)] = inst_25495);
(statearr_25523_25556[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25502 === (19)))
{var inst_25482 = (state_25501[(2)]);var state_25501__$1 = state_25501;var statearr_25524_25557 = state_25501__$1;(statearr_25524_25557[(2)] = inst_25482);
(statearr_25524_25557[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25502 === (11)))
{var inst_25467 = (state_25501[(7)]);var inst_25453 = (state_25501[(12)]);var inst_25467__$1 = cljs.core.seq.call(null,inst_25453);var state_25501__$1 = (function (){var statearr_25525 = state_25501;(statearr_25525[(7)] = inst_25467__$1);
return statearr_25525;
})();if(inst_25467__$1)
{var statearr_25526_25558 = state_25501__$1;(statearr_25526_25558[(1)] = (14));
} else
{var statearr_25527_25559 = state_25501__$1;(statearr_25527_25559[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25502 === (9)))
{var inst_25489 = (state_25501[(2)]);var inst_25490 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_25501__$1 = (function (){var statearr_25528 = state_25501;(statearr_25528[(15)] = inst_25489);
return statearr_25528;
})();if(cljs.core.truth_(inst_25490))
{var statearr_25529_25560 = state_25501__$1;(statearr_25529_25560[(1)] = (21));
} else
{var statearr_25530_25561 = state_25501__$1;(statearr_25530_25561[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25502 === (5)))
{var inst_25445 = cljs.core.async.close_BANG_.call(null,out);var state_25501__$1 = state_25501;var statearr_25531_25562 = state_25501__$1;(statearr_25531_25562[(2)] = inst_25445);
(statearr_25531_25562[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25502 === (14)))
{var inst_25467 = (state_25501[(7)]);var inst_25469 = cljs.core.chunked_seq_QMARK_.call(null,inst_25467);var state_25501__$1 = state_25501;if(inst_25469)
{var statearr_25532_25563 = state_25501__$1;(statearr_25532_25563[(1)] = (17));
} else
{var statearr_25533_25564 = state_25501__$1;(statearr_25533_25564[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25502 === (16)))
{var inst_25485 = (state_25501[(2)]);var state_25501__$1 = state_25501;var statearr_25534_25565 = state_25501__$1;(statearr_25534_25565[(2)] = inst_25485);
(statearr_25534_25565[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25502 === (10)))
{var inst_25456 = (state_25501[(9)]);var inst_25454 = (state_25501[(10)]);var inst_25461 = cljs.core._nth.call(null,inst_25454,inst_25456);var state_25501__$1 = state_25501;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25501__$1,(13),out,inst_25461);
} else
{if((state_val_25502 === (18)))
{var inst_25467 = (state_25501[(7)]);var inst_25476 = cljs.core.first.call(null,inst_25467);var state_25501__$1 = state_25501;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25501__$1,(20),out,inst_25476);
} else
{if((state_val_25502 === (8)))
{var inst_25456 = (state_25501[(9)]);var inst_25455 = (state_25501[(11)]);var inst_25458 = (inst_25456 < inst_25455);var inst_25459 = inst_25458;var state_25501__$1 = state_25501;if(cljs.core.truth_(inst_25459))
{var statearr_25535_25566 = state_25501__$1;(statearr_25535_25566[(1)] = (10));
} else
{var statearr_25536_25567 = state_25501__$1;(statearr_25536_25567[(1)] = (11));
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
var state_machine__9111__auto____0 = (function (){var statearr_25540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25540[(0)] = state_machine__9111__auto__);
(statearr_25540[(1)] = (1));
return statearr_25540;
});
var state_machine__9111__auto____1 = (function (state_25501){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25501);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25541){if((e25541 instanceof Object))
{var ex__9114__auto__ = e25541;var statearr_25542_25568 = state_25501;(statearr_25542_25568[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25501);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25541;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25569 = state_25501;
state_25501 = G__25569;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25501){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_25543 = f__9126__auto__.call(null);(statearr_25543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_25543;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25666 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25666,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25666,out){
return (function (state_25641){var state_val_25642 = (state_25641[(1)]);if((state_val_25642 === (7)))
{var inst_25636 = (state_25641[(2)]);var state_25641__$1 = state_25641;var statearr_25643_25667 = state_25641__$1;(statearr_25643_25667[(2)] = inst_25636);
(statearr_25643_25667[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25642 === (1)))
{var inst_25618 = null;var state_25641__$1 = (function (){var statearr_25644 = state_25641;(statearr_25644[(7)] = inst_25618);
return statearr_25644;
})();var statearr_25645_25668 = state_25641__$1;(statearr_25645_25668[(2)] = null);
(statearr_25645_25668[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25642 === (4)))
{var inst_25621 = (state_25641[(8)]);var inst_25621__$1 = (state_25641[(2)]);var inst_25622 = (inst_25621__$1 == null);var inst_25623 = cljs.core.not.call(null,inst_25622);var state_25641__$1 = (function (){var statearr_25646 = state_25641;(statearr_25646[(8)] = inst_25621__$1);
return statearr_25646;
})();if(inst_25623)
{var statearr_25647_25669 = state_25641__$1;(statearr_25647_25669[(1)] = (5));
} else
{var statearr_25648_25670 = state_25641__$1;(statearr_25648_25670[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25642 === (6)))
{var state_25641__$1 = state_25641;var statearr_25649_25671 = state_25641__$1;(statearr_25649_25671[(2)] = null);
(statearr_25649_25671[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25642 === (3)))
{var inst_25638 = (state_25641[(2)]);var inst_25639 = cljs.core.async.close_BANG_.call(null,out);var state_25641__$1 = (function (){var statearr_25650 = state_25641;(statearr_25650[(9)] = inst_25638);
return statearr_25650;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25641__$1,inst_25639);
} else
{if((state_val_25642 === (2)))
{var state_25641__$1 = state_25641;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25641__$1,(4),ch);
} else
{if((state_val_25642 === (11)))
{var inst_25621 = (state_25641[(8)]);var inst_25630 = (state_25641[(2)]);var inst_25618 = inst_25621;var state_25641__$1 = (function (){var statearr_25651 = state_25641;(statearr_25651[(7)] = inst_25618);
(statearr_25651[(10)] = inst_25630);
return statearr_25651;
})();var statearr_25652_25672 = state_25641__$1;(statearr_25652_25672[(2)] = null);
(statearr_25652_25672[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25642 === (9)))
{var inst_25621 = (state_25641[(8)]);var state_25641__$1 = state_25641;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25641__$1,(11),out,inst_25621);
} else
{if((state_val_25642 === (5)))
{var inst_25618 = (state_25641[(7)]);var inst_25621 = (state_25641[(8)]);var inst_25625 = cljs.core._EQ_.call(null,inst_25621,inst_25618);var state_25641__$1 = state_25641;if(inst_25625)
{var statearr_25654_25673 = state_25641__$1;(statearr_25654_25673[(1)] = (8));
} else
{var statearr_25655_25674 = state_25641__$1;(statearr_25655_25674[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25642 === (10)))
{var inst_25633 = (state_25641[(2)]);var state_25641__$1 = state_25641;var statearr_25656_25675 = state_25641__$1;(statearr_25656_25675[(2)] = inst_25633);
(statearr_25656_25675[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25642 === (8)))
{var inst_25618 = (state_25641[(7)]);var tmp25653 = inst_25618;var inst_25618__$1 = tmp25653;var state_25641__$1 = (function (){var statearr_25657 = state_25641;(statearr_25657[(7)] = inst_25618__$1);
return statearr_25657;
})();var statearr_25658_25676 = state_25641__$1;(statearr_25658_25676[(2)] = null);
(statearr_25658_25676[(1)] = (2));
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
});})(c__9125__auto___25666,out))
;return ((function (switch__9110__auto__,c__9125__auto___25666,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25662 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25662[(0)] = state_machine__9111__auto__);
(statearr_25662[(1)] = (1));
return statearr_25662;
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
}catch (e25663){if((e25663 instanceof Object))
{var ex__9114__auto__ = e25663;var statearr_25664_25677 = state_25641;(statearr_25664_25677[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25641);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25663;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25678 = state_25641;
state_25641 = G__25678;
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
;})(switch__9110__auto__,c__9125__auto___25666,out))
})();var state__9127__auto__ = (function (){var statearr_25665 = f__9126__auto__.call(null);(statearr_25665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25666);
return statearr_25665;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25666,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25813 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25813,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25813,out){
return (function (state_25783){var state_val_25784 = (state_25783[(1)]);if((state_val_25784 === (7)))
{var inst_25779 = (state_25783[(2)]);var state_25783__$1 = state_25783;var statearr_25785_25814 = state_25783__$1;(statearr_25785_25814[(2)] = inst_25779);
(statearr_25785_25814[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25784 === (1)))
{var inst_25746 = (new Array(n));var inst_25747 = inst_25746;var inst_25748 = (0);var state_25783__$1 = (function (){var statearr_25786 = state_25783;(statearr_25786[(7)] = inst_25748);
(statearr_25786[(8)] = inst_25747);
return statearr_25786;
})();var statearr_25787_25815 = state_25783__$1;(statearr_25787_25815[(2)] = null);
(statearr_25787_25815[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25784 === (4)))
{var inst_25751 = (state_25783[(9)]);var inst_25751__$1 = (state_25783[(2)]);var inst_25752 = (inst_25751__$1 == null);var inst_25753 = cljs.core.not.call(null,inst_25752);var state_25783__$1 = (function (){var statearr_25788 = state_25783;(statearr_25788[(9)] = inst_25751__$1);
return statearr_25788;
})();if(inst_25753)
{var statearr_25789_25816 = state_25783__$1;(statearr_25789_25816[(1)] = (5));
} else
{var statearr_25790_25817 = state_25783__$1;(statearr_25790_25817[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25784 === (15)))
{var inst_25773 = (state_25783[(2)]);var state_25783__$1 = state_25783;var statearr_25791_25818 = state_25783__$1;(statearr_25791_25818[(2)] = inst_25773);
(statearr_25791_25818[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25784 === (13)))
{var state_25783__$1 = state_25783;var statearr_25792_25819 = state_25783__$1;(statearr_25792_25819[(2)] = null);
(statearr_25792_25819[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25784 === (6)))
{var inst_25748 = (state_25783[(7)]);var inst_25769 = (inst_25748 > (0));var state_25783__$1 = state_25783;if(cljs.core.truth_(inst_25769))
{var statearr_25793_25820 = state_25783__$1;(statearr_25793_25820[(1)] = (12));
} else
{var statearr_25794_25821 = state_25783__$1;(statearr_25794_25821[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25784 === (3)))
{var inst_25781 = (state_25783[(2)]);var state_25783__$1 = state_25783;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25783__$1,inst_25781);
} else
{if((state_val_25784 === (12)))
{var inst_25747 = (state_25783[(8)]);var inst_25771 = cljs.core.vec.call(null,inst_25747);var state_25783__$1 = state_25783;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25783__$1,(15),out,inst_25771);
} else
{if((state_val_25784 === (2)))
{var state_25783__$1 = state_25783;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25783__$1,(4),ch);
} else
{if((state_val_25784 === (11)))
{var inst_25763 = (state_25783[(2)]);var inst_25764 = (new Array(n));var inst_25747 = inst_25764;var inst_25748 = (0);var state_25783__$1 = (function (){var statearr_25795 = state_25783;(statearr_25795[(7)] = inst_25748);
(statearr_25795[(8)] = inst_25747);
(statearr_25795[(10)] = inst_25763);
return statearr_25795;
})();var statearr_25796_25822 = state_25783__$1;(statearr_25796_25822[(2)] = null);
(statearr_25796_25822[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25784 === (9)))
{var inst_25747 = (state_25783[(8)]);var inst_25761 = cljs.core.vec.call(null,inst_25747);var state_25783__$1 = state_25783;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25783__$1,(11),out,inst_25761);
} else
{if((state_val_25784 === (5)))
{var inst_25748 = (state_25783[(7)]);var inst_25756 = (state_25783[(11)]);var inst_25747 = (state_25783[(8)]);var inst_25751 = (state_25783[(9)]);var inst_25755 = (inst_25747[inst_25748] = inst_25751);var inst_25756__$1 = (inst_25748 + (1));var inst_25757 = (inst_25756__$1 < n);var state_25783__$1 = (function (){var statearr_25797 = state_25783;(statearr_25797[(11)] = inst_25756__$1);
(statearr_25797[(12)] = inst_25755);
return statearr_25797;
})();if(cljs.core.truth_(inst_25757))
{var statearr_25798_25823 = state_25783__$1;(statearr_25798_25823[(1)] = (8));
} else
{var statearr_25799_25824 = state_25783__$1;(statearr_25799_25824[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25784 === (14)))
{var inst_25776 = (state_25783[(2)]);var inst_25777 = cljs.core.async.close_BANG_.call(null,out);var state_25783__$1 = (function (){var statearr_25801 = state_25783;(statearr_25801[(13)] = inst_25776);
return statearr_25801;
})();var statearr_25802_25825 = state_25783__$1;(statearr_25802_25825[(2)] = inst_25777);
(statearr_25802_25825[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25784 === (10)))
{var inst_25767 = (state_25783[(2)]);var state_25783__$1 = state_25783;var statearr_25803_25826 = state_25783__$1;(statearr_25803_25826[(2)] = inst_25767);
(statearr_25803_25826[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25784 === (8)))
{var inst_25756 = (state_25783[(11)]);var inst_25747 = (state_25783[(8)]);var tmp25800 = inst_25747;var inst_25747__$1 = tmp25800;var inst_25748 = inst_25756;var state_25783__$1 = (function (){var statearr_25804 = state_25783;(statearr_25804[(7)] = inst_25748);
(statearr_25804[(8)] = inst_25747__$1);
return statearr_25804;
})();var statearr_25805_25827 = state_25783__$1;(statearr_25805_25827[(2)] = null);
(statearr_25805_25827[(1)] = (2));
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
});})(c__9125__auto___25813,out))
;return ((function (switch__9110__auto__,c__9125__auto___25813,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25809[(0)] = state_machine__9111__auto__);
(statearr_25809[(1)] = (1));
return statearr_25809;
});
var state_machine__9111__auto____1 = (function (state_25783){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25783);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25810){if((e25810 instanceof Object))
{var ex__9114__auto__ = e25810;var statearr_25811_25828 = state_25783;(statearr_25811_25828[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25783);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25810;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25829 = state_25783;
state_25783 = G__25829;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25783){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25813,out))
})();var state__9127__auto__ = (function (){var statearr_25812 = f__9126__auto__.call(null);(statearr_25812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25813);
return statearr_25812;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25813,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25972 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25972,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25972,out){
return (function (state_25942){var state_val_25943 = (state_25942[(1)]);if((state_val_25943 === (7)))
{var inst_25938 = (state_25942[(2)]);var state_25942__$1 = state_25942;var statearr_25944_25973 = state_25942__$1;(statearr_25944_25973[(2)] = inst_25938);
(statearr_25944_25973[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25943 === (1)))
{var inst_25901 = [];var inst_25902 = inst_25901;var inst_25903 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_25942__$1 = (function (){var statearr_25945 = state_25942;(statearr_25945[(7)] = inst_25902);
(statearr_25945[(8)] = inst_25903);
return statearr_25945;
})();var statearr_25946_25974 = state_25942__$1;(statearr_25946_25974[(2)] = null);
(statearr_25946_25974[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25943 === (4)))
{var inst_25906 = (state_25942[(9)]);var inst_25906__$1 = (state_25942[(2)]);var inst_25907 = (inst_25906__$1 == null);var inst_25908 = cljs.core.not.call(null,inst_25907);var state_25942__$1 = (function (){var statearr_25947 = state_25942;(statearr_25947[(9)] = inst_25906__$1);
return statearr_25947;
})();if(inst_25908)
{var statearr_25948_25975 = state_25942__$1;(statearr_25948_25975[(1)] = (5));
} else
{var statearr_25949_25976 = state_25942__$1;(statearr_25949_25976[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25943 === (15)))
{var inst_25932 = (state_25942[(2)]);var state_25942__$1 = state_25942;var statearr_25950_25977 = state_25942__$1;(statearr_25950_25977[(2)] = inst_25932);
(statearr_25950_25977[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25943 === (13)))
{var state_25942__$1 = state_25942;var statearr_25951_25978 = state_25942__$1;(statearr_25951_25978[(2)] = null);
(statearr_25951_25978[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25943 === (6)))
{var inst_25902 = (state_25942[(7)]);var inst_25927 = inst_25902.length;var inst_25928 = (inst_25927 > (0));var state_25942__$1 = state_25942;if(cljs.core.truth_(inst_25928))
{var statearr_25952_25979 = state_25942__$1;(statearr_25952_25979[(1)] = (12));
} else
{var statearr_25953_25980 = state_25942__$1;(statearr_25953_25980[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25943 === (3)))
{var inst_25940 = (state_25942[(2)]);var state_25942__$1 = state_25942;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25942__$1,inst_25940);
} else
{if((state_val_25943 === (12)))
{var inst_25902 = (state_25942[(7)]);var inst_25930 = cljs.core.vec.call(null,inst_25902);var state_25942__$1 = state_25942;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25942__$1,(15),out,inst_25930);
} else
{if((state_val_25943 === (2)))
{var state_25942__$1 = state_25942;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25942__$1,(4),ch);
} else
{if((state_val_25943 === (11)))
{var inst_25910 = (state_25942[(10)]);var inst_25906 = (state_25942[(9)]);var inst_25920 = (state_25942[(2)]);var inst_25921 = [];var inst_25922 = inst_25921.push(inst_25906);var inst_25902 = inst_25921;var inst_25903 = inst_25910;var state_25942__$1 = (function (){var statearr_25954 = state_25942;(statearr_25954[(11)] = inst_25920);
(statearr_25954[(7)] = inst_25902);
(statearr_25954[(12)] = inst_25922);
(statearr_25954[(8)] = inst_25903);
return statearr_25954;
})();var statearr_25955_25981 = state_25942__$1;(statearr_25955_25981[(2)] = null);
(statearr_25955_25981[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25943 === (9)))
{var inst_25902 = (state_25942[(7)]);var inst_25918 = cljs.core.vec.call(null,inst_25902);var state_25942__$1 = state_25942;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25942__$1,(11),out,inst_25918);
} else
{if((state_val_25943 === (5)))
{var inst_25910 = (state_25942[(10)]);var inst_25906 = (state_25942[(9)]);var inst_25903 = (state_25942[(8)]);var inst_25910__$1 = f.call(null,inst_25906);var inst_25911 = cljs.core._EQ_.call(null,inst_25910__$1,inst_25903);var inst_25912 = cljs.core.keyword_identical_QMARK_.call(null,inst_25903,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_25913 = (inst_25911) || (inst_25912);var state_25942__$1 = (function (){var statearr_25956 = state_25942;(statearr_25956[(10)] = inst_25910__$1);
return statearr_25956;
})();if(cljs.core.truth_(inst_25913))
{var statearr_25957_25982 = state_25942__$1;(statearr_25957_25982[(1)] = (8));
} else
{var statearr_25958_25983 = state_25942__$1;(statearr_25958_25983[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25943 === (14)))
{var inst_25935 = (state_25942[(2)]);var inst_25936 = cljs.core.async.close_BANG_.call(null,out);var state_25942__$1 = (function (){var statearr_25960 = state_25942;(statearr_25960[(13)] = inst_25935);
return statearr_25960;
})();var statearr_25961_25984 = state_25942__$1;(statearr_25961_25984[(2)] = inst_25936);
(statearr_25961_25984[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25943 === (10)))
{var inst_25925 = (state_25942[(2)]);var state_25942__$1 = state_25942;var statearr_25962_25985 = state_25942__$1;(statearr_25962_25985[(2)] = inst_25925);
(statearr_25962_25985[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25943 === (8)))
{var inst_25902 = (state_25942[(7)]);var inst_25910 = (state_25942[(10)]);var inst_25906 = (state_25942[(9)]);var inst_25915 = inst_25902.push(inst_25906);var tmp25959 = inst_25902;var inst_25902__$1 = tmp25959;var inst_25903 = inst_25910;var state_25942__$1 = (function (){var statearr_25963 = state_25942;(statearr_25963[(7)] = inst_25902__$1);
(statearr_25963[(8)] = inst_25903);
(statearr_25963[(14)] = inst_25915);
return statearr_25963;
})();var statearr_25964_25986 = state_25942__$1;(statearr_25964_25986[(2)] = null);
(statearr_25964_25986[(1)] = (2));
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
});})(c__9125__auto___25972,out))
;return ((function (switch__9110__auto__,c__9125__auto___25972,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25968[(0)] = state_machine__9111__auto__);
(statearr_25968[(1)] = (1));
return statearr_25968;
});
var state_machine__9111__auto____1 = (function (state_25942){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25942);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25969){if((e25969 instanceof Object))
{var ex__9114__auto__ = e25969;var statearr_25970_25987 = state_25942;(statearr_25970_25987[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25942);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25969;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25988 = state_25942;
state_25942 = G__25988;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25942){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25972,out))
})();var state__9127__auto__ = (function (){var statearr_25971 = f__9126__auto__.call(null);(statearr_25971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25972);
return statearr_25971;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25972,out))
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
