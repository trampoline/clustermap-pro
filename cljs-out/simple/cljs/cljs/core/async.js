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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23284 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23284 = (function (f,fn_handler,meta23285){
this.f = f;
this.fn_handler = fn_handler;
this.meta23285 = meta23285;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23284.cljs$lang$type = true;
cljs.core.async.t23284.cljs$lang$ctorStr = "cljs.core.async/t23284";
cljs.core.async.t23284.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23284");
});
cljs.core.async.t23284.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23284.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23284.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23286){var self__ = this;
var _23286__$1 = this;return self__.meta23285;
});
cljs.core.async.t23284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23286,meta23285__$1){var self__ = this;
var _23286__$1 = this;return (new cljs.core.async.t23284(self__.f,self__.fn_handler,meta23285__$1));
});
cljs.core.async.__GT_t23284 = (function __GT_t23284(f__$1,fn_handler__$1,meta23285){return (new cljs.core.async.t23284(f__$1,fn_handler__$1,meta23285));
});
}
return (new cljs.core.async.t23284(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23288 = buff;if(G__23288)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__23288.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23288.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23288);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23288);
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
{var val_23289 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23289);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_23289,ret){
return (function (){return fn1.call(null,val_23289);
});})(val_23289,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___23290 = n;var x_23291 = (0);while(true){
if((x_23291 < n__4508__auto___23290))
{(a[x_23291] = (0));
{
var G__23292 = (x_23291 + (1));
x_23291 = G__23292;
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
var G__23293 = (i + (1));
i = G__23293;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23297 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23297 = (function (flag,alt_flag,meta23298){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23298 = meta23298;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23297.cljs$lang$type = true;
cljs.core.async.t23297.cljs$lang$ctorStr = "cljs.core.async/t23297";
cljs.core.async.t23297.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23297");
});})(flag))
;
cljs.core.async.t23297.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23297.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t23297.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t23297.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23299){var self__ = this;
var _23299__$1 = this;return self__.meta23298;
});})(flag))
;
cljs.core.async.t23297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23299,meta23298__$1){var self__ = this;
var _23299__$1 = this;return (new cljs.core.async.t23297(self__.flag,self__.alt_flag,meta23298__$1));
});})(flag))
;
cljs.core.async.__GT_t23297 = ((function (flag){
return (function __GT_t23297(flag__$1,alt_flag__$1,meta23298){return (new cljs.core.async.t23297(flag__$1,alt_flag__$1,meta23298));
});})(flag))
;
}
return (new cljs.core.async.t23297(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23303 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23303 = (function (cb,flag,alt_handler,meta23304){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23304 = meta23304;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23303.cljs$lang$type = true;
cljs.core.async.t23303.cljs$lang$ctorStr = "cljs.core.async/t23303";
cljs.core.async.t23303.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23303");
});
cljs.core.async.t23303.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23303.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23303.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23305){var self__ = this;
var _23305__$1 = this;return self__.meta23304;
});
cljs.core.async.t23303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23305,meta23304__$1){var self__ = this;
var _23305__$1 = this;return (new cljs.core.async.t23303(self__.cb,self__.flag,self__.alt_handler,meta23304__$1));
});
cljs.core.async.__GT_t23303 = (function __GT_t23303(cb__$1,flag__$1,alt_handler__$1,meta23304){return (new cljs.core.async.t23303(cb__$1,flag__$1,alt_handler__$1,meta23304));
});
}
return (new cljs.core.async.t23303(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23306_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23306_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23307_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23307_SHARP_,port], null));
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
var G__23308 = (i + (1));
i = G__23308;
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
var alts_BANG___delegate = function (ports,p__23309){var map__23311 = p__23309;var map__23311__$1 = ((cljs.core.seq_QMARK_.call(null,map__23311))?cljs.core.apply.call(null,cljs.core.hash_map,map__23311):map__23311);var opts = map__23311__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23309 = null;if (arguments.length > 1) {
  p__23309 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23309);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23312){
var ports = cljs.core.first(arglist__23312);
var p__23309 = cljs.core.rest(arglist__23312);
return alts_BANG___delegate(ports,p__23309);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__9125__auto___23407 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23407){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23407){
return (function (state_23383){var state_val_23384 = (state_23383[(1)]);if((state_val_23384 === (7)))
{var inst_23379 = (state_23383[(2)]);var state_23383__$1 = state_23383;var statearr_23385_23408 = state_23383__$1;(statearr_23385_23408[(2)] = inst_23379);
(statearr_23385_23408[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23384 === (1)))
{var state_23383__$1 = state_23383;var statearr_23386_23409 = state_23383__$1;(statearr_23386_23409[(2)] = null);
(statearr_23386_23409[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23384 === (4)))
{var inst_23362 = (state_23383[(7)]);var inst_23362__$1 = (state_23383[(2)]);var inst_23363 = (inst_23362__$1 == null);var state_23383__$1 = (function (){var statearr_23387 = state_23383;(statearr_23387[(7)] = inst_23362__$1);
return statearr_23387;
})();if(cljs.core.truth_(inst_23363))
{var statearr_23388_23410 = state_23383__$1;(statearr_23388_23410[(1)] = (5));
} else
{var statearr_23389_23411 = state_23383__$1;(statearr_23389_23411[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23384 === (13)))
{var state_23383__$1 = state_23383;var statearr_23390_23412 = state_23383__$1;(statearr_23390_23412[(2)] = null);
(statearr_23390_23412[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23384 === (6)))
{var inst_23362 = (state_23383[(7)]);var state_23383__$1 = state_23383;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23383__$1,(11),to,inst_23362);
} else
{if((state_val_23384 === (3)))
{var inst_23381 = (state_23383[(2)]);var state_23383__$1 = state_23383;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23383__$1,inst_23381);
} else
{if((state_val_23384 === (12)))
{var state_23383__$1 = state_23383;var statearr_23391_23413 = state_23383__$1;(statearr_23391_23413[(2)] = null);
(statearr_23391_23413[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23384 === (2)))
{var state_23383__$1 = state_23383;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23383__$1,(4),from);
} else
{if((state_val_23384 === (11)))
{var inst_23372 = (state_23383[(2)]);var state_23383__$1 = state_23383;if(cljs.core.truth_(inst_23372))
{var statearr_23392_23414 = state_23383__$1;(statearr_23392_23414[(1)] = (12));
} else
{var statearr_23393_23415 = state_23383__$1;(statearr_23393_23415[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23384 === (9)))
{var state_23383__$1 = state_23383;var statearr_23394_23416 = state_23383__$1;(statearr_23394_23416[(2)] = null);
(statearr_23394_23416[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23384 === (5)))
{var state_23383__$1 = state_23383;if(cljs.core.truth_(close_QMARK_))
{var statearr_23395_23417 = state_23383__$1;(statearr_23395_23417[(1)] = (8));
} else
{var statearr_23396_23418 = state_23383__$1;(statearr_23396_23418[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23384 === (14)))
{var inst_23377 = (state_23383[(2)]);var state_23383__$1 = state_23383;var statearr_23397_23419 = state_23383__$1;(statearr_23397_23419[(2)] = inst_23377);
(statearr_23397_23419[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23384 === (10)))
{var inst_23369 = (state_23383[(2)]);var state_23383__$1 = state_23383;var statearr_23398_23420 = state_23383__$1;(statearr_23398_23420[(2)] = inst_23369);
(statearr_23398_23420[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23384 === (8)))
{var inst_23366 = cljs.core.async.close_BANG_.call(null,to);var state_23383__$1 = state_23383;var statearr_23399_23421 = state_23383__$1;(statearr_23399_23421[(2)] = inst_23366);
(statearr_23399_23421[(1)] = (10));
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
});})(c__9125__auto___23407))
;return ((function (switch__9110__auto__,c__9125__auto___23407){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23403 = [null,null,null,null,null,null,null,null];(statearr_23403[(0)] = state_machine__9111__auto__);
(statearr_23403[(1)] = (1));
return statearr_23403;
});
var state_machine__9111__auto____1 = (function (state_23383){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23383);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23404){if((e23404 instanceof Object))
{var ex__9114__auto__ = e23404;var statearr_23405_23422 = state_23383;(statearr_23405_23422[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23383);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23404;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23423 = state_23383;
state_23383 = G__23423;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23383){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23407))
})();var state__9127__auto__ = (function (){var statearr_23406 = f__9126__auto__.call(null);(statearr_23406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23407);
return statearr_23406;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23407))
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
return (function (p__23607){var vec__23608 = p__23607;var v = cljs.core.nth.call(null,vec__23608,(0),null);var p = cljs.core.nth.call(null,vec__23608,(1),null);var job = vec__23608;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__9125__auto___23790 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23790,res,vec__23608,v,p,job,jobs,results){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23790,res,vec__23608,v,p,job,jobs,results){
return (function (state_23613){var state_val_23614 = (state_23613[(1)]);if((state_val_23614 === (2)))
{var inst_23610 = (state_23613[(2)]);var inst_23611 = cljs.core.async.close_BANG_.call(null,res);var state_23613__$1 = (function (){var statearr_23615 = state_23613;(statearr_23615[(7)] = inst_23610);
return statearr_23615;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23613__$1,inst_23611);
} else
{if((state_val_23614 === (1)))
{var state_23613__$1 = state_23613;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23613__$1,(2),res,v);
} else
{return null;
}
}
});})(c__9125__auto___23790,res,vec__23608,v,p,job,jobs,results))
;return ((function (switch__9110__auto__,c__9125__auto___23790,res,vec__23608,v,p,job,jobs,results){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23619 = [null,null,null,null,null,null,null,null];(statearr_23619[(0)] = state_machine__9111__auto__);
(statearr_23619[(1)] = (1));
return statearr_23619;
});
var state_machine__9111__auto____1 = (function (state_23613){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23613);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23620){if((e23620 instanceof Object))
{var ex__9114__auto__ = e23620;var statearr_23621_23791 = state_23613;(statearr_23621_23791[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23613);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23620;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23792 = state_23613;
state_23613 = G__23792;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23613){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23790,res,vec__23608,v,p,job,jobs,results))
})();var state__9127__auto__ = (function (){var statearr_23622 = f__9126__auto__.call(null);(statearr_23622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23790);
return statearr_23622;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23790,res,vec__23608,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__23623){var vec__23624 = p__23623;var v = cljs.core.nth.call(null,vec__23624,(0),null);var p = cljs.core.nth.call(null,vec__23624,(1),null);var job = vec__23624;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___23793 = n;var __23794 = (0);while(true){
if((__23794 < n__4508__auto___23793))
{var G__23625_23795 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__23625_23795) {
case "async":
var c__9125__auto___23797 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23794,c__9125__auto___23797,G__23625_23795,n__4508__auto___23793,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__23794,c__9125__auto___23797,G__23625_23795,n__4508__auto___23793,jobs,results,process,async){
return (function (state_23638){var state_val_23639 = (state_23638[(1)]);if((state_val_23639 === (7)))
{var inst_23634 = (state_23638[(2)]);var state_23638__$1 = state_23638;var statearr_23640_23798 = state_23638__$1;(statearr_23640_23798[(2)] = inst_23634);
(statearr_23640_23798[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23639 === (6)))
{var state_23638__$1 = state_23638;var statearr_23641_23799 = state_23638__$1;(statearr_23641_23799[(2)] = null);
(statearr_23641_23799[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23639 === (5)))
{var state_23638__$1 = state_23638;var statearr_23642_23800 = state_23638__$1;(statearr_23642_23800[(2)] = null);
(statearr_23642_23800[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23639 === (4)))
{var inst_23628 = (state_23638[(2)]);var inst_23629 = async.call(null,inst_23628);var state_23638__$1 = state_23638;if(cljs.core.truth_(inst_23629))
{var statearr_23643_23801 = state_23638__$1;(statearr_23643_23801[(1)] = (5));
} else
{var statearr_23644_23802 = state_23638__$1;(statearr_23644_23802[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23639 === (3)))
{var inst_23636 = (state_23638[(2)]);var state_23638__$1 = state_23638;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23638__$1,inst_23636);
} else
{if((state_val_23639 === (2)))
{var state_23638__$1 = state_23638;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23638__$1,(4),jobs);
} else
{if((state_val_23639 === (1)))
{var state_23638__$1 = state_23638;var statearr_23645_23803 = state_23638__$1;(statearr_23645_23803[(2)] = null);
(statearr_23645_23803[(1)] = (2));
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
});})(__23794,c__9125__auto___23797,G__23625_23795,n__4508__auto___23793,jobs,results,process,async))
;return ((function (__23794,switch__9110__auto__,c__9125__auto___23797,G__23625_23795,n__4508__auto___23793,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23649 = [null,null,null,null,null,null,null];(statearr_23649[(0)] = state_machine__9111__auto__);
(statearr_23649[(1)] = (1));
return statearr_23649;
});
var state_machine__9111__auto____1 = (function (state_23638){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23638);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23650){if((e23650 instanceof Object))
{var ex__9114__auto__ = e23650;var statearr_23651_23804 = state_23638;(statearr_23651_23804[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23638);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23650;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23805 = state_23638;
state_23638 = G__23805;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23638){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__23794,switch__9110__auto__,c__9125__auto___23797,G__23625_23795,n__4508__auto___23793,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23652 = f__9126__auto__.call(null);(statearr_23652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23797);
return statearr_23652;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__23794,c__9125__auto___23797,G__23625_23795,n__4508__auto___23793,jobs,results,process,async))
);

break;
case "compute":
var c__9125__auto___23806 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23794,c__9125__auto___23806,G__23625_23795,n__4508__auto___23793,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__23794,c__9125__auto___23806,G__23625_23795,n__4508__auto___23793,jobs,results,process,async){
return (function (state_23665){var state_val_23666 = (state_23665[(1)]);if((state_val_23666 === (7)))
{var inst_23661 = (state_23665[(2)]);var state_23665__$1 = state_23665;var statearr_23667_23807 = state_23665__$1;(statearr_23667_23807[(2)] = inst_23661);
(statearr_23667_23807[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23666 === (6)))
{var state_23665__$1 = state_23665;var statearr_23668_23808 = state_23665__$1;(statearr_23668_23808[(2)] = null);
(statearr_23668_23808[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23666 === (5)))
{var state_23665__$1 = state_23665;var statearr_23669_23809 = state_23665__$1;(statearr_23669_23809[(2)] = null);
(statearr_23669_23809[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23666 === (4)))
{var inst_23655 = (state_23665[(2)]);var inst_23656 = process.call(null,inst_23655);var state_23665__$1 = state_23665;if(cljs.core.truth_(inst_23656))
{var statearr_23670_23810 = state_23665__$1;(statearr_23670_23810[(1)] = (5));
} else
{var statearr_23671_23811 = state_23665__$1;(statearr_23671_23811[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23666 === (3)))
{var inst_23663 = (state_23665[(2)]);var state_23665__$1 = state_23665;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23665__$1,inst_23663);
} else
{if((state_val_23666 === (2)))
{var state_23665__$1 = state_23665;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23665__$1,(4),jobs);
} else
{if((state_val_23666 === (1)))
{var state_23665__$1 = state_23665;var statearr_23672_23812 = state_23665__$1;(statearr_23672_23812[(2)] = null);
(statearr_23672_23812[(1)] = (2));
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
});})(__23794,c__9125__auto___23806,G__23625_23795,n__4508__auto___23793,jobs,results,process,async))
;return ((function (__23794,switch__9110__auto__,c__9125__auto___23806,G__23625_23795,n__4508__auto___23793,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23676 = [null,null,null,null,null,null,null];(statearr_23676[(0)] = state_machine__9111__auto__);
(statearr_23676[(1)] = (1));
return statearr_23676;
});
var state_machine__9111__auto____1 = (function (state_23665){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23665);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23677){if((e23677 instanceof Object))
{var ex__9114__auto__ = e23677;var statearr_23678_23813 = state_23665;(statearr_23678_23813[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23665);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23677;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23814 = state_23665;
state_23665 = G__23814;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23665){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__23794,switch__9110__auto__,c__9125__auto___23806,G__23625_23795,n__4508__auto___23793,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23679 = f__9126__auto__.call(null);(statearr_23679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23806);
return statearr_23679;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__23794,c__9125__auto___23806,G__23625_23795,n__4508__auto___23793,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__23815 = (__23794 + (1));
__23794 = G__23815;
continue;
}
} else
{}
break;
}
var c__9125__auto___23816 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23816,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23816,jobs,results,process,async){
return (function (state_23701){var state_val_23702 = (state_23701[(1)]);if((state_val_23702 === (9)))
{var inst_23694 = (state_23701[(2)]);var state_23701__$1 = (function (){var statearr_23703 = state_23701;(statearr_23703[(7)] = inst_23694);
return statearr_23703;
})();var statearr_23704_23817 = state_23701__$1;(statearr_23704_23817[(2)] = null);
(statearr_23704_23817[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23702 === (8)))
{var inst_23687 = (state_23701[(8)]);var inst_23692 = (state_23701[(2)]);var state_23701__$1 = (function (){var statearr_23705 = state_23701;(statearr_23705[(9)] = inst_23692);
return statearr_23705;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23701__$1,(9),results,inst_23687);
} else
{if((state_val_23702 === (7)))
{var inst_23697 = (state_23701[(2)]);var state_23701__$1 = state_23701;var statearr_23706_23818 = state_23701__$1;(statearr_23706_23818[(2)] = inst_23697);
(statearr_23706_23818[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23702 === (6)))
{var inst_23687 = (state_23701[(8)]);var inst_23682 = (state_23701[(10)]);var inst_23687__$1 = cljs.core.async.chan.call(null,(1));var inst_23688 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23689 = [inst_23682,inst_23687__$1];var inst_23690 = (new cljs.core.PersistentVector(null,2,(5),inst_23688,inst_23689,null));var state_23701__$1 = (function (){var statearr_23707 = state_23701;(statearr_23707[(8)] = inst_23687__$1);
return statearr_23707;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23701__$1,(8),jobs,inst_23690);
} else
{if((state_val_23702 === (5)))
{var inst_23685 = cljs.core.async.close_BANG_.call(null,jobs);var state_23701__$1 = state_23701;var statearr_23708_23819 = state_23701__$1;(statearr_23708_23819[(2)] = inst_23685);
(statearr_23708_23819[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23702 === (4)))
{var inst_23682 = (state_23701[(10)]);var inst_23682__$1 = (state_23701[(2)]);var inst_23683 = (inst_23682__$1 == null);var state_23701__$1 = (function (){var statearr_23709 = state_23701;(statearr_23709[(10)] = inst_23682__$1);
return statearr_23709;
})();if(cljs.core.truth_(inst_23683))
{var statearr_23710_23820 = state_23701__$1;(statearr_23710_23820[(1)] = (5));
} else
{var statearr_23711_23821 = state_23701__$1;(statearr_23711_23821[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23702 === (3)))
{var inst_23699 = (state_23701[(2)]);var state_23701__$1 = state_23701;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23701__$1,inst_23699);
} else
{if((state_val_23702 === (2)))
{var state_23701__$1 = state_23701;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23701__$1,(4),from);
} else
{if((state_val_23702 === (1)))
{var state_23701__$1 = state_23701;var statearr_23712_23822 = state_23701__$1;(statearr_23712_23822[(2)] = null);
(statearr_23712_23822[(1)] = (2));
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
});})(c__9125__auto___23816,jobs,results,process,async))
;return ((function (switch__9110__auto__,c__9125__auto___23816,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23716 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23716[(0)] = state_machine__9111__auto__);
(statearr_23716[(1)] = (1));
return statearr_23716;
});
var state_machine__9111__auto____1 = (function (state_23701){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23701);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23717){if((e23717 instanceof Object))
{var ex__9114__auto__ = e23717;var statearr_23718_23823 = state_23701;(statearr_23718_23823[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23701);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23717;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23824 = state_23701;
state_23701 = G__23824;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23701){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23816,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23719 = f__9126__auto__.call(null);(statearr_23719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23816);
return statearr_23719;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23816,jobs,results,process,async))
);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,jobs,results,process,async){
return (function (state_23757){var state_val_23758 = (state_23757[(1)]);if((state_val_23758 === (7)))
{var inst_23753 = (state_23757[(2)]);var state_23757__$1 = state_23757;var statearr_23759_23825 = state_23757__$1;(statearr_23759_23825[(2)] = inst_23753);
(statearr_23759_23825[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (20)))
{var state_23757__$1 = state_23757;var statearr_23760_23826 = state_23757__$1;(statearr_23760_23826[(2)] = null);
(statearr_23760_23826[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (1)))
{var state_23757__$1 = state_23757;var statearr_23761_23827 = state_23757__$1;(statearr_23761_23827[(2)] = null);
(statearr_23761_23827[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (4)))
{var inst_23722 = (state_23757[(7)]);var inst_23722__$1 = (state_23757[(2)]);var inst_23723 = (inst_23722__$1 == null);var state_23757__$1 = (function (){var statearr_23762 = state_23757;(statearr_23762[(7)] = inst_23722__$1);
return statearr_23762;
})();if(cljs.core.truth_(inst_23723))
{var statearr_23763_23828 = state_23757__$1;(statearr_23763_23828[(1)] = (5));
} else
{var statearr_23764_23829 = state_23757__$1;(statearr_23764_23829[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (15)))
{var inst_23735 = (state_23757[(8)]);var state_23757__$1 = state_23757;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23757__$1,(18),to,inst_23735);
} else
{if((state_val_23758 === (21)))
{var inst_23748 = (state_23757[(2)]);var state_23757__$1 = state_23757;var statearr_23765_23830 = state_23757__$1;(statearr_23765_23830[(2)] = inst_23748);
(statearr_23765_23830[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (13)))
{var inst_23750 = (state_23757[(2)]);var state_23757__$1 = (function (){var statearr_23766 = state_23757;(statearr_23766[(9)] = inst_23750);
return statearr_23766;
})();var statearr_23767_23831 = state_23757__$1;(statearr_23767_23831[(2)] = null);
(statearr_23767_23831[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (6)))
{var inst_23722 = (state_23757[(7)]);var state_23757__$1 = state_23757;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23757__$1,(11),inst_23722);
} else
{if((state_val_23758 === (17)))
{var inst_23743 = (state_23757[(2)]);var state_23757__$1 = state_23757;if(cljs.core.truth_(inst_23743))
{var statearr_23768_23832 = state_23757__$1;(statearr_23768_23832[(1)] = (19));
} else
{var statearr_23769_23833 = state_23757__$1;(statearr_23769_23833[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (3)))
{var inst_23755 = (state_23757[(2)]);var state_23757__$1 = state_23757;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23757__$1,inst_23755);
} else
{if((state_val_23758 === (12)))
{var inst_23732 = (state_23757[(10)]);var state_23757__$1 = state_23757;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23757__$1,(14),inst_23732);
} else
{if((state_val_23758 === (2)))
{var state_23757__$1 = state_23757;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23757__$1,(4),results);
} else
{if((state_val_23758 === (19)))
{var state_23757__$1 = state_23757;var statearr_23770_23834 = state_23757__$1;(statearr_23770_23834[(2)] = null);
(statearr_23770_23834[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (11)))
{var inst_23732 = (state_23757[(2)]);var state_23757__$1 = (function (){var statearr_23771 = state_23757;(statearr_23771[(10)] = inst_23732);
return statearr_23771;
})();var statearr_23772_23835 = state_23757__$1;(statearr_23772_23835[(2)] = null);
(statearr_23772_23835[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (9)))
{var state_23757__$1 = state_23757;var statearr_23773_23836 = state_23757__$1;(statearr_23773_23836[(2)] = null);
(statearr_23773_23836[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (5)))
{var state_23757__$1 = state_23757;if(cljs.core.truth_(close_QMARK_))
{var statearr_23774_23837 = state_23757__$1;(statearr_23774_23837[(1)] = (8));
} else
{var statearr_23775_23838 = state_23757__$1;(statearr_23775_23838[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (14)))
{var inst_23735 = (state_23757[(8)]);var inst_23737 = (state_23757[(11)]);var inst_23735__$1 = (state_23757[(2)]);var inst_23736 = (inst_23735__$1 == null);var inst_23737__$1 = cljs.core.not.call(null,inst_23736);var state_23757__$1 = (function (){var statearr_23776 = state_23757;(statearr_23776[(8)] = inst_23735__$1);
(statearr_23776[(11)] = inst_23737__$1);
return statearr_23776;
})();if(inst_23737__$1)
{var statearr_23777_23839 = state_23757__$1;(statearr_23777_23839[(1)] = (15));
} else
{var statearr_23778_23840 = state_23757__$1;(statearr_23778_23840[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (16)))
{var inst_23737 = (state_23757[(11)]);var state_23757__$1 = state_23757;var statearr_23779_23841 = state_23757__$1;(statearr_23779_23841[(2)] = inst_23737);
(statearr_23779_23841[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (10)))
{var inst_23729 = (state_23757[(2)]);var state_23757__$1 = state_23757;var statearr_23780_23842 = state_23757__$1;(statearr_23780_23842[(2)] = inst_23729);
(statearr_23780_23842[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (18)))
{var inst_23740 = (state_23757[(2)]);var state_23757__$1 = state_23757;var statearr_23781_23843 = state_23757__$1;(statearr_23781_23843[(2)] = inst_23740);
(statearr_23781_23843[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (8)))
{var inst_23726 = cljs.core.async.close_BANG_.call(null,to);var state_23757__$1 = state_23757;var statearr_23782_23844 = state_23757__$1;(statearr_23782_23844[(2)] = inst_23726);
(statearr_23782_23844[(1)] = (10));
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
var state_machine__9111__auto____0 = (function (){var statearr_23786 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23786[(0)] = state_machine__9111__auto__);
(statearr_23786[(1)] = (1));
return statearr_23786;
});
var state_machine__9111__auto____1 = (function (state_23757){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23757);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23787){if((e23787 instanceof Object))
{var ex__9114__auto__ = e23787;var statearr_23788_23845 = state_23757;(statearr_23788_23845[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23757);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23787;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23846 = state_23757;
state_23757 = G__23846;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23757){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23789 = f__9126__auto__.call(null);(statearr_23789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_23789;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__9125__auto___23947 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23947,tc,fc){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23947,tc,fc){
return (function (state_23922){var state_val_23923 = (state_23922[(1)]);if((state_val_23923 === (7)))
{var inst_23918 = (state_23922[(2)]);var state_23922__$1 = state_23922;var statearr_23924_23948 = state_23922__$1;(statearr_23924_23948[(2)] = inst_23918);
(statearr_23924_23948[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23923 === (1)))
{var state_23922__$1 = state_23922;var statearr_23925_23949 = state_23922__$1;(statearr_23925_23949[(2)] = null);
(statearr_23925_23949[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23923 === (4)))
{var inst_23899 = (state_23922[(7)]);var inst_23899__$1 = (state_23922[(2)]);var inst_23900 = (inst_23899__$1 == null);var state_23922__$1 = (function (){var statearr_23926 = state_23922;(statearr_23926[(7)] = inst_23899__$1);
return statearr_23926;
})();if(cljs.core.truth_(inst_23900))
{var statearr_23927_23950 = state_23922__$1;(statearr_23927_23950[(1)] = (5));
} else
{var statearr_23928_23951 = state_23922__$1;(statearr_23928_23951[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23923 === (13)))
{var state_23922__$1 = state_23922;var statearr_23929_23952 = state_23922__$1;(statearr_23929_23952[(2)] = null);
(statearr_23929_23952[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23923 === (6)))
{var inst_23899 = (state_23922[(7)]);var inst_23905 = p.call(null,inst_23899);var state_23922__$1 = state_23922;if(cljs.core.truth_(inst_23905))
{var statearr_23930_23953 = state_23922__$1;(statearr_23930_23953[(1)] = (9));
} else
{var statearr_23931_23954 = state_23922__$1;(statearr_23931_23954[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23923 === (3)))
{var inst_23920 = (state_23922[(2)]);var state_23922__$1 = state_23922;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23922__$1,inst_23920);
} else
{if((state_val_23923 === (12)))
{var state_23922__$1 = state_23922;var statearr_23932_23955 = state_23922__$1;(statearr_23932_23955[(2)] = null);
(statearr_23932_23955[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23923 === (2)))
{var state_23922__$1 = state_23922;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23922__$1,(4),ch);
} else
{if((state_val_23923 === (11)))
{var inst_23899 = (state_23922[(7)]);var inst_23909 = (state_23922[(2)]);var state_23922__$1 = state_23922;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23922__$1,(8),inst_23909,inst_23899);
} else
{if((state_val_23923 === (9)))
{var state_23922__$1 = state_23922;var statearr_23933_23956 = state_23922__$1;(statearr_23933_23956[(2)] = tc);
(statearr_23933_23956[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23923 === (5)))
{var inst_23902 = cljs.core.async.close_BANG_.call(null,tc);var inst_23903 = cljs.core.async.close_BANG_.call(null,fc);var state_23922__$1 = (function (){var statearr_23934 = state_23922;(statearr_23934[(8)] = inst_23902);
return statearr_23934;
})();var statearr_23935_23957 = state_23922__$1;(statearr_23935_23957[(2)] = inst_23903);
(statearr_23935_23957[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23923 === (14)))
{var inst_23916 = (state_23922[(2)]);var state_23922__$1 = state_23922;var statearr_23936_23958 = state_23922__$1;(statearr_23936_23958[(2)] = inst_23916);
(statearr_23936_23958[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23923 === (10)))
{var state_23922__$1 = state_23922;var statearr_23937_23959 = state_23922__$1;(statearr_23937_23959[(2)] = fc);
(statearr_23937_23959[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23923 === (8)))
{var inst_23911 = (state_23922[(2)]);var state_23922__$1 = state_23922;if(cljs.core.truth_(inst_23911))
{var statearr_23938_23960 = state_23922__$1;(statearr_23938_23960[(1)] = (12));
} else
{var statearr_23939_23961 = state_23922__$1;(statearr_23939_23961[(1)] = (13));
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
});})(c__9125__auto___23947,tc,fc))
;return ((function (switch__9110__auto__,c__9125__auto___23947,tc,fc){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23943 = [null,null,null,null,null,null,null,null,null];(statearr_23943[(0)] = state_machine__9111__auto__);
(statearr_23943[(1)] = (1));
return statearr_23943;
});
var state_machine__9111__auto____1 = (function (state_23922){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23922);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23944){if((e23944 instanceof Object))
{var ex__9114__auto__ = e23944;var statearr_23945_23962 = state_23922;(statearr_23945_23962[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23922);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23944;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23963 = state_23922;
state_23922 = G__23963;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23922){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23947,tc,fc))
})();var state__9127__auto__ = (function (){var statearr_23946 = f__9126__auto__.call(null);(statearr_23946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23947);
return statearr_23946;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23947,tc,fc))
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
return (function (state_24010){var state_val_24011 = (state_24010[(1)]);if((state_val_24011 === (7)))
{var inst_24006 = (state_24010[(2)]);var state_24010__$1 = state_24010;var statearr_24012_24028 = state_24010__$1;(statearr_24012_24028[(2)] = inst_24006);
(statearr_24012_24028[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24011 === (6)))
{var inst_23996 = (state_24010[(7)]);var inst_23999 = (state_24010[(8)]);var inst_24003 = f.call(null,inst_23996,inst_23999);var inst_23996__$1 = inst_24003;var state_24010__$1 = (function (){var statearr_24013 = state_24010;(statearr_24013[(7)] = inst_23996__$1);
return statearr_24013;
})();var statearr_24014_24029 = state_24010__$1;(statearr_24014_24029[(2)] = null);
(statearr_24014_24029[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24011 === (5)))
{var inst_23996 = (state_24010[(7)]);var state_24010__$1 = state_24010;var statearr_24015_24030 = state_24010__$1;(statearr_24015_24030[(2)] = inst_23996);
(statearr_24015_24030[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24011 === (4)))
{var inst_23999 = (state_24010[(8)]);var inst_23999__$1 = (state_24010[(2)]);var inst_24000 = (inst_23999__$1 == null);var state_24010__$1 = (function (){var statearr_24016 = state_24010;(statearr_24016[(8)] = inst_23999__$1);
return statearr_24016;
})();if(cljs.core.truth_(inst_24000))
{var statearr_24017_24031 = state_24010__$1;(statearr_24017_24031[(1)] = (5));
} else
{var statearr_24018_24032 = state_24010__$1;(statearr_24018_24032[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24011 === (3)))
{var inst_24008 = (state_24010[(2)]);var state_24010__$1 = state_24010;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24010__$1,inst_24008);
} else
{if((state_val_24011 === (2)))
{var state_24010__$1 = state_24010;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24010__$1,(4),ch);
} else
{if((state_val_24011 === (1)))
{var inst_23996 = init;var state_24010__$1 = (function (){var statearr_24019 = state_24010;(statearr_24019[(7)] = inst_23996);
return statearr_24019;
})();var statearr_24020_24033 = state_24010__$1;(statearr_24020_24033[(2)] = null);
(statearr_24020_24033[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_24024 = [null,null,null,null,null,null,null,null,null];(statearr_24024[(0)] = state_machine__9111__auto__);
(statearr_24024[(1)] = (1));
return statearr_24024;
});
var state_machine__9111__auto____1 = (function (state_24010){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24010);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24025){if((e24025 instanceof Object))
{var ex__9114__auto__ = e24025;var statearr_24026_24034 = state_24010;(statearr_24026_24034[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24010);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24025;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24035 = state_24010;
state_24010 = G__24035;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24010){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24027 = f__9126__auto__.call(null);(statearr_24027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24027;
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
return (function (state_24109){var state_val_24110 = (state_24109[(1)]);if((state_val_24110 === (7)))
{var inst_24091 = (state_24109[(2)]);var state_24109__$1 = state_24109;var statearr_24111_24134 = state_24109__$1;(statearr_24111_24134[(2)] = inst_24091);
(statearr_24111_24134[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24110 === (1)))
{var inst_24085 = cljs.core.seq.call(null,coll);var inst_24086 = inst_24085;var state_24109__$1 = (function (){var statearr_24112 = state_24109;(statearr_24112[(7)] = inst_24086);
return statearr_24112;
})();var statearr_24113_24135 = state_24109__$1;(statearr_24113_24135[(2)] = null);
(statearr_24113_24135[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24110 === (4)))
{var inst_24086 = (state_24109[(7)]);var inst_24089 = cljs.core.first.call(null,inst_24086);var state_24109__$1 = state_24109;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24109__$1,(7),ch,inst_24089);
} else
{if((state_val_24110 === (13)))
{var inst_24103 = (state_24109[(2)]);var state_24109__$1 = state_24109;var statearr_24114_24136 = state_24109__$1;(statearr_24114_24136[(2)] = inst_24103);
(statearr_24114_24136[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24110 === (6)))
{var inst_24094 = (state_24109[(2)]);var state_24109__$1 = state_24109;if(cljs.core.truth_(inst_24094))
{var statearr_24115_24137 = state_24109__$1;(statearr_24115_24137[(1)] = (8));
} else
{var statearr_24116_24138 = state_24109__$1;(statearr_24116_24138[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24110 === (3)))
{var inst_24107 = (state_24109[(2)]);var state_24109__$1 = state_24109;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24109__$1,inst_24107);
} else
{if((state_val_24110 === (12)))
{var state_24109__$1 = state_24109;var statearr_24117_24139 = state_24109__$1;(statearr_24117_24139[(2)] = null);
(statearr_24117_24139[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24110 === (2)))
{var inst_24086 = (state_24109[(7)]);var state_24109__$1 = state_24109;if(cljs.core.truth_(inst_24086))
{var statearr_24118_24140 = state_24109__$1;(statearr_24118_24140[(1)] = (4));
} else
{var statearr_24119_24141 = state_24109__$1;(statearr_24119_24141[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24110 === (11)))
{var inst_24100 = cljs.core.async.close_BANG_.call(null,ch);var state_24109__$1 = state_24109;var statearr_24120_24142 = state_24109__$1;(statearr_24120_24142[(2)] = inst_24100);
(statearr_24120_24142[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24110 === (9)))
{var state_24109__$1 = state_24109;if(cljs.core.truth_(close_QMARK_))
{var statearr_24121_24143 = state_24109__$1;(statearr_24121_24143[(1)] = (11));
} else
{var statearr_24122_24144 = state_24109__$1;(statearr_24122_24144[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24110 === (5)))
{var inst_24086 = (state_24109[(7)]);var state_24109__$1 = state_24109;var statearr_24123_24145 = state_24109__$1;(statearr_24123_24145[(2)] = inst_24086);
(statearr_24123_24145[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24110 === (10)))
{var inst_24105 = (state_24109[(2)]);var state_24109__$1 = state_24109;var statearr_24124_24146 = state_24109__$1;(statearr_24124_24146[(2)] = inst_24105);
(statearr_24124_24146[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24110 === (8)))
{var inst_24086 = (state_24109[(7)]);var inst_24096 = cljs.core.next.call(null,inst_24086);var inst_24086__$1 = inst_24096;var state_24109__$1 = (function (){var statearr_24125 = state_24109;(statearr_24125[(7)] = inst_24086__$1);
return statearr_24125;
})();var statearr_24126_24147 = state_24109__$1;(statearr_24126_24147[(2)] = null);
(statearr_24126_24147[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_24130 = [null,null,null,null,null,null,null,null];(statearr_24130[(0)] = state_machine__9111__auto__);
(statearr_24130[(1)] = (1));
return statearr_24130;
});
var state_machine__9111__auto____1 = (function (state_24109){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24109);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24131){if((e24131 instanceof Object))
{var ex__9114__auto__ = e24131;var statearr_24132_24148 = state_24109;(statearr_24132_24148[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24109);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24131;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24149 = state_24109;
state_24109 = G__24149;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24109){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24133 = f__9126__auto__.call(null);(statearr_24133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24133;
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
cljs.core.async.Mux = (function (){var obj24151 = {};return obj24151;
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
cljs.core.async.Mult = (function (){var obj24153 = {};return obj24153;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24375 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24375 = (function (cs,ch,mult,meta24376){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24376 = meta24376;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24375.cljs$lang$type = true;
cljs.core.async.t24375.cljs$lang$ctorStr = "cljs.core.async/t24375";
cljs.core.async.t24375.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24375");
});})(cs))
;
cljs.core.async.t24375.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24375.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24375.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24375.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24375.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24375.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24375.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24377){var self__ = this;
var _24377__$1 = this;return self__.meta24376;
});})(cs))
;
cljs.core.async.t24375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24377,meta24376__$1){var self__ = this;
var _24377__$1 = this;return (new cljs.core.async.t24375(self__.cs,self__.ch,self__.mult,meta24376__$1));
});})(cs))
;
cljs.core.async.__GT_t24375 = ((function (cs){
return (function __GT_t24375(cs__$1,ch__$1,mult__$1,meta24376){return (new cljs.core.async.t24375(cs__$1,ch__$1,mult__$1,meta24376));
});})(cs))
;
}
return (new cljs.core.async.t24375(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__9125__auto___24596 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24596,cs,m,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24596,cs,m,dchan,dctr,done){
return (function (state_24508){var state_val_24509 = (state_24508[(1)]);if((state_val_24509 === (7)))
{var inst_24504 = (state_24508[(2)]);var state_24508__$1 = state_24508;var statearr_24510_24597 = state_24508__$1;(statearr_24510_24597[(2)] = inst_24504);
(statearr_24510_24597[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (20)))
{var inst_24409 = (state_24508[(7)]);var inst_24419 = cljs.core.first.call(null,inst_24409);var inst_24420 = cljs.core.nth.call(null,inst_24419,(0),null);var inst_24421 = cljs.core.nth.call(null,inst_24419,(1),null);var state_24508__$1 = (function (){var statearr_24511 = state_24508;(statearr_24511[(8)] = inst_24420);
return statearr_24511;
})();if(cljs.core.truth_(inst_24421))
{var statearr_24512_24598 = state_24508__$1;(statearr_24512_24598[(1)] = (22));
} else
{var statearr_24513_24599 = state_24508__$1;(statearr_24513_24599[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (27)))
{var inst_24380 = (state_24508[(9)]);var inst_24449 = (state_24508[(10)]);var inst_24456 = (state_24508[(11)]);var inst_24451 = (state_24508[(12)]);var inst_24456__$1 = cljs.core._nth.call(null,inst_24449,inst_24451);var inst_24457 = cljs.core.async.put_BANG_.call(null,inst_24456__$1,inst_24380,done);var state_24508__$1 = (function (){var statearr_24514 = state_24508;(statearr_24514[(11)] = inst_24456__$1);
return statearr_24514;
})();if(cljs.core.truth_(inst_24457))
{var statearr_24515_24600 = state_24508__$1;(statearr_24515_24600[(1)] = (30));
} else
{var statearr_24516_24601 = state_24508__$1;(statearr_24516_24601[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (1)))
{var state_24508__$1 = state_24508;var statearr_24517_24602 = state_24508__$1;(statearr_24517_24602[(2)] = null);
(statearr_24517_24602[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (24)))
{var inst_24409 = (state_24508[(7)]);var inst_24426 = (state_24508[(2)]);var inst_24427 = cljs.core.next.call(null,inst_24409);var inst_24389 = inst_24427;var inst_24390 = null;var inst_24391 = (0);var inst_24392 = (0);var state_24508__$1 = (function (){var statearr_24518 = state_24508;(statearr_24518[(13)] = inst_24392);
(statearr_24518[(14)] = inst_24389);
(statearr_24518[(15)] = inst_24391);
(statearr_24518[(16)] = inst_24426);
(statearr_24518[(17)] = inst_24390);
return statearr_24518;
})();var statearr_24519_24603 = state_24508__$1;(statearr_24519_24603[(2)] = null);
(statearr_24519_24603[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (39)))
{var state_24508__$1 = state_24508;var statearr_24523_24604 = state_24508__$1;(statearr_24523_24604[(2)] = null);
(statearr_24523_24604[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (4)))
{var inst_24380 = (state_24508[(9)]);var inst_24380__$1 = (state_24508[(2)]);var inst_24381 = (inst_24380__$1 == null);var state_24508__$1 = (function (){var statearr_24524 = state_24508;(statearr_24524[(9)] = inst_24380__$1);
return statearr_24524;
})();if(cljs.core.truth_(inst_24381))
{var statearr_24525_24605 = state_24508__$1;(statearr_24525_24605[(1)] = (5));
} else
{var statearr_24526_24606 = state_24508__$1;(statearr_24526_24606[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (15)))
{var inst_24392 = (state_24508[(13)]);var inst_24389 = (state_24508[(14)]);var inst_24391 = (state_24508[(15)]);var inst_24390 = (state_24508[(17)]);var inst_24405 = (state_24508[(2)]);var inst_24406 = (inst_24392 + (1));var tmp24520 = inst_24389;var tmp24521 = inst_24391;var tmp24522 = inst_24390;var inst_24389__$1 = tmp24520;var inst_24390__$1 = tmp24522;var inst_24391__$1 = tmp24521;var inst_24392__$1 = inst_24406;var state_24508__$1 = (function (){var statearr_24527 = state_24508;(statearr_24527[(13)] = inst_24392__$1);
(statearr_24527[(14)] = inst_24389__$1);
(statearr_24527[(15)] = inst_24391__$1);
(statearr_24527[(17)] = inst_24390__$1);
(statearr_24527[(18)] = inst_24405);
return statearr_24527;
})();var statearr_24528_24607 = state_24508__$1;(statearr_24528_24607[(2)] = null);
(statearr_24528_24607[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (21)))
{var inst_24430 = (state_24508[(2)]);var state_24508__$1 = state_24508;var statearr_24532_24608 = state_24508__$1;(statearr_24532_24608[(2)] = inst_24430);
(statearr_24532_24608[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (31)))
{var inst_24456 = (state_24508[(11)]);var inst_24460 = done.call(null,null);var inst_24461 = cljs.core.async.untap_STAR_.call(null,m,inst_24456);var state_24508__$1 = (function (){var statearr_24533 = state_24508;(statearr_24533[(19)] = inst_24460);
return statearr_24533;
})();var statearr_24534_24609 = state_24508__$1;(statearr_24534_24609[(2)] = inst_24461);
(statearr_24534_24609[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (32)))
{var inst_24449 = (state_24508[(10)]);var inst_24448 = (state_24508[(20)]);var inst_24450 = (state_24508[(21)]);var inst_24451 = (state_24508[(12)]);var inst_24463 = (state_24508[(2)]);var inst_24464 = (inst_24451 + (1));var tmp24529 = inst_24449;var tmp24530 = inst_24448;var tmp24531 = inst_24450;var inst_24448__$1 = tmp24530;var inst_24449__$1 = tmp24529;var inst_24450__$1 = tmp24531;var inst_24451__$1 = inst_24464;var state_24508__$1 = (function (){var statearr_24535 = state_24508;(statearr_24535[(10)] = inst_24449__$1);
(statearr_24535[(22)] = inst_24463);
(statearr_24535[(20)] = inst_24448__$1);
(statearr_24535[(21)] = inst_24450__$1);
(statearr_24535[(12)] = inst_24451__$1);
return statearr_24535;
})();var statearr_24536_24610 = state_24508__$1;(statearr_24536_24610[(2)] = null);
(statearr_24536_24610[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (40)))
{var inst_24476 = (state_24508[(23)]);var inst_24480 = done.call(null,null);var inst_24481 = cljs.core.async.untap_STAR_.call(null,m,inst_24476);var state_24508__$1 = (function (){var statearr_24537 = state_24508;(statearr_24537[(24)] = inst_24480);
return statearr_24537;
})();var statearr_24538_24611 = state_24508__$1;(statearr_24538_24611[(2)] = inst_24481);
(statearr_24538_24611[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (33)))
{var inst_24467 = (state_24508[(25)]);var inst_24469 = cljs.core.chunked_seq_QMARK_.call(null,inst_24467);var state_24508__$1 = state_24508;if(inst_24469)
{var statearr_24539_24612 = state_24508__$1;(statearr_24539_24612[(1)] = (36));
} else
{var statearr_24540_24613 = state_24508__$1;(statearr_24540_24613[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (13)))
{var inst_24399 = (state_24508[(26)]);var inst_24402 = cljs.core.async.close_BANG_.call(null,inst_24399);var state_24508__$1 = state_24508;var statearr_24541_24614 = state_24508__$1;(statearr_24541_24614[(2)] = inst_24402);
(statearr_24541_24614[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (22)))
{var inst_24420 = (state_24508[(8)]);var inst_24423 = cljs.core.async.close_BANG_.call(null,inst_24420);var state_24508__$1 = state_24508;var statearr_24542_24615 = state_24508__$1;(statearr_24542_24615[(2)] = inst_24423);
(statearr_24542_24615[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (36)))
{var inst_24467 = (state_24508[(25)]);var inst_24471 = cljs.core.chunk_first.call(null,inst_24467);var inst_24472 = cljs.core.chunk_rest.call(null,inst_24467);var inst_24473 = cljs.core.count.call(null,inst_24471);var inst_24448 = inst_24472;var inst_24449 = inst_24471;var inst_24450 = inst_24473;var inst_24451 = (0);var state_24508__$1 = (function (){var statearr_24543 = state_24508;(statearr_24543[(10)] = inst_24449);
(statearr_24543[(20)] = inst_24448);
(statearr_24543[(21)] = inst_24450);
(statearr_24543[(12)] = inst_24451);
return statearr_24543;
})();var statearr_24544_24616 = state_24508__$1;(statearr_24544_24616[(2)] = null);
(statearr_24544_24616[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (41)))
{var inst_24467 = (state_24508[(25)]);var inst_24483 = (state_24508[(2)]);var inst_24484 = cljs.core.next.call(null,inst_24467);var inst_24448 = inst_24484;var inst_24449 = null;var inst_24450 = (0);var inst_24451 = (0);var state_24508__$1 = (function (){var statearr_24545 = state_24508;(statearr_24545[(10)] = inst_24449);
(statearr_24545[(27)] = inst_24483);
(statearr_24545[(20)] = inst_24448);
(statearr_24545[(21)] = inst_24450);
(statearr_24545[(12)] = inst_24451);
return statearr_24545;
})();var statearr_24546_24617 = state_24508__$1;(statearr_24546_24617[(2)] = null);
(statearr_24546_24617[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (43)))
{var state_24508__$1 = state_24508;var statearr_24547_24618 = state_24508__$1;(statearr_24547_24618[(2)] = null);
(statearr_24547_24618[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (29)))
{var inst_24492 = (state_24508[(2)]);var state_24508__$1 = state_24508;var statearr_24548_24619 = state_24508__$1;(statearr_24548_24619[(2)] = inst_24492);
(statearr_24548_24619[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (44)))
{var inst_24501 = (state_24508[(2)]);var state_24508__$1 = (function (){var statearr_24549 = state_24508;(statearr_24549[(28)] = inst_24501);
return statearr_24549;
})();var statearr_24550_24620 = state_24508__$1;(statearr_24550_24620[(2)] = null);
(statearr_24550_24620[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (6)))
{var inst_24440 = (state_24508[(29)]);var inst_24439 = cljs.core.deref.call(null,cs);var inst_24440__$1 = cljs.core.keys.call(null,inst_24439);var inst_24441 = cljs.core.count.call(null,inst_24440__$1);var inst_24442 = cljs.core.reset_BANG_.call(null,dctr,inst_24441);var inst_24447 = cljs.core.seq.call(null,inst_24440__$1);var inst_24448 = inst_24447;var inst_24449 = null;var inst_24450 = (0);var inst_24451 = (0);var state_24508__$1 = (function (){var statearr_24551 = state_24508;(statearr_24551[(10)] = inst_24449);
(statearr_24551[(29)] = inst_24440__$1);
(statearr_24551[(30)] = inst_24442);
(statearr_24551[(20)] = inst_24448);
(statearr_24551[(21)] = inst_24450);
(statearr_24551[(12)] = inst_24451);
return statearr_24551;
})();var statearr_24552_24621 = state_24508__$1;(statearr_24552_24621[(2)] = null);
(statearr_24552_24621[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (28)))
{var inst_24448 = (state_24508[(20)]);var inst_24467 = (state_24508[(25)]);var inst_24467__$1 = cljs.core.seq.call(null,inst_24448);var state_24508__$1 = (function (){var statearr_24553 = state_24508;(statearr_24553[(25)] = inst_24467__$1);
return statearr_24553;
})();if(inst_24467__$1)
{var statearr_24554_24622 = state_24508__$1;(statearr_24554_24622[(1)] = (33));
} else
{var statearr_24555_24623 = state_24508__$1;(statearr_24555_24623[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (25)))
{var inst_24450 = (state_24508[(21)]);var inst_24451 = (state_24508[(12)]);var inst_24453 = (inst_24451 < inst_24450);var inst_24454 = inst_24453;var state_24508__$1 = state_24508;if(cljs.core.truth_(inst_24454))
{var statearr_24556_24624 = state_24508__$1;(statearr_24556_24624[(1)] = (27));
} else
{var statearr_24557_24625 = state_24508__$1;(statearr_24557_24625[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (34)))
{var state_24508__$1 = state_24508;var statearr_24558_24626 = state_24508__$1;(statearr_24558_24626[(2)] = null);
(statearr_24558_24626[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (17)))
{var state_24508__$1 = state_24508;var statearr_24559_24627 = state_24508__$1;(statearr_24559_24627[(2)] = null);
(statearr_24559_24627[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (3)))
{var inst_24506 = (state_24508[(2)]);var state_24508__$1 = state_24508;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24508__$1,inst_24506);
} else
{if((state_val_24509 === (12)))
{var inst_24435 = (state_24508[(2)]);var state_24508__$1 = state_24508;var statearr_24560_24628 = state_24508__$1;(statearr_24560_24628[(2)] = inst_24435);
(statearr_24560_24628[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (2)))
{var state_24508__$1 = state_24508;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24508__$1,(4),ch);
} else
{if((state_val_24509 === (23)))
{var state_24508__$1 = state_24508;var statearr_24561_24629 = state_24508__$1;(statearr_24561_24629[(2)] = null);
(statearr_24561_24629[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (35)))
{var inst_24490 = (state_24508[(2)]);var state_24508__$1 = state_24508;var statearr_24562_24630 = state_24508__$1;(statearr_24562_24630[(2)] = inst_24490);
(statearr_24562_24630[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (19)))
{var inst_24409 = (state_24508[(7)]);var inst_24413 = cljs.core.chunk_first.call(null,inst_24409);var inst_24414 = cljs.core.chunk_rest.call(null,inst_24409);var inst_24415 = cljs.core.count.call(null,inst_24413);var inst_24389 = inst_24414;var inst_24390 = inst_24413;var inst_24391 = inst_24415;var inst_24392 = (0);var state_24508__$1 = (function (){var statearr_24563 = state_24508;(statearr_24563[(13)] = inst_24392);
(statearr_24563[(14)] = inst_24389);
(statearr_24563[(15)] = inst_24391);
(statearr_24563[(17)] = inst_24390);
return statearr_24563;
})();var statearr_24564_24631 = state_24508__$1;(statearr_24564_24631[(2)] = null);
(statearr_24564_24631[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (11)))
{var inst_24409 = (state_24508[(7)]);var inst_24389 = (state_24508[(14)]);var inst_24409__$1 = cljs.core.seq.call(null,inst_24389);var state_24508__$1 = (function (){var statearr_24565 = state_24508;(statearr_24565[(7)] = inst_24409__$1);
return statearr_24565;
})();if(inst_24409__$1)
{var statearr_24566_24632 = state_24508__$1;(statearr_24566_24632[(1)] = (16));
} else
{var statearr_24567_24633 = state_24508__$1;(statearr_24567_24633[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (9)))
{var inst_24437 = (state_24508[(2)]);var state_24508__$1 = state_24508;var statearr_24568_24634 = state_24508__$1;(statearr_24568_24634[(2)] = inst_24437);
(statearr_24568_24634[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (5)))
{var inst_24387 = cljs.core.deref.call(null,cs);var inst_24388 = cljs.core.seq.call(null,inst_24387);var inst_24389 = inst_24388;var inst_24390 = null;var inst_24391 = (0);var inst_24392 = (0);var state_24508__$1 = (function (){var statearr_24569 = state_24508;(statearr_24569[(13)] = inst_24392);
(statearr_24569[(14)] = inst_24389);
(statearr_24569[(15)] = inst_24391);
(statearr_24569[(17)] = inst_24390);
return statearr_24569;
})();var statearr_24570_24635 = state_24508__$1;(statearr_24570_24635[(2)] = null);
(statearr_24570_24635[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (14)))
{var state_24508__$1 = state_24508;var statearr_24571_24636 = state_24508__$1;(statearr_24571_24636[(2)] = null);
(statearr_24571_24636[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (45)))
{var inst_24498 = (state_24508[(2)]);var state_24508__$1 = state_24508;var statearr_24572_24637 = state_24508__$1;(statearr_24572_24637[(2)] = inst_24498);
(statearr_24572_24637[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (26)))
{var inst_24440 = (state_24508[(29)]);var inst_24494 = (state_24508[(2)]);var inst_24495 = cljs.core.seq.call(null,inst_24440);var state_24508__$1 = (function (){var statearr_24573 = state_24508;(statearr_24573[(31)] = inst_24494);
return statearr_24573;
})();if(inst_24495)
{var statearr_24574_24638 = state_24508__$1;(statearr_24574_24638[(1)] = (42));
} else
{var statearr_24575_24639 = state_24508__$1;(statearr_24575_24639[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (16)))
{var inst_24409 = (state_24508[(7)]);var inst_24411 = cljs.core.chunked_seq_QMARK_.call(null,inst_24409);var state_24508__$1 = state_24508;if(inst_24411)
{var statearr_24576_24640 = state_24508__$1;(statearr_24576_24640[(1)] = (19));
} else
{var statearr_24577_24641 = state_24508__$1;(statearr_24577_24641[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (38)))
{var inst_24487 = (state_24508[(2)]);var state_24508__$1 = state_24508;var statearr_24578_24642 = state_24508__$1;(statearr_24578_24642[(2)] = inst_24487);
(statearr_24578_24642[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (30)))
{var state_24508__$1 = state_24508;var statearr_24579_24643 = state_24508__$1;(statearr_24579_24643[(2)] = null);
(statearr_24579_24643[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (10)))
{var inst_24392 = (state_24508[(13)]);var inst_24390 = (state_24508[(17)]);var inst_24398 = cljs.core._nth.call(null,inst_24390,inst_24392);var inst_24399 = cljs.core.nth.call(null,inst_24398,(0),null);var inst_24400 = cljs.core.nth.call(null,inst_24398,(1),null);var state_24508__$1 = (function (){var statearr_24580 = state_24508;(statearr_24580[(26)] = inst_24399);
return statearr_24580;
})();if(cljs.core.truth_(inst_24400))
{var statearr_24581_24644 = state_24508__$1;(statearr_24581_24644[(1)] = (13));
} else
{var statearr_24582_24645 = state_24508__$1;(statearr_24582_24645[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (18)))
{var inst_24433 = (state_24508[(2)]);var state_24508__$1 = state_24508;var statearr_24583_24646 = state_24508__$1;(statearr_24583_24646[(2)] = inst_24433);
(statearr_24583_24646[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (42)))
{var state_24508__$1 = state_24508;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24508__$1,(45),dchan);
} else
{if((state_val_24509 === (37)))
{var inst_24380 = (state_24508[(9)]);var inst_24476 = (state_24508[(23)]);var inst_24467 = (state_24508[(25)]);var inst_24476__$1 = cljs.core.first.call(null,inst_24467);var inst_24477 = cljs.core.async.put_BANG_.call(null,inst_24476__$1,inst_24380,done);var state_24508__$1 = (function (){var statearr_24584 = state_24508;(statearr_24584[(23)] = inst_24476__$1);
return statearr_24584;
})();if(cljs.core.truth_(inst_24477))
{var statearr_24585_24647 = state_24508__$1;(statearr_24585_24647[(1)] = (39));
} else
{var statearr_24586_24648 = state_24508__$1;(statearr_24586_24648[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24509 === (8)))
{var inst_24392 = (state_24508[(13)]);var inst_24391 = (state_24508[(15)]);var inst_24394 = (inst_24392 < inst_24391);var inst_24395 = inst_24394;var state_24508__$1 = state_24508;if(cljs.core.truth_(inst_24395))
{var statearr_24587_24649 = state_24508__$1;(statearr_24587_24649[(1)] = (10));
} else
{var statearr_24588_24650 = state_24508__$1;(statearr_24588_24650[(1)] = (11));
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
});})(c__9125__auto___24596,cs,m,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___24596,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24592[(0)] = state_machine__9111__auto__);
(statearr_24592[(1)] = (1));
return statearr_24592;
});
var state_machine__9111__auto____1 = (function (state_24508){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24508);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24593){if((e24593 instanceof Object))
{var ex__9114__auto__ = e24593;var statearr_24594_24651 = state_24508;(statearr_24594_24651[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24508);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24593;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24652 = state_24508;
state_24508 = G__24652;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24508){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24596,cs,m,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_24595 = f__9126__auto__.call(null);(statearr_24595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24596);
return statearr_24595;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24596,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj24654 = {};return obj24654;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24655){var map__24660 = p__24655;var map__24660__$1 = ((cljs.core.seq_QMARK_.call(null,map__24660))?cljs.core.apply.call(null,cljs.core.hash_map,map__24660):map__24660);var opts = map__24660__$1;var statearr_24661_24664 = state;(statearr_24661_24664[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24660,map__24660__$1,opts){
return (function (val){var statearr_24662_24665 = state;(statearr_24662_24665[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24660,map__24660__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_24663_24666 = state;(statearr_24663_24666[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24655 = null;if (arguments.length > 3) {
  p__24655 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24655);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24667){
var state = cljs.core.first(arglist__24667);
arglist__24667 = cljs.core.next(arglist__24667);
var cont_block = cljs.core.first(arglist__24667);
arglist__24667 = cljs.core.next(arglist__24667);
var ports = cljs.core.first(arglist__24667);
var p__24655 = cljs.core.rest(arglist__24667);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24655);
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
;var m = (function (){if(typeof cljs.core.async.t24787 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24787 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24788){
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
this.meta24788 = meta24788;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24787.cljs$lang$type = true;
cljs.core.async.t24787.cljs$lang$ctorStr = "cljs.core.async/t24787";
cljs.core.async.t24787.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24787");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24787.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24787.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24787.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24787.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24787.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24787.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24787.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24787.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24787.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24789){var self__ = this;
var _24789__$1 = this;return self__.meta24788;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24789,meta24788__$1){var self__ = this;
var _24789__$1 = this;return (new cljs.core.async.t24787(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24788__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24787 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24787(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24788){return (new cljs.core.async.t24787(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24788));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24787(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__9125__auto___24906 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24906,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24906,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24859){var state_val_24860 = (state_24859[(1)]);if((state_val_24860 === (7)))
{var inst_24803 = (state_24859[(7)]);var inst_24808 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24803);var state_24859__$1 = state_24859;var statearr_24861_24907 = state_24859__$1;(statearr_24861_24907[(2)] = inst_24808);
(statearr_24861_24907[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24860 === (20)))
{var inst_24818 = (state_24859[(8)]);var state_24859__$1 = state_24859;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24859__$1,(23),out,inst_24818);
} else
{if((state_val_24860 === (1)))
{var inst_24793 = (state_24859[(9)]);var inst_24793__$1 = calc_state.call(null);var inst_24794 = cljs.core.seq_QMARK_.call(null,inst_24793__$1);var state_24859__$1 = (function (){var statearr_24862 = state_24859;(statearr_24862[(9)] = inst_24793__$1);
return statearr_24862;
})();if(inst_24794)
{var statearr_24863_24908 = state_24859__$1;(statearr_24863_24908[(1)] = (2));
} else
{var statearr_24864_24909 = state_24859__$1;(statearr_24864_24909[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24860 === (24)))
{var inst_24811 = (state_24859[(10)]);var inst_24803 = inst_24811;var state_24859__$1 = (function (){var statearr_24865 = state_24859;(statearr_24865[(7)] = inst_24803);
return statearr_24865;
})();var statearr_24866_24910 = state_24859__$1;(statearr_24866_24910[(2)] = null);
(statearr_24866_24910[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24860 === (4)))
{var inst_24793 = (state_24859[(9)]);var inst_24799 = (state_24859[(2)]);var inst_24800 = cljs.core.get.call(null,inst_24799,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24801 = cljs.core.get.call(null,inst_24799,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24802 = cljs.core.get.call(null,inst_24799,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_24803 = inst_24793;var state_24859__$1 = (function (){var statearr_24867 = state_24859;(statearr_24867[(11)] = inst_24802);
(statearr_24867[(12)] = inst_24800);
(statearr_24867[(7)] = inst_24803);
(statearr_24867[(13)] = inst_24801);
return statearr_24867;
})();var statearr_24868_24911 = state_24859__$1;(statearr_24868_24911[(2)] = null);
(statearr_24868_24911[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24860 === (15)))
{var state_24859__$1 = state_24859;var statearr_24869_24912 = state_24859__$1;(statearr_24869_24912[(2)] = null);
(statearr_24869_24912[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24860 === (21)))
{var inst_24811 = (state_24859[(10)]);var inst_24803 = inst_24811;var state_24859__$1 = (function (){var statearr_24870 = state_24859;(statearr_24870[(7)] = inst_24803);
return statearr_24870;
})();var statearr_24871_24913 = state_24859__$1;(statearr_24871_24913[(2)] = null);
(statearr_24871_24913[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24860 === (13)))
{var inst_24855 = (state_24859[(2)]);var state_24859__$1 = state_24859;var statearr_24872_24914 = state_24859__$1;(statearr_24872_24914[(2)] = inst_24855);
(statearr_24872_24914[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24860 === (22)))
{var inst_24853 = (state_24859[(2)]);var state_24859__$1 = state_24859;var statearr_24873_24915 = state_24859__$1;(statearr_24873_24915[(2)] = inst_24853);
(statearr_24873_24915[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24860 === (6)))
{var inst_24857 = (state_24859[(2)]);var state_24859__$1 = state_24859;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24859__$1,inst_24857);
} else
{if((state_val_24860 === (25)))
{var state_24859__$1 = state_24859;var statearr_24874_24916 = state_24859__$1;(statearr_24874_24916[(2)] = null);
(statearr_24874_24916[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24860 === (17)))
{var inst_24833 = (state_24859[(14)]);var state_24859__$1 = state_24859;var statearr_24875_24917 = state_24859__$1;(statearr_24875_24917[(2)] = inst_24833);
(statearr_24875_24917[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24860 === (3)))
{var inst_24793 = (state_24859[(9)]);var state_24859__$1 = state_24859;var statearr_24876_24918 = state_24859__$1;(statearr_24876_24918[(2)] = inst_24793);
(statearr_24876_24918[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24860 === (12)))
{var inst_24814 = (state_24859[(15)]);var inst_24819 = (state_24859[(16)]);var inst_24833 = (state_24859[(14)]);var inst_24833__$1 = inst_24814.call(null,inst_24819);var state_24859__$1 = (function (){var statearr_24877 = state_24859;(statearr_24877[(14)] = inst_24833__$1);
return statearr_24877;
})();if(cljs.core.truth_(inst_24833__$1))
{var statearr_24878_24919 = state_24859__$1;(statearr_24878_24919[(1)] = (17));
} else
{var statearr_24879_24920 = state_24859__$1;(statearr_24879_24920[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24860 === (2)))
{var inst_24793 = (state_24859[(9)]);var inst_24796 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24793);var state_24859__$1 = state_24859;var statearr_24880_24921 = state_24859__$1;(statearr_24880_24921[(2)] = inst_24796);
(statearr_24880_24921[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24860 === (23)))
{var inst_24844 = (state_24859[(2)]);var state_24859__$1 = state_24859;if(cljs.core.truth_(inst_24844))
{var statearr_24881_24922 = state_24859__$1;(statearr_24881_24922[(1)] = (24));
} else
{var statearr_24882_24923 = state_24859__$1;(statearr_24882_24923[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24860 === (19)))
{var inst_24841 = (state_24859[(2)]);var state_24859__$1 = state_24859;if(cljs.core.truth_(inst_24841))
{var statearr_24883_24924 = state_24859__$1;(statearr_24883_24924[(1)] = (20));
} else
{var statearr_24884_24925 = state_24859__$1;(statearr_24884_24925[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24860 === (11)))
{var inst_24818 = (state_24859[(8)]);var inst_24824 = (inst_24818 == null);var state_24859__$1 = state_24859;if(cljs.core.truth_(inst_24824))
{var statearr_24885_24926 = state_24859__$1;(statearr_24885_24926[(1)] = (14));
} else
{var statearr_24886_24927 = state_24859__$1;(statearr_24886_24927[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24860 === (9)))
{var inst_24811 = (state_24859[(10)]);var inst_24811__$1 = (state_24859[(2)]);var inst_24812 = cljs.core.get.call(null,inst_24811__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24813 = cljs.core.get.call(null,inst_24811__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24814 = cljs.core.get.call(null,inst_24811__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_24859__$1 = (function (){var statearr_24887 = state_24859;(statearr_24887[(15)] = inst_24814);
(statearr_24887[(17)] = inst_24813);
(statearr_24887[(10)] = inst_24811__$1);
return statearr_24887;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_24859__$1,(10),inst_24812);
} else
{if((state_val_24860 === (5)))
{var inst_24803 = (state_24859[(7)]);var inst_24806 = cljs.core.seq_QMARK_.call(null,inst_24803);var state_24859__$1 = state_24859;if(inst_24806)
{var statearr_24888_24928 = state_24859__$1;(statearr_24888_24928[(1)] = (7));
} else
{var statearr_24889_24929 = state_24859__$1;(statearr_24889_24929[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24860 === (14)))
{var inst_24819 = (state_24859[(16)]);var inst_24826 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24819);var state_24859__$1 = state_24859;var statearr_24890_24930 = state_24859__$1;(statearr_24890_24930[(2)] = inst_24826);
(statearr_24890_24930[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24860 === (26)))
{var inst_24849 = (state_24859[(2)]);var state_24859__$1 = state_24859;var statearr_24891_24931 = state_24859__$1;(statearr_24891_24931[(2)] = inst_24849);
(statearr_24891_24931[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24860 === (16)))
{var inst_24829 = (state_24859[(2)]);var inst_24830 = calc_state.call(null);var inst_24803 = inst_24830;var state_24859__$1 = (function (){var statearr_24892 = state_24859;(statearr_24892[(18)] = inst_24829);
(statearr_24892[(7)] = inst_24803);
return statearr_24892;
})();var statearr_24893_24932 = state_24859__$1;(statearr_24893_24932[(2)] = null);
(statearr_24893_24932[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24860 === (10)))
{var inst_24819 = (state_24859[(16)]);var inst_24818 = (state_24859[(8)]);var inst_24817 = (state_24859[(2)]);var inst_24818__$1 = cljs.core.nth.call(null,inst_24817,(0),null);var inst_24819__$1 = cljs.core.nth.call(null,inst_24817,(1),null);var inst_24820 = (inst_24818__$1 == null);var inst_24821 = cljs.core._EQ_.call(null,inst_24819__$1,change);var inst_24822 = (inst_24820) || (inst_24821);var state_24859__$1 = (function (){var statearr_24894 = state_24859;(statearr_24894[(16)] = inst_24819__$1);
(statearr_24894[(8)] = inst_24818__$1);
return statearr_24894;
})();if(cljs.core.truth_(inst_24822))
{var statearr_24895_24933 = state_24859__$1;(statearr_24895_24933[(1)] = (11));
} else
{var statearr_24896_24934 = state_24859__$1;(statearr_24896_24934[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24860 === (18)))
{var inst_24814 = (state_24859[(15)]);var inst_24819 = (state_24859[(16)]);var inst_24813 = (state_24859[(17)]);var inst_24836 = cljs.core.empty_QMARK_.call(null,inst_24814);var inst_24837 = inst_24813.call(null,inst_24819);var inst_24838 = cljs.core.not.call(null,inst_24837);var inst_24839 = (inst_24836) && (inst_24838);var state_24859__$1 = state_24859;var statearr_24897_24935 = state_24859__$1;(statearr_24897_24935[(2)] = inst_24839);
(statearr_24897_24935[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24860 === (8)))
{var inst_24803 = (state_24859[(7)]);var state_24859__$1 = state_24859;var statearr_24898_24936 = state_24859__$1;(statearr_24898_24936[(2)] = inst_24803);
(statearr_24898_24936[(1)] = (9));
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
});})(c__9125__auto___24906,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__9110__auto__,c__9125__auto___24906,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24902[(0)] = state_machine__9111__auto__);
(statearr_24902[(1)] = (1));
return statearr_24902;
});
var state_machine__9111__auto____1 = (function (state_24859){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24859);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24903){if((e24903 instanceof Object))
{var ex__9114__auto__ = e24903;var statearr_24904_24937 = state_24859;(statearr_24904_24937[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24859);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24903;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24938 = state_24859;
state_24859 = G__24938;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24859){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24906,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__9127__auto__ = (function (){var statearr_24905 = f__9126__auto__.call(null);(statearr_24905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24906);
return statearr_24905;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24906,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj24940 = {};return obj24940;
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
return (function (p1__24941_SHARP_){if(cljs.core.truth_(p1__24941_SHARP_.call(null,topic)))
{return p1__24941_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__24941_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25064 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25064 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25065){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25065 = meta25065;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25064.cljs$lang$type = true;
cljs.core.async.t25064.cljs$lang$ctorStr = "cljs.core.async/t25064";
cljs.core.async.t25064.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25064");
});})(mults,ensure_mult))
;
cljs.core.async.t25064.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25064.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25064.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25064.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25064.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25064.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25064.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25064.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25066){var self__ = this;
var _25066__$1 = this;return self__.meta25065;
});})(mults,ensure_mult))
;
cljs.core.async.t25064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25066,meta25065__$1){var self__ = this;
var _25066__$1 = this;return (new cljs.core.async.t25064(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25065__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25064 = ((function (mults,ensure_mult){
return (function __GT_t25064(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25065){return (new cljs.core.async.t25064(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25065));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25064(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__9125__auto___25186 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25186,mults,ensure_mult,p){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25186,mults,ensure_mult,p){
return (function (state_25138){var state_val_25139 = (state_25138[(1)]);if((state_val_25139 === (7)))
{var inst_25134 = (state_25138[(2)]);var state_25138__$1 = state_25138;var statearr_25140_25187 = state_25138__$1;(statearr_25140_25187[(2)] = inst_25134);
(statearr_25140_25187[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25139 === (20)))
{var state_25138__$1 = state_25138;var statearr_25141_25188 = state_25138__$1;(statearr_25141_25188[(2)] = null);
(statearr_25141_25188[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25139 === (1)))
{var state_25138__$1 = state_25138;var statearr_25142_25189 = state_25138__$1;(statearr_25142_25189[(2)] = null);
(statearr_25142_25189[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25139 === (24)))
{var inst_25117 = (state_25138[(7)]);var inst_25126 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25117);var state_25138__$1 = state_25138;var statearr_25143_25190 = state_25138__$1;(statearr_25143_25190[(2)] = inst_25126);
(statearr_25143_25190[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25139 === (4)))
{var inst_25069 = (state_25138[(8)]);var inst_25069__$1 = (state_25138[(2)]);var inst_25070 = (inst_25069__$1 == null);var state_25138__$1 = (function (){var statearr_25144 = state_25138;(statearr_25144[(8)] = inst_25069__$1);
return statearr_25144;
})();if(cljs.core.truth_(inst_25070))
{var statearr_25145_25191 = state_25138__$1;(statearr_25145_25191[(1)] = (5));
} else
{var statearr_25146_25192 = state_25138__$1;(statearr_25146_25192[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25139 === (15)))
{var inst_25111 = (state_25138[(2)]);var state_25138__$1 = state_25138;var statearr_25147_25193 = state_25138__$1;(statearr_25147_25193[(2)] = inst_25111);
(statearr_25147_25193[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25139 === (21)))
{var inst_25131 = (state_25138[(2)]);var state_25138__$1 = (function (){var statearr_25148 = state_25138;(statearr_25148[(9)] = inst_25131);
return statearr_25148;
})();var statearr_25149_25194 = state_25138__$1;(statearr_25149_25194[(2)] = null);
(statearr_25149_25194[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25139 === (13)))
{var inst_25093 = (state_25138[(10)]);var inst_25095 = cljs.core.chunked_seq_QMARK_.call(null,inst_25093);var state_25138__$1 = state_25138;if(inst_25095)
{var statearr_25150_25195 = state_25138__$1;(statearr_25150_25195[(1)] = (16));
} else
{var statearr_25151_25196 = state_25138__$1;(statearr_25151_25196[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25139 === (22)))
{var inst_25123 = (state_25138[(2)]);var state_25138__$1 = state_25138;if(cljs.core.truth_(inst_25123))
{var statearr_25152_25197 = state_25138__$1;(statearr_25152_25197[(1)] = (23));
} else
{var statearr_25153_25198 = state_25138__$1;(statearr_25153_25198[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25139 === (6)))
{var inst_25069 = (state_25138[(8)]);var inst_25117 = (state_25138[(7)]);var inst_25119 = (state_25138[(11)]);var inst_25117__$1 = topic_fn.call(null,inst_25069);var inst_25118 = cljs.core.deref.call(null,mults);var inst_25119__$1 = cljs.core.get.call(null,inst_25118,inst_25117__$1);var state_25138__$1 = (function (){var statearr_25154 = state_25138;(statearr_25154[(7)] = inst_25117__$1);
(statearr_25154[(11)] = inst_25119__$1);
return statearr_25154;
})();if(cljs.core.truth_(inst_25119__$1))
{var statearr_25155_25199 = state_25138__$1;(statearr_25155_25199[(1)] = (19));
} else
{var statearr_25156_25200 = state_25138__$1;(statearr_25156_25200[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25139 === (25)))
{var inst_25128 = (state_25138[(2)]);var state_25138__$1 = state_25138;var statearr_25157_25201 = state_25138__$1;(statearr_25157_25201[(2)] = inst_25128);
(statearr_25157_25201[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25139 === (17)))
{var inst_25093 = (state_25138[(10)]);var inst_25102 = cljs.core.first.call(null,inst_25093);var inst_25103 = cljs.core.async.muxch_STAR_.call(null,inst_25102);var inst_25104 = cljs.core.async.close_BANG_.call(null,inst_25103);var inst_25105 = cljs.core.next.call(null,inst_25093);var inst_25079 = inst_25105;var inst_25080 = null;var inst_25081 = (0);var inst_25082 = (0);var state_25138__$1 = (function (){var statearr_25158 = state_25138;(statearr_25158[(12)] = inst_25104);
(statearr_25158[(13)] = inst_25081);
(statearr_25158[(14)] = inst_25079);
(statearr_25158[(15)] = inst_25082);
(statearr_25158[(16)] = inst_25080);
return statearr_25158;
})();var statearr_25159_25202 = state_25138__$1;(statearr_25159_25202[(2)] = null);
(statearr_25159_25202[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25139 === (3)))
{var inst_25136 = (state_25138[(2)]);var state_25138__$1 = state_25138;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25138__$1,inst_25136);
} else
{if((state_val_25139 === (12)))
{var inst_25113 = (state_25138[(2)]);var state_25138__$1 = state_25138;var statearr_25160_25203 = state_25138__$1;(statearr_25160_25203[(2)] = inst_25113);
(statearr_25160_25203[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25139 === (2)))
{var state_25138__$1 = state_25138;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25138__$1,(4),ch);
} else
{if((state_val_25139 === (23)))
{var state_25138__$1 = state_25138;var statearr_25161_25204 = state_25138__$1;(statearr_25161_25204[(2)] = null);
(statearr_25161_25204[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25139 === (19)))
{var inst_25069 = (state_25138[(8)]);var inst_25119 = (state_25138[(11)]);var inst_25121 = cljs.core.async.muxch_STAR_.call(null,inst_25119);var state_25138__$1 = state_25138;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25138__$1,(22),inst_25121,inst_25069);
} else
{if((state_val_25139 === (11)))
{var inst_25079 = (state_25138[(14)]);var inst_25093 = (state_25138[(10)]);var inst_25093__$1 = cljs.core.seq.call(null,inst_25079);var state_25138__$1 = (function (){var statearr_25162 = state_25138;(statearr_25162[(10)] = inst_25093__$1);
return statearr_25162;
})();if(inst_25093__$1)
{var statearr_25163_25205 = state_25138__$1;(statearr_25163_25205[(1)] = (13));
} else
{var statearr_25164_25206 = state_25138__$1;(statearr_25164_25206[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25139 === (9)))
{var inst_25115 = (state_25138[(2)]);var state_25138__$1 = state_25138;var statearr_25165_25207 = state_25138__$1;(statearr_25165_25207[(2)] = inst_25115);
(statearr_25165_25207[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25139 === (5)))
{var inst_25076 = cljs.core.deref.call(null,mults);var inst_25077 = cljs.core.vals.call(null,inst_25076);var inst_25078 = cljs.core.seq.call(null,inst_25077);var inst_25079 = inst_25078;var inst_25080 = null;var inst_25081 = (0);var inst_25082 = (0);var state_25138__$1 = (function (){var statearr_25166 = state_25138;(statearr_25166[(13)] = inst_25081);
(statearr_25166[(14)] = inst_25079);
(statearr_25166[(15)] = inst_25082);
(statearr_25166[(16)] = inst_25080);
return statearr_25166;
})();var statearr_25167_25208 = state_25138__$1;(statearr_25167_25208[(2)] = null);
(statearr_25167_25208[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25139 === (14)))
{var state_25138__$1 = state_25138;var statearr_25171_25209 = state_25138__$1;(statearr_25171_25209[(2)] = null);
(statearr_25171_25209[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25139 === (16)))
{var inst_25093 = (state_25138[(10)]);var inst_25097 = cljs.core.chunk_first.call(null,inst_25093);var inst_25098 = cljs.core.chunk_rest.call(null,inst_25093);var inst_25099 = cljs.core.count.call(null,inst_25097);var inst_25079 = inst_25098;var inst_25080 = inst_25097;var inst_25081 = inst_25099;var inst_25082 = (0);var state_25138__$1 = (function (){var statearr_25172 = state_25138;(statearr_25172[(13)] = inst_25081);
(statearr_25172[(14)] = inst_25079);
(statearr_25172[(15)] = inst_25082);
(statearr_25172[(16)] = inst_25080);
return statearr_25172;
})();var statearr_25173_25210 = state_25138__$1;(statearr_25173_25210[(2)] = null);
(statearr_25173_25210[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25139 === (10)))
{var inst_25081 = (state_25138[(13)]);var inst_25079 = (state_25138[(14)]);var inst_25082 = (state_25138[(15)]);var inst_25080 = (state_25138[(16)]);var inst_25087 = cljs.core._nth.call(null,inst_25080,inst_25082);var inst_25088 = cljs.core.async.muxch_STAR_.call(null,inst_25087);var inst_25089 = cljs.core.async.close_BANG_.call(null,inst_25088);var inst_25090 = (inst_25082 + (1));var tmp25168 = inst_25081;var tmp25169 = inst_25079;var tmp25170 = inst_25080;var inst_25079__$1 = tmp25169;var inst_25080__$1 = tmp25170;var inst_25081__$1 = tmp25168;var inst_25082__$1 = inst_25090;var state_25138__$1 = (function (){var statearr_25174 = state_25138;(statearr_25174[(13)] = inst_25081__$1);
(statearr_25174[(14)] = inst_25079__$1);
(statearr_25174[(15)] = inst_25082__$1);
(statearr_25174[(17)] = inst_25089);
(statearr_25174[(16)] = inst_25080__$1);
return statearr_25174;
})();var statearr_25175_25211 = state_25138__$1;(statearr_25175_25211[(2)] = null);
(statearr_25175_25211[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25139 === (18)))
{var inst_25108 = (state_25138[(2)]);var state_25138__$1 = state_25138;var statearr_25176_25212 = state_25138__$1;(statearr_25176_25212[(2)] = inst_25108);
(statearr_25176_25212[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25139 === (8)))
{var inst_25081 = (state_25138[(13)]);var inst_25082 = (state_25138[(15)]);var inst_25084 = (inst_25082 < inst_25081);var inst_25085 = inst_25084;var state_25138__$1 = state_25138;if(cljs.core.truth_(inst_25085))
{var statearr_25177_25213 = state_25138__$1;(statearr_25177_25213[(1)] = (10));
} else
{var statearr_25178_25214 = state_25138__$1;(statearr_25178_25214[(1)] = (11));
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
});})(c__9125__auto___25186,mults,ensure_mult,p))
;return ((function (switch__9110__auto__,c__9125__auto___25186,mults,ensure_mult,p){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25182[(0)] = state_machine__9111__auto__);
(statearr_25182[(1)] = (1));
return statearr_25182;
});
var state_machine__9111__auto____1 = (function (state_25138){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25138);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25183){if((e25183 instanceof Object))
{var ex__9114__auto__ = e25183;var statearr_25184_25215 = state_25138;(statearr_25184_25215[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25138);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25183;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25216 = state_25138;
state_25138 = G__25216;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25138){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25186,mults,ensure_mult,p))
})();var state__9127__auto__ = (function (){var statearr_25185 = f__9126__auto__.call(null);(statearr_25185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25186);
return statearr_25185;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25186,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__9125__auto___25353 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25353,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25353,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25323){var state_val_25324 = (state_25323[(1)]);if((state_val_25324 === (7)))
{var state_25323__$1 = state_25323;var statearr_25325_25354 = state_25323__$1;(statearr_25325_25354[(2)] = null);
(statearr_25325_25354[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25324 === (1)))
{var state_25323__$1 = state_25323;var statearr_25326_25355 = state_25323__$1;(statearr_25326_25355[(2)] = null);
(statearr_25326_25355[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25324 === (4)))
{var inst_25287 = (state_25323[(7)]);var inst_25289 = (inst_25287 < cnt);var state_25323__$1 = state_25323;if(cljs.core.truth_(inst_25289))
{var statearr_25327_25356 = state_25323__$1;(statearr_25327_25356[(1)] = (6));
} else
{var statearr_25328_25357 = state_25323__$1;(statearr_25328_25357[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25324 === (15)))
{var inst_25319 = (state_25323[(2)]);var state_25323__$1 = state_25323;var statearr_25329_25358 = state_25323__$1;(statearr_25329_25358[(2)] = inst_25319);
(statearr_25329_25358[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25324 === (13)))
{var inst_25312 = cljs.core.async.close_BANG_.call(null,out);var state_25323__$1 = state_25323;var statearr_25330_25359 = state_25323__$1;(statearr_25330_25359[(2)] = inst_25312);
(statearr_25330_25359[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25324 === (6)))
{var state_25323__$1 = state_25323;var statearr_25331_25360 = state_25323__$1;(statearr_25331_25360[(2)] = null);
(statearr_25331_25360[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25324 === (3)))
{var inst_25321 = (state_25323[(2)]);var state_25323__$1 = state_25323;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25323__$1,inst_25321);
} else
{if((state_val_25324 === (12)))
{var inst_25309 = (state_25323[(8)]);var inst_25309__$1 = (state_25323[(2)]);var inst_25310 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25309__$1);var state_25323__$1 = (function (){var statearr_25332 = state_25323;(statearr_25332[(8)] = inst_25309__$1);
return statearr_25332;
})();if(cljs.core.truth_(inst_25310))
{var statearr_25333_25361 = state_25323__$1;(statearr_25333_25361[(1)] = (13));
} else
{var statearr_25334_25362 = state_25323__$1;(statearr_25334_25362[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25324 === (2)))
{var inst_25286 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_25287 = (0);var state_25323__$1 = (function (){var statearr_25335 = state_25323;(statearr_25335[(9)] = inst_25286);
(statearr_25335[(7)] = inst_25287);
return statearr_25335;
})();var statearr_25336_25363 = state_25323__$1;(statearr_25336_25363[(2)] = null);
(statearr_25336_25363[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25324 === (11)))
{var inst_25287 = (state_25323[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25323,(10),Object,null,(9));var inst_25296 = chs__$1.call(null,inst_25287);var inst_25297 = done.call(null,inst_25287);var inst_25298 = cljs.core.async.take_BANG_.call(null,inst_25296,inst_25297);var state_25323__$1 = state_25323;var statearr_25337_25364 = state_25323__$1;(statearr_25337_25364[(2)] = inst_25298);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25323__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25324 === (9)))
{var inst_25287 = (state_25323[(7)]);var inst_25300 = (state_25323[(2)]);var inst_25301 = (inst_25287 + (1));var inst_25287__$1 = inst_25301;var state_25323__$1 = (function (){var statearr_25338 = state_25323;(statearr_25338[(10)] = inst_25300);
(statearr_25338[(7)] = inst_25287__$1);
return statearr_25338;
})();var statearr_25339_25365 = state_25323__$1;(statearr_25339_25365[(2)] = null);
(statearr_25339_25365[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25324 === (5)))
{var inst_25307 = (state_25323[(2)]);var state_25323__$1 = (function (){var statearr_25340 = state_25323;(statearr_25340[(11)] = inst_25307);
return statearr_25340;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25323__$1,(12),dchan);
} else
{if((state_val_25324 === (14)))
{var inst_25309 = (state_25323[(8)]);var inst_25314 = cljs.core.apply.call(null,f,inst_25309);var state_25323__$1 = state_25323;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25323__$1,(16),out,inst_25314);
} else
{if((state_val_25324 === (16)))
{var inst_25316 = (state_25323[(2)]);var state_25323__$1 = (function (){var statearr_25341 = state_25323;(statearr_25341[(12)] = inst_25316);
return statearr_25341;
})();var statearr_25342_25366 = state_25323__$1;(statearr_25342_25366[(2)] = null);
(statearr_25342_25366[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25324 === (10)))
{var inst_25291 = (state_25323[(2)]);var inst_25292 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_25323__$1 = (function (){var statearr_25343 = state_25323;(statearr_25343[(13)] = inst_25291);
return statearr_25343;
})();var statearr_25344_25367 = state_25323__$1;(statearr_25344_25367[(2)] = inst_25292);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25323__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25324 === (8)))
{var inst_25305 = (state_25323[(2)]);var state_25323__$1 = state_25323;var statearr_25345_25368 = state_25323__$1;(statearr_25345_25368[(2)] = inst_25305);
(statearr_25345_25368[(1)] = (5));
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
});})(c__9125__auto___25353,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___25353,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25349[(0)] = state_machine__9111__auto__);
(statearr_25349[(1)] = (1));
return statearr_25349;
});
var state_machine__9111__auto____1 = (function (state_25323){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25323);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25350){if((e25350 instanceof Object))
{var ex__9114__auto__ = e25350;var statearr_25351_25369 = state_25323;(statearr_25351_25369[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25323);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25350;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25370 = state_25323;
state_25323 = G__25370;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25323){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25353,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_25352 = f__9126__auto__.call(null);(statearr_25352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25353);
return statearr_25352;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25353,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25478 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25478,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25478,out){
return (function (state_25454){var state_val_25455 = (state_25454[(1)]);if((state_val_25455 === (7)))
{var inst_25433 = (state_25454[(7)]);var inst_25434 = (state_25454[(8)]);var inst_25433__$1 = (state_25454[(2)]);var inst_25434__$1 = cljs.core.nth.call(null,inst_25433__$1,(0),null);var inst_25435 = cljs.core.nth.call(null,inst_25433__$1,(1),null);var inst_25436 = (inst_25434__$1 == null);var state_25454__$1 = (function (){var statearr_25456 = state_25454;(statearr_25456[(7)] = inst_25433__$1);
(statearr_25456[(8)] = inst_25434__$1);
(statearr_25456[(9)] = inst_25435);
return statearr_25456;
})();if(cljs.core.truth_(inst_25436))
{var statearr_25457_25479 = state_25454__$1;(statearr_25457_25479[(1)] = (8));
} else
{var statearr_25458_25480 = state_25454__$1;(statearr_25458_25480[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25455 === (1)))
{var inst_25425 = cljs.core.vec.call(null,chs);var inst_25426 = inst_25425;var state_25454__$1 = (function (){var statearr_25459 = state_25454;(statearr_25459[(10)] = inst_25426);
return statearr_25459;
})();var statearr_25460_25481 = state_25454__$1;(statearr_25460_25481[(2)] = null);
(statearr_25460_25481[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25455 === (4)))
{var inst_25426 = (state_25454[(10)]);var state_25454__$1 = state_25454;return cljs.core.async.ioc_alts_BANG_.call(null,state_25454__$1,(7),inst_25426);
} else
{if((state_val_25455 === (6)))
{var inst_25450 = (state_25454[(2)]);var state_25454__$1 = state_25454;var statearr_25461_25482 = state_25454__$1;(statearr_25461_25482[(2)] = inst_25450);
(statearr_25461_25482[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25455 === (3)))
{var inst_25452 = (state_25454[(2)]);var state_25454__$1 = state_25454;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25454__$1,inst_25452);
} else
{if((state_val_25455 === (2)))
{var inst_25426 = (state_25454[(10)]);var inst_25428 = cljs.core.count.call(null,inst_25426);var inst_25429 = (inst_25428 > (0));var state_25454__$1 = state_25454;if(cljs.core.truth_(inst_25429))
{var statearr_25463_25483 = state_25454__$1;(statearr_25463_25483[(1)] = (4));
} else
{var statearr_25464_25484 = state_25454__$1;(statearr_25464_25484[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25455 === (11)))
{var inst_25426 = (state_25454[(10)]);var inst_25443 = (state_25454[(2)]);var tmp25462 = inst_25426;var inst_25426__$1 = tmp25462;var state_25454__$1 = (function (){var statearr_25465 = state_25454;(statearr_25465[(11)] = inst_25443);
(statearr_25465[(10)] = inst_25426__$1);
return statearr_25465;
})();var statearr_25466_25485 = state_25454__$1;(statearr_25466_25485[(2)] = null);
(statearr_25466_25485[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25455 === (9)))
{var inst_25434 = (state_25454[(8)]);var state_25454__$1 = state_25454;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25454__$1,(11),out,inst_25434);
} else
{if((state_val_25455 === (5)))
{var inst_25448 = cljs.core.async.close_BANG_.call(null,out);var state_25454__$1 = state_25454;var statearr_25467_25486 = state_25454__$1;(statearr_25467_25486[(2)] = inst_25448);
(statearr_25467_25486[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25455 === (10)))
{var inst_25446 = (state_25454[(2)]);var state_25454__$1 = state_25454;var statearr_25468_25487 = state_25454__$1;(statearr_25468_25487[(2)] = inst_25446);
(statearr_25468_25487[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25455 === (8)))
{var inst_25433 = (state_25454[(7)]);var inst_25434 = (state_25454[(8)]);var inst_25435 = (state_25454[(9)]);var inst_25426 = (state_25454[(10)]);var inst_25438 = (function (){var c = inst_25435;var v = inst_25434;var vec__25431 = inst_25433;var cs = inst_25426;return ((function (c,v,vec__25431,cs,inst_25433,inst_25434,inst_25435,inst_25426,state_val_25455,c__9125__auto___25478,out){
return (function (p1__25371_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25371_SHARP_);
});
;})(c,v,vec__25431,cs,inst_25433,inst_25434,inst_25435,inst_25426,state_val_25455,c__9125__auto___25478,out))
})();var inst_25439 = cljs.core.filterv.call(null,inst_25438,inst_25426);var inst_25426__$1 = inst_25439;var state_25454__$1 = (function (){var statearr_25469 = state_25454;(statearr_25469[(10)] = inst_25426__$1);
return statearr_25469;
})();var statearr_25470_25488 = state_25454__$1;(statearr_25470_25488[(2)] = null);
(statearr_25470_25488[(1)] = (2));
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
});})(c__9125__auto___25478,out))
;return ((function (switch__9110__auto__,c__9125__auto___25478,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25474 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25474[(0)] = state_machine__9111__auto__);
(statearr_25474[(1)] = (1));
return statearr_25474;
});
var state_machine__9111__auto____1 = (function (state_25454){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25454);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25475){if((e25475 instanceof Object))
{var ex__9114__auto__ = e25475;var statearr_25476_25489 = state_25454;(statearr_25476_25489[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25454);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25475;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25490 = state_25454;
state_25454 = G__25490;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25454){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25478,out))
})();var state__9127__auto__ = (function (){var statearr_25477 = f__9126__auto__.call(null);(statearr_25477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25478);
return statearr_25477;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25478,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25583 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25583,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25583,out){
return (function (state_25560){var state_val_25561 = (state_25560[(1)]);if((state_val_25561 === (7)))
{var inst_25542 = (state_25560[(7)]);var inst_25542__$1 = (state_25560[(2)]);var inst_25543 = (inst_25542__$1 == null);var inst_25544 = cljs.core.not.call(null,inst_25543);var state_25560__$1 = (function (){var statearr_25562 = state_25560;(statearr_25562[(7)] = inst_25542__$1);
return statearr_25562;
})();if(inst_25544)
{var statearr_25563_25584 = state_25560__$1;(statearr_25563_25584[(1)] = (8));
} else
{var statearr_25564_25585 = state_25560__$1;(statearr_25564_25585[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25561 === (1)))
{var inst_25537 = (0);var state_25560__$1 = (function (){var statearr_25565 = state_25560;(statearr_25565[(8)] = inst_25537);
return statearr_25565;
})();var statearr_25566_25586 = state_25560__$1;(statearr_25566_25586[(2)] = null);
(statearr_25566_25586[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25561 === (4)))
{var state_25560__$1 = state_25560;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25560__$1,(7),ch);
} else
{if((state_val_25561 === (6)))
{var inst_25555 = (state_25560[(2)]);var state_25560__$1 = state_25560;var statearr_25567_25587 = state_25560__$1;(statearr_25567_25587[(2)] = inst_25555);
(statearr_25567_25587[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25561 === (3)))
{var inst_25557 = (state_25560[(2)]);var inst_25558 = cljs.core.async.close_BANG_.call(null,out);var state_25560__$1 = (function (){var statearr_25568 = state_25560;(statearr_25568[(9)] = inst_25557);
return statearr_25568;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25560__$1,inst_25558);
} else
{if((state_val_25561 === (2)))
{var inst_25537 = (state_25560[(8)]);var inst_25539 = (inst_25537 < n);var state_25560__$1 = state_25560;if(cljs.core.truth_(inst_25539))
{var statearr_25569_25588 = state_25560__$1;(statearr_25569_25588[(1)] = (4));
} else
{var statearr_25570_25589 = state_25560__$1;(statearr_25570_25589[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25561 === (11)))
{var inst_25537 = (state_25560[(8)]);var inst_25547 = (state_25560[(2)]);var inst_25548 = (inst_25537 + (1));var inst_25537__$1 = inst_25548;var state_25560__$1 = (function (){var statearr_25571 = state_25560;(statearr_25571[(8)] = inst_25537__$1);
(statearr_25571[(10)] = inst_25547);
return statearr_25571;
})();var statearr_25572_25590 = state_25560__$1;(statearr_25572_25590[(2)] = null);
(statearr_25572_25590[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25561 === (9)))
{var state_25560__$1 = state_25560;var statearr_25573_25591 = state_25560__$1;(statearr_25573_25591[(2)] = null);
(statearr_25573_25591[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25561 === (5)))
{var state_25560__$1 = state_25560;var statearr_25574_25592 = state_25560__$1;(statearr_25574_25592[(2)] = null);
(statearr_25574_25592[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25561 === (10)))
{var inst_25552 = (state_25560[(2)]);var state_25560__$1 = state_25560;var statearr_25575_25593 = state_25560__$1;(statearr_25575_25593[(2)] = inst_25552);
(statearr_25575_25593[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25561 === (8)))
{var inst_25542 = (state_25560[(7)]);var state_25560__$1 = state_25560;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25560__$1,(11),out,inst_25542);
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
});})(c__9125__auto___25583,out))
;return ((function (switch__9110__auto__,c__9125__auto___25583,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25579 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25579[(0)] = state_machine__9111__auto__);
(statearr_25579[(1)] = (1));
return statearr_25579;
});
var state_machine__9111__auto____1 = (function (state_25560){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25560);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25580){if((e25580 instanceof Object))
{var ex__9114__auto__ = e25580;var statearr_25581_25594 = state_25560;(statearr_25581_25594[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25560);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25580;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25595 = state_25560;
state_25560 = G__25595;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25560){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25583,out))
})();var state__9127__auto__ = (function (){var statearr_25582 = f__9126__auto__.call(null);(statearr_25582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25583);
return statearr_25582;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25583,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25603 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25603 = (function (ch,f,map_LT_,meta25604){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25604 = meta25604;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25603.cljs$lang$type = true;
cljs.core.async.t25603.cljs$lang$ctorStr = "cljs.core.async/t25603";
cljs.core.async.t25603.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25603");
});
cljs.core.async.t25603.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25603.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t25603.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25603.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25606 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25606 = (function (fn1,_,meta25604,ch,f,map_LT_,meta25607){
this.fn1 = fn1;
this._ = _;
this.meta25604 = meta25604;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25607 = meta25607;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25606.cljs$lang$type = true;
cljs.core.async.t25606.cljs$lang$ctorStr = "cljs.core.async/t25606";
cljs.core.async.t25606.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25606");
});})(___$1))
;
cljs.core.async.t25606.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25606.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25606.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25596_SHARP_){return f1.call(null,(((p1__25596_SHARP_ == null))?null:self__.f.call(null,p1__25596_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25606.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25608){var self__ = this;
var _25608__$1 = this;return self__.meta25607;
});})(___$1))
;
cljs.core.async.t25606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25608,meta25607__$1){var self__ = this;
var _25608__$1 = this;return (new cljs.core.async.t25606(self__.fn1,self__._,self__.meta25604,self__.ch,self__.f,self__.map_LT_,meta25607__$1));
});})(___$1))
;
cljs.core.async.__GT_t25606 = ((function (___$1){
return (function __GT_t25606(fn1__$1,___$2,meta25604__$1,ch__$2,f__$2,map_LT___$2,meta25607){return (new cljs.core.async.t25606(fn1__$1,___$2,meta25604__$1,ch__$2,f__$2,map_LT___$2,meta25607));
});})(___$1))
;
}
return (new cljs.core.async.t25606(fn1,___$1,self__.meta25604,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t25603.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25603.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25603.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25605){var self__ = this;
var _25605__$1 = this;return self__.meta25604;
});
cljs.core.async.t25603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25605,meta25604__$1){var self__ = this;
var _25605__$1 = this;return (new cljs.core.async.t25603(self__.ch,self__.f,self__.map_LT_,meta25604__$1));
});
cljs.core.async.__GT_t25603 = (function __GT_t25603(ch__$1,f__$1,map_LT___$1,meta25604){return (new cljs.core.async.t25603(ch__$1,f__$1,map_LT___$1,meta25604));
});
}
return (new cljs.core.async.t25603(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25612 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25612 = (function (ch,f,map_GT_,meta25613){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25613 = meta25613;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25612.cljs$lang$type = true;
cljs.core.async.t25612.cljs$lang$ctorStr = "cljs.core.async/t25612";
cljs.core.async.t25612.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25612");
});
cljs.core.async.t25612.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25612.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t25612.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25612.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25612.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25612.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25614){var self__ = this;
var _25614__$1 = this;return self__.meta25613;
});
cljs.core.async.t25612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25614,meta25613__$1){var self__ = this;
var _25614__$1 = this;return (new cljs.core.async.t25612(self__.ch,self__.f,self__.map_GT_,meta25613__$1));
});
cljs.core.async.__GT_t25612 = (function __GT_t25612(ch__$1,f__$1,map_GT___$1,meta25613){return (new cljs.core.async.t25612(ch__$1,f__$1,map_GT___$1,meta25613));
});
}
return (new cljs.core.async.t25612(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25618 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25618 = (function (ch,p,filter_GT_,meta25619){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25619 = meta25619;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25618.cljs$lang$type = true;
cljs.core.async.t25618.cljs$lang$ctorStr = "cljs.core.async/t25618";
cljs.core.async.t25618.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25618");
});
cljs.core.async.t25618.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25618.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t25618.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25618.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25618.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25618.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25618.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25620){var self__ = this;
var _25620__$1 = this;return self__.meta25619;
});
cljs.core.async.t25618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25620,meta25619__$1){var self__ = this;
var _25620__$1 = this;return (new cljs.core.async.t25618(self__.ch,self__.p,self__.filter_GT_,meta25619__$1));
});
cljs.core.async.__GT_t25618 = (function __GT_t25618(ch__$1,p__$1,filter_GT___$1,meta25619){return (new cljs.core.async.t25618(ch__$1,p__$1,filter_GT___$1,meta25619));
});
}
return (new cljs.core.async.t25618(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25703 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25703,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25703,out){
return (function (state_25682){var state_val_25683 = (state_25682[(1)]);if((state_val_25683 === (7)))
{var inst_25678 = (state_25682[(2)]);var state_25682__$1 = state_25682;var statearr_25684_25704 = state_25682__$1;(statearr_25684_25704[(2)] = inst_25678);
(statearr_25684_25704[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25683 === (1)))
{var state_25682__$1 = state_25682;var statearr_25685_25705 = state_25682__$1;(statearr_25685_25705[(2)] = null);
(statearr_25685_25705[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25683 === (4)))
{var inst_25664 = (state_25682[(7)]);var inst_25664__$1 = (state_25682[(2)]);var inst_25665 = (inst_25664__$1 == null);var state_25682__$1 = (function (){var statearr_25686 = state_25682;(statearr_25686[(7)] = inst_25664__$1);
return statearr_25686;
})();if(cljs.core.truth_(inst_25665))
{var statearr_25687_25706 = state_25682__$1;(statearr_25687_25706[(1)] = (5));
} else
{var statearr_25688_25707 = state_25682__$1;(statearr_25688_25707[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25683 === (6)))
{var inst_25664 = (state_25682[(7)]);var inst_25669 = p.call(null,inst_25664);var state_25682__$1 = state_25682;if(cljs.core.truth_(inst_25669))
{var statearr_25689_25708 = state_25682__$1;(statearr_25689_25708[(1)] = (8));
} else
{var statearr_25690_25709 = state_25682__$1;(statearr_25690_25709[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25683 === (3)))
{var inst_25680 = (state_25682[(2)]);var state_25682__$1 = state_25682;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25682__$1,inst_25680);
} else
{if((state_val_25683 === (2)))
{var state_25682__$1 = state_25682;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25682__$1,(4),ch);
} else
{if((state_val_25683 === (11)))
{var inst_25672 = (state_25682[(2)]);var state_25682__$1 = state_25682;var statearr_25691_25710 = state_25682__$1;(statearr_25691_25710[(2)] = inst_25672);
(statearr_25691_25710[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25683 === (9)))
{var state_25682__$1 = state_25682;var statearr_25692_25711 = state_25682__$1;(statearr_25692_25711[(2)] = null);
(statearr_25692_25711[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25683 === (5)))
{var inst_25667 = cljs.core.async.close_BANG_.call(null,out);var state_25682__$1 = state_25682;var statearr_25693_25712 = state_25682__$1;(statearr_25693_25712[(2)] = inst_25667);
(statearr_25693_25712[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25683 === (10)))
{var inst_25675 = (state_25682[(2)]);var state_25682__$1 = (function (){var statearr_25694 = state_25682;(statearr_25694[(8)] = inst_25675);
return statearr_25694;
})();var statearr_25695_25713 = state_25682__$1;(statearr_25695_25713[(2)] = null);
(statearr_25695_25713[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25683 === (8)))
{var inst_25664 = (state_25682[(7)]);var state_25682__$1 = state_25682;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25682__$1,(11),out,inst_25664);
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
});})(c__9125__auto___25703,out))
;return ((function (switch__9110__auto__,c__9125__auto___25703,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25699 = [null,null,null,null,null,null,null,null,null];(statearr_25699[(0)] = state_machine__9111__auto__);
(statearr_25699[(1)] = (1));
return statearr_25699;
});
var state_machine__9111__auto____1 = (function (state_25682){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25682);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25700){if((e25700 instanceof Object))
{var ex__9114__auto__ = e25700;var statearr_25701_25714 = state_25682;(statearr_25701_25714[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25682);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25700;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25715 = state_25682;
state_25682 = G__25715;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25682){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25703,out))
})();var state__9127__auto__ = (function (){var statearr_25702 = f__9126__auto__.call(null);(statearr_25702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25703);
return statearr_25702;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25703,out))
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
return (function (state_25881){var state_val_25882 = (state_25881[(1)]);if((state_val_25882 === (7)))
{var inst_25877 = (state_25881[(2)]);var state_25881__$1 = state_25881;var statearr_25883_25924 = state_25881__$1;(statearr_25883_25924[(2)] = inst_25877);
(statearr_25883_25924[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25882 === (20)))
{var inst_25847 = (state_25881[(7)]);var inst_25858 = (state_25881[(2)]);var inst_25859 = cljs.core.next.call(null,inst_25847);var inst_25833 = inst_25859;var inst_25834 = null;var inst_25835 = (0);var inst_25836 = (0);var state_25881__$1 = (function (){var statearr_25884 = state_25881;(statearr_25884[(8)] = inst_25858);
(statearr_25884[(9)] = inst_25833);
(statearr_25884[(10)] = inst_25836);
(statearr_25884[(11)] = inst_25835);
(statearr_25884[(12)] = inst_25834);
return statearr_25884;
})();var statearr_25885_25925 = state_25881__$1;(statearr_25885_25925[(2)] = null);
(statearr_25885_25925[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25882 === (1)))
{var state_25881__$1 = state_25881;var statearr_25886_25926 = state_25881__$1;(statearr_25886_25926[(2)] = null);
(statearr_25886_25926[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25882 === (4)))
{var inst_25822 = (state_25881[(13)]);var inst_25822__$1 = (state_25881[(2)]);var inst_25823 = (inst_25822__$1 == null);var state_25881__$1 = (function (){var statearr_25887 = state_25881;(statearr_25887[(13)] = inst_25822__$1);
return statearr_25887;
})();if(cljs.core.truth_(inst_25823))
{var statearr_25888_25927 = state_25881__$1;(statearr_25888_25927[(1)] = (5));
} else
{var statearr_25889_25928 = state_25881__$1;(statearr_25889_25928[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25882 === (15)))
{var state_25881__$1 = state_25881;var statearr_25893_25929 = state_25881__$1;(statearr_25893_25929[(2)] = null);
(statearr_25893_25929[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25882 === (21)))
{var state_25881__$1 = state_25881;var statearr_25894_25930 = state_25881__$1;(statearr_25894_25930[(2)] = null);
(statearr_25894_25930[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25882 === (13)))
{var inst_25833 = (state_25881[(9)]);var inst_25836 = (state_25881[(10)]);var inst_25835 = (state_25881[(11)]);var inst_25834 = (state_25881[(12)]);var inst_25843 = (state_25881[(2)]);var inst_25844 = (inst_25836 + (1));var tmp25890 = inst_25833;var tmp25891 = inst_25835;var tmp25892 = inst_25834;var inst_25833__$1 = tmp25890;var inst_25834__$1 = tmp25892;var inst_25835__$1 = tmp25891;var inst_25836__$1 = inst_25844;var state_25881__$1 = (function (){var statearr_25895 = state_25881;(statearr_25895[(14)] = inst_25843);
(statearr_25895[(9)] = inst_25833__$1);
(statearr_25895[(10)] = inst_25836__$1);
(statearr_25895[(11)] = inst_25835__$1);
(statearr_25895[(12)] = inst_25834__$1);
return statearr_25895;
})();var statearr_25896_25931 = state_25881__$1;(statearr_25896_25931[(2)] = null);
(statearr_25896_25931[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25882 === (22)))
{var state_25881__$1 = state_25881;var statearr_25897_25932 = state_25881__$1;(statearr_25897_25932[(2)] = null);
(statearr_25897_25932[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25882 === (6)))
{var inst_25822 = (state_25881[(13)]);var inst_25831 = f.call(null,inst_25822);var inst_25832 = cljs.core.seq.call(null,inst_25831);var inst_25833 = inst_25832;var inst_25834 = null;var inst_25835 = (0);var inst_25836 = (0);var state_25881__$1 = (function (){var statearr_25898 = state_25881;(statearr_25898[(9)] = inst_25833);
(statearr_25898[(10)] = inst_25836);
(statearr_25898[(11)] = inst_25835);
(statearr_25898[(12)] = inst_25834);
return statearr_25898;
})();var statearr_25899_25933 = state_25881__$1;(statearr_25899_25933[(2)] = null);
(statearr_25899_25933[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25882 === (17)))
{var inst_25847 = (state_25881[(7)]);var inst_25851 = cljs.core.chunk_first.call(null,inst_25847);var inst_25852 = cljs.core.chunk_rest.call(null,inst_25847);var inst_25853 = cljs.core.count.call(null,inst_25851);var inst_25833 = inst_25852;var inst_25834 = inst_25851;var inst_25835 = inst_25853;var inst_25836 = (0);var state_25881__$1 = (function (){var statearr_25900 = state_25881;(statearr_25900[(9)] = inst_25833);
(statearr_25900[(10)] = inst_25836);
(statearr_25900[(11)] = inst_25835);
(statearr_25900[(12)] = inst_25834);
return statearr_25900;
})();var statearr_25901_25934 = state_25881__$1;(statearr_25901_25934[(2)] = null);
(statearr_25901_25934[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25882 === (3)))
{var inst_25879 = (state_25881[(2)]);var state_25881__$1 = state_25881;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25881__$1,inst_25879);
} else
{if((state_val_25882 === (12)))
{var inst_25867 = (state_25881[(2)]);var state_25881__$1 = state_25881;var statearr_25902_25935 = state_25881__$1;(statearr_25902_25935[(2)] = inst_25867);
(statearr_25902_25935[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25882 === (2)))
{var state_25881__$1 = state_25881;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25881__$1,(4),in$);
} else
{if((state_val_25882 === (23)))
{var inst_25875 = (state_25881[(2)]);var state_25881__$1 = state_25881;var statearr_25903_25936 = state_25881__$1;(statearr_25903_25936[(2)] = inst_25875);
(statearr_25903_25936[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25882 === (19)))
{var inst_25862 = (state_25881[(2)]);var state_25881__$1 = state_25881;var statearr_25904_25937 = state_25881__$1;(statearr_25904_25937[(2)] = inst_25862);
(statearr_25904_25937[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25882 === (11)))
{var inst_25847 = (state_25881[(7)]);var inst_25833 = (state_25881[(9)]);var inst_25847__$1 = cljs.core.seq.call(null,inst_25833);var state_25881__$1 = (function (){var statearr_25905 = state_25881;(statearr_25905[(7)] = inst_25847__$1);
return statearr_25905;
})();if(inst_25847__$1)
{var statearr_25906_25938 = state_25881__$1;(statearr_25906_25938[(1)] = (14));
} else
{var statearr_25907_25939 = state_25881__$1;(statearr_25907_25939[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25882 === (9)))
{var inst_25869 = (state_25881[(2)]);var inst_25870 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_25881__$1 = (function (){var statearr_25908 = state_25881;(statearr_25908[(15)] = inst_25869);
return statearr_25908;
})();if(cljs.core.truth_(inst_25870))
{var statearr_25909_25940 = state_25881__$1;(statearr_25909_25940[(1)] = (21));
} else
{var statearr_25910_25941 = state_25881__$1;(statearr_25910_25941[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25882 === (5)))
{var inst_25825 = cljs.core.async.close_BANG_.call(null,out);var state_25881__$1 = state_25881;var statearr_25911_25942 = state_25881__$1;(statearr_25911_25942[(2)] = inst_25825);
(statearr_25911_25942[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25882 === (14)))
{var inst_25847 = (state_25881[(7)]);var inst_25849 = cljs.core.chunked_seq_QMARK_.call(null,inst_25847);var state_25881__$1 = state_25881;if(inst_25849)
{var statearr_25912_25943 = state_25881__$1;(statearr_25912_25943[(1)] = (17));
} else
{var statearr_25913_25944 = state_25881__$1;(statearr_25913_25944[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25882 === (16)))
{var inst_25865 = (state_25881[(2)]);var state_25881__$1 = state_25881;var statearr_25914_25945 = state_25881__$1;(statearr_25914_25945[(2)] = inst_25865);
(statearr_25914_25945[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25882 === (10)))
{var inst_25836 = (state_25881[(10)]);var inst_25834 = (state_25881[(12)]);var inst_25841 = cljs.core._nth.call(null,inst_25834,inst_25836);var state_25881__$1 = state_25881;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25881__$1,(13),out,inst_25841);
} else
{if((state_val_25882 === (18)))
{var inst_25847 = (state_25881[(7)]);var inst_25856 = cljs.core.first.call(null,inst_25847);var state_25881__$1 = state_25881;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25881__$1,(20),out,inst_25856);
} else
{if((state_val_25882 === (8)))
{var inst_25836 = (state_25881[(10)]);var inst_25835 = (state_25881[(11)]);var inst_25838 = (inst_25836 < inst_25835);var inst_25839 = inst_25838;var state_25881__$1 = state_25881;if(cljs.core.truth_(inst_25839))
{var statearr_25915_25946 = state_25881__$1;(statearr_25915_25946[(1)] = (10));
} else
{var statearr_25916_25947 = state_25881__$1;(statearr_25916_25947[(1)] = (11));
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
var state_machine__9111__auto____0 = (function (){var statearr_25920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25920[(0)] = state_machine__9111__auto__);
(statearr_25920[(1)] = (1));
return statearr_25920;
});
var state_machine__9111__auto____1 = (function (state_25881){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25881);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25921){if((e25921 instanceof Object))
{var ex__9114__auto__ = e25921;var statearr_25922_25948 = state_25881;(statearr_25922_25948[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25881);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25921;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25949 = state_25881;
state_25881 = G__25949;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25881){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_25923 = f__9126__auto__.call(null);(statearr_25923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_25923;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26046 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26046,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26046,out){
return (function (state_26021){var state_val_26022 = (state_26021[(1)]);if((state_val_26022 === (7)))
{var inst_26016 = (state_26021[(2)]);var state_26021__$1 = state_26021;var statearr_26023_26047 = state_26021__$1;(statearr_26023_26047[(2)] = inst_26016);
(statearr_26023_26047[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26022 === (1)))
{var inst_25998 = null;var state_26021__$1 = (function (){var statearr_26024 = state_26021;(statearr_26024[(7)] = inst_25998);
return statearr_26024;
})();var statearr_26025_26048 = state_26021__$1;(statearr_26025_26048[(2)] = null);
(statearr_26025_26048[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26022 === (4)))
{var inst_26001 = (state_26021[(8)]);var inst_26001__$1 = (state_26021[(2)]);var inst_26002 = (inst_26001__$1 == null);var inst_26003 = cljs.core.not.call(null,inst_26002);var state_26021__$1 = (function (){var statearr_26026 = state_26021;(statearr_26026[(8)] = inst_26001__$1);
return statearr_26026;
})();if(inst_26003)
{var statearr_26027_26049 = state_26021__$1;(statearr_26027_26049[(1)] = (5));
} else
{var statearr_26028_26050 = state_26021__$1;(statearr_26028_26050[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26022 === (6)))
{var state_26021__$1 = state_26021;var statearr_26029_26051 = state_26021__$1;(statearr_26029_26051[(2)] = null);
(statearr_26029_26051[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26022 === (3)))
{var inst_26018 = (state_26021[(2)]);var inst_26019 = cljs.core.async.close_BANG_.call(null,out);var state_26021__$1 = (function (){var statearr_26030 = state_26021;(statearr_26030[(9)] = inst_26018);
return statearr_26030;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26021__$1,inst_26019);
} else
{if((state_val_26022 === (2)))
{var state_26021__$1 = state_26021;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26021__$1,(4),ch);
} else
{if((state_val_26022 === (11)))
{var inst_26001 = (state_26021[(8)]);var inst_26010 = (state_26021[(2)]);var inst_25998 = inst_26001;var state_26021__$1 = (function (){var statearr_26031 = state_26021;(statearr_26031[(10)] = inst_26010);
(statearr_26031[(7)] = inst_25998);
return statearr_26031;
})();var statearr_26032_26052 = state_26021__$1;(statearr_26032_26052[(2)] = null);
(statearr_26032_26052[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26022 === (9)))
{var inst_26001 = (state_26021[(8)]);var state_26021__$1 = state_26021;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26021__$1,(11),out,inst_26001);
} else
{if((state_val_26022 === (5)))
{var inst_26001 = (state_26021[(8)]);var inst_25998 = (state_26021[(7)]);var inst_26005 = cljs.core._EQ_.call(null,inst_26001,inst_25998);var state_26021__$1 = state_26021;if(inst_26005)
{var statearr_26034_26053 = state_26021__$1;(statearr_26034_26053[(1)] = (8));
} else
{var statearr_26035_26054 = state_26021__$1;(statearr_26035_26054[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26022 === (10)))
{var inst_26013 = (state_26021[(2)]);var state_26021__$1 = state_26021;var statearr_26036_26055 = state_26021__$1;(statearr_26036_26055[(2)] = inst_26013);
(statearr_26036_26055[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26022 === (8)))
{var inst_25998 = (state_26021[(7)]);var tmp26033 = inst_25998;var inst_25998__$1 = tmp26033;var state_26021__$1 = (function (){var statearr_26037 = state_26021;(statearr_26037[(7)] = inst_25998__$1);
return statearr_26037;
})();var statearr_26038_26056 = state_26021__$1;(statearr_26038_26056[(2)] = null);
(statearr_26038_26056[(1)] = (2));
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
});})(c__9125__auto___26046,out))
;return ((function (switch__9110__auto__,c__9125__auto___26046,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26042 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26042[(0)] = state_machine__9111__auto__);
(statearr_26042[(1)] = (1));
return statearr_26042;
});
var state_machine__9111__auto____1 = (function (state_26021){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26021);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26043){if((e26043 instanceof Object))
{var ex__9114__auto__ = e26043;var statearr_26044_26057 = state_26021;(statearr_26044_26057[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26021);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26043;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26058 = state_26021;
state_26021 = G__26058;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26021){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26046,out))
})();var state__9127__auto__ = (function (){var statearr_26045 = f__9126__auto__.call(null);(statearr_26045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26046);
return statearr_26045;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26046,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26193 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26193,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26193,out){
return (function (state_26163){var state_val_26164 = (state_26163[(1)]);if((state_val_26164 === (7)))
{var inst_26159 = (state_26163[(2)]);var state_26163__$1 = state_26163;var statearr_26165_26194 = state_26163__$1;(statearr_26165_26194[(2)] = inst_26159);
(statearr_26165_26194[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26164 === (1)))
{var inst_26126 = (new Array(n));var inst_26127 = inst_26126;var inst_26128 = (0);var state_26163__$1 = (function (){var statearr_26166 = state_26163;(statearr_26166[(7)] = inst_26127);
(statearr_26166[(8)] = inst_26128);
return statearr_26166;
})();var statearr_26167_26195 = state_26163__$1;(statearr_26167_26195[(2)] = null);
(statearr_26167_26195[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26164 === (4)))
{var inst_26131 = (state_26163[(9)]);var inst_26131__$1 = (state_26163[(2)]);var inst_26132 = (inst_26131__$1 == null);var inst_26133 = cljs.core.not.call(null,inst_26132);var state_26163__$1 = (function (){var statearr_26168 = state_26163;(statearr_26168[(9)] = inst_26131__$1);
return statearr_26168;
})();if(inst_26133)
{var statearr_26169_26196 = state_26163__$1;(statearr_26169_26196[(1)] = (5));
} else
{var statearr_26170_26197 = state_26163__$1;(statearr_26170_26197[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26164 === (15)))
{var inst_26153 = (state_26163[(2)]);var state_26163__$1 = state_26163;var statearr_26171_26198 = state_26163__$1;(statearr_26171_26198[(2)] = inst_26153);
(statearr_26171_26198[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26164 === (13)))
{var state_26163__$1 = state_26163;var statearr_26172_26199 = state_26163__$1;(statearr_26172_26199[(2)] = null);
(statearr_26172_26199[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26164 === (6)))
{var inst_26128 = (state_26163[(8)]);var inst_26149 = (inst_26128 > (0));var state_26163__$1 = state_26163;if(cljs.core.truth_(inst_26149))
{var statearr_26173_26200 = state_26163__$1;(statearr_26173_26200[(1)] = (12));
} else
{var statearr_26174_26201 = state_26163__$1;(statearr_26174_26201[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26164 === (3)))
{var inst_26161 = (state_26163[(2)]);var state_26163__$1 = state_26163;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26163__$1,inst_26161);
} else
{if((state_val_26164 === (12)))
{var inst_26127 = (state_26163[(7)]);var inst_26151 = cljs.core.vec.call(null,inst_26127);var state_26163__$1 = state_26163;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26163__$1,(15),out,inst_26151);
} else
{if((state_val_26164 === (2)))
{var state_26163__$1 = state_26163;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26163__$1,(4),ch);
} else
{if((state_val_26164 === (11)))
{var inst_26143 = (state_26163[(2)]);var inst_26144 = (new Array(n));var inst_26127 = inst_26144;var inst_26128 = (0);var state_26163__$1 = (function (){var statearr_26175 = state_26163;(statearr_26175[(10)] = inst_26143);
(statearr_26175[(7)] = inst_26127);
(statearr_26175[(8)] = inst_26128);
return statearr_26175;
})();var statearr_26176_26202 = state_26163__$1;(statearr_26176_26202[(2)] = null);
(statearr_26176_26202[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26164 === (9)))
{var inst_26127 = (state_26163[(7)]);var inst_26141 = cljs.core.vec.call(null,inst_26127);var state_26163__$1 = state_26163;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26163__$1,(11),out,inst_26141);
} else
{if((state_val_26164 === (5)))
{var inst_26131 = (state_26163[(9)]);var inst_26127 = (state_26163[(7)]);var inst_26136 = (state_26163[(11)]);var inst_26128 = (state_26163[(8)]);var inst_26135 = (inst_26127[inst_26128] = inst_26131);var inst_26136__$1 = (inst_26128 + (1));var inst_26137 = (inst_26136__$1 < n);var state_26163__$1 = (function (){var statearr_26177 = state_26163;(statearr_26177[(12)] = inst_26135);
(statearr_26177[(11)] = inst_26136__$1);
return statearr_26177;
})();if(cljs.core.truth_(inst_26137))
{var statearr_26178_26203 = state_26163__$1;(statearr_26178_26203[(1)] = (8));
} else
{var statearr_26179_26204 = state_26163__$1;(statearr_26179_26204[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26164 === (14)))
{var inst_26156 = (state_26163[(2)]);var inst_26157 = cljs.core.async.close_BANG_.call(null,out);var state_26163__$1 = (function (){var statearr_26181 = state_26163;(statearr_26181[(13)] = inst_26156);
return statearr_26181;
})();var statearr_26182_26205 = state_26163__$1;(statearr_26182_26205[(2)] = inst_26157);
(statearr_26182_26205[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26164 === (10)))
{var inst_26147 = (state_26163[(2)]);var state_26163__$1 = state_26163;var statearr_26183_26206 = state_26163__$1;(statearr_26183_26206[(2)] = inst_26147);
(statearr_26183_26206[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26164 === (8)))
{var inst_26127 = (state_26163[(7)]);var inst_26136 = (state_26163[(11)]);var tmp26180 = inst_26127;var inst_26127__$1 = tmp26180;var inst_26128 = inst_26136;var state_26163__$1 = (function (){var statearr_26184 = state_26163;(statearr_26184[(7)] = inst_26127__$1);
(statearr_26184[(8)] = inst_26128);
return statearr_26184;
})();var statearr_26185_26207 = state_26163__$1;(statearr_26185_26207[(2)] = null);
(statearr_26185_26207[(1)] = (2));
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
});})(c__9125__auto___26193,out))
;return ((function (switch__9110__auto__,c__9125__auto___26193,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26189[(0)] = state_machine__9111__auto__);
(statearr_26189[(1)] = (1));
return statearr_26189;
});
var state_machine__9111__auto____1 = (function (state_26163){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26163);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26190){if((e26190 instanceof Object))
{var ex__9114__auto__ = e26190;var statearr_26191_26208 = state_26163;(statearr_26191_26208[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26163);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26190;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26209 = state_26163;
state_26163 = G__26209;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26163){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26193,out))
})();var state__9127__auto__ = (function (){var statearr_26192 = f__9126__auto__.call(null);(statearr_26192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26193);
return statearr_26192;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26193,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26352 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26352,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26352,out){
return (function (state_26322){var state_val_26323 = (state_26322[(1)]);if((state_val_26323 === (7)))
{var inst_26318 = (state_26322[(2)]);var state_26322__$1 = state_26322;var statearr_26324_26353 = state_26322__$1;(statearr_26324_26353[(2)] = inst_26318);
(statearr_26324_26353[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26323 === (1)))
{var inst_26281 = [];var inst_26282 = inst_26281;var inst_26283 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_26322__$1 = (function (){var statearr_26325 = state_26322;(statearr_26325[(7)] = inst_26283);
(statearr_26325[(8)] = inst_26282);
return statearr_26325;
})();var statearr_26326_26354 = state_26322__$1;(statearr_26326_26354[(2)] = null);
(statearr_26326_26354[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26323 === (4)))
{var inst_26286 = (state_26322[(9)]);var inst_26286__$1 = (state_26322[(2)]);var inst_26287 = (inst_26286__$1 == null);var inst_26288 = cljs.core.not.call(null,inst_26287);var state_26322__$1 = (function (){var statearr_26327 = state_26322;(statearr_26327[(9)] = inst_26286__$1);
return statearr_26327;
})();if(inst_26288)
{var statearr_26328_26355 = state_26322__$1;(statearr_26328_26355[(1)] = (5));
} else
{var statearr_26329_26356 = state_26322__$1;(statearr_26329_26356[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26323 === (15)))
{var inst_26312 = (state_26322[(2)]);var state_26322__$1 = state_26322;var statearr_26330_26357 = state_26322__$1;(statearr_26330_26357[(2)] = inst_26312);
(statearr_26330_26357[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26323 === (13)))
{var state_26322__$1 = state_26322;var statearr_26331_26358 = state_26322__$1;(statearr_26331_26358[(2)] = null);
(statearr_26331_26358[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26323 === (6)))
{var inst_26282 = (state_26322[(8)]);var inst_26307 = inst_26282.length;var inst_26308 = (inst_26307 > (0));var state_26322__$1 = state_26322;if(cljs.core.truth_(inst_26308))
{var statearr_26332_26359 = state_26322__$1;(statearr_26332_26359[(1)] = (12));
} else
{var statearr_26333_26360 = state_26322__$1;(statearr_26333_26360[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26323 === (3)))
{var inst_26320 = (state_26322[(2)]);var state_26322__$1 = state_26322;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26322__$1,inst_26320);
} else
{if((state_val_26323 === (12)))
{var inst_26282 = (state_26322[(8)]);var inst_26310 = cljs.core.vec.call(null,inst_26282);var state_26322__$1 = state_26322;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26322__$1,(15),out,inst_26310);
} else
{if((state_val_26323 === (2)))
{var state_26322__$1 = state_26322;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26322__$1,(4),ch);
} else
{if((state_val_26323 === (11)))
{var inst_26286 = (state_26322[(9)]);var inst_26290 = (state_26322[(10)]);var inst_26300 = (state_26322[(2)]);var inst_26301 = [];var inst_26302 = inst_26301.push(inst_26286);var inst_26282 = inst_26301;var inst_26283 = inst_26290;var state_26322__$1 = (function (){var statearr_26334 = state_26322;(statearr_26334[(7)] = inst_26283);
(statearr_26334[(8)] = inst_26282);
(statearr_26334[(11)] = inst_26300);
(statearr_26334[(12)] = inst_26302);
return statearr_26334;
})();var statearr_26335_26361 = state_26322__$1;(statearr_26335_26361[(2)] = null);
(statearr_26335_26361[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26323 === (9)))
{var inst_26282 = (state_26322[(8)]);var inst_26298 = cljs.core.vec.call(null,inst_26282);var state_26322__$1 = state_26322;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26322__$1,(11),out,inst_26298);
} else
{if((state_val_26323 === (5)))
{var inst_26283 = (state_26322[(7)]);var inst_26286 = (state_26322[(9)]);var inst_26290 = (state_26322[(10)]);var inst_26290__$1 = f.call(null,inst_26286);var inst_26291 = cljs.core._EQ_.call(null,inst_26290__$1,inst_26283);var inst_26292 = cljs.core.keyword_identical_QMARK_.call(null,inst_26283,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_26293 = (inst_26291) || (inst_26292);var state_26322__$1 = (function (){var statearr_26336 = state_26322;(statearr_26336[(10)] = inst_26290__$1);
return statearr_26336;
})();if(cljs.core.truth_(inst_26293))
{var statearr_26337_26362 = state_26322__$1;(statearr_26337_26362[(1)] = (8));
} else
{var statearr_26338_26363 = state_26322__$1;(statearr_26338_26363[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26323 === (14)))
{var inst_26315 = (state_26322[(2)]);var inst_26316 = cljs.core.async.close_BANG_.call(null,out);var state_26322__$1 = (function (){var statearr_26340 = state_26322;(statearr_26340[(13)] = inst_26315);
return statearr_26340;
})();var statearr_26341_26364 = state_26322__$1;(statearr_26341_26364[(2)] = inst_26316);
(statearr_26341_26364[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26323 === (10)))
{var inst_26305 = (state_26322[(2)]);var state_26322__$1 = state_26322;var statearr_26342_26365 = state_26322__$1;(statearr_26342_26365[(2)] = inst_26305);
(statearr_26342_26365[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26323 === (8)))
{var inst_26282 = (state_26322[(8)]);var inst_26286 = (state_26322[(9)]);var inst_26290 = (state_26322[(10)]);var inst_26295 = inst_26282.push(inst_26286);var tmp26339 = inst_26282;var inst_26282__$1 = tmp26339;var inst_26283 = inst_26290;var state_26322__$1 = (function (){var statearr_26343 = state_26322;(statearr_26343[(7)] = inst_26283);
(statearr_26343[(8)] = inst_26282__$1);
(statearr_26343[(14)] = inst_26295);
return statearr_26343;
})();var statearr_26344_26366 = state_26322__$1;(statearr_26344_26366[(2)] = null);
(statearr_26344_26366[(1)] = (2));
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
});})(c__9125__auto___26352,out))
;return ((function (switch__9110__auto__,c__9125__auto___26352,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26348[(0)] = state_machine__9111__auto__);
(statearr_26348[(1)] = (1));
return statearr_26348;
});
var state_machine__9111__auto____1 = (function (state_26322){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26322);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26349){if((e26349 instanceof Object))
{var ex__9114__auto__ = e26349;var statearr_26350_26367 = state_26322;(statearr_26350_26367[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26322);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26349;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26368 = state_26322;
state_26322 = G__26368;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26322){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26352,out))
})();var state__9127__auto__ = (function (){var statearr_26351 = f__9126__auto__.call(null);(statearr_26351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26352);
return statearr_26351;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26352,out))
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
