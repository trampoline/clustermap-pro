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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23270 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23270 = (function (f,fn_handler,meta23271){
this.f = f;
this.fn_handler = fn_handler;
this.meta23271 = meta23271;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23270.cljs$lang$type = true;
cljs.core.async.t23270.cljs$lang$ctorStr = "cljs.core.async/t23270";
cljs.core.async.t23270.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23270");
});
cljs.core.async.t23270.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23270.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23270.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23272){var self__ = this;
var _23272__$1 = this;return self__.meta23271;
});
cljs.core.async.t23270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23272,meta23271__$1){var self__ = this;
var _23272__$1 = this;return (new cljs.core.async.t23270(self__.f,self__.fn_handler,meta23271__$1));
});
cljs.core.async.__GT_t23270 = (function __GT_t23270(f__$1,fn_handler__$1,meta23271){return (new cljs.core.async.t23270(f__$1,fn_handler__$1,meta23271));
});
}
return (new cljs.core.async.t23270(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23274 = buff;if(G__23274)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__23274.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23274.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23274);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23274);
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
{var val_23275 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23275);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_23275,ret){
return (function (){return fn1.call(null,val_23275);
});})(val_23275,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___23276 = n;var x_23277 = (0);while(true){
if((x_23277 < n__4508__auto___23276))
{(a[x_23277] = (0));
{
var G__23278 = (x_23277 + (1));
x_23277 = G__23278;
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
var G__23279 = (i + (1));
i = G__23279;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23283 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23283 = (function (flag,alt_flag,meta23284){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23284 = meta23284;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23283.cljs$lang$type = true;
cljs.core.async.t23283.cljs$lang$ctorStr = "cljs.core.async/t23283";
cljs.core.async.t23283.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23283");
});})(flag))
;
cljs.core.async.t23283.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23283.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t23283.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t23283.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23285){var self__ = this;
var _23285__$1 = this;return self__.meta23284;
});})(flag))
;
cljs.core.async.t23283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23285,meta23284__$1){var self__ = this;
var _23285__$1 = this;return (new cljs.core.async.t23283(self__.flag,self__.alt_flag,meta23284__$1));
});})(flag))
;
cljs.core.async.__GT_t23283 = ((function (flag){
return (function __GT_t23283(flag__$1,alt_flag__$1,meta23284){return (new cljs.core.async.t23283(flag__$1,alt_flag__$1,meta23284));
});})(flag))
;
}
return (new cljs.core.async.t23283(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23289 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23289 = (function (cb,flag,alt_handler,meta23290){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23290 = meta23290;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23289.cljs$lang$type = true;
cljs.core.async.t23289.cljs$lang$ctorStr = "cljs.core.async/t23289";
cljs.core.async.t23289.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23289");
});
cljs.core.async.t23289.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23289.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23289.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23291){var self__ = this;
var _23291__$1 = this;return self__.meta23290;
});
cljs.core.async.t23289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23291,meta23290__$1){var self__ = this;
var _23291__$1 = this;return (new cljs.core.async.t23289(self__.cb,self__.flag,self__.alt_handler,meta23290__$1));
});
cljs.core.async.__GT_t23289 = (function __GT_t23289(cb__$1,flag__$1,alt_handler__$1,meta23290){return (new cljs.core.async.t23289(cb__$1,flag__$1,alt_handler__$1,meta23290));
});
}
return (new cljs.core.async.t23289(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23292_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23292_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23293_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23293_SHARP_,port], null));
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
var G__23294 = (i + (1));
i = G__23294;
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
var alts_BANG___delegate = function (ports,p__23295){var map__23297 = p__23295;var map__23297__$1 = ((cljs.core.seq_QMARK_.call(null,map__23297))?cljs.core.apply.call(null,cljs.core.hash_map,map__23297):map__23297);var opts = map__23297__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23295 = null;if (arguments.length > 1) {
  p__23295 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23295);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23298){
var ports = cljs.core.first(arglist__23298);
var p__23295 = cljs.core.rest(arglist__23298);
return alts_BANG___delegate(ports,p__23295);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__9125__auto___23393 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23393){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23393){
return (function (state_23369){var state_val_23370 = (state_23369[(1)]);if((state_val_23370 === (7)))
{var inst_23365 = (state_23369[(2)]);var state_23369__$1 = state_23369;var statearr_23371_23394 = state_23369__$1;(statearr_23371_23394[(2)] = inst_23365);
(statearr_23371_23394[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23370 === (1)))
{var state_23369__$1 = state_23369;var statearr_23372_23395 = state_23369__$1;(statearr_23372_23395[(2)] = null);
(statearr_23372_23395[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23370 === (4)))
{var inst_23348 = (state_23369[(7)]);var inst_23348__$1 = (state_23369[(2)]);var inst_23349 = (inst_23348__$1 == null);var state_23369__$1 = (function (){var statearr_23373 = state_23369;(statearr_23373[(7)] = inst_23348__$1);
return statearr_23373;
})();if(cljs.core.truth_(inst_23349))
{var statearr_23374_23396 = state_23369__$1;(statearr_23374_23396[(1)] = (5));
} else
{var statearr_23375_23397 = state_23369__$1;(statearr_23375_23397[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23370 === (13)))
{var state_23369__$1 = state_23369;var statearr_23376_23398 = state_23369__$1;(statearr_23376_23398[(2)] = null);
(statearr_23376_23398[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23370 === (6)))
{var inst_23348 = (state_23369[(7)]);var state_23369__$1 = state_23369;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23369__$1,(11),to,inst_23348);
} else
{if((state_val_23370 === (3)))
{var inst_23367 = (state_23369[(2)]);var state_23369__$1 = state_23369;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23369__$1,inst_23367);
} else
{if((state_val_23370 === (12)))
{var state_23369__$1 = state_23369;var statearr_23377_23399 = state_23369__$1;(statearr_23377_23399[(2)] = null);
(statearr_23377_23399[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23370 === (2)))
{var state_23369__$1 = state_23369;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23369__$1,(4),from);
} else
{if((state_val_23370 === (11)))
{var inst_23358 = (state_23369[(2)]);var state_23369__$1 = state_23369;if(cljs.core.truth_(inst_23358))
{var statearr_23378_23400 = state_23369__$1;(statearr_23378_23400[(1)] = (12));
} else
{var statearr_23379_23401 = state_23369__$1;(statearr_23379_23401[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23370 === (9)))
{var state_23369__$1 = state_23369;var statearr_23380_23402 = state_23369__$1;(statearr_23380_23402[(2)] = null);
(statearr_23380_23402[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23370 === (5)))
{var state_23369__$1 = state_23369;if(cljs.core.truth_(close_QMARK_))
{var statearr_23381_23403 = state_23369__$1;(statearr_23381_23403[(1)] = (8));
} else
{var statearr_23382_23404 = state_23369__$1;(statearr_23382_23404[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23370 === (14)))
{var inst_23363 = (state_23369[(2)]);var state_23369__$1 = state_23369;var statearr_23383_23405 = state_23369__$1;(statearr_23383_23405[(2)] = inst_23363);
(statearr_23383_23405[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23370 === (10)))
{var inst_23355 = (state_23369[(2)]);var state_23369__$1 = state_23369;var statearr_23384_23406 = state_23369__$1;(statearr_23384_23406[(2)] = inst_23355);
(statearr_23384_23406[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23370 === (8)))
{var inst_23352 = cljs.core.async.close_BANG_.call(null,to);var state_23369__$1 = state_23369;var statearr_23385_23407 = state_23369__$1;(statearr_23385_23407[(2)] = inst_23352);
(statearr_23385_23407[(1)] = (10));
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
});})(c__9125__auto___23393))
;return ((function (switch__9110__auto__,c__9125__auto___23393){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23389 = [null,null,null,null,null,null,null,null];(statearr_23389[(0)] = state_machine__9111__auto__);
(statearr_23389[(1)] = (1));
return statearr_23389;
});
var state_machine__9111__auto____1 = (function (state_23369){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23369);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23390){if((e23390 instanceof Object))
{var ex__9114__auto__ = e23390;var statearr_23391_23408 = state_23369;(statearr_23391_23408[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23369);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23390;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23409 = state_23369;
state_23369 = G__23409;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23369){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23393))
})();var state__9127__auto__ = (function (){var statearr_23392 = f__9126__auto__.call(null);(statearr_23392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23393);
return statearr_23392;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23393))
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
return (function (p__23593){var vec__23594 = p__23593;var v = cljs.core.nth.call(null,vec__23594,(0),null);var p = cljs.core.nth.call(null,vec__23594,(1),null);var job = vec__23594;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__9125__auto___23776 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23776,res,vec__23594,v,p,job,jobs,results){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23776,res,vec__23594,v,p,job,jobs,results){
return (function (state_23599){var state_val_23600 = (state_23599[(1)]);if((state_val_23600 === (2)))
{var inst_23596 = (state_23599[(2)]);var inst_23597 = cljs.core.async.close_BANG_.call(null,res);var state_23599__$1 = (function (){var statearr_23601 = state_23599;(statearr_23601[(7)] = inst_23596);
return statearr_23601;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23599__$1,inst_23597);
} else
{if((state_val_23600 === (1)))
{var state_23599__$1 = state_23599;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23599__$1,(2),res,v);
} else
{return null;
}
}
});})(c__9125__auto___23776,res,vec__23594,v,p,job,jobs,results))
;return ((function (switch__9110__auto__,c__9125__auto___23776,res,vec__23594,v,p,job,jobs,results){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23605 = [null,null,null,null,null,null,null,null];(statearr_23605[(0)] = state_machine__9111__auto__);
(statearr_23605[(1)] = (1));
return statearr_23605;
});
var state_machine__9111__auto____1 = (function (state_23599){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23599);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23606){if((e23606 instanceof Object))
{var ex__9114__auto__ = e23606;var statearr_23607_23777 = state_23599;(statearr_23607_23777[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23599);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23606;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23778 = state_23599;
state_23599 = G__23778;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23599){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23776,res,vec__23594,v,p,job,jobs,results))
})();var state__9127__auto__ = (function (){var statearr_23608 = f__9126__auto__.call(null);(statearr_23608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23776);
return statearr_23608;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23776,res,vec__23594,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__23609){var vec__23610 = p__23609;var v = cljs.core.nth.call(null,vec__23610,(0),null);var p = cljs.core.nth.call(null,vec__23610,(1),null);var job = vec__23610;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___23779 = n;var __23780 = (0);while(true){
if((__23780 < n__4508__auto___23779))
{var G__23611_23781 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__23611_23781) {
case "async":
var c__9125__auto___23783 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23780,c__9125__auto___23783,G__23611_23781,n__4508__auto___23779,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__23780,c__9125__auto___23783,G__23611_23781,n__4508__auto___23779,jobs,results,process,async){
return (function (state_23624){var state_val_23625 = (state_23624[(1)]);if((state_val_23625 === (7)))
{var inst_23620 = (state_23624[(2)]);var state_23624__$1 = state_23624;var statearr_23626_23784 = state_23624__$1;(statearr_23626_23784[(2)] = inst_23620);
(statearr_23626_23784[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23625 === (6)))
{var state_23624__$1 = state_23624;var statearr_23627_23785 = state_23624__$1;(statearr_23627_23785[(2)] = null);
(statearr_23627_23785[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23625 === (5)))
{var state_23624__$1 = state_23624;var statearr_23628_23786 = state_23624__$1;(statearr_23628_23786[(2)] = null);
(statearr_23628_23786[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23625 === (4)))
{var inst_23614 = (state_23624[(2)]);var inst_23615 = async.call(null,inst_23614);var state_23624__$1 = state_23624;if(cljs.core.truth_(inst_23615))
{var statearr_23629_23787 = state_23624__$1;(statearr_23629_23787[(1)] = (5));
} else
{var statearr_23630_23788 = state_23624__$1;(statearr_23630_23788[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23625 === (3)))
{var inst_23622 = (state_23624[(2)]);var state_23624__$1 = state_23624;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23624__$1,inst_23622);
} else
{if((state_val_23625 === (2)))
{var state_23624__$1 = state_23624;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23624__$1,(4),jobs);
} else
{if((state_val_23625 === (1)))
{var state_23624__$1 = state_23624;var statearr_23631_23789 = state_23624__$1;(statearr_23631_23789[(2)] = null);
(statearr_23631_23789[(1)] = (2));
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
});})(__23780,c__9125__auto___23783,G__23611_23781,n__4508__auto___23779,jobs,results,process,async))
;return ((function (__23780,switch__9110__auto__,c__9125__auto___23783,G__23611_23781,n__4508__auto___23779,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23635 = [null,null,null,null,null,null,null];(statearr_23635[(0)] = state_machine__9111__auto__);
(statearr_23635[(1)] = (1));
return statearr_23635;
});
var state_machine__9111__auto____1 = (function (state_23624){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23624);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23636){if((e23636 instanceof Object))
{var ex__9114__auto__ = e23636;var statearr_23637_23790 = state_23624;(statearr_23637_23790[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23624);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23636;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23791 = state_23624;
state_23624 = G__23791;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23624){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__23780,switch__9110__auto__,c__9125__auto___23783,G__23611_23781,n__4508__auto___23779,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23638 = f__9126__auto__.call(null);(statearr_23638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23783);
return statearr_23638;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__23780,c__9125__auto___23783,G__23611_23781,n__4508__auto___23779,jobs,results,process,async))
);

break;
case "compute":
var c__9125__auto___23792 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23780,c__9125__auto___23792,G__23611_23781,n__4508__auto___23779,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__23780,c__9125__auto___23792,G__23611_23781,n__4508__auto___23779,jobs,results,process,async){
return (function (state_23651){var state_val_23652 = (state_23651[(1)]);if((state_val_23652 === (7)))
{var inst_23647 = (state_23651[(2)]);var state_23651__$1 = state_23651;var statearr_23653_23793 = state_23651__$1;(statearr_23653_23793[(2)] = inst_23647);
(statearr_23653_23793[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23652 === (6)))
{var state_23651__$1 = state_23651;var statearr_23654_23794 = state_23651__$1;(statearr_23654_23794[(2)] = null);
(statearr_23654_23794[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23652 === (5)))
{var state_23651__$1 = state_23651;var statearr_23655_23795 = state_23651__$1;(statearr_23655_23795[(2)] = null);
(statearr_23655_23795[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23652 === (4)))
{var inst_23641 = (state_23651[(2)]);var inst_23642 = process.call(null,inst_23641);var state_23651__$1 = state_23651;if(cljs.core.truth_(inst_23642))
{var statearr_23656_23796 = state_23651__$1;(statearr_23656_23796[(1)] = (5));
} else
{var statearr_23657_23797 = state_23651__$1;(statearr_23657_23797[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23652 === (3)))
{var inst_23649 = (state_23651[(2)]);var state_23651__$1 = state_23651;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23651__$1,inst_23649);
} else
{if((state_val_23652 === (2)))
{var state_23651__$1 = state_23651;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23651__$1,(4),jobs);
} else
{if((state_val_23652 === (1)))
{var state_23651__$1 = state_23651;var statearr_23658_23798 = state_23651__$1;(statearr_23658_23798[(2)] = null);
(statearr_23658_23798[(1)] = (2));
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
});})(__23780,c__9125__auto___23792,G__23611_23781,n__4508__auto___23779,jobs,results,process,async))
;return ((function (__23780,switch__9110__auto__,c__9125__auto___23792,G__23611_23781,n__4508__auto___23779,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23662 = [null,null,null,null,null,null,null];(statearr_23662[(0)] = state_machine__9111__auto__);
(statearr_23662[(1)] = (1));
return statearr_23662;
});
var state_machine__9111__auto____1 = (function (state_23651){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23651);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23663){if((e23663 instanceof Object))
{var ex__9114__auto__ = e23663;var statearr_23664_23799 = state_23651;(statearr_23664_23799[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23651);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23663;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23800 = state_23651;
state_23651 = G__23800;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23651){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__23780,switch__9110__auto__,c__9125__auto___23792,G__23611_23781,n__4508__auto___23779,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23665 = f__9126__auto__.call(null);(statearr_23665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23792);
return statearr_23665;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__23780,c__9125__auto___23792,G__23611_23781,n__4508__auto___23779,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__23801 = (__23780 + (1));
__23780 = G__23801;
continue;
}
} else
{}
break;
}
var c__9125__auto___23802 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23802,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23802,jobs,results,process,async){
return (function (state_23687){var state_val_23688 = (state_23687[(1)]);if((state_val_23688 === (9)))
{var inst_23680 = (state_23687[(2)]);var state_23687__$1 = (function (){var statearr_23689 = state_23687;(statearr_23689[(7)] = inst_23680);
return statearr_23689;
})();var statearr_23690_23803 = state_23687__$1;(statearr_23690_23803[(2)] = null);
(statearr_23690_23803[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23688 === (8)))
{var inst_23673 = (state_23687[(8)]);var inst_23678 = (state_23687[(2)]);var state_23687__$1 = (function (){var statearr_23691 = state_23687;(statearr_23691[(9)] = inst_23678);
return statearr_23691;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23687__$1,(9),results,inst_23673);
} else
{if((state_val_23688 === (7)))
{var inst_23683 = (state_23687[(2)]);var state_23687__$1 = state_23687;var statearr_23692_23804 = state_23687__$1;(statearr_23692_23804[(2)] = inst_23683);
(statearr_23692_23804[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23688 === (6)))
{var inst_23673 = (state_23687[(8)]);var inst_23668 = (state_23687[(10)]);var inst_23673__$1 = cljs.core.async.chan.call(null,(1));var inst_23674 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23675 = [inst_23668,inst_23673__$1];var inst_23676 = (new cljs.core.PersistentVector(null,2,(5),inst_23674,inst_23675,null));var state_23687__$1 = (function (){var statearr_23693 = state_23687;(statearr_23693[(8)] = inst_23673__$1);
return statearr_23693;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23687__$1,(8),jobs,inst_23676);
} else
{if((state_val_23688 === (5)))
{var inst_23671 = cljs.core.async.close_BANG_.call(null,jobs);var state_23687__$1 = state_23687;var statearr_23694_23805 = state_23687__$1;(statearr_23694_23805[(2)] = inst_23671);
(statearr_23694_23805[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23688 === (4)))
{var inst_23668 = (state_23687[(10)]);var inst_23668__$1 = (state_23687[(2)]);var inst_23669 = (inst_23668__$1 == null);var state_23687__$1 = (function (){var statearr_23695 = state_23687;(statearr_23695[(10)] = inst_23668__$1);
return statearr_23695;
})();if(cljs.core.truth_(inst_23669))
{var statearr_23696_23806 = state_23687__$1;(statearr_23696_23806[(1)] = (5));
} else
{var statearr_23697_23807 = state_23687__$1;(statearr_23697_23807[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23688 === (3)))
{var inst_23685 = (state_23687[(2)]);var state_23687__$1 = state_23687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23687__$1,inst_23685);
} else
{if((state_val_23688 === (2)))
{var state_23687__$1 = state_23687;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23687__$1,(4),from);
} else
{if((state_val_23688 === (1)))
{var state_23687__$1 = state_23687;var statearr_23698_23808 = state_23687__$1;(statearr_23698_23808[(2)] = null);
(statearr_23698_23808[(1)] = (2));
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
});})(c__9125__auto___23802,jobs,results,process,async))
;return ((function (switch__9110__auto__,c__9125__auto___23802,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23702 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23702[(0)] = state_machine__9111__auto__);
(statearr_23702[(1)] = (1));
return statearr_23702;
});
var state_machine__9111__auto____1 = (function (state_23687){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23687);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23703){if((e23703 instanceof Object))
{var ex__9114__auto__ = e23703;var statearr_23704_23809 = state_23687;(statearr_23704_23809[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23687);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23703;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23810 = state_23687;
state_23687 = G__23810;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23687){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23802,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23705 = f__9126__auto__.call(null);(statearr_23705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23802);
return statearr_23705;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23802,jobs,results,process,async))
);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,jobs,results,process,async){
return (function (state_23743){var state_val_23744 = (state_23743[(1)]);if((state_val_23744 === (7)))
{var inst_23739 = (state_23743[(2)]);var state_23743__$1 = state_23743;var statearr_23745_23811 = state_23743__$1;(statearr_23745_23811[(2)] = inst_23739);
(statearr_23745_23811[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23744 === (20)))
{var state_23743__$1 = state_23743;var statearr_23746_23812 = state_23743__$1;(statearr_23746_23812[(2)] = null);
(statearr_23746_23812[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23744 === (1)))
{var state_23743__$1 = state_23743;var statearr_23747_23813 = state_23743__$1;(statearr_23747_23813[(2)] = null);
(statearr_23747_23813[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23744 === (4)))
{var inst_23708 = (state_23743[(7)]);var inst_23708__$1 = (state_23743[(2)]);var inst_23709 = (inst_23708__$1 == null);var state_23743__$1 = (function (){var statearr_23748 = state_23743;(statearr_23748[(7)] = inst_23708__$1);
return statearr_23748;
})();if(cljs.core.truth_(inst_23709))
{var statearr_23749_23814 = state_23743__$1;(statearr_23749_23814[(1)] = (5));
} else
{var statearr_23750_23815 = state_23743__$1;(statearr_23750_23815[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23744 === (15)))
{var inst_23721 = (state_23743[(8)]);var state_23743__$1 = state_23743;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23743__$1,(18),to,inst_23721);
} else
{if((state_val_23744 === (21)))
{var inst_23734 = (state_23743[(2)]);var state_23743__$1 = state_23743;var statearr_23751_23816 = state_23743__$1;(statearr_23751_23816[(2)] = inst_23734);
(statearr_23751_23816[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23744 === (13)))
{var inst_23736 = (state_23743[(2)]);var state_23743__$1 = (function (){var statearr_23752 = state_23743;(statearr_23752[(9)] = inst_23736);
return statearr_23752;
})();var statearr_23753_23817 = state_23743__$1;(statearr_23753_23817[(2)] = null);
(statearr_23753_23817[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23744 === (6)))
{var inst_23708 = (state_23743[(7)]);var state_23743__$1 = state_23743;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23743__$1,(11),inst_23708);
} else
{if((state_val_23744 === (17)))
{var inst_23729 = (state_23743[(2)]);var state_23743__$1 = state_23743;if(cljs.core.truth_(inst_23729))
{var statearr_23754_23818 = state_23743__$1;(statearr_23754_23818[(1)] = (19));
} else
{var statearr_23755_23819 = state_23743__$1;(statearr_23755_23819[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23744 === (3)))
{var inst_23741 = (state_23743[(2)]);var state_23743__$1 = state_23743;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23743__$1,inst_23741);
} else
{if((state_val_23744 === (12)))
{var inst_23718 = (state_23743[(10)]);var state_23743__$1 = state_23743;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23743__$1,(14),inst_23718);
} else
{if((state_val_23744 === (2)))
{var state_23743__$1 = state_23743;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23743__$1,(4),results);
} else
{if((state_val_23744 === (19)))
{var state_23743__$1 = state_23743;var statearr_23756_23820 = state_23743__$1;(statearr_23756_23820[(2)] = null);
(statearr_23756_23820[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23744 === (11)))
{var inst_23718 = (state_23743[(2)]);var state_23743__$1 = (function (){var statearr_23757 = state_23743;(statearr_23757[(10)] = inst_23718);
return statearr_23757;
})();var statearr_23758_23821 = state_23743__$1;(statearr_23758_23821[(2)] = null);
(statearr_23758_23821[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23744 === (9)))
{var state_23743__$1 = state_23743;var statearr_23759_23822 = state_23743__$1;(statearr_23759_23822[(2)] = null);
(statearr_23759_23822[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23744 === (5)))
{var state_23743__$1 = state_23743;if(cljs.core.truth_(close_QMARK_))
{var statearr_23760_23823 = state_23743__$1;(statearr_23760_23823[(1)] = (8));
} else
{var statearr_23761_23824 = state_23743__$1;(statearr_23761_23824[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23744 === (14)))
{var inst_23721 = (state_23743[(8)]);var inst_23723 = (state_23743[(11)]);var inst_23721__$1 = (state_23743[(2)]);var inst_23722 = (inst_23721__$1 == null);var inst_23723__$1 = cljs.core.not.call(null,inst_23722);var state_23743__$1 = (function (){var statearr_23762 = state_23743;(statearr_23762[(8)] = inst_23721__$1);
(statearr_23762[(11)] = inst_23723__$1);
return statearr_23762;
})();if(inst_23723__$1)
{var statearr_23763_23825 = state_23743__$1;(statearr_23763_23825[(1)] = (15));
} else
{var statearr_23764_23826 = state_23743__$1;(statearr_23764_23826[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23744 === (16)))
{var inst_23723 = (state_23743[(11)]);var state_23743__$1 = state_23743;var statearr_23765_23827 = state_23743__$1;(statearr_23765_23827[(2)] = inst_23723);
(statearr_23765_23827[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23744 === (10)))
{var inst_23715 = (state_23743[(2)]);var state_23743__$1 = state_23743;var statearr_23766_23828 = state_23743__$1;(statearr_23766_23828[(2)] = inst_23715);
(statearr_23766_23828[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23744 === (18)))
{var inst_23726 = (state_23743[(2)]);var state_23743__$1 = state_23743;var statearr_23767_23829 = state_23743__$1;(statearr_23767_23829[(2)] = inst_23726);
(statearr_23767_23829[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23744 === (8)))
{var inst_23712 = cljs.core.async.close_BANG_.call(null,to);var state_23743__$1 = state_23743;var statearr_23768_23830 = state_23743__$1;(statearr_23768_23830[(2)] = inst_23712);
(statearr_23768_23830[(1)] = (10));
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
var state_machine__9111__auto____0 = (function (){var statearr_23772 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23772[(0)] = state_machine__9111__auto__);
(statearr_23772[(1)] = (1));
return statearr_23772;
});
var state_machine__9111__auto____1 = (function (state_23743){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23743);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23773){if((e23773 instanceof Object))
{var ex__9114__auto__ = e23773;var statearr_23774_23831 = state_23743;(statearr_23774_23831[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23743);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23773;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23832 = state_23743;
state_23743 = G__23832;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23743){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23775 = f__9126__auto__.call(null);(statearr_23775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_23775;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__9125__auto___23933 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23933,tc,fc){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23933,tc,fc){
return (function (state_23908){var state_val_23909 = (state_23908[(1)]);if((state_val_23909 === (7)))
{var inst_23904 = (state_23908[(2)]);var state_23908__$1 = state_23908;var statearr_23910_23934 = state_23908__$1;(statearr_23910_23934[(2)] = inst_23904);
(statearr_23910_23934[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23909 === (1)))
{var state_23908__$1 = state_23908;var statearr_23911_23935 = state_23908__$1;(statearr_23911_23935[(2)] = null);
(statearr_23911_23935[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23909 === (4)))
{var inst_23885 = (state_23908[(7)]);var inst_23885__$1 = (state_23908[(2)]);var inst_23886 = (inst_23885__$1 == null);var state_23908__$1 = (function (){var statearr_23912 = state_23908;(statearr_23912[(7)] = inst_23885__$1);
return statearr_23912;
})();if(cljs.core.truth_(inst_23886))
{var statearr_23913_23936 = state_23908__$1;(statearr_23913_23936[(1)] = (5));
} else
{var statearr_23914_23937 = state_23908__$1;(statearr_23914_23937[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23909 === (13)))
{var state_23908__$1 = state_23908;var statearr_23915_23938 = state_23908__$1;(statearr_23915_23938[(2)] = null);
(statearr_23915_23938[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23909 === (6)))
{var inst_23885 = (state_23908[(7)]);var inst_23891 = p.call(null,inst_23885);var state_23908__$1 = state_23908;if(cljs.core.truth_(inst_23891))
{var statearr_23916_23939 = state_23908__$1;(statearr_23916_23939[(1)] = (9));
} else
{var statearr_23917_23940 = state_23908__$1;(statearr_23917_23940[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23909 === (3)))
{var inst_23906 = (state_23908[(2)]);var state_23908__$1 = state_23908;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23908__$1,inst_23906);
} else
{if((state_val_23909 === (12)))
{var state_23908__$1 = state_23908;var statearr_23918_23941 = state_23908__$1;(statearr_23918_23941[(2)] = null);
(statearr_23918_23941[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23909 === (2)))
{var state_23908__$1 = state_23908;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23908__$1,(4),ch);
} else
{if((state_val_23909 === (11)))
{var inst_23885 = (state_23908[(7)]);var inst_23895 = (state_23908[(2)]);var state_23908__$1 = state_23908;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23908__$1,(8),inst_23895,inst_23885);
} else
{if((state_val_23909 === (9)))
{var state_23908__$1 = state_23908;var statearr_23919_23942 = state_23908__$1;(statearr_23919_23942[(2)] = tc);
(statearr_23919_23942[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23909 === (5)))
{var inst_23888 = cljs.core.async.close_BANG_.call(null,tc);var inst_23889 = cljs.core.async.close_BANG_.call(null,fc);var state_23908__$1 = (function (){var statearr_23920 = state_23908;(statearr_23920[(8)] = inst_23888);
return statearr_23920;
})();var statearr_23921_23943 = state_23908__$1;(statearr_23921_23943[(2)] = inst_23889);
(statearr_23921_23943[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23909 === (14)))
{var inst_23902 = (state_23908[(2)]);var state_23908__$1 = state_23908;var statearr_23922_23944 = state_23908__$1;(statearr_23922_23944[(2)] = inst_23902);
(statearr_23922_23944[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23909 === (10)))
{var state_23908__$1 = state_23908;var statearr_23923_23945 = state_23908__$1;(statearr_23923_23945[(2)] = fc);
(statearr_23923_23945[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23909 === (8)))
{var inst_23897 = (state_23908[(2)]);var state_23908__$1 = state_23908;if(cljs.core.truth_(inst_23897))
{var statearr_23924_23946 = state_23908__$1;(statearr_23924_23946[(1)] = (12));
} else
{var statearr_23925_23947 = state_23908__$1;(statearr_23925_23947[(1)] = (13));
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
});})(c__9125__auto___23933,tc,fc))
;return ((function (switch__9110__auto__,c__9125__auto___23933,tc,fc){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23929 = [null,null,null,null,null,null,null,null,null];(statearr_23929[(0)] = state_machine__9111__auto__);
(statearr_23929[(1)] = (1));
return statearr_23929;
});
var state_machine__9111__auto____1 = (function (state_23908){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23908);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23930){if((e23930 instanceof Object))
{var ex__9114__auto__ = e23930;var statearr_23931_23948 = state_23908;(statearr_23931_23948[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23908);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23930;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23949 = state_23908;
state_23908 = G__23949;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23908){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23933,tc,fc))
})();var state__9127__auto__ = (function (){var statearr_23932 = f__9126__auto__.call(null);(statearr_23932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23933);
return statearr_23932;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23933,tc,fc))
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
return (function (state_23996){var state_val_23997 = (state_23996[(1)]);if((state_val_23997 === (7)))
{var inst_23992 = (state_23996[(2)]);var state_23996__$1 = state_23996;var statearr_23998_24014 = state_23996__$1;(statearr_23998_24014[(2)] = inst_23992);
(statearr_23998_24014[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23997 === (6)))
{var inst_23982 = (state_23996[(7)]);var inst_23985 = (state_23996[(8)]);var inst_23989 = f.call(null,inst_23982,inst_23985);var inst_23982__$1 = inst_23989;var state_23996__$1 = (function (){var statearr_23999 = state_23996;(statearr_23999[(7)] = inst_23982__$1);
return statearr_23999;
})();var statearr_24000_24015 = state_23996__$1;(statearr_24000_24015[(2)] = null);
(statearr_24000_24015[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23997 === (5)))
{var inst_23982 = (state_23996[(7)]);var state_23996__$1 = state_23996;var statearr_24001_24016 = state_23996__$1;(statearr_24001_24016[(2)] = inst_23982);
(statearr_24001_24016[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23997 === (4)))
{var inst_23985 = (state_23996[(8)]);var inst_23985__$1 = (state_23996[(2)]);var inst_23986 = (inst_23985__$1 == null);var state_23996__$1 = (function (){var statearr_24002 = state_23996;(statearr_24002[(8)] = inst_23985__$1);
return statearr_24002;
})();if(cljs.core.truth_(inst_23986))
{var statearr_24003_24017 = state_23996__$1;(statearr_24003_24017[(1)] = (5));
} else
{var statearr_24004_24018 = state_23996__$1;(statearr_24004_24018[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23997 === (3)))
{var inst_23994 = (state_23996[(2)]);var state_23996__$1 = state_23996;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23996__$1,inst_23994);
} else
{if((state_val_23997 === (2)))
{var state_23996__$1 = state_23996;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23996__$1,(4),ch);
} else
{if((state_val_23997 === (1)))
{var inst_23982 = init;var state_23996__$1 = (function (){var statearr_24005 = state_23996;(statearr_24005[(7)] = inst_23982);
return statearr_24005;
})();var statearr_24006_24019 = state_23996__$1;(statearr_24006_24019[(2)] = null);
(statearr_24006_24019[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_24010 = [null,null,null,null,null,null,null,null,null];(statearr_24010[(0)] = state_machine__9111__auto__);
(statearr_24010[(1)] = (1));
return statearr_24010;
});
var state_machine__9111__auto____1 = (function (state_23996){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23996);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24011){if((e24011 instanceof Object))
{var ex__9114__auto__ = e24011;var statearr_24012_24020 = state_23996;(statearr_24012_24020[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23996);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24011;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24021 = state_23996;
state_23996 = G__24021;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23996){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24013 = f__9126__auto__.call(null);(statearr_24013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24013;
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
return (function (state_24095){var state_val_24096 = (state_24095[(1)]);if((state_val_24096 === (7)))
{var inst_24077 = (state_24095[(2)]);var state_24095__$1 = state_24095;var statearr_24097_24120 = state_24095__$1;(statearr_24097_24120[(2)] = inst_24077);
(statearr_24097_24120[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24096 === (1)))
{var inst_24071 = cljs.core.seq.call(null,coll);var inst_24072 = inst_24071;var state_24095__$1 = (function (){var statearr_24098 = state_24095;(statearr_24098[(7)] = inst_24072);
return statearr_24098;
})();var statearr_24099_24121 = state_24095__$1;(statearr_24099_24121[(2)] = null);
(statearr_24099_24121[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24096 === (4)))
{var inst_24072 = (state_24095[(7)]);var inst_24075 = cljs.core.first.call(null,inst_24072);var state_24095__$1 = state_24095;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24095__$1,(7),ch,inst_24075);
} else
{if((state_val_24096 === (13)))
{var inst_24089 = (state_24095[(2)]);var state_24095__$1 = state_24095;var statearr_24100_24122 = state_24095__$1;(statearr_24100_24122[(2)] = inst_24089);
(statearr_24100_24122[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24096 === (6)))
{var inst_24080 = (state_24095[(2)]);var state_24095__$1 = state_24095;if(cljs.core.truth_(inst_24080))
{var statearr_24101_24123 = state_24095__$1;(statearr_24101_24123[(1)] = (8));
} else
{var statearr_24102_24124 = state_24095__$1;(statearr_24102_24124[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24096 === (3)))
{var inst_24093 = (state_24095[(2)]);var state_24095__$1 = state_24095;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24095__$1,inst_24093);
} else
{if((state_val_24096 === (12)))
{var state_24095__$1 = state_24095;var statearr_24103_24125 = state_24095__$1;(statearr_24103_24125[(2)] = null);
(statearr_24103_24125[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24096 === (2)))
{var inst_24072 = (state_24095[(7)]);var state_24095__$1 = state_24095;if(cljs.core.truth_(inst_24072))
{var statearr_24104_24126 = state_24095__$1;(statearr_24104_24126[(1)] = (4));
} else
{var statearr_24105_24127 = state_24095__$1;(statearr_24105_24127[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24096 === (11)))
{var inst_24086 = cljs.core.async.close_BANG_.call(null,ch);var state_24095__$1 = state_24095;var statearr_24106_24128 = state_24095__$1;(statearr_24106_24128[(2)] = inst_24086);
(statearr_24106_24128[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24096 === (9)))
{var state_24095__$1 = state_24095;if(cljs.core.truth_(close_QMARK_))
{var statearr_24107_24129 = state_24095__$1;(statearr_24107_24129[(1)] = (11));
} else
{var statearr_24108_24130 = state_24095__$1;(statearr_24108_24130[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24096 === (5)))
{var inst_24072 = (state_24095[(7)]);var state_24095__$1 = state_24095;var statearr_24109_24131 = state_24095__$1;(statearr_24109_24131[(2)] = inst_24072);
(statearr_24109_24131[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24096 === (10)))
{var inst_24091 = (state_24095[(2)]);var state_24095__$1 = state_24095;var statearr_24110_24132 = state_24095__$1;(statearr_24110_24132[(2)] = inst_24091);
(statearr_24110_24132[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24096 === (8)))
{var inst_24072 = (state_24095[(7)]);var inst_24082 = cljs.core.next.call(null,inst_24072);var inst_24072__$1 = inst_24082;var state_24095__$1 = (function (){var statearr_24111 = state_24095;(statearr_24111[(7)] = inst_24072__$1);
return statearr_24111;
})();var statearr_24112_24133 = state_24095__$1;(statearr_24112_24133[(2)] = null);
(statearr_24112_24133[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_24116 = [null,null,null,null,null,null,null,null];(statearr_24116[(0)] = state_machine__9111__auto__);
(statearr_24116[(1)] = (1));
return statearr_24116;
});
var state_machine__9111__auto____1 = (function (state_24095){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24095);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24117){if((e24117 instanceof Object))
{var ex__9114__auto__ = e24117;var statearr_24118_24134 = state_24095;(statearr_24118_24134[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24095);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24117;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24135 = state_24095;
state_24095 = G__24135;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24095){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24119 = f__9126__auto__.call(null);(statearr_24119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24119;
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
cljs.core.async.Mux = (function (){var obj24137 = {};return obj24137;
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
cljs.core.async.Mult = (function (){var obj24139 = {};return obj24139;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24361 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24361 = (function (cs,ch,mult,meta24362){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24362 = meta24362;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24361.cljs$lang$type = true;
cljs.core.async.t24361.cljs$lang$ctorStr = "cljs.core.async/t24361";
cljs.core.async.t24361.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24361");
});})(cs))
;
cljs.core.async.t24361.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24361.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24361.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24361.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24361.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24361.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24361.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24363){var self__ = this;
var _24363__$1 = this;return self__.meta24362;
});})(cs))
;
cljs.core.async.t24361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24363,meta24362__$1){var self__ = this;
var _24363__$1 = this;return (new cljs.core.async.t24361(self__.cs,self__.ch,self__.mult,meta24362__$1));
});})(cs))
;
cljs.core.async.__GT_t24361 = ((function (cs){
return (function __GT_t24361(cs__$1,ch__$1,mult__$1,meta24362){return (new cljs.core.async.t24361(cs__$1,ch__$1,mult__$1,meta24362));
});})(cs))
;
}
return (new cljs.core.async.t24361(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__9125__auto___24582 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24582,cs,m,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24582,cs,m,dchan,dctr,done){
return (function (state_24494){var state_val_24495 = (state_24494[(1)]);if((state_val_24495 === (7)))
{var inst_24490 = (state_24494[(2)]);var state_24494__$1 = state_24494;var statearr_24496_24583 = state_24494__$1;(statearr_24496_24583[(2)] = inst_24490);
(statearr_24496_24583[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (20)))
{var inst_24395 = (state_24494[(7)]);var inst_24405 = cljs.core.first.call(null,inst_24395);var inst_24406 = cljs.core.nth.call(null,inst_24405,(0),null);var inst_24407 = cljs.core.nth.call(null,inst_24405,(1),null);var state_24494__$1 = (function (){var statearr_24497 = state_24494;(statearr_24497[(8)] = inst_24406);
return statearr_24497;
})();if(cljs.core.truth_(inst_24407))
{var statearr_24498_24584 = state_24494__$1;(statearr_24498_24584[(1)] = (22));
} else
{var statearr_24499_24585 = state_24494__$1;(statearr_24499_24585[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (27)))
{var inst_24437 = (state_24494[(9)]);var inst_24435 = (state_24494[(10)]);var inst_24366 = (state_24494[(11)]);var inst_24442 = (state_24494[(12)]);var inst_24442__$1 = cljs.core._nth.call(null,inst_24435,inst_24437);var inst_24443 = cljs.core.async.put_BANG_.call(null,inst_24442__$1,inst_24366,done);var state_24494__$1 = (function (){var statearr_24500 = state_24494;(statearr_24500[(12)] = inst_24442__$1);
return statearr_24500;
})();if(cljs.core.truth_(inst_24443))
{var statearr_24501_24586 = state_24494__$1;(statearr_24501_24586[(1)] = (30));
} else
{var statearr_24502_24587 = state_24494__$1;(statearr_24502_24587[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (1)))
{var state_24494__$1 = state_24494;var statearr_24503_24588 = state_24494__$1;(statearr_24503_24588[(2)] = null);
(statearr_24503_24588[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (24)))
{var inst_24395 = (state_24494[(7)]);var inst_24412 = (state_24494[(2)]);var inst_24413 = cljs.core.next.call(null,inst_24395);var inst_24375 = inst_24413;var inst_24376 = null;var inst_24377 = (0);var inst_24378 = (0);var state_24494__$1 = (function (){var statearr_24504 = state_24494;(statearr_24504[(13)] = inst_24375);
(statearr_24504[(14)] = inst_24376);
(statearr_24504[(15)] = inst_24377);
(statearr_24504[(16)] = inst_24412);
(statearr_24504[(17)] = inst_24378);
return statearr_24504;
})();var statearr_24505_24589 = state_24494__$1;(statearr_24505_24589[(2)] = null);
(statearr_24505_24589[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (39)))
{var state_24494__$1 = state_24494;var statearr_24509_24590 = state_24494__$1;(statearr_24509_24590[(2)] = null);
(statearr_24509_24590[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (4)))
{var inst_24366 = (state_24494[(11)]);var inst_24366__$1 = (state_24494[(2)]);var inst_24367 = (inst_24366__$1 == null);var state_24494__$1 = (function (){var statearr_24510 = state_24494;(statearr_24510[(11)] = inst_24366__$1);
return statearr_24510;
})();if(cljs.core.truth_(inst_24367))
{var statearr_24511_24591 = state_24494__$1;(statearr_24511_24591[(1)] = (5));
} else
{var statearr_24512_24592 = state_24494__$1;(statearr_24512_24592[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (15)))
{var inst_24375 = (state_24494[(13)]);var inst_24376 = (state_24494[(14)]);var inst_24377 = (state_24494[(15)]);var inst_24378 = (state_24494[(17)]);var inst_24391 = (state_24494[(2)]);var inst_24392 = (inst_24378 + (1));var tmp24506 = inst_24375;var tmp24507 = inst_24376;var tmp24508 = inst_24377;var inst_24375__$1 = tmp24506;var inst_24376__$1 = tmp24507;var inst_24377__$1 = tmp24508;var inst_24378__$1 = inst_24392;var state_24494__$1 = (function (){var statearr_24513 = state_24494;(statearr_24513[(13)] = inst_24375__$1);
(statearr_24513[(14)] = inst_24376__$1);
(statearr_24513[(18)] = inst_24391);
(statearr_24513[(15)] = inst_24377__$1);
(statearr_24513[(17)] = inst_24378__$1);
return statearr_24513;
})();var statearr_24514_24593 = state_24494__$1;(statearr_24514_24593[(2)] = null);
(statearr_24514_24593[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (21)))
{var inst_24416 = (state_24494[(2)]);var state_24494__$1 = state_24494;var statearr_24518_24594 = state_24494__$1;(statearr_24518_24594[(2)] = inst_24416);
(statearr_24518_24594[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (31)))
{var inst_24442 = (state_24494[(12)]);var inst_24446 = done.call(null,null);var inst_24447 = cljs.core.async.untap_STAR_.call(null,m,inst_24442);var state_24494__$1 = (function (){var statearr_24519 = state_24494;(statearr_24519[(19)] = inst_24446);
return statearr_24519;
})();var statearr_24520_24595 = state_24494__$1;(statearr_24520_24595[(2)] = inst_24447);
(statearr_24520_24595[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (32)))
{var inst_24437 = (state_24494[(9)]);var inst_24435 = (state_24494[(10)]);var inst_24436 = (state_24494[(20)]);var inst_24434 = (state_24494[(21)]);var inst_24449 = (state_24494[(2)]);var inst_24450 = (inst_24437 + (1));var tmp24515 = inst_24435;var tmp24516 = inst_24436;var tmp24517 = inst_24434;var inst_24434__$1 = tmp24517;var inst_24435__$1 = tmp24515;var inst_24436__$1 = tmp24516;var inst_24437__$1 = inst_24450;var state_24494__$1 = (function (){var statearr_24521 = state_24494;(statearr_24521[(22)] = inst_24449);
(statearr_24521[(9)] = inst_24437__$1);
(statearr_24521[(10)] = inst_24435__$1);
(statearr_24521[(20)] = inst_24436__$1);
(statearr_24521[(21)] = inst_24434__$1);
return statearr_24521;
})();var statearr_24522_24596 = state_24494__$1;(statearr_24522_24596[(2)] = null);
(statearr_24522_24596[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (40)))
{var inst_24462 = (state_24494[(23)]);var inst_24466 = done.call(null,null);var inst_24467 = cljs.core.async.untap_STAR_.call(null,m,inst_24462);var state_24494__$1 = (function (){var statearr_24523 = state_24494;(statearr_24523[(24)] = inst_24466);
return statearr_24523;
})();var statearr_24524_24597 = state_24494__$1;(statearr_24524_24597[(2)] = inst_24467);
(statearr_24524_24597[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (33)))
{var inst_24453 = (state_24494[(25)]);var inst_24455 = cljs.core.chunked_seq_QMARK_.call(null,inst_24453);var state_24494__$1 = state_24494;if(inst_24455)
{var statearr_24525_24598 = state_24494__$1;(statearr_24525_24598[(1)] = (36));
} else
{var statearr_24526_24599 = state_24494__$1;(statearr_24526_24599[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (13)))
{var inst_24385 = (state_24494[(26)]);var inst_24388 = cljs.core.async.close_BANG_.call(null,inst_24385);var state_24494__$1 = state_24494;var statearr_24527_24600 = state_24494__$1;(statearr_24527_24600[(2)] = inst_24388);
(statearr_24527_24600[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (22)))
{var inst_24406 = (state_24494[(8)]);var inst_24409 = cljs.core.async.close_BANG_.call(null,inst_24406);var state_24494__$1 = state_24494;var statearr_24528_24601 = state_24494__$1;(statearr_24528_24601[(2)] = inst_24409);
(statearr_24528_24601[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (36)))
{var inst_24453 = (state_24494[(25)]);var inst_24457 = cljs.core.chunk_first.call(null,inst_24453);var inst_24458 = cljs.core.chunk_rest.call(null,inst_24453);var inst_24459 = cljs.core.count.call(null,inst_24457);var inst_24434 = inst_24458;var inst_24435 = inst_24457;var inst_24436 = inst_24459;var inst_24437 = (0);var state_24494__$1 = (function (){var statearr_24529 = state_24494;(statearr_24529[(9)] = inst_24437);
(statearr_24529[(10)] = inst_24435);
(statearr_24529[(20)] = inst_24436);
(statearr_24529[(21)] = inst_24434);
return statearr_24529;
})();var statearr_24530_24602 = state_24494__$1;(statearr_24530_24602[(2)] = null);
(statearr_24530_24602[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (41)))
{var inst_24453 = (state_24494[(25)]);var inst_24469 = (state_24494[(2)]);var inst_24470 = cljs.core.next.call(null,inst_24453);var inst_24434 = inst_24470;var inst_24435 = null;var inst_24436 = (0);var inst_24437 = (0);var state_24494__$1 = (function (){var statearr_24531 = state_24494;(statearr_24531[(27)] = inst_24469);
(statearr_24531[(9)] = inst_24437);
(statearr_24531[(10)] = inst_24435);
(statearr_24531[(20)] = inst_24436);
(statearr_24531[(21)] = inst_24434);
return statearr_24531;
})();var statearr_24532_24603 = state_24494__$1;(statearr_24532_24603[(2)] = null);
(statearr_24532_24603[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (43)))
{var state_24494__$1 = state_24494;var statearr_24533_24604 = state_24494__$1;(statearr_24533_24604[(2)] = null);
(statearr_24533_24604[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (29)))
{var inst_24478 = (state_24494[(2)]);var state_24494__$1 = state_24494;var statearr_24534_24605 = state_24494__$1;(statearr_24534_24605[(2)] = inst_24478);
(statearr_24534_24605[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (44)))
{var inst_24487 = (state_24494[(2)]);var state_24494__$1 = (function (){var statearr_24535 = state_24494;(statearr_24535[(28)] = inst_24487);
return statearr_24535;
})();var statearr_24536_24606 = state_24494__$1;(statearr_24536_24606[(2)] = null);
(statearr_24536_24606[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (6)))
{var inst_24426 = (state_24494[(29)]);var inst_24425 = cljs.core.deref.call(null,cs);var inst_24426__$1 = cljs.core.keys.call(null,inst_24425);var inst_24427 = cljs.core.count.call(null,inst_24426__$1);var inst_24428 = cljs.core.reset_BANG_.call(null,dctr,inst_24427);var inst_24433 = cljs.core.seq.call(null,inst_24426__$1);var inst_24434 = inst_24433;var inst_24435 = null;var inst_24436 = (0);var inst_24437 = (0);var state_24494__$1 = (function (){var statearr_24537 = state_24494;(statearr_24537[(30)] = inst_24428);
(statearr_24537[(9)] = inst_24437);
(statearr_24537[(10)] = inst_24435);
(statearr_24537[(20)] = inst_24436);
(statearr_24537[(29)] = inst_24426__$1);
(statearr_24537[(21)] = inst_24434);
return statearr_24537;
})();var statearr_24538_24607 = state_24494__$1;(statearr_24538_24607[(2)] = null);
(statearr_24538_24607[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (28)))
{var inst_24453 = (state_24494[(25)]);var inst_24434 = (state_24494[(21)]);var inst_24453__$1 = cljs.core.seq.call(null,inst_24434);var state_24494__$1 = (function (){var statearr_24539 = state_24494;(statearr_24539[(25)] = inst_24453__$1);
return statearr_24539;
})();if(inst_24453__$1)
{var statearr_24540_24608 = state_24494__$1;(statearr_24540_24608[(1)] = (33));
} else
{var statearr_24541_24609 = state_24494__$1;(statearr_24541_24609[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (25)))
{var inst_24437 = (state_24494[(9)]);var inst_24436 = (state_24494[(20)]);var inst_24439 = (inst_24437 < inst_24436);var inst_24440 = inst_24439;var state_24494__$1 = state_24494;if(cljs.core.truth_(inst_24440))
{var statearr_24542_24610 = state_24494__$1;(statearr_24542_24610[(1)] = (27));
} else
{var statearr_24543_24611 = state_24494__$1;(statearr_24543_24611[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (34)))
{var state_24494__$1 = state_24494;var statearr_24544_24612 = state_24494__$1;(statearr_24544_24612[(2)] = null);
(statearr_24544_24612[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (17)))
{var state_24494__$1 = state_24494;var statearr_24545_24613 = state_24494__$1;(statearr_24545_24613[(2)] = null);
(statearr_24545_24613[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (3)))
{var inst_24492 = (state_24494[(2)]);var state_24494__$1 = state_24494;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24494__$1,inst_24492);
} else
{if((state_val_24495 === (12)))
{var inst_24421 = (state_24494[(2)]);var state_24494__$1 = state_24494;var statearr_24546_24614 = state_24494__$1;(statearr_24546_24614[(2)] = inst_24421);
(statearr_24546_24614[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (2)))
{var state_24494__$1 = state_24494;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24494__$1,(4),ch);
} else
{if((state_val_24495 === (23)))
{var state_24494__$1 = state_24494;var statearr_24547_24615 = state_24494__$1;(statearr_24547_24615[(2)] = null);
(statearr_24547_24615[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (35)))
{var inst_24476 = (state_24494[(2)]);var state_24494__$1 = state_24494;var statearr_24548_24616 = state_24494__$1;(statearr_24548_24616[(2)] = inst_24476);
(statearr_24548_24616[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (19)))
{var inst_24395 = (state_24494[(7)]);var inst_24399 = cljs.core.chunk_first.call(null,inst_24395);var inst_24400 = cljs.core.chunk_rest.call(null,inst_24395);var inst_24401 = cljs.core.count.call(null,inst_24399);var inst_24375 = inst_24400;var inst_24376 = inst_24399;var inst_24377 = inst_24401;var inst_24378 = (0);var state_24494__$1 = (function (){var statearr_24549 = state_24494;(statearr_24549[(13)] = inst_24375);
(statearr_24549[(14)] = inst_24376);
(statearr_24549[(15)] = inst_24377);
(statearr_24549[(17)] = inst_24378);
return statearr_24549;
})();var statearr_24550_24617 = state_24494__$1;(statearr_24550_24617[(2)] = null);
(statearr_24550_24617[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (11)))
{var inst_24375 = (state_24494[(13)]);var inst_24395 = (state_24494[(7)]);var inst_24395__$1 = cljs.core.seq.call(null,inst_24375);var state_24494__$1 = (function (){var statearr_24551 = state_24494;(statearr_24551[(7)] = inst_24395__$1);
return statearr_24551;
})();if(inst_24395__$1)
{var statearr_24552_24618 = state_24494__$1;(statearr_24552_24618[(1)] = (16));
} else
{var statearr_24553_24619 = state_24494__$1;(statearr_24553_24619[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (9)))
{var inst_24423 = (state_24494[(2)]);var state_24494__$1 = state_24494;var statearr_24554_24620 = state_24494__$1;(statearr_24554_24620[(2)] = inst_24423);
(statearr_24554_24620[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (5)))
{var inst_24373 = cljs.core.deref.call(null,cs);var inst_24374 = cljs.core.seq.call(null,inst_24373);var inst_24375 = inst_24374;var inst_24376 = null;var inst_24377 = (0);var inst_24378 = (0);var state_24494__$1 = (function (){var statearr_24555 = state_24494;(statearr_24555[(13)] = inst_24375);
(statearr_24555[(14)] = inst_24376);
(statearr_24555[(15)] = inst_24377);
(statearr_24555[(17)] = inst_24378);
return statearr_24555;
})();var statearr_24556_24621 = state_24494__$1;(statearr_24556_24621[(2)] = null);
(statearr_24556_24621[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (14)))
{var state_24494__$1 = state_24494;var statearr_24557_24622 = state_24494__$1;(statearr_24557_24622[(2)] = null);
(statearr_24557_24622[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (45)))
{var inst_24484 = (state_24494[(2)]);var state_24494__$1 = state_24494;var statearr_24558_24623 = state_24494__$1;(statearr_24558_24623[(2)] = inst_24484);
(statearr_24558_24623[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (26)))
{var inst_24426 = (state_24494[(29)]);var inst_24480 = (state_24494[(2)]);var inst_24481 = cljs.core.seq.call(null,inst_24426);var state_24494__$1 = (function (){var statearr_24559 = state_24494;(statearr_24559[(31)] = inst_24480);
return statearr_24559;
})();if(inst_24481)
{var statearr_24560_24624 = state_24494__$1;(statearr_24560_24624[(1)] = (42));
} else
{var statearr_24561_24625 = state_24494__$1;(statearr_24561_24625[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (16)))
{var inst_24395 = (state_24494[(7)]);var inst_24397 = cljs.core.chunked_seq_QMARK_.call(null,inst_24395);var state_24494__$1 = state_24494;if(inst_24397)
{var statearr_24562_24626 = state_24494__$1;(statearr_24562_24626[(1)] = (19));
} else
{var statearr_24563_24627 = state_24494__$1;(statearr_24563_24627[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (38)))
{var inst_24473 = (state_24494[(2)]);var state_24494__$1 = state_24494;var statearr_24564_24628 = state_24494__$1;(statearr_24564_24628[(2)] = inst_24473);
(statearr_24564_24628[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (30)))
{var state_24494__$1 = state_24494;var statearr_24565_24629 = state_24494__$1;(statearr_24565_24629[(2)] = null);
(statearr_24565_24629[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (10)))
{var inst_24376 = (state_24494[(14)]);var inst_24378 = (state_24494[(17)]);var inst_24384 = cljs.core._nth.call(null,inst_24376,inst_24378);var inst_24385 = cljs.core.nth.call(null,inst_24384,(0),null);var inst_24386 = cljs.core.nth.call(null,inst_24384,(1),null);var state_24494__$1 = (function (){var statearr_24566 = state_24494;(statearr_24566[(26)] = inst_24385);
return statearr_24566;
})();if(cljs.core.truth_(inst_24386))
{var statearr_24567_24630 = state_24494__$1;(statearr_24567_24630[(1)] = (13));
} else
{var statearr_24568_24631 = state_24494__$1;(statearr_24568_24631[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (18)))
{var inst_24419 = (state_24494[(2)]);var state_24494__$1 = state_24494;var statearr_24569_24632 = state_24494__$1;(statearr_24569_24632[(2)] = inst_24419);
(statearr_24569_24632[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (42)))
{var state_24494__$1 = state_24494;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24494__$1,(45),dchan);
} else
{if((state_val_24495 === (37)))
{var inst_24462 = (state_24494[(23)]);var inst_24366 = (state_24494[(11)]);var inst_24453 = (state_24494[(25)]);var inst_24462__$1 = cljs.core.first.call(null,inst_24453);var inst_24463 = cljs.core.async.put_BANG_.call(null,inst_24462__$1,inst_24366,done);var state_24494__$1 = (function (){var statearr_24570 = state_24494;(statearr_24570[(23)] = inst_24462__$1);
return statearr_24570;
})();if(cljs.core.truth_(inst_24463))
{var statearr_24571_24633 = state_24494__$1;(statearr_24571_24633[(1)] = (39));
} else
{var statearr_24572_24634 = state_24494__$1;(statearr_24572_24634[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24495 === (8)))
{var inst_24377 = (state_24494[(15)]);var inst_24378 = (state_24494[(17)]);var inst_24380 = (inst_24378 < inst_24377);var inst_24381 = inst_24380;var state_24494__$1 = state_24494;if(cljs.core.truth_(inst_24381))
{var statearr_24573_24635 = state_24494__$1;(statearr_24573_24635[(1)] = (10));
} else
{var statearr_24574_24636 = state_24494__$1;(statearr_24574_24636[(1)] = (11));
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
});})(c__9125__auto___24582,cs,m,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___24582,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24578[(0)] = state_machine__9111__auto__);
(statearr_24578[(1)] = (1));
return statearr_24578;
});
var state_machine__9111__auto____1 = (function (state_24494){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24494);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24579){if((e24579 instanceof Object))
{var ex__9114__auto__ = e24579;var statearr_24580_24637 = state_24494;(statearr_24580_24637[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24494);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24579;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24638 = state_24494;
state_24494 = G__24638;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24494){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24582,cs,m,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_24581 = f__9126__auto__.call(null);(statearr_24581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24582);
return statearr_24581;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24582,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj24640 = {};return obj24640;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24641){var map__24646 = p__24641;var map__24646__$1 = ((cljs.core.seq_QMARK_.call(null,map__24646))?cljs.core.apply.call(null,cljs.core.hash_map,map__24646):map__24646);var opts = map__24646__$1;var statearr_24647_24650 = state;(statearr_24647_24650[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24646,map__24646__$1,opts){
return (function (val){var statearr_24648_24651 = state;(statearr_24648_24651[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24646,map__24646__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_24649_24652 = state;(statearr_24649_24652[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24641 = null;if (arguments.length > 3) {
  p__24641 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24641);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24653){
var state = cljs.core.first(arglist__24653);
arglist__24653 = cljs.core.next(arglist__24653);
var cont_block = cljs.core.first(arglist__24653);
arglist__24653 = cljs.core.next(arglist__24653);
var ports = cljs.core.first(arglist__24653);
var p__24641 = cljs.core.rest(arglist__24653);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24641);
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
;var m = (function (){if(typeof cljs.core.async.t24773 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24773 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24774){
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
this.meta24774 = meta24774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24773.cljs$lang$type = true;
cljs.core.async.t24773.cljs$lang$ctorStr = "cljs.core.async/t24773";
cljs.core.async.t24773.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24773");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24773.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24773.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24773.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24773.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24773.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24773.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24773.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24773.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24773.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24775){var self__ = this;
var _24775__$1 = this;return self__.meta24774;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24775,meta24774__$1){var self__ = this;
var _24775__$1 = this;return (new cljs.core.async.t24773(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24774__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24773 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24773(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24774){return (new cljs.core.async.t24773(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24774));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24773(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__9125__auto___24892 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24892,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24892,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24845){var state_val_24846 = (state_24845[(1)]);if((state_val_24846 === (7)))
{var inst_24789 = (state_24845[(7)]);var inst_24794 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24789);var state_24845__$1 = state_24845;var statearr_24847_24893 = state_24845__$1;(statearr_24847_24893[(2)] = inst_24794);
(statearr_24847_24893[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24846 === (20)))
{var inst_24804 = (state_24845[(8)]);var state_24845__$1 = state_24845;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24845__$1,(23),out,inst_24804);
} else
{if((state_val_24846 === (1)))
{var inst_24779 = (state_24845[(9)]);var inst_24779__$1 = calc_state.call(null);var inst_24780 = cljs.core.seq_QMARK_.call(null,inst_24779__$1);var state_24845__$1 = (function (){var statearr_24848 = state_24845;(statearr_24848[(9)] = inst_24779__$1);
return statearr_24848;
})();if(inst_24780)
{var statearr_24849_24894 = state_24845__$1;(statearr_24849_24894[(1)] = (2));
} else
{var statearr_24850_24895 = state_24845__$1;(statearr_24850_24895[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24846 === (24)))
{var inst_24797 = (state_24845[(10)]);var inst_24789 = inst_24797;var state_24845__$1 = (function (){var statearr_24851 = state_24845;(statearr_24851[(7)] = inst_24789);
return statearr_24851;
})();var statearr_24852_24896 = state_24845__$1;(statearr_24852_24896[(2)] = null);
(statearr_24852_24896[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24846 === (4)))
{var inst_24779 = (state_24845[(9)]);var inst_24785 = (state_24845[(2)]);var inst_24786 = cljs.core.get.call(null,inst_24785,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24787 = cljs.core.get.call(null,inst_24785,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24788 = cljs.core.get.call(null,inst_24785,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_24789 = inst_24779;var state_24845__$1 = (function (){var statearr_24853 = state_24845;(statearr_24853[(7)] = inst_24789);
(statearr_24853[(11)] = inst_24788);
(statearr_24853[(12)] = inst_24786);
(statearr_24853[(13)] = inst_24787);
return statearr_24853;
})();var statearr_24854_24897 = state_24845__$1;(statearr_24854_24897[(2)] = null);
(statearr_24854_24897[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24846 === (15)))
{var state_24845__$1 = state_24845;var statearr_24855_24898 = state_24845__$1;(statearr_24855_24898[(2)] = null);
(statearr_24855_24898[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24846 === (21)))
{var inst_24797 = (state_24845[(10)]);var inst_24789 = inst_24797;var state_24845__$1 = (function (){var statearr_24856 = state_24845;(statearr_24856[(7)] = inst_24789);
return statearr_24856;
})();var statearr_24857_24899 = state_24845__$1;(statearr_24857_24899[(2)] = null);
(statearr_24857_24899[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24846 === (13)))
{var inst_24841 = (state_24845[(2)]);var state_24845__$1 = state_24845;var statearr_24858_24900 = state_24845__$1;(statearr_24858_24900[(2)] = inst_24841);
(statearr_24858_24900[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24846 === (22)))
{var inst_24839 = (state_24845[(2)]);var state_24845__$1 = state_24845;var statearr_24859_24901 = state_24845__$1;(statearr_24859_24901[(2)] = inst_24839);
(statearr_24859_24901[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24846 === (6)))
{var inst_24843 = (state_24845[(2)]);var state_24845__$1 = state_24845;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24845__$1,inst_24843);
} else
{if((state_val_24846 === (25)))
{var state_24845__$1 = state_24845;var statearr_24860_24902 = state_24845__$1;(statearr_24860_24902[(2)] = null);
(statearr_24860_24902[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24846 === (17)))
{var inst_24819 = (state_24845[(14)]);var state_24845__$1 = state_24845;var statearr_24861_24903 = state_24845__$1;(statearr_24861_24903[(2)] = inst_24819);
(statearr_24861_24903[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24846 === (3)))
{var inst_24779 = (state_24845[(9)]);var state_24845__$1 = state_24845;var statearr_24862_24904 = state_24845__$1;(statearr_24862_24904[(2)] = inst_24779);
(statearr_24862_24904[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24846 === (12)))
{var inst_24819 = (state_24845[(14)]);var inst_24805 = (state_24845[(15)]);var inst_24800 = (state_24845[(16)]);var inst_24819__$1 = inst_24800.call(null,inst_24805);var state_24845__$1 = (function (){var statearr_24863 = state_24845;(statearr_24863[(14)] = inst_24819__$1);
return statearr_24863;
})();if(cljs.core.truth_(inst_24819__$1))
{var statearr_24864_24905 = state_24845__$1;(statearr_24864_24905[(1)] = (17));
} else
{var statearr_24865_24906 = state_24845__$1;(statearr_24865_24906[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24846 === (2)))
{var inst_24779 = (state_24845[(9)]);var inst_24782 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24779);var state_24845__$1 = state_24845;var statearr_24866_24907 = state_24845__$1;(statearr_24866_24907[(2)] = inst_24782);
(statearr_24866_24907[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24846 === (23)))
{var inst_24830 = (state_24845[(2)]);var state_24845__$1 = state_24845;if(cljs.core.truth_(inst_24830))
{var statearr_24867_24908 = state_24845__$1;(statearr_24867_24908[(1)] = (24));
} else
{var statearr_24868_24909 = state_24845__$1;(statearr_24868_24909[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24846 === (19)))
{var inst_24827 = (state_24845[(2)]);var state_24845__$1 = state_24845;if(cljs.core.truth_(inst_24827))
{var statearr_24869_24910 = state_24845__$1;(statearr_24869_24910[(1)] = (20));
} else
{var statearr_24870_24911 = state_24845__$1;(statearr_24870_24911[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24846 === (11)))
{var inst_24804 = (state_24845[(8)]);var inst_24810 = (inst_24804 == null);var state_24845__$1 = state_24845;if(cljs.core.truth_(inst_24810))
{var statearr_24871_24912 = state_24845__$1;(statearr_24871_24912[(1)] = (14));
} else
{var statearr_24872_24913 = state_24845__$1;(statearr_24872_24913[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24846 === (9)))
{var inst_24797 = (state_24845[(10)]);var inst_24797__$1 = (state_24845[(2)]);var inst_24798 = cljs.core.get.call(null,inst_24797__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24799 = cljs.core.get.call(null,inst_24797__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24800 = cljs.core.get.call(null,inst_24797__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_24845__$1 = (function (){var statearr_24873 = state_24845;(statearr_24873[(10)] = inst_24797__$1);
(statearr_24873[(16)] = inst_24800);
(statearr_24873[(17)] = inst_24799);
return statearr_24873;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_24845__$1,(10),inst_24798);
} else
{if((state_val_24846 === (5)))
{var inst_24789 = (state_24845[(7)]);var inst_24792 = cljs.core.seq_QMARK_.call(null,inst_24789);var state_24845__$1 = state_24845;if(inst_24792)
{var statearr_24874_24914 = state_24845__$1;(statearr_24874_24914[(1)] = (7));
} else
{var statearr_24875_24915 = state_24845__$1;(statearr_24875_24915[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24846 === (14)))
{var inst_24805 = (state_24845[(15)]);var inst_24812 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24805);var state_24845__$1 = state_24845;var statearr_24876_24916 = state_24845__$1;(statearr_24876_24916[(2)] = inst_24812);
(statearr_24876_24916[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24846 === (26)))
{var inst_24835 = (state_24845[(2)]);var state_24845__$1 = state_24845;var statearr_24877_24917 = state_24845__$1;(statearr_24877_24917[(2)] = inst_24835);
(statearr_24877_24917[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24846 === (16)))
{var inst_24815 = (state_24845[(2)]);var inst_24816 = calc_state.call(null);var inst_24789 = inst_24816;var state_24845__$1 = (function (){var statearr_24878 = state_24845;(statearr_24878[(18)] = inst_24815);
(statearr_24878[(7)] = inst_24789);
return statearr_24878;
})();var statearr_24879_24918 = state_24845__$1;(statearr_24879_24918[(2)] = null);
(statearr_24879_24918[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24846 === (10)))
{var inst_24804 = (state_24845[(8)]);var inst_24805 = (state_24845[(15)]);var inst_24803 = (state_24845[(2)]);var inst_24804__$1 = cljs.core.nth.call(null,inst_24803,(0),null);var inst_24805__$1 = cljs.core.nth.call(null,inst_24803,(1),null);var inst_24806 = (inst_24804__$1 == null);var inst_24807 = cljs.core._EQ_.call(null,inst_24805__$1,change);var inst_24808 = (inst_24806) || (inst_24807);var state_24845__$1 = (function (){var statearr_24880 = state_24845;(statearr_24880[(8)] = inst_24804__$1);
(statearr_24880[(15)] = inst_24805__$1);
return statearr_24880;
})();if(cljs.core.truth_(inst_24808))
{var statearr_24881_24919 = state_24845__$1;(statearr_24881_24919[(1)] = (11));
} else
{var statearr_24882_24920 = state_24845__$1;(statearr_24882_24920[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24846 === (18)))
{var inst_24805 = (state_24845[(15)]);var inst_24800 = (state_24845[(16)]);var inst_24799 = (state_24845[(17)]);var inst_24822 = cljs.core.empty_QMARK_.call(null,inst_24800);var inst_24823 = inst_24799.call(null,inst_24805);var inst_24824 = cljs.core.not.call(null,inst_24823);var inst_24825 = (inst_24822) && (inst_24824);var state_24845__$1 = state_24845;var statearr_24883_24921 = state_24845__$1;(statearr_24883_24921[(2)] = inst_24825);
(statearr_24883_24921[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24846 === (8)))
{var inst_24789 = (state_24845[(7)]);var state_24845__$1 = state_24845;var statearr_24884_24922 = state_24845__$1;(statearr_24884_24922[(2)] = inst_24789);
(statearr_24884_24922[(1)] = (9));
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
});})(c__9125__auto___24892,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__9110__auto__,c__9125__auto___24892,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24888[(0)] = state_machine__9111__auto__);
(statearr_24888[(1)] = (1));
return statearr_24888;
});
var state_machine__9111__auto____1 = (function (state_24845){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24845);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24889){if((e24889 instanceof Object))
{var ex__9114__auto__ = e24889;var statearr_24890_24923 = state_24845;(statearr_24890_24923[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24845);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24889;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24924 = state_24845;
state_24845 = G__24924;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24845){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24892,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__9127__auto__ = (function (){var statearr_24891 = f__9126__auto__.call(null);(statearr_24891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24892);
return statearr_24891;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24892,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj24926 = {};return obj24926;
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
return (function (p1__24927_SHARP_){if(cljs.core.truth_(p1__24927_SHARP_.call(null,topic)))
{return p1__24927_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__24927_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25050 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25050 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25051){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25051 = meta25051;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25050.cljs$lang$type = true;
cljs.core.async.t25050.cljs$lang$ctorStr = "cljs.core.async/t25050";
cljs.core.async.t25050.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25050");
});})(mults,ensure_mult))
;
cljs.core.async.t25050.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25050.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25050.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25050.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25050.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25050.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25050.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25050.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25052){var self__ = this;
var _25052__$1 = this;return self__.meta25051;
});})(mults,ensure_mult))
;
cljs.core.async.t25050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25052,meta25051__$1){var self__ = this;
var _25052__$1 = this;return (new cljs.core.async.t25050(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25051__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25050 = ((function (mults,ensure_mult){
return (function __GT_t25050(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25051){return (new cljs.core.async.t25050(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25051));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25050(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__9125__auto___25172 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25172,mults,ensure_mult,p){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25172,mults,ensure_mult,p){
return (function (state_25124){var state_val_25125 = (state_25124[(1)]);if((state_val_25125 === (7)))
{var inst_25120 = (state_25124[(2)]);var state_25124__$1 = state_25124;var statearr_25126_25173 = state_25124__$1;(statearr_25126_25173[(2)] = inst_25120);
(statearr_25126_25173[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25125 === (20)))
{var state_25124__$1 = state_25124;var statearr_25127_25174 = state_25124__$1;(statearr_25127_25174[(2)] = null);
(statearr_25127_25174[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25125 === (1)))
{var state_25124__$1 = state_25124;var statearr_25128_25175 = state_25124__$1;(statearr_25128_25175[(2)] = null);
(statearr_25128_25175[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25125 === (24)))
{var inst_25103 = (state_25124[(7)]);var inst_25112 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25103);var state_25124__$1 = state_25124;var statearr_25129_25176 = state_25124__$1;(statearr_25129_25176[(2)] = inst_25112);
(statearr_25129_25176[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25125 === (4)))
{var inst_25055 = (state_25124[(8)]);var inst_25055__$1 = (state_25124[(2)]);var inst_25056 = (inst_25055__$1 == null);var state_25124__$1 = (function (){var statearr_25130 = state_25124;(statearr_25130[(8)] = inst_25055__$1);
return statearr_25130;
})();if(cljs.core.truth_(inst_25056))
{var statearr_25131_25177 = state_25124__$1;(statearr_25131_25177[(1)] = (5));
} else
{var statearr_25132_25178 = state_25124__$1;(statearr_25132_25178[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25125 === (15)))
{var inst_25097 = (state_25124[(2)]);var state_25124__$1 = state_25124;var statearr_25133_25179 = state_25124__$1;(statearr_25133_25179[(2)] = inst_25097);
(statearr_25133_25179[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25125 === (21)))
{var inst_25117 = (state_25124[(2)]);var state_25124__$1 = (function (){var statearr_25134 = state_25124;(statearr_25134[(9)] = inst_25117);
return statearr_25134;
})();var statearr_25135_25180 = state_25124__$1;(statearr_25135_25180[(2)] = null);
(statearr_25135_25180[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25125 === (13)))
{var inst_25079 = (state_25124[(10)]);var inst_25081 = cljs.core.chunked_seq_QMARK_.call(null,inst_25079);var state_25124__$1 = state_25124;if(inst_25081)
{var statearr_25136_25181 = state_25124__$1;(statearr_25136_25181[(1)] = (16));
} else
{var statearr_25137_25182 = state_25124__$1;(statearr_25137_25182[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25125 === (22)))
{var inst_25109 = (state_25124[(2)]);var state_25124__$1 = state_25124;if(cljs.core.truth_(inst_25109))
{var statearr_25138_25183 = state_25124__$1;(statearr_25138_25183[(1)] = (23));
} else
{var statearr_25139_25184 = state_25124__$1;(statearr_25139_25184[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25125 === (6)))
{var inst_25055 = (state_25124[(8)]);var inst_25103 = (state_25124[(7)]);var inst_25105 = (state_25124[(11)]);var inst_25103__$1 = topic_fn.call(null,inst_25055);var inst_25104 = cljs.core.deref.call(null,mults);var inst_25105__$1 = cljs.core.get.call(null,inst_25104,inst_25103__$1);var state_25124__$1 = (function (){var statearr_25140 = state_25124;(statearr_25140[(7)] = inst_25103__$1);
(statearr_25140[(11)] = inst_25105__$1);
return statearr_25140;
})();if(cljs.core.truth_(inst_25105__$1))
{var statearr_25141_25185 = state_25124__$1;(statearr_25141_25185[(1)] = (19));
} else
{var statearr_25142_25186 = state_25124__$1;(statearr_25142_25186[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25125 === (25)))
{var inst_25114 = (state_25124[(2)]);var state_25124__$1 = state_25124;var statearr_25143_25187 = state_25124__$1;(statearr_25143_25187[(2)] = inst_25114);
(statearr_25143_25187[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25125 === (17)))
{var inst_25079 = (state_25124[(10)]);var inst_25088 = cljs.core.first.call(null,inst_25079);var inst_25089 = cljs.core.async.muxch_STAR_.call(null,inst_25088);var inst_25090 = cljs.core.async.close_BANG_.call(null,inst_25089);var inst_25091 = cljs.core.next.call(null,inst_25079);var inst_25065 = inst_25091;var inst_25066 = null;var inst_25067 = (0);var inst_25068 = (0);var state_25124__$1 = (function (){var statearr_25144 = state_25124;(statearr_25144[(12)] = inst_25090);
(statearr_25144[(13)] = inst_25065);
(statearr_25144[(14)] = inst_25068);
(statearr_25144[(15)] = inst_25066);
(statearr_25144[(16)] = inst_25067);
return statearr_25144;
})();var statearr_25145_25188 = state_25124__$1;(statearr_25145_25188[(2)] = null);
(statearr_25145_25188[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25125 === (3)))
{var inst_25122 = (state_25124[(2)]);var state_25124__$1 = state_25124;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25124__$1,inst_25122);
} else
{if((state_val_25125 === (12)))
{var inst_25099 = (state_25124[(2)]);var state_25124__$1 = state_25124;var statearr_25146_25189 = state_25124__$1;(statearr_25146_25189[(2)] = inst_25099);
(statearr_25146_25189[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25125 === (2)))
{var state_25124__$1 = state_25124;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25124__$1,(4),ch);
} else
{if((state_val_25125 === (23)))
{var state_25124__$1 = state_25124;var statearr_25147_25190 = state_25124__$1;(statearr_25147_25190[(2)] = null);
(statearr_25147_25190[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25125 === (19)))
{var inst_25055 = (state_25124[(8)]);var inst_25105 = (state_25124[(11)]);var inst_25107 = cljs.core.async.muxch_STAR_.call(null,inst_25105);var state_25124__$1 = state_25124;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25124__$1,(22),inst_25107,inst_25055);
} else
{if((state_val_25125 === (11)))
{var inst_25065 = (state_25124[(13)]);var inst_25079 = (state_25124[(10)]);var inst_25079__$1 = cljs.core.seq.call(null,inst_25065);var state_25124__$1 = (function (){var statearr_25148 = state_25124;(statearr_25148[(10)] = inst_25079__$1);
return statearr_25148;
})();if(inst_25079__$1)
{var statearr_25149_25191 = state_25124__$1;(statearr_25149_25191[(1)] = (13));
} else
{var statearr_25150_25192 = state_25124__$1;(statearr_25150_25192[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25125 === (9)))
{var inst_25101 = (state_25124[(2)]);var state_25124__$1 = state_25124;var statearr_25151_25193 = state_25124__$1;(statearr_25151_25193[(2)] = inst_25101);
(statearr_25151_25193[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25125 === (5)))
{var inst_25062 = cljs.core.deref.call(null,mults);var inst_25063 = cljs.core.vals.call(null,inst_25062);var inst_25064 = cljs.core.seq.call(null,inst_25063);var inst_25065 = inst_25064;var inst_25066 = null;var inst_25067 = (0);var inst_25068 = (0);var state_25124__$1 = (function (){var statearr_25152 = state_25124;(statearr_25152[(13)] = inst_25065);
(statearr_25152[(14)] = inst_25068);
(statearr_25152[(15)] = inst_25066);
(statearr_25152[(16)] = inst_25067);
return statearr_25152;
})();var statearr_25153_25194 = state_25124__$1;(statearr_25153_25194[(2)] = null);
(statearr_25153_25194[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25125 === (14)))
{var state_25124__$1 = state_25124;var statearr_25157_25195 = state_25124__$1;(statearr_25157_25195[(2)] = null);
(statearr_25157_25195[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25125 === (16)))
{var inst_25079 = (state_25124[(10)]);var inst_25083 = cljs.core.chunk_first.call(null,inst_25079);var inst_25084 = cljs.core.chunk_rest.call(null,inst_25079);var inst_25085 = cljs.core.count.call(null,inst_25083);var inst_25065 = inst_25084;var inst_25066 = inst_25083;var inst_25067 = inst_25085;var inst_25068 = (0);var state_25124__$1 = (function (){var statearr_25158 = state_25124;(statearr_25158[(13)] = inst_25065);
(statearr_25158[(14)] = inst_25068);
(statearr_25158[(15)] = inst_25066);
(statearr_25158[(16)] = inst_25067);
return statearr_25158;
})();var statearr_25159_25196 = state_25124__$1;(statearr_25159_25196[(2)] = null);
(statearr_25159_25196[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25125 === (10)))
{var inst_25065 = (state_25124[(13)]);var inst_25068 = (state_25124[(14)]);var inst_25066 = (state_25124[(15)]);var inst_25067 = (state_25124[(16)]);var inst_25073 = cljs.core._nth.call(null,inst_25066,inst_25068);var inst_25074 = cljs.core.async.muxch_STAR_.call(null,inst_25073);var inst_25075 = cljs.core.async.close_BANG_.call(null,inst_25074);var inst_25076 = (inst_25068 + (1));var tmp25154 = inst_25065;var tmp25155 = inst_25066;var tmp25156 = inst_25067;var inst_25065__$1 = tmp25154;var inst_25066__$1 = tmp25155;var inst_25067__$1 = tmp25156;var inst_25068__$1 = inst_25076;var state_25124__$1 = (function (){var statearr_25160 = state_25124;(statearr_25160[(13)] = inst_25065__$1);
(statearr_25160[(14)] = inst_25068__$1);
(statearr_25160[(15)] = inst_25066__$1);
(statearr_25160[(17)] = inst_25075);
(statearr_25160[(16)] = inst_25067__$1);
return statearr_25160;
})();var statearr_25161_25197 = state_25124__$1;(statearr_25161_25197[(2)] = null);
(statearr_25161_25197[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25125 === (18)))
{var inst_25094 = (state_25124[(2)]);var state_25124__$1 = state_25124;var statearr_25162_25198 = state_25124__$1;(statearr_25162_25198[(2)] = inst_25094);
(statearr_25162_25198[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25125 === (8)))
{var inst_25068 = (state_25124[(14)]);var inst_25067 = (state_25124[(16)]);var inst_25070 = (inst_25068 < inst_25067);var inst_25071 = inst_25070;var state_25124__$1 = state_25124;if(cljs.core.truth_(inst_25071))
{var statearr_25163_25199 = state_25124__$1;(statearr_25163_25199[(1)] = (10));
} else
{var statearr_25164_25200 = state_25124__$1;(statearr_25164_25200[(1)] = (11));
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
});})(c__9125__auto___25172,mults,ensure_mult,p))
;return ((function (switch__9110__auto__,c__9125__auto___25172,mults,ensure_mult,p){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25168[(0)] = state_machine__9111__auto__);
(statearr_25168[(1)] = (1));
return statearr_25168;
});
var state_machine__9111__auto____1 = (function (state_25124){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25124);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25169){if((e25169 instanceof Object))
{var ex__9114__auto__ = e25169;var statearr_25170_25201 = state_25124;(statearr_25170_25201[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25124);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25169;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25202 = state_25124;
state_25124 = G__25202;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25124){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25172,mults,ensure_mult,p))
})();var state__9127__auto__ = (function (){var statearr_25171 = f__9126__auto__.call(null);(statearr_25171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25172);
return statearr_25171;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25172,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__9125__auto___25339 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25339,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25339,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25309){var state_val_25310 = (state_25309[(1)]);if((state_val_25310 === (7)))
{var state_25309__$1 = state_25309;var statearr_25311_25340 = state_25309__$1;(statearr_25311_25340[(2)] = null);
(statearr_25311_25340[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25310 === (1)))
{var state_25309__$1 = state_25309;var statearr_25312_25341 = state_25309__$1;(statearr_25312_25341[(2)] = null);
(statearr_25312_25341[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25310 === (4)))
{var inst_25273 = (state_25309[(7)]);var inst_25275 = (inst_25273 < cnt);var state_25309__$1 = state_25309;if(cljs.core.truth_(inst_25275))
{var statearr_25313_25342 = state_25309__$1;(statearr_25313_25342[(1)] = (6));
} else
{var statearr_25314_25343 = state_25309__$1;(statearr_25314_25343[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25310 === (15)))
{var inst_25305 = (state_25309[(2)]);var state_25309__$1 = state_25309;var statearr_25315_25344 = state_25309__$1;(statearr_25315_25344[(2)] = inst_25305);
(statearr_25315_25344[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25310 === (13)))
{var inst_25298 = cljs.core.async.close_BANG_.call(null,out);var state_25309__$1 = state_25309;var statearr_25316_25345 = state_25309__$1;(statearr_25316_25345[(2)] = inst_25298);
(statearr_25316_25345[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25310 === (6)))
{var state_25309__$1 = state_25309;var statearr_25317_25346 = state_25309__$1;(statearr_25317_25346[(2)] = null);
(statearr_25317_25346[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25310 === (3)))
{var inst_25307 = (state_25309[(2)]);var state_25309__$1 = state_25309;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25309__$1,inst_25307);
} else
{if((state_val_25310 === (12)))
{var inst_25295 = (state_25309[(8)]);var inst_25295__$1 = (state_25309[(2)]);var inst_25296 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25295__$1);var state_25309__$1 = (function (){var statearr_25318 = state_25309;(statearr_25318[(8)] = inst_25295__$1);
return statearr_25318;
})();if(cljs.core.truth_(inst_25296))
{var statearr_25319_25347 = state_25309__$1;(statearr_25319_25347[(1)] = (13));
} else
{var statearr_25320_25348 = state_25309__$1;(statearr_25320_25348[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25310 === (2)))
{var inst_25272 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_25273 = (0);var state_25309__$1 = (function (){var statearr_25321 = state_25309;(statearr_25321[(9)] = inst_25272);
(statearr_25321[(7)] = inst_25273);
return statearr_25321;
})();var statearr_25322_25349 = state_25309__$1;(statearr_25322_25349[(2)] = null);
(statearr_25322_25349[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25310 === (11)))
{var inst_25273 = (state_25309[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25309,(10),Object,null,(9));var inst_25282 = chs__$1.call(null,inst_25273);var inst_25283 = done.call(null,inst_25273);var inst_25284 = cljs.core.async.take_BANG_.call(null,inst_25282,inst_25283);var state_25309__$1 = state_25309;var statearr_25323_25350 = state_25309__$1;(statearr_25323_25350[(2)] = inst_25284);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25309__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25310 === (9)))
{var inst_25273 = (state_25309[(7)]);var inst_25286 = (state_25309[(2)]);var inst_25287 = (inst_25273 + (1));var inst_25273__$1 = inst_25287;var state_25309__$1 = (function (){var statearr_25324 = state_25309;(statearr_25324[(10)] = inst_25286);
(statearr_25324[(7)] = inst_25273__$1);
return statearr_25324;
})();var statearr_25325_25351 = state_25309__$1;(statearr_25325_25351[(2)] = null);
(statearr_25325_25351[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25310 === (5)))
{var inst_25293 = (state_25309[(2)]);var state_25309__$1 = (function (){var statearr_25326 = state_25309;(statearr_25326[(11)] = inst_25293);
return statearr_25326;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25309__$1,(12),dchan);
} else
{if((state_val_25310 === (14)))
{var inst_25295 = (state_25309[(8)]);var inst_25300 = cljs.core.apply.call(null,f,inst_25295);var state_25309__$1 = state_25309;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25309__$1,(16),out,inst_25300);
} else
{if((state_val_25310 === (16)))
{var inst_25302 = (state_25309[(2)]);var state_25309__$1 = (function (){var statearr_25327 = state_25309;(statearr_25327[(12)] = inst_25302);
return statearr_25327;
})();var statearr_25328_25352 = state_25309__$1;(statearr_25328_25352[(2)] = null);
(statearr_25328_25352[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25310 === (10)))
{var inst_25277 = (state_25309[(2)]);var inst_25278 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_25309__$1 = (function (){var statearr_25329 = state_25309;(statearr_25329[(13)] = inst_25277);
return statearr_25329;
})();var statearr_25330_25353 = state_25309__$1;(statearr_25330_25353[(2)] = inst_25278);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25309__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25310 === (8)))
{var inst_25291 = (state_25309[(2)]);var state_25309__$1 = state_25309;var statearr_25331_25354 = state_25309__$1;(statearr_25331_25354[(2)] = inst_25291);
(statearr_25331_25354[(1)] = (5));
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
});})(c__9125__auto___25339,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___25339,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25335[(0)] = state_machine__9111__auto__);
(statearr_25335[(1)] = (1));
return statearr_25335;
});
var state_machine__9111__auto____1 = (function (state_25309){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25309);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25336){if((e25336 instanceof Object))
{var ex__9114__auto__ = e25336;var statearr_25337_25355 = state_25309;(statearr_25337_25355[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25309);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25336;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25356 = state_25309;
state_25309 = G__25356;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25309){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25339,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_25338 = f__9126__auto__.call(null);(statearr_25338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25339);
return statearr_25338;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25339,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25464 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25464,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25464,out){
return (function (state_25440){var state_val_25441 = (state_25440[(1)]);if((state_val_25441 === (7)))
{var inst_25419 = (state_25440[(7)]);var inst_25420 = (state_25440[(8)]);var inst_25419__$1 = (state_25440[(2)]);var inst_25420__$1 = cljs.core.nth.call(null,inst_25419__$1,(0),null);var inst_25421 = cljs.core.nth.call(null,inst_25419__$1,(1),null);var inst_25422 = (inst_25420__$1 == null);var state_25440__$1 = (function (){var statearr_25442 = state_25440;(statearr_25442[(9)] = inst_25421);
(statearr_25442[(7)] = inst_25419__$1);
(statearr_25442[(8)] = inst_25420__$1);
return statearr_25442;
})();if(cljs.core.truth_(inst_25422))
{var statearr_25443_25465 = state_25440__$1;(statearr_25443_25465[(1)] = (8));
} else
{var statearr_25444_25466 = state_25440__$1;(statearr_25444_25466[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25441 === (1)))
{var inst_25411 = cljs.core.vec.call(null,chs);var inst_25412 = inst_25411;var state_25440__$1 = (function (){var statearr_25445 = state_25440;(statearr_25445[(10)] = inst_25412);
return statearr_25445;
})();var statearr_25446_25467 = state_25440__$1;(statearr_25446_25467[(2)] = null);
(statearr_25446_25467[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25441 === (4)))
{var inst_25412 = (state_25440[(10)]);var state_25440__$1 = state_25440;return cljs.core.async.ioc_alts_BANG_.call(null,state_25440__$1,(7),inst_25412);
} else
{if((state_val_25441 === (6)))
{var inst_25436 = (state_25440[(2)]);var state_25440__$1 = state_25440;var statearr_25447_25468 = state_25440__$1;(statearr_25447_25468[(2)] = inst_25436);
(statearr_25447_25468[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25441 === (3)))
{var inst_25438 = (state_25440[(2)]);var state_25440__$1 = state_25440;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25440__$1,inst_25438);
} else
{if((state_val_25441 === (2)))
{var inst_25412 = (state_25440[(10)]);var inst_25414 = cljs.core.count.call(null,inst_25412);var inst_25415 = (inst_25414 > (0));var state_25440__$1 = state_25440;if(cljs.core.truth_(inst_25415))
{var statearr_25449_25469 = state_25440__$1;(statearr_25449_25469[(1)] = (4));
} else
{var statearr_25450_25470 = state_25440__$1;(statearr_25450_25470[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25441 === (11)))
{var inst_25412 = (state_25440[(10)]);var inst_25429 = (state_25440[(2)]);var tmp25448 = inst_25412;var inst_25412__$1 = tmp25448;var state_25440__$1 = (function (){var statearr_25451 = state_25440;(statearr_25451[(10)] = inst_25412__$1);
(statearr_25451[(11)] = inst_25429);
return statearr_25451;
})();var statearr_25452_25471 = state_25440__$1;(statearr_25452_25471[(2)] = null);
(statearr_25452_25471[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25441 === (9)))
{var inst_25420 = (state_25440[(8)]);var state_25440__$1 = state_25440;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25440__$1,(11),out,inst_25420);
} else
{if((state_val_25441 === (5)))
{var inst_25434 = cljs.core.async.close_BANG_.call(null,out);var state_25440__$1 = state_25440;var statearr_25453_25472 = state_25440__$1;(statearr_25453_25472[(2)] = inst_25434);
(statearr_25453_25472[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25441 === (10)))
{var inst_25432 = (state_25440[(2)]);var state_25440__$1 = state_25440;var statearr_25454_25473 = state_25440__$1;(statearr_25454_25473[(2)] = inst_25432);
(statearr_25454_25473[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25441 === (8)))
{var inst_25421 = (state_25440[(9)]);var inst_25419 = (state_25440[(7)]);var inst_25420 = (state_25440[(8)]);var inst_25412 = (state_25440[(10)]);var inst_25424 = (function (){var c = inst_25421;var v = inst_25420;var vec__25417 = inst_25419;var cs = inst_25412;return ((function (c,v,vec__25417,cs,inst_25421,inst_25419,inst_25420,inst_25412,state_val_25441,c__9125__auto___25464,out){
return (function (p1__25357_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25357_SHARP_);
});
;})(c,v,vec__25417,cs,inst_25421,inst_25419,inst_25420,inst_25412,state_val_25441,c__9125__auto___25464,out))
})();var inst_25425 = cljs.core.filterv.call(null,inst_25424,inst_25412);var inst_25412__$1 = inst_25425;var state_25440__$1 = (function (){var statearr_25455 = state_25440;(statearr_25455[(10)] = inst_25412__$1);
return statearr_25455;
})();var statearr_25456_25474 = state_25440__$1;(statearr_25456_25474[(2)] = null);
(statearr_25456_25474[(1)] = (2));
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
});})(c__9125__auto___25464,out))
;return ((function (switch__9110__auto__,c__9125__auto___25464,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25460 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25460[(0)] = state_machine__9111__auto__);
(statearr_25460[(1)] = (1));
return statearr_25460;
});
var state_machine__9111__auto____1 = (function (state_25440){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25440);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25461){if((e25461 instanceof Object))
{var ex__9114__auto__ = e25461;var statearr_25462_25475 = state_25440;(statearr_25462_25475[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25440);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25461;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25476 = state_25440;
state_25440 = G__25476;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25440){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25464,out))
})();var state__9127__auto__ = (function (){var statearr_25463 = f__9126__auto__.call(null);(statearr_25463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25464);
return statearr_25463;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25464,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25569 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25569,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25569,out){
return (function (state_25546){var state_val_25547 = (state_25546[(1)]);if((state_val_25547 === (7)))
{var inst_25528 = (state_25546[(7)]);var inst_25528__$1 = (state_25546[(2)]);var inst_25529 = (inst_25528__$1 == null);var inst_25530 = cljs.core.not.call(null,inst_25529);var state_25546__$1 = (function (){var statearr_25548 = state_25546;(statearr_25548[(7)] = inst_25528__$1);
return statearr_25548;
})();if(inst_25530)
{var statearr_25549_25570 = state_25546__$1;(statearr_25549_25570[(1)] = (8));
} else
{var statearr_25550_25571 = state_25546__$1;(statearr_25550_25571[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25547 === (1)))
{var inst_25523 = (0);var state_25546__$1 = (function (){var statearr_25551 = state_25546;(statearr_25551[(8)] = inst_25523);
return statearr_25551;
})();var statearr_25552_25572 = state_25546__$1;(statearr_25552_25572[(2)] = null);
(statearr_25552_25572[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25547 === (4)))
{var state_25546__$1 = state_25546;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25546__$1,(7),ch);
} else
{if((state_val_25547 === (6)))
{var inst_25541 = (state_25546[(2)]);var state_25546__$1 = state_25546;var statearr_25553_25573 = state_25546__$1;(statearr_25553_25573[(2)] = inst_25541);
(statearr_25553_25573[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25547 === (3)))
{var inst_25543 = (state_25546[(2)]);var inst_25544 = cljs.core.async.close_BANG_.call(null,out);var state_25546__$1 = (function (){var statearr_25554 = state_25546;(statearr_25554[(9)] = inst_25543);
return statearr_25554;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25546__$1,inst_25544);
} else
{if((state_val_25547 === (2)))
{var inst_25523 = (state_25546[(8)]);var inst_25525 = (inst_25523 < n);var state_25546__$1 = state_25546;if(cljs.core.truth_(inst_25525))
{var statearr_25555_25574 = state_25546__$1;(statearr_25555_25574[(1)] = (4));
} else
{var statearr_25556_25575 = state_25546__$1;(statearr_25556_25575[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25547 === (11)))
{var inst_25523 = (state_25546[(8)]);var inst_25533 = (state_25546[(2)]);var inst_25534 = (inst_25523 + (1));var inst_25523__$1 = inst_25534;var state_25546__$1 = (function (){var statearr_25557 = state_25546;(statearr_25557[(10)] = inst_25533);
(statearr_25557[(8)] = inst_25523__$1);
return statearr_25557;
})();var statearr_25558_25576 = state_25546__$1;(statearr_25558_25576[(2)] = null);
(statearr_25558_25576[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25547 === (9)))
{var state_25546__$1 = state_25546;var statearr_25559_25577 = state_25546__$1;(statearr_25559_25577[(2)] = null);
(statearr_25559_25577[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25547 === (5)))
{var state_25546__$1 = state_25546;var statearr_25560_25578 = state_25546__$1;(statearr_25560_25578[(2)] = null);
(statearr_25560_25578[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25547 === (10)))
{var inst_25538 = (state_25546[(2)]);var state_25546__$1 = state_25546;var statearr_25561_25579 = state_25546__$1;(statearr_25561_25579[(2)] = inst_25538);
(statearr_25561_25579[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25547 === (8)))
{var inst_25528 = (state_25546[(7)]);var state_25546__$1 = state_25546;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25546__$1,(11),out,inst_25528);
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
});})(c__9125__auto___25569,out))
;return ((function (switch__9110__auto__,c__9125__auto___25569,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25565 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25565[(0)] = state_machine__9111__auto__);
(statearr_25565[(1)] = (1));
return statearr_25565;
});
var state_machine__9111__auto____1 = (function (state_25546){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25546);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25566){if((e25566 instanceof Object))
{var ex__9114__auto__ = e25566;var statearr_25567_25580 = state_25546;(statearr_25567_25580[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25546);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25566;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25581 = state_25546;
state_25546 = G__25581;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25546){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25569,out))
})();var state__9127__auto__ = (function (){var statearr_25568 = f__9126__auto__.call(null);(statearr_25568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25569);
return statearr_25568;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25569,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25589 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25589 = (function (ch,f,map_LT_,meta25590){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25590 = meta25590;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25589.cljs$lang$type = true;
cljs.core.async.t25589.cljs$lang$ctorStr = "cljs.core.async/t25589";
cljs.core.async.t25589.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25589");
});
cljs.core.async.t25589.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25589.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t25589.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25589.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25592 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25592 = (function (fn1,_,meta25590,ch,f,map_LT_,meta25593){
this.fn1 = fn1;
this._ = _;
this.meta25590 = meta25590;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25593 = meta25593;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25592.cljs$lang$type = true;
cljs.core.async.t25592.cljs$lang$ctorStr = "cljs.core.async/t25592";
cljs.core.async.t25592.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25592");
});})(___$1))
;
cljs.core.async.t25592.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25592.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25592.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25582_SHARP_){return f1.call(null,(((p1__25582_SHARP_ == null))?null:self__.f.call(null,p1__25582_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25592.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25594){var self__ = this;
var _25594__$1 = this;return self__.meta25593;
});})(___$1))
;
cljs.core.async.t25592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25594,meta25593__$1){var self__ = this;
var _25594__$1 = this;return (new cljs.core.async.t25592(self__.fn1,self__._,self__.meta25590,self__.ch,self__.f,self__.map_LT_,meta25593__$1));
});})(___$1))
;
cljs.core.async.__GT_t25592 = ((function (___$1){
return (function __GT_t25592(fn1__$1,___$2,meta25590__$1,ch__$2,f__$2,map_LT___$2,meta25593){return (new cljs.core.async.t25592(fn1__$1,___$2,meta25590__$1,ch__$2,f__$2,map_LT___$2,meta25593));
});})(___$1))
;
}
return (new cljs.core.async.t25592(fn1,___$1,self__.meta25590,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t25589.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25589.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25589.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25589.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25591){var self__ = this;
var _25591__$1 = this;return self__.meta25590;
});
cljs.core.async.t25589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25591,meta25590__$1){var self__ = this;
var _25591__$1 = this;return (new cljs.core.async.t25589(self__.ch,self__.f,self__.map_LT_,meta25590__$1));
});
cljs.core.async.__GT_t25589 = (function __GT_t25589(ch__$1,f__$1,map_LT___$1,meta25590){return (new cljs.core.async.t25589(ch__$1,f__$1,map_LT___$1,meta25590));
});
}
return (new cljs.core.async.t25589(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25598 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25598 = (function (ch,f,map_GT_,meta25599){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25599 = meta25599;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25598.cljs$lang$type = true;
cljs.core.async.t25598.cljs$lang$ctorStr = "cljs.core.async/t25598";
cljs.core.async.t25598.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25598");
});
cljs.core.async.t25598.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25598.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t25598.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25598.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25598.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25598.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25600){var self__ = this;
var _25600__$1 = this;return self__.meta25599;
});
cljs.core.async.t25598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25600,meta25599__$1){var self__ = this;
var _25600__$1 = this;return (new cljs.core.async.t25598(self__.ch,self__.f,self__.map_GT_,meta25599__$1));
});
cljs.core.async.__GT_t25598 = (function __GT_t25598(ch__$1,f__$1,map_GT___$1,meta25599){return (new cljs.core.async.t25598(ch__$1,f__$1,map_GT___$1,meta25599));
});
}
return (new cljs.core.async.t25598(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25604 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25604 = (function (ch,p,filter_GT_,meta25605){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25605 = meta25605;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25604.cljs$lang$type = true;
cljs.core.async.t25604.cljs$lang$ctorStr = "cljs.core.async/t25604";
cljs.core.async.t25604.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25604");
});
cljs.core.async.t25604.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25604.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t25604.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25604.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25604.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25604.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25604.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25606){var self__ = this;
var _25606__$1 = this;return self__.meta25605;
});
cljs.core.async.t25604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25606,meta25605__$1){var self__ = this;
var _25606__$1 = this;return (new cljs.core.async.t25604(self__.ch,self__.p,self__.filter_GT_,meta25605__$1));
});
cljs.core.async.__GT_t25604 = (function __GT_t25604(ch__$1,p__$1,filter_GT___$1,meta25605){return (new cljs.core.async.t25604(ch__$1,p__$1,filter_GT___$1,meta25605));
});
}
return (new cljs.core.async.t25604(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25689 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25689,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25689,out){
return (function (state_25668){var state_val_25669 = (state_25668[(1)]);if((state_val_25669 === (7)))
{var inst_25664 = (state_25668[(2)]);var state_25668__$1 = state_25668;var statearr_25670_25690 = state_25668__$1;(statearr_25670_25690[(2)] = inst_25664);
(statearr_25670_25690[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25669 === (1)))
{var state_25668__$1 = state_25668;var statearr_25671_25691 = state_25668__$1;(statearr_25671_25691[(2)] = null);
(statearr_25671_25691[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25669 === (4)))
{var inst_25650 = (state_25668[(7)]);var inst_25650__$1 = (state_25668[(2)]);var inst_25651 = (inst_25650__$1 == null);var state_25668__$1 = (function (){var statearr_25672 = state_25668;(statearr_25672[(7)] = inst_25650__$1);
return statearr_25672;
})();if(cljs.core.truth_(inst_25651))
{var statearr_25673_25692 = state_25668__$1;(statearr_25673_25692[(1)] = (5));
} else
{var statearr_25674_25693 = state_25668__$1;(statearr_25674_25693[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25669 === (6)))
{var inst_25650 = (state_25668[(7)]);var inst_25655 = p.call(null,inst_25650);var state_25668__$1 = state_25668;if(cljs.core.truth_(inst_25655))
{var statearr_25675_25694 = state_25668__$1;(statearr_25675_25694[(1)] = (8));
} else
{var statearr_25676_25695 = state_25668__$1;(statearr_25676_25695[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25669 === (3)))
{var inst_25666 = (state_25668[(2)]);var state_25668__$1 = state_25668;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25668__$1,inst_25666);
} else
{if((state_val_25669 === (2)))
{var state_25668__$1 = state_25668;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25668__$1,(4),ch);
} else
{if((state_val_25669 === (11)))
{var inst_25658 = (state_25668[(2)]);var state_25668__$1 = state_25668;var statearr_25677_25696 = state_25668__$1;(statearr_25677_25696[(2)] = inst_25658);
(statearr_25677_25696[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25669 === (9)))
{var state_25668__$1 = state_25668;var statearr_25678_25697 = state_25668__$1;(statearr_25678_25697[(2)] = null);
(statearr_25678_25697[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25669 === (5)))
{var inst_25653 = cljs.core.async.close_BANG_.call(null,out);var state_25668__$1 = state_25668;var statearr_25679_25698 = state_25668__$1;(statearr_25679_25698[(2)] = inst_25653);
(statearr_25679_25698[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25669 === (10)))
{var inst_25661 = (state_25668[(2)]);var state_25668__$1 = (function (){var statearr_25680 = state_25668;(statearr_25680[(8)] = inst_25661);
return statearr_25680;
})();var statearr_25681_25699 = state_25668__$1;(statearr_25681_25699[(2)] = null);
(statearr_25681_25699[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25669 === (8)))
{var inst_25650 = (state_25668[(7)]);var state_25668__$1 = state_25668;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25668__$1,(11),out,inst_25650);
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
});})(c__9125__auto___25689,out))
;return ((function (switch__9110__auto__,c__9125__auto___25689,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25685 = [null,null,null,null,null,null,null,null,null];(statearr_25685[(0)] = state_machine__9111__auto__);
(statearr_25685[(1)] = (1));
return statearr_25685;
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
}catch (e25686){if((e25686 instanceof Object))
{var ex__9114__auto__ = e25686;var statearr_25687_25700 = state_25668;(statearr_25687_25700[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25668);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25686;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25701 = state_25668;
state_25668 = G__25701;
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
;})(switch__9110__auto__,c__9125__auto___25689,out))
})();var state__9127__auto__ = (function (){var statearr_25688 = f__9126__auto__.call(null);(statearr_25688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25689);
return statearr_25688;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25689,out))
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
return (function (state_25867){var state_val_25868 = (state_25867[(1)]);if((state_val_25868 === (7)))
{var inst_25863 = (state_25867[(2)]);var state_25867__$1 = state_25867;var statearr_25869_25910 = state_25867__$1;(statearr_25869_25910[(2)] = inst_25863);
(statearr_25869_25910[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25868 === (20)))
{var inst_25833 = (state_25867[(7)]);var inst_25844 = (state_25867[(2)]);var inst_25845 = cljs.core.next.call(null,inst_25833);var inst_25819 = inst_25845;var inst_25820 = null;var inst_25821 = (0);var inst_25822 = (0);var state_25867__$1 = (function (){var statearr_25870 = state_25867;(statearr_25870[(8)] = inst_25821);
(statearr_25870[(9)] = inst_25819);
(statearr_25870[(10)] = inst_25822);
(statearr_25870[(11)] = inst_25844);
(statearr_25870[(12)] = inst_25820);
return statearr_25870;
})();var statearr_25871_25911 = state_25867__$1;(statearr_25871_25911[(2)] = null);
(statearr_25871_25911[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25868 === (1)))
{var state_25867__$1 = state_25867;var statearr_25872_25912 = state_25867__$1;(statearr_25872_25912[(2)] = null);
(statearr_25872_25912[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25868 === (4)))
{var inst_25808 = (state_25867[(13)]);var inst_25808__$1 = (state_25867[(2)]);var inst_25809 = (inst_25808__$1 == null);var state_25867__$1 = (function (){var statearr_25873 = state_25867;(statearr_25873[(13)] = inst_25808__$1);
return statearr_25873;
})();if(cljs.core.truth_(inst_25809))
{var statearr_25874_25913 = state_25867__$1;(statearr_25874_25913[(1)] = (5));
} else
{var statearr_25875_25914 = state_25867__$1;(statearr_25875_25914[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25868 === (15)))
{var state_25867__$1 = state_25867;var statearr_25879_25915 = state_25867__$1;(statearr_25879_25915[(2)] = null);
(statearr_25879_25915[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25868 === (21)))
{var state_25867__$1 = state_25867;var statearr_25880_25916 = state_25867__$1;(statearr_25880_25916[(2)] = null);
(statearr_25880_25916[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25868 === (13)))
{var inst_25821 = (state_25867[(8)]);var inst_25819 = (state_25867[(9)]);var inst_25822 = (state_25867[(10)]);var inst_25820 = (state_25867[(12)]);var inst_25829 = (state_25867[(2)]);var inst_25830 = (inst_25822 + (1));var tmp25876 = inst_25821;var tmp25877 = inst_25819;var tmp25878 = inst_25820;var inst_25819__$1 = tmp25877;var inst_25820__$1 = tmp25878;var inst_25821__$1 = tmp25876;var inst_25822__$1 = inst_25830;var state_25867__$1 = (function (){var statearr_25881 = state_25867;(statearr_25881[(8)] = inst_25821__$1);
(statearr_25881[(9)] = inst_25819__$1);
(statearr_25881[(10)] = inst_25822__$1);
(statearr_25881[(14)] = inst_25829);
(statearr_25881[(12)] = inst_25820__$1);
return statearr_25881;
})();var statearr_25882_25917 = state_25867__$1;(statearr_25882_25917[(2)] = null);
(statearr_25882_25917[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25868 === (22)))
{var state_25867__$1 = state_25867;var statearr_25883_25918 = state_25867__$1;(statearr_25883_25918[(2)] = null);
(statearr_25883_25918[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25868 === (6)))
{var inst_25808 = (state_25867[(13)]);var inst_25817 = f.call(null,inst_25808);var inst_25818 = cljs.core.seq.call(null,inst_25817);var inst_25819 = inst_25818;var inst_25820 = null;var inst_25821 = (0);var inst_25822 = (0);var state_25867__$1 = (function (){var statearr_25884 = state_25867;(statearr_25884[(8)] = inst_25821);
(statearr_25884[(9)] = inst_25819);
(statearr_25884[(10)] = inst_25822);
(statearr_25884[(12)] = inst_25820);
return statearr_25884;
})();var statearr_25885_25919 = state_25867__$1;(statearr_25885_25919[(2)] = null);
(statearr_25885_25919[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25868 === (17)))
{var inst_25833 = (state_25867[(7)]);var inst_25837 = cljs.core.chunk_first.call(null,inst_25833);var inst_25838 = cljs.core.chunk_rest.call(null,inst_25833);var inst_25839 = cljs.core.count.call(null,inst_25837);var inst_25819 = inst_25838;var inst_25820 = inst_25837;var inst_25821 = inst_25839;var inst_25822 = (0);var state_25867__$1 = (function (){var statearr_25886 = state_25867;(statearr_25886[(8)] = inst_25821);
(statearr_25886[(9)] = inst_25819);
(statearr_25886[(10)] = inst_25822);
(statearr_25886[(12)] = inst_25820);
return statearr_25886;
})();var statearr_25887_25920 = state_25867__$1;(statearr_25887_25920[(2)] = null);
(statearr_25887_25920[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25868 === (3)))
{var inst_25865 = (state_25867[(2)]);var state_25867__$1 = state_25867;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25867__$1,inst_25865);
} else
{if((state_val_25868 === (12)))
{var inst_25853 = (state_25867[(2)]);var state_25867__$1 = state_25867;var statearr_25888_25921 = state_25867__$1;(statearr_25888_25921[(2)] = inst_25853);
(statearr_25888_25921[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25868 === (2)))
{var state_25867__$1 = state_25867;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25867__$1,(4),in$);
} else
{if((state_val_25868 === (23)))
{var inst_25861 = (state_25867[(2)]);var state_25867__$1 = state_25867;var statearr_25889_25922 = state_25867__$1;(statearr_25889_25922[(2)] = inst_25861);
(statearr_25889_25922[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25868 === (19)))
{var inst_25848 = (state_25867[(2)]);var state_25867__$1 = state_25867;var statearr_25890_25923 = state_25867__$1;(statearr_25890_25923[(2)] = inst_25848);
(statearr_25890_25923[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25868 === (11)))
{var inst_25819 = (state_25867[(9)]);var inst_25833 = (state_25867[(7)]);var inst_25833__$1 = cljs.core.seq.call(null,inst_25819);var state_25867__$1 = (function (){var statearr_25891 = state_25867;(statearr_25891[(7)] = inst_25833__$1);
return statearr_25891;
})();if(inst_25833__$1)
{var statearr_25892_25924 = state_25867__$1;(statearr_25892_25924[(1)] = (14));
} else
{var statearr_25893_25925 = state_25867__$1;(statearr_25893_25925[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25868 === (9)))
{var inst_25855 = (state_25867[(2)]);var inst_25856 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_25867__$1 = (function (){var statearr_25894 = state_25867;(statearr_25894[(15)] = inst_25855);
return statearr_25894;
})();if(cljs.core.truth_(inst_25856))
{var statearr_25895_25926 = state_25867__$1;(statearr_25895_25926[(1)] = (21));
} else
{var statearr_25896_25927 = state_25867__$1;(statearr_25896_25927[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25868 === (5)))
{var inst_25811 = cljs.core.async.close_BANG_.call(null,out);var state_25867__$1 = state_25867;var statearr_25897_25928 = state_25867__$1;(statearr_25897_25928[(2)] = inst_25811);
(statearr_25897_25928[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25868 === (14)))
{var inst_25833 = (state_25867[(7)]);var inst_25835 = cljs.core.chunked_seq_QMARK_.call(null,inst_25833);var state_25867__$1 = state_25867;if(inst_25835)
{var statearr_25898_25929 = state_25867__$1;(statearr_25898_25929[(1)] = (17));
} else
{var statearr_25899_25930 = state_25867__$1;(statearr_25899_25930[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25868 === (16)))
{var inst_25851 = (state_25867[(2)]);var state_25867__$1 = state_25867;var statearr_25900_25931 = state_25867__$1;(statearr_25900_25931[(2)] = inst_25851);
(statearr_25900_25931[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25868 === (10)))
{var inst_25822 = (state_25867[(10)]);var inst_25820 = (state_25867[(12)]);var inst_25827 = cljs.core._nth.call(null,inst_25820,inst_25822);var state_25867__$1 = state_25867;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25867__$1,(13),out,inst_25827);
} else
{if((state_val_25868 === (18)))
{var inst_25833 = (state_25867[(7)]);var inst_25842 = cljs.core.first.call(null,inst_25833);var state_25867__$1 = state_25867;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25867__$1,(20),out,inst_25842);
} else
{if((state_val_25868 === (8)))
{var inst_25821 = (state_25867[(8)]);var inst_25822 = (state_25867[(10)]);var inst_25824 = (inst_25822 < inst_25821);var inst_25825 = inst_25824;var state_25867__$1 = state_25867;if(cljs.core.truth_(inst_25825))
{var statearr_25901_25932 = state_25867__$1;(statearr_25901_25932[(1)] = (10));
} else
{var statearr_25902_25933 = state_25867__$1;(statearr_25902_25933[(1)] = (11));
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
var state_machine__9111__auto____0 = (function (){var statearr_25906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25906[(0)] = state_machine__9111__auto__);
(statearr_25906[(1)] = (1));
return statearr_25906;
});
var state_machine__9111__auto____1 = (function (state_25867){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25867);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25907){if((e25907 instanceof Object))
{var ex__9114__auto__ = e25907;var statearr_25908_25934 = state_25867;(statearr_25908_25934[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25867);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25907;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25935 = state_25867;
state_25867 = G__25935;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25867){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_25909 = f__9126__auto__.call(null);(statearr_25909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_25909;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26032 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26032,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26032,out){
return (function (state_26007){var state_val_26008 = (state_26007[(1)]);if((state_val_26008 === (7)))
{var inst_26002 = (state_26007[(2)]);var state_26007__$1 = state_26007;var statearr_26009_26033 = state_26007__$1;(statearr_26009_26033[(2)] = inst_26002);
(statearr_26009_26033[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26008 === (1)))
{var inst_25984 = null;var state_26007__$1 = (function (){var statearr_26010 = state_26007;(statearr_26010[(7)] = inst_25984);
return statearr_26010;
})();var statearr_26011_26034 = state_26007__$1;(statearr_26011_26034[(2)] = null);
(statearr_26011_26034[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26008 === (4)))
{var inst_25987 = (state_26007[(8)]);var inst_25987__$1 = (state_26007[(2)]);var inst_25988 = (inst_25987__$1 == null);var inst_25989 = cljs.core.not.call(null,inst_25988);var state_26007__$1 = (function (){var statearr_26012 = state_26007;(statearr_26012[(8)] = inst_25987__$1);
return statearr_26012;
})();if(inst_25989)
{var statearr_26013_26035 = state_26007__$1;(statearr_26013_26035[(1)] = (5));
} else
{var statearr_26014_26036 = state_26007__$1;(statearr_26014_26036[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26008 === (6)))
{var state_26007__$1 = state_26007;var statearr_26015_26037 = state_26007__$1;(statearr_26015_26037[(2)] = null);
(statearr_26015_26037[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26008 === (3)))
{var inst_26004 = (state_26007[(2)]);var inst_26005 = cljs.core.async.close_BANG_.call(null,out);var state_26007__$1 = (function (){var statearr_26016 = state_26007;(statearr_26016[(9)] = inst_26004);
return statearr_26016;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26007__$1,inst_26005);
} else
{if((state_val_26008 === (2)))
{var state_26007__$1 = state_26007;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26007__$1,(4),ch);
} else
{if((state_val_26008 === (11)))
{var inst_25987 = (state_26007[(8)]);var inst_25996 = (state_26007[(2)]);var inst_25984 = inst_25987;var state_26007__$1 = (function (){var statearr_26017 = state_26007;(statearr_26017[(7)] = inst_25984);
(statearr_26017[(10)] = inst_25996);
return statearr_26017;
})();var statearr_26018_26038 = state_26007__$1;(statearr_26018_26038[(2)] = null);
(statearr_26018_26038[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26008 === (9)))
{var inst_25987 = (state_26007[(8)]);var state_26007__$1 = state_26007;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26007__$1,(11),out,inst_25987);
} else
{if((state_val_26008 === (5)))
{var inst_25984 = (state_26007[(7)]);var inst_25987 = (state_26007[(8)]);var inst_25991 = cljs.core._EQ_.call(null,inst_25987,inst_25984);var state_26007__$1 = state_26007;if(inst_25991)
{var statearr_26020_26039 = state_26007__$1;(statearr_26020_26039[(1)] = (8));
} else
{var statearr_26021_26040 = state_26007__$1;(statearr_26021_26040[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26008 === (10)))
{var inst_25999 = (state_26007[(2)]);var state_26007__$1 = state_26007;var statearr_26022_26041 = state_26007__$1;(statearr_26022_26041[(2)] = inst_25999);
(statearr_26022_26041[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26008 === (8)))
{var inst_25984 = (state_26007[(7)]);var tmp26019 = inst_25984;var inst_25984__$1 = tmp26019;var state_26007__$1 = (function (){var statearr_26023 = state_26007;(statearr_26023[(7)] = inst_25984__$1);
return statearr_26023;
})();var statearr_26024_26042 = state_26007__$1;(statearr_26024_26042[(2)] = null);
(statearr_26024_26042[(1)] = (2));
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
});})(c__9125__auto___26032,out))
;return ((function (switch__9110__auto__,c__9125__auto___26032,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26028 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26028[(0)] = state_machine__9111__auto__);
(statearr_26028[(1)] = (1));
return statearr_26028;
});
var state_machine__9111__auto____1 = (function (state_26007){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26007);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26029){if((e26029 instanceof Object))
{var ex__9114__auto__ = e26029;var statearr_26030_26043 = state_26007;(statearr_26030_26043[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26007);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26029;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26044 = state_26007;
state_26007 = G__26044;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26007){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26032,out))
})();var state__9127__auto__ = (function (){var statearr_26031 = f__9126__auto__.call(null);(statearr_26031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26032);
return statearr_26031;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26032,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26179 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26179,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26179,out){
return (function (state_26149){var state_val_26150 = (state_26149[(1)]);if((state_val_26150 === (7)))
{var inst_26145 = (state_26149[(2)]);var state_26149__$1 = state_26149;var statearr_26151_26180 = state_26149__$1;(statearr_26151_26180[(2)] = inst_26145);
(statearr_26151_26180[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26150 === (1)))
{var inst_26112 = (new Array(n));var inst_26113 = inst_26112;var inst_26114 = (0);var state_26149__$1 = (function (){var statearr_26152 = state_26149;(statearr_26152[(7)] = inst_26113);
(statearr_26152[(8)] = inst_26114);
return statearr_26152;
})();var statearr_26153_26181 = state_26149__$1;(statearr_26153_26181[(2)] = null);
(statearr_26153_26181[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26150 === (4)))
{var inst_26117 = (state_26149[(9)]);var inst_26117__$1 = (state_26149[(2)]);var inst_26118 = (inst_26117__$1 == null);var inst_26119 = cljs.core.not.call(null,inst_26118);var state_26149__$1 = (function (){var statearr_26154 = state_26149;(statearr_26154[(9)] = inst_26117__$1);
return statearr_26154;
})();if(inst_26119)
{var statearr_26155_26182 = state_26149__$1;(statearr_26155_26182[(1)] = (5));
} else
{var statearr_26156_26183 = state_26149__$1;(statearr_26156_26183[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26150 === (15)))
{var inst_26139 = (state_26149[(2)]);var state_26149__$1 = state_26149;var statearr_26157_26184 = state_26149__$1;(statearr_26157_26184[(2)] = inst_26139);
(statearr_26157_26184[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26150 === (13)))
{var state_26149__$1 = state_26149;var statearr_26158_26185 = state_26149__$1;(statearr_26158_26185[(2)] = null);
(statearr_26158_26185[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26150 === (6)))
{var inst_26114 = (state_26149[(8)]);var inst_26135 = (inst_26114 > (0));var state_26149__$1 = state_26149;if(cljs.core.truth_(inst_26135))
{var statearr_26159_26186 = state_26149__$1;(statearr_26159_26186[(1)] = (12));
} else
{var statearr_26160_26187 = state_26149__$1;(statearr_26160_26187[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26150 === (3)))
{var inst_26147 = (state_26149[(2)]);var state_26149__$1 = state_26149;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26149__$1,inst_26147);
} else
{if((state_val_26150 === (12)))
{var inst_26113 = (state_26149[(7)]);var inst_26137 = cljs.core.vec.call(null,inst_26113);var state_26149__$1 = state_26149;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26149__$1,(15),out,inst_26137);
} else
{if((state_val_26150 === (2)))
{var state_26149__$1 = state_26149;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26149__$1,(4),ch);
} else
{if((state_val_26150 === (11)))
{var inst_26129 = (state_26149[(2)]);var inst_26130 = (new Array(n));var inst_26113 = inst_26130;var inst_26114 = (0);var state_26149__$1 = (function (){var statearr_26161 = state_26149;(statearr_26161[(10)] = inst_26129);
(statearr_26161[(7)] = inst_26113);
(statearr_26161[(8)] = inst_26114);
return statearr_26161;
})();var statearr_26162_26188 = state_26149__$1;(statearr_26162_26188[(2)] = null);
(statearr_26162_26188[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26150 === (9)))
{var inst_26113 = (state_26149[(7)]);var inst_26127 = cljs.core.vec.call(null,inst_26113);var state_26149__$1 = state_26149;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26149__$1,(11),out,inst_26127);
} else
{if((state_val_26150 === (5)))
{var inst_26122 = (state_26149[(11)]);var inst_26117 = (state_26149[(9)]);var inst_26113 = (state_26149[(7)]);var inst_26114 = (state_26149[(8)]);var inst_26121 = (inst_26113[inst_26114] = inst_26117);var inst_26122__$1 = (inst_26114 + (1));var inst_26123 = (inst_26122__$1 < n);var state_26149__$1 = (function (){var statearr_26163 = state_26149;(statearr_26163[(11)] = inst_26122__$1);
(statearr_26163[(12)] = inst_26121);
return statearr_26163;
})();if(cljs.core.truth_(inst_26123))
{var statearr_26164_26189 = state_26149__$1;(statearr_26164_26189[(1)] = (8));
} else
{var statearr_26165_26190 = state_26149__$1;(statearr_26165_26190[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26150 === (14)))
{var inst_26142 = (state_26149[(2)]);var inst_26143 = cljs.core.async.close_BANG_.call(null,out);var state_26149__$1 = (function (){var statearr_26167 = state_26149;(statearr_26167[(13)] = inst_26142);
return statearr_26167;
})();var statearr_26168_26191 = state_26149__$1;(statearr_26168_26191[(2)] = inst_26143);
(statearr_26168_26191[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26150 === (10)))
{var inst_26133 = (state_26149[(2)]);var state_26149__$1 = state_26149;var statearr_26169_26192 = state_26149__$1;(statearr_26169_26192[(2)] = inst_26133);
(statearr_26169_26192[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26150 === (8)))
{var inst_26122 = (state_26149[(11)]);var inst_26113 = (state_26149[(7)]);var tmp26166 = inst_26113;var inst_26113__$1 = tmp26166;var inst_26114 = inst_26122;var state_26149__$1 = (function (){var statearr_26170 = state_26149;(statearr_26170[(7)] = inst_26113__$1);
(statearr_26170[(8)] = inst_26114);
return statearr_26170;
})();var statearr_26171_26193 = state_26149__$1;(statearr_26171_26193[(2)] = null);
(statearr_26171_26193[(1)] = (2));
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
});})(c__9125__auto___26179,out))
;return ((function (switch__9110__auto__,c__9125__auto___26179,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26175[(0)] = state_machine__9111__auto__);
(statearr_26175[(1)] = (1));
return statearr_26175;
});
var state_machine__9111__auto____1 = (function (state_26149){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26149);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26176){if((e26176 instanceof Object))
{var ex__9114__auto__ = e26176;var statearr_26177_26194 = state_26149;(statearr_26177_26194[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26149);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26176;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26195 = state_26149;
state_26149 = G__26195;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26149){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26179,out))
})();var state__9127__auto__ = (function (){var statearr_26178 = f__9126__auto__.call(null);(statearr_26178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26179);
return statearr_26178;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26179,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26338 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26338,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26338,out){
return (function (state_26308){var state_val_26309 = (state_26308[(1)]);if((state_val_26309 === (7)))
{var inst_26304 = (state_26308[(2)]);var state_26308__$1 = state_26308;var statearr_26310_26339 = state_26308__$1;(statearr_26310_26339[(2)] = inst_26304);
(statearr_26310_26339[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26309 === (1)))
{var inst_26267 = [];var inst_26268 = inst_26267;var inst_26269 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_26308__$1 = (function (){var statearr_26311 = state_26308;(statearr_26311[(7)] = inst_26268);
(statearr_26311[(8)] = inst_26269);
return statearr_26311;
})();var statearr_26312_26340 = state_26308__$1;(statearr_26312_26340[(2)] = null);
(statearr_26312_26340[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26309 === (4)))
{var inst_26272 = (state_26308[(9)]);var inst_26272__$1 = (state_26308[(2)]);var inst_26273 = (inst_26272__$1 == null);var inst_26274 = cljs.core.not.call(null,inst_26273);var state_26308__$1 = (function (){var statearr_26313 = state_26308;(statearr_26313[(9)] = inst_26272__$1);
return statearr_26313;
})();if(inst_26274)
{var statearr_26314_26341 = state_26308__$1;(statearr_26314_26341[(1)] = (5));
} else
{var statearr_26315_26342 = state_26308__$1;(statearr_26315_26342[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26309 === (15)))
{var inst_26298 = (state_26308[(2)]);var state_26308__$1 = state_26308;var statearr_26316_26343 = state_26308__$1;(statearr_26316_26343[(2)] = inst_26298);
(statearr_26316_26343[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26309 === (13)))
{var state_26308__$1 = state_26308;var statearr_26317_26344 = state_26308__$1;(statearr_26317_26344[(2)] = null);
(statearr_26317_26344[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26309 === (6)))
{var inst_26268 = (state_26308[(7)]);var inst_26293 = inst_26268.length;var inst_26294 = (inst_26293 > (0));var state_26308__$1 = state_26308;if(cljs.core.truth_(inst_26294))
{var statearr_26318_26345 = state_26308__$1;(statearr_26318_26345[(1)] = (12));
} else
{var statearr_26319_26346 = state_26308__$1;(statearr_26319_26346[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26309 === (3)))
{var inst_26306 = (state_26308[(2)]);var state_26308__$1 = state_26308;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26308__$1,inst_26306);
} else
{if((state_val_26309 === (12)))
{var inst_26268 = (state_26308[(7)]);var inst_26296 = cljs.core.vec.call(null,inst_26268);var state_26308__$1 = state_26308;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26308__$1,(15),out,inst_26296);
} else
{if((state_val_26309 === (2)))
{var state_26308__$1 = state_26308;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26308__$1,(4),ch);
} else
{if((state_val_26309 === (11)))
{var inst_26272 = (state_26308[(9)]);var inst_26276 = (state_26308[(10)]);var inst_26286 = (state_26308[(2)]);var inst_26287 = [];var inst_26288 = inst_26287.push(inst_26272);var inst_26268 = inst_26287;var inst_26269 = inst_26276;var state_26308__$1 = (function (){var statearr_26320 = state_26308;(statearr_26320[(7)] = inst_26268);
(statearr_26320[(11)] = inst_26286);
(statearr_26320[(8)] = inst_26269);
(statearr_26320[(12)] = inst_26288);
return statearr_26320;
})();var statearr_26321_26347 = state_26308__$1;(statearr_26321_26347[(2)] = null);
(statearr_26321_26347[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26309 === (9)))
{var inst_26268 = (state_26308[(7)]);var inst_26284 = cljs.core.vec.call(null,inst_26268);var state_26308__$1 = state_26308;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26308__$1,(11),out,inst_26284);
} else
{if((state_val_26309 === (5)))
{var inst_26269 = (state_26308[(8)]);var inst_26272 = (state_26308[(9)]);var inst_26276 = (state_26308[(10)]);var inst_26276__$1 = f.call(null,inst_26272);var inst_26277 = cljs.core._EQ_.call(null,inst_26276__$1,inst_26269);var inst_26278 = cljs.core.keyword_identical_QMARK_.call(null,inst_26269,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_26279 = (inst_26277) || (inst_26278);var state_26308__$1 = (function (){var statearr_26322 = state_26308;(statearr_26322[(10)] = inst_26276__$1);
return statearr_26322;
})();if(cljs.core.truth_(inst_26279))
{var statearr_26323_26348 = state_26308__$1;(statearr_26323_26348[(1)] = (8));
} else
{var statearr_26324_26349 = state_26308__$1;(statearr_26324_26349[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26309 === (14)))
{var inst_26301 = (state_26308[(2)]);var inst_26302 = cljs.core.async.close_BANG_.call(null,out);var state_26308__$1 = (function (){var statearr_26326 = state_26308;(statearr_26326[(13)] = inst_26301);
return statearr_26326;
})();var statearr_26327_26350 = state_26308__$1;(statearr_26327_26350[(2)] = inst_26302);
(statearr_26327_26350[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26309 === (10)))
{var inst_26291 = (state_26308[(2)]);var state_26308__$1 = state_26308;var statearr_26328_26351 = state_26308__$1;(statearr_26328_26351[(2)] = inst_26291);
(statearr_26328_26351[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26309 === (8)))
{var inst_26268 = (state_26308[(7)]);var inst_26272 = (state_26308[(9)]);var inst_26276 = (state_26308[(10)]);var inst_26281 = inst_26268.push(inst_26272);var tmp26325 = inst_26268;var inst_26268__$1 = tmp26325;var inst_26269 = inst_26276;var state_26308__$1 = (function (){var statearr_26329 = state_26308;(statearr_26329[(7)] = inst_26268__$1);
(statearr_26329[(14)] = inst_26281);
(statearr_26329[(8)] = inst_26269);
return statearr_26329;
})();var statearr_26330_26352 = state_26308__$1;(statearr_26330_26352[(2)] = null);
(statearr_26330_26352[(1)] = (2));
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
});})(c__9125__auto___26338,out))
;return ((function (switch__9110__auto__,c__9125__auto___26338,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26334[(0)] = state_machine__9111__auto__);
(statearr_26334[(1)] = (1));
return statearr_26334;
});
var state_machine__9111__auto____1 = (function (state_26308){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26308);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26335){if((e26335 instanceof Object))
{var ex__9114__auto__ = e26335;var statearr_26336_26353 = state_26308;(statearr_26336_26353[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26308);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26335;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26354 = state_26308;
state_26308 = G__26354;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26308){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26338,out))
})();var state__9127__auto__ = (function (){var statearr_26337 = f__9126__auto__.call(null);(statearr_26337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26338);
return statearr_26337;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26338,out))
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
