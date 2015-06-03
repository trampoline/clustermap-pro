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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24258 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24258 = (function (f,fn_handler,meta24259){
this.f = f;
this.fn_handler = fn_handler;
this.meta24259 = meta24259;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24258.cljs$lang$type = true;
cljs.core.async.t24258.cljs$lang$ctorStr = "cljs.core.async/t24258";
cljs.core.async.t24258.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24258");
});
cljs.core.async.t24258.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24258.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24258.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24260){var self__ = this;
var _24260__$1 = this;return self__.meta24259;
});
cljs.core.async.t24258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24260,meta24259__$1){var self__ = this;
var _24260__$1 = this;return (new cljs.core.async.t24258(self__.f,self__.fn_handler,meta24259__$1));
});
cljs.core.async.__GT_t24258 = (function __GT_t24258(f__$1,fn_handler__$1,meta24259){return (new cljs.core.async.t24258(f__$1,fn_handler__$1,meta24259));
});
}
return (new cljs.core.async.t24258(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24262 = buff;if(G__24262)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__24262.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24262.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24262);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24262);
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
{var val_24263 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_24263);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_24263,ret){
return (function (){return fn1.call(null,val_24263);
});})(val_24263,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___24264 = n;var x_24265 = (0);while(true){
if((x_24265 < n__4508__auto___24264))
{(a[x_24265] = (0));
{
var G__24266 = (x_24265 + (1));
x_24265 = G__24266;
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
var G__24267 = (i + (1));
i = G__24267;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t24271 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24271 = (function (flag,alt_flag,meta24272){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24272 = meta24272;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24271.cljs$lang$type = true;
cljs.core.async.t24271.cljs$lang$ctorStr = "cljs.core.async/t24271";
cljs.core.async.t24271.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24271");
});})(flag))
;
cljs.core.async.t24271.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24271.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t24271.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t24271.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24273){var self__ = this;
var _24273__$1 = this;return self__.meta24272;
});})(flag))
;
cljs.core.async.t24271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24273,meta24272__$1){var self__ = this;
var _24273__$1 = this;return (new cljs.core.async.t24271(self__.flag,self__.alt_flag,meta24272__$1));
});})(flag))
;
cljs.core.async.__GT_t24271 = ((function (flag){
return (function __GT_t24271(flag__$1,alt_flag__$1,meta24272){return (new cljs.core.async.t24271(flag__$1,alt_flag__$1,meta24272));
});})(flag))
;
}
return (new cljs.core.async.t24271(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24277 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24277 = (function (cb,flag,alt_handler,meta24278){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24278 = meta24278;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24277.cljs$lang$type = true;
cljs.core.async.t24277.cljs$lang$ctorStr = "cljs.core.async/t24277";
cljs.core.async.t24277.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24277");
});
cljs.core.async.t24277.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24277.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t24277.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t24277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24279){var self__ = this;
var _24279__$1 = this;return self__.meta24278;
});
cljs.core.async.t24277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24279,meta24278__$1){var self__ = this;
var _24279__$1 = this;return (new cljs.core.async.t24277(self__.cb,self__.flag,self__.alt_handler,meta24278__$1));
});
cljs.core.async.__GT_t24277 = (function __GT_t24277(cb__$1,flag__$1,alt_handler__$1,meta24278){return (new cljs.core.async.t24277(cb__$1,flag__$1,alt_handler__$1,meta24278));
});
}
return (new cljs.core.async.t24277(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24280_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24280_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24281_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24281_SHARP_,port], null));
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
var G__24282 = (i + (1));
i = G__24282;
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
var alts_BANG___delegate = function (ports,p__24283){var map__24285 = p__24283;var map__24285__$1 = ((cljs.core.seq_QMARK_.call(null,map__24285))?cljs.core.apply.call(null,cljs.core.hash_map,map__24285):map__24285);var opts = map__24285__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24283 = null;if (arguments.length > 1) {
  p__24283 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24283);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24286){
var ports = cljs.core.first(arglist__24286);
var p__24283 = cljs.core.rest(arglist__24286);
return alts_BANG___delegate(ports,p__24283);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__11297__auto___24381 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___24381){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___24381){
return (function (state_24357){var state_val_24358 = (state_24357[(1)]);if((state_val_24358 === (7)))
{var inst_24353 = (state_24357[(2)]);var state_24357__$1 = state_24357;var statearr_24359_24382 = state_24357__$1;(statearr_24359_24382[(2)] = inst_24353);
(statearr_24359_24382[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24358 === (1)))
{var state_24357__$1 = state_24357;var statearr_24360_24383 = state_24357__$1;(statearr_24360_24383[(2)] = null);
(statearr_24360_24383[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24358 === (4)))
{var inst_24336 = (state_24357[(7)]);var inst_24336__$1 = (state_24357[(2)]);var inst_24337 = (inst_24336__$1 == null);var state_24357__$1 = (function (){var statearr_24361 = state_24357;(statearr_24361[(7)] = inst_24336__$1);
return statearr_24361;
})();if(cljs.core.truth_(inst_24337))
{var statearr_24362_24384 = state_24357__$1;(statearr_24362_24384[(1)] = (5));
} else
{var statearr_24363_24385 = state_24357__$1;(statearr_24363_24385[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24358 === (13)))
{var state_24357__$1 = state_24357;var statearr_24364_24386 = state_24357__$1;(statearr_24364_24386[(2)] = null);
(statearr_24364_24386[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24358 === (6)))
{var inst_24336 = (state_24357[(7)]);var state_24357__$1 = state_24357;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24357__$1,(11),to,inst_24336);
} else
{if((state_val_24358 === (3)))
{var inst_24355 = (state_24357[(2)]);var state_24357__$1 = state_24357;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24357__$1,inst_24355);
} else
{if((state_val_24358 === (12)))
{var state_24357__$1 = state_24357;var statearr_24365_24387 = state_24357__$1;(statearr_24365_24387[(2)] = null);
(statearr_24365_24387[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24358 === (2)))
{var state_24357__$1 = state_24357;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24357__$1,(4),from);
} else
{if((state_val_24358 === (11)))
{var inst_24346 = (state_24357[(2)]);var state_24357__$1 = state_24357;if(cljs.core.truth_(inst_24346))
{var statearr_24366_24388 = state_24357__$1;(statearr_24366_24388[(1)] = (12));
} else
{var statearr_24367_24389 = state_24357__$1;(statearr_24367_24389[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24358 === (9)))
{var state_24357__$1 = state_24357;var statearr_24368_24390 = state_24357__$1;(statearr_24368_24390[(2)] = null);
(statearr_24368_24390[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24358 === (5)))
{var state_24357__$1 = state_24357;if(cljs.core.truth_(close_QMARK_))
{var statearr_24369_24391 = state_24357__$1;(statearr_24369_24391[(1)] = (8));
} else
{var statearr_24370_24392 = state_24357__$1;(statearr_24370_24392[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24358 === (14)))
{var inst_24351 = (state_24357[(2)]);var state_24357__$1 = state_24357;var statearr_24371_24393 = state_24357__$1;(statearr_24371_24393[(2)] = inst_24351);
(statearr_24371_24393[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24358 === (10)))
{var inst_24343 = (state_24357[(2)]);var state_24357__$1 = state_24357;var statearr_24372_24394 = state_24357__$1;(statearr_24372_24394[(2)] = inst_24343);
(statearr_24372_24394[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24358 === (8)))
{var inst_24340 = cljs.core.async.close_BANG_.call(null,to);var state_24357__$1 = state_24357;var statearr_24373_24395 = state_24357__$1;(statearr_24373_24395[(2)] = inst_24340);
(statearr_24373_24395[(1)] = (10));
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
});})(c__11297__auto___24381))
;return ((function (switch__11241__auto__,c__11297__auto___24381){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_24377 = [null,null,null,null,null,null,null,null];(statearr_24377[(0)] = state_machine__11242__auto__);
(statearr_24377[(1)] = (1));
return statearr_24377;
});
var state_machine__11242__auto____1 = (function (state_24357){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_24357);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e24378){if((e24378 instanceof Object))
{var ex__11245__auto__ = e24378;var statearr_24379_24396 = state_24357;(statearr_24379_24396[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24357);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24378;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24397 = state_24357;
state_24357 = G__24397;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_24357){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_24357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___24381))
})();var state__11299__auto__ = (function (){var statearr_24380 = f__11298__auto__.call(null);(statearr_24380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___24381);
return statearr_24380;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___24381))
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
return (function (p__24581){var vec__24582 = p__24581;var v = cljs.core.nth.call(null,vec__24582,(0),null);var p = cljs.core.nth.call(null,vec__24582,(1),null);var job = vec__24582;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__11297__auto___24764 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___24764,res,vec__24582,v,p,job,jobs,results){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___24764,res,vec__24582,v,p,job,jobs,results){
return (function (state_24587){var state_val_24588 = (state_24587[(1)]);if((state_val_24588 === (2)))
{var inst_24584 = (state_24587[(2)]);var inst_24585 = cljs.core.async.close_BANG_.call(null,res);var state_24587__$1 = (function (){var statearr_24589 = state_24587;(statearr_24589[(7)] = inst_24584);
return statearr_24589;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24587__$1,inst_24585);
} else
{if((state_val_24588 === (1)))
{var state_24587__$1 = state_24587;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24587__$1,(2),res,v);
} else
{return null;
}
}
});})(c__11297__auto___24764,res,vec__24582,v,p,job,jobs,results))
;return ((function (switch__11241__auto__,c__11297__auto___24764,res,vec__24582,v,p,job,jobs,results){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_24593 = [null,null,null,null,null,null,null,null];(statearr_24593[(0)] = state_machine__11242__auto__);
(statearr_24593[(1)] = (1));
return statearr_24593;
});
var state_machine__11242__auto____1 = (function (state_24587){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_24587);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e24594){if((e24594 instanceof Object))
{var ex__11245__auto__ = e24594;var statearr_24595_24765 = state_24587;(statearr_24595_24765[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24587);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24594;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24766 = state_24587;
state_24587 = G__24766;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_24587){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_24587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___24764,res,vec__24582,v,p,job,jobs,results))
})();var state__11299__auto__ = (function (){var statearr_24596 = f__11298__auto__.call(null);(statearr_24596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___24764);
return statearr_24596;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___24764,res,vec__24582,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__24597){var vec__24598 = p__24597;var v = cljs.core.nth.call(null,vec__24598,(0),null);var p = cljs.core.nth.call(null,vec__24598,(1),null);var job = vec__24598;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___24767 = n;var __24768 = (0);while(true){
if((__24768 < n__4508__auto___24767))
{var G__24599_24769 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__24599_24769) {
case "async":
var c__11297__auto___24771 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24768,c__11297__auto___24771,G__24599_24769,n__4508__auto___24767,jobs,results,process,async){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (__24768,c__11297__auto___24771,G__24599_24769,n__4508__auto___24767,jobs,results,process,async){
return (function (state_24612){var state_val_24613 = (state_24612[(1)]);if((state_val_24613 === (7)))
{var inst_24608 = (state_24612[(2)]);var state_24612__$1 = state_24612;var statearr_24614_24772 = state_24612__$1;(statearr_24614_24772[(2)] = inst_24608);
(statearr_24614_24772[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (6)))
{var state_24612__$1 = state_24612;var statearr_24615_24773 = state_24612__$1;(statearr_24615_24773[(2)] = null);
(statearr_24615_24773[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (5)))
{var state_24612__$1 = state_24612;var statearr_24616_24774 = state_24612__$1;(statearr_24616_24774[(2)] = null);
(statearr_24616_24774[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (4)))
{var inst_24602 = (state_24612[(2)]);var inst_24603 = async.call(null,inst_24602);var state_24612__$1 = state_24612;if(cljs.core.truth_(inst_24603))
{var statearr_24617_24775 = state_24612__$1;(statearr_24617_24775[(1)] = (5));
} else
{var statearr_24618_24776 = state_24612__$1;(statearr_24618_24776[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24613 === (3)))
{var inst_24610 = (state_24612[(2)]);var state_24612__$1 = state_24612;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24612__$1,inst_24610);
} else
{if((state_val_24613 === (2)))
{var state_24612__$1 = state_24612;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24612__$1,(4),jobs);
} else
{if((state_val_24613 === (1)))
{var state_24612__$1 = state_24612;var statearr_24619_24777 = state_24612__$1;(statearr_24619_24777[(2)] = null);
(statearr_24619_24777[(1)] = (2));
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
});})(__24768,c__11297__auto___24771,G__24599_24769,n__4508__auto___24767,jobs,results,process,async))
;return ((function (__24768,switch__11241__auto__,c__11297__auto___24771,G__24599_24769,n__4508__auto___24767,jobs,results,process,async){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_24623 = [null,null,null,null,null,null,null];(statearr_24623[(0)] = state_machine__11242__auto__);
(statearr_24623[(1)] = (1));
return statearr_24623;
});
var state_machine__11242__auto____1 = (function (state_24612){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_24612);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e24624){if((e24624 instanceof Object))
{var ex__11245__auto__ = e24624;var statearr_24625_24778 = state_24612;(statearr_24625_24778[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24612);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24624;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24779 = state_24612;
state_24612 = G__24779;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_24612){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_24612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(__24768,switch__11241__auto__,c__11297__auto___24771,G__24599_24769,n__4508__auto___24767,jobs,results,process,async))
})();var state__11299__auto__ = (function (){var statearr_24626 = f__11298__auto__.call(null);(statearr_24626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___24771);
return statearr_24626;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(__24768,c__11297__auto___24771,G__24599_24769,n__4508__auto___24767,jobs,results,process,async))
);

break;
case "compute":
var c__11297__auto___24780 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24768,c__11297__auto___24780,G__24599_24769,n__4508__auto___24767,jobs,results,process,async){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (__24768,c__11297__auto___24780,G__24599_24769,n__4508__auto___24767,jobs,results,process,async){
return (function (state_24639){var state_val_24640 = (state_24639[(1)]);if((state_val_24640 === (7)))
{var inst_24635 = (state_24639[(2)]);var state_24639__$1 = state_24639;var statearr_24641_24781 = state_24639__$1;(statearr_24641_24781[(2)] = inst_24635);
(statearr_24641_24781[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24640 === (6)))
{var state_24639__$1 = state_24639;var statearr_24642_24782 = state_24639__$1;(statearr_24642_24782[(2)] = null);
(statearr_24642_24782[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24640 === (5)))
{var state_24639__$1 = state_24639;var statearr_24643_24783 = state_24639__$1;(statearr_24643_24783[(2)] = null);
(statearr_24643_24783[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24640 === (4)))
{var inst_24629 = (state_24639[(2)]);var inst_24630 = process.call(null,inst_24629);var state_24639__$1 = state_24639;if(cljs.core.truth_(inst_24630))
{var statearr_24644_24784 = state_24639__$1;(statearr_24644_24784[(1)] = (5));
} else
{var statearr_24645_24785 = state_24639__$1;(statearr_24645_24785[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24640 === (3)))
{var inst_24637 = (state_24639[(2)]);var state_24639__$1 = state_24639;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24639__$1,inst_24637);
} else
{if((state_val_24640 === (2)))
{var state_24639__$1 = state_24639;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24639__$1,(4),jobs);
} else
{if((state_val_24640 === (1)))
{var state_24639__$1 = state_24639;var statearr_24646_24786 = state_24639__$1;(statearr_24646_24786[(2)] = null);
(statearr_24646_24786[(1)] = (2));
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
});})(__24768,c__11297__auto___24780,G__24599_24769,n__4508__auto___24767,jobs,results,process,async))
;return ((function (__24768,switch__11241__auto__,c__11297__auto___24780,G__24599_24769,n__4508__auto___24767,jobs,results,process,async){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_24650 = [null,null,null,null,null,null,null];(statearr_24650[(0)] = state_machine__11242__auto__);
(statearr_24650[(1)] = (1));
return statearr_24650;
});
var state_machine__11242__auto____1 = (function (state_24639){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_24639);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e24651){if((e24651 instanceof Object))
{var ex__11245__auto__ = e24651;var statearr_24652_24787 = state_24639;(statearr_24652_24787[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24639);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24651;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24788 = state_24639;
state_24639 = G__24788;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_24639){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_24639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(__24768,switch__11241__auto__,c__11297__auto___24780,G__24599_24769,n__4508__auto___24767,jobs,results,process,async))
})();var state__11299__auto__ = (function (){var statearr_24653 = f__11298__auto__.call(null);(statearr_24653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___24780);
return statearr_24653;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(__24768,c__11297__auto___24780,G__24599_24769,n__4508__auto___24767,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__24789 = (__24768 + (1));
__24768 = G__24789;
continue;
}
} else
{}
break;
}
var c__11297__auto___24790 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___24790,jobs,results,process,async){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___24790,jobs,results,process,async){
return (function (state_24675){var state_val_24676 = (state_24675[(1)]);if((state_val_24676 === (9)))
{var inst_24668 = (state_24675[(2)]);var state_24675__$1 = (function (){var statearr_24677 = state_24675;(statearr_24677[(7)] = inst_24668);
return statearr_24677;
})();var statearr_24678_24791 = state_24675__$1;(statearr_24678_24791[(2)] = null);
(statearr_24678_24791[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24676 === (8)))
{var inst_24661 = (state_24675[(8)]);var inst_24666 = (state_24675[(2)]);var state_24675__$1 = (function (){var statearr_24679 = state_24675;(statearr_24679[(9)] = inst_24666);
return statearr_24679;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24675__$1,(9),results,inst_24661);
} else
{if((state_val_24676 === (7)))
{var inst_24671 = (state_24675[(2)]);var state_24675__$1 = state_24675;var statearr_24680_24792 = state_24675__$1;(statearr_24680_24792[(2)] = inst_24671);
(statearr_24680_24792[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24676 === (6)))
{var inst_24656 = (state_24675[(10)]);var inst_24661 = (state_24675[(8)]);var inst_24661__$1 = cljs.core.async.chan.call(null,(1));var inst_24662 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24663 = [inst_24656,inst_24661__$1];var inst_24664 = (new cljs.core.PersistentVector(null,2,(5),inst_24662,inst_24663,null));var state_24675__$1 = (function (){var statearr_24681 = state_24675;(statearr_24681[(8)] = inst_24661__$1);
return statearr_24681;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24675__$1,(8),jobs,inst_24664);
} else
{if((state_val_24676 === (5)))
{var inst_24659 = cljs.core.async.close_BANG_.call(null,jobs);var state_24675__$1 = state_24675;var statearr_24682_24793 = state_24675__$1;(statearr_24682_24793[(2)] = inst_24659);
(statearr_24682_24793[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24676 === (4)))
{var inst_24656 = (state_24675[(10)]);var inst_24656__$1 = (state_24675[(2)]);var inst_24657 = (inst_24656__$1 == null);var state_24675__$1 = (function (){var statearr_24683 = state_24675;(statearr_24683[(10)] = inst_24656__$1);
return statearr_24683;
})();if(cljs.core.truth_(inst_24657))
{var statearr_24684_24794 = state_24675__$1;(statearr_24684_24794[(1)] = (5));
} else
{var statearr_24685_24795 = state_24675__$1;(statearr_24685_24795[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24676 === (3)))
{var inst_24673 = (state_24675[(2)]);var state_24675__$1 = state_24675;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24675__$1,inst_24673);
} else
{if((state_val_24676 === (2)))
{var state_24675__$1 = state_24675;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24675__$1,(4),from);
} else
{if((state_val_24676 === (1)))
{var state_24675__$1 = state_24675;var statearr_24686_24796 = state_24675__$1;(statearr_24686_24796[(2)] = null);
(statearr_24686_24796[(1)] = (2));
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
});})(c__11297__auto___24790,jobs,results,process,async))
;return ((function (switch__11241__auto__,c__11297__auto___24790,jobs,results,process,async){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_24690 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24690[(0)] = state_machine__11242__auto__);
(statearr_24690[(1)] = (1));
return statearr_24690;
});
var state_machine__11242__auto____1 = (function (state_24675){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_24675);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e24691){if((e24691 instanceof Object))
{var ex__11245__auto__ = e24691;var statearr_24692_24797 = state_24675;(statearr_24692_24797[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24675);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24691;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24798 = state_24675;
state_24675 = G__24798;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_24675){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_24675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___24790,jobs,results,process,async))
})();var state__11299__auto__ = (function (){var statearr_24693 = f__11298__auto__.call(null);(statearr_24693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___24790);
return statearr_24693;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___24790,jobs,results,process,async))
);
var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,jobs,results,process,async){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,jobs,results,process,async){
return (function (state_24731){var state_val_24732 = (state_24731[(1)]);if((state_val_24732 === (7)))
{var inst_24727 = (state_24731[(2)]);var state_24731__$1 = state_24731;var statearr_24733_24799 = state_24731__$1;(statearr_24733_24799[(2)] = inst_24727);
(statearr_24733_24799[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (20)))
{var state_24731__$1 = state_24731;var statearr_24734_24800 = state_24731__$1;(statearr_24734_24800[(2)] = null);
(statearr_24734_24800[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (1)))
{var state_24731__$1 = state_24731;var statearr_24735_24801 = state_24731__$1;(statearr_24735_24801[(2)] = null);
(statearr_24735_24801[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (4)))
{var inst_24696 = (state_24731[(7)]);var inst_24696__$1 = (state_24731[(2)]);var inst_24697 = (inst_24696__$1 == null);var state_24731__$1 = (function (){var statearr_24736 = state_24731;(statearr_24736[(7)] = inst_24696__$1);
return statearr_24736;
})();if(cljs.core.truth_(inst_24697))
{var statearr_24737_24802 = state_24731__$1;(statearr_24737_24802[(1)] = (5));
} else
{var statearr_24738_24803 = state_24731__$1;(statearr_24738_24803[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (15)))
{var inst_24709 = (state_24731[(8)]);var state_24731__$1 = state_24731;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24731__$1,(18),to,inst_24709);
} else
{if((state_val_24732 === (21)))
{var inst_24722 = (state_24731[(2)]);var state_24731__$1 = state_24731;var statearr_24739_24804 = state_24731__$1;(statearr_24739_24804[(2)] = inst_24722);
(statearr_24739_24804[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (13)))
{var inst_24724 = (state_24731[(2)]);var state_24731__$1 = (function (){var statearr_24740 = state_24731;(statearr_24740[(9)] = inst_24724);
return statearr_24740;
})();var statearr_24741_24805 = state_24731__$1;(statearr_24741_24805[(2)] = null);
(statearr_24741_24805[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (6)))
{var inst_24696 = (state_24731[(7)]);var state_24731__$1 = state_24731;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24731__$1,(11),inst_24696);
} else
{if((state_val_24732 === (17)))
{var inst_24717 = (state_24731[(2)]);var state_24731__$1 = state_24731;if(cljs.core.truth_(inst_24717))
{var statearr_24742_24806 = state_24731__$1;(statearr_24742_24806[(1)] = (19));
} else
{var statearr_24743_24807 = state_24731__$1;(statearr_24743_24807[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (3)))
{var inst_24729 = (state_24731[(2)]);var state_24731__$1 = state_24731;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24731__$1,inst_24729);
} else
{if((state_val_24732 === (12)))
{var inst_24706 = (state_24731[(10)]);var state_24731__$1 = state_24731;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24731__$1,(14),inst_24706);
} else
{if((state_val_24732 === (2)))
{var state_24731__$1 = state_24731;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24731__$1,(4),results);
} else
{if((state_val_24732 === (19)))
{var state_24731__$1 = state_24731;var statearr_24744_24808 = state_24731__$1;(statearr_24744_24808[(2)] = null);
(statearr_24744_24808[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (11)))
{var inst_24706 = (state_24731[(2)]);var state_24731__$1 = (function (){var statearr_24745 = state_24731;(statearr_24745[(10)] = inst_24706);
return statearr_24745;
})();var statearr_24746_24809 = state_24731__$1;(statearr_24746_24809[(2)] = null);
(statearr_24746_24809[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (9)))
{var state_24731__$1 = state_24731;var statearr_24747_24810 = state_24731__$1;(statearr_24747_24810[(2)] = null);
(statearr_24747_24810[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (5)))
{var state_24731__$1 = state_24731;if(cljs.core.truth_(close_QMARK_))
{var statearr_24748_24811 = state_24731__$1;(statearr_24748_24811[(1)] = (8));
} else
{var statearr_24749_24812 = state_24731__$1;(statearr_24749_24812[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (14)))
{var inst_24711 = (state_24731[(11)]);var inst_24709 = (state_24731[(8)]);var inst_24709__$1 = (state_24731[(2)]);var inst_24710 = (inst_24709__$1 == null);var inst_24711__$1 = cljs.core.not.call(null,inst_24710);var state_24731__$1 = (function (){var statearr_24750 = state_24731;(statearr_24750[(11)] = inst_24711__$1);
(statearr_24750[(8)] = inst_24709__$1);
return statearr_24750;
})();if(inst_24711__$1)
{var statearr_24751_24813 = state_24731__$1;(statearr_24751_24813[(1)] = (15));
} else
{var statearr_24752_24814 = state_24731__$1;(statearr_24752_24814[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (16)))
{var inst_24711 = (state_24731[(11)]);var state_24731__$1 = state_24731;var statearr_24753_24815 = state_24731__$1;(statearr_24753_24815[(2)] = inst_24711);
(statearr_24753_24815[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (10)))
{var inst_24703 = (state_24731[(2)]);var state_24731__$1 = state_24731;var statearr_24754_24816 = state_24731__$1;(statearr_24754_24816[(2)] = inst_24703);
(statearr_24754_24816[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (18)))
{var inst_24714 = (state_24731[(2)]);var state_24731__$1 = state_24731;var statearr_24755_24817 = state_24731__$1;(statearr_24755_24817[(2)] = inst_24714);
(statearr_24755_24817[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (8)))
{var inst_24700 = cljs.core.async.close_BANG_.call(null,to);var state_24731__$1 = state_24731;var statearr_24756_24818 = state_24731__$1;(statearr_24756_24818[(2)] = inst_24700);
(statearr_24756_24818[(1)] = (10));
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
});})(c__11297__auto__,jobs,results,process,async))
;return ((function (switch__11241__auto__,c__11297__auto__,jobs,results,process,async){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_24760 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24760[(0)] = state_machine__11242__auto__);
(statearr_24760[(1)] = (1));
return statearr_24760;
});
var state_machine__11242__auto____1 = (function (state_24731){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_24731);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e24761){if((e24761 instanceof Object))
{var ex__11245__auto__ = e24761;var statearr_24762_24819 = state_24731;(statearr_24762_24819[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24731);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24761;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24820 = state_24731;
state_24731 = G__24820;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_24731){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_24731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,jobs,results,process,async))
})();var state__11299__auto__ = (function (){var statearr_24763 = f__11298__auto__.call(null);(statearr_24763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_24763;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,jobs,results,process,async))
);
return c__11297__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11297__auto___24921 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___24921,tc,fc){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___24921,tc,fc){
return (function (state_24896){var state_val_24897 = (state_24896[(1)]);if((state_val_24897 === (7)))
{var inst_24892 = (state_24896[(2)]);var state_24896__$1 = state_24896;var statearr_24898_24922 = state_24896__$1;(statearr_24898_24922[(2)] = inst_24892);
(statearr_24898_24922[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24897 === (1)))
{var state_24896__$1 = state_24896;var statearr_24899_24923 = state_24896__$1;(statearr_24899_24923[(2)] = null);
(statearr_24899_24923[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24897 === (4)))
{var inst_24873 = (state_24896[(7)]);var inst_24873__$1 = (state_24896[(2)]);var inst_24874 = (inst_24873__$1 == null);var state_24896__$1 = (function (){var statearr_24900 = state_24896;(statearr_24900[(7)] = inst_24873__$1);
return statearr_24900;
})();if(cljs.core.truth_(inst_24874))
{var statearr_24901_24924 = state_24896__$1;(statearr_24901_24924[(1)] = (5));
} else
{var statearr_24902_24925 = state_24896__$1;(statearr_24902_24925[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24897 === (13)))
{var state_24896__$1 = state_24896;var statearr_24903_24926 = state_24896__$1;(statearr_24903_24926[(2)] = null);
(statearr_24903_24926[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24897 === (6)))
{var inst_24873 = (state_24896[(7)]);var inst_24879 = p.call(null,inst_24873);var state_24896__$1 = state_24896;if(cljs.core.truth_(inst_24879))
{var statearr_24904_24927 = state_24896__$1;(statearr_24904_24927[(1)] = (9));
} else
{var statearr_24905_24928 = state_24896__$1;(statearr_24905_24928[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24897 === (3)))
{var inst_24894 = (state_24896[(2)]);var state_24896__$1 = state_24896;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24896__$1,inst_24894);
} else
{if((state_val_24897 === (12)))
{var state_24896__$1 = state_24896;var statearr_24906_24929 = state_24896__$1;(statearr_24906_24929[(2)] = null);
(statearr_24906_24929[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24897 === (2)))
{var state_24896__$1 = state_24896;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24896__$1,(4),ch);
} else
{if((state_val_24897 === (11)))
{var inst_24873 = (state_24896[(7)]);var inst_24883 = (state_24896[(2)]);var state_24896__$1 = state_24896;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24896__$1,(8),inst_24883,inst_24873);
} else
{if((state_val_24897 === (9)))
{var state_24896__$1 = state_24896;var statearr_24907_24930 = state_24896__$1;(statearr_24907_24930[(2)] = tc);
(statearr_24907_24930[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24897 === (5)))
{var inst_24876 = cljs.core.async.close_BANG_.call(null,tc);var inst_24877 = cljs.core.async.close_BANG_.call(null,fc);var state_24896__$1 = (function (){var statearr_24908 = state_24896;(statearr_24908[(8)] = inst_24876);
return statearr_24908;
})();var statearr_24909_24931 = state_24896__$1;(statearr_24909_24931[(2)] = inst_24877);
(statearr_24909_24931[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24897 === (14)))
{var inst_24890 = (state_24896[(2)]);var state_24896__$1 = state_24896;var statearr_24910_24932 = state_24896__$1;(statearr_24910_24932[(2)] = inst_24890);
(statearr_24910_24932[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24897 === (10)))
{var state_24896__$1 = state_24896;var statearr_24911_24933 = state_24896__$1;(statearr_24911_24933[(2)] = fc);
(statearr_24911_24933[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24897 === (8)))
{var inst_24885 = (state_24896[(2)]);var state_24896__$1 = state_24896;if(cljs.core.truth_(inst_24885))
{var statearr_24912_24934 = state_24896__$1;(statearr_24912_24934[(1)] = (12));
} else
{var statearr_24913_24935 = state_24896__$1;(statearr_24913_24935[(1)] = (13));
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
});})(c__11297__auto___24921,tc,fc))
;return ((function (switch__11241__auto__,c__11297__auto___24921,tc,fc){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_24917 = [null,null,null,null,null,null,null,null,null];(statearr_24917[(0)] = state_machine__11242__auto__);
(statearr_24917[(1)] = (1));
return statearr_24917;
});
var state_machine__11242__auto____1 = (function (state_24896){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_24896);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e24918){if((e24918 instanceof Object))
{var ex__11245__auto__ = e24918;var statearr_24919_24936 = state_24896;(statearr_24919_24936[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24896);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24918;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24937 = state_24896;
state_24896 = G__24937;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_24896){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_24896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___24921,tc,fc))
})();var state__11299__auto__ = (function (){var statearr_24920 = f__11298__auto__.call(null);(statearr_24920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___24921);
return statearr_24920;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___24921,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__){
return (function (state_24984){var state_val_24985 = (state_24984[(1)]);if((state_val_24985 === (7)))
{var inst_24980 = (state_24984[(2)]);var state_24984__$1 = state_24984;var statearr_24986_25002 = state_24984__$1;(statearr_24986_25002[(2)] = inst_24980);
(statearr_24986_25002[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24985 === (6)))
{var inst_24973 = (state_24984[(7)]);var inst_24970 = (state_24984[(8)]);var inst_24977 = f.call(null,inst_24970,inst_24973);var inst_24970__$1 = inst_24977;var state_24984__$1 = (function (){var statearr_24987 = state_24984;(statearr_24987[(8)] = inst_24970__$1);
return statearr_24987;
})();var statearr_24988_25003 = state_24984__$1;(statearr_24988_25003[(2)] = null);
(statearr_24988_25003[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24985 === (5)))
{var inst_24970 = (state_24984[(8)]);var state_24984__$1 = state_24984;var statearr_24989_25004 = state_24984__$1;(statearr_24989_25004[(2)] = inst_24970);
(statearr_24989_25004[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24985 === (4)))
{var inst_24973 = (state_24984[(7)]);var inst_24973__$1 = (state_24984[(2)]);var inst_24974 = (inst_24973__$1 == null);var state_24984__$1 = (function (){var statearr_24990 = state_24984;(statearr_24990[(7)] = inst_24973__$1);
return statearr_24990;
})();if(cljs.core.truth_(inst_24974))
{var statearr_24991_25005 = state_24984__$1;(statearr_24991_25005[(1)] = (5));
} else
{var statearr_24992_25006 = state_24984__$1;(statearr_24992_25006[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24985 === (3)))
{var inst_24982 = (state_24984[(2)]);var state_24984__$1 = state_24984;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24984__$1,inst_24982);
} else
{if((state_val_24985 === (2)))
{var state_24984__$1 = state_24984;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24984__$1,(4),ch);
} else
{if((state_val_24985 === (1)))
{var inst_24970 = init;var state_24984__$1 = (function (){var statearr_24993 = state_24984;(statearr_24993[(8)] = inst_24970);
return statearr_24993;
})();var statearr_24994_25007 = state_24984__$1;(statearr_24994_25007[(2)] = null);
(statearr_24994_25007[(1)] = (2));
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
});})(c__11297__auto__))
;return ((function (switch__11241__auto__,c__11297__auto__){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_24998 = [null,null,null,null,null,null,null,null,null];(statearr_24998[(0)] = state_machine__11242__auto__);
(statearr_24998[(1)] = (1));
return statearr_24998;
});
var state_machine__11242__auto____1 = (function (state_24984){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_24984);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e24999){if((e24999 instanceof Object))
{var ex__11245__auto__ = e24999;var statearr_25000_25008 = state_24984;(statearr_25000_25008[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24984);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24999;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25009 = state_24984;
state_24984 = G__25009;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_24984){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_24984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__))
})();var state__11299__auto__ = (function (){var statearr_25001 = f__11298__auto__.call(null);(statearr_25001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_25001;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__))
);
return c__11297__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__){
return (function (state_25083){var state_val_25084 = (state_25083[(1)]);if((state_val_25084 === (7)))
{var inst_25065 = (state_25083[(2)]);var state_25083__$1 = state_25083;var statearr_25085_25108 = state_25083__$1;(statearr_25085_25108[(2)] = inst_25065);
(statearr_25085_25108[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25084 === (1)))
{var inst_25059 = cljs.core.seq.call(null,coll);var inst_25060 = inst_25059;var state_25083__$1 = (function (){var statearr_25086 = state_25083;(statearr_25086[(7)] = inst_25060);
return statearr_25086;
})();var statearr_25087_25109 = state_25083__$1;(statearr_25087_25109[(2)] = null);
(statearr_25087_25109[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25084 === (4)))
{var inst_25060 = (state_25083[(7)]);var inst_25063 = cljs.core.first.call(null,inst_25060);var state_25083__$1 = state_25083;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25083__$1,(7),ch,inst_25063);
} else
{if((state_val_25084 === (13)))
{var inst_25077 = (state_25083[(2)]);var state_25083__$1 = state_25083;var statearr_25088_25110 = state_25083__$1;(statearr_25088_25110[(2)] = inst_25077);
(statearr_25088_25110[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25084 === (6)))
{var inst_25068 = (state_25083[(2)]);var state_25083__$1 = state_25083;if(cljs.core.truth_(inst_25068))
{var statearr_25089_25111 = state_25083__$1;(statearr_25089_25111[(1)] = (8));
} else
{var statearr_25090_25112 = state_25083__$1;(statearr_25090_25112[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25084 === (3)))
{var inst_25081 = (state_25083[(2)]);var state_25083__$1 = state_25083;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25083__$1,inst_25081);
} else
{if((state_val_25084 === (12)))
{var state_25083__$1 = state_25083;var statearr_25091_25113 = state_25083__$1;(statearr_25091_25113[(2)] = null);
(statearr_25091_25113[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25084 === (2)))
{var inst_25060 = (state_25083[(7)]);var state_25083__$1 = state_25083;if(cljs.core.truth_(inst_25060))
{var statearr_25092_25114 = state_25083__$1;(statearr_25092_25114[(1)] = (4));
} else
{var statearr_25093_25115 = state_25083__$1;(statearr_25093_25115[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25084 === (11)))
{var inst_25074 = cljs.core.async.close_BANG_.call(null,ch);var state_25083__$1 = state_25083;var statearr_25094_25116 = state_25083__$1;(statearr_25094_25116[(2)] = inst_25074);
(statearr_25094_25116[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25084 === (9)))
{var state_25083__$1 = state_25083;if(cljs.core.truth_(close_QMARK_))
{var statearr_25095_25117 = state_25083__$1;(statearr_25095_25117[(1)] = (11));
} else
{var statearr_25096_25118 = state_25083__$1;(statearr_25096_25118[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25084 === (5)))
{var inst_25060 = (state_25083[(7)]);var state_25083__$1 = state_25083;var statearr_25097_25119 = state_25083__$1;(statearr_25097_25119[(2)] = inst_25060);
(statearr_25097_25119[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25084 === (10)))
{var inst_25079 = (state_25083[(2)]);var state_25083__$1 = state_25083;var statearr_25098_25120 = state_25083__$1;(statearr_25098_25120[(2)] = inst_25079);
(statearr_25098_25120[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25084 === (8)))
{var inst_25060 = (state_25083[(7)]);var inst_25070 = cljs.core.next.call(null,inst_25060);var inst_25060__$1 = inst_25070;var state_25083__$1 = (function (){var statearr_25099 = state_25083;(statearr_25099[(7)] = inst_25060__$1);
return statearr_25099;
})();var statearr_25100_25121 = state_25083__$1;(statearr_25100_25121[(2)] = null);
(statearr_25100_25121[(1)] = (2));
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
});})(c__11297__auto__))
;return ((function (switch__11241__auto__,c__11297__auto__){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_25104 = [null,null,null,null,null,null,null,null];(statearr_25104[(0)] = state_machine__11242__auto__);
(statearr_25104[(1)] = (1));
return statearr_25104;
});
var state_machine__11242__auto____1 = (function (state_25083){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_25083);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e25105){if((e25105 instanceof Object))
{var ex__11245__auto__ = e25105;var statearr_25106_25122 = state_25083;(statearr_25106_25122[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25083);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25105;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25123 = state_25083;
state_25083 = G__25123;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_25083){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_25083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__))
})();var state__11299__auto__ = (function (){var statearr_25107 = f__11298__auto__.call(null);(statearr_25107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_25107;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__))
);
return c__11297__auto__;
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
cljs.core.async.Mux = (function (){var obj25125 = {};return obj25125;
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
cljs.core.async.Mult = (function (){var obj25127 = {};return obj25127;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25349 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25349 = (function (cs,ch,mult,meta25350){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25350 = meta25350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25349.cljs$lang$type = true;
cljs.core.async.t25349.cljs$lang$ctorStr = "cljs.core.async/t25349";
cljs.core.async.t25349.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25349");
});})(cs))
;
cljs.core.async.t25349.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25349.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25349.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25349.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25349.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25349.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25351){var self__ = this;
var _25351__$1 = this;return self__.meta25350;
});})(cs))
;
cljs.core.async.t25349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25351,meta25350__$1){var self__ = this;
var _25351__$1 = this;return (new cljs.core.async.t25349(self__.cs,self__.ch,self__.mult,meta25350__$1));
});})(cs))
;
cljs.core.async.__GT_t25349 = ((function (cs){
return (function __GT_t25349(cs__$1,ch__$1,mult__$1,meta25350){return (new cljs.core.async.t25349(cs__$1,ch__$1,mult__$1,meta25350));
});})(cs))
;
}
return (new cljs.core.async.t25349(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11297__auto___25570 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___25570,cs,m,dchan,dctr,done){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___25570,cs,m,dchan,dctr,done){
return (function (state_25482){var state_val_25483 = (state_25482[(1)]);if((state_val_25483 === (7)))
{var inst_25478 = (state_25482[(2)]);var state_25482__$1 = state_25482;var statearr_25484_25571 = state_25482__$1;(statearr_25484_25571[(2)] = inst_25478);
(statearr_25484_25571[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (20)))
{var inst_25383 = (state_25482[(7)]);var inst_25393 = cljs.core.first.call(null,inst_25383);var inst_25394 = cljs.core.nth.call(null,inst_25393,(0),null);var inst_25395 = cljs.core.nth.call(null,inst_25393,(1),null);var state_25482__$1 = (function (){var statearr_25485 = state_25482;(statearr_25485[(8)] = inst_25394);
return statearr_25485;
})();if(cljs.core.truth_(inst_25395))
{var statearr_25486_25572 = state_25482__$1;(statearr_25486_25572[(1)] = (22));
} else
{var statearr_25487_25573 = state_25482__$1;(statearr_25487_25573[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (27)))
{var inst_25423 = (state_25482[(9)]);var inst_25425 = (state_25482[(10)]);var inst_25430 = (state_25482[(11)]);var inst_25354 = (state_25482[(12)]);var inst_25430__$1 = cljs.core._nth.call(null,inst_25423,inst_25425);var inst_25431 = cljs.core.async.put_BANG_.call(null,inst_25430__$1,inst_25354,done);var state_25482__$1 = (function (){var statearr_25488 = state_25482;(statearr_25488[(11)] = inst_25430__$1);
return statearr_25488;
})();if(cljs.core.truth_(inst_25431))
{var statearr_25489_25574 = state_25482__$1;(statearr_25489_25574[(1)] = (30));
} else
{var statearr_25490_25575 = state_25482__$1;(statearr_25490_25575[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (1)))
{var state_25482__$1 = state_25482;var statearr_25491_25576 = state_25482__$1;(statearr_25491_25576[(2)] = null);
(statearr_25491_25576[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (24)))
{var inst_25383 = (state_25482[(7)]);var inst_25400 = (state_25482[(2)]);var inst_25401 = cljs.core.next.call(null,inst_25383);var inst_25363 = inst_25401;var inst_25364 = null;var inst_25365 = (0);var inst_25366 = (0);var state_25482__$1 = (function (){var statearr_25492 = state_25482;(statearr_25492[(13)] = inst_25364);
(statearr_25492[(14)] = inst_25363);
(statearr_25492[(15)] = inst_25400);
(statearr_25492[(16)] = inst_25366);
(statearr_25492[(17)] = inst_25365);
return statearr_25492;
})();var statearr_25493_25577 = state_25482__$1;(statearr_25493_25577[(2)] = null);
(statearr_25493_25577[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (39)))
{var state_25482__$1 = state_25482;var statearr_25497_25578 = state_25482__$1;(statearr_25497_25578[(2)] = null);
(statearr_25497_25578[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (4)))
{var inst_25354 = (state_25482[(12)]);var inst_25354__$1 = (state_25482[(2)]);var inst_25355 = (inst_25354__$1 == null);var state_25482__$1 = (function (){var statearr_25498 = state_25482;(statearr_25498[(12)] = inst_25354__$1);
return statearr_25498;
})();if(cljs.core.truth_(inst_25355))
{var statearr_25499_25579 = state_25482__$1;(statearr_25499_25579[(1)] = (5));
} else
{var statearr_25500_25580 = state_25482__$1;(statearr_25500_25580[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (15)))
{var inst_25364 = (state_25482[(13)]);var inst_25363 = (state_25482[(14)]);var inst_25366 = (state_25482[(16)]);var inst_25365 = (state_25482[(17)]);var inst_25379 = (state_25482[(2)]);var inst_25380 = (inst_25366 + (1));var tmp25494 = inst_25364;var tmp25495 = inst_25363;var tmp25496 = inst_25365;var inst_25363__$1 = tmp25495;var inst_25364__$1 = tmp25494;var inst_25365__$1 = tmp25496;var inst_25366__$1 = inst_25380;var state_25482__$1 = (function (){var statearr_25501 = state_25482;(statearr_25501[(18)] = inst_25379);
(statearr_25501[(13)] = inst_25364__$1);
(statearr_25501[(14)] = inst_25363__$1);
(statearr_25501[(16)] = inst_25366__$1);
(statearr_25501[(17)] = inst_25365__$1);
return statearr_25501;
})();var statearr_25502_25581 = state_25482__$1;(statearr_25502_25581[(2)] = null);
(statearr_25502_25581[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (21)))
{var inst_25404 = (state_25482[(2)]);var state_25482__$1 = state_25482;var statearr_25506_25582 = state_25482__$1;(statearr_25506_25582[(2)] = inst_25404);
(statearr_25506_25582[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (31)))
{var inst_25430 = (state_25482[(11)]);var inst_25434 = done.call(null,null);var inst_25435 = cljs.core.async.untap_STAR_.call(null,m,inst_25430);var state_25482__$1 = (function (){var statearr_25507 = state_25482;(statearr_25507[(19)] = inst_25434);
return statearr_25507;
})();var statearr_25508_25583 = state_25482__$1;(statearr_25508_25583[(2)] = inst_25435);
(statearr_25508_25583[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (32)))
{var inst_25423 = (state_25482[(9)]);var inst_25422 = (state_25482[(20)]);var inst_25425 = (state_25482[(10)]);var inst_25424 = (state_25482[(21)]);var inst_25437 = (state_25482[(2)]);var inst_25438 = (inst_25425 + (1));var tmp25503 = inst_25423;var tmp25504 = inst_25422;var tmp25505 = inst_25424;var inst_25422__$1 = tmp25504;var inst_25423__$1 = tmp25503;var inst_25424__$1 = tmp25505;var inst_25425__$1 = inst_25438;var state_25482__$1 = (function (){var statearr_25509 = state_25482;(statearr_25509[(22)] = inst_25437);
(statearr_25509[(9)] = inst_25423__$1);
(statearr_25509[(20)] = inst_25422__$1);
(statearr_25509[(10)] = inst_25425__$1);
(statearr_25509[(21)] = inst_25424__$1);
return statearr_25509;
})();var statearr_25510_25584 = state_25482__$1;(statearr_25510_25584[(2)] = null);
(statearr_25510_25584[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (40)))
{var inst_25450 = (state_25482[(23)]);var inst_25454 = done.call(null,null);var inst_25455 = cljs.core.async.untap_STAR_.call(null,m,inst_25450);var state_25482__$1 = (function (){var statearr_25511 = state_25482;(statearr_25511[(24)] = inst_25454);
return statearr_25511;
})();var statearr_25512_25585 = state_25482__$1;(statearr_25512_25585[(2)] = inst_25455);
(statearr_25512_25585[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (33)))
{var inst_25441 = (state_25482[(25)]);var inst_25443 = cljs.core.chunked_seq_QMARK_.call(null,inst_25441);var state_25482__$1 = state_25482;if(inst_25443)
{var statearr_25513_25586 = state_25482__$1;(statearr_25513_25586[(1)] = (36));
} else
{var statearr_25514_25587 = state_25482__$1;(statearr_25514_25587[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (13)))
{var inst_25373 = (state_25482[(26)]);var inst_25376 = cljs.core.async.close_BANG_.call(null,inst_25373);var state_25482__$1 = state_25482;var statearr_25515_25588 = state_25482__$1;(statearr_25515_25588[(2)] = inst_25376);
(statearr_25515_25588[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (22)))
{var inst_25394 = (state_25482[(8)]);var inst_25397 = cljs.core.async.close_BANG_.call(null,inst_25394);var state_25482__$1 = state_25482;var statearr_25516_25589 = state_25482__$1;(statearr_25516_25589[(2)] = inst_25397);
(statearr_25516_25589[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (36)))
{var inst_25441 = (state_25482[(25)]);var inst_25445 = cljs.core.chunk_first.call(null,inst_25441);var inst_25446 = cljs.core.chunk_rest.call(null,inst_25441);var inst_25447 = cljs.core.count.call(null,inst_25445);var inst_25422 = inst_25446;var inst_25423 = inst_25445;var inst_25424 = inst_25447;var inst_25425 = (0);var state_25482__$1 = (function (){var statearr_25517 = state_25482;(statearr_25517[(9)] = inst_25423);
(statearr_25517[(20)] = inst_25422);
(statearr_25517[(10)] = inst_25425);
(statearr_25517[(21)] = inst_25424);
return statearr_25517;
})();var statearr_25518_25590 = state_25482__$1;(statearr_25518_25590[(2)] = null);
(statearr_25518_25590[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (41)))
{var inst_25441 = (state_25482[(25)]);var inst_25457 = (state_25482[(2)]);var inst_25458 = cljs.core.next.call(null,inst_25441);var inst_25422 = inst_25458;var inst_25423 = null;var inst_25424 = (0);var inst_25425 = (0);var state_25482__$1 = (function (){var statearr_25519 = state_25482;(statearr_25519[(9)] = inst_25423);
(statearr_25519[(20)] = inst_25422);
(statearr_25519[(10)] = inst_25425);
(statearr_25519[(21)] = inst_25424);
(statearr_25519[(27)] = inst_25457);
return statearr_25519;
})();var statearr_25520_25591 = state_25482__$1;(statearr_25520_25591[(2)] = null);
(statearr_25520_25591[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (43)))
{var state_25482__$1 = state_25482;var statearr_25521_25592 = state_25482__$1;(statearr_25521_25592[(2)] = null);
(statearr_25521_25592[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (29)))
{var inst_25466 = (state_25482[(2)]);var state_25482__$1 = state_25482;var statearr_25522_25593 = state_25482__$1;(statearr_25522_25593[(2)] = inst_25466);
(statearr_25522_25593[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (44)))
{var inst_25475 = (state_25482[(2)]);var state_25482__$1 = (function (){var statearr_25523 = state_25482;(statearr_25523[(28)] = inst_25475);
return statearr_25523;
})();var statearr_25524_25594 = state_25482__$1;(statearr_25524_25594[(2)] = null);
(statearr_25524_25594[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (6)))
{var inst_25414 = (state_25482[(29)]);var inst_25413 = cljs.core.deref.call(null,cs);var inst_25414__$1 = cljs.core.keys.call(null,inst_25413);var inst_25415 = cljs.core.count.call(null,inst_25414__$1);var inst_25416 = cljs.core.reset_BANG_.call(null,dctr,inst_25415);var inst_25421 = cljs.core.seq.call(null,inst_25414__$1);var inst_25422 = inst_25421;var inst_25423 = null;var inst_25424 = (0);var inst_25425 = (0);var state_25482__$1 = (function (){var statearr_25525 = state_25482;(statearr_25525[(9)] = inst_25423);
(statearr_25525[(20)] = inst_25422);
(statearr_25525[(10)] = inst_25425);
(statearr_25525[(29)] = inst_25414__$1);
(statearr_25525[(21)] = inst_25424);
(statearr_25525[(30)] = inst_25416);
return statearr_25525;
})();var statearr_25526_25595 = state_25482__$1;(statearr_25526_25595[(2)] = null);
(statearr_25526_25595[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (28)))
{var inst_25441 = (state_25482[(25)]);var inst_25422 = (state_25482[(20)]);var inst_25441__$1 = cljs.core.seq.call(null,inst_25422);var state_25482__$1 = (function (){var statearr_25527 = state_25482;(statearr_25527[(25)] = inst_25441__$1);
return statearr_25527;
})();if(inst_25441__$1)
{var statearr_25528_25596 = state_25482__$1;(statearr_25528_25596[(1)] = (33));
} else
{var statearr_25529_25597 = state_25482__$1;(statearr_25529_25597[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (25)))
{var inst_25425 = (state_25482[(10)]);var inst_25424 = (state_25482[(21)]);var inst_25427 = (inst_25425 < inst_25424);var inst_25428 = inst_25427;var state_25482__$1 = state_25482;if(cljs.core.truth_(inst_25428))
{var statearr_25530_25598 = state_25482__$1;(statearr_25530_25598[(1)] = (27));
} else
{var statearr_25531_25599 = state_25482__$1;(statearr_25531_25599[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (34)))
{var state_25482__$1 = state_25482;var statearr_25532_25600 = state_25482__$1;(statearr_25532_25600[(2)] = null);
(statearr_25532_25600[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (17)))
{var state_25482__$1 = state_25482;var statearr_25533_25601 = state_25482__$1;(statearr_25533_25601[(2)] = null);
(statearr_25533_25601[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (3)))
{var inst_25480 = (state_25482[(2)]);var state_25482__$1 = state_25482;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25482__$1,inst_25480);
} else
{if((state_val_25483 === (12)))
{var inst_25409 = (state_25482[(2)]);var state_25482__$1 = state_25482;var statearr_25534_25602 = state_25482__$1;(statearr_25534_25602[(2)] = inst_25409);
(statearr_25534_25602[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (2)))
{var state_25482__$1 = state_25482;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25482__$1,(4),ch);
} else
{if((state_val_25483 === (23)))
{var state_25482__$1 = state_25482;var statearr_25535_25603 = state_25482__$1;(statearr_25535_25603[(2)] = null);
(statearr_25535_25603[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (35)))
{var inst_25464 = (state_25482[(2)]);var state_25482__$1 = state_25482;var statearr_25536_25604 = state_25482__$1;(statearr_25536_25604[(2)] = inst_25464);
(statearr_25536_25604[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (19)))
{var inst_25383 = (state_25482[(7)]);var inst_25387 = cljs.core.chunk_first.call(null,inst_25383);var inst_25388 = cljs.core.chunk_rest.call(null,inst_25383);var inst_25389 = cljs.core.count.call(null,inst_25387);var inst_25363 = inst_25388;var inst_25364 = inst_25387;var inst_25365 = inst_25389;var inst_25366 = (0);var state_25482__$1 = (function (){var statearr_25537 = state_25482;(statearr_25537[(13)] = inst_25364);
(statearr_25537[(14)] = inst_25363);
(statearr_25537[(16)] = inst_25366);
(statearr_25537[(17)] = inst_25365);
return statearr_25537;
})();var statearr_25538_25605 = state_25482__$1;(statearr_25538_25605[(2)] = null);
(statearr_25538_25605[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (11)))
{var inst_25383 = (state_25482[(7)]);var inst_25363 = (state_25482[(14)]);var inst_25383__$1 = cljs.core.seq.call(null,inst_25363);var state_25482__$1 = (function (){var statearr_25539 = state_25482;(statearr_25539[(7)] = inst_25383__$1);
return statearr_25539;
})();if(inst_25383__$1)
{var statearr_25540_25606 = state_25482__$1;(statearr_25540_25606[(1)] = (16));
} else
{var statearr_25541_25607 = state_25482__$1;(statearr_25541_25607[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (9)))
{var inst_25411 = (state_25482[(2)]);var state_25482__$1 = state_25482;var statearr_25542_25608 = state_25482__$1;(statearr_25542_25608[(2)] = inst_25411);
(statearr_25542_25608[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (5)))
{var inst_25361 = cljs.core.deref.call(null,cs);var inst_25362 = cljs.core.seq.call(null,inst_25361);var inst_25363 = inst_25362;var inst_25364 = null;var inst_25365 = (0);var inst_25366 = (0);var state_25482__$1 = (function (){var statearr_25543 = state_25482;(statearr_25543[(13)] = inst_25364);
(statearr_25543[(14)] = inst_25363);
(statearr_25543[(16)] = inst_25366);
(statearr_25543[(17)] = inst_25365);
return statearr_25543;
})();var statearr_25544_25609 = state_25482__$1;(statearr_25544_25609[(2)] = null);
(statearr_25544_25609[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (14)))
{var state_25482__$1 = state_25482;var statearr_25545_25610 = state_25482__$1;(statearr_25545_25610[(2)] = null);
(statearr_25545_25610[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (45)))
{var inst_25472 = (state_25482[(2)]);var state_25482__$1 = state_25482;var statearr_25546_25611 = state_25482__$1;(statearr_25546_25611[(2)] = inst_25472);
(statearr_25546_25611[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (26)))
{var inst_25414 = (state_25482[(29)]);var inst_25468 = (state_25482[(2)]);var inst_25469 = cljs.core.seq.call(null,inst_25414);var state_25482__$1 = (function (){var statearr_25547 = state_25482;(statearr_25547[(31)] = inst_25468);
return statearr_25547;
})();if(inst_25469)
{var statearr_25548_25612 = state_25482__$1;(statearr_25548_25612[(1)] = (42));
} else
{var statearr_25549_25613 = state_25482__$1;(statearr_25549_25613[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (16)))
{var inst_25383 = (state_25482[(7)]);var inst_25385 = cljs.core.chunked_seq_QMARK_.call(null,inst_25383);var state_25482__$1 = state_25482;if(inst_25385)
{var statearr_25550_25614 = state_25482__$1;(statearr_25550_25614[(1)] = (19));
} else
{var statearr_25551_25615 = state_25482__$1;(statearr_25551_25615[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (38)))
{var inst_25461 = (state_25482[(2)]);var state_25482__$1 = state_25482;var statearr_25552_25616 = state_25482__$1;(statearr_25552_25616[(2)] = inst_25461);
(statearr_25552_25616[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (30)))
{var state_25482__$1 = state_25482;var statearr_25553_25617 = state_25482__$1;(statearr_25553_25617[(2)] = null);
(statearr_25553_25617[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (10)))
{var inst_25364 = (state_25482[(13)]);var inst_25366 = (state_25482[(16)]);var inst_25372 = cljs.core._nth.call(null,inst_25364,inst_25366);var inst_25373 = cljs.core.nth.call(null,inst_25372,(0),null);var inst_25374 = cljs.core.nth.call(null,inst_25372,(1),null);var state_25482__$1 = (function (){var statearr_25554 = state_25482;(statearr_25554[(26)] = inst_25373);
return statearr_25554;
})();if(cljs.core.truth_(inst_25374))
{var statearr_25555_25618 = state_25482__$1;(statearr_25555_25618[(1)] = (13));
} else
{var statearr_25556_25619 = state_25482__$1;(statearr_25556_25619[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (18)))
{var inst_25407 = (state_25482[(2)]);var state_25482__$1 = state_25482;var statearr_25557_25620 = state_25482__$1;(statearr_25557_25620[(2)] = inst_25407);
(statearr_25557_25620[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (42)))
{var state_25482__$1 = state_25482;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25482__$1,(45),dchan);
} else
{if((state_val_25483 === (37)))
{var inst_25441 = (state_25482[(25)]);var inst_25450 = (state_25482[(23)]);var inst_25354 = (state_25482[(12)]);var inst_25450__$1 = cljs.core.first.call(null,inst_25441);var inst_25451 = cljs.core.async.put_BANG_.call(null,inst_25450__$1,inst_25354,done);var state_25482__$1 = (function (){var statearr_25558 = state_25482;(statearr_25558[(23)] = inst_25450__$1);
return statearr_25558;
})();if(cljs.core.truth_(inst_25451))
{var statearr_25559_25621 = state_25482__$1;(statearr_25559_25621[(1)] = (39));
} else
{var statearr_25560_25622 = state_25482__$1;(statearr_25560_25622[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25483 === (8)))
{var inst_25366 = (state_25482[(16)]);var inst_25365 = (state_25482[(17)]);var inst_25368 = (inst_25366 < inst_25365);var inst_25369 = inst_25368;var state_25482__$1 = state_25482;if(cljs.core.truth_(inst_25369))
{var statearr_25561_25623 = state_25482__$1;(statearr_25561_25623[(1)] = (10));
} else
{var statearr_25562_25624 = state_25482__$1;(statearr_25562_25624[(1)] = (11));
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
});})(c__11297__auto___25570,cs,m,dchan,dctr,done))
;return ((function (switch__11241__auto__,c__11297__auto___25570,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_25566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25566[(0)] = state_machine__11242__auto__);
(statearr_25566[(1)] = (1));
return statearr_25566;
});
var state_machine__11242__auto____1 = (function (state_25482){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_25482);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e25567){if((e25567 instanceof Object))
{var ex__11245__auto__ = e25567;var statearr_25568_25625 = state_25482;(statearr_25568_25625[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25482);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25567;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25626 = state_25482;
state_25482 = G__25626;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_25482){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_25482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___25570,cs,m,dchan,dctr,done))
})();var state__11299__auto__ = (function (){var statearr_25569 = f__11298__auto__.call(null);(statearr_25569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___25570);
return statearr_25569;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___25570,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj25628 = {};return obj25628;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25629){var map__25634 = p__25629;var map__25634__$1 = ((cljs.core.seq_QMARK_.call(null,map__25634))?cljs.core.apply.call(null,cljs.core.hash_map,map__25634):map__25634);var opts = map__25634__$1;var statearr_25635_25638 = state;(statearr_25635_25638[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__25634,map__25634__$1,opts){
return (function (val){var statearr_25636_25639 = state;(statearr_25636_25639[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25634,map__25634__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_25637_25640 = state;(statearr_25637_25640[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25629 = null;if (arguments.length > 3) {
  p__25629 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25629);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25641){
var state = cljs.core.first(arglist__25641);
arglist__25641 = cljs.core.next(arglist__25641);
var cont_block = cljs.core.first(arglist__25641);
arglist__25641 = cljs.core.next(arglist__25641);
var ports = cljs.core.first(arglist__25641);
var p__25629 = cljs.core.rest(arglist__25641);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25629);
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
;var m = (function (){if(typeof cljs.core.async.t25761 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25761 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25762){
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
this.meta25762 = meta25762;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25761.cljs$lang$type = true;
cljs.core.async.t25761.cljs$lang$ctorStr = "cljs.core.async/t25761";
cljs.core.async.t25761.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25761");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25761.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25761.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25761.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25761.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25761.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25761.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25761.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25761.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25761.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25763){var self__ = this;
var _25763__$1 = this;return self__.meta25762;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25763,meta25762__$1){var self__ = this;
var _25763__$1 = this;return (new cljs.core.async.t25761(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25762__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25761 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25761(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25762){return (new cljs.core.async.t25761(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25762));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25761(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11297__auto___25880 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___25880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___25880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25833){var state_val_25834 = (state_25833[(1)]);if((state_val_25834 === (7)))
{var inst_25777 = (state_25833[(7)]);var inst_25782 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25777);var state_25833__$1 = state_25833;var statearr_25835_25881 = state_25833__$1;(statearr_25835_25881[(2)] = inst_25782);
(statearr_25835_25881[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (20)))
{var inst_25792 = (state_25833[(8)]);var state_25833__$1 = state_25833;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25833__$1,(23),out,inst_25792);
} else
{if((state_val_25834 === (1)))
{var inst_25767 = (state_25833[(9)]);var inst_25767__$1 = calc_state.call(null);var inst_25768 = cljs.core.seq_QMARK_.call(null,inst_25767__$1);var state_25833__$1 = (function (){var statearr_25836 = state_25833;(statearr_25836[(9)] = inst_25767__$1);
return statearr_25836;
})();if(inst_25768)
{var statearr_25837_25882 = state_25833__$1;(statearr_25837_25882[(1)] = (2));
} else
{var statearr_25838_25883 = state_25833__$1;(statearr_25838_25883[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (24)))
{var inst_25785 = (state_25833[(10)]);var inst_25777 = inst_25785;var state_25833__$1 = (function (){var statearr_25839 = state_25833;(statearr_25839[(7)] = inst_25777);
return statearr_25839;
})();var statearr_25840_25884 = state_25833__$1;(statearr_25840_25884[(2)] = null);
(statearr_25840_25884[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (4)))
{var inst_25767 = (state_25833[(9)]);var inst_25773 = (state_25833[(2)]);var inst_25774 = cljs.core.get.call(null,inst_25773,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25775 = cljs.core.get.call(null,inst_25773,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25776 = cljs.core.get.call(null,inst_25773,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_25777 = inst_25767;var state_25833__$1 = (function (){var statearr_25841 = state_25833;(statearr_25841[(7)] = inst_25777);
(statearr_25841[(11)] = inst_25775);
(statearr_25841[(12)] = inst_25774);
(statearr_25841[(13)] = inst_25776);
return statearr_25841;
})();var statearr_25842_25885 = state_25833__$1;(statearr_25842_25885[(2)] = null);
(statearr_25842_25885[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (15)))
{var state_25833__$1 = state_25833;var statearr_25843_25886 = state_25833__$1;(statearr_25843_25886[(2)] = null);
(statearr_25843_25886[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (21)))
{var inst_25785 = (state_25833[(10)]);var inst_25777 = inst_25785;var state_25833__$1 = (function (){var statearr_25844 = state_25833;(statearr_25844[(7)] = inst_25777);
return statearr_25844;
})();var statearr_25845_25887 = state_25833__$1;(statearr_25845_25887[(2)] = null);
(statearr_25845_25887[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (13)))
{var inst_25829 = (state_25833[(2)]);var state_25833__$1 = state_25833;var statearr_25846_25888 = state_25833__$1;(statearr_25846_25888[(2)] = inst_25829);
(statearr_25846_25888[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (22)))
{var inst_25827 = (state_25833[(2)]);var state_25833__$1 = state_25833;var statearr_25847_25889 = state_25833__$1;(statearr_25847_25889[(2)] = inst_25827);
(statearr_25847_25889[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (6)))
{var inst_25831 = (state_25833[(2)]);var state_25833__$1 = state_25833;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25833__$1,inst_25831);
} else
{if((state_val_25834 === (25)))
{var state_25833__$1 = state_25833;var statearr_25848_25890 = state_25833__$1;(statearr_25848_25890[(2)] = null);
(statearr_25848_25890[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (17)))
{var inst_25807 = (state_25833[(14)]);var state_25833__$1 = state_25833;var statearr_25849_25891 = state_25833__$1;(statearr_25849_25891[(2)] = inst_25807);
(statearr_25849_25891[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (3)))
{var inst_25767 = (state_25833[(9)]);var state_25833__$1 = state_25833;var statearr_25850_25892 = state_25833__$1;(statearr_25850_25892[(2)] = inst_25767);
(statearr_25850_25892[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (12)))
{var inst_25807 = (state_25833[(14)]);var inst_25788 = (state_25833[(15)]);var inst_25793 = (state_25833[(16)]);var inst_25807__$1 = inst_25788.call(null,inst_25793);var state_25833__$1 = (function (){var statearr_25851 = state_25833;(statearr_25851[(14)] = inst_25807__$1);
return statearr_25851;
})();if(cljs.core.truth_(inst_25807__$1))
{var statearr_25852_25893 = state_25833__$1;(statearr_25852_25893[(1)] = (17));
} else
{var statearr_25853_25894 = state_25833__$1;(statearr_25853_25894[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (2)))
{var inst_25767 = (state_25833[(9)]);var inst_25770 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25767);var state_25833__$1 = state_25833;var statearr_25854_25895 = state_25833__$1;(statearr_25854_25895[(2)] = inst_25770);
(statearr_25854_25895[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (23)))
{var inst_25818 = (state_25833[(2)]);var state_25833__$1 = state_25833;if(cljs.core.truth_(inst_25818))
{var statearr_25855_25896 = state_25833__$1;(statearr_25855_25896[(1)] = (24));
} else
{var statearr_25856_25897 = state_25833__$1;(statearr_25856_25897[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (19)))
{var inst_25815 = (state_25833[(2)]);var state_25833__$1 = state_25833;if(cljs.core.truth_(inst_25815))
{var statearr_25857_25898 = state_25833__$1;(statearr_25857_25898[(1)] = (20));
} else
{var statearr_25858_25899 = state_25833__$1;(statearr_25858_25899[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (11)))
{var inst_25792 = (state_25833[(8)]);var inst_25798 = (inst_25792 == null);var state_25833__$1 = state_25833;if(cljs.core.truth_(inst_25798))
{var statearr_25859_25900 = state_25833__$1;(statearr_25859_25900[(1)] = (14));
} else
{var statearr_25860_25901 = state_25833__$1;(statearr_25860_25901[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (9)))
{var inst_25785 = (state_25833[(10)]);var inst_25785__$1 = (state_25833[(2)]);var inst_25786 = cljs.core.get.call(null,inst_25785__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25787 = cljs.core.get.call(null,inst_25785__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25788 = cljs.core.get.call(null,inst_25785__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_25833__$1 = (function (){var statearr_25861 = state_25833;(statearr_25861[(15)] = inst_25788);
(statearr_25861[(17)] = inst_25787);
(statearr_25861[(10)] = inst_25785__$1);
return statearr_25861;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_25833__$1,(10),inst_25786);
} else
{if((state_val_25834 === (5)))
{var inst_25777 = (state_25833[(7)]);var inst_25780 = cljs.core.seq_QMARK_.call(null,inst_25777);var state_25833__$1 = state_25833;if(inst_25780)
{var statearr_25862_25902 = state_25833__$1;(statearr_25862_25902[(1)] = (7));
} else
{var statearr_25863_25903 = state_25833__$1;(statearr_25863_25903[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (14)))
{var inst_25793 = (state_25833[(16)]);var inst_25800 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25793);var state_25833__$1 = state_25833;var statearr_25864_25904 = state_25833__$1;(statearr_25864_25904[(2)] = inst_25800);
(statearr_25864_25904[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (26)))
{var inst_25823 = (state_25833[(2)]);var state_25833__$1 = state_25833;var statearr_25865_25905 = state_25833__$1;(statearr_25865_25905[(2)] = inst_25823);
(statearr_25865_25905[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (16)))
{var inst_25803 = (state_25833[(2)]);var inst_25804 = calc_state.call(null);var inst_25777 = inst_25804;var state_25833__$1 = (function (){var statearr_25866 = state_25833;(statearr_25866[(7)] = inst_25777);
(statearr_25866[(18)] = inst_25803);
return statearr_25866;
})();var statearr_25867_25906 = state_25833__$1;(statearr_25867_25906[(2)] = null);
(statearr_25867_25906[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (10)))
{var inst_25793 = (state_25833[(16)]);var inst_25792 = (state_25833[(8)]);var inst_25791 = (state_25833[(2)]);var inst_25792__$1 = cljs.core.nth.call(null,inst_25791,(0),null);var inst_25793__$1 = cljs.core.nth.call(null,inst_25791,(1),null);var inst_25794 = (inst_25792__$1 == null);var inst_25795 = cljs.core._EQ_.call(null,inst_25793__$1,change);var inst_25796 = (inst_25794) || (inst_25795);var state_25833__$1 = (function (){var statearr_25868 = state_25833;(statearr_25868[(16)] = inst_25793__$1);
(statearr_25868[(8)] = inst_25792__$1);
return statearr_25868;
})();if(cljs.core.truth_(inst_25796))
{var statearr_25869_25907 = state_25833__$1;(statearr_25869_25907[(1)] = (11));
} else
{var statearr_25870_25908 = state_25833__$1;(statearr_25870_25908[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (18)))
{var inst_25788 = (state_25833[(15)]);var inst_25787 = (state_25833[(17)]);var inst_25793 = (state_25833[(16)]);var inst_25810 = cljs.core.empty_QMARK_.call(null,inst_25788);var inst_25811 = inst_25787.call(null,inst_25793);var inst_25812 = cljs.core.not.call(null,inst_25811);var inst_25813 = (inst_25810) && (inst_25812);var state_25833__$1 = state_25833;var statearr_25871_25909 = state_25833__$1;(statearr_25871_25909[(2)] = inst_25813);
(statearr_25871_25909[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (8)))
{var inst_25777 = (state_25833[(7)]);var state_25833__$1 = state_25833;var statearr_25872_25910 = state_25833__$1;(statearr_25872_25910[(2)] = inst_25777);
(statearr_25872_25910[(1)] = (9));
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
});})(c__11297__auto___25880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__11241__auto__,c__11297__auto___25880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_25876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25876[(0)] = state_machine__11242__auto__);
(statearr_25876[(1)] = (1));
return statearr_25876;
});
var state_machine__11242__auto____1 = (function (state_25833){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_25833);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e25877){if((e25877 instanceof Object))
{var ex__11245__auto__ = e25877;var statearr_25878_25911 = state_25833;(statearr_25878_25911[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25833);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25877;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25912 = state_25833;
state_25833 = G__25912;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_25833){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_25833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___25880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11299__auto__ = (function (){var statearr_25879 = f__11298__auto__.call(null);(statearr_25879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___25880);
return statearr_25879;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___25880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25914 = {};return obj25914;
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
return (function (p1__25915_SHARP_){if(cljs.core.truth_(p1__25915_SHARP_.call(null,topic)))
{return p1__25915_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__25915_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26038 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26038 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26039){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26039 = meta26039;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26038.cljs$lang$type = true;
cljs.core.async.t26038.cljs$lang$ctorStr = "cljs.core.async/t26038";
cljs.core.async.t26038.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26038");
});})(mults,ensure_mult))
;
cljs.core.async.t26038.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26038.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26038.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26038.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26038.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26038.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26038.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26038.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26040){var self__ = this;
var _26040__$1 = this;return self__.meta26039;
});})(mults,ensure_mult))
;
cljs.core.async.t26038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26040,meta26039__$1){var self__ = this;
var _26040__$1 = this;return (new cljs.core.async.t26038(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26039__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26038 = ((function (mults,ensure_mult){
return (function __GT_t26038(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26039){return (new cljs.core.async.t26038(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26039));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26038(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11297__auto___26160 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___26160,mults,ensure_mult,p){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___26160,mults,ensure_mult,p){
return (function (state_26112){var state_val_26113 = (state_26112[(1)]);if((state_val_26113 === (7)))
{var inst_26108 = (state_26112[(2)]);var state_26112__$1 = state_26112;var statearr_26114_26161 = state_26112__$1;(statearr_26114_26161[(2)] = inst_26108);
(statearr_26114_26161[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26113 === (20)))
{var state_26112__$1 = state_26112;var statearr_26115_26162 = state_26112__$1;(statearr_26115_26162[(2)] = null);
(statearr_26115_26162[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26113 === (1)))
{var state_26112__$1 = state_26112;var statearr_26116_26163 = state_26112__$1;(statearr_26116_26163[(2)] = null);
(statearr_26116_26163[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26113 === (24)))
{var inst_26091 = (state_26112[(7)]);var inst_26100 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26091);var state_26112__$1 = state_26112;var statearr_26117_26164 = state_26112__$1;(statearr_26117_26164[(2)] = inst_26100);
(statearr_26117_26164[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26113 === (4)))
{var inst_26043 = (state_26112[(8)]);var inst_26043__$1 = (state_26112[(2)]);var inst_26044 = (inst_26043__$1 == null);var state_26112__$1 = (function (){var statearr_26118 = state_26112;(statearr_26118[(8)] = inst_26043__$1);
return statearr_26118;
})();if(cljs.core.truth_(inst_26044))
{var statearr_26119_26165 = state_26112__$1;(statearr_26119_26165[(1)] = (5));
} else
{var statearr_26120_26166 = state_26112__$1;(statearr_26120_26166[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26113 === (15)))
{var inst_26085 = (state_26112[(2)]);var state_26112__$1 = state_26112;var statearr_26121_26167 = state_26112__$1;(statearr_26121_26167[(2)] = inst_26085);
(statearr_26121_26167[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26113 === (21)))
{var inst_26105 = (state_26112[(2)]);var state_26112__$1 = (function (){var statearr_26122 = state_26112;(statearr_26122[(9)] = inst_26105);
return statearr_26122;
})();var statearr_26123_26168 = state_26112__$1;(statearr_26123_26168[(2)] = null);
(statearr_26123_26168[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26113 === (13)))
{var inst_26067 = (state_26112[(10)]);var inst_26069 = cljs.core.chunked_seq_QMARK_.call(null,inst_26067);var state_26112__$1 = state_26112;if(inst_26069)
{var statearr_26124_26169 = state_26112__$1;(statearr_26124_26169[(1)] = (16));
} else
{var statearr_26125_26170 = state_26112__$1;(statearr_26125_26170[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26113 === (22)))
{var inst_26097 = (state_26112[(2)]);var state_26112__$1 = state_26112;if(cljs.core.truth_(inst_26097))
{var statearr_26126_26171 = state_26112__$1;(statearr_26126_26171[(1)] = (23));
} else
{var statearr_26127_26172 = state_26112__$1;(statearr_26127_26172[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26113 === (6)))
{var inst_26091 = (state_26112[(7)]);var inst_26043 = (state_26112[(8)]);var inst_26093 = (state_26112[(11)]);var inst_26091__$1 = topic_fn.call(null,inst_26043);var inst_26092 = cljs.core.deref.call(null,mults);var inst_26093__$1 = cljs.core.get.call(null,inst_26092,inst_26091__$1);var state_26112__$1 = (function (){var statearr_26128 = state_26112;(statearr_26128[(7)] = inst_26091__$1);
(statearr_26128[(11)] = inst_26093__$1);
return statearr_26128;
})();if(cljs.core.truth_(inst_26093__$1))
{var statearr_26129_26173 = state_26112__$1;(statearr_26129_26173[(1)] = (19));
} else
{var statearr_26130_26174 = state_26112__$1;(statearr_26130_26174[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26113 === (25)))
{var inst_26102 = (state_26112[(2)]);var state_26112__$1 = state_26112;var statearr_26131_26175 = state_26112__$1;(statearr_26131_26175[(2)] = inst_26102);
(statearr_26131_26175[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26113 === (17)))
{var inst_26067 = (state_26112[(10)]);var inst_26076 = cljs.core.first.call(null,inst_26067);var inst_26077 = cljs.core.async.muxch_STAR_.call(null,inst_26076);var inst_26078 = cljs.core.async.close_BANG_.call(null,inst_26077);var inst_26079 = cljs.core.next.call(null,inst_26067);var inst_26053 = inst_26079;var inst_26054 = null;var inst_26055 = (0);var inst_26056 = (0);var state_26112__$1 = (function (){var statearr_26132 = state_26112;(statearr_26132[(12)] = inst_26054);
(statearr_26132[(13)] = inst_26078);
(statearr_26132[(14)] = inst_26056);
(statearr_26132[(15)] = inst_26053);
(statearr_26132[(16)] = inst_26055);
return statearr_26132;
})();var statearr_26133_26176 = state_26112__$1;(statearr_26133_26176[(2)] = null);
(statearr_26133_26176[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26113 === (3)))
{var inst_26110 = (state_26112[(2)]);var state_26112__$1 = state_26112;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26112__$1,inst_26110);
} else
{if((state_val_26113 === (12)))
{var inst_26087 = (state_26112[(2)]);var state_26112__$1 = state_26112;var statearr_26134_26177 = state_26112__$1;(statearr_26134_26177[(2)] = inst_26087);
(statearr_26134_26177[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26113 === (2)))
{var state_26112__$1 = state_26112;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26112__$1,(4),ch);
} else
{if((state_val_26113 === (23)))
{var state_26112__$1 = state_26112;var statearr_26135_26178 = state_26112__$1;(statearr_26135_26178[(2)] = null);
(statearr_26135_26178[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26113 === (19)))
{var inst_26043 = (state_26112[(8)]);var inst_26093 = (state_26112[(11)]);var inst_26095 = cljs.core.async.muxch_STAR_.call(null,inst_26093);var state_26112__$1 = state_26112;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26112__$1,(22),inst_26095,inst_26043);
} else
{if((state_val_26113 === (11)))
{var inst_26067 = (state_26112[(10)]);var inst_26053 = (state_26112[(15)]);var inst_26067__$1 = cljs.core.seq.call(null,inst_26053);var state_26112__$1 = (function (){var statearr_26136 = state_26112;(statearr_26136[(10)] = inst_26067__$1);
return statearr_26136;
})();if(inst_26067__$1)
{var statearr_26137_26179 = state_26112__$1;(statearr_26137_26179[(1)] = (13));
} else
{var statearr_26138_26180 = state_26112__$1;(statearr_26138_26180[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26113 === (9)))
{var inst_26089 = (state_26112[(2)]);var state_26112__$1 = state_26112;var statearr_26139_26181 = state_26112__$1;(statearr_26139_26181[(2)] = inst_26089);
(statearr_26139_26181[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26113 === (5)))
{var inst_26050 = cljs.core.deref.call(null,mults);var inst_26051 = cljs.core.vals.call(null,inst_26050);var inst_26052 = cljs.core.seq.call(null,inst_26051);var inst_26053 = inst_26052;var inst_26054 = null;var inst_26055 = (0);var inst_26056 = (0);var state_26112__$1 = (function (){var statearr_26140 = state_26112;(statearr_26140[(12)] = inst_26054);
(statearr_26140[(14)] = inst_26056);
(statearr_26140[(15)] = inst_26053);
(statearr_26140[(16)] = inst_26055);
return statearr_26140;
})();var statearr_26141_26182 = state_26112__$1;(statearr_26141_26182[(2)] = null);
(statearr_26141_26182[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26113 === (14)))
{var state_26112__$1 = state_26112;var statearr_26145_26183 = state_26112__$1;(statearr_26145_26183[(2)] = null);
(statearr_26145_26183[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26113 === (16)))
{var inst_26067 = (state_26112[(10)]);var inst_26071 = cljs.core.chunk_first.call(null,inst_26067);var inst_26072 = cljs.core.chunk_rest.call(null,inst_26067);var inst_26073 = cljs.core.count.call(null,inst_26071);var inst_26053 = inst_26072;var inst_26054 = inst_26071;var inst_26055 = inst_26073;var inst_26056 = (0);var state_26112__$1 = (function (){var statearr_26146 = state_26112;(statearr_26146[(12)] = inst_26054);
(statearr_26146[(14)] = inst_26056);
(statearr_26146[(15)] = inst_26053);
(statearr_26146[(16)] = inst_26055);
return statearr_26146;
})();var statearr_26147_26184 = state_26112__$1;(statearr_26147_26184[(2)] = null);
(statearr_26147_26184[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26113 === (10)))
{var inst_26054 = (state_26112[(12)]);var inst_26056 = (state_26112[(14)]);var inst_26053 = (state_26112[(15)]);var inst_26055 = (state_26112[(16)]);var inst_26061 = cljs.core._nth.call(null,inst_26054,inst_26056);var inst_26062 = cljs.core.async.muxch_STAR_.call(null,inst_26061);var inst_26063 = cljs.core.async.close_BANG_.call(null,inst_26062);var inst_26064 = (inst_26056 + (1));var tmp26142 = inst_26054;var tmp26143 = inst_26053;var tmp26144 = inst_26055;var inst_26053__$1 = tmp26143;var inst_26054__$1 = tmp26142;var inst_26055__$1 = tmp26144;var inst_26056__$1 = inst_26064;var state_26112__$1 = (function (){var statearr_26148 = state_26112;(statearr_26148[(12)] = inst_26054__$1);
(statearr_26148[(14)] = inst_26056__$1);
(statearr_26148[(15)] = inst_26053__$1);
(statearr_26148[(16)] = inst_26055__$1);
(statearr_26148[(17)] = inst_26063);
return statearr_26148;
})();var statearr_26149_26185 = state_26112__$1;(statearr_26149_26185[(2)] = null);
(statearr_26149_26185[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26113 === (18)))
{var inst_26082 = (state_26112[(2)]);var state_26112__$1 = state_26112;var statearr_26150_26186 = state_26112__$1;(statearr_26150_26186[(2)] = inst_26082);
(statearr_26150_26186[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26113 === (8)))
{var inst_26056 = (state_26112[(14)]);var inst_26055 = (state_26112[(16)]);var inst_26058 = (inst_26056 < inst_26055);var inst_26059 = inst_26058;var state_26112__$1 = state_26112;if(cljs.core.truth_(inst_26059))
{var statearr_26151_26187 = state_26112__$1;(statearr_26151_26187[(1)] = (10));
} else
{var statearr_26152_26188 = state_26112__$1;(statearr_26152_26188[(1)] = (11));
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
});})(c__11297__auto___26160,mults,ensure_mult,p))
;return ((function (switch__11241__auto__,c__11297__auto___26160,mults,ensure_mult,p){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_26156 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26156[(0)] = state_machine__11242__auto__);
(statearr_26156[(1)] = (1));
return statearr_26156;
});
var state_machine__11242__auto____1 = (function (state_26112){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_26112);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e26157){if((e26157 instanceof Object))
{var ex__11245__auto__ = e26157;var statearr_26158_26189 = state_26112;(statearr_26158_26189[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26112);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26157;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26190 = state_26112;
state_26112 = G__26190;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_26112){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_26112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___26160,mults,ensure_mult,p))
})();var state__11299__auto__ = (function (){var statearr_26159 = f__11298__auto__.call(null);(statearr_26159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___26160);
return statearr_26159;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___26160,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__11297__auto___26327 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___26327,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___26327,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26297){var state_val_26298 = (state_26297[(1)]);if((state_val_26298 === (7)))
{var state_26297__$1 = state_26297;var statearr_26299_26328 = state_26297__$1;(statearr_26299_26328[(2)] = null);
(statearr_26299_26328[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26298 === (1)))
{var state_26297__$1 = state_26297;var statearr_26300_26329 = state_26297__$1;(statearr_26300_26329[(2)] = null);
(statearr_26300_26329[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26298 === (4)))
{var inst_26261 = (state_26297[(7)]);var inst_26263 = (inst_26261 < cnt);var state_26297__$1 = state_26297;if(cljs.core.truth_(inst_26263))
{var statearr_26301_26330 = state_26297__$1;(statearr_26301_26330[(1)] = (6));
} else
{var statearr_26302_26331 = state_26297__$1;(statearr_26302_26331[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26298 === (15)))
{var inst_26293 = (state_26297[(2)]);var state_26297__$1 = state_26297;var statearr_26303_26332 = state_26297__$1;(statearr_26303_26332[(2)] = inst_26293);
(statearr_26303_26332[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26298 === (13)))
{var inst_26286 = cljs.core.async.close_BANG_.call(null,out);var state_26297__$1 = state_26297;var statearr_26304_26333 = state_26297__$1;(statearr_26304_26333[(2)] = inst_26286);
(statearr_26304_26333[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26298 === (6)))
{var state_26297__$1 = state_26297;var statearr_26305_26334 = state_26297__$1;(statearr_26305_26334[(2)] = null);
(statearr_26305_26334[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26298 === (3)))
{var inst_26295 = (state_26297[(2)]);var state_26297__$1 = state_26297;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26297__$1,inst_26295);
} else
{if((state_val_26298 === (12)))
{var inst_26283 = (state_26297[(8)]);var inst_26283__$1 = (state_26297[(2)]);var inst_26284 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26283__$1);var state_26297__$1 = (function (){var statearr_26306 = state_26297;(statearr_26306[(8)] = inst_26283__$1);
return statearr_26306;
})();if(cljs.core.truth_(inst_26284))
{var statearr_26307_26335 = state_26297__$1;(statearr_26307_26335[(1)] = (13));
} else
{var statearr_26308_26336 = state_26297__$1;(statearr_26308_26336[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26298 === (2)))
{var inst_26260 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26261 = (0);var state_26297__$1 = (function (){var statearr_26309 = state_26297;(statearr_26309[(7)] = inst_26261);
(statearr_26309[(9)] = inst_26260);
return statearr_26309;
})();var statearr_26310_26337 = state_26297__$1;(statearr_26310_26337[(2)] = null);
(statearr_26310_26337[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26298 === (11)))
{var inst_26261 = (state_26297[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26297,(10),Object,null,(9));var inst_26270 = chs__$1.call(null,inst_26261);var inst_26271 = done.call(null,inst_26261);var inst_26272 = cljs.core.async.take_BANG_.call(null,inst_26270,inst_26271);var state_26297__$1 = state_26297;var statearr_26311_26338 = state_26297__$1;(statearr_26311_26338[(2)] = inst_26272);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26297__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26298 === (9)))
{var inst_26261 = (state_26297[(7)]);var inst_26274 = (state_26297[(2)]);var inst_26275 = (inst_26261 + (1));var inst_26261__$1 = inst_26275;var state_26297__$1 = (function (){var statearr_26312 = state_26297;(statearr_26312[(7)] = inst_26261__$1);
(statearr_26312[(10)] = inst_26274);
return statearr_26312;
})();var statearr_26313_26339 = state_26297__$1;(statearr_26313_26339[(2)] = null);
(statearr_26313_26339[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26298 === (5)))
{var inst_26281 = (state_26297[(2)]);var state_26297__$1 = (function (){var statearr_26314 = state_26297;(statearr_26314[(11)] = inst_26281);
return statearr_26314;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26297__$1,(12),dchan);
} else
{if((state_val_26298 === (14)))
{var inst_26283 = (state_26297[(8)]);var inst_26288 = cljs.core.apply.call(null,f,inst_26283);var state_26297__$1 = state_26297;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26297__$1,(16),out,inst_26288);
} else
{if((state_val_26298 === (16)))
{var inst_26290 = (state_26297[(2)]);var state_26297__$1 = (function (){var statearr_26315 = state_26297;(statearr_26315[(12)] = inst_26290);
return statearr_26315;
})();var statearr_26316_26340 = state_26297__$1;(statearr_26316_26340[(2)] = null);
(statearr_26316_26340[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26298 === (10)))
{var inst_26265 = (state_26297[(2)]);var inst_26266 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26297__$1 = (function (){var statearr_26317 = state_26297;(statearr_26317[(13)] = inst_26265);
return statearr_26317;
})();var statearr_26318_26341 = state_26297__$1;(statearr_26318_26341[(2)] = inst_26266);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26297__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26298 === (8)))
{var inst_26279 = (state_26297[(2)]);var state_26297__$1 = state_26297;var statearr_26319_26342 = state_26297__$1;(statearr_26319_26342[(2)] = inst_26279);
(statearr_26319_26342[(1)] = (5));
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
});})(c__11297__auto___26327,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__11241__auto__,c__11297__auto___26327,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_26323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26323[(0)] = state_machine__11242__auto__);
(statearr_26323[(1)] = (1));
return statearr_26323;
});
var state_machine__11242__auto____1 = (function (state_26297){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_26297);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e26324){if((e26324 instanceof Object))
{var ex__11245__auto__ = e26324;var statearr_26325_26343 = state_26297;(statearr_26325_26343[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26297);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26324;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26344 = state_26297;
state_26297 = G__26344;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_26297){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_26297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___26327,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11299__auto__ = (function (){var statearr_26326 = f__11298__auto__.call(null);(statearr_26326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___26327);
return statearr_26326;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___26327,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11297__auto___26452 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___26452,out){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___26452,out){
return (function (state_26428){var state_val_26429 = (state_26428[(1)]);if((state_val_26429 === (7)))
{var inst_26408 = (state_26428[(7)]);var inst_26407 = (state_26428[(8)]);var inst_26407__$1 = (state_26428[(2)]);var inst_26408__$1 = cljs.core.nth.call(null,inst_26407__$1,(0),null);var inst_26409 = cljs.core.nth.call(null,inst_26407__$1,(1),null);var inst_26410 = (inst_26408__$1 == null);var state_26428__$1 = (function (){var statearr_26430 = state_26428;(statearr_26430[(7)] = inst_26408__$1);
(statearr_26430[(8)] = inst_26407__$1);
(statearr_26430[(9)] = inst_26409);
return statearr_26430;
})();if(cljs.core.truth_(inst_26410))
{var statearr_26431_26453 = state_26428__$1;(statearr_26431_26453[(1)] = (8));
} else
{var statearr_26432_26454 = state_26428__$1;(statearr_26432_26454[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (1)))
{var inst_26399 = cljs.core.vec.call(null,chs);var inst_26400 = inst_26399;var state_26428__$1 = (function (){var statearr_26433 = state_26428;(statearr_26433[(10)] = inst_26400);
return statearr_26433;
})();var statearr_26434_26455 = state_26428__$1;(statearr_26434_26455[(2)] = null);
(statearr_26434_26455[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (4)))
{var inst_26400 = (state_26428[(10)]);var state_26428__$1 = state_26428;return cljs.core.async.ioc_alts_BANG_.call(null,state_26428__$1,(7),inst_26400);
} else
{if((state_val_26429 === (6)))
{var inst_26424 = (state_26428[(2)]);var state_26428__$1 = state_26428;var statearr_26435_26456 = state_26428__$1;(statearr_26435_26456[(2)] = inst_26424);
(statearr_26435_26456[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (3)))
{var inst_26426 = (state_26428[(2)]);var state_26428__$1 = state_26428;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26428__$1,inst_26426);
} else
{if((state_val_26429 === (2)))
{var inst_26400 = (state_26428[(10)]);var inst_26402 = cljs.core.count.call(null,inst_26400);var inst_26403 = (inst_26402 > (0));var state_26428__$1 = state_26428;if(cljs.core.truth_(inst_26403))
{var statearr_26437_26457 = state_26428__$1;(statearr_26437_26457[(1)] = (4));
} else
{var statearr_26438_26458 = state_26428__$1;(statearr_26438_26458[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (11)))
{var inst_26400 = (state_26428[(10)]);var inst_26417 = (state_26428[(2)]);var tmp26436 = inst_26400;var inst_26400__$1 = tmp26436;var state_26428__$1 = (function (){var statearr_26439 = state_26428;(statearr_26439[(10)] = inst_26400__$1);
(statearr_26439[(11)] = inst_26417);
return statearr_26439;
})();var statearr_26440_26459 = state_26428__$1;(statearr_26440_26459[(2)] = null);
(statearr_26440_26459[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (9)))
{var inst_26408 = (state_26428[(7)]);var state_26428__$1 = state_26428;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26428__$1,(11),out,inst_26408);
} else
{if((state_val_26429 === (5)))
{var inst_26422 = cljs.core.async.close_BANG_.call(null,out);var state_26428__$1 = state_26428;var statearr_26441_26460 = state_26428__$1;(statearr_26441_26460[(2)] = inst_26422);
(statearr_26441_26460[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (10)))
{var inst_26420 = (state_26428[(2)]);var state_26428__$1 = state_26428;var statearr_26442_26461 = state_26428__$1;(statearr_26442_26461[(2)] = inst_26420);
(statearr_26442_26461[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26429 === (8)))
{var inst_26408 = (state_26428[(7)]);var inst_26400 = (state_26428[(10)]);var inst_26407 = (state_26428[(8)]);var inst_26409 = (state_26428[(9)]);var inst_26412 = (function (){var c = inst_26409;var v = inst_26408;var vec__26405 = inst_26407;var cs = inst_26400;return ((function (c,v,vec__26405,cs,inst_26408,inst_26400,inst_26407,inst_26409,state_val_26429,c__11297__auto___26452,out){
return (function (p1__26345_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__26345_SHARP_);
});
;})(c,v,vec__26405,cs,inst_26408,inst_26400,inst_26407,inst_26409,state_val_26429,c__11297__auto___26452,out))
})();var inst_26413 = cljs.core.filterv.call(null,inst_26412,inst_26400);var inst_26400__$1 = inst_26413;var state_26428__$1 = (function (){var statearr_26443 = state_26428;(statearr_26443[(10)] = inst_26400__$1);
return statearr_26443;
})();var statearr_26444_26462 = state_26428__$1;(statearr_26444_26462[(2)] = null);
(statearr_26444_26462[(1)] = (2));
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
});})(c__11297__auto___26452,out))
;return ((function (switch__11241__auto__,c__11297__auto___26452,out){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_26448 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26448[(0)] = state_machine__11242__auto__);
(statearr_26448[(1)] = (1));
return statearr_26448;
});
var state_machine__11242__auto____1 = (function (state_26428){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_26428);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e26449){if((e26449 instanceof Object))
{var ex__11245__auto__ = e26449;var statearr_26450_26463 = state_26428;(statearr_26450_26463[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26428);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26449;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26464 = state_26428;
state_26428 = G__26464;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_26428){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_26428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___26452,out))
})();var state__11299__auto__ = (function (){var statearr_26451 = f__11298__auto__.call(null);(statearr_26451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___26452);
return statearr_26451;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___26452,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11297__auto___26557 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___26557,out){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___26557,out){
return (function (state_26534){var state_val_26535 = (state_26534[(1)]);if((state_val_26535 === (7)))
{var inst_26516 = (state_26534[(7)]);var inst_26516__$1 = (state_26534[(2)]);var inst_26517 = (inst_26516__$1 == null);var inst_26518 = cljs.core.not.call(null,inst_26517);var state_26534__$1 = (function (){var statearr_26536 = state_26534;(statearr_26536[(7)] = inst_26516__$1);
return statearr_26536;
})();if(inst_26518)
{var statearr_26537_26558 = state_26534__$1;(statearr_26537_26558[(1)] = (8));
} else
{var statearr_26538_26559 = state_26534__$1;(statearr_26538_26559[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26535 === (1)))
{var inst_26511 = (0);var state_26534__$1 = (function (){var statearr_26539 = state_26534;(statearr_26539[(8)] = inst_26511);
return statearr_26539;
})();var statearr_26540_26560 = state_26534__$1;(statearr_26540_26560[(2)] = null);
(statearr_26540_26560[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26535 === (4)))
{var state_26534__$1 = state_26534;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26534__$1,(7),ch);
} else
{if((state_val_26535 === (6)))
{var inst_26529 = (state_26534[(2)]);var state_26534__$1 = state_26534;var statearr_26541_26561 = state_26534__$1;(statearr_26541_26561[(2)] = inst_26529);
(statearr_26541_26561[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26535 === (3)))
{var inst_26531 = (state_26534[(2)]);var inst_26532 = cljs.core.async.close_BANG_.call(null,out);var state_26534__$1 = (function (){var statearr_26542 = state_26534;(statearr_26542[(9)] = inst_26531);
return statearr_26542;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26534__$1,inst_26532);
} else
{if((state_val_26535 === (2)))
{var inst_26511 = (state_26534[(8)]);var inst_26513 = (inst_26511 < n);var state_26534__$1 = state_26534;if(cljs.core.truth_(inst_26513))
{var statearr_26543_26562 = state_26534__$1;(statearr_26543_26562[(1)] = (4));
} else
{var statearr_26544_26563 = state_26534__$1;(statearr_26544_26563[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26535 === (11)))
{var inst_26511 = (state_26534[(8)]);var inst_26521 = (state_26534[(2)]);var inst_26522 = (inst_26511 + (1));var inst_26511__$1 = inst_26522;var state_26534__$1 = (function (){var statearr_26545 = state_26534;(statearr_26545[(8)] = inst_26511__$1);
(statearr_26545[(10)] = inst_26521);
return statearr_26545;
})();var statearr_26546_26564 = state_26534__$1;(statearr_26546_26564[(2)] = null);
(statearr_26546_26564[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26535 === (9)))
{var state_26534__$1 = state_26534;var statearr_26547_26565 = state_26534__$1;(statearr_26547_26565[(2)] = null);
(statearr_26547_26565[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26535 === (5)))
{var state_26534__$1 = state_26534;var statearr_26548_26566 = state_26534__$1;(statearr_26548_26566[(2)] = null);
(statearr_26548_26566[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26535 === (10)))
{var inst_26526 = (state_26534[(2)]);var state_26534__$1 = state_26534;var statearr_26549_26567 = state_26534__$1;(statearr_26549_26567[(2)] = inst_26526);
(statearr_26549_26567[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26535 === (8)))
{var inst_26516 = (state_26534[(7)]);var state_26534__$1 = state_26534;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26534__$1,(11),out,inst_26516);
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
});})(c__11297__auto___26557,out))
;return ((function (switch__11241__auto__,c__11297__auto___26557,out){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_26553 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26553[(0)] = state_machine__11242__auto__);
(statearr_26553[(1)] = (1));
return statearr_26553;
});
var state_machine__11242__auto____1 = (function (state_26534){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_26534);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e26554){if((e26554 instanceof Object))
{var ex__11245__auto__ = e26554;var statearr_26555_26568 = state_26534;(statearr_26555_26568[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26534);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26554;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26569 = state_26534;
state_26534 = G__26569;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_26534){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_26534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___26557,out))
})();var state__11299__auto__ = (function (){var statearr_26556 = f__11298__auto__.call(null);(statearr_26556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___26557);
return statearr_26556;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___26557,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26577 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26577 = (function (ch,f,map_LT_,meta26578){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26578 = meta26578;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26577.cljs$lang$type = true;
cljs.core.async.t26577.cljs$lang$ctorStr = "cljs.core.async/t26577";
cljs.core.async.t26577.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26577");
});
cljs.core.async.t26577.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26577.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t26577.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26577.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t26580 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26580 = (function (fn1,_,meta26578,ch,f,map_LT_,meta26581){
this.fn1 = fn1;
this._ = _;
this.meta26578 = meta26578;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26581 = meta26581;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26580.cljs$lang$type = true;
cljs.core.async.t26580.cljs$lang$ctorStr = "cljs.core.async/t26580";
cljs.core.async.t26580.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26580");
});})(___$1))
;
cljs.core.async.t26580.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26580.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t26580.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__26570_SHARP_){return f1.call(null,(((p1__26570_SHARP_ == null))?null:self__.f.call(null,p1__26570_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t26580.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26582){var self__ = this;
var _26582__$1 = this;return self__.meta26581;
});})(___$1))
;
cljs.core.async.t26580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26582,meta26581__$1){var self__ = this;
var _26582__$1 = this;return (new cljs.core.async.t26580(self__.fn1,self__._,self__.meta26578,self__.ch,self__.f,self__.map_LT_,meta26581__$1));
});})(___$1))
;
cljs.core.async.__GT_t26580 = ((function (___$1){
return (function __GT_t26580(fn1__$1,___$2,meta26578__$1,ch__$2,f__$2,map_LT___$2,meta26581){return (new cljs.core.async.t26580(fn1__$1,___$2,meta26578__$1,ch__$2,f__$2,map_LT___$2,meta26581));
});})(___$1))
;
}
return (new cljs.core.async.t26580(fn1,___$1,self__.meta26578,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t26577.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26577.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26577.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26579){var self__ = this;
var _26579__$1 = this;return self__.meta26578;
});
cljs.core.async.t26577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26579,meta26578__$1){var self__ = this;
var _26579__$1 = this;return (new cljs.core.async.t26577(self__.ch,self__.f,self__.map_LT_,meta26578__$1));
});
cljs.core.async.__GT_t26577 = (function __GT_t26577(ch__$1,f__$1,map_LT___$1,meta26578){return (new cljs.core.async.t26577(ch__$1,f__$1,map_LT___$1,meta26578));
});
}
return (new cljs.core.async.t26577(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26586 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26586 = (function (ch,f,map_GT_,meta26587){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26587 = meta26587;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26586.cljs$lang$type = true;
cljs.core.async.t26586.cljs$lang$ctorStr = "cljs.core.async/t26586";
cljs.core.async.t26586.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26586");
});
cljs.core.async.t26586.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26586.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t26586.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26586.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26586.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26586.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26588){var self__ = this;
var _26588__$1 = this;return self__.meta26587;
});
cljs.core.async.t26586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26588,meta26587__$1){var self__ = this;
var _26588__$1 = this;return (new cljs.core.async.t26586(self__.ch,self__.f,self__.map_GT_,meta26587__$1));
});
cljs.core.async.__GT_t26586 = (function __GT_t26586(ch__$1,f__$1,map_GT___$1,meta26587){return (new cljs.core.async.t26586(ch__$1,f__$1,map_GT___$1,meta26587));
});
}
return (new cljs.core.async.t26586(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26592 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26592 = (function (ch,p,filter_GT_,meta26593){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26593 = meta26593;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26592.cljs$lang$type = true;
cljs.core.async.t26592.cljs$lang$ctorStr = "cljs.core.async/t26592";
cljs.core.async.t26592.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t26592");
});
cljs.core.async.t26592.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26592.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t26592.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26592.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26592.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26592.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26592.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26594){var self__ = this;
var _26594__$1 = this;return self__.meta26593;
});
cljs.core.async.t26592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26594,meta26593__$1){var self__ = this;
var _26594__$1 = this;return (new cljs.core.async.t26592(self__.ch,self__.p,self__.filter_GT_,meta26593__$1));
});
cljs.core.async.__GT_t26592 = (function __GT_t26592(ch__$1,p__$1,filter_GT___$1,meta26593){return (new cljs.core.async.t26592(ch__$1,p__$1,filter_GT___$1,meta26593));
});
}
return (new cljs.core.async.t26592(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11297__auto___26677 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___26677,out){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___26677,out){
return (function (state_26656){var state_val_26657 = (state_26656[(1)]);if((state_val_26657 === (7)))
{var inst_26652 = (state_26656[(2)]);var state_26656__$1 = state_26656;var statearr_26658_26678 = state_26656__$1;(statearr_26658_26678[(2)] = inst_26652);
(statearr_26658_26678[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26657 === (1)))
{var state_26656__$1 = state_26656;var statearr_26659_26679 = state_26656__$1;(statearr_26659_26679[(2)] = null);
(statearr_26659_26679[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26657 === (4)))
{var inst_26638 = (state_26656[(7)]);var inst_26638__$1 = (state_26656[(2)]);var inst_26639 = (inst_26638__$1 == null);var state_26656__$1 = (function (){var statearr_26660 = state_26656;(statearr_26660[(7)] = inst_26638__$1);
return statearr_26660;
})();if(cljs.core.truth_(inst_26639))
{var statearr_26661_26680 = state_26656__$1;(statearr_26661_26680[(1)] = (5));
} else
{var statearr_26662_26681 = state_26656__$1;(statearr_26662_26681[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26657 === (6)))
{var inst_26638 = (state_26656[(7)]);var inst_26643 = p.call(null,inst_26638);var state_26656__$1 = state_26656;if(cljs.core.truth_(inst_26643))
{var statearr_26663_26682 = state_26656__$1;(statearr_26663_26682[(1)] = (8));
} else
{var statearr_26664_26683 = state_26656__$1;(statearr_26664_26683[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26657 === (3)))
{var inst_26654 = (state_26656[(2)]);var state_26656__$1 = state_26656;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26656__$1,inst_26654);
} else
{if((state_val_26657 === (2)))
{var state_26656__$1 = state_26656;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26656__$1,(4),ch);
} else
{if((state_val_26657 === (11)))
{var inst_26646 = (state_26656[(2)]);var state_26656__$1 = state_26656;var statearr_26665_26684 = state_26656__$1;(statearr_26665_26684[(2)] = inst_26646);
(statearr_26665_26684[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26657 === (9)))
{var state_26656__$1 = state_26656;var statearr_26666_26685 = state_26656__$1;(statearr_26666_26685[(2)] = null);
(statearr_26666_26685[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26657 === (5)))
{var inst_26641 = cljs.core.async.close_BANG_.call(null,out);var state_26656__$1 = state_26656;var statearr_26667_26686 = state_26656__$1;(statearr_26667_26686[(2)] = inst_26641);
(statearr_26667_26686[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26657 === (10)))
{var inst_26649 = (state_26656[(2)]);var state_26656__$1 = (function (){var statearr_26668 = state_26656;(statearr_26668[(8)] = inst_26649);
return statearr_26668;
})();var statearr_26669_26687 = state_26656__$1;(statearr_26669_26687[(2)] = null);
(statearr_26669_26687[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26657 === (8)))
{var inst_26638 = (state_26656[(7)]);var state_26656__$1 = state_26656;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26656__$1,(11),out,inst_26638);
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
});})(c__11297__auto___26677,out))
;return ((function (switch__11241__auto__,c__11297__auto___26677,out){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_26673 = [null,null,null,null,null,null,null,null,null];(statearr_26673[(0)] = state_machine__11242__auto__);
(statearr_26673[(1)] = (1));
return statearr_26673;
});
var state_machine__11242__auto____1 = (function (state_26656){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_26656);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e26674){if((e26674 instanceof Object))
{var ex__11245__auto__ = e26674;var statearr_26675_26688 = state_26656;(statearr_26675_26688[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26656);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26674;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26689 = state_26656;
state_26656 = G__26689;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_26656){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_26656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___26677,out))
})();var state__11299__auto__ = (function (){var statearr_26676 = f__11298__auto__.call(null);(statearr_26676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___26677);
return statearr_26676;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___26677,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__){
return (function (state_26855){var state_val_26856 = (state_26855[(1)]);if((state_val_26856 === (7)))
{var inst_26851 = (state_26855[(2)]);var state_26855__$1 = state_26855;var statearr_26857_26898 = state_26855__$1;(statearr_26857_26898[(2)] = inst_26851);
(statearr_26857_26898[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26856 === (20)))
{var inst_26821 = (state_26855[(7)]);var inst_26832 = (state_26855[(2)]);var inst_26833 = cljs.core.next.call(null,inst_26821);var inst_26807 = inst_26833;var inst_26808 = null;var inst_26809 = (0);var inst_26810 = (0);var state_26855__$1 = (function (){var statearr_26858 = state_26855;(statearr_26858[(8)] = inst_26832);
(statearr_26858[(9)] = inst_26807);
(statearr_26858[(10)] = inst_26810);
(statearr_26858[(11)] = inst_26808);
(statearr_26858[(12)] = inst_26809);
return statearr_26858;
})();var statearr_26859_26899 = state_26855__$1;(statearr_26859_26899[(2)] = null);
(statearr_26859_26899[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26856 === (1)))
{var state_26855__$1 = state_26855;var statearr_26860_26900 = state_26855__$1;(statearr_26860_26900[(2)] = null);
(statearr_26860_26900[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26856 === (4)))
{var inst_26796 = (state_26855[(13)]);var inst_26796__$1 = (state_26855[(2)]);var inst_26797 = (inst_26796__$1 == null);var state_26855__$1 = (function (){var statearr_26861 = state_26855;(statearr_26861[(13)] = inst_26796__$1);
return statearr_26861;
})();if(cljs.core.truth_(inst_26797))
{var statearr_26862_26901 = state_26855__$1;(statearr_26862_26901[(1)] = (5));
} else
{var statearr_26863_26902 = state_26855__$1;(statearr_26863_26902[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26856 === (15)))
{var state_26855__$1 = state_26855;var statearr_26867_26903 = state_26855__$1;(statearr_26867_26903[(2)] = null);
(statearr_26867_26903[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26856 === (21)))
{var state_26855__$1 = state_26855;var statearr_26868_26904 = state_26855__$1;(statearr_26868_26904[(2)] = null);
(statearr_26868_26904[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26856 === (13)))
{var inst_26807 = (state_26855[(9)]);var inst_26810 = (state_26855[(10)]);var inst_26808 = (state_26855[(11)]);var inst_26809 = (state_26855[(12)]);var inst_26817 = (state_26855[(2)]);var inst_26818 = (inst_26810 + (1));var tmp26864 = inst_26807;var tmp26865 = inst_26808;var tmp26866 = inst_26809;var inst_26807__$1 = tmp26864;var inst_26808__$1 = tmp26865;var inst_26809__$1 = tmp26866;var inst_26810__$1 = inst_26818;var state_26855__$1 = (function (){var statearr_26869 = state_26855;(statearr_26869[(9)] = inst_26807__$1);
(statearr_26869[(10)] = inst_26810__$1);
(statearr_26869[(11)] = inst_26808__$1);
(statearr_26869[(14)] = inst_26817);
(statearr_26869[(12)] = inst_26809__$1);
return statearr_26869;
})();var statearr_26870_26905 = state_26855__$1;(statearr_26870_26905[(2)] = null);
(statearr_26870_26905[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26856 === (22)))
{var state_26855__$1 = state_26855;var statearr_26871_26906 = state_26855__$1;(statearr_26871_26906[(2)] = null);
(statearr_26871_26906[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26856 === (6)))
{var inst_26796 = (state_26855[(13)]);var inst_26805 = f.call(null,inst_26796);var inst_26806 = cljs.core.seq.call(null,inst_26805);var inst_26807 = inst_26806;var inst_26808 = null;var inst_26809 = (0);var inst_26810 = (0);var state_26855__$1 = (function (){var statearr_26872 = state_26855;(statearr_26872[(9)] = inst_26807);
(statearr_26872[(10)] = inst_26810);
(statearr_26872[(11)] = inst_26808);
(statearr_26872[(12)] = inst_26809);
return statearr_26872;
})();var statearr_26873_26907 = state_26855__$1;(statearr_26873_26907[(2)] = null);
(statearr_26873_26907[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26856 === (17)))
{var inst_26821 = (state_26855[(7)]);var inst_26825 = cljs.core.chunk_first.call(null,inst_26821);var inst_26826 = cljs.core.chunk_rest.call(null,inst_26821);var inst_26827 = cljs.core.count.call(null,inst_26825);var inst_26807 = inst_26826;var inst_26808 = inst_26825;var inst_26809 = inst_26827;var inst_26810 = (0);var state_26855__$1 = (function (){var statearr_26874 = state_26855;(statearr_26874[(9)] = inst_26807);
(statearr_26874[(10)] = inst_26810);
(statearr_26874[(11)] = inst_26808);
(statearr_26874[(12)] = inst_26809);
return statearr_26874;
})();var statearr_26875_26908 = state_26855__$1;(statearr_26875_26908[(2)] = null);
(statearr_26875_26908[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26856 === (3)))
{var inst_26853 = (state_26855[(2)]);var state_26855__$1 = state_26855;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26855__$1,inst_26853);
} else
{if((state_val_26856 === (12)))
{var inst_26841 = (state_26855[(2)]);var state_26855__$1 = state_26855;var statearr_26876_26909 = state_26855__$1;(statearr_26876_26909[(2)] = inst_26841);
(statearr_26876_26909[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26856 === (2)))
{var state_26855__$1 = state_26855;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26855__$1,(4),in$);
} else
{if((state_val_26856 === (23)))
{var inst_26849 = (state_26855[(2)]);var state_26855__$1 = state_26855;var statearr_26877_26910 = state_26855__$1;(statearr_26877_26910[(2)] = inst_26849);
(statearr_26877_26910[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26856 === (19)))
{var inst_26836 = (state_26855[(2)]);var state_26855__$1 = state_26855;var statearr_26878_26911 = state_26855__$1;(statearr_26878_26911[(2)] = inst_26836);
(statearr_26878_26911[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26856 === (11)))
{var inst_26807 = (state_26855[(9)]);var inst_26821 = (state_26855[(7)]);var inst_26821__$1 = cljs.core.seq.call(null,inst_26807);var state_26855__$1 = (function (){var statearr_26879 = state_26855;(statearr_26879[(7)] = inst_26821__$1);
return statearr_26879;
})();if(inst_26821__$1)
{var statearr_26880_26912 = state_26855__$1;(statearr_26880_26912[(1)] = (14));
} else
{var statearr_26881_26913 = state_26855__$1;(statearr_26881_26913[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26856 === (9)))
{var inst_26843 = (state_26855[(2)]);var inst_26844 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_26855__$1 = (function (){var statearr_26882 = state_26855;(statearr_26882[(15)] = inst_26843);
return statearr_26882;
})();if(cljs.core.truth_(inst_26844))
{var statearr_26883_26914 = state_26855__$1;(statearr_26883_26914[(1)] = (21));
} else
{var statearr_26884_26915 = state_26855__$1;(statearr_26884_26915[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26856 === (5)))
{var inst_26799 = cljs.core.async.close_BANG_.call(null,out);var state_26855__$1 = state_26855;var statearr_26885_26916 = state_26855__$1;(statearr_26885_26916[(2)] = inst_26799);
(statearr_26885_26916[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26856 === (14)))
{var inst_26821 = (state_26855[(7)]);var inst_26823 = cljs.core.chunked_seq_QMARK_.call(null,inst_26821);var state_26855__$1 = state_26855;if(inst_26823)
{var statearr_26886_26917 = state_26855__$1;(statearr_26886_26917[(1)] = (17));
} else
{var statearr_26887_26918 = state_26855__$1;(statearr_26887_26918[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26856 === (16)))
{var inst_26839 = (state_26855[(2)]);var state_26855__$1 = state_26855;var statearr_26888_26919 = state_26855__$1;(statearr_26888_26919[(2)] = inst_26839);
(statearr_26888_26919[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26856 === (10)))
{var inst_26810 = (state_26855[(10)]);var inst_26808 = (state_26855[(11)]);var inst_26815 = cljs.core._nth.call(null,inst_26808,inst_26810);var state_26855__$1 = state_26855;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26855__$1,(13),out,inst_26815);
} else
{if((state_val_26856 === (18)))
{var inst_26821 = (state_26855[(7)]);var inst_26830 = cljs.core.first.call(null,inst_26821);var state_26855__$1 = state_26855;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26855__$1,(20),out,inst_26830);
} else
{if((state_val_26856 === (8)))
{var inst_26810 = (state_26855[(10)]);var inst_26809 = (state_26855[(12)]);var inst_26812 = (inst_26810 < inst_26809);var inst_26813 = inst_26812;var state_26855__$1 = state_26855;if(cljs.core.truth_(inst_26813))
{var statearr_26889_26920 = state_26855__$1;(statearr_26889_26920[(1)] = (10));
} else
{var statearr_26890_26921 = state_26855__$1;(statearr_26890_26921[(1)] = (11));
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
});})(c__11297__auto__))
;return ((function (switch__11241__auto__,c__11297__auto__){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_26894 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26894[(0)] = state_machine__11242__auto__);
(statearr_26894[(1)] = (1));
return statearr_26894;
});
var state_machine__11242__auto____1 = (function (state_26855){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_26855);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e26895){if((e26895 instanceof Object))
{var ex__11245__auto__ = e26895;var statearr_26896_26922 = state_26855;(statearr_26896_26922[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26855);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26895;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26923 = state_26855;
state_26855 = G__26923;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_26855){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_26855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__))
})();var state__11299__auto__ = (function (){var statearr_26897 = f__11298__auto__.call(null);(statearr_26897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_26897;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__))
);
return c__11297__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11297__auto___27020 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___27020,out){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___27020,out){
return (function (state_26995){var state_val_26996 = (state_26995[(1)]);if((state_val_26996 === (7)))
{var inst_26990 = (state_26995[(2)]);var state_26995__$1 = state_26995;var statearr_26997_27021 = state_26995__$1;(statearr_26997_27021[(2)] = inst_26990);
(statearr_26997_27021[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26996 === (1)))
{var inst_26972 = null;var state_26995__$1 = (function (){var statearr_26998 = state_26995;(statearr_26998[(7)] = inst_26972);
return statearr_26998;
})();var statearr_26999_27022 = state_26995__$1;(statearr_26999_27022[(2)] = null);
(statearr_26999_27022[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26996 === (4)))
{var inst_26975 = (state_26995[(8)]);var inst_26975__$1 = (state_26995[(2)]);var inst_26976 = (inst_26975__$1 == null);var inst_26977 = cljs.core.not.call(null,inst_26976);var state_26995__$1 = (function (){var statearr_27000 = state_26995;(statearr_27000[(8)] = inst_26975__$1);
return statearr_27000;
})();if(inst_26977)
{var statearr_27001_27023 = state_26995__$1;(statearr_27001_27023[(1)] = (5));
} else
{var statearr_27002_27024 = state_26995__$1;(statearr_27002_27024[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26996 === (6)))
{var state_26995__$1 = state_26995;var statearr_27003_27025 = state_26995__$1;(statearr_27003_27025[(2)] = null);
(statearr_27003_27025[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26996 === (3)))
{var inst_26992 = (state_26995[(2)]);var inst_26993 = cljs.core.async.close_BANG_.call(null,out);var state_26995__$1 = (function (){var statearr_27004 = state_26995;(statearr_27004[(9)] = inst_26992);
return statearr_27004;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26995__$1,inst_26993);
} else
{if((state_val_26996 === (2)))
{var state_26995__$1 = state_26995;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26995__$1,(4),ch);
} else
{if((state_val_26996 === (11)))
{var inst_26975 = (state_26995[(8)]);var inst_26984 = (state_26995[(2)]);var inst_26972 = inst_26975;var state_26995__$1 = (function (){var statearr_27005 = state_26995;(statearr_27005[(10)] = inst_26984);
(statearr_27005[(7)] = inst_26972);
return statearr_27005;
})();var statearr_27006_27026 = state_26995__$1;(statearr_27006_27026[(2)] = null);
(statearr_27006_27026[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26996 === (9)))
{var inst_26975 = (state_26995[(8)]);var state_26995__$1 = state_26995;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26995__$1,(11),out,inst_26975);
} else
{if((state_val_26996 === (5)))
{var inst_26975 = (state_26995[(8)]);var inst_26972 = (state_26995[(7)]);var inst_26979 = cljs.core._EQ_.call(null,inst_26975,inst_26972);var state_26995__$1 = state_26995;if(inst_26979)
{var statearr_27008_27027 = state_26995__$1;(statearr_27008_27027[(1)] = (8));
} else
{var statearr_27009_27028 = state_26995__$1;(statearr_27009_27028[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26996 === (10)))
{var inst_26987 = (state_26995[(2)]);var state_26995__$1 = state_26995;var statearr_27010_27029 = state_26995__$1;(statearr_27010_27029[(2)] = inst_26987);
(statearr_27010_27029[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26996 === (8)))
{var inst_26972 = (state_26995[(7)]);var tmp27007 = inst_26972;var inst_26972__$1 = tmp27007;var state_26995__$1 = (function (){var statearr_27011 = state_26995;(statearr_27011[(7)] = inst_26972__$1);
return statearr_27011;
})();var statearr_27012_27030 = state_26995__$1;(statearr_27012_27030[(2)] = null);
(statearr_27012_27030[(1)] = (2));
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
});})(c__11297__auto___27020,out))
;return ((function (switch__11241__auto__,c__11297__auto___27020,out){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_27016 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27016[(0)] = state_machine__11242__auto__);
(statearr_27016[(1)] = (1));
return statearr_27016;
});
var state_machine__11242__auto____1 = (function (state_26995){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_26995);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e27017){if((e27017 instanceof Object))
{var ex__11245__auto__ = e27017;var statearr_27018_27031 = state_26995;(statearr_27018_27031[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26995);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27017;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27032 = state_26995;
state_26995 = G__27032;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_26995){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_26995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___27020,out))
})();var state__11299__auto__ = (function (){var statearr_27019 = f__11298__auto__.call(null);(statearr_27019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___27020);
return statearr_27019;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___27020,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11297__auto___27167 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___27167,out){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___27167,out){
return (function (state_27137){var state_val_27138 = (state_27137[(1)]);if((state_val_27138 === (7)))
{var inst_27133 = (state_27137[(2)]);var state_27137__$1 = state_27137;var statearr_27139_27168 = state_27137__$1;(statearr_27139_27168[(2)] = inst_27133);
(statearr_27139_27168[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27138 === (1)))
{var inst_27100 = (new Array(n));var inst_27101 = inst_27100;var inst_27102 = (0);var state_27137__$1 = (function (){var statearr_27140 = state_27137;(statearr_27140[(7)] = inst_27102);
(statearr_27140[(8)] = inst_27101);
return statearr_27140;
})();var statearr_27141_27169 = state_27137__$1;(statearr_27141_27169[(2)] = null);
(statearr_27141_27169[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27138 === (4)))
{var inst_27105 = (state_27137[(9)]);var inst_27105__$1 = (state_27137[(2)]);var inst_27106 = (inst_27105__$1 == null);var inst_27107 = cljs.core.not.call(null,inst_27106);var state_27137__$1 = (function (){var statearr_27142 = state_27137;(statearr_27142[(9)] = inst_27105__$1);
return statearr_27142;
})();if(inst_27107)
{var statearr_27143_27170 = state_27137__$1;(statearr_27143_27170[(1)] = (5));
} else
{var statearr_27144_27171 = state_27137__$1;(statearr_27144_27171[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27138 === (15)))
{var inst_27127 = (state_27137[(2)]);var state_27137__$1 = state_27137;var statearr_27145_27172 = state_27137__$1;(statearr_27145_27172[(2)] = inst_27127);
(statearr_27145_27172[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27138 === (13)))
{var state_27137__$1 = state_27137;var statearr_27146_27173 = state_27137__$1;(statearr_27146_27173[(2)] = null);
(statearr_27146_27173[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27138 === (6)))
{var inst_27102 = (state_27137[(7)]);var inst_27123 = (inst_27102 > (0));var state_27137__$1 = state_27137;if(cljs.core.truth_(inst_27123))
{var statearr_27147_27174 = state_27137__$1;(statearr_27147_27174[(1)] = (12));
} else
{var statearr_27148_27175 = state_27137__$1;(statearr_27148_27175[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27138 === (3)))
{var inst_27135 = (state_27137[(2)]);var state_27137__$1 = state_27137;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27137__$1,inst_27135);
} else
{if((state_val_27138 === (12)))
{var inst_27101 = (state_27137[(8)]);var inst_27125 = cljs.core.vec.call(null,inst_27101);var state_27137__$1 = state_27137;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27137__$1,(15),out,inst_27125);
} else
{if((state_val_27138 === (2)))
{var state_27137__$1 = state_27137;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27137__$1,(4),ch);
} else
{if((state_val_27138 === (11)))
{var inst_27117 = (state_27137[(2)]);var inst_27118 = (new Array(n));var inst_27101 = inst_27118;var inst_27102 = (0);var state_27137__$1 = (function (){var statearr_27149 = state_27137;(statearr_27149[(7)] = inst_27102);
(statearr_27149[(10)] = inst_27117);
(statearr_27149[(8)] = inst_27101);
return statearr_27149;
})();var statearr_27150_27176 = state_27137__$1;(statearr_27150_27176[(2)] = null);
(statearr_27150_27176[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27138 === (9)))
{var inst_27101 = (state_27137[(8)]);var inst_27115 = cljs.core.vec.call(null,inst_27101);var state_27137__$1 = state_27137;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27137__$1,(11),out,inst_27115);
} else
{if((state_val_27138 === (5)))
{var inst_27105 = (state_27137[(9)]);var inst_27102 = (state_27137[(7)]);var inst_27110 = (state_27137[(11)]);var inst_27101 = (state_27137[(8)]);var inst_27109 = (inst_27101[inst_27102] = inst_27105);var inst_27110__$1 = (inst_27102 + (1));var inst_27111 = (inst_27110__$1 < n);var state_27137__$1 = (function (){var statearr_27151 = state_27137;(statearr_27151[(12)] = inst_27109);
(statearr_27151[(11)] = inst_27110__$1);
return statearr_27151;
})();if(cljs.core.truth_(inst_27111))
{var statearr_27152_27177 = state_27137__$1;(statearr_27152_27177[(1)] = (8));
} else
{var statearr_27153_27178 = state_27137__$1;(statearr_27153_27178[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27138 === (14)))
{var inst_27130 = (state_27137[(2)]);var inst_27131 = cljs.core.async.close_BANG_.call(null,out);var state_27137__$1 = (function (){var statearr_27155 = state_27137;(statearr_27155[(13)] = inst_27130);
return statearr_27155;
})();var statearr_27156_27179 = state_27137__$1;(statearr_27156_27179[(2)] = inst_27131);
(statearr_27156_27179[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27138 === (10)))
{var inst_27121 = (state_27137[(2)]);var state_27137__$1 = state_27137;var statearr_27157_27180 = state_27137__$1;(statearr_27157_27180[(2)] = inst_27121);
(statearr_27157_27180[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27138 === (8)))
{var inst_27110 = (state_27137[(11)]);var inst_27101 = (state_27137[(8)]);var tmp27154 = inst_27101;var inst_27101__$1 = tmp27154;var inst_27102 = inst_27110;var state_27137__$1 = (function (){var statearr_27158 = state_27137;(statearr_27158[(7)] = inst_27102);
(statearr_27158[(8)] = inst_27101__$1);
return statearr_27158;
})();var statearr_27159_27181 = state_27137__$1;(statearr_27159_27181[(2)] = null);
(statearr_27159_27181[(1)] = (2));
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
});})(c__11297__auto___27167,out))
;return ((function (switch__11241__auto__,c__11297__auto___27167,out){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_27163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27163[(0)] = state_machine__11242__auto__);
(statearr_27163[(1)] = (1));
return statearr_27163;
});
var state_machine__11242__auto____1 = (function (state_27137){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_27137);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e27164){if((e27164 instanceof Object))
{var ex__11245__auto__ = e27164;var statearr_27165_27182 = state_27137;(statearr_27165_27182[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27137);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27164;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27183 = state_27137;
state_27137 = G__27183;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_27137){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_27137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___27167,out))
})();var state__11299__auto__ = (function (){var statearr_27166 = f__11298__auto__.call(null);(statearr_27166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___27167);
return statearr_27166;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___27167,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11297__auto___27326 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___27326,out){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___27326,out){
return (function (state_27296){var state_val_27297 = (state_27296[(1)]);if((state_val_27297 === (7)))
{var inst_27292 = (state_27296[(2)]);var state_27296__$1 = state_27296;var statearr_27298_27327 = state_27296__$1;(statearr_27298_27327[(2)] = inst_27292);
(statearr_27298_27327[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27297 === (1)))
{var inst_27255 = [];var inst_27256 = inst_27255;var inst_27257 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_27296__$1 = (function (){var statearr_27299 = state_27296;(statearr_27299[(7)] = inst_27257);
(statearr_27299[(8)] = inst_27256);
return statearr_27299;
})();var statearr_27300_27328 = state_27296__$1;(statearr_27300_27328[(2)] = null);
(statearr_27300_27328[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27297 === (4)))
{var inst_27260 = (state_27296[(9)]);var inst_27260__$1 = (state_27296[(2)]);var inst_27261 = (inst_27260__$1 == null);var inst_27262 = cljs.core.not.call(null,inst_27261);var state_27296__$1 = (function (){var statearr_27301 = state_27296;(statearr_27301[(9)] = inst_27260__$1);
return statearr_27301;
})();if(inst_27262)
{var statearr_27302_27329 = state_27296__$1;(statearr_27302_27329[(1)] = (5));
} else
{var statearr_27303_27330 = state_27296__$1;(statearr_27303_27330[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27297 === (15)))
{var inst_27286 = (state_27296[(2)]);var state_27296__$1 = state_27296;var statearr_27304_27331 = state_27296__$1;(statearr_27304_27331[(2)] = inst_27286);
(statearr_27304_27331[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27297 === (13)))
{var state_27296__$1 = state_27296;var statearr_27305_27332 = state_27296__$1;(statearr_27305_27332[(2)] = null);
(statearr_27305_27332[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27297 === (6)))
{var inst_27256 = (state_27296[(8)]);var inst_27281 = inst_27256.length;var inst_27282 = (inst_27281 > (0));var state_27296__$1 = state_27296;if(cljs.core.truth_(inst_27282))
{var statearr_27306_27333 = state_27296__$1;(statearr_27306_27333[(1)] = (12));
} else
{var statearr_27307_27334 = state_27296__$1;(statearr_27307_27334[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27297 === (3)))
{var inst_27294 = (state_27296[(2)]);var state_27296__$1 = state_27296;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27296__$1,inst_27294);
} else
{if((state_val_27297 === (12)))
{var inst_27256 = (state_27296[(8)]);var inst_27284 = cljs.core.vec.call(null,inst_27256);var state_27296__$1 = state_27296;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27296__$1,(15),out,inst_27284);
} else
{if((state_val_27297 === (2)))
{var state_27296__$1 = state_27296;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27296__$1,(4),ch);
} else
{if((state_val_27297 === (11)))
{var inst_27264 = (state_27296[(10)]);var inst_27260 = (state_27296[(9)]);var inst_27274 = (state_27296[(2)]);var inst_27275 = [];var inst_27276 = inst_27275.push(inst_27260);var inst_27256 = inst_27275;var inst_27257 = inst_27264;var state_27296__$1 = (function (){var statearr_27308 = state_27296;(statearr_27308[(11)] = inst_27274);
(statearr_27308[(7)] = inst_27257);
(statearr_27308[(8)] = inst_27256);
(statearr_27308[(12)] = inst_27276);
return statearr_27308;
})();var statearr_27309_27335 = state_27296__$1;(statearr_27309_27335[(2)] = null);
(statearr_27309_27335[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27297 === (9)))
{var inst_27256 = (state_27296[(8)]);var inst_27272 = cljs.core.vec.call(null,inst_27256);var state_27296__$1 = state_27296;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27296__$1,(11),out,inst_27272);
} else
{if((state_val_27297 === (5)))
{var inst_27264 = (state_27296[(10)]);var inst_27257 = (state_27296[(7)]);var inst_27260 = (state_27296[(9)]);var inst_27264__$1 = f.call(null,inst_27260);var inst_27265 = cljs.core._EQ_.call(null,inst_27264__$1,inst_27257);var inst_27266 = cljs.core.keyword_identical_QMARK_.call(null,inst_27257,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_27267 = (inst_27265) || (inst_27266);var state_27296__$1 = (function (){var statearr_27310 = state_27296;(statearr_27310[(10)] = inst_27264__$1);
return statearr_27310;
})();if(cljs.core.truth_(inst_27267))
{var statearr_27311_27336 = state_27296__$1;(statearr_27311_27336[(1)] = (8));
} else
{var statearr_27312_27337 = state_27296__$1;(statearr_27312_27337[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27297 === (14)))
{var inst_27289 = (state_27296[(2)]);var inst_27290 = cljs.core.async.close_BANG_.call(null,out);var state_27296__$1 = (function (){var statearr_27314 = state_27296;(statearr_27314[(13)] = inst_27289);
return statearr_27314;
})();var statearr_27315_27338 = state_27296__$1;(statearr_27315_27338[(2)] = inst_27290);
(statearr_27315_27338[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27297 === (10)))
{var inst_27279 = (state_27296[(2)]);var state_27296__$1 = state_27296;var statearr_27316_27339 = state_27296__$1;(statearr_27316_27339[(2)] = inst_27279);
(statearr_27316_27339[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27297 === (8)))
{var inst_27264 = (state_27296[(10)]);var inst_27260 = (state_27296[(9)]);var inst_27256 = (state_27296[(8)]);var inst_27269 = inst_27256.push(inst_27260);var tmp27313 = inst_27256;var inst_27256__$1 = tmp27313;var inst_27257 = inst_27264;var state_27296__$1 = (function (){var statearr_27317 = state_27296;(statearr_27317[(7)] = inst_27257);
(statearr_27317[(14)] = inst_27269);
(statearr_27317[(8)] = inst_27256__$1);
return statearr_27317;
})();var statearr_27318_27340 = state_27296__$1;(statearr_27318_27340[(2)] = null);
(statearr_27318_27340[(1)] = (2));
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
});})(c__11297__auto___27326,out))
;return ((function (switch__11241__auto__,c__11297__auto___27326,out){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_27322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27322[(0)] = state_machine__11242__auto__);
(statearr_27322[(1)] = (1));
return statearr_27322;
});
var state_machine__11242__auto____1 = (function (state_27296){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_27296);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e27323){if((e27323 instanceof Object))
{var ex__11245__auto__ = e27323;var statearr_27324_27341 = state_27296;(statearr_27324_27341[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27296);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27323;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27342 = state_27296;
state_27296 = G__27342;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_27296){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_27296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___27326,out))
})();var state__11299__auto__ = (function (){var statearr_27325 = f__11298__auto__.call(null);(statearr_27325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___27326);
return statearr_27325;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___27326,out))
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
