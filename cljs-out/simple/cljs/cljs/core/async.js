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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24256 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24256 = (function (f,fn_handler,meta24257){
this.f = f;
this.fn_handler = fn_handler;
this.meta24257 = meta24257;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24256.cljs$lang$type = true;
cljs.core.async.t24256.cljs$lang$ctorStr = "cljs.core.async/t24256";
cljs.core.async.t24256.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24256");
});
cljs.core.async.t24256.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24256.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24256.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24258){var self__ = this;
var _24258__$1 = this;return self__.meta24257;
});
cljs.core.async.t24256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24258,meta24257__$1){var self__ = this;
var _24258__$1 = this;return (new cljs.core.async.t24256(self__.f,self__.fn_handler,meta24257__$1));
});
cljs.core.async.__GT_t24256 = (function __GT_t24256(f__$1,fn_handler__$1,meta24257){return (new cljs.core.async.t24256(f__$1,fn_handler__$1,meta24257));
});
}
return (new cljs.core.async.t24256(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24260 = buff;if(G__24260)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__24260.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24260.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24260);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24260);
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
{var val_24261 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_24261);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_24261,ret){
return (function (){return fn1.call(null,val_24261);
});})(val_24261,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___24262 = n;var x_24263 = (0);while(true){
if((x_24263 < n__4508__auto___24262))
{(a[x_24263] = (0));
{
var G__24264 = (x_24263 + (1));
x_24263 = G__24264;
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
var G__24265 = (i + (1));
i = G__24265;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t24269 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24269 = (function (flag,alt_flag,meta24270){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24270 = meta24270;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24269.cljs$lang$type = true;
cljs.core.async.t24269.cljs$lang$ctorStr = "cljs.core.async/t24269";
cljs.core.async.t24269.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24269");
});})(flag))
;
cljs.core.async.t24269.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24269.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t24269.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t24269.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24271){var self__ = this;
var _24271__$1 = this;return self__.meta24270;
});})(flag))
;
cljs.core.async.t24269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24271,meta24270__$1){var self__ = this;
var _24271__$1 = this;return (new cljs.core.async.t24269(self__.flag,self__.alt_flag,meta24270__$1));
});})(flag))
;
cljs.core.async.__GT_t24269 = ((function (flag){
return (function __GT_t24269(flag__$1,alt_flag__$1,meta24270){return (new cljs.core.async.t24269(flag__$1,alt_flag__$1,meta24270));
});})(flag))
;
}
return (new cljs.core.async.t24269(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24275 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24275 = (function (cb,flag,alt_handler,meta24276){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24276 = meta24276;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24275.cljs$lang$type = true;
cljs.core.async.t24275.cljs$lang$ctorStr = "cljs.core.async/t24275";
cljs.core.async.t24275.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24275");
});
cljs.core.async.t24275.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24275.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t24275.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t24275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24277){var self__ = this;
var _24277__$1 = this;return self__.meta24276;
});
cljs.core.async.t24275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24277,meta24276__$1){var self__ = this;
var _24277__$1 = this;return (new cljs.core.async.t24275(self__.cb,self__.flag,self__.alt_handler,meta24276__$1));
});
cljs.core.async.__GT_t24275 = (function __GT_t24275(cb__$1,flag__$1,alt_handler__$1,meta24276){return (new cljs.core.async.t24275(cb__$1,flag__$1,alt_handler__$1,meta24276));
});
}
return (new cljs.core.async.t24275(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24278_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24278_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24279_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24279_SHARP_,port], null));
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
var G__24280 = (i + (1));
i = G__24280;
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
var alts_BANG___delegate = function (ports,p__24281){var map__24283 = p__24281;var map__24283__$1 = ((cljs.core.seq_QMARK_.call(null,map__24283))?cljs.core.apply.call(null,cljs.core.hash_map,map__24283):map__24283);var opts = map__24283__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24281 = null;if (arguments.length > 1) {
  p__24281 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24281);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24284){
var ports = cljs.core.first(arglist__24284);
var p__24281 = cljs.core.rest(arglist__24284);
return alts_BANG___delegate(ports,p__24281);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__11517__auto___24379 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___24379){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___24379){
return (function (state_24355){var state_val_24356 = (state_24355[(1)]);if((state_val_24356 === (7)))
{var inst_24351 = (state_24355[(2)]);var state_24355__$1 = state_24355;var statearr_24357_24380 = state_24355__$1;(statearr_24357_24380[(2)] = inst_24351);
(statearr_24357_24380[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24356 === (1)))
{var state_24355__$1 = state_24355;var statearr_24358_24381 = state_24355__$1;(statearr_24358_24381[(2)] = null);
(statearr_24358_24381[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24356 === (4)))
{var inst_24334 = (state_24355[(7)]);var inst_24334__$1 = (state_24355[(2)]);var inst_24335 = (inst_24334__$1 == null);var state_24355__$1 = (function (){var statearr_24359 = state_24355;(statearr_24359[(7)] = inst_24334__$1);
return statearr_24359;
})();if(cljs.core.truth_(inst_24335))
{var statearr_24360_24382 = state_24355__$1;(statearr_24360_24382[(1)] = (5));
} else
{var statearr_24361_24383 = state_24355__$1;(statearr_24361_24383[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24356 === (13)))
{var state_24355__$1 = state_24355;var statearr_24362_24384 = state_24355__$1;(statearr_24362_24384[(2)] = null);
(statearr_24362_24384[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24356 === (6)))
{var inst_24334 = (state_24355[(7)]);var state_24355__$1 = state_24355;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24355__$1,(11),to,inst_24334);
} else
{if((state_val_24356 === (3)))
{var inst_24353 = (state_24355[(2)]);var state_24355__$1 = state_24355;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24355__$1,inst_24353);
} else
{if((state_val_24356 === (12)))
{var state_24355__$1 = state_24355;var statearr_24363_24385 = state_24355__$1;(statearr_24363_24385[(2)] = null);
(statearr_24363_24385[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24356 === (2)))
{var state_24355__$1 = state_24355;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24355__$1,(4),from);
} else
{if((state_val_24356 === (11)))
{var inst_24344 = (state_24355[(2)]);var state_24355__$1 = state_24355;if(cljs.core.truth_(inst_24344))
{var statearr_24364_24386 = state_24355__$1;(statearr_24364_24386[(1)] = (12));
} else
{var statearr_24365_24387 = state_24355__$1;(statearr_24365_24387[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24356 === (9)))
{var state_24355__$1 = state_24355;var statearr_24366_24388 = state_24355__$1;(statearr_24366_24388[(2)] = null);
(statearr_24366_24388[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24356 === (5)))
{var state_24355__$1 = state_24355;if(cljs.core.truth_(close_QMARK_))
{var statearr_24367_24389 = state_24355__$1;(statearr_24367_24389[(1)] = (8));
} else
{var statearr_24368_24390 = state_24355__$1;(statearr_24368_24390[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24356 === (14)))
{var inst_24349 = (state_24355[(2)]);var state_24355__$1 = state_24355;var statearr_24369_24391 = state_24355__$1;(statearr_24369_24391[(2)] = inst_24349);
(statearr_24369_24391[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24356 === (10)))
{var inst_24341 = (state_24355[(2)]);var state_24355__$1 = state_24355;var statearr_24370_24392 = state_24355__$1;(statearr_24370_24392[(2)] = inst_24341);
(statearr_24370_24392[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24356 === (8)))
{var inst_24338 = cljs.core.async.close_BANG_.call(null,to);var state_24355__$1 = state_24355;var statearr_24371_24393 = state_24355__$1;(statearr_24371_24393[(2)] = inst_24338);
(statearr_24371_24393[(1)] = (10));
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
});})(c__11517__auto___24379))
;return ((function (switch__11461__auto__,c__11517__auto___24379){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24375 = [null,null,null,null,null,null,null,null];(statearr_24375[(0)] = state_machine__11462__auto__);
(statearr_24375[(1)] = (1));
return statearr_24375;
});
var state_machine__11462__auto____1 = (function (state_24355){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24355);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24376){if((e24376 instanceof Object))
{var ex__11465__auto__ = e24376;var statearr_24377_24394 = state_24355;(statearr_24377_24394[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24355);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24376;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24395 = state_24355;
state_24355 = G__24395;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24355){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___24379))
})();var state__11519__auto__ = (function (){var statearr_24378 = f__11518__auto__.call(null);(statearr_24378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24379);
return statearr_24378;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___24379))
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
return (function (p__24579){var vec__24580 = p__24579;var v = cljs.core.nth.call(null,vec__24580,(0),null);var p = cljs.core.nth.call(null,vec__24580,(1),null);var job = vec__24580;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__11517__auto___24762 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___24762,res,vec__24580,v,p,job,jobs,results){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___24762,res,vec__24580,v,p,job,jobs,results){
return (function (state_24585){var state_val_24586 = (state_24585[(1)]);if((state_val_24586 === (2)))
{var inst_24582 = (state_24585[(2)]);var inst_24583 = cljs.core.async.close_BANG_.call(null,res);var state_24585__$1 = (function (){var statearr_24587 = state_24585;(statearr_24587[(7)] = inst_24582);
return statearr_24587;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24585__$1,inst_24583);
} else
{if((state_val_24586 === (1)))
{var state_24585__$1 = state_24585;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24585__$1,(2),res,v);
} else
{return null;
}
}
});})(c__11517__auto___24762,res,vec__24580,v,p,job,jobs,results))
;return ((function (switch__11461__auto__,c__11517__auto___24762,res,vec__24580,v,p,job,jobs,results){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24591 = [null,null,null,null,null,null,null,null];(statearr_24591[(0)] = state_machine__11462__auto__);
(statearr_24591[(1)] = (1));
return statearr_24591;
});
var state_machine__11462__auto____1 = (function (state_24585){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24585);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24592){if((e24592 instanceof Object))
{var ex__11465__auto__ = e24592;var statearr_24593_24763 = state_24585;(statearr_24593_24763[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24585);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24592;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24764 = state_24585;
state_24585 = G__24764;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24585){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___24762,res,vec__24580,v,p,job,jobs,results))
})();var state__11519__auto__ = (function (){var statearr_24594 = f__11518__auto__.call(null);(statearr_24594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24762);
return statearr_24594;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___24762,res,vec__24580,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__24595){var vec__24596 = p__24595;var v = cljs.core.nth.call(null,vec__24596,(0),null);var p = cljs.core.nth.call(null,vec__24596,(1),null);var job = vec__24596;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___24765 = n;var __24766 = (0);while(true){
if((__24766 < n__4508__auto___24765))
{var G__24597_24767 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__24597_24767) {
case "async":
var c__11517__auto___24769 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24766,c__11517__auto___24769,G__24597_24767,n__4508__auto___24765,jobs,results,process,async){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (__24766,c__11517__auto___24769,G__24597_24767,n__4508__auto___24765,jobs,results,process,async){
return (function (state_24610){var state_val_24611 = (state_24610[(1)]);if((state_val_24611 === (7)))
{var inst_24606 = (state_24610[(2)]);var state_24610__$1 = state_24610;var statearr_24612_24770 = state_24610__$1;(statearr_24612_24770[(2)] = inst_24606);
(statearr_24612_24770[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24611 === (6)))
{var state_24610__$1 = state_24610;var statearr_24613_24771 = state_24610__$1;(statearr_24613_24771[(2)] = null);
(statearr_24613_24771[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24611 === (5)))
{var state_24610__$1 = state_24610;var statearr_24614_24772 = state_24610__$1;(statearr_24614_24772[(2)] = null);
(statearr_24614_24772[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24611 === (4)))
{var inst_24600 = (state_24610[(2)]);var inst_24601 = async.call(null,inst_24600);var state_24610__$1 = state_24610;if(cljs.core.truth_(inst_24601))
{var statearr_24615_24773 = state_24610__$1;(statearr_24615_24773[(1)] = (5));
} else
{var statearr_24616_24774 = state_24610__$1;(statearr_24616_24774[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24611 === (3)))
{var inst_24608 = (state_24610[(2)]);var state_24610__$1 = state_24610;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24610__$1,inst_24608);
} else
{if((state_val_24611 === (2)))
{var state_24610__$1 = state_24610;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24610__$1,(4),jobs);
} else
{if((state_val_24611 === (1)))
{var state_24610__$1 = state_24610;var statearr_24617_24775 = state_24610__$1;(statearr_24617_24775[(2)] = null);
(statearr_24617_24775[(1)] = (2));
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
});})(__24766,c__11517__auto___24769,G__24597_24767,n__4508__auto___24765,jobs,results,process,async))
;return ((function (__24766,switch__11461__auto__,c__11517__auto___24769,G__24597_24767,n__4508__auto___24765,jobs,results,process,async){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24621 = [null,null,null,null,null,null,null];(statearr_24621[(0)] = state_machine__11462__auto__);
(statearr_24621[(1)] = (1));
return statearr_24621;
});
var state_machine__11462__auto____1 = (function (state_24610){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24610);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24622){if((e24622 instanceof Object))
{var ex__11465__auto__ = e24622;var statearr_24623_24776 = state_24610;(statearr_24623_24776[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24610);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24622;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24777 = state_24610;
state_24610 = G__24777;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24610){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(__24766,switch__11461__auto__,c__11517__auto___24769,G__24597_24767,n__4508__auto___24765,jobs,results,process,async))
})();var state__11519__auto__ = (function (){var statearr_24624 = f__11518__auto__.call(null);(statearr_24624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24769);
return statearr_24624;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(__24766,c__11517__auto___24769,G__24597_24767,n__4508__auto___24765,jobs,results,process,async))
);

break;
case "compute":
var c__11517__auto___24778 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24766,c__11517__auto___24778,G__24597_24767,n__4508__auto___24765,jobs,results,process,async){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (__24766,c__11517__auto___24778,G__24597_24767,n__4508__auto___24765,jobs,results,process,async){
return (function (state_24637){var state_val_24638 = (state_24637[(1)]);if((state_val_24638 === (7)))
{var inst_24633 = (state_24637[(2)]);var state_24637__$1 = state_24637;var statearr_24639_24779 = state_24637__$1;(statearr_24639_24779[(2)] = inst_24633);
(statearr_24639_24779[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24638 === (6)))
{var state_24637__$1 = state_24637;var statearr_24640_24780 = state_24637__$1;(statearr_24640_24780[(2)] = null);
(statearr_24640_24780[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24638 === (5)))
{var state_24637__$1 = state_24637;var statearr_24641_24781 = state_24637__$1;(statearr_24641_24781[(2)] = null);
(statearr_24641_24781[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24638 === (4)))
{var inst_24627 = (state_24637[(2)]);var inst_24628 = process.call(null,inst_24627);var state_24637__$1 = state_24637;if(cljs.core.truth_(inst_24628))
{var statearr_24642_24782 = state_24637__$1;(statearr_24642_24782[(1)] = (5));
} else
{var statearr_24643_24783 = state_24637__$1;(statearr_24643_24783[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24638 === (3)))
{var inst_24635 = (state_24637[(2)]);var state_24637__$1 = state_24637;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24637__$1,inst_24635);
} else
{if((state_val_24638 === (2)))
{var state_24637__$1 = state_24637;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24637__$1,(4),jobs);
} else
{if((state_val_24638 === (1)))
{var state_24637__$1 = state_24637;var statearr_24644_24784 = state_24637__$1;(statearr_24644_24784[(2)] = null);
(statearr_24644_24784[(1)] = (2));
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
});})(__24766,c__11517__auto___24778,G__24597_24767,n__4508__auto___24765,jobs,results,process,async))
;return ((function (__24766,switch__11461__auto__,c__11517__auto___24778,G__24597_24767,n__4508__auto___24765,jobs,results,process,async){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24648 = [null,null,null,null,null,null,null];(statearr_24648[(0)] = state_machine__11462__auto__);
(statearr_24648[(1)] = (1));
return statearr_24648;
});
var state_machine__11462__auto____1 = (function (state_24637){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24637);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24649){if((e24649 instanceof Object))
{var ex__11465__auto__ = e24649;var statearr_24650_24785 = state_24637;(statearr_24650_24785[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24637);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24649;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24786 = state_24637;
state_24637 = G__24786;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24637){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(__24766,switch__11461__auto__,c__11517__auto___24778,G__24597_24767,n__4508__auto___24765,jobs,results,process,async))
})();var state__11519__auto__ = (function (){var statearr_24651 = f__11518__auto__.call(null);(statearr_24651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24778);
return statearr_24651;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(__24766,c__11517__auto___24778,G__24597_24767,n__4508__auto___24765,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__24787 = (__24766 + (1));
__24766 = G__24787;
continue;
}
} else
{}
break;
}
var c__11517__auto___24788 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___24788,jobs,results,process,async){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___24788,jobs,results,process,async){
return (function (state_24673){var state_val_24674 = (state_24673[(1)]);if((state_val_24674 === (9)))
{var inst_24666 = (state_24673[(2)]);var state_24673__$1 = (function (){var statearr_24675 = state_24673;(statearr_24675[(7)] = inst_24666);
return statearr_24675;
})();var statearr_24676_24789 = state_24673__$1;(statearr_24676_24789[(2)] = null);
(statearr_24676_24789[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24674 === (8)))
{var inst_24659 = (state_24673[(8)]);var inst_24664 = (state_24673[(2)]);var state_24673__$1 = (function (){var statearr_24677 = state_24673;(statearr_24677[(9)] = inst_24664);
return statearr_24677;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24673__$1,(9),results,inst_24659);
} else
{if((state_val_24674 === (7)))
{var inst_24669 = (state_24673[(2)]);var state_24673__$1 = state_24673;var statearr_24678_24790 = state_24673__$1;(statearr_24678_24790[(2)] = inst_24669);
(statearr_24678_24790[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24674 === (6)))
{var inst_24659 = (state_24673[(8)]);var inst_24654 = (state_24673[(10)]);var inst_24659__$1 = cljs.core.async.chan.call(null,(1));var inst_24660 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24661 = [inst_24654,inst_24659__$1];var inst_24662 = (new cljs.core.PersistentVector(null,2,(5),inst_24660,inst_24661,null));var state_24673__$1 = (function (){var statearr_24679 = state_24673;(statearr_24679[(8)] = inst_24659__$1);
return statearr_24679;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24673__$1,(8),jobs,inst_24662);
} else
{if((state_val_24674 === (5)))
{var inst_24657 = cljs.core.async.close_BANG_.call(null,jobs);var state_24673__$1 = state_24673;var statearr_24680_24791 = state_24673__$1;(statearr_24680_24791[(2)] = inst_24657);
(statearr_24680_24791[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24674 === (4)))
{var inst_24654 = (state_24673[(10)]);var inst_24654__$1 = (state_24673[(2)]);var inst_24655 = (inst_24654__$1 == null);var state_24673__$1 = (function (){var statearr_24681 = state_24673;(statearr_24681[(10)] = inst_24654__$1);
return statearr_24681;
})();if(cljs.core.truth_(inst_24655))
{var statearr_24682_24792 = state_24673__$1;(statearr_24682_24792[(1)] = (5));
} else
{var statearr_24683_24793 = state_24673__$1;(statearr_24683_24793[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24674 === (3)))
{var inst_24671 = (state_24673[(2)]);var state_24673__$1 = state_24673;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24673__$1,inst_24671);
} else
{if((state_val_24674 === (2)))
{var state_24673__$1 = state_24673;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24673__$1,(4),from);
} else
{if((state_val_24674 === (1)))
{var state_24673__$1 = state_24673;var statearr_24684_24794 = state_24673__$1;(statearr_24684_24794[(2)] = null);
(statearr_24684_24794[(1)] = (2));
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
});})(c__11517__auto___24788,jobs,results,process,async))
;return ((function (switch__11461__auto__,c__11517__auto___24788,jobs,results,process,async){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24688 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24688[(0)] = state_machine__11462__auto__);
(statearr_24688[(1)] = (1));
return statearr_24688;
});
var state_machine__11462__auto____1 = (function (state_24673){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24673);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24689){if((e24689 instanceof Object))
{var ex__11465__auto__ = e24689;var statearr_24690_24795 = state_24673;(statearr_24690_24795[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24673);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24689;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24796 = state_24673;
state_24673 = G__24796;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24673){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___24788,jobs,results,process,async))
})();var state__11519__auto__ = (function (){var statearr_24691 = f__11518__auto__.call(null);(statearr_24691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24788);
return statearr_24691;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___24788,jobs,results,process,async))
);
var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,jobs,results,process,async){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,jobs,results,process,async){
return (function (state_24729){var state_val_24730 = (state_24729[(1)]);if((state_val_24730 === (7)))
{var inst_24725 = (state_24729[(2)]);var state_24729__$1 = state_24729;var statearr_24731_24797 = state_24729__$1;(statearr_24731_24797[(2)] = inst_24725);
(statearr_24731_24797[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (20)))
{var state_24729__$1 = state_24729;var statearr_24732_24798 = state_24729__$1;(statearr_24732_24798[(2)] = null);
(statearr_24732_24798[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (1)))
{var state_24729__$1 = state_24729;var statearr_24733_24799 = state_24729__$1;(statearr_24733_24799[(2)] = null);
(statearr_24733_24799[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (4)))
{var inst_24694 = (state_24729[(7)]);var inst_24694__$1 = (state_24729[(2)]);var inst_24695 = (inst_24694__$1 == null);var state_24729__$1 = (function (){var statearr_24734 = state_24729;(statearr_24734[(7)] = inst_24694__$1);
return statearr_24734;
})();if(cljs.core.truth_(inst_24695))
{var statearr_24735_24800 = state_24729__$1;(statearr_24735_24800[(1)] = (5));
} else
{var statearr_24736_24801 = state_24729__$1;(statearr_24736_24801[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (15)))
{var inst_24707 = (state_24729[(8)]);var state_24729__$1 = state_24729;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24729__$1,(18),to,inst_24707);
} else
{if((state_val_24730 === (21)))
{var inst_24720 = (state_24729[(2)]);var state_24729__$1 = state_24729;var statearr_24737_24802 = state_24729__$1;(statearr_24737_24802[(2)] = inst_24720);
(statearr_24737_24802[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (13)))
{var inst_24722 = (state_24729[(2)]);var state_24729__$1 = (function (){var statearr_24738 = state_24729;(statearr_24738[(9)] = inst_24722);
return statearr_24738;
})();var statearr_24739_24803 = state_24729__$1;(statearr_24739_24803[(2)] = null);
(statearr_24739_24803[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (6)))
{var inst_24694 = (state_24729[(7)]);var state_24729__$1 = state_24729;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24729__$1,(11),inst_24694);
} else
{if((state_val_24730 === (17)))
{var inst_24715 = (state_24729[(2)]);var state_24729__$1 = state_24729;if(cljs.core.truth_(inst_24715))
{var statearr_24740_24804 = state_24729__$1;(statearr_24740_24804[(1)] = (19));
} else
{var statearr_24741_24805 = state_24729__$1;(statearr_24741_24805[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (3)))
{var inst_24727 = (state_24729[(2)]);var state_24729__$1 = state_24729;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24729__$1,inst_24727);
} else
{if((state_val_24730 === (12)))
{var inst_24704 = (state_24729[(10)]);var state_24729__$1 = state_24729;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24729__$1,(14),inst_24704);
} else
{if((state_val_24730 === (2)))
{var state_24729__$1 = state_24729;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24729__$1,(4),results);
} else
{if((state_val_24730 === (19)))
{var state_24729__$1 = state_24729;var statearr_24742_24806 = state_24729__$1;(statearr_24742_24806[(2)] = null);
(statearr_24742_24806[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (11)))
{var inst_24704 = (state_24729[(2)]);var state_24729__$1 = (function (){var statearr_24743 = state_24729;(statearr_24743[(10)] = inst_24704);
return statearr_24743;
})();var statearr_24744_24807 = state_24729__$1;(statearr_24744_24807[(2)] = null);
(statearr_24744_24807[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (9)))
{var state_24729__$1 = state_24729;var statearr_24745_24808 = state_24729__$1;(statearr_24745_24808[(2)] = null);
(statearr_24745_24808[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (5)))
{var state_24729__$1 = state_24729;if(cljs.core.truth_(close_QMARK_))
{var statearr_24746_24809 = state_24729__$1;(statearr_24746_24809[(1)] = (8));
} else
{var statearr_24747_24810 = state_24729__$1;(statearr_24747_24810[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (14)))
{var inst_24707 = (state_24729[(8)]);var inst_24709 = (state_24729[(11)]);var inst_24707__$1 = (state_24729[(2)]);var inst_24708 = (inst_24707__$1 == null);var inst_24709__$1 = cljs.core.not.call(null,inst_24708);var state_24729__$1 = (function (){var statearr_24748 = state_24729;(statearr_24748[(8)] = inst_24707__$1);
(statearr_24748[(11)] = inst_24709__$1);
return statearr_24748;
})();if(inst_24709__$1)
{var statearr_24749_24811 = state_24729__$1;(statearr_24749_24811[(1)] = (15));
} else
{var statearr_24750_24812 = state_24729__$1;(statearr_24750_24812[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (16)))
{var inst_24709 = (state_24729[(11)]);var state_24729__$1 = state_24729;var statearr_24751_24813 = state_24729__$1;(statearr_24751_24813[(2)] = inst_24709);
(statearr_24751_24813[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (10)))
{var inst_24701 = (state_24729[(2)]);var state_24729__$1 = state_24729;var statearr_24752_24814 = state_24729__$1;(statearr_24752_24814[(2)] = inst_24701);
(statearr_24752_24814[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (18)))
{var inst_24712 = (state_24729[(2)]);var state_24729__$1 = state_24729;var statearr_24753_24815 = state_24729__$1;(statearr_24753_24815[(2)] = inst_24712);
(statearr_24753_24815[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (8)))
{var inst_24698 = cljs.core.async.close_BANG_.call(null,to);var state_24729__$1 = state_24729;var statearr_24754_24816 = state_24729__$1;(statearr_24754_24816[(2)] = inst_24698);
(statearr_24754_24816[(1)] = (10));
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
var state_machine__11462__auto____0 = (function (){var statearr_24758 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24758[(0)] = state_machine__11462__auto__);
(statearr_24758[(1)] = (1));
return statearr_24758;
});
var state_machine__11462__auto____1 = (function (state_24729){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24729);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24759){if((e24759 instanceof Object))
{var ex__11465__auto__ = e24759;var statearr_24760_24817 = state_24729;(statearr_24760_24817[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24729);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24759;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24818 = state_24729;
state_24729 = G__24818;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24729){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,jobs,results,process,async))
})();var state__11519__auto__ = (function (){var statearr_24761 = f__11518__auto__.call(null);(statearr_24761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_24761;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11517__auto___24919 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___24919,tc,fc){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___24919,tc,fc){
return (function (state_24894){var state_val_24895 = (state_24894[(1)]);if((state_val_24895 === (7)))
{var inst_24890 = (state_24894[(2)]);var state_24894__$1 = state_24894;var statearr_24896_24920 = state_24894__$1;(statearr_24896_24920[(2)] = inst_24890);
(statearr_24896_24920[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24895 === (1)))
{var state_24894__$1 = state_24894;var statearr_24897_24921 = state_24894__$1;(statearr_24897_24921[(2)] = null);
(statearr_24897_24921[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24895 === (4)))
{var inst_24871 = (state_24894[(7)]);var inst_24871__$1 = (state_24894[(2)]);var inst_24872 = (inst_24871__$1 == null);var state_24894__$1 = (function (){var statearr_24898 = state_24894;(statearr_24898[(7)] = inst_24871__$1);
return statearr_24898;
})();if(cljs.core.truth_(inst_24872))
{var statearr_24899_24922 = state_24894__$1;(statearr_24899_24922[(1)] = (5));
} else
{var statearr_24900_24923 = state_24894__$1;(statearr_24900_24923[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24895 === (13)))
{var state_24894__$1 = state_24894;var statearr_24901_24924 = state_24894__$1;(statearr_24901_24924[(2)] = null);
(statearr_24901_24924[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24895 === (6)))
{var inst_24871 = (state_24894[(7)]);var inst_24877 = p.call(null,inst_24871);var state_24894__$1 = state_24894;if(cljs.core.truth_(inst_24877))
{var statearr_24902_24925 = state_24894__$1;(statearr_24902_24925[(1)] = (9));
} else
{var statearr_24903_24926 = state_24894__$1;(statearr_24903_24926[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24895 === (3)))
{var inst_24892 = (state_24894[(2)]);var state_24894__$1 = state_24894;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24894__$1,inst_24892);
} else
{if((state_val_24895 === (12)))
{var state_24894__$1 = state_24894;var statearr_24904_24927 = state_24894__$1;(statearr_24904_24927[(2)] = null);
(statearr_24904_24927[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24895 === (2)))
{var state_24894__$1 = state_24894;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24894__$1,(4),ch);
} else
{if((state_val_24895 === (11)))
{var inst_24871 = (state_24894[(7)]);var inst_24881 = (state_24894[(2)]);var state_24894__$1 = state_24894;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24894__$1,(8),inst_24881,inst_24871);
} else
{if((state_val_24895 === (9)))
{var state_24894__$1 = state_24894;var statearr_24905_24928 = state_24894__$1;(statearr_24905_24928[(2)] = tc);
(statearr_24905_24928[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24895 === (5)))
{var inst_24874 = cljs.core.async.close_BANG_.call(null,tc);var inst_24875 = cljs.core.async.close_BANG_.call(null,fc);var state_24894__$1 = (function (){var statearr_24906 = state_24894;(statearr_24906[(8)] = inst_24874);
return statearr_24906;
})();var statearr_24907_24929 = state_24894__$1;(statearr_24907_24929[(2)] = inst_24875);
(statearr_24907_24929[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24895 === (14)))
{var inst_24888 = (state_24894[(2)]);var state_24894__$1 = state_24894;var statearr_24908_24930 = state_24894__$1;(statearr_24908_24930[(2)] = inst_24888);
(statearr_24908_24930[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24895 === (10)))
{var state_24894__$1 = state_24894;var statearr_24909_24931 = state_24894__$1;(statearr_24909_24931[(2)] = fc);
(statearr_24909_24931[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24895 === (8)))
{var inst_24883 = (state_24894[(2)]);var state_24894__$1 = state_24894;if(cljs.core.truth_(inst_24883))
{var statearr_24910_24932 = state_24894__$1;(statearr_24910_24932[(1)] = (12));
} else
{var statearr_24911_24933 = state_24894__$1;(statearr_24911_24933[(1)] = (13));
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
});})(c__11517__auto___24919,tc,fc))
;return ((function (switch__11461__auto__,c__11517__auto___24919,tc,fc){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24915 = [null,null,null,null,null,null,null,null,null];(statearr_24915[(0)] = state_machine__11462__auto__);
(statearr_24915[(1)] = (1));
return statearr_24915;
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
}catch (e24916){if((e24916 instanceof Object))
{var ex__11465__auto__ = e24916;var statearr_24917_24934 = state_24894;(statearr_24917_24934[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24894);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24916;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24935 = state_24894;
state_24894 = G__24935;
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
;})(switch__11461__auto__,c__11517__auto___24919,tc,fc))
})();var state__11519__auto__ = (function (){var statearr_24918 = f__11518__auto__.call(null);(statearr_24918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___24919);
return statearr_24918;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___24919,tc,fc))
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
return (function (state_24982){var state_val_24983 = (state_24982[(1)]);if((state_val_24983 === (7)))
{var inst_24978 = (state_24982[(2)]);var state_24982__$1 = state_24982;var statearr_24984_25000 = state_24982__$1;(statearr_24984_25000[(2)] = inst_24978);
(statearr_24984_25000[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24983 === (6)))
{var inst_24968 = (state_24982[(7)]);var inst_24971 = (state_24982[(8)]);var inst_24975 = f.call(null,inst_24968,inst_24971);var inst_24968__$1 = inst_24975;var state_24982__$1 = (function (){var statearr_24985 = state_24982;(statearr_24985[(7)] = inst_24968__$1);
return statearr_24985;
})();var statearr_24986_25001 = state_24982__$1;(statearr_24986_25001[(2)] = null);
(statearr_24986_25001[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24983 === (5)))
{var inst_24968 = (state_24982[(7)]);var state_24982__$1 = state_24982;var statearr_24987_25002 = state_24982__$1;(statearr_24987_25002[(2)] = inst_24968);
(statearr_24987_25002[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24983 === (4)))
{var inst_24971 = (state_24982[(8)]);var inst_24971__$1 = (state_24982[(2)]);var inst_24972 = (inst_24971__$1 == null);var state_24982__$1 = (function (){var statearr_24988 = state_24982;(statearr_24988[(8)] = inst_24971__$1);
return statearr_24988;
})();if(cljs.core.truth_(inst_24972))
{var statearr_24989_25003 = state_24982__$1;(statearr_24989_25003[(1)] = (5));
} else
{var statearr_24990_25004 = state_24982__$1;(statearr_24990_25004[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24983 === (3)))
{var inst_24980 = (state_24982[(2)]);var state_24982__$1 = state_24982;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24982__$1,inst_24980);
} else
{if((state_val_24983 === (2)))
{var state_24982__$1 = state_24982;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24982__$1,(4),ch);
} else
{if((state_val_24983 === (1)))
{var inst_24968 = init;var state_24982__$1 = (function (){var statearr_24991 = state_24982;(statearr_24991[(7)] = inst_24968);
return statearr_24991;
})();var statearr_24992_25005 = state_24982__$1;(statearr_24992_25005[(2)] = null);
(statearr_24992_25005[(1)] = (2));
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
var state_machine__11462__auto____0 = (function (){var statearr_24996 = [null,null,null,null,null,null,null,null,null];(statearr_24996[(0)] = state_machine__11462__auto__);
(statearr_24996[(1)] = (1));
return statearr_24996;
});
var state_machine__11462__auto____1 = (function (state_24982){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24982);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24997){if((e24997 instanceof Object))
{var ex__11465__auto__ = e24997;var statearr_24998_25006 = state_24982;(statearr_24998_25006[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24982);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24997;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25007 = state_24982;
state_24982 = G__25007;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24982){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_24999 = f__11518__auto__.call(null);(statearr_24999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_24999;
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
return (function (state_25081){var state_val_25082 = (state_25081[(1)]);if((state_val_25082 === (7)))
{var inst_25063 = (state_25081[(2)]);var state_25081__$1 = state_25081;var statearr_25083_25106 = state_25081__$1;(statearr_25083_25106[(2)] = inst_25063);
(statearr_25083_25106[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25082 === (1)))
{var inst_25057 = cljs.core.seq.call(null,coll);var inst_25058 = inst_25057;var state_25081__$1 = (function (){var statearr_25084 = state_25081;(statearr_25084[(7)] = inst_25058);
return statearr_25084;
})();var statearr_25085_25107 = state_25081__$1;(statearr_25085_25107[(2)] = null);
(statearr_25085_25107[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25082 === (4)))
{var inst_25058 = (state_25081[(7)]);var inst_25061 = cljs.core.first.call(null,inst_25058);var state_25081__$1 = state_25081;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25081__$1,(7),ch,inst_25061);
} else
{if((state_val_25082 === (13)))
{var inst_25075 = (state_25081[(2)]);var state_25081__$1 = state_25081;var statearr_25086_25108 = state_25081__$1;(statearr_25086_25108[(2)] = inst_25075);
(statearr_25086_25108[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25082 === (6)))
{var inst_25066 = (state_25081[(2)]);var state_25081__$1 = state_25081;if(cljs.core.truth_(inst_25066))
{var statearr_25087_25109 = state_25081__$1;(statearr_25087_25109[(1)] = (8));
} else
{var statearr_25088_25110 = state_25081__$1;(statearr_25088_25110[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25082 === (3)))
{var inst_25079 = (state_25081[(2)]);var state_25081__$1 = state_25081;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25081__$1,inst_25079);
} else
{if((state_val_25082 === (12)))
{var state_25081__$1 = state_25081;var statearr_25089_25111 = state_25081__$1;(statearr_25089_25111[(2)] = null);
(statearr_25089_25111[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25082 === (2)))
{var inst_25058 = (state_25081[(7)]);var state_25081__$1 = state_25081;if(cljs.core.truth_(inst_25058))
{var statearr_25090_25112 = state_25081__$1;(statearr_25090_25112[(1)] = (4));
} else
{var statearr_25091_25113 = state_25081__$1;(statearr_25091_25113[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25082 === (11)))
{var inst_25072 = cljs.core.async.close_BANG_.call(null,ch);var state_25081__$1 = state_25081;var statearr_25092_25114 = state_25081__$1;(statearr_25092_25114[(2)] = inst_25072);
(statearr_25092_25114[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25082 === (9)))
{var state_25081__$1 = state_25081;if(cljs.core.truth_(close_QMARK_))
{var statearr_25093_25115 = state_25081__$1;(statearr_25093_25115[(1)] = (11));
} else
{var statearr_25094_25116 = state_25081__$1;(statearr_25094_25116[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25082 === (5)))
{var inst_25058 = (state_25081[(7)]);var state_25081__$1 = state_25081;var statearr_25095_25117 = state_25081__$1;(statearr_25095_25117[(2)] = inst_25058);
(statearr_25095_25117[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25082 === (10)))
{var inst_25077 = (state_25081[(2)]);var state_25081__$1 = state_25081;var statearr_25096_25118 = state_25081__$1;(statearr_25096_25118[(2)] = inst_25077);
(statearr_25096_25118[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25082 === (8)))
{var inst_25058 = (state_25081[(7)]);var inst_25068 = cljs.core.next.call(null,inst_25058);var inst_25058__$1 = inst_25068;var state_25081__$1 = (function (){var statearr_25097 = state_25081;(statearr_25097[(7)] = inst_25058__$1);
return statearr_25097;
})();var statearr_25098_25119 = state_25081__$1;(statearr_25098_25119[(2)] = null);
(statearr_25098_25119[(1)] = (2));
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
var state_machine__11462__auto____0 = (function (){var statearr_25102 = [null,null,null,null,null,null,null,null];(statearr_25102[(0)] = state_machine__11462__auto__);
(statearr_25102[(1)] = (1));
return statearr_25102;
});
var state_machine__11462__auto____1 = (function (state_25081){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_25081);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e25103){if((e25103 instanceof Object))
{var ex__11465__auto__ = e25103;var statearr_25104_25120 = state_25081;(statearr_25104_25120[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25081);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25103;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25121 = state_25081;
state_25081 = G__25121;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_25081){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_25081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_25105 = f__11518__auto__.call(null);(statearr_25105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_25105;
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
cljs.core.async.Mux = (function (){var obj25123 = {};return obj25123;
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
cljs.core.async.Mult = (function (){var obj25125 = {};return obj25125;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25347 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25347 = (function (cs,ch,mult,meta25348){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25348 = meta25348;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25347.cljs$lang$type = true;
cljs.core.async.t25347.cljs$lang$ctorStr = "cljs.core.async/t25347";
cljs.core.async.t25347.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25347");
});})(cs))
;
cljs.core.async.t25347.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25347.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25347.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25347.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25347.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25347.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25347.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25349){var self__ = this;
var _25349__$1 = this;return self__.meta25348;
});})(cs))
;
cljs.core.async.t25347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25349,meta25348__$1){var self__ = this;
var _25349__$1 = this;return (new cljs.core.async.t25347(self__.cs,self__.ch,self__.mult,meta25348__$1));
});})(cs))
;
cljs.core.async.__GT_t25347 = ((function (cs){
return (function __GT_t25347(cs__$1,ch__$1,mult__$1,meta25348){return (new cljs.core.async.t25347(cs__$1,ch__$1,mult__$1,meta25348));
});})(cs))
;
}
return (new cljs.core.async.t25347(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11517__auto___25568 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___25568,cs,m,dchan,dctr,done){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___25568,cs,m,dchan,dctr,done){
return (function (state_25480){var state_val_25481 = (state_25480[(1)]);if((state_val_25481 === (7)))
{var inst_25476 = (state_25480[(2)]);var state_25480__$1 = state_25480;var statearr_25482_25569 = state_25480__$1;(statearr_25482_25569[(2)] = inst_25476);
(statearr_25482_25569[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (20)))
{var inst_25381 = (state_25480[(7)]);var inst_25391 = cljs.core.first.call(null,inst_25381);var inst_25392 = cljs.core.nth.call(null,inst_25391,(0),null);var inst_25393 = cljs.core.nth.call(null,inst_25391,(1),null);var state_25480__$1 = (function (){var statearr_25483 = state_25480;(statearr_25483[(8)] = inst_25392);
return statearr_25483;
})();if(cljs.core.truth_(inst_25393))
{var statearr_25484_25570 = state_25480__$1;(statearr_25484_25570[(1)] = (22));
} else
{var statearr_25485_25571 = state_25480__$1;(statearr_25485_25571[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (27)))
{var inst_25423 = (state_25480[(9)]);var inst_25421 = (state_25480[(10)]);var inst_25428 = (state_25480[(11)]);var inst_25352 = (state_25480[(12)]);var inst_25428__$1 = cljs.core._nth.call(null,inst_25421,inst_25423);var inst_25429 = cljs.core.async.put_BANG_.call(null,inst_25428__$1,inst_25352,done);var state_25480__$1 = (function (){var statearr_25486 = state_25480;(statearr_25486[(11)] = inst_25428__$1);
return statearr_25486;
})();if(cljs.core.truth_(inst_25429))
{var statearr_25487_25572 = state_25480__$1;(statearr_25487_25572[(1)] = (30));
} else
{var statearr_25488_25573 = state_25480__$1;(statearr_25488_25573[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (1)))
{var state_25480__$1 = state_25480;var statearr_25489_25574 = state_25480__$1;(statearr_25489_25574[(2)] = null);
(statearr_25489_25574[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (24)))
{var inst_25381 = (state_25480[(7)]);var inst_25398 = (state_25480[(2)]);var inst_25399 = cljs.core.next.call(null,inst_25381);var inst_25361 = inst_25399;var inst_25362 = null;var inst_25363 = (0);var inst_25364 = (0);var state_25480__$1 = (function (){var statearr_25490 = state_25480;(statearr_25490[(13)] = inst_25364);
(statearr_25490[(14)] = inst_25362);
(statearr_25490[(15)] = inst_25363);
(statearr_25490[(16)] = inst_25361);
(statearr_25490[(17)] = inst_25398);
return statearr_25490;
})();var statearr_25491_25575 = state_25480__$1;(statearr_25491_25575[(2)] = null);
(statearr_25491_25575[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (39)))
{var state_25480__$1 = state_25480;var statearr_25495_25576 = state_25480__$1;(statearr_25495_25576[(2)] = null);
(statearr_25495_25576[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (4)))
{var inst_25352 = (state_25480[(12)]);var inst_25352__$1 = (state_25480[(2)]);var inst_25353 = (inst_25352__$1 == null);var state_25480__$1 = (function (){var statearr_25496 = state_25480;(statearr_25496[(12)] = inst_25352__$1);
return statearr_25496;
})();if(cljs.core.truth_(inst_25353))
{var statearr_25497_25577 = state_25480__$1;(statearr_25497_25577[(1)] = (5));
} else
{var statearr_25498_25578 = state_25480__$1;(statearr_25498_25578[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (15)))
{var inst_25364 = (state_25480[(13)]);var inst_25362 = (state_25480[(14)]);var inst_25363 = (state_25480[(15)]);var inst_25361 = (state_25480[(16)]);var inst_25377 = (state_25480[(2)]);var inst_25378 = (inst_25364 + (1));var tmp25492 = inst_25362;var tmp25493 = inst_25363;var tmp25494 = inst_25361;var inst_25361__$1 = tmp25494;var inst_25362__$1 = tmp25492;var inst_25363__$1 = tmp25493;var inst_25364__$1 = inst_25378;var state_25480__$1 = (function (){var statearr_25499 = state_25480;(statearr_25499[(13)] = inst_25364__$1);
(statearr_25499[(14)] = inst_25362__$1);
(statearr_25499[(15)] = inst_25363__$1);
(statearr_25499[(16)] = inst_25361__$1);
(statearr_25499[(18)] = inst_25377);
return statearr_25499;
})();var statearr_25500_25579 = state_25480__$1;(statearr_25500_25579[(2)] = null);
(statearr_25500_25579[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (21)))
{var inst_25402 = (state_25480[(2)]);var state_25480__$1 = state_25480;var statearr_25504_25580 = state_25480__$1;(statearr_25504_25580[(2)] = inst_25402);
(statearr_25504_25580[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (31)))
{var inst_25428 = (state_25480[(11)]);var inst_25432 = done.call(null,null);var inst_25433 = cljs.core.async.untap_STAR_.call(null,m,inst_25428);var state_25480__$1 = (function (){var statearr_25505 = state_25480;(statearr_25505[(19)] = inst_25432);
return statearr_25505;
})();var statearr_25506_25581 = state_25480__$1;(statearr_25506_25581[(2)] = inst_25433);
(statearr_25506_25581[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (32)))
{var inst_25423 = (state_25480[(9)]);var inst_25422 = (state_25480[(20)]);var inst_25421 = (state_25480[(10)]);var inst_25420 = (state_25480[(21)]);var inst_25435 = (state_25480[(2)]);var inst_25436 = (inst_25423 + (1));var tmp25501 = inst_25422;var tmp25502 = inst_25421;var tmp25503 = inst_25420;var inst_25420__$1 = tmp25503;var inst_25421__$1 = tmp25502;var inst_25422__$1 = tmp25501;var inst_25423__$1 = inst_25436;var state_25480__$1 = (function (){var statearr_25507 = state_25480;(statearr_25507[(9)] = inst_25423__$1);
(statearr_25507[(20)] = inst_25422__$1);
(statearr_25507[(10)] = inst_25421__$1);
(statearr_25507[(21)] = inst_25420__$1);
(statearr_25507[(22)] = inst_25435);
return statearr_25507;
})();var statearr_25508_25582 = state_25480__$1;(statearr_25508_25582[(2)] = null);
(statearr_25508_25582[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (40)))
{var inst_25448 = (state_25480[(23)]);var inst_25452 = done.call(null,null);var inst_25453 = cljs.core.async.untap_STAR_.call(null,m,inst_25448);var state_25480__$1 = (function (){var statearr_25509 = state_25480;(statearr_25509[(24)] = inst_25452);
return statearr_25509;
})();var statearr_25510_25583 = state_25480__$1;(statearr_25510_25583[(2)] = inst_25453);
(statearr_25510_25583[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (33)))
{var inst_25439 = (state_25480[(25)]);var inst_25441 = cljs.core.chunked_seq_QMARK_.call(null,inst_25439);var state_25480__$1 = state_25480;if(inst_25441)
{var statearr_25511_25584 = state_25480__$1;(statearr_25511_25584[(1)] = (36));
} else
{var statearr_25512_25585 = state_25480__$1;(statearr_25512_25585[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (13)))
{var inst_25371 = (state_25480[(26)]);var inst_25374 = cljs.core.async.close_BANG_.call(null,inst_25371);var state_25480__$1 = state_25480;var statearr_25513_25586 = state_25480__$1;(statearr_25513_25586[(2)] = inst_25374);
(statearr_25513_25586[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (22)))
{var inst_25392 = (state_25480[(8)]);var inst_25395 = cljs.core.async.close_BANG_.call(null,inst_25392);var state_25480__$1 = state_25480;var statearr_25514_25587 = state_25480__$1;(statearr_25514_25587[(2)] = inst_25395);
(statearr_25514_25587[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (36)))
{var inst_25439 = (state_25480[(25)]);var inst_25443 = cljs.core.chunk_first.call(null,inst_25439);var inst_25444 = cljs.core.chunk_rest.call(null,inst_25439);var inst_25445 = cljs.core.count.call(null,inst_25443);var inst_25420 = inst_25444;var inst_25421 = inst_25443;var inst_25422 = inst_25445;var inst_25423 = (0);var state_25480__$1 = (function (){var statearr_25515 = state_25480;(statearr_25515[(9)] = inst_25423);
(statearr_25515[(20)] = inst_25422);
(statearr_25515[(10)] = inst_25421);
(statearr_25515[(21)] = inst_25420);
return statearr_25515;
})();var statearr_25516_25588 = state_25480__$1;(statearr_25516_25588[(2)] = null);
(statearr_25516_25588[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (41)))
{var inst_25439 = (state_25480[(25)]);var inst_25455 = (state_25480[(2)]);var inst_25456 = cljs.core.next.call(null,inst_25439);var inst_25420 = inst_25456;var inst_25421 = null;var inst_25422 = (0);var inst_25423 = (0);var state_25480__$1 = (function (){var statearr_25517 = state_25480;(statearr_25517[(9)] = inst_25423);
(statearr_25517[(20)] = inst_25422);
(statearr_25517[(10)] = inst_25421);
(statearr_25517[(27)] = inst_25455);
(statearr_25517[(21)] = inst_25420);
return statearr_25517;
})();var statearr_25518_25589 = state_25480__$1;(statearr_25518_25589[(2)] = null);
(statearr_25518_25589[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (43)))
{var state_25480__$1 = state_25480;var statearr_25519_25590 = state_25480__$1;(statearr_25519_25590[(2)] = null);
(statearr_25519_25590[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (29)))
{var inst_25464 = (state_25480[(2)]);var state_25480__$1 = state_25480;var statearr_25520_25591 = state_25480__$1;(statearr_25520_25591[(2)] = inst_25464);
(statearr_25520_25591[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (44)))
{var inst_25473 = (state_25480[(2)]);var state_25480__$1 = (function (){var statearr_25521 = state_25480;(statearr_25521[(28)] = inst_25473);
return statearr_25521;
})();var statearr_25522_25592 = state_25480__$1;(statearr_25522_25592[(2)] = null);
(statearr_25522_25592[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (6)))
{var inst_25412 = (state_25480[(29)]);var inst_25411 = cljs.core.deref.call(null,cs);var inst_25412__$1 = cljs.core.keys.call(null,inst_25411);var inst_25413 = cljs.core.count.call(null,inst_25412__$1);var inst_25414 = cljs.core.reset_BANG_.call(null,dctr,inst_25413);var inst_25419 = cljs.core.seq.call(null,inst_25412__$1);var inst_25420 = inst_25419;var inst_25421 = null;var inst_25422 = (0);var inst_25423 = (0);var state_25480__$1 = (function (){var statearr_25523 = state_25480;(statearr_25523[(9)] = inst_25423);
(statearr_25523[(20)] = inst_25422);
(statearr_25523[(10)] = inst_25421);
(statearr_25523[(21)] = inst_25420);
(statearr_25523[(30)] = inst_25414);
(statearr_25523[(29)] = inst_25412__$1);
return statearr_25523;
})();var statearr_25524_25593 = state_25480__$1;(statearr_25524_25593[(2)] = null);
(statearr_25524_25593[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (28)))
{var inst_25420 = (state_25480[(21)]);var inst_25439 = (state_25480[(25)]);var inst_25439__$1 = cljs.core.seq.call(null,inst_25420);var state_25480__$1 = (function (){var statearr_25525 = state_25480;(statearr_25525[(25)] = inst_25439__$1);
return statearr_25525;
})();if(inst_25439__$1)
{var statearr_25526_25594 = state_25480__$1;(statearr_25526_25594[(1)] = (33));
} else
{var statearr_25527_25595 = state_25480__$1;(statearr_25527_25595[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (25)))
{var inst_25423 = (state_25480[(9)]);var inst_25422 = (state_25480[(20)]);var inst_25425 = (inst_25423 < inst_25422);var inst_25426 = inst_25425;var state_25480__$1 = state_25480;if(cljs.core.truth_(inst_25426))
{var statearr_25528_25596 = state_25480__$1;(statearr_25528_25596[(1)] = (27));
} else
{var statearr_25529_25597 = state_25480__$1;(statearr_25529_25597[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (34)))
{var state_25480__$1 = state_25480;var statearr_25530_25598 = state_25480__$1;(statearr_25530_25598[(2)] = null);
(statearr_25530_25598[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (17)))
{var state_25480__$1 = state_25480;var statearr_25531_25599 = state_25480__$1;(statearr_25531_25599[(2)] = null);
(statearr_25531_25599[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (3)))
{var inst_25478 = (state_25480[(2)]);var state_25480__$1 = state_25480;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25480__$1,inst_25478);
} else
{if((state_val_25481 === (12)))
{var inst_25407 = (state_25480[(2)]);var state_25480__$1 = state_25480;var statearr_25532_25600 = state_25480__$1;(statearr_25532_25600[(2)] = inst_25407);
(statearr_25532_25600[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (2)))
{var state_25480__$1 = state_25480;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25480__$1,(4),ch);
} else
{if((state_val_25481 === (23)))
{var state_25480__$1 = state_25480;var statearr_25533_25601 = state_25480__$1;(statearr_25533_25601[(2)] = null);
(statearr_25533_25601[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (35)))
{var inst_25462 = (state_25480[(2)]);var state_25480__$1 = state_25480;var statearr_25534_25602 = state_25480__$1;(statearr_25534_25602[(2)] = inst_25462);
(statearr_25534_25602[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (19)))
{var inst_25381 = (state_25480[(7)]);var inst_25385 = cljs.core.chunk_first.call(null,inst_25381);var inst_25386 = cljs.core.chunk_rest.call(null,inst_25381);var inst_25387 = cljs.core.count.call(null,inst_25385);var inst_25361 = inst_25386;var inst_25362 = inst_25385;var inst_25363 = inst_25387;var inst_25364 = (0);var state_25480__$1 = (function (){var statearr_25535 = state_25480;(statearr_25535[(13)] = inst_25364);
(statearr_25535[(14)] = inst_25362);
(statearr_25535[(15)] = inst_25363);
(statearr_25535[(16)] = inst_25361);
return statearr_25535;
})();var statearr_25536_25603 = state_25480__$1;(statearr_25536_25603[(2)] = null);
(statearr_25536_25603[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (11)))
{var inst_25361 = (state_25480[(16)]);var inst_25381 = (state_25480[(7)]);var inst_25381__$1 = cljs.core.seq.call(null,inst_25361);var state_25480__$1 = (function (){var statearr_25537 = state_25480;(statearr_25537[(7)] = inst_25381__$1);
return statearr_25537;
})();if(inst_25381__$1)
{var statearr_25538_25604 = state_25480__$1;(statearr_25538_25604[(1)] = (16));
} else
{var statearr_25539_25605 = state_25480__$1;(statearr_25539_25605[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (9)))
{var inst_25409 = (state_25480[(2)]);var state_25480__$1 = state_25480;var statearr_25540_25606 = state_25480__$1;(statearr_25540_25606[(2)] = inst_25409);
(statearr_25540_25606[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (5)))
{var inst_25359 = cljs.core.deref.call(null,cs);var inst_25360 = cljs.core.seq.call(null,inst_25359);var inst_25361 = inst_25360;var inst_25362 = null;var inst_25363 = (0);var inst_25364 = (0);var state_25480__$1 = (function (){var statearr_25541 = state_25480;(statearr_25541[(13)] = inst_25364);
(statearr_25541[(14)] = inst_25362);
(statearr_25541[(15)] = inst_25363);
(statearr_25541[(16)] = inst_25361);
return statearr_25541;
})();var statearr_25542_25607 = state_25480__$1;(statearr_25542_25607[(2)] = null);
(statearr_25542_25607[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (14)))
{var state_25480__$1 = state_25480;var statearr_25543_25608 = state_25480__$1;(statearr_25543_25608[(2)] = null);
(statearr_25543_25608[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (45)))
{var inst_25470 = (state_25480[(2)]);var state_25480__$1 = state_25480;var statearr_25544_25609 = state_25480__$1;(statearr_25544_25609[(2)] = inst_25470);
(statearr_25544_25609[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (26)))
{var inst_25412 = (state_25480[(29)]);var inst_25466 = (state_25480[(2)]);var inst_25467 = cljs.core.seq.call(null,inst_25412);var state_25480__$1 = (function (){var statearr_25545 = state_25480;(statearr_25545[(31)] = inst_25466);
return statearr_25545;
})();if(inst_25467)
{var statearr_25546_25610 = state_25480__$1;(statearr_25546_25610[(1)] = (42));
} else
{var statearr_25547_25611 = state_25480__$1;(statearr_25547_25611[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (16)))
{var inst_25381 = (state_25480[(7)]);var inst_25383 = cljs.core.chunked_seq_QMARK_.call(null,inst_25381);var state_25480__$1 = state_25480;if(inst_25383)
{var statearr_25548_25612 = state_25480__$1;(statearr_25548_25612[(1)] = (19));
} else
{var statearr_25549_25613 = state_25480__$1;(statearr_25549_25613[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (38)))
{var inst_25459 = (state_25480[(2)]);var state_25480__$1 = state_25480;var statearr_25550_25614 = state_25480__$1;(statearr_25550_25614[(2)] = inst_25459);
(statearr_25550_25614[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (30)))
{var state_25480__$1 = state_25480;var statearr_25551_25615 = state_25480__$1;(statearr_25551_25615[(2)] = null);
(statearr_25551_25615[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (10)))
{var inst_25364 = (state_25480[(13)]);var inst_25362 = (state_25480[(14)]);var inst_25370 = cljs.core._nth.call(null,inst_25362,inst_25364);var inst_25371 = cljs.core.nth.call(null,inst_25370,(0),null);var inst_25372 = cljs.core.nth.call(null,inst_25370,(1),null);var state_25480__$1 = (function (){var statearr_25552 = state_25480;(statearr_25552[(26)] = inst_25371);
return statearr_25552;
})();if(cljs.core.truth_(inst_25372))
{var statearr_25553_25616 = state_25480__$1;(statearr_25553_25616[(1)] = (13));
} else
{var statearr_25554_25617 = state_25480__$1;(statearr_25554_25617[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (18)))
{var inst_25405 = (state_25480[(2)]);var state_25480__$1 = state_25480;var statearr_25555_25618 = state_25480__$1;(statearr_25555_25618[(2)] = inst_25405);
(statearr_25555_25618[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (42)))
{var state_25480__$1 = state_25480;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25480__$1,(45),dchan);
} else
{if((state_val_25481 === (37)))
{var inst_25448 = (state_25480[(23)]);var inst_25439 = (state_25480[(25)]);var inst_25352 = (state_25480[(12)]);var inst_25448__$1 = cljs.core.first.call(null,inst_25439);var inst_25449 = cljs.core.async.put_BANG_.call(null,inst_25448__$1,inst_25352,done);var state_25480__$1 = (function (){var statearr_25556 = state_25480;(statearr_25556[(23)] = inst_25448__$1);
return statearr_25556;
})();if(cljs.core.truth_(inst_25449))
{var statearr_25557_25619 = state_25480__$1;(statearr_25557_25619[(1)] = (39));
} else
{var statearr_25558_25620 = state_25480__$1;(statearr_25558_25620[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25481 === (8)))
{var inst_25364 = (state_25480[(13)]);var inst_25363 = (state_25480[(15)]);var inst_25366 = (inst_25364 < inst_25363);var inst_25367 = inst_25366;var state_25480__$1 = state_25480;if(cljs.core.truth_(inst_25367))
{var statearr_25559_25621 = state_25480__$1;(statearr_25559_25621[(1)] = (10));
} else
{var statearr_25560_25622 = state_25480__$1;(statearr_25560_25622[(1)] = (11));
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
});})(c__11517__auto___25568,cs,m,dchan,dctr,done))
;return ((function (switch__11461__auto__,c__11517__auto___25568,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_25564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25564[(0)] = state_machine__11462__auto__);
(statearr_25564[(1)] = (1));
return statearr_25564;
});
var state_machine__11462__auto____1 = (function (state_25480){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_25480);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e25565){if((e25565 instanceof Object))
{var ex__11465__auto__ = e25565;var statearr_25566_25623 = state_25480;(statearr_25566_25623[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25480);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25565;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25624 = state_25480;
state_25480 = G__25624;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_25480){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_25480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___25568,cs,m,dchan,dctr,done))
})();var state__11519__auto__ = (function (){var statearr_25567 = f__11518__auto__.call(null);(statearr_25567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___25568);
return statearr_25567;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___25568,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj25626 = {};return obj25626;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25627){var map__25632 = p__25627;var map__25632__$1 = ((cljs.core.seq_QMARK_.call(null,map__25632))?cljs.core.apply.call(null,cljs.core.hash_map,map__25632):map__25632);var opts = map__25632__$1;var statearr_25633_25636 = state;(statearr_25633_25636[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__25632,map__25632__$1,opts){
return (function (val){var statearr_25634_25637 = state;(statearr_25634_25637[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25632,map__25632__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_25635_25638 = state;(statearr_25635_25638[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25627 = null;if (arguments.length > 3) {
  p__25627 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25627);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25639){
var state = cljs.core.first(arglist__25639);
arglist__25639 = cljs.core.next(arglist__25639);
var cont_block = cljs.core.first(arglist__25639);
arglist__25639 = cljs.core.next(arglist__25639);
var ports = cljs.core.first(arglist__25639);
var p__25627 = cljs.core.rest(arglist__25639);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25627);
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
;var m = (function (){if(typeof cljs.core.async.t25759 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25759 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25760){
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
this.meta25760 = meta25760;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25759.cljs$lang$type = true;
cljs.core.async.t25759.cljs$lang$ctorStr = "cljs.core.async/t25759";
cljs.core.async.t25759.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25759");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25759.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25759.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25759.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25759.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25759.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25759.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25759.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25759.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25759.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25761){var self__ = this;
var _25761__$1 = this;return self__.meta25760;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25761,meta25760__$1){var self__ = this;
var _25761__$1 = this;return (new cljs.core.async.t25759(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25760__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25759 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25759(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25760){return (new cljs.core.async.t25759(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25760));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25759(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11517__auto___25878 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___25878,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___25878,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25831){var state_val_25832 = (state_25831[(1)]);if((state_val_25832 === (7)))
{var inst_25775 = (state_25831[(7)]);var inst_25780 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25775);var state_25831__$1 = state_25831;var statearr_25833_25879 = state_25831__$1;(statearr_25833_25879[(2)] = inst_25780);
(statearr_25833_25879[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25832 === (20)))
{var inst_25790 = (state_25831[(8)]);var state_25831__$1 = state_25831;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25831__$1,(23),out,inst_25790);
} else
{if((state_val_25832 === (1)))
{var inst_25765 = (state_25831[(9)]);var inst_25765__$1 = calc_state.call(null);var inst_25766 = cljs.core.seq_QMARK_.call(null,inst_25765__$1);var state_25831__$1 = (function (){var statearr_25834 = state_25831;(statearr_25834[(9)] = inst_25765__$1);
return statearr_25834;
})();if(inst_25766)
{var statearr_25835_25880 = state_25831__$1;(statearr_25835_25880[(1)] = (2));
} else
{var statearr_25836_25881 = state_25831__$1;(statearr_25836_25881[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25832 === (24)))
{var inst_25783 = (state_25831[(10)]);var inst_25775 = inst_25783;var state_25831__$1 = (function (){var statearr_25837 = state_25831;(statearr_25837[(7)] = inst_25775);
return statearr_25837;
})();var statearr_25838_25882 = state_25831__$1;(statearr_25838_25882[(2)] = null);
(statearr_25838_25882[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25832 === (4)))
{var inst_25765 = (state_25831[(9)]);var inst_25771 = (state_25831[(2)]);var inst_25772 = cljs.core.get.call(null,inst_25771,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25773 = cljs.core.get.call(null,inst_25771,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25774 = cljs.core.get.call(null,inst_25771,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_25775 = inst_25765;var state_25831__$1 = (function (){var statearr_25839 = state_25831;(statearr_25839[(11)] = inst_25772);
(statearr_25839[(7)] = inst_25775);
(statearr_25839[(12)] = inst_25774);
(statearr_25839[(13)] = inst_25773);
return statearr_25839;
})();var statearr_25840_25883 = state_25831__$1;(statearr_25840_25883[(2)] = null);
(statearr_25840_25883[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25832 === (15)))
{var state_25831__$1 = state_25831;var statearr_25841_25884 = state_25831__$1;(statearr_25841_25884[(2)] = null);
(statearr_25841_25884[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25832 === (21)))
{var inst_25783 = (state_25831[(10)]);var inst_25775 = inst_25783;var state_25831__$1 = (function (){var statearr_25842 = state_25831;(statearr_25842[(7)] = inst_25775);
return statearr_25842;
})();var statearr_25843_25885 = state_25831__$1;(statearr_25843_25885[(2)] = null);
(statearr_25843_25885[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25832 === (13)))
{var inst_25827 = (state_25831[(2)]);var state_25831__$1 = state_25831;var statearr_25844_25886 = state_25831__$1;(statearr_25844_25886[(2)] = inst_25827);
(statearr_25844_25886[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25832 === (22)))
{var inst_25825 = (state_25831[(2)]);var state_25831__$1 = state_25831;var statearr_25845_25887 = state_25831__$1;(statearr_25845_25887[(2)] = inst_25825);
(statearr_25845_25887[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25832 === (6)))
{var inst_25829 = (state_25831[(2)]);var state_25831__$1 = state_25831;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25831__$1,inst_25829);
} else
{if((state_val_25832 === (25)))
{var state_25831__$1 = state_25831;var statearr_25846_25888 = state_25831__$1;(statearr_25846_25888[(2)] = null);
(statearr_25846_25888[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25832 === (17)))
{var inst_25805 = (state_25831[(14)]);var state_25831__$1 = state_25831;var statearr_25847_25889 = state_25831__$1;(statearr_25847_25889[(2)] = inst_25805);
(statearr_25847_25889[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25832 === (3)))
{var inst_25765 = (state_25831[(9)]);var state_25831__$1 = state_25831;var statearr_25848_25890 = state_25831__$1;(statearr_25848_25890[(2)] = inst_25765);
(statearr_25848_25890[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25832 === (12)))
{var inst_25786 = (state_25831[(15)]);var inst_25805 = (state_25831[(14)]);var inst_25791 = (state_25831[(16)]);var inst_25805__$1 = inst_25786.call(null,inst_25791);var state_25831__$1 = (function (){var statearr_25849 = state_25831;(statearr_25849[(14)] = inst_25805__$1);
return statearr_25849;
})();if(cljs.core.truth_(inst_25805__$1))
{var statearr_25850_25891 = state_25831__$1;(statearr_25850_25891[(1)] = (17));
} else
{var statearr_25851_25892 = state_25831__$1;(statearr_25851_25892[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25832 === (2)))
{var inst_25765 = (state_25831[(9)]);var inst_25768 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25765);var state_25831__$1 = state_25831;var statearr_25852_25893 = state_25831__$1;(statearr_25852_25893[(2)] = inst_25768);
(statearr_25852_25893[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25832 === (23)))
{var inst_25816 = (state_25831[(2)]);var state_25831__$1 = state_25831;if(cljs.core.truth_(inst_25816))
{var statearr_25853_25894 = state_25831__$1;(statearr_25853_25894[(1)] = (24));
} else
{var statearr_25854_25895 = state_25831__$1;(statearr_25854_25895[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25832 === (19)))
{var inst_25813 = (state_25831[(2)]);var state_25831__$1 = state_25831;if(cljs.core.truth_(inst_25813))
{var statearr_25855_25896 = state_25831__$1;(statearr_25855_25896[(1)] = (20));
} else
{var statearr_25856_25897 = state_25831__$1;(statearr_25856_25897[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25832 === (11)))
{var inst_25790 = (state_25831[(8)]);var inst_25796 = (inst_25790 == null);var state_25831__$1 = state_25831;if(cljs.core.truth_(inst_25796))
{var statearr_25857_25898 = state_25831__$1;(statearr_25857_25898[(1)] = (14));
} else
{var statearr_25858_25899 = state_25831__$1;(statearr_25858_25899[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25832 === (9)))
{var inst_25783 = (state_25831[(10)]);var inst_25783__$1 = (state_25831[(2)]);var inst_25784 = cljs.core.get.call(null,inst_25783__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25785 = cljs.core.get.call(null,inst_25783__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25786 = cljs.core.get.call(null,inst_25783__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_25831__$1 = (function (){var statearr_25859 = state_25831;(statearr_25859[(10)] = inst_25783__$1);
(statearr_25859[(15)] = inst_25786);
(statearr_25859[(17)] = inst_25785);
return statearr_25859;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_25831__$1,(10),inst_25784);
} else
{if((state_val_25832 === (5)))
{var inst_25775 = (state_25831[(7)]);var inst_25778 = cljs.core.seq_QMARK_.call(null,inst_25775);var state_25831__$1 = state_25831;if(inst_25778)
{var statearr_25860_25900 = state_25831__$1;(statearr_25860_25900[(1)] = (7));
} else
{var statearr_25861_25901 = state_25831__$1;(statearr_25861_25901[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25832 === (14)))
{var inst_25791 = (state_25831[(16)]);var inst_25798 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25791);var state_25831__$1 = state_25831;var statearr_25862_25902 = state_25831__$1;(statearr_25862_25902[(2)] = inst_25798);
(statearr_25862_25902[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25832 === (26)))
{var inst_25821 = (state_25831[(2)]);var state_25831__$1 = state_25831;var statearr_25863_25903 = state_25831__$1;(statearr_25863_25903[(2)] = inst_25821);
(statearr_25863_25903[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25832 === (16)))
{var inst_25801 = (state_25831[(2)]);var inst_25802 = calc_state.call(null);var inst_25775 = inst_25802;var state_25831__$1 = (function (){var statearr_25864 = state_25831;(statearr_25864[(18)] = inst_25801);
(statearr_25864[(7)] = inst_25775);
return statearr_25864;
})();var statearr_25865_25904 = state_25831__$1;(statearr_25865_25904[(2)] = null);
(statearr_25865_25904[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25832 === (10)))
{var inst_25790 = (state_25831[(8)]);var inst_25791 = (state_25831[(16)]);var inst_25789 = (state_25831[(2)]);var inst_25790__$1 = cljs.core.nth.call(null,inst_25789,(0),null);var inst_25791__$1 = cljs.core.nth.call(null,inst_25789,(1),null);var inst_25792 = (inst_25790__$1 == null);var inst_25793 = cljs.core._EQ_.call(null,inst_25791__$1,change);var inst_25794 = (inst_25792) || (inst_25793);var state_25831__$1 = (function (){var statearr_25866 = state_25831;(statearr_25866[(8)] = inst_25790__$1);
(statearr_25866[(16)] = inst_25791__$1);
return statearr_25866;
})();if(cljs.core.truth_(inst_25794))
{var statearr_25867_25905 = state_25831__$1;(statearr_25867_25905[(1)] = (11));
} else
{var statearr_25868_25906 = state_25831__$1;(statearr_25868_25906[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25832 === (18)))
{var inst_25786 = (state_25831[(15)]);var inst_25785 = (state_25831[(17)]);var inst_25791 = (state_25831[(16)]);var inst_25808 = cljs.core.empty_QMARK_.call(null,inst_25786);var inst_25809 = inst_25785.call(null,inst_25791);var inst_25810 = cljs.core.not.call(null,inst_25809);var inst_25811 = (inst_25808) && (inst_25810);var state_25831__$1 = state_25831;var statearr_25869_25907 = state_25831__$1;(statearr_25869_25907[(2)] = inst_25811);
(statearr_25869_25907[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25832 === (8)))
{var inst_25775 = (state_25831[(7)]);var state_25831__$1 = state_25831;var statearr_25870_25908 = state_25831__$1;(statearr_25870_25908[(2)] = inst_25775);
(statearr_25870_25908[(1)] = (9));
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
});})(c__11517__auto___25878,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__11461__auto__,c__11517__auto___25878,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_25874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25874[(0)] = state_machine__11462__auto__);
(statearr_25874[(1)] = (1));
return statearr_25874;
});
var state_machine__11462__auto____1 = (function (state_25831){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_25831);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e25875){if((e25875 instanceof Object))
{var ex__11465__auto__ = e25875;var statearr_25876_25909 = state_25831;(statearr_25876_25909[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25831);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25875;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25910 = state_25831;
state_25831 = G__25910;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_25831){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_25831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___25878,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11519__auto__ = (function (){var statearr_25877 = f__11518__auto__.call(null);(statearr_25877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___25878);
return statearr_25877;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___25878,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25912 = {};return obj25912;
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
return (function (p1__25913_SHARP_){if(cljs.core.truth_(p1__25913_SHARP_.call(null,topic)))
{return p1__25913_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__25913_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26036 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26036 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26037){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26037 = meta26037;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26036.cljs$lang$type = true;
cljs.core.async.t26036.cljs$lang$ctorStr = "cljs.core.async/t26036";
cljs.core.async.t26036.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26036");
});})(mults,ensure_mult))
;
cljs.core.async.t26036.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26036.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26036.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26036.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26036.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26036.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26036.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26036.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26038){var self__ = this;
var _26038__$1 = this;return self__.meta26037;
});})(mults,ensure_mult))
;
cljs.core.async.t26036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26038,meta26037__$1){var self__ = this;
var _26038__$1 = this;return (new cljs.core.async.t26036(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26037__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26036 = ((function (mults,ensure_mult){
return (function __GT_t26036(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26037){return (new cljs.core.async.t26036(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26037));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26036(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11517__auto___26158 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26158,mults,ensure_mult,p){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26158,mults,ensure_mult,p){
return (function (state_26110){var state_val_26111 = (state_26110[(1)]);if((state_val_26111 === (7)))
{var inst_26106 = (state_26110[(2)]);var state_26110__$1 = state_26110;var statearr_26112_26159 = state_26110__$1;(statearr_26112_26159[(2)] = inst_26106);
(statearr_26112_26159[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26111 === (20)))
{var state_26110__$1 = state_26110;var statearr_26113_26160 = state_26110__$1;(statearr_26113_26160[(2)] = null);
(statearr_26113_26160[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26111 === (1)))
{var state_26110__$1 = state_26110;var statearr_26114_26161 = state_26110__$1;(statearr_26114_26161[(2)] = null);
(statearr_26114_26161[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26111 === (24)))
{var inst_26089 = (state_26110[(7)]);var inst_26098 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26089);var state_26110__$1 = state_26110;var statearr_26115_26162 = state_26110__$1;(statearr_26115_26162[(2)] = inst_26098);
(statearr_26115_26162[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26111 === (4)))
{var inst_26041 = (state_26110[(8)]);var inst_26041__$1 = (state_26110[(2)]);var inst_26042 = (inst_26041__$1 == null);var state_26110__$1 = (function (){var statearr_26116 = state_26110;(statearr_26116[(8)] = inst_26041__$1);
return statearr_26116;
})();if(cljs.core.truth_(inst_26042))
{var statearr_26117_26163 = state_26110__$1;(statearr_26117_26163[(1)] = (5));
} else
{var statearr_26118_26164 = state_26110__$1;(statearr_26118_26164[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26111 === (15)))
{var inst_26083 = (state_26110[(2)]);var state_26110__$1 = state_26110;var statearr_26119_26165 = state_26110__$1;(statearr_26119_26165[(2)] = inst_26083);
(statearr_26119_26165[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26111 === (21)))
{var inst_26103 = (state_26110[(2)]);var state_26110__$1 = (function (){var statearr_26120 = state_26110;(statearr_26120[(9)] = inst_26103);
return statearr_26120;
})();var statearr_26121_26166 = state_26110__$1;(statearr_26121_26166[(2)] = null);
(statearr_26121_26166[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26111 === (13)))
{var inst_26065 = (state_26110[(10)]);var inst_26067 = cljs.core.chunked_seq_QMARK_.call(null,inst_26065);var state_26110__$1 = state_26110;if(inst_26067)
{var statearr_26122_26167 = state_26110__$1;(statearr_26122_26167[(1)] = (16));
} else
{var statearr_26123_26168 = state_26110__$1;(statearr_26123_26168[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26111 === (22)))
{var inst_26095 = (state_26110[(2)]);var state_26110__$1 = state_26110;if(cljs.core.truth_(inst_26095))
{var statearr_26124_26169 = state_26110__$1;(statearr_26124_26169[(1)] = (23));
} else
{var statearr_26125_26170 = state_26110__$1;(statearr_26125_26170[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26111 === (6)))
{var inst_26091 = (state_26110[(11)]);var inst_26089 = (state_26110[(7)]);var inst_26041 = (state_26110[(8)]);var inst_26089__$1 = topic_fn.call(null,inst_26041);var inst_26090 = cljs.core.deref.call(null,mults);var inst_26091__$1 = cljs.core.get.call(null,inst_26090,inst_26089__$1);var state_26110__$1 = (function (){var statearr_26126 = state_26110;(statearr_26126[(11)] = inst_26091__$1);
(statearr_26126[(7)] = inst_26089__$1);
return statearr_26126;
})();if(cljs.core.truth_(inst_26091__$1))
{var statearr_26127_26171 = state_26110__$1;(statearr_26127_26171[(1)] = (19));
} else
{var statearr_26128_26172 = state_26110__$1;(statearr_26128_26172[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26111 === (25)))
{var inst_26100 = (state_26110[(2)]);var state_26110__$1 = state_26110;var statearr_26129_26173 = state_26110__$1;(statearr_26129_26173[(2)] = inst_26100);
(statearr_26129_26173[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26111 === (17)))
{var inst_26065 = (state_26110[(10)]);var inst_26074 = cljs.core.first.call(null,inst_26065);var inst_26075 = cljs.core.async.muxch_STAR_.call(null,inst_26074);var inst_26076 = cljs.core.async.close_BANG_.call(null,inst_26075);var inst_26077 = cljs.core.next.call(null,inst_26065);var inst_26051 = inst_26077;var inst_26052 = null;var inst_26053 = (0);var inst_26054 = (0);var state_26110__$1 = (function (){var statearr_26130 = state_26110;(statearr_26130[(12)] = inst_26051);
(statearr_26130[(13)] = inst_26076);
(statearr_26130[(14)] = inst_26054);
(statearr_26130[(15)] = inst_26053);
(statearr_26130[(16)] = inst_26052);
return statearr_26130;
})();var statearr_26131_26174 = state_26110__$1;(statearr_26131_26174[(2)] = null);
(statearr_26131_26174[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26111 === (3)))
{var inst_26108 = (state_26110[(2)]);var state_26110__$1 = state_26110;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26110__$1,inst_26108);
} else
{if((state_val_26111 === (12)))
{var inst_26085 = (state_26110[(2)]);var state_26110__$1 = state_26110;var statearr_26132_26175 = state_26110__$1;(statearr_26132_26175[(2)] = inst_26085);
(statearr_26132_26175[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26111 === (2)))
{var state_26110__$1 = state_26110;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26110__$1,(4),ch);
} else
{if((state_val_26111 === (23)))
{var state_26110__$1 = state_26110;var statearr_26133_26176 = state_26110__$1;(statearr_26133_26176[(2)] = null);
(statearr_26133_26176[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26111 === (19)))
{var inst_26091 = (state_26110[(11)]);var inst_26041 = (state_26110[(8)]);var inst_26093 = cljs.core.async.muxch_STAR_.call(null,inst_26091);var state_26110__$1 = state_26110;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26110__$1,(22),inst_26093,inst_26041);
} else
{if((state_val_26111 === (11)))
{var inst_26051 = (state_26110[(12)]);var inst_26065 = (state_26110[(10)]);var inst_26065__$1 = cljs.core.seq.call(null,inst_26051);var state_26110__$1 = (function (){var statearr_26134 = state_26110;(statearr_26134[(10)] = inst_26065__$1);
return statearr_26134;
})();if(inst_26065__$1)
{var statearr_26135_26177 = state_26110__$1;(statearr_26135_26177[(1)] = (13));
} else
{var statearr_26136_26178 = state_26110__$1;(statearr_26136_26178[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26111 === (9)))
{var inst_26087 = (state_26110[(2)]);var state_26110__$1 = state_26110;var statearr_26137_26179 = state_26110__$1;(statearr_26137_26179[(2)] = inst_26087);
(statearr_26137_26179[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26111 === (5)))
{var inst_26048 = cljs.core.deref.call(null,mults);var inst_26049 = cljs.core.vals.call(null,inst_26048);var inst_26050 = cljs.core.seq.call(null,inst_26049);var inst_26051 = inst_26050;var inst_26052 = null;var inst_26053 = (0);var inst_26054 = (0);var state_26110__$1 = (function (){var statearr_26138 = state_26110;(statearr_26138[(12)] = inst_26051);
(statearr_26138[(14)] = inst_26054);
(statearr_26138[(15)] = inst_26053);
(statearr_26138[(16)] = inst_26052);
return statearr_26138;
})();var statearr_26139_26180 = state_26110__$1;(statearr_26139_26180[(2)] = null);
(statearr_26139_26180[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26111 === (14)))
{var state_26110__$1 = state_26110;var statearr_26143_26181 = state_26110__$1;(statearr_26143_26181[(2)] = null);
(statearr_26143_26181[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26111 === (16)))
{var inst_26065 = (state_26110[(10)]);var inst_26069 = cljs.core.chunk_first.call(null,inst_26065);var inst_26070 = cljs.core.chunk_rest.call(null,inst_26065);var inst_26071 = cljs.core.count.call(null,inst_26069);var inst_26051 = inst_26070;var inst_26052 = inst_26069;var inst_26053 = inst_26071;var inst_26054 = (0);var state_26110__$1 = (function (){var statearr_26144 = state_26110;(statearr_26144[(12)] = inst_26051);
(statearr_26144[(14)] = inst_26054);
(statearr_26144[(15)] = inst_26053);
(statearr_26144[(16)] = inst_26052);
return statearr_26144;
})();var statearr_26145_26182 = state_26110__$1;(statearr_26145_26182[(2)] = null);
(statearr_26145_26182[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26111 === (10)))
{var inst_26051 = (state_26110[(12)]);var inst_26054 = (state_26110[(14)]);var inst_26053 = (state_26110[(15)]);var inst_26052 = (state_26110[(16)]);var inst_26059 = cljs.core._nth.call(null,inst_26052,inst_26054);var inst_26060 = cljs.core.async.muxch_STAR_.call(null,inst_26059);var inst_26061 = cljs.core.async.close_BANG_.call(null,inst_26060);var inst_26062 = (inst_26054 + (1));var tmp26140 = inst_26051;var tmp26141 = inst_26053;var tmp26142 = inst_26052;var inst_26051__$1 = tmp26140;var inst_26052__$1 = tmp26142;var inst_26053__$1 = tmp26141;var inst_26054__$1 = inst_26062;var state_26110__$1 = (function (){var statearr_26146 = state_26110;(statearr_26146[(12)] = inst_26051__$1);
(statearr_26146[(17)] = inst_26061);
(statearr_26146[(14)] = inst_26054__$1);
(statearr_26146[(15)] = inst_26053__$1);
(statearr_26146[(16)] = inst_26052__$1);
return statearr_26146;
})();var statearr_26147_26183 = state_26110__$1;(statearr_26147_26183[(2)] = null);
(statearr_26147_26183[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26111 === (18)))
{var inst_26080 = (state_26110[(2)]);var state_26110__$1 = state_26110;var statearr_26148_26184 = state_26110__$1;(statearr_26148_26184[(2)] = inst_26080);
(statearr_26148_26184[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26111 === (8)))
{var inst_26054 = (state_26110[(14)]);var inst_26053 = (state_26110[(15)]);var inst_26056 = (inst_26054 < inst_26053);var inst_26057 = inst_26056;var state_26110__$1 = state_26110;if(cljs.core.truth_(inst_26057))
{var statearr_26149_26185 = state_26110__$1;(statearr_26149_26185[(1)] = (10));
} else
{var statearr_26150_26186 = state_26110__$1;(statearr_26150_26186[(1)] = (11));
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
});})(c__11517__auto___26158,mults,ensure_mult,p))
;return ((function (switch__11461__auto__,c__11517__auto___26158,mults,ensure_mult,p){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26154 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26154[(0)] = state_machine__11462__auto__);
(statearr_26154[(1)] = (1));
return statearr_26154;
});
var state_machine__11462__auto____1 = (function (state_26110){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26110);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26155){if((e26155 instanceof Object))
{var ex__11465__auto__ = e26155;var statearr_26156_26187 = state_26110;(statearr_26156_26187[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26110);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26155;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26188 = state_26110;
state_26110 = G__26188;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26110){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26158,mults,ensure_mult,p))
})();var state__11519__auto__ = (function (){var statearr_26157 = f__11518__auto__.call(null);(statearr_26157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26158);
return statearr_26157;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26158,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__11517__auto___26325 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26325,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26325,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26295){var state_val_26296 = (state_26295[(1)]);if((state_val_26296 === (7)))
{var state_26295__$1 = state_26295;var statearr_26297_26326 = state_26295__$1;(statearr_26297_26326[(2)] = null);
(statearr_26297_26326[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26296 === (1)))
{var state_26295__$1 = state_26295;var statearr_26298_26327 = state_26295__$1;(statearr_26298_26327[(2)] = null);
(statearr_26298_26327[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26296 === (4)))
{var inst_26259 = (state_26295[(7)]);var inst_26261 = (inst_26259 < cnt);var state_26295__$1 = state_26295;if(cljs.core.truth_(inst_26261))
{var statearr_26299_26328 = state_26295__$1;(statearr_26299_26328[(1)] = (6));
} else
{var statearr_26300_26329 = state_26295__$1;(statearr_26300_26329[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26296 === (15)))
{var inst_26291 = (state_26295[(2)]);var state_26295__$1 = state_26295;var statearr_26301_26330 = state_26295__$1;(statearr_26301_26330[(2)] = inst_26291);
(statearr_26301_26330[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26296 === (13)))
{var inst_26284 = cljs.core.async.close_BANG_.call(null,out);var state_26295__$1 = state_26295;var statearr_26302_26331 = state_26295__$1;(statearr_26302_26331[(2)] = inst_26284);
(statearr_26302_26331[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26296 === (6)))
{var state_26295__$1 = state_26295;var statearr_26303_26332 = state_26295__$1;(statearr_26303_26332[(2)] = null);
(statearr_26303_26332[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26296 === (3)))
{var inst_26293 = (state_26295[(2)]);var state_26295__$1 = state_26295;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26295__$1,inst_26293);
} else
{if((state_val_26296 === (12)))
{var inst_26281 = (state_26295[(8)]);var inst_26281__$1 = (state_26295[(2)]);var inst_26282 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26281__$1);var state_26295__$1 = (function (){var statearr_26304 = state_26295;(statearr_26304[(8)] = inst_26281__$1);
return statearr_26304;
})();if(cljs.core.truth_(inst_26282))
{var statearr_26305_26333 = state_26295__$1;(statearr_26305_26333[(1)] = (13));
} else
{var statearr_26306_26334 = state_26295__$1;(statearr_26306_26334[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26296 === (2)))
{var inst_26258 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26259 = (0);var state_26295__$1 = (function (){var statearr_26307 = state_26295;(statearr_26307[(9)] = inst_26258);
(statearr_26307[(7)] = inst_26259);
return statearr_26307;
})();var statearr_26308_26335 = state_26295__$1;(statearr_26308_26335[(2)] = null);
(statearr_26308_26335[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26296 === (11)))
{var inst_26259 = (state_26295[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26295,(10),Object,null,(9));var inst_26268 = chs__$1.call(null,inst_26259);var inst_26269 = done.call(null,inst_26259);var inst_26270 = cljs.core.async.take_BANG_.call(null,inst_26268,inst_26269);var state_26295__$1 = state_26295;var statearr_26309_26336 = state_26295__$1;(statearr_26309_26336[(2)] = inst_26270);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26295__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26296 === (9)))
{var inst_26259 = (state_26295[(7)]);var inst_26272 = (state_26295[(2)]);var inst_26273 = (inst_26259 + (1));var inst_26259__$1 = inst_26273;var state_26295__$1 = (function (){var statearr_26310 = state_26295;(statearr_26310[(10)] = inst_26272);
(statearr_26310[(7)] = inst_26259__$1);
return statearr_26310;
})();var statearr_26311_26337 = state_26295__$1;(statearr_26311_26337[(2)] = null);
(statearr_26311_26337[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26296 === (5)))
{var inst_26279 = (state_26295[(2)]);var state_26295__$1 = (function (){var statearr_26312 = state_26295;(statearr_26312[(11)] = inst_26279);
return statearr_26312;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26295__$1,(12),dchan);
} else
{if((state_val_26296 === (14)))
{var inst_26281 = (state_26295[(8)]);var inst_26286 = cljs.core.apply.call(null,f,inst_26281);var state_26295__$1 = state_26295;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26295__$1,(16),out,inst_26286);
} else
{if((state_val_26296 === (16)))
{var inst_26288 = (state_26295[(2)]);var state_26295__$1 = (function (){var statearr_26313 = state_26295;(statearr_26313[(12)] = inst_26288);
return statearr_26313;
})();var statearr_26314_26338 = state_26295__$1;(statearr_26314_26338[(2)] = null);
(statearr_26314_26338[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26296 === (10)))
{var inst_26263 = (state_26295[(2)]);var inst_26264 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26295__$1 = (function (){var statearr_26315 = state_26295;(statearr_26315[(13)] = inst_26263);
return statearr_26315;
})();var statearr_26316_26339 = state_26295__$1;(statearr_26316_26339[(2)] = inst_26264);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26295__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26296 === (8)))
{var inst_26277 = (state_26295[(2)]);var state_26295__$1 = state_26295;var statearr_26317_26340 = state_26295__$1;(statearr_26317_26340[(2)] = inst_26277);
(statearr_26317_26340[(1)] = (5));
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
});})(c__11517__auto___26325,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__11461__auto__,c__11517__auto___26325,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26321[(0)] = state_machine__11462__auto__);
(statearr_26321[(1)] = (1));
return statearr_26321;
});
var state_machine__11462__auto____1 = (function (state_26295){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26295);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26322){if((e26322 instanceof Object))
{var ex__11465__auto__ = e26322;var statearr_26323_26341 = state_26295;(statearr_26323_26341[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26295);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26322;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26342 = state_26295;
state_26295 = G__26342;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26295){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26325,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11519__auto__ = (function (){var statearr_26324 = f__11518__auto__.call(null);(statearr_26324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26325);
return statearr_26324;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26325,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___26450 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26450,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26450,out){
return (function (state_26426){var state_val_26427 = (state_26426[(1)]);if((state_val_26427 === (7)))
{var inst_26406 = (state_26426[(7)]);var inst_26405 = (state_26426[(8)]);var inst_26405__$1 = (state_26426[(2)]);var inst_26406__$1 = cljs.core.nth.call(null,inst_26405__$1,(0),null);var inst_26407 = cljs.core.nth.call(null,inst_26405__$1,(1),null);var inst_26408 = (inst_26406__$1 == null);var state_26426__$1 = (function (){var statearr_26428 = state_26426;(statearr_26428[(7)] = inst_26406__$1);
(statearr_26428[(9)] = inst_26407);
(statearr_26428[(8)] = inst_26405__$1);
return statearr_26428;
})();if(cljs.core.truth_(inst_26408))
{var statearr_26429_26451 = state_26426__$1;(statearr_26429_26451[(1)] = (8));
} else
{var statearr_26430_26452 = state_26426__$1;(statearr_26430_26452[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26427 === (1)))
{var inst_26397 = cljs.core.vec.call(null,chs);var inst_26398 = inst_26397;var state_26426__$1 = (function (){var statearr_26431 = state_26426;(statearr_26431[(10)] = inst_26398);
return statearr_26431;
})();var statearr_26432_26453 = state_26426__$1;(statearr_26432_26453[(2)] = null);
(statearr_26432_26453[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26427 === (4)))
{var inst_26398 = (state_26426[(10)]);var state_26426__$1 = state_26426;return cljs.core.async.ioc_alts_BANG_.call(null,state_26426__$1,(7),inst_26398);
} else
{if((state_val_26427 === (6)))
{var inst_26422 = (state_26426[(2)]);var state_26426__$1 = state_26426;var statearr_26433_26454 = state_26426__$1;(statearr_26433_26454[(2)] = inst_26422);
(statearr_26433_26454[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26427 === (3)))
{var inst_26424 = (state_26426[(2)]);var state_26426__$1 = state_26426;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26426__$1,inst_26424);
} else
{if((state_val_26427 === (2)))
{var inst_26398 = (state_26426[(10)]);var inst_26400 = cljs.core.count.call(null,inst_26398);var inst_26401 = (inst_26400 > (0));var state_26426__$1 = state_26426;if(cljs.core.truth_(inst_26401))
{var statearr_26435_26455 = state_26426__$1;(statearr_26435_26455[(1)] = (4));
} else
{var statearr_26436_26456 = state_26426__$1;(statearr_26436_26456[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26427 === (11)))
{var inst_26398 = (state_26426[(10)]);var inst_26415 = (state_26426[(2)]);var tmp26434 = inst_26398;var inst_26398__$1 = tmp26434;var state_26426__$1 = (function (){var statearr_26437 = state_26426;(statearr_26437[(10)] = inst_26398__$1);
(statearr_26437[(11)] = inst_26415);
return statearr_26437;
})();var statearr_26438_26457 = state_26426__$1;(statearr_26438_26457[(2)] = null);
(statearr_26438_26457[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26427 === (9)))
{var inst_26406 = (state_26426[(7)]);var state_26426__$1 = state_26426;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26426__$1,(11),out,inst_26406);
} else
{if((state_val_26427 === (5)))
{var inst_26420 = cljs.core.async.close_BANG_.call(null,out);var state_26426__$1 = state_26426;var statearr_26439_26458 = state_26426__$1;(statearr_26439_26458[(2)] = inst_26420);
(statearr_26439_26458[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26427 === (10)))
{var inst_26418 = (state_26426[(2)]);var state_26426__$1 = state_26426;var statearr_26440_26459 = state_26426__$1;(statearr_26440_26459[(2)] = inst_26418);
(statearr_26440_26459[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26427 === (8)))
{var inst_26406 = (state_26426[(7)]);var inst_26398 = (state_26426[(10)]);var inst_26407 = (state_26426[(9)]);var inst_26405 = (state_26426[(8)]);var inst_26410 = (function (){var c = inst_26407;var v = inst_26406;var vec__26403 = inst_26405;var cs = inst_26398;return ((function (c,v,vec__26403,cs,inst_26406,inst_26398,inst_26407,inst_26405,state_val_26427,c__11517__auto___26450,out){
return (function (p1__26343_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__26343_SHARP_);
});
;})(c,v,vec__26403,cs,inst_26406,inst_26398,inst_26407,inst_26405,state_val_26427,c__11517__auto___26450,out))
})();var inst_26411 = cljs.core.filterv.call(null,inst_26410,inst_26398);var inst_26398__$1 = inst_26411;var state_26426__$1 = (function (){var statearr_26441 = state_26426;(statearr_26441[(10)] = inst_26398__$1);
return statearr_26441;
})();var statearr_26442_26460 = state_26426__$1;(statearr_26442_26460[(2)] = null);
(statearr_26442_26460[(1)] = (2));
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
});})(c__11517__auto___26450,out))
;return ((function (switch__11461__auto__,c__11517__auto___26450,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26446 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26446[(0)] = state_machine__11462__auto__);
(statearr_26446[(1)] = (1));
return statearr_26446;
});
var state_machine__11462__auto____1 = (function (state_26426){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26426);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26447){if((e26447 instanceof Object))
{var ex__11465__auto__ = e26447;var statearr_26448_26461 = state_26426;(statearr_26448_26461[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26426);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26447;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26462 = state_26426;
state_26426 = G__26462;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26426){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26450,out))
})();var state__11519__auto__ = (function (){var statearr_26449 = f__11518__auto__.call(null);(statearr_26449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26450);
return statearr_26449;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26450,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___26555 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26555,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26555,out){
return (function (state_26532){var state_val_26533 = (state_26532[(1)]);if((state_val_26533 === (7)))
{var inst_26514 = (state_26532[(7)]);var inst_26514__$1 = (state_26532[(2)]);var inst_26515 = (inst_26514__$1 == null);var inst_26516 = cljs.core.not.call(null,inst_26515);var state_26532__$1 = (function (){var statearr_26534 = state_26532;(statearr_26534[(7)] = inst_26514__$1);
return statearr_26534;
})();if(inst_26516)
{var statearr_26535_26556 = state_26532__$1;(statearr_26535_26556[(1)] = (8));
} else
{var statearr_26536_26557 = state_26532__$1;(statearr_26536_26557[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26533 === (1)))
{var inst_26509 = (0);var state_26532__$1 = (function (){var statearr_26537 = state_26532;(statearr_26537[(8)] = inst_26509);
return statearr_26537;
})();var statearr_26538_26558 = state_26532__$1;(statearr_26538_26558[(2)] = null);
(statearr_26538_26558[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26533 === (4)))
{var state_26532__$1 = state_26532;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26532__$1,(7),ch);
} else
{if((state_val_26533 === (6)))
{var inst_26527 = (state_26532[(2)]);var state_26532__$1 = state_26532;var statearr_26539_26559 = state_26532__$1;(statearr_26539_26559[(2)] = inst_26527);
(statearr_26539_26559[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26533 === (3)))
{var inst_26529 = (state_26532[(2)]);var inst_26530 = cljs.core.async.close_BANG_.call(null,out);var state_26532__$1 = (function (){var statearr_26540 = state_26532;(statearr_26540[(9)] = inst_26529);
return statearr_26540;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26532__$1,inst_26530);
} else
{if((state_val_26533 === (2)))
{var inst_26509 = (state_26532[(8)]);var inst_26511 = (inst_26509 < n);var state_26532__$1 = state_26532;if(cljs.core.truth_(inst_26511))
{var statearr_26541_26560 = state_26532__$1;(statearr_26541_26560[(1)] = (4));
} else
{var statearr_26542_26561 = state_26532__$1;(statearr_26542_26561[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26533 === (11)))
{var inst_26509 = (state_26532[(8)]);var inst_26519 = (state_26532[(2)]);var inst_26520 = (inst_26509 + (1));var inst_26509__$1 = inst_26520;var state_26532__$1 = (function (){var statearr_26543 = state_26532;(statearr_26543[(10)] = inst_26519);
(statearr_26543[(8)] = inst_26509__$1);
return statearr_26543;
})();var statearr_26544_26562 = state_26532__$1;(statearr_26544_26562[(2)] = null);
(statearr_26544_26562[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26533 === (9)))
{var state_26532__$1 = state_26532;var statearr_26545_26563 = state_26532__$1;(statearr_26545_26563[(2)] = null);
(statearr_26545_26563[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26533 === (5)))
{var state_26532__$1 = state_26532;var statearr_26546_26564 = state_26532__$1;(statearr_26546_26564[(2)] = null);
(statearr_26546_26564[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26533 === (10)))
{var inst_26524 = (state_26532[(2)]);var state_26532__$1 = state_26532;var statearr_26547_26565 = state_26532__$1;(statearr_26547_26565[(2)] = inst_26524);
(statearr_26547_26565[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26533 === (8)))
{var inst_26514 = (state_26532[(7)]);var state_26532__$1 = state_26532;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26532__$1,(11),out,inst_26514);
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
});})(c__11517__auto___26555,out))
;return ((function (switch__11461__auto__,c__11517__auto___26555,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26551 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26551[(0)] = state_machine__11462__auto__);
(statearr_26551[(1)] = (1));
return statearr_26551;
});
var state_machine__11462__auto____1 = (function (state_26532){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26532);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26552){if((e26552 instanceof Object))
{var ex__11465__auto__ = e26552;var statearr_26553_26566 = state_26532;(statearr_26553_26566[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26532);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26552;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26567 = state_26532;
state_26532 = G__26567;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26532){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26555,out))
})();var state__11519__auto__ = (function (){var statearr_26554 = f__11518__auto__.call(null);(statearr_26554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26555);
return statearr_26554;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26555,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26575 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26575 = (function (ch,f,map_LT_,meta26576){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26576 = meta26576;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26575.cljs$lang$type = true;
cljs.core.async.t26575.cljs$lang$ctorStr = "cljs.core.async/t26575";
cljs.core.async.t26575.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26575");
});
cljs.core.async.t26575.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26575.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t26575.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26575.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t26578 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26578 = (function (fn1,_,meta26576,ch,f,map_LT_,meta26579){
this.fn1 = fn1;
this._ = _;
this.meta26576 = meta26576;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26579 = meta26579;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26578.cljs$lang$type = true;
cljs.core.async.t26578.cljs$lang$ctorStr = "cljs.core.async/t26578";
cljs.core.async.t26578.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26578");
});})(___$1))
;
cljs.core.async.t26578.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26578.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t26578.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__26568_SHARP_){return f1.call(null,(((p1__26568_SHARP_ == null))?null:self__.f.call(null,p1__26568_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t26578.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26580){var self__ = this;
var _26580__$1 = this;return self__.meta26579;
});})(___$1))
;
cljs.core.async.t26578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26580,meta26579__$1){var self__ = this;
var _26580__$1 = this;return (new cljs.core.async.t26578(self__.fn1,self__._,self__.meta26576,self__.ch,self__.f,self__.map_LT_,meta26579__$1));
});})(___$1))
;
cljs.core.async.__GT_t26578 = ((function (___$1){
return (function __GT_t26578(fn1__$1,___$2,meta26576__$1,ch__$2,f__$2,map_LT___$2,meta26579){return (new cljs.core.async.t26578(fn1__$1,___$2,meta26576__$1,ch__$2,f__$2,map_LT___$2,meta26579));
});})(___$1))
;
}
return (new cljs.core.async.t26578(fn1,___$1,self__.meta26576,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t26575.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26575.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26575.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26577){var self__ = this;
var _26577__$1 = this;return self__.meta26576;
});
cljs.core.async.t26575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26577,meta26576__$1){var self__ = this;
var _26577__$1 = this;return (new cljs.core.async.t26575(self__.ch,self__.f,self__.map_LT_,meta26576__$1));
});
cljs.core.async.__GT_t26575 = (function __GT_t26575(ch__$1,f__$1,map_LT___$1,meta26576){return (new cljs.core.async.t26575(ch__$1,f__$1,map_LT___$1,meta26576));
});
}
return (new cljs.core.async.t26575(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26584 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26584 = (function (ch,f,map_GT_,meta26585){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26585 = meta26585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26584.cljs$lang$type = true;
cljs.core.async.t26584.cljs$lang$ctorStr = "cljs.core.async/t26584";
cljs.core.async.t26584.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26584");
});
cljs.core.async.t26584.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26584.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t26584.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26584.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26584.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26584.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26586){var self__ = this;
var _26586__$1 = this;return self__.meta26585;
});
cljs.core.async.t26584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26586,meta26585__$1){var self__ = this;
var _26586__$1 = this;return (new cljs.core.async.t26584(self__.ch,self__.f,self__.map_GT_,meta26585__$1));
});
cljs.core.async.__GT_t26584 = (function __GT_t26584(ch__$1,f__$1,map_GT___$1,meta26585){return (new cljs.core.async.t26584(ch__$1,f__$1,map_GT___$1,meta26585));
});
}
return (new cljs.core.async.t26584(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26590 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26590 = (function (ch,p,filter_GT_,meta26591){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26591 = meta26591;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26590.cljs$lang$type = true;
cljs.core.async.t26590.cljs$lang$ctorStr = "cljs.core.async/t26590";
cljs.core.async.t26590.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26590");
});
cljs.core.async.t26590.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26590.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t26590.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26590.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26590.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26590.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26590.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26592){var self__ = this;
var _26592__$1 = this;return self__.meta26591;
});
cljs.core.async.t26590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26592,meta26591__$1){var self__ = this;
var _26592__$1 = this;return (new cljs.core.async.t26590(self__.ch,self__.p,self__.filter_GT_,meta26591__$1));
});
cljs.core.async.__GT_t26590 = (function __GT_t26590(ch__$1,p__$1,filter_GT___$1,meta26591){return (new cljs.core.async.t26590(ch__$1,p__$1,filter_GT___$1,meta26591));
});
}
return (new cljs.core.async.t26590(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___26675 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___26675,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___26675,out){
return (function (state_26654){var state_val_26655 = (state_26654[(1)]);if((state_val_26655 === (7)))
{var inst_26650 = (state_26654[(2)]);var state_26654__$1 = state_26654;var statearr_26656_26676 = state_26654__$1;(statearr_26656_26676[(2)] = inst_26650);
(statearr_26656_26676[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26655 === (1)))
{var state_26654__$1 = state_26654;var statearr_26657_26677 = state_26654__$1;(statearr_26657_26677[(2)] = null);
(statearr_26657_26677[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26655 === (4)))
{var inst_26636 = (state_26654[(7)]);var inst_26636__$1 = (state_26654[(2)]);var inst_26637 = (inst_26636__$1 == null);var state_26654__$1 = (function (){var statearr_26658 = state_26654;(statearr_26658[(7)] = inst_26636__$1);
return statearr_26658;
})();if(cljs.core.truth_(inst_26637))
{var statearr_26659_26678 = state_26654__$1;(statearr_26659_26678[(1)] = (5));
} else
{var statearr_26660_26679 = state_26654__$1;(statearr_26660_26679[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26655 === (6)))
{var inst_26636 = (state_26654[(7)]);var inst_26641 = p.call(null,inst_26636);var state_26654__$1 = state_26654;if(cljs.core.truth_(inst_26641))
{var statearr_26661_26680 = state_26654__$1;(statearr_26661_26680[(1)] = (8));
} else
{var statearr_26662_26681 = state_26654__$1;(statearr_26662_26681[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26655 === (3)))
{var inst_26652 = (state_26654[(2)]);var state_26654__$1 = state_26654;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26654__$1,inst_26652);
} else
{if((state_val_26655 === (2)))
{var state_26654__$1 = state_26654;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26654__$1,(4),ch);
} else
{if((state_val_26655 === (11)))
{var inst_26644 = (state_26654[(2)]);var state_26654__$1 = state_26654;var statearr_26663_26682 = state_26654__$1;(statearr_26663_26682[(2)] = inst_26644);
(statearr_26663_26682[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26655 === (9)))
{var state_26654__$1 = state_26654;var statearr_26664_26683 = state_26654__$1;(statearr_26664_26683[(2)] = null);
(statearr_26664_26683[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26655 === (5)))
{var inst_26639 = cljs.core.async.close_BANG_.call(null,out);var state_26654__$1 = state_26654;var statearr_26665_26684 = state_26654__$1;(statearr_26665_26684[(2)] = inst_26639);
(statearr_26665_26684[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26655 === (10)))
{var inst_26647 = (state_26654[(2)]);var state_26654__$1 = (function (){var statearr_26666 = state_26654;(statearr_26666[(8)] = inst_26647);
return statearr_26666;
})();var statearr_26667_26685 = state_26654__$1;(statearr_26667_26685[(2)] = null);
(statearr_26667_26685[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26655 === (8)))
{var inst_26636 = (state_26654[(7)]);var state_26654__$1 = state_26654;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26654__$1,(11),out,inst_26636);
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
});})(c__11517__auto___26675,out))
;return ((function (switch__11461__auto__,c__11517__auto___26675,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_26671 = [null,null,null,null,null,null,null,null,null];(statearr_26671[(0)] = state_machine__11462__auto__);
(statearr_26671[(1)] = (1));
return statearr_26671;
});
var state_machine__11462__auto____1 = (function (state_26654){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26654);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26672){if((e26672 instanceof Object))
{var ex__11465__auto__ = e26672;var statearr_26673_26686 = state_26654;(statearr_26673_26686[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26654);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26672;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26687 = state_26654;
state_26654 = G__26687;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26654){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___26675,out))
})();var state__11519__auto__ = (function (){var statearr_26674 = f__11518__auto__.call(null);(statearr_26674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___26675);
return statearr_26674;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___26675,out))
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
return (function (state_26853){var state_val_26854 = (state_26853[(1)]);if((state_val_26854 === (7)))
{var inst_26849 = (state_26853[(2)]);var state_26853__$1 = state_26853;var statearr_26855_26896 = state_26853__$1;(statearr_26855_26896[(2)] = inst_26849);
(statearr_26855_26896[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26854 === (20)))
{var inst_26819 = (state_26853[(7)]);var inst_26830 = (state_26853[(2)]);var inst_26831 = cljs.core.next.call(null,inst_26819);var inst_26805 = inst_26831;var inst_26806 = null;var inst_26807 = (0);var inst_26808 = (0);var state_26853__$1 = (function (){var statearr_26856 = state_26853;(statearr_26856[(8)] = inst_26807);
(statearr_26856[(9)] = inst_26830);
(statearr_26856[(10)] = inst_26805);
(statearr_26856[(11)] = inst_26806);
(statearr_26856[(12)] = inst_26808);
return statearr_26856;
})();var statearr_26857_26897 = state_26853__$1;(statearr_26857_26897[(2)] = null);
(statearr_26857_26897[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26854 === (1)))
{var state_26853__$1 = state_26853;var statearr_26858_26898 = state_26853__$1;(statearr_26858_26898[(2)] = null);
(statearr_26858_26898[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26854 === (4)))
{var inst_26794 = (state_26853[(13)]);var inst_26794__$1 = (state_26853[(2)]);var inst_26795 = (inst_26794__$1 == null);var state_26853__$1 = (function (){var statearr_26859 = state_26853;(statearr_26859[(13)] = inst_26794__$1);
return statearr_26859;
})();if(cljs.core.truth_(inst_26795))
{var statearr_26860_26899 = state_26853__$1;(statearr_26860_26899[(1)] = (5));
} else
{var statearr_26861_26900 = state_26853__$1;(statearr_26861_26900[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26854 === (15)))
{var state_26853__$1 = state_26853;var statearr_26865_26901 = state_26853__$1;(statearr_26865_26901[(2)] = null);
(statearr_26865_26901[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26854 === (21)))
{var state_26853__$1 = state_26853;var statearr_26866_26902 = state_26853__$1;(statearr_26866_26902[(2)] = null);
(statearr_26866_26902[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26854 === (13)))
{var inst_26807 = (state_26853[(8)]);var inst_26805 = (state_26853[(10)]);var inst_26806 = (state_26853[(11)]);var inst_26808 = (state_26853[(12)]);var inst_26815 = (state_26853[(2)]);var inst_26816 = (inst_26808 + (1));var tmp26862 = inst_26807;var tmp26863 = inst_26805;var tmp26864 = inst_26806;var inst_26805__$1 = tmp26863;var inst_26806__$1 = tmp26864;var inst_26807__$1 = tmp26862;var inst_26808__$1 = inst_26816;var state_26853__$1 = (function (){var statearr_26867 = state_26853;(statearr_26867[(8)] = inst_26807__$1);
(statearr_26867[(14)] = inst_26815);
(statearr_26867[(10)] = inst_26805__$1);
(statearr_26867[(11)] = inst_26806__$1);
(statearr_26867[(12)] = inst_26808__$1);
return statearr_26867;
})();var statearr_26868_26903 = state_26853__$1;(statearr_26868_26903[(2)] = null);
(statearr_26868_26903[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26854 === (22)))
{var state_26853__$1 = state_26853;var statearr_26869_26904 = state_26853__$1;(statearr_26869_26904[(2)] = null);
(statearr_26869_26904[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26854 === (6)))
{var inst_26794 = (state_26853[(13)]);var inst_26803 = f.call(null,inst_26794);var inst_26804 = cljs.core.seq.call(null,inst_26803);var inst_26805 = inst_26804;var inst_26806 = null;var inst_26807 = (0);var inst_26808 = (0);var state_26853__$1 = (function (){var statearr_26870 = state_26853;(statearr_26870[(8)] = inst_26807);
(statearr_26870[(10)] = inst_26805);
(statearr_26870[(11)] = inst_26806);
(statearr_26870[(12)] = inst_26808);
return statearr_26870;
})();var statearr_26871_26905 = state_26853__$1;(statearr_26871_26905[(2)] = null);
(statearr_26871_26905[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26854 === (17)))
{var inst_26819 = (state_26853[(7)]);var inst_26823 = cljs.core.chunk_first.call(null,inst_26819);var inst_26824 = cljs.core.chunk_rest.call(null,inst_26819);var inst_26825 = cljs.core.count.call(null,inst_26823);var inst_26805 = inst_26824;var inst_26806 = inst_26823;var inst_26807 = inst_26825;var inst_26808 = (0);var state_26853__$1 = (function (){var statearr_26872 = state_26853;(statearr_26872[(8)] = inst_26807);
(statearr_26872[(10)] = inst_26805);
(statearr_26872[(11)] = inst_26806);
(statearr_26872[(12)] = inst_26808);
return statearr_26872;
})();var statearr_26873_26906 = state_26853__$1;(statearr_26873_26906[(2)] = null);
(statearr_26873_26906[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26854 === (3)))
{var inst_26851 = (state_26853[(2)]);var state_26853__$1 = state_26853;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26853__$1,inst_26851);
} else
{if((state_val_26854 === (12)))
{var inst_26839 = (state_26853[(2)]);var state_26853__$1 = state_26853;var statearr_26874_26907 = state_26853__$1;(statearr_26874_26907[(2)] = inst_26839);
(statearr_26874_26907[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26854 === (2)))
{var state_26853__$1 = state_26853;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26853__$1,(4),in$);
} else
{if((state_val_26854 === (23)))
{var inst_26847 = (state_26853[(2)]);var state_26853__$1 = state_26853;var statearr_26875_26908 = state_26853__$1;(statearr_26875_26908[(2)] = inst_26847);
(statearr_26875_26908[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26854 === (19)))
{var inst_26834 = (state_26853[(2)]);var state_26853__$1 = state_26853;var statearr_26876_26909 = state_26853__$1;(statearr_26876_26909[(2)] = inst_26834);
(statearr_26876_26909[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26854 === (11)))
{var inst_26805 = (state_26853[(10)]);var inst_26819 = (state_26853[(7)]);var inst_26819__$1 = cljs.core.seq.call(null,inst_26805);var state_26853__$1 = (function (){var statearr_26877 = state_26853;(statearr_26877[(7)] = inst_26819__$1);
return statearr_26877;
})();if(inst_26819__$1)
{var statearr_26878_26910 = state_26853__$1;(statearr_26878_26910[(1)] = (14));
} else
{var statearr_26879_26911 = state_26853__$1;(statearr_26879_26911[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26854 === (9)))
{var inst_26841 = (state_26853[(2)]);var inst_26842 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_26853__$1 = (function (){var statearr_26880 = state_26853;(statearr_26880[(15)] = inst_26841);
return statearr_26880;
})();if(cljs.core.truth_(inst_26842))
{var statearr_26881_26912 = state_26853__$1;(statearr_26881_26912[(1)] = (21));
} else
{var statearr_26882_26913 = state_26853__$1;(statearr_26882_26913[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26854 === (5)))
{var inst_26797 = cljs.core.async.close_BANG_.call(null,out);var state_26853__$1 = state_26853;var statearr_26883_26914 = state_26853__$1;(statearr_26883_26914[(2)] = inst_26797);
(statearr_26883_26914[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26854 === (14)))
{var inst_26819 = (state_26853[(7)]);var inst_26821 = cljs.core.chunked_seq_QMARK_.call(null,inst_26819);var state_26853__$1 = state_26853;if(inst_26821)
{var statearr_26884_26915 = state_26853__$1;(statearr_26884_26915[(1)] = (17));
} else
{var statearr_26885_26916 = state_26853__$1;(statearr_26885_26916[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26854 === (16)))
{var inst_26837 = (state_26853[(2)]);var state_26853__$1 = state_26853;var statearr_26886_26917 = state_26853__$1;(statearr_26886_26917[(2)] = inst_26837);
(statearr_26886_26917[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26854 === (10)))
{var inst_26806 = (state_26853[(11)]);var inst_26808 = (state_26853[(12)]);var inst_26813 = cljs.core._nth.call(null,inst_26806,inst_26808);var state_26853__$1 = state_26853;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26853__$1,(13),out,inst_26813);
} else
{if((state_val_26854 === (18)))
{var inst_26819 = (state_26853[(7)]);var inst_26828 = cljs.core.first.call(null,inst_26819);var state_26853__$1 = state_26853;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26853__$1,(20),out,inst_26828);
} else
{if((state_val_26854 === (8)))
{var inst_26807 = (state_26853[(8)]);var inst_26808 = (state_26853[(12)]);var inst_26810 = (inst_26808 < inst_26807);var inst_26811 = inst_26810;var state_26853__$1 = state_26853;if(cljs.core.truth_(inst_26811))
{var statearr_26887_26918 = state_26853__$1;(statearr_26887_26918[(1)] = (10));
} else
{var statearr_26888_26919 = state_26853__$1;(statearr_26888_26919[(1)] = (11));
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
var state_machine__11462__auto____0 = (function (){var statearr_26892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26892[(0)] = state_machine__11462__auto__);
(statearr_26892[(1)] = (1));
return statearr_26892;
});
var state_machine__11462__auto____1 = (function (state_26853){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26853);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e26893){if((e26893 instanceof Object))
{var ex__11465__auto__ = e26893;var statearr_26894_26920 = state_26853;(statearr_26894_26920[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26853);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26893;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26921 = state_26853;
state_26853 = G__26921;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26853){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_26895 = f__11518__auto__.call(null);(statearr_26895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_26895;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___27018 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___27018,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___27018,out){
return (function (state_26993){var state_val_26994 = (state_26993[(1)]);if((state_val_26994 === (7)))
{var inst_26988 = (state_26993[(2)]);var state_26993__$1 = state_26993;var statearr_26995_27019 = state_26993__$1;(statearr_26995_27019[(2)] = inst_26988);
(statearr_26995_27019[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26994 === (1)))
{var inst_26970 = null;var state_26993__$1 = (function (){var statearr_26996 = state_26993;(statearr_26996[(7)] = inst_26970);
return statearr_26996;
})();var statearr_26997_27020 = state_26993__$1;(statearr_26997_27020[(2)] = null);
(statearr_26997_27020[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26994 === (4)))
{var inst_26973 = (state_26993[(8)]);var inst_26973__$1 = (state_26993[(2)]);var inst_26974 = (inst_26973__$1 == null);var inst_26975 = cljs.core.not.call(null,inst_26974);var state_26993__$1 = (function (){var statearr_26998 = state_26993;(statearr_26998[(8)] = inst_26973__$1);
return statearr_26998;
})();if(inst_26975)
{var statearr_26999_27021 = state_26993__$1;(statearr_26999_27021[(1)] = (5));
} else
{var statearr_27000_27022 = state_26993__$1;(statearr_27000_27022[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26994 === (6)))
{var state_26993__$1 = state_26993;var statearr_27001_27023 = state_26993__$1;(statearr_27001_27023[(2)] = null);
(statearr_27001_27023[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26994 === (3)))
{var inst_26990 = (state_26993[(2)]);var inst_26991 = cljs.core.async.close_BANG_.call(null,out);var state_26993__$1 = (function (){var statearr_27002 = state_26993;(statearr_27002[(9)] = inst_26990);
return statearr_27002;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26993__$1,inst_26991);
} else
{if((state_val_26994 === (2)))
{var state_26993__$1 = state_26993;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26993__$1,(4),ch);
} else
{if((state_val_26994 === (11)))
{var inst_26973 = (state_26993[(8)]);var inst_26982 = (state_26993[(2)]);var inst_26970 = inst_26973;var state_26993__$1 = (function (){var statearr_27003 = state_26993;(statearr_27003[(10)] = inst_26982);
(statearr_27003[(7)] = inst_26970);
return statearr_27003;
})();var statearr_27004_27024 = state_26993__$1;(statearr_27004_27024[(2)] = null);
(statearr_27004_27024[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26994 === (9)))
{var inst_26973 = (state_26993[(8)]);var state_26993__$1 = state_26993;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26993__$1,(11),out,inst_26973);
} else
{if((state_val_26994 === (5)))
{var inst_26970 = (state_26993[(7)]);var inst_26973 = (state_26993[(8)]);var inst_26977 = cljs.core._EQ_.call(null,inst_26973,inst_26970);var state_26993__$1 = state_26993;if(inst_26977)
{var statearr_27006_27025 = state_26993__$1;(statearr_27006_27025[(1)] = (8));
} else
{var statearr_27007_27026 = state_26993__$1;(statearr_27007_27026[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26994 === (10)))
{var inst_26985 = (state_26993[(2)]);var state_26993__$1 = state_26993;var statearr_27008_27027 = state_26993__$1;(statearr_27008_27027[(2)] = inst_26985);
(statearr_27008_27027[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26994 === (8)))
{var inst_26970 = (state_26993[(7)]);var tmp27005 = inst_26970;var inst_26970__$1 = tmp27005;var state_26993__$1 = (function (){var statearr_27009 = state_26993;(statearr_27009[(7)] = inst_26970__$1);
return statearr_27009;
})();var statearr_27010_27028 = state_26993__$1;(statearr_27010_27028[(2)] = null);
(statearr_27010_27028[(1)] = (2));
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
});})(c__11517__auto___27018,out))
;return ((function (switch__11461__auto__,c__11517__auto___27018,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_27014 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27014[(0)] = state_machine__11462__auto__);
(statearr_27014[(1)] = (1));
return statearr_27014;
});
var state_machine__11462__auto____1 = (function (state_26993){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_26993);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e27015){if((e27015 instanceof Object))
{var ex__11465__auto__ = e27015;var statearr_27016_27029 = state_26993;(statearr_27016_27029[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26993);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27015;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27030 = state_26993;
state_26993 = G__27030;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_26993){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_26993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___27018,out))
})();var state__11519__auto__ = (function (){var statearr_27017 = f__11518__auto__.call(null);(statearr_27017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___27018);
return statearr_27017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___27018,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___27165 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___27165,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___27165,out){
return (function (state_27135){var state_val_27136 = (state_27135[(1)]);if((state_val_27136 === (7)))
{var inst_27131 = (state_27135[(2)]);var state_27135__$1 = state_27135;var statearr_27137_27166 = state_27135__$1;(statearr_27137_27166[(2)] = inst_27131);
(statearr_27137_27166[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27136 === (1)))
{var inst_27098 = (new Array(n));var inst_27099 = inst_27098;var inst_27100 = (0);var state_27135__$1 = (function (){var statearr_27138 = state_27135;(statearr_27138[(7)] = inst_27099);
(statearr_27138[(8)] = inst_27100);
return statearr_27138;
})();var statearr_27139_27167 = state_27135__$1;(statearr_27139_27167[(2)] = null);
(statearr_27139_27167[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27136 === (4)))
{var inst_27103 = (state_27135[(9)]);var inst_27103__$1 = (state_27135[(2)]);var inst_27104 = (inst_27103__$1 == null);var inst_27105 = cljs.core.not.call(null,inst_27104);var state_27135__$1 = (function (){var statearr_27140 = state_27135;(statearr_27140[(9)] = inst_27103__$1);
return statearr_27140;
})();if(inst_27105)
{var statearr_27141_27168 = state_27135__$1;(statearr_27141_27168[(1)] = (5));
} else
{var statearr_27142_27169 = state_27135__$1;(statearr_27142_27169[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27136 === (15)))
{var inst_27125 = (state_27135[(2)]);var state_27135__$1 = state_27135;var statearr_27143_27170 = state_27135__$1;(statearr_27143_27170[(2)] = inst_27125);
(statearr_27143_27170[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27136 === (13)))
{var state_27135__$1 = state_27135;var statearr_27144_27171 = state_27135__$1;(statearr_27144_27171[(2)] = null);
(statearr_27144_27171[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27136 === (6)))
{var inst_27100 = (state_27135[(8)]);var inst_27121 = (inst_27100 > (0));var state_27135__$1 = state_27135;if(cljs.core.truth_(inst_27121))
{var statearr_27145_27172 = state_27135__$1;(statearr_27145_27172[(1)] = (12));
} else
{var statearr_27146_27173 = state_27135__$1;(statearr_27146_27173[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27136 === (3)))
{var inst_27133 = (state_27135[(2)]);var state_27135__$1 = state_27135;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27135__$1,inst_27133);
} else
{if((state_val_27136 === (12)))
{var inst_27099 = (state_27135[(7)]);var inst_27123 = cljs.core.vec.call(null,inst_27099);var state_27135__$1 = state_27135;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27135__$1,(15),out,inst_27123);
} else
{if((state_val_27136 === (2)))
{var state_27135__$1 = state_27135;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27135__$1,(4),ch);
} else
{if((state_val_27136 === (11)))
{var inst_27115 = (state_27135[(2)]);var inst_27116 = (new Array(n));var inst_27099 = inst_27116;var inst_27100 = (0);var state_27135__$1 = (function (){var statearr_27147 = state_27135;(statearr_27147[(7)] = inst_27099);
(statearr_27147[(8)] = inst_27100);
(statearr_27147[(10)] = inst_27115);
return statearr_27147;
})();var statearr_27148_27174 = state_27135__$1;(statearr_27148_27174[(2)] = null);
(statearr_27148_27174[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27136 === (9)))
{var inst_27099 = (state_27135[(7)]);var inst_27113 = cljs.core.vec.call(null,inst_27099);var state_27135__$1 = state_27135;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27135__$1,(11),out,inst_27113);
} else
{if((state_val_27136 === (5)))
{var inst_27108 = (state_27135[(11)]);var inst_27103 = (state_27135[(9)]);var inst_27099 = (state_27135[(7)]);var inst_27100 = (state_27135[(8)]);var inst_27107 = (inst_27099[inst_27100] = inst_27103);var inst_27108__$1 = (inst_27100 + (1));var inst_27109 = (inst_27108__$1 < n);var state_27135__$1 = (function (){var statearr_27149 = state_27135;(statearr_27149[(11)] = inst_27108__$1);
(statearr_27149[(12)] = inst_27107);
return statearr_27149;
})();if(cljs.core.truth_(inst_27109))
{var statearr_27150_27175 = state_27135__$1;(statearr_27150_27175[(1)] = (8));
} else
{var statearr_27151_27176 = state_27135__$1;(statearr_27151_27176[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27136 === (14)))
{var inst_27128 = (state_27135[(2)]);var inst_27129 = cljs.core.async.close_BANG_.call(null,out);var state_27135__$1 = (function (){var statearr_27153 = state_27135;(statearr_27153[(13)] = inst_27128);
return statearr_27153;
})();var statearr_27154_27177 = state_27135__$1;(statearr_27154_27177[(2)] = inst_27129);
(statearr_27154_27177[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27136 === (10)))
{var inst_27119 = (state_27135[(2)]);var state_27135__$1 = state_27135;var statearr_27155_27178 = state_27135__$1;(statearr_27155_27178[(2)] = inst_27119);
(statearr_27155_27178[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27136 === (8)))
{var inst_27108 = (state_27135[(11)]);var inst_27099 = (state_27135[(7)]);var tmp27152 = inst_27099;var inst_27099__$1 = tmp27152;var inst_27100 = inst_27108;var state_27135__$1 = (function (){var statearr_27156 = state_27135;(statearr_27156[(7)] = inst_27099__$1);
(statearr_27156[(8)] = inst_27100);
return statearr_27156;
})();var statearr_27157_27179 = state_27135__$1;(statearr_27157_27179[(2)] = null);
(statearr_27157_27179[(1)] = (2));
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
});})(c__11517__auto___27165,out))
;return ((function (switch__11461__auto__,c__11517__auto___27165,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_27161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27161[(0)] = state_machine__11462__auto__);
(statearr_27161[(1)] = (1));
return statearr_27161;
});
var state_machine__11462__auto____1 = (function (state_27135){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_27135);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e27162){if((e27162 instanceof Object))
{var ex__11465__auto__ = e27162;var statearr_27163_27180 = state_27135;(statearr_27163_27180[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27135);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27162;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27181 = state_27135;
state_27135 = G__27181;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_27135){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_27135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___27165,out))
})();var state__11519__auto__ = (function (){var statearr_27164 = f__11518__auto__.call(null);(statearr_27164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___27165);
return statearr_27164;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___27165,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11517__auto___27324 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___27324,out){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___27324,out){
return (function (state_27294){var state_val_27295 = (state_27294[(1)]);if((state_val_27295 === (7)))
{var inst_27290 = (state_27294[(2)]);var state_27294__$1 = state_27294;var statearr_27296_27325 = state_27294__$1;(statearr_27296_27325[(2)] = inst_27290);
(statearr_27296_27325[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27295 === (1)))
{var inst_27253 = [];var inst_27254 = inst_27253;var inst_27255 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_27294__$1 = (function (){var statearr_27297 = state_27294;(statearr_27297[(7)] = inst_27255);
(statearr_27297[(8)] = inst_27254);
return statearr_27297;
})();var statearr_27298_27326 = state_27294__$1;(statearr_27298_27326[(2)] = null);
(statearr_27298_27326[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27295 === (4)))
{var inst_27258 = (state_27294[(9)]);var inst_27258__$1 = (state_27294[(2)]);var inst_27259 = (inst_27258__$1 == null);var inst_27260 = cljs.core.not.call(null,inst_27259);var state_27294__$1 = (function (){var statearr_27299 = state_27294;(statearr_27299[(9)] = inst_27258__$1);
return statearr_27299;
})();if(inst_27260)
{var statearr_27300_27327 = state_27294__$1;(statearr_27300_27327[(1)] = (5));
} else
{var statearr_27301_27328 = state_27294__$1;(statearr_27301_27328[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27295 === (15)))
{var inst_27284 = (state_27294[(2)]);var state_27294__$1 = state_27294;var statearr_27302_27329 = state_27294__$1;(statearr_27302_27329[(2)] = inst_27284);
(statearr_27302_27329[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27295 === (13)))
{var state_27294__$1 = state_27294;var statearr_27303_27330 = state_27294__$1;(statearr_27303_27330[(2)] = null);
(statearr_27303_27330[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27295 === (6)))
{var inst_27254 = (state_27294[(8)]);var inst_27279 = inst_27254.length;var inst_27280 = (inst_27279 > (0));var state_27294__$1 = state_27294;if(cljs.core.truth_(inst_27280))
{var statearr_27304_27331 = state_27294__$1;(statearr_27304_27331[(1)] = (12));
} else
{var statearr_27305_27332 = state_27294__$1;(statearr_27305_27332[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27295 === (3)))
{var inst_27292 = (state_27294[(2)]);var state_27294__$1 = state_27294;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27294__$1,inst_27292);
} else
{if((state_val_27295 === (12)))
{var inst_27254 = (state_27294[(8)]);var inst_27282 = cljs.core.vec.call(null,inst_27254);var state_27294__$1 = state_27294;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27294__$1,(15),out,inst_27282);
} else
{if((state_val_27295 === (2)))
{var state_27294__$1 = state_27294;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27294__$1,(4),ch);
} else
{if((state_val_27295 === (11)))
{var inst_27258 = (state_27294[(9)]);var inst_27262 = (state_27294[(10)]);var inst_27272 = (state_27294[(2)]);var inst_27273 = [];var inst_27274 = inst_27273.push(inst_27258);var inst_27254 = inst_27273;var inst_27255 = inst_27262;var state_27294__$1 = (function (){var statearr_27306 = state_27294;(statearr_27306[(7)] = inst_27255);
(statearr_27306[(11)] = inst_27272);
(statearr_27306[(12)] = inst_27274);
(statearr_27306[(8)] = inst_27254);
return statearr_27306;
})();var statearr_27307_27333 = state_27294__$1;(statearr_27307_27333[(2)] = null);
(statearr_27307_27333[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27295 === (9)))
{var inst_27254 = (state_27294[(8)]);var inst_27270 = cljs.core.vec.call(null,inst_27254);var state_27294__$1 = state_27294;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27294__$1,(11),out,inst_27270);
} else
{if((state_val_27295 === (5)))
{var inst_27255 = (state_27294[(7)]);var inst_27258 = (state_27294[(9)]);var inst_27262 = (state_27294[(10)]);var inst_27262__$1 = f.call(null,inst_27258);var inst_27263 = cljs.core._EQ_.call(null,inst_27262__$1,inst_27255);var inst_27264 = cljs.core.keyword_identical_QMARK_.call(null,inst_27255,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_27265 = (inst_27263) || (inst_27264);var state_27294__$1 = (function (){var statearr_27308 = state_27294;(statearr_27308[(10)] = inst_27262__$1);
return statearr_27308;
})();if(cljs.core.truth_(inst_27265))
{var statearr_27309_27334 = state_27294__$1;(statearr_27309_27334[(1)] = (8));
} else
{var statearr_27310_27335 = state_27294__$1;(statearr_27310_27335[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27295 === (14)))
{var inst_27287 = (state_27294[(2)]);var inst_27288 = cljs.core.async.close_BANG_.call(null,out);var state_27294__$1 = (function (){var statearr_27312 = state_27294;(statearr_27312[(13)] = inst_27287);
return statearr_27312;
})();var statearr_27313_27336 = state_27294__$1;(statearr_27313_27336[(2)] = inst_27288);
(statearr_27313_27336[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27295 === (10)))
{var inst_27277 = (state_27294[(2)]);var state_27294__$1 = state_27294;var statearr_27314_27337 = state_27294__$1;(statearr_27314_27337[(2)] = inst_27277);
(statearr_27314_27337[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27295 === (8)))
{var inst_27258 = (state_27294[(9)]);var inst_27254 = (state_27294[(8)]);var inst_27262 = (state_27294[(10)]);var inst_27267 = inst_27254.push(inst_27258);var tmp27311 = inst_27254;var inst_27254__$1 = tmp27311;var inst_27255 = inst_27262;var state_27294__$1 = (function (){var statearr_27315 = state_27294;(statearr_27315[(7)] = inst_27255);
(statearr_27315[(8)] = inst_27254__$1);
(statearr_27315[(14)] = inst_27267);
return statearr_27315;
})();var statearr_27316_27338 = state_27294__$1;(statearr_27316_27338[(2)] = null);
(statearr_27316_27338[(1)] = (2));
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
});})(c__11517__auto___27324,out))
;return ((function (switch__11461__auto__,c__11517__auto___27324,out){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_27320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27320[(0)] = state_machine__11462__auto__);
(statearr_27320[(1)] = (1));
return statearr_27320;
});
var state_machine__11462__auto____1 = (function (state_27294){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_27294);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e27321){if((e27321 instanceof Object))
{var ex__11465__auto__ = e27321;var statearr_27322_27339 = state_27294;(statearr_27322_27339[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27294);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27321;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27340 = state_27294;
state_27294 = G__27340;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_27294){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_27294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___27324,out))
})();var state__11519__auto__ = (function (){var statearr_27323 = f__11518__auto__.call(null);(statearr_27323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___27324);
return statearr_27323;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___27324,out))
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
